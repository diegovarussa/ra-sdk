import Client from "../src/Client"
import * as dotenv from 'dotenv';
import AchievementCount from "../src/models/AchievementCount";
dotenv.config();

let client: Client;
let achievementCount: AchievementCount;

beforeAll(async () => {
    const userName = process.env.USER_NAME as string;
    const webApiKey = process.env.WEB_API_KEY as string;
    client = new Client(userName, webApiKey);
    achievementCount = await client.getAchievementCount(515);
})

describe('Achievement count test', function () {

    it.only('should have correct API result', async () => {
        expect(achievementCount).toBeInstanceOf(AchievementCount);
        expect(typeof achievementCount.gameId).toStrictEqual('number');
        for (let i = 0; i < achievementCount.achievementIds.length; i++) {
            expect(typeof achievementCount.achievementIds[i]).toStrictEqual('number');
        }
    });

});