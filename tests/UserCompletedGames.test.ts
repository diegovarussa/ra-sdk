import { client } from "../src/config";
import GameCompleted from "../src/models/GameCompleted";

describe('User completed games test', function () {

    it('should have correct API result', async () => {
        const games = await client.getUserCompletedGames();
        for (let i = 0; i < games.length; i++) {
            const game = games[i];
            expect(game).toBeInstanceOf(GameCompleted);
            expect(typeof game.id).toStrictEqual('number');
            expect(typeof game.title).toStrictEqual('string');
            expect(typeof game.imageIcon).toStrictEqual('string');
            expect(typeof game.consoleID).toStrictEqual('number');
            expect(typeof game.consoleName).toStrictEqual('string');
            expect(typeof game.maxPossible).toStrictEqual('number');
            expect(typeof game.numAwarded).toStrictEqual('number');
            expect(typeof game.percentageWon).toStrictEqual('number');
            expect(typeof game.hardcoreMode).toStrictEqual('boolean');
        }
    });

});