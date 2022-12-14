import { client } from "../src/config";
import AchievementOfTheWeek from "../src/models/AchievementOfTheWeek";

describe('Achievement distribution test', function () {

    it('should have correct API result', async () => {
        const achievementOfTheWeek = await client.getAchievementOfTheWeek();
        expect(achievementOfTheWeek).toBeInstanceOf(AchievementOfTheWeek);
        expect(typeof achievementOfTheWeek.achievement.id).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.achievement.title).toStrictEqual('string');
        expect(typeof achievementOfTheWeek.achievement.description).toStrictEqual('string');
        expect(typeof achievementOfTheWeek.achievement.points).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.achievement.trueRatio).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.achievement.author).toStrictEqual('string');
        expect(achievementOfTheWeek.achievement.dateCreated).toBeInstanceOf(Date);
        expect(achievementOfTheWeek.achievement.dateModified).toBeInstanceOf(Date);
        expect(typeof achievementOfTheWeek.console.id).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.console.title).toStrictEqual('string');
        expect(typeof achievementOfTheWeek.forumTopic.id).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.game.id).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.game.title).toStrictEqual('string');
        expect(achievementOfTheWeek.startAt).toBeInstanceOf(Date);
        expect(typeof achievementOfTheWeek.totalPlayers).toStrictEqual('number');
        expect(typeof achievementOfTheWeek.unlocksCount).toStrictEqual('number');
        for (let i = 0; i < achievementOfTheWeek.unlocks.length; i++) {
            expect(typeof achievementOfTheWeek.unlocks[i].user).toStrictEqual('string');
            expect(typeof achievementOfTheWeek.unlocks[i].raPoints).toStrictEqual('number');
            expect(achievementOfTheWeek.unlocks[i].dateAwarded).toBeInstanceOf(Date);
            expect(typeof achievementOfTheWeek.unlocks[i].hardcoreMode).toStrictEqual('boolean');
        }
    });

});