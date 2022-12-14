import { achievementId, client } from "../src/config";
import AchievementUnlocks from "../src/models/AchievementUnlocks";
import UnlockAchievement from "../src/models/UnlockAchievement";

describe('Achievement unlocks test', function () {

    it('should have correct API result', async () => {
        const achievementUnlocks = await client.getAchievementUnlocks(achievementId);
        expect(achievementUnlocks).toBeInstanceOf(AchievementUnlocks);
        expect(achievementUnlocks.achievement).toBeInstanceOf(UnlockAchievement);
        expect(typeof achievementUnlocks.achievement.id).toStrictEqual('number');
        expect(typeof achievementUnlocks.achievement.title).toStrictEqual('string');
        expect(typeof achievementUnlocks.achievement.description).toStrictEqual('string');
        expect(typeof achievementUnlocks.achievement.points).toStrictEqual('number');
        expect(typeof achievementUnlocks.achievement.trueRatio).toStrictEqual('number');
        expect(typeof achievementUnlocks.achievement.author).toStrictEqual('string');
        expect(isNaN(achievementUnlocks.achievement.dateCreated.getDate())).toBeFalsy();
        expect(isNaN(achievementUnlocks.achievement.dateModified.getDate())).toBeFalsy();
        expect(typeof achievementUnlocks.console.id).toStrictEqual('number');
        expect(typeof achievementUnlocks.console.title).toStrictEqual('string');
        expect(typeof achievementUnlocks.game.id).toStrictEqual('number');
        expect(typeof achievementUnlocks.game.title).toStrictEqual('string');
        expect(typeof achievementUnlocks.totalPlayers).toStrictEqual('number');
        expect(typeof achievementUnlocks.unlocksCount).toStrictEqual('number');
        for (let i = 0; i < achievementUnlocks.unlocks.length; i++) {
            expect(typeof achievementUnlocks.unlocks[i].user).toStrictEqual('string');
            expect(typeof achievementUnlocks.unlocks[i].raPoints).toStrictEqual('number');
            expect(isNaN(achievementUnlocks.unlocks[i].dateAwarded.getDate())).toBeFalsy();
            expect(typeof achievementUnlocks.unlocks[i].hardcoreMode).toStrictEqual('boolean');
        }
    });

});