import { client } from "../src/config";
import Console from "../src/models/Console";

describe('Console IDs test', function () {

    it('should have correct API result', async () => {
        const ids = await client.getGetConsoleIDs();
        console.log(ids);
        for (let i = 0; i < ids.length; i++) {
            const current = ids[i];
            console.log(current);
            expect(current).toBeInstanceOf(Console);
            expect(typeof current.id).toStrictEqual('number');
            expect(typeof current.name).toStrictEqual('string')
        }
    });

});