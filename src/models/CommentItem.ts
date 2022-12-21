export default class CommentItem {
    /** Username */
    user: string;
    /** Date when comment was created */
    date: Date;
    /** Comment content */
    comment: string;
    constructor(user: string, date: Date, comment: string) {
        this.user = user;
        this.date = date;
        this.comment = comment;
    }
}