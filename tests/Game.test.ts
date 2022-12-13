import Client from "../src/Client"
import Game from "../src/models/Game";
import * as dotenv from 'dotenv';
dotenv.config();

let client: Client;
let game: Game;

beforeAll(async () => {
    const userName = process.env.USER_NAME as string;
    const webApiKey = process.env.WEB_API_KEY as string;
    client = new Client(userName, webApiKey);
    game = await client.getGame(515);
})

describe('Game extended test', function () {

    it('should have correct API result', async () => {
        expect(game).toBeInstanceOf(Game);
        expect(typeof game.id).toStrictEqual('number');
        expect(typeof game.title).toStrictEqual('string');
        expect(typeof game.gameTitle).toStrictEqual('string');
        expect(typeof game.consoleID).toStrictEqual('number');
        expect(typeof game.consoleName).toStrictEqual('string');
        expect(typeof game.console).toStrictEqual('string');
        expect(typeof game.forumTopicId).toStrictEqual('number');
        expect(game.flags).toStrictEqual(0);
        expect(typeof game.gameIcon).toStrictEqual('string');
        expect(typeof game.imageIcon).toStrictEqual('string');
        expect(typeof game.imageTitle).toStrictEqual('string');
        expect(typeof game.imageInGame).toStrictEqual('string');
        expect(typeof game.imageBoxArt).toStrictEqual('string');
        expect(typeof game.publisher).toStrictEqual('string');
        expect(typeof game.developer).toStrictEqual('string');
        expect(typeof game.genre).toStrictEqual('string');
        expect(game.released).toBeInstanceOf(Date);
    });

});