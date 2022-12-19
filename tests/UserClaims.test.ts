import { client } from "../src/config";
import ActiveClaim from "../src/models/ActiveClaim";

describe('User claims test', function () {

    it('should have correct API result', async () => {
        const claims = await client.getUserClaims();
        for (let i = 0; i < claims.length; i++) {
            const current = claims[i];
            expect(current).toBeInstanceOf(ActiveClaim);
            expect(typeof current.id).toStrictEqual('number');
            expect(typeof current.setType).toStrictEqual('number');
            expect(typeof current.claimType).toStrictEqual('number');
            expect(isNaN(current.created.getDate())).toBeFalsy();
            expect(isNaN(current.expiration.getDate())).toBeFalsy();
            expect(typeof current.gameIcon).toStrictEqual('string');
            expect(typeof current.gameId).toStrictEqual('number');
            expect(typeof current.gameTitle).toStrictEqual('string');
            expect(typeof current.consoleName).toStrictEqual('string');
            expect(typeof current.status).toStrictEqual('number');
            expect(typeof current.extension).toStrictEqual('number');
            expect(typeof current.special).toStrictEqual('number');
            expect(isNaN(current.doneTime.getDate())).toBeFalsy();
            expect(isNaN(current.updated.getDate())).toBeFalsy();
            expect(typeof current.minutesLeft).toStrictEqual('number')
        }
    });

});