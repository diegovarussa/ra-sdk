import { client, gameId } from "../src/config";
import AchievementDistribution, { TYPE_FILTER } from "../src/models/AchievementDistribution";

describe('Achievement distribution test', function () {

    it('should have correct API result', async () => {
        const achievementDistribution = await client.getAchievementDistribution(gameId);
        expect(achievementDistribution).toBeInstanceOf(AchievementDistribution);
        Object.entries(achievementDistribution.distribution).forEach(([key, value]) => {
            expect(typeof key).toStrictEqual('string');
            expect(typeof value).toStrictEqual('number');
        });
    });

    it('should have correct API result with TYPE_FILTER.HARDCORE_ONLY', async () => {
        const achievementDistribution = await client.getAchievementDistribution(gameId, TYPE_FILTER.HARDCORE_ONLY);
        expect(achievementDistribution).toBeInstanceOf(AchievementDistribution);
        Object.entries(achievementDistribution.distribution).forEach(([key, value]) => {
            expect(typeof key).toStrictEqual('string');
            expect(typeof value).toStrictEqual('number');
        });
    });

});