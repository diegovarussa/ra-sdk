/**
 * Gets user's achievement progress for a game list
 */
export default class UserProgress {
    /** Unique identifier of the game */
    id: number;
    /** Number of core achievements for the game */
    numPossibleAchievements: number;
    /** Maximum number of points that can be earned from the game */
    possibleScore: number;
    /** Number of achievements earned by the user in softcore */
    numAchieved: number;
    /** Number of points earned by the user in softcore */
    scoreAchieved: number;
    /** Number of achievements earned by the user in hardcore */
    numAchievedHardcore: number;
    /** Number of points earned by the user in hardcore */
    scoreAchievedHardcore: number;

    constructor(id: number, json: any) {
        this.id = id;
        this.numPossibleAchievements = Number(json.NumPossibleAchievements);
        this.possibleScore = Number(json.PossibleScore);
        this.numAchieved = Number(json.NumAchieved);
        this.scoreAchieved = Number(json.ScoreAchieved);
        this.numAchievedHardcore = Number(json.NumAchievedHardcore);
        this.scoreAchievedHardcore = Number(json.ScoreAchievedHardcore);
    }
};