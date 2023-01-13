import { client, gameId } from "../src/config";
import UserProgress from "../src/models/UserProgress";

describe('User progress test', function () {

    it('should have correct API result', async () => {
        const progressList = await client.getUserProgress([gameId]);
        for (let i = 0; i < progressList.length; i++) {
            const current = progressList[i];
            expect(current).toBeInstanceOf(UserProgress);
            expect(typeof current.id).toStrictEqual('number');
            expect(typeof current.numPossibleAchievements).toStrictEqual('number');
            expect(typeof current.possibleScore).toStrictEqual('number');
            expect(typeof current.numAchieved).toStrictEqual('number');
            expect(typeof current.scoreAchieved).toStrictEqual('number');
            expect(typeof current.numAchievedHardcore).toStrictEqual('number');
            expect(typeof current.scoreAchievedHardcore).toStrictEqual('number');
        }
    });

});