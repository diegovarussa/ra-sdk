/**
 * Return the achievements associated to a game
 */
export default class AchievementCount {
    /** Unique identifier of the game */
    gameId: number;
    /** Array of unique identifier of an achievement associated to the game */
    achievementIds: Array<number> = [];

    constructor(json: any) {
        this.gameId = Number(json.GameId);
        for (let i = 0; i < json.AchievementIDs.length; i++) {
            this.achievementIds.push(Number(json.AchievementIDs[i]))
        }
    }
}