import { client, userName } from "../src/config";
import UserSummary from "../src/models/UserSummary";

describe('User summary test', function () {

    it('should have correct API result', async () => {
        const summary = await client.getUserSummary(userName);
        expect(summary).toBeInstanceOf(UserSummary);
        expect(typeof summary.id).toStrictEqual('number');
        expect(typeof summary.totalPoints).toStrictEqual('number');
        expect(typeof summary.totalSoftcorePoints).toStrictEqual('number');
        expect(typeof summary.totalTruePoints).toStrictEqual('number');
        expect(typeof summary.permissions).toStrictEqual('number');
        expect(isNaN(summary.memberSince.getDate())).toBeFalsy();
        expect(typeof summary.rank).toStrictEqual('number');
        expect(typeof summary.untracked).toStrictEqual('boolean');
        expect(typeof summary.userPic).toStrictEqual('string');
        expect(typeof summary.motto).toStrictEqual('string');
        expect(typeof summary.userWallActive).toStrictEqual('boolean');
        expect(typeof summary.totalRanked).toStrictEqual('number');
        expect(typeof summary.lastGameID).toStrictEqual('number');

        expect(typeof summary.lastGame.id).toStrictEqual('number');
        expect(typeof summary.lastGame.title).toStrictEqual('string');
        expect(typeof summary.lastGame.consoleId).toStrictEqual('number');
        expect(typeof summary.lastGame.consoleName).toStrictEqual('string');
        expect(typeof summary.lastGame.forumTopicId).toStrictEqual('number');
        expect(summary.lastGame.flags).toStrictEqual(0);
        expect(typeof summary.lastGame.imageIcon).toStrictEqual('string');
        expect(typeof summary.lastGame.imageTitle).toStrictEqual('string');
        expect(typeof summary.lastGame.imageInGame).toStrictEqual('string');
        expect(typeof summary.lastGame.imageBoxArt).toStrictEqual('string');
        expect(typeof summary.lastGame.publisher).toStrictEqual('string');
        expect(typeof summary.lastGame.developer).toStrictEqual('string');
        expect(typeof summary.lastGame.genre).toStrictEqual('string');
        expect(isNaN(summary.lastGame.released.getDate())).toBeFalsy();
        expect(typeof summary.lastGame.isFinal).toStrictEqual('boolean');
        expect(typeof summary.lastGame.richPresencePatch).toStrictEqual('string');

        expect(typeof summary.richPresenceMsg).toStrictEqual('string');
        expect(typeof summary.recentlyPlayedCount).toStrictEqual('number');

        for (let i = 0; i < summary.recentlyPlayed.length; i++) {
            const current = summary.recentlyPlayed[i];
            expect(typeof current.id).toStrictEqual('number');
            expect(typeof current.title).toStrictEqual('string');
            expect(typeof current.consoleId).toStrictEqual('number');
            expect(typeof current.consoleName).toStrictEqual('string');
            expect(typeof current.imageIcon).toStrictEqual('string');
            expect(isNaN(current.lastPlayed.getDate())).toBeFalsy()
            expect(typeof current.myVote).toStrictEqual('number');
        }

        expect(typeof summary.lastActivity.id).toStrictEqual('number');
        expect(isNaN(summary.lastActivity.timestamp.getDate())).toBeFalsy()
        expect(isNaN(summary.lastActivity.lastUpdate.getDate())).toBeFalsy()
        expect(typeof summary.lastActivity.activityType).toStrictEqual('number');
        expect(typeof summary.lastActivity.user).toStrictEqual('string');
        expect(typeof summary.lastActivity.data).toStrictEqual('string');
        expect(typeof summary.lastActivity.data2).toStrictEqual('string');

        expect(typeof summary.status).toStrictEqual('string')
        
        for (let i = 0; i < summary.awarded.length; i++) {
            const current = summary.awarded[i];
            expect(typeof current.id).toStrictEqual('number');
            expect(typeof current.numAchieved).toStrictEqual('number');
            expect(typeof current.numAchievedHardcore).toStrictEqual('number');
            expect(typeof current.numPossibleAchievements).toStrictEqual('number');
            expect(typeof current.scoreAchieved).toStrictEqual('number');
            expect(typeof current.scoreAchievedHardcore).toStrictEqual('number');
            expect(typeof current.possibleScore).toStrictEqual('number');
        }

        for (let i = 0; i < summary.recentAchievements.length; i++) {
            const current = summary.recentAchievements[i];
            expect(typeof current.id).toStrictEqual('number');
            expect(typeof current.title).toStrictEqual('string');
            expect(typeof current.description).toStrictEqual('string');
            expect(typeof current.points).toStrictEqual('number');
            expect(typeof current.badgeName).toStrictEqual('number');
            expect(typeof current.gameId).toStrictEqual('number');
            expect(typeof current.gameTitle).toStrictEqual('string');
            expect(typeof current.isAwarded).toStrictEqual('number');
            expect(isNaN(current.dateAwarded.getDate())).toBeFalsy();
            expect(typeof current.hardcoreAchieved).toStrictEqual('number');
        }

        expect(typeof summary.contribCount).toStrictEqual('number')
        expect(typeof summary.contribYield).toStrictEqual('number')

    });
});