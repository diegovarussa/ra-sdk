import { client } from "../src/config";
import AchievementOfTheWeek from "../src/models/AchievementOfTheWeek";
import UnlockAchievement from "../src/models/UnlockAchievement";

describe('Achievement of the week test', function () {

    it('should have correct API result', async () => {
        const achievementOfTheWeek = await client.getAchievementOfTheWeek();
        expect(achievementOfTheWeek).toBeInstanceOf(AchievementOfTheWeek);
        expect(achievementOfTheWeek.achievement).toBeInstanceOf(UnlockAchievement);
        expect(typeof achievementOfTheWeek.achievement.id).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.achievement.title).toStrictEqual('string');
        expect(typeof achievementOfTheWeek.achievement.description).toStrictEqual('string');
        expect(typeof achievementOfTheWeek.achievement.points).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.achievement.trueRatio).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.achievement.author).toStrictEqual('string');
        expect(isNaN(achievementOfTheWeek.achievement.dateCreated.getDate())).toBeFalsy();
        expect(isNaN(achievementOfTheWeek.achievement.dateModified.getDate())).toBeFalsy();
        expect(typeof achievementOfTheWeek.console.id).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.console.title).toStrictEqual('string');
        expect(typeof achievementOfTheWeek.forumTopic.id).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.game.id).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.game.title).toStrictEqual('string');
        expect(isNaN(achievementOfTheWeek.startAt.getDate())).toBeFalsy();
        expect(typeof achievementOfTheWeek.totalPlayers).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.unlocksCount).toStrictEqual('number');
        for (let i = 0; i < achievementOfTheWeek.unlocks.length; i++) {
            expect(typeof achievementOfTheWeek.unlocks[i].user).toStrictEqual('string');
            expect(typeof achievementOfTheWeek.unlocks[i].raPoints).toStrictEqual('number');
            expect(isNaN(achievementOfTheWeek.unlocks[i].dateAwarded.getDate())).toBeFalsy();
            expect(typeof achievementOfTheWeek.unlocks[i].hardcoreMode).toStrictEqual('boolean');
        }
    });

});