import Achievement from "./Achievement";

export default class UserAchievement extends Achievement {
    /** Unique identifier of the badge image for the achievement */
    badgeName: number;
    /** Site-relative path to the badge image for the achievement */
    badgeUrl: string;
    /** Name of the console associated to the game */
    consoleName: string;
    /** Sum of points for all achievements so far (including current) */
    cumulativeScore: number;
    /** When the achievement was earned */
    date: Date;
    /** Site-relative path to the game's icon image */
    gameIcon: string;
    /** Unique identifier of the game associated to the achievement */
    gameId: number;
    /** Title of the game associated to the achievement */
    gameTitle: string;
    /** Site-relative path to the game page*/
    gameUrl: string;
    /** True if unlocked in hardcore, otherwise False */
    hardcoreMode: boolean;

    constructor(json: any) {
        json.ID = json.AchievementID;
        super(json);
        this.badgeName = Number(json.BadgeName);
        this.badgeUrl = json.BadgeURL;
        this.consoleName = json.ConsoleName;
        this.cumulativeScore = Number(json.CumulScore);
        this.date = new Date(json.CumulScore);
        this.gameIcon = json.GameIcon;
        this.gameId = Number(json.GameID);
        this.gameTitle = json.GameTitle;
        this.gameUrl = json.GameURL;
        this.hardcoreMode = Boolean(Number(json.HardcoreMode));
    }
};