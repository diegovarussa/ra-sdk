import { client, gameId } from "../src/config";
import GameUserProgress from "../src/models/GameUserProgress";
import GameAchievement from "../src/models/GameAchievement";

describe('Game extended test', function () {

    it('should have correct API result', async () => {
        const gameUserProgress = await client.getGameUserProgress(gameId);
        expect(gameUserProgress).toBeInstanceOf(GameUserProgress);
        expect(typeof gameUserProgress.id).toStrictEqual('number');
        expect(typeof gameUserProgress.title).toStrictEqual('string');
        expect(typeof gameUserProgress.consoleID).toStrictEqual('number');
        expect(typeof gameUserProgress.consoleName).toStrictEqual('string');
        expect(typeof gameUserProgress.forumTopicId).toStrictEqual('number');
        expect(gameUserProgress.flags).toStrictEqual(0);
        expect(typeof gameUserProgress.imageIcon).toStrictEqual('string');
        expect(typeof gameUserProgress.imageTitle).toStrictEqual('string');
        expect(typeof gameUserProgress.imageInGame).toStrictEqual('string');
        expect(typeof gameUserProgress.imageBoxArt).toStrictEqual('string');
        expect(typeof gameUserProgress.publisher).toStrictEqual('string');
        expect(typeof gameUserProgress.developer).toStrictEqual('string');
        expect(typeof gameUserProgress.genre).toStrictEqual('string');
        expect(isNaN(gameUserProgress.released.getDate())).toBeFalsy();
        expect(typeof gameUserProgress.isFinal).toStrictEqual('boolean');
        expect(typeof gameUserProgress.numAchievements).toStrictEqual('number');
        expect(typeof gameUserProgress.numDistinctPlayersCasual).toStrictEqual('number');
        expect(typeof gameUserProgress.numDistinctPlayersHardcore).toStrictEqual('number');
        expect(typeof gameUserProgress.userCompletion).toStrictEqual('number');
        expect(typeof gameUserProgress.userCompletionHardcore).toStrictEqual('number');
        expect(typeof gameUserProgress.richPresencePatch).toStrictEqual('string');

        if (gameUserProgress.achievements.length) {
            const achievement = gameUserProgress.achievements[0];
            expect(achievement).toBeInstanceOf(GameAchievement);
            expect(typeof achievement.id).toStrictEqual('number');
            expect(typeof achievement.numAwarded).toStrictEqual('number');
            expect(typeof achievement.numAwardedHardcore).toStrictEqual('number');
            expect(typeof achievement.title).toStrictEqual('string');
            expect(typeof achievement.description).toStrictEqual('string');
            expect(typeof achievement.points).toStrictEqual('number');
            expect(typeof achievement.trueRatio).toStrictEqual('number');
            expect(typeof achievement.author).toStrictEqual('string');
            expect(isNaN(achievement.dateCreated.getDate())).toBeFalsy();
            expect(isNaN(achievement.dateModified.getDate())).toBeFalsy();
            expect(typeof achievement.badgeName).toStrictEqual('string');
            expect(typeof achievement.displayOrder).toStrictEqual('number');
            expect(typeof achievement.memAddr).toStrictEqual('string');

            if(achievement.dateEarned !== null) {
                expect(isNaN(achievement.dateEarned.getDate())).toBeFalsy();
            }
            if(achievement.dateEarnedHardcore !== null) {
                expect(isNaN(achievement.dateEarnedHardcore.getDate())).toBeFalsy();
            }
        }
    });
});