import { client, gameId } from "../src/config";
import GameRankScoreItem from "../src/models/GameRankScoreItem";

describe('Game rand and score test', function () {

    it('should have correct API result', async () => {
        const rankScoreList = await client.getGameRankScore(gameId,1);
        for (let i = 0; i < rankScoreList.length; i++) {
            const current = rankScoreList[i];
            expect(current).toBeInstanceOf(GameRankScoreItem);
            expect(typeof current.user).toStrictEqual('string');
            expect(typeof current.totalScore).toStrictEqual('number');
            expect(isNaN(current.lastAward.getDate())).toBeFalsy();
            expect(typeof current.rank).toStrictEqual('number');
        }
    });

});