/**
 * Gets user's rank and score
 */
export default class UserRankAndScore {
    /** Unique identifier of the game */
    score: number;
    /** Number of core achievements for the game */
    softcoreScore: number;
    /** Maximum number of points that can be earned from the game */
    rank: number;
    /** Number of achievements earned by the user in softcore */
    totalRanked: number;

    constructor(json: any) {
        this.score = Number(json.Score);
        this.softcoreScore = Number(json.SoftcoreScore);
        this.rank = Number(json.Rank);
        this.totalRanked = Number(json.TotalRanked);
    }
};