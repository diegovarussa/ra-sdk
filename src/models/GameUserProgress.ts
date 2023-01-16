import Game from "./Game";
import GameAchievement from "./GameAchievement";

/**
 * Return game and user progress on achievements
 */
export default class GameUserProgress extends Game {
    isFinal: boolean;
    /** Count of core achievements associated to the game */
    numAchievements: number;
    /** Number of unique players who have earned achievements for the game */
    numDistinctPlayersCasual: number;
    /** Number of unique players who have earned achievements for the game in hardcore */
    numDistinctPlayersHardcore: number;
    /** MD5 of the script for generating the rich presence for the game */
    richPresencePatch: string;
    /** Information about the achievement */
    achievements: Array<GameAchievement> = [];
    /** Number of achievements earned by the user */
    numAwardedToUser: number;
    /** number of achievements earned by the user in hardcore */
    numAwardedToUserHardcore: number;
    /** Percentage of achievements earned by the user */
    userCompletion: number;
    /** Percentage of achievements earned by the user in hardcore */
    userCompletionHardcore: number;

    constructor(json: any) {
        super(json);
        this.isFinal = Boolean(json.IsFinal);
        this.numAchievements = Number(json.NumAchievements);
        this.numDistinctPlayersCasual = Number(json.NumDistinctPlayersCasual);
        this.numDistinctPlayersHardcore = Number(json.NumDistinctPlayersHardcore);
        this.richPresencePatch = json.RichPresencePatch;
        if (json.Achievements) {
            Object.entries(json.Achievements).forEach(([_key, value]) => {
                this.achievements.push(new GameAchievement(value))
            });
        }
        this.numAwardedToUser = Number(json.NumAwardedToUser);
        this.numAwardedToUserHardcore = Number(json.NumAwardedToUserHardcore);
        this.userCompletion = json.UserCompletion ? Number(json.UserCompletion.replace('%', '')) : 0;
        this.userCompletionHardcore =  json.UserCompletion ? Number(json.UserCompletionHardcore.replace('%', '')): 0;
    }
};