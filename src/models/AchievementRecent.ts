export default class AchievementRecent {
    /** Unique identifier of the achievement */
    id: number;
    /** Unique identifier of the game */
    gameId: number;
    /** Name of the game */
    gameTitle: string;
    /** Unique identifier of the badge image for the achievement */
    badgeName: number;
    /** Title of the achievement */
    title: string;
    /** Description fo the achievement */
    description: string;
    /** Number of points the achievement worth */
    points: number;
    /** Always "1" */
    isAwarded: number = 1;
    /** When the user earned the achievement */
    dateAwarded: Date;
    /** Always "0"? */
    hardcoreAchieved: number = 0;

    constructor(json: any) {
        this.id = Number(json.ID);
        this.gameId = Number(json.GameID);
        this.gameTitle = json.GameTitle;
        this.badgeName = Number(json.BadgeName);
        this.title = json.Title;
        this.description = json.Description;
        this.points = Number(json.Points);
        this.dateAwarded = new Date(json.DateAwarded);
    }
};