import { client } from "../src/config";
import UserTopTen from "../src/models/UserTopTen";

describe('User top ten test', function () {

    it('should have correct API result', async () => {
        const users = await client.getTopTenUsers();
        for (let i = 0; i < users.length; i++) {
            const user = users[i];
            expect(user).toBeInstanceOf(UserTopTen);
            expect(typeof user.name).toStrictEqual('string');
            expect(typeof user.points).toStrictEqual('number');
            expect(typeof user.retroRatio).toStrictEqual('number');
        }
    });

});