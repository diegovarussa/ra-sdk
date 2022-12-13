import { client, gameId } from "../src/config";
import GameExtended from "../src/models/GameExtended";
import Achievement from "../src/models/Achievement";
import Claim from "../src/models/Claim";

describe('Game extended test', function () {

    it('should have correct API result', async () => {
        const gameExtended = await client.getGameExtended(gameId);
        expect(gameExtended).toBeInstanceOf(GameExtended);
        expect(typeof gameExtended.id).toStrictEqual('number');
        expect(typeof gameExtended.title).toStrictEqual('string');
        expect(typeof gameExtended.consoleID).toStrictEqual('number');
        expect(typeof gameExtended.consoleName).toStrictEqual('string');
        expect(typeof gameExtended.forumTopicId).toStrictEqual('number');
        expect(gameExtended.flags).toStrictEqual(0);
        expect(typeof gameExtended.imageIcon).toStrictEqual('string');
        expect(typeof gameExtended.imageTitle).toStrictEqual('string');
        expect(typeof gameExtended.imageInGame).toStrictEqual('string');
        expect(typeof gameExtended.imageBoxArt).toStrictEqual('string');
        expect(typeof gameExtended.publisher).toStrictEqual('string');
        expect(typeof gameExtended.developer).toStrictEqual('string');
        expect(typeof gameExtended.genre).toStrictEqual('string');
        expect(gameExtended.released).toBeInstanceOf(Date);
        expect(typeof gameExtended.isFinal).toStrictEqual('boolean');
        expect(typeof gameExtended.numAchievements).toStrictEqual('number');
        expect(typeof gameExtended.numDistinctPlayersCasual).toStrictEqual('number');
        expect(typeof gameExtended.numDistinctPlayersHardcore).toStrictEqual('number');
        expect(typeof gameExtended.richPresencePatch).toStrictEqual('string');

        if (gameExtended.achievements.length) {
            const achievement = gameExtended.achievements[0];
            expect(achievement).toBeInstanceOf(Achievement);
            expect(typeof achievement.id).toStrictEqual('number');
            expect(typeof achievement.numAwarded).toStrictEqual('number');
            expect(typeof achievement.numAwardedHardcore).toStrictEqual('number');
            expect(typeof achievement.title).toStrictEqual('string');
            expect(typeof achievement.description).toStrictEqual('string');
            expect(typeof achievement.points).toStrictEqual('number');
            expect(typeof achievement.trueRatio).toStrictEqual('number');
            expect(typeof achievement.author).toStrictEqual('string');
            expect(achievement.dateCreated).toBeInstanceOf(Date);
            expect(achievement.dateModified).toBeInstanceOf(Date);
            expect(typeof achievement.badgeName).toStrictEqual('number');
            expect(typeof achievement.displayOrder).toStrictEqual('number');
            expect(typeof achievement.memAddr).toStrictEqual('string');
        }

        if (gameExtended.claims.length) {
            const claim = gameExtended.claims[0];
            expect(claim).toBeInstanceOf(Claim);
            expect(typeof claim.user).toStrictEqual('string');
            expect(typeof claim.setType).toStrictEqual('number');
            expect(claim.created).toBeInstanceOf(Date);
            expect(claim.expiration).toBeInstanceOf(Date);
        }
    });
});