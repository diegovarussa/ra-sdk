import { client, fromDate, toDate } from "../src/config";
import UserAchievement from "../src/models/UserAchievement";

describe('Achievement earned between date test', function () {

    it('should have correct API result', async () => {
        const achievementsEarnedBetween = await client.getAchievementsEarnedBetween(fromDate, toDate);
        for (let i = 0; i < achievementsEarnedBetween.length; i++) {
            const current = achievementsEarnedBetween[i];
            expect(current).toBeInstanceOf(UserAchievement);
            expect(typeof current.id).toStrictEqual('number');
            expect(typeof current.author).toStrictEqual('string');
            expect(typeof current.badgeName).toStrictEqual('string');
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
            expect(typeof current.isMissable).toStrictEqual('boolean');
        }
    });

});