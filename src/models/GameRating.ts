/**
 * Gets the overall rating of the game
 */
export default class GameRating {
    /** Game ID */
    gameId: number;
    /** Game ratings */
    ratings: {
        /** Average rating of the game */
        game: number,
        //** Number of votes contributing to the game's rating */
        gameNumVotes: number,
        /** Average rating of the game's achievements (deprecated) */
        achievements: number,
        /** Number of votes contributing to the game's achievements rating (deprecated) */
        achievementsNumVotes: number
    };

    constructor(json: any) {
        this.gameId = Number(json.GameID);
        this.ratings = {
            game: Number(json.Ratings.Game),
            gameNumVotes: Number(json.Ratings.GameNumVotes),
            achievements: Number(json.Ratings.Achievements),
            achievementsNumVotes: Number(json.Ratings.AchievementsNumVotes),
        };
    }
}