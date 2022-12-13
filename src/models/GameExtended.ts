import Achievement from "./Achievement";
import Claim from "./Claim";
import Game from "./Game";

/**
 * Return extended information about a game
 */
export default class GameExtended extends Game {
    isFinal: boolean;
    /** Count of core achievements associated to the game */
    numAchievements: number;
    /** Number of unique players who have earned achievements for the game */
    numDistinctPlayersCasual: number;
    /** Number of unique players who have earned achievements for the game in hardcore */
    numDistinctPlayersHardcore: number;
    /** MD5 of the script for generating the rich presence for the game */
    richPresencePatch: string;
    claims: Array<Claim> = [];
    achievements: Array<Achievement> = [];

    constructor(json: any) {
        super(json);
        this.isFinal = Boolean(json.IsFinal);
        this.numAchievements = Number(json.NumAchievements);
        this.numDistinctPlayersCasual = Number(json.NumDistinctPlayersCasual);
        this.numDistinctPlayersHardcore = Number(json.NumDistinctPlayersHardcore);
        this.richPresencePatch = json.RichPresencePatch;
        for (let i = 0; i < json.Claims.length; i++) {
            this.claims.push(new Claim(json.Claims[i]));
        }
        Object.entries(json.Achievements).forEach(([key, value]) => {
            this.achievements.push(new Achievement(value))
        });
    }
};