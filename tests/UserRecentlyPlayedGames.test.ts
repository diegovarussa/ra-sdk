import { client } from "../src/config";
import GameRecent from "../src/models/GameRecent";

describe('User recently played games test', function () {

    it('should have correct API result', async () => {
        const gameList = await client.getUserRecentlyPlayedGames();
        for (let i = 0; i < gameList.length; i++) {
            const game = gameList[i];
            expect(game).toBeInstanceOf(GameRecent);
            expect(typeof game.id).toStrictEqual('number');
            expect(typeof game.title).toStrictEqual('string');
            expect(typeof game.NumPossibleAchievements).toStrictEqual('number');
            expect(typeof game.PossibleScore).toStrictEqual('number');
            expect(typeof game.consoleID).toStrictEqual('number');
            expect(typeof game.consoleName).toStrictEqual('string');
            expect(typeof game.imageIcon).toStrictEqual('string');
            expect(isNaN(game.lastPlayed.getDate())).toBeFalsy();
            // expect(typeof game.MyVote).toStrictEqual('number');
            expect(typeof game.NumAchieved).toStrictEqual('number');
            expect(typeof game.ScoreAchieved).toStrictEqual('number');
            expect(typeof game.NumAchievedHardcore).toStrictEqual('number');
            expect(typeof game.ScoreAchievedHardcore).toStrictEqual('number');
        }
    });

});