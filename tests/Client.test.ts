import Client from "../src/Client"
import Game from "../src/models/Game";
import * as dotenv from 'dotenv';
dotenv.config();

let client: Client;
beforeAll(() => {
    const userName = process.env.USER_NAME as string;
    const webApiKey = process.env.WEB_API_KEY as string;
    client = new Client(userName, webApiKey);
})

describe('Client test', function () {
    it('should have correct game API result', async () => {
        // const randomNumber = Math.round(Math.random() * 1000);
        const result = await client.getGame(788);
        console.log(result);
        expect(result).toBeInstanceOf(Game);
        expect(typeof result.id).toStrictEqual('number');
        expect(typeof result.title).toStrictEqual('string');
        expect(typeof result.gameTitle).toStrictEqual('string');
        expect(typeof result.consoleID).toStrictEqual('number');
        expect(typeof result.consoleName).toStrictEqual('string');
        expect(typeof result.console).toStrictEqual('string');
        expect(typeof result.forumTopicId).toStrictEqual('number');
        expect(result.flags).toStrictEqual(null);
        expect(typeof result.gameIcon).toStrictEqual('string');
        expect(typeof result.imageIcon).toStrictEqual('string');
        expect(typeof result.imageTitle).toStrictEqual('string');
        expect(typeof result.imageInGame).toStrictEqual('string');
        expect(typeof result.imageBoxArt).toStrictEqual('string');
        expect(typeof result.publisher).toStrictEqual('string');
        expect(typeof result.developer).toStrictEqual('string');
        expect(typeof result.genre).toStrictEqual('string');
        expect(result.released).toBeInstanceOf(Date);
    });
});