import { client, gameId } from "../src/config";
import CommentItem from "../src/models/CommentItem";

describe('Game comments test', function () {

    it('should have correct API result', async () => {
        const comments = await client.getGameComments(gameId);
        for (let i = 0; i < comments.length; i++) {
            const comment = comments[i];
            expect(comment).toBeInstanceOf(CommentItem);
            expect(typeof comment.user).toStrictEqual('string');
            expect(isNaN(comment.date.getDate())).toBeFalsy();
            expect(typeof comment.comment).toStrictEqual('string');
        }
    });

});