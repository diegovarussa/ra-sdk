import { client, gameId } from "../src/config";
import AchievementCount from "../src/models/AchievementCount";

describe('Achievement count test', function () {

    it('should have correct API result', async () => {
        const achievementCount = await client.getAchievementCount(gameId);
        expect(achievementCount).toBeInstanceOf(AchievementCount);
        expect(typeof achievementCount.gameId).toStrictEqual('number');
        for (let i = 0; i < achievementCount.achievementIds.length; i++) {
            expect(typeof achievementCount.achievementIds[i]).toStrictEqual('number');
        }
    });

});