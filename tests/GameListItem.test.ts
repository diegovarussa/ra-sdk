import { client, consoleId } from "../src/config";
import GameListItem from "../src/models/GameListItem";

describe('Game list test', function () {

    it('should have correct API result', async () => {
        const gameList = await client.getGameList(consoleId,1,1);
        for (let i = 0; i < gameList.length; i++) {
            const game = gameList[i];
            expect(game).toBeInstanceOf(GameListItem);
            expect(typeof game.id).toStrictEqual('number');
            expect(typeof game.title).toStrictEqual('string');
            expect(typeof game.consoleID).toStrictEqual('number');
            expect(typeof game.consoleName).toStrictEqual('string');
            expect(typeof game.imageIcon).toStrictEqual('string');
            expect(typeof game.numAchievements).toStrictEqual('number');
            expect(typeof game.numLeaderboards).toStrictEqual('number');
            expect(typeof game.points).toStrictEqual('number');
            expect(isNaN(game.dateModified.getDate())).toBeFalsy();
            expect(typeof game.forumTopicId).toStrictEqual('number');

            game.hashes.forEach((hash) => {
                expect(typeof hash).toStrictEqual('string');
            })
        }
    });

});