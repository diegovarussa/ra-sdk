import Claim from "./Claim";

export default class ActiveClaim extends Claim {
    /** Unique ID of the claim*/
    id: number;
    /** Site-relative path to the game's icon image */
    gameIcon: string;
    /** Unique identifier of the game associated to the achievement */
    gameId: number;
    /** Title of the game associated to the achievement */
    gameTitle: string;
    /** Name of the console associated to the game */
    consoleName: string;
    /** Claim status: 0 - active, 1 - complete, 2 - dropped */
    status: number;
    /** Number of times the claim has been extended */
    extension: number;
    /** Flag indicating a special type of claim */
    special: number;
    /** 
     * Date the claim is done:
     * Expiration date for active claims
     * Completion date for complete claims
     * Dropped date for dropped claims
     */
    doneTime: Date;
    /** Date the claim was updated */
    updated: Date;
    /** Time in minutes left until the claim expires */
    minutesLeft: number;

    constructor(json: any) {
        json.Expiration = json.DoneTime;
        super(json);
        this.id = Number(json.ID);
        this.gameIcon = json.GameIcon;
        this.gameId = Number(json.GameID);
        this.gameTitle = json.GameTitle;
        this.consoleName = json.ConsoleName;
        this.status = Number(json.Status);
        this.extension = Number(json.Extension);
        this.special = Number(json.Special);
        this.doneTime = new Date(json.DoneTime);
        this.updated = new Date(json.Updated);
        this.minutesLeft = Number(json.MinutesLeft);
    }
};