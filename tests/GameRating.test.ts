import { client, gameId } from "../src/config";
import GameRating from "../src/models/GameRating";

describe('Game rating test', function () {

    it('should have correct API result', async () => {
        const gameRating = await client.getGameRating(gameId);
        expect(gameRating).toBeInstanceOf(GameRating);
        expect(typeof gameRating.gameId).toStrictEqual('number');
        expect(typeof gameRating.ratings.achievements).toStrictEqual('number');
        expect(typeof gameRating.ratings.achievementsNumVotes).toStrictEqual('number');
        expect(typeof gameRating.ratings.game).toStrictEqual('number');
        expect(typeof gameRating.ratings.gameNumVotes).toStrictEqual('number');
    });

});