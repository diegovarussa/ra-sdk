export default class GameRecent {
    /** Unique identifier of the game */
    id: number;
    /** Name of the game */
    title: string;
    /** Site-relative path to the game's icon image */
    NumPossibleAchievements: number;
    /** Total points the game's achievements are worth */
    PossibleScore: number;
    /** Name of the console associated to the game */
    consoleID: number;
    /** count of core achievements associated to the game */
    consoleName: string;
    /** Number of core achievements associated to the game */
    imageIcon: string;
    /** when the user last played the game */
    lastPlayed: Date;
    /** User's rating of the game (1-5) */
    MyVote: number;
    /** Number of achievements earned by the user in softcore */
    NumAchieved: number;
    /** Number of points earned by the user in softcore */
    ScoreAchieved: number;
    /** Number of achievements earned by the user in hardcore */
    NumAchievedHardcore: number;
    /** Number of points earned by the user in hardcore */
    ScoreAchievedHardcore: number;

    constructor(json: any) {
        this.id = Number(json.GameID);
        this.title = json.Title;
        this.consoleID = Number(json.ConsoleID);
        this.consoleName = json.ConsoleName;
        this.imageIcon = json.ImageIcon;
        this.NumPossibleAchievements = Number(json.NumPossibleAchievements);
        this.PossibleScore = Number(json.PossibleScore);
        this.lastPlayed = new Date(json.LastPlayed);
        this.MyVote = Number(json.MyVote);
        this.NumAchieved = Number(json.NumAchieved);
        this.ScoreAchieved = Number(json.ScoreAchieved);
        this.NumAchievedHardcore = Number(json.NumAchievedHardcore);
        this.ScoreAchievedHardcore = Number(json.ScoreAchievedHardcore);

    }
}