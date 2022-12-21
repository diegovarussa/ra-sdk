import CommentItem from "./models/CommentItem";
import { isBrowser } from "browser-or-node";

export default class HtmlParser {
    public static parsePageComments(html: string) {
        let comments: Array<CommentItem> = [];
        let document: Document;
        
        if(isBrowser) {
            let parser = new DOMParser();
            document = parser.parseFromString(html, "text/html");
        } else { // nodejs
            const JSDOM = eval('require')('jsdom').JSDOM;
            let parser = new JSDOM(html);
            document = parser.window.document;
        }

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