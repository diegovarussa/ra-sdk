import { client } from "../src/config";
import ActiveClaim from "../src/models/ActiveClaim";

describe('Active claim test', function () {

    it('should have correct API result', async () => {
        const activesClaim = await client.getActiveClaims();
        for (let i = 0; i < activesClaim.length; i++) {
            const current = activesClaim[i];
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