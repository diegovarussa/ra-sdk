import Client from "../src/Client";
import { userName, webApiKey } from "../src/config";

describe('Game extra tests', function () {

    it('should have correct credentials', async () => {
        const client = new Client(userName, webApiKey);
        const result = await client.isCredentialsValid();
        expect(result.valid).toStrictEqual(true);
        expect(result.message).toStrictEqual('');
    });

    it('should have invalid web api key', async () => {
        const client = new Client(userName, '~!@#$%^&*()_+}{¨:><K?');
        const result = await client.isCredentialsValid();
        expect(result.valid).toStrictEqual(false);
        expect(result.message).toStrictEqual('Invalid Web API Key');
    });

    it('should have invalid username', async () => {
        const client = new Client('I am a invalid username !@#$%^&*()_+}{', webApiKey);
        const result = await client.isCredentialsValid();
        expect(result.valid).toStrictEqual(false);
        expect(result.message).toStrictEqual('Invalid Username');
    });

});