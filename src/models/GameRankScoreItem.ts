/**
 * Returns latest masters or high scores entries for a game
 */
export default class GameRankScoreItem {
    /** Name of the user*/
    user: string;
    /** Number of points earned by the user for the game (includes hardcore bonus) */
    totalScore: number;
    /** When the user's latest achievement for the game was unlocked */
    lastAward: Date;
    /** Rank when the user got the achievement */
    rank: number;

    constructor(json: any) {
        this.user = json.User;
        this.totalScore = Number(json.TotalScore);
        this.lastAward = new Date(json.LastAward);
        this.rank = Number(json.Rank);
    }
}