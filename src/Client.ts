import Game from "./models/Game";

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
        const game = new Game(result);
        return game;
    }

    public async getGameExtended(id: number) {
        const url = this._buildUrl('GameExtended', { i: id });
        return await this._requestApi(url);
    }
}