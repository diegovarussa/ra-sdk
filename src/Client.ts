import HtmlParser from "./HtmlParser";
import AchievementCount from "./models/AchievementCount";
import AchievementDistribution, { FLAG_FILTER, TYPE_FILTER } from "./models/AchievementDistribution";
import AchievementOfTheWeek from "./models/AchievementOfTheWeek";
import AchievementUnlocks from "./models/AchievementUnlocks";
import ActiveClaim from "./models/ActiveClaim";
import Console from "./models/Console";
import Game from "./models/Game";
import GameCompleted from "./models/GameCompleted";
import GameExtended from "./models/GameExtended";
import GameListItem from "./models/GameListItem";
import GameRankScoreItem from "./models/GameRankScoreItem";
import GameRating from "./models/GameRating";
import GameRecent from "./models/GameRecent";
import GameUserProgress from "./models/GameUserProgress";
import UserAchievement from "./models/UserAchievement";
import UserProgress from "./models/UserProgress";
import UserRankAndScore from "./models/UserRankAndScore";
import UserSummary from "./models/UserSummary";
import UserTopTen from "./models/UserTopTen";
import { isBrowser } from "browser-or-node";

export default class Client {
    private _baseUrl = 'https://retroachievements.org';
    private _pathnamePrefix = 'API/API_Get';
    private _pathnameSuffix = '.php';
    private _userName: string;
    private _webApiKey: string;
    private _corsProxy: string;
    
    /** Base url to fetch media */
    public static MEDIA_URL = 'https://media.retroachievements.org';
    /** Base url to fetch the user picture */
    public static USER_MEDIA_URL = `${Client.MEDIA_URL}/UserPic`;
    /** Base url to fetch the badge picture */
    public static BADGE_MEDIA_URL = 'https://s3-eu-west-1.amazonaws.com/i.retroachievements.org/Badge';

    public constructor(userName: string, webApiKey: string, corsProxy: string = 'https://corsproxy.io/?') {
        this._userName = userName;
        this._webApiKey = webApiKey;
        this._corsProxy = (isBrowser) ? corsProxy : '';
    }

    /**
     * Create URL dynamically based on parameters
     */
    private _buildUrl(pathname: string, searchParams?: object) {
        const url = new URL(`${this._pathnamePrefix}${pathname}${this._pathnameSuffix}`, this._baseUrl);
        // url.searchParams.set('z', this._userName); maybe don´t need to send username on every request
        url.searchParams.set('y', this._webApiKey);

        if (searchParams && Object.keys(searchParams).length !== 0) {
            Object.entries(searchParams).forEach(([key, value]) => {
                url.searchParams.set(key, value);
            });
        }

        return url.toString();
    }

    private async _requestApi(url: string) {
        try {
            const apiResult = await fetch(url);
            if (apiResult.status > 399) {
                throw new Error(`Invalid request, please check your parameters - ${apiResult.status}`);
            }
            const json = await apiResult.json();
            return json; 
        } catch (error) {
            throw new Error(String(error));
        }
    }

    /**
     * Check if the username and web api key are valid for requests
     */
    public async isCredentialsValid() {
        let result = {
            valid: true,
            message: '',
        }
        try {
            await this.getUserSummary();
        } catch (error) {
            result.valid = false;
            const statusCode = Number(String(error).split('- ')[1]);
            if (statusCode === 401) {
                result.message = 'Invalid Web API Key';
            }
            if (statusCode === 404) {
                result.message = 'Invalid Username';
            }
        }

        return result;
    }

    /**
     * Returns information about a game
     * 
     * @param id Game ID
     */
    public async getGame(id: number) {
        const url = this._buildUrl('Game', { i: id });
        const result = await this._requestApi(url);
        const object = new Game(result);
        return object;
    }

    /**
     * Returns extended information about a game
     * 
     * @param id Game ID
     */
    public async getGameExtended(id: number) {
        const url = this._buildUrl('GameExtended', { i: id });
        const result = await this._requestApi(url);
        const object = new GameExtended(result);
        return object;
    }

    /**
     * Return the achievements associated to a game
     * 
     * @param id Game ID
     */
    public async getAchievementCount(id: number) {
        const url = this._buildUrl('AchievementCount', { i: id });
        const result = await this._requestApi(url);
        const object = new AchievementCount(result);
        return object;
    }

    /**
     * Returns a mapping of the number of players who have earned each quantity of achievements for a game
     * 
     * @param id Game ID
     * @param type Filter by type (default: TYPE_FILTER.ALL)
     * @param flag Filter by flag (default: FLAG_FILTER.CORE_ACHIEVEMENTS)
     */
    public async getAchievementDistribution(id: number, type?: TYPE_FILTER, flag?: FLAG_FILTER) {
        type = type || TYPE_FILTER.ALL;
        flag = flag || FLAG_FILTER.CORE_ACHIEVEMENTS;
        const url = this._buildUrl('AchievementDistribution', { i: id, h: type, f: flag });
        const result = await this._requestApi(url);
        const object = new AchievementDistribution(result);
        return object;
    }

    /**
     * Return the achievement of the week and people who unlocked it
     */
    public async getAchievementOfTheWeek() {
        const url = this._buildUrl('AchievementOfTheWeek');
        const result = await this._requestApi(url);
        const object = new AchievementOfTheWeek(result);
        return object;
    }

    /**
     * Return the unlocks of the achievement
     * @param id Achievement ID
     * @param offset Number of entries to skip (default: 0)
     * @param count Number of entries to return (default: 50, max: 500)
     */
    public async getAchievementUnlocks(id: number, offset: number = 0, count: number = 50) {
        const url = this._buildUrl('AchievementUnlocks', { a: id, o: offset, c: count });
        const result = await this._requestApi(url);
        const object = new AchievementUnlocks(result);
        return object;
    }

    /**
     * Returns achievements earned by a user between two timestamps
     * @param from Unix Timestamp to date to start query
     * @param to Unix Timestamp to date to end query
     * @param user Achievement user (default: current api key user)
     */
    public async getAchievementsEarnedBetween(from: number, to: number, user?: string): Promise<UserAchievement[]> {
        user = user || this._userName;
        const url = this._buildUrl('AchievementsEarnedBetween', { u: user, f: from, t: to });
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new UserAchievement(result[i]))
        }

        return array;
    }

    /**
     * Returns achievements earned by a user in one day
     * @param day Day to filter (YYYY-MM-DD)
     * @param user Achievement user (default: current api key user)
     */
    public async getAchievementsEarnedOnDay(day: string, user?: string): Promise<UserAchievement[]> {
        user = user || this._userName;
        const url = this._buildUrl('AchievementsEarnedOnDay', { u: user, d: day });
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new UserAchievement(result[i]));
        }

        return array;
    }

    /**
     * Returns information about all (1000 max) active set claims
     */
    public async getActiveClaims(): Promise<ActiveClaim[]> {
        const url = this._buildUrl('ActiveClaims');
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new ActiveClaim(result[i]));
        }

        return array;
    }

    /**
     * Returns information about all claims form the user
     */
    public async getUserClaims(): Promise<ActiveClaim[]> {
        const url = this._buildUrl('UserClaims');
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new ActiveClaim(result[i]));
        }

        return array;
    }

    /**
     * Returns mapping of known consoles
     */
    public async getGetConsoleIDs(): Promise<Console[]> {
        const url = this._buildUrl('ConsoleIDs');
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new Console(result[i]));
        }

        return array;
    }

    /**
     * Return game and user progress on achievements
     * @param id Game ID
     * @param username Username (default: current api key user)
     */
    public async getGameUserProgress(id: number, username?: string) {
        const user = username || this._userName;
        const url = this._buildUrl('GameInfoAndUserProgress', { g: id, u: user });
        const result = await this._requestApi(url);
        const object = new GameUserProgress(result);
        return object;
    }

    /**
     * Return an array of GameListItem objects
     * @param id Console ID
     * @param onlyWithAchievements 1=only return games where NumAchievements > 0 (default: 0)
     * @param addHashes 1=also return hashes (default: 0)
     */
    public async getGameList(id: number, onlyWithAchievements: number = 0, addHashes: number = 0): Promise<GameListItem[]> {
        const url = this._buildUrl('GameList', { i: id, f: onlyWithAchievements, h: addHashes });
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new GameListItem(result[i]));
        }

        return array;
    }

    /**
     * Return an array of GameRankScoreItem objects
     * @param id Game ID
     * @param type 1=Latest Masters, 0=High Scores (default: 0)
     */
    public async getGameRankScore(id: number, type: number = 0): Promise<GameRankScoreItem[]> {
        const url = this._buildUrl('GameRankAndScore', { g: id, t: type });
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new GameRankScoreItem(result[i]));
        }

        return array;
    }

    /**
     * Gets the overall rating of the game
     * @param id Game ID
     */
    public async getGameRating(id: number) {
        const url = this._buildUrl('GameRating', { i: id });
        const result = await this._requestApi(url);
        const object = new GameRating(result);
        return object;
    }

    /**
     * Gets information about the top ten users (by score) for the site
     */
    public async getTopTenUsers(): Promise<UserTopTen[]> {
        const url = this._buildUrl('TopTenUsers');
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new UserTopTen(result[i]));
        }

        return array;
    }

    /**
     * Gets all game progress for a user
     * NOTE: each game may appear in the list twice - once for Hardcore and once for Casual
     * @param username Username (default: current api key user)
     */
    public async getUserCompletedGames(username?: string): Promise<GameCompleted[]> {
        const user = username || this._userName;
        const url = this._buildUrl('UserCompletedGames', { u: user });
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new GameCompleted(result[i]));
        }

        return array;
    }

    /**
     * Gets user's High Scores entry for a game
     * @param id Game ID
     * @param username Username (default: current api key user)
     */
    public async getUserGameRankAndScore(id: number, username?: string): Promise<GameRankScoreItem[]> {
        const user = username || this._userName;
        const url = this._buildUrl('UserGameRankAndScore', { g: id, u: user });
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new GameRankScoreItem(result[i]));
        }

        return array;
    }

    /**
     * Gets user's achievement progress for a game list
     * @param ids Game IDs
     * @param username Username (default: current api key user)
     */
    public async getUserProgress(ids: number[], username?: string): Promise<UserProgress[]> {
        const user = username || this._userName;
        const url = this._buildUrl('UserProgress', { i: ids.join(','), u: user });
        const result = await this._requestApi(url);
        let array: UserProgress[] = [];
        Object.entries(result).forEach(([key, value]) => {
            array.push(new UserProgress(Number(key), value));
        });

        return array;
    }

    /**
     * Gets user's achievement progress for a game list
     * @param username Username (default: current api key user)
     */
    public async getUserRankAndScore(username?: string) {
        const user = username || this._userName;
        const url = this._buildUrl('UserRankAndScore', { u: user });
        const result = await this._requestApi(url);
        const object = new UserRankAndScore(result);
        return object;
    }

    /**
     * Return the player recently played games
     * @param username Username (default: current api key user)
     * @param offset Number of entries to skip (default: 0)
     * @param count Number of entries to return (default: 10, max: 50)
     */
    public async getUserRecentlyPlayedGames(username?: string, offset: number = 0, count: number = 10): Promise<GameRecent[]> {
        const user = username || this._userName;
        const url = this._buildUrl('UserRecentlyPlayedGames', { u: user, o: offset, c: count });
        const result = await this._requestApi(url);
        let array = [];
        for (let i = 0; i < result.length; i++) {
            array.push(new GameRecent(result[i]));
        }

        return array;
    }

    /**
     * Return the player summary
     * @param username Username (default: current api key user)
     * @param gameLimit Number of recent games to return (default: 5)
     * @param achievementLimit Number of recent achievements to return (default: 10)
     */
    public async getUserSummary(username?: string, gameLimit: number = 5, achievementLimit: number = 10) {
        const user = username || this._userName;
        const url = this._buildUrl('UserSummary', { u: user, g: gameLimit, a: achievementLimit });
        const result = await this._requestApi(url);
        const object = new UserSummary(result);
        return object;
    }

    /**
     * Return all comments for the achievement
     * @param id Achievement ID
     */
    public async getAchievementComments(id: number) {
        const result = await fetch(`${this._corsProxy}${this._baseUrl}/achievement/${id}`);
        const html = await result.text();
        return HtmlParser.parsePageComments(html);
    }

    /**
     * Return all comments for the game
     * @param id Game ID
     */
    public async getGameComments(id: number) {
        const result = await fetch(`${this._corsProxy}${this._baseUrl}/game/${id}`);
        const html = await result.text();
        return HtmlParser.parsePageComments(html);
    }
}