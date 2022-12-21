import { achievementId, client } from "../src/config";
import CommentItem from "../src/models/CommentItem";

describe('Achievement comments test', function () {

    it('should have correct API result', async () => {
        const comments = await client.getAchievementComments(achievementId);
        for (let i = 0; i < comments.length; i++) {
            const comment = comments[i];
            expect(comment).toBeInstanceOf(CommentItem);
            expect(typeof comment.user).toStrictEqual('string');
            expect(isNaN(comment.date.getDate())).toBeFalsy();
            expect(typeof comment.comment).toStrictEqual('string');
        }
    });

});