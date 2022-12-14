import AchievementCount from "./models/AchievementCount";
import AchievementDistribution, { FLAG_FILTER, TYPE_FILTER } from "./models/AchievementDistribution";
import AchievementOfTheWeek from "./models/AchievementOfTheWeek";
import AchievementUnlocks from "./models/AchievementUnlocks";
import Game from "./models/Game";
import GameExtended from "./models/GameExtended";

export default class Client {
    private _base_url = 'https://retroachievements.org';
    private _pathname_prefix = 'API/API_Get';
    private _pathname_suffix = '.php';
    private _userName: string;
    private _webApiKey: string;

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
}