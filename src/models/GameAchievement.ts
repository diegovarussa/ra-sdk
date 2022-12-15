import UnlockAchievement from "./UnlockAchievement";

export default class GameAchievement extends UnlockAchievement {
    /** Number of times the achievement has been awarded */
    numAwarded: number;
    /** Number of times the achievement has been awarded in hardcore */
    numAwardedHardcore: number;
    /** Unique identifier of the badge image for the achievement */
    badgeName: number;
    /** Field used for determining which order to display the achievements */
    displayOrder: number;
    /** MD5 of the logic for the achievement */
    memAddr: string;
    /** When the achievement was earned by the user */
    dateEarned: Date | null;
    /** When the achievement was earned by the user in hardcore */
    dateEarnedHardcore: Date | null;

    constructor(json: any) {
        super(json);
        this.numAwarded = Number(json.NumAwarded);
        this.numAwardedHardcore = Number(json.NumAwardedHardcore);
        this.badgeName = Number(json.BadgeName);
        this.displayOrder = Number(json.DisplayOrder);
        this.memAddr = json.MemAddr;
        this.dateEarned = (json.DateEarned) ? new Date(json.DateEarned) : null;
        this.dateEarnedHardcore = (json.DateEarned) ? new Date(json.DateEarned) : null;
    }
};