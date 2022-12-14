export default class UserAchievement {
    /** Unique identifier of the achievement */
    achievementId: number;
    /** User who originally created the achievement */
    author: string;
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
    /** Description fo the achievement */
    description: string;
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
    /** Number of points the achievement worth */
    points: number;
    /** Title of the achievement */
    title: string;
    /** Tell if this achievement can be missable (false) does not guarantee it is not missable */
    isMissable: boolean;

    constructor(json: any) {
        this.achievementId = Number(json.AchievementID);
        this.author = json.Author;
        this.badgeName = Number(json.BadgeName);
        this.badgeUrl = json.BadgeURL;
        this.consoleName = json.ConsoleName;
        this.cumulativeScore = Number(json.CumulScore);
        this.date = new Date(json.CumulScore);
        this.description = json.Description;
        this.gameIcon = json.GameIcon;
        this.gameId = Number(json.GameID);
        this.gameTitle = json.GameTitle;
        this.gameUrl = json.GameURL;
        this.hardcoreMode = Boolean(Number(json.HardcoreMode));
        this.points = Number(json.Points);
        this.title = json.Title;
        this.isMissable = this.title.includes('[m]');
    }
};