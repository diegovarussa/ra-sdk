import Client from "../src/Client"
const client = new Client();

describe('Client test', function () {
    it('should sum be correct', () => {
        expect(client.sum(6, 5)).toBe(11);
    });
 
    it('should fail the sum', () => {
        expect(client.sum(1, 1)).not.toBe(3);
    });
});