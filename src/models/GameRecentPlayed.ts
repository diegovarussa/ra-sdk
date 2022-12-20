export default class GameRecentPlayed {
    /** Unique identifier of the game */
    id: number;
    /** Name of the game */
    title: string;
    /** Name of the console associated to the game */
    consoleId: number;
    /** Count of core achievements associated to the game */
    consoleName: string;
    /** Number of core achievements associated to the game */
    imageIcon: string;
    /** When the user last played the game */
    lastPlayed: Date;
    /** The user's rating of the game */
    myVote: number;

    constructor(json: any) {
        this.id = Number(json.GameID);
        this.title = json.Title;
        this.consoleId = Number(json.ConsoleID);
        this.consoleName = json.ConsoleName;
        this.imageIcon = json.ImageIcon;
        this.lastPlayed = new Date(json.LastPlayed);
        this.myVote = Number(json.MyVote);
    }
}