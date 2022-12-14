import { client, fromDate, toDate, userName } from "../src/config";
import AchievementsEarnedBetween from "../src/models/AchievementsEarnedBetween";

describe('Achievement count test', function () {

    it('should have correct API result', async () => {
        const achievementsEarnedBetween = await client.getAchievementsEarnedBetween(userName, fromDate, toDate);
        expect(achievementsEarnedBetween).toBeInstanceOf(AchievementsEarnedBetween);
        for (let i = 0; i < achievementsEarnedBetween.achievements.length; i++) {
            const current  = achievementsEarnedBetween.achievements[i];
            expect(typeof current.achievementId).toStrictEqual('number');
            expect(typeof current.author).toStrictEqual('string');
            expect(typeof current.badgeName).toStrictEqual('number');
            expect(typeof current.badgeUrl).toStrictEqual('string');
            expect(typeof current.consoleName).toStrictEqual('string');
            expect(typeof current.cumulativeScore).toStrictEqual('number');
            expect(isNaN(current.date.getDate())).toBeFalsy();
            expect(typeof current.description).toStrictEqual('string');
            expect(typeof current.gameIcon).toStrictEqual('string');
            expect(typeof current.gameId).toStrictEqual('number');
            expect(typeof current.gameTitle).toStrictEqual('string');
            expect(typeof current.gameUrl).toStrictEqual('string');
            expect(typeof current.hardcoreMode).toStrictEqual('boolean');
            expect(typeof current.points).toStrictEqual('number');
            expect(typeof current.title).toStrictEqual('string');
        }
    });

});