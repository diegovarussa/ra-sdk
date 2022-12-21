import { JSDOM } from "jsdom";
import CommentItem from "./models/CommentItem";

export default class HtmlParser {
    public static parsePageComments(html: string) {
        let comments: Array<CommentItem> = [];
        const { document } = (new JSDOM(html)).window;
        const feedTable = document.querySelector("#feed") as HTMLTableElement;
        const rows = feedTable.rows;
        for (const key in rows) {
            const tr = rows[key];
            if (tr.className && tr.className.indexOf('system') === - 1) { // filter out system messages
                const divArray = tr.querySelectorAll('div');
                const spanArray = divArray[0].querySelectorAll(':scope > span'); // get first children span only
                const user = spanArray[0].textContent!.trim();
                const date = new Date(spanArray[1].textContent!.trim());
                const comment = divArray[1].textContent!.trim();
                comments.push(new CommentItem(user, date, comment));
            }
        }

        return comments;
    }
}