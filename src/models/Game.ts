import Base from "./Base";

/**
 * Returns information about a game
 */
export default class Game extends Base {
    /** Game ID */
    id: number;
    /** Name of the game */
    title: string;
    /** Name of the game */
    gameTitle: string;
    /** Unique identifier of the console associated to the game */
    consoleID: number;
    /** Name of the console associated to the game */
    consoleName: string;
    /** Name of the console associated to the game */
    console: string;
    /** Unique identifier of the official forum topic for the game */
    forumTopicId: number;
    /** Expect to be always 0 (zero) */
    flags: number;
    /** Site-relative path to the game's icon image */
    gameIcon: string;
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
    released: Date;

    constructor(json: any) {
        super();
        this.id = Number(json.ID);
        this.title = json.Title;
        this.gameTitle = json.GameTitle;
        this.consoleID = Number(json.ConsoleID);
        this.consoleName = json.ConsoleName;
        this.console = json.Console;
        this.forumTopicId = Number(json.ForumTopicID);
        this.flags = (json.Flags === null) ? 0 : Number(json.Flags);
        this.gameIcon = `${this.mediaBaseUrl}${json.GameIcon}`;
        this.imageIcon = `${this.mediaBaseUrl}${json.ImageIcon}`;
        this.imageTitle = `${this.mediaBaseUrl}${json.ImageTitle}`;
        this.imageInGame = `${this.mediaBaseUrl}${json.ImageIngame}`;
        this.imageBoxArt = `${this.mediaBaseUrl}${json.ImageBoxArt}`;
        this.publisher = json.Publisher;
        this.developer = json.Developer;
        this.genre = json.Genre;
        this.released = new Date(json.Released);
    }
}