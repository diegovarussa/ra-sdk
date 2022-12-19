import AchievementCount from "./models/AchievementCount";
import AchievementDistribution, { FLAG_FILTER, TYPE_FILTER } from "./models/AchievementDistribution";
import AchievementOfTheWeek from "./models/AchievementOfTheWeek";
import AchievementUnlocks from "./models/AchievementUnlocks";
import ActiveClaim from "./models/ActiveClaim";
import Console from "./models/Console";
import Game from "./models/Game";
import GameExtended from "./models/GameExtended";
import GameListItem from "./models/GameListItem";
import GameRankScoreItem from "./models/GameRankScoreItem";
import GameRating from "./models/GameRating";
import GameUserProgress from "./models/GameUserProgress";
import UserAchievement from "./models/UserAchievement";
import UserTopTen from "./models/UserTopTen";

export default class Client {
    private _base_url = 'https://retroachievements.org';
    private _pathname_prefix = 'API/API_Get';
    private _pathname_suffix = '.php';
    private _userName: string;
    private _webApiKey: string;
    public BASE_MEDIA_URL = 'https://media.retroachievements.org';

    public constructor(userName: string, webApiKey: string) {
        this._userName = userName;
        this._webApiKey = webApiKey;
    }

    /**
     * Create URL dynamically based on parameters
     */
    private _buildUrl(pathname: string, searchParams?: object) {
        const url = new URL(`${this._pathname_prefix}${pathname}${this._pathname_suffix}`, this._base_url);
        url.searchParams.set('z', this._userName);
        url.searchParams.set('y', this._webApiKey);

        if (searchParams && Object.keys(searchParams).length !== 0) {
            Object.entries(searchParams).forEach(([key, value]) => {
                url.searchParams.set(key, value);
            });
        }

        return url.toString();
    }

    private async _requestApi(url: string) {
        const apiResult = await fetch(url);
        return await apiResult.json();
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
     * @param user Achievement user
     * @param from Unix Timestamp to date to start query
     * @param to Unix Timestamp to date to end query
     */
    public async getAchievementsEarnedBetween(user: string, from: number, to: number): Promise<UserAchievement[]> {
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
     * @param user Achievement user
     * @param day Day to filter (YYYY-MM-DD)
     */
    public async getAchievementsEarnedOnDay(user: string, day: string): Promise<UserAchievement[]> {
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
     * @param username Username
     */
    public async getGameUserProgress(id: number, username: string) {
        const url = this._buildUrl('GameInfoAndUserProgress', { g: id, u: username });
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
}