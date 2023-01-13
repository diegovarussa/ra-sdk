import { client } from "../src/config";
import UserRankAndScore from "../src/models/UserRankAndScore";

describe('User rank and score test', function () {

    it('should have correct API result', async () => {
        const result = await client.getUserRankAndScore();
        expect(result).toBeInstanceOf(UserRankAndScore);
        expect(typeof result.score).toStrictEqual('number');
        expect(typeof result.softcoreScore).toStrictEqual('number');
        expect(typeof result.rank).toStrictEqual('number');
        expect(typeof result.totalRanked).toStrictEqual('number');
    });

});