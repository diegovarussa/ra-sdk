import Achievement from "./Achievement";

export default class UnlockAchievement extends Achievement {
    /** Number of "white" points the achievement is worth */
    trueRatio: number;
    /** When the achievement was last modified */
    dateModified: Date;
    /** When the achievement was created */
    dateCreated: Date;

    constructor(json: any) {
        super(json);
        this.trueRatio = Number(json.TrueRatio);
        this.dateModified = new Date(json.DateModified);
        this.dateCreated = new Date(json.DateCreated);
    }
};