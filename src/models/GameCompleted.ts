/**
 * Gets all game progress for a user
 * NOTE: each game may appear in the list twice - once for Hardcore and once for Casual
 */
export default class GameCompleted {
    /** Unique identifier of the game */
    id: number;
    /** Name of the game */
    title: string;
    /** Site-relative path to the game's icon image */
    imageIcon: string;
    /** Unique identifier of the console associated to the game */
    consoleID: number;
    /** Name of the console associated to the game */
    consoleName: string;
    /** Number of core achievements associated to the game */
    maxPossible: number;
    /** Number of achievements earned by the user */
    numAwarded: number;
    /** NumAwarded divided by MaxPossible */
    percentageWon: number;
    /** "true" if the data is for hardcore, otherwise "false" */
    hardcoreMode: boolean;

    constructor(json: any) {
        this.id = Number(json.GameID);
        this.title = json.Title;
        this.consoleID = Number(json.ConsoleID);
        this.consoleName = json.ConsoleName;
        this.imageIcon = json.ImageIcon;
        this.maxPossible = Number(json.MaxPossible);
        this.numAwarded = Number(json.NumAwarded);
        this.percentageWon = Number(json.PctWon);
        this.hardcoreMode = Boolean(Number(json.HardcoreMode));

    }
}