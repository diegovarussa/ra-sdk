export default class GameLast {
    /** Unique identifier of the game */
    id: number;
    /** Name of the game */
    title: string;
    /** Unique identifier of the console associated to the game */
    consoleId: number;
    /** Name of the console associated to the game */
    consoleName: string;
    /** Unique identifier of the official forum topic for the game */
    forumTopicId: number;
    /** Always "0" */
    flags: number = 0;
    /** Site-relative path to the game's icon image */
    imageIcon: string;
    /** Site-relative path to the game's title image */
    imageTitle: string;
    /** Site-relative path to the game's in-game image */
    imageInGame: string;
    /** Site-relative path to the game's box art image */
    imageBoxArt: string;
    /** Publisher information for the game */
    publisher: string;
    /** Developer information for the game */
    developer: string;
    /** Genre information for the game */
    genre: string;
    /** Release date information for the game */
    released: Date
    isFinal: boolean;
    /** Script for generating the rich presence for the game */
    richPresencePatch: string;

    constructor(json: any) {
        this.id = Number(json.ID);
        this.title = json.Title;
        this.consoleId = Number(json.ConsoleID);
        this.consoleName = json.ConsoleName;
        this.forumTopicId = Number(json.ForumTopicID);
        this.imageIcon = json.ImageIcon;
        this.imageTitle = json.ImageTitle;
        this.imageInGame = json.ImageIngame;
        this.imageBoxArt = json.ImageBoxArt;
        this.publisher = json.Publisher;
        this.developer = json.Developer;
        this.genre = json.Genre;
        this.released = new Date(json.Released);
        this.isFinal = Boolean(json.IsFinal);
        this.richPresencePatch = json.RichPresencePatch;
    }
}