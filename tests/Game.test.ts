import { client, gameId } from "../src/config";
import Game from "../src/models/Game";

describe('Game extended test', function () {

    it('should have correct API result', async () => {
        const game = await client.getGame(gameId);
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