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

    constructor(json: any) {
        super(json);
        this.numAwarded = Number(json.NumAwarded);
        this.numAwardedHardcore = Number(json.NumAwardedHardcore);
        this.badgeName = Number(json.BadgeName);
        this.displayOrder = Number(json.DisplayOrder);
        this.memAddr = json.MemAddr;
    }
};