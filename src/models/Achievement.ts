export default class Achievement {
    /** Unique identifier of the achievement */
    id: number;
    /** Number of times the achievement has been awarded */
    numAwarded: number;
    /** Number of times the achievement has been awarded in hardcore */
    numAwardedHardcore: number;
    /** Title of the achievement */
    title: string;
    /** Description fo the achievement */
    description: string;
    /** Number of points the achievement worth */
    points: number;
    /** Number of "white" points the achievement is worth */
    trueRatio: number;
    /** User who originally created the achievement */
    author: string;
    /** When the achievement was last modified */
    dateModified: Date;
    /** When the achievement was created */
    dateCreated: Date;
    /** Unique identifier of the badge image for the achievement */
    badgeName: number;
    /** Field used for determining which order to display the achievements */
    displayOrder: number;
    /** MD5 of the logic for the achievement */
    memAddr: string;
    /** Tell if this achievement can be missable (false) does not guarantee it is not missable */
    isMissable: boolean;

    constructor(json: any) {
        this.id = Number(json.ID);
        this.numAwarded = Number(json.NumAwarded);
        this.numAwardedHardcore = Number(json.NumAwardedHardcore);
        this.title = json.Title;
        this.description = json.Description;
        this.points = Number(json.Points);
        this.trueRatio = Number(json.TrueRatio);
        this.author = json.Author;
        this.dateModified = new Date(json.DateModified);
        this.dateCreated = new Date(json.DateCreated);
        this.badgeName = Number(json.BadgeName);
        this.displayOrder = Number(json.DisplayOrder);
        this.memAddr = json.MemAddr;
        this.isMissable = this.title.includes('[m]');
    }
};