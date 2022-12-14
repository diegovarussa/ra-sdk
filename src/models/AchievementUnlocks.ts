import Console from "./Console";
import UnlockAchievement from "./UnlockAchievement";

/**
 * Return the unlocks of the achievement
 */
export default class AchievementUnlocks {
    /** Information about the achievement */
    achievement: UnlockAchievement;
    /**Information about the console associated to the game associated to the achievement */
    console: Console;
    /** Information about the game associated to the achievement */
    game: { id: number, title: string };
    /** Requested unlock information */
    unlocks: {
        user: string,
        raPoints: number,
        dateAwarded: Date,
        hardcoreMode: boolean,
    }[] = [];
    /** number of players who have played the game associated to the achievement */
    totalPlayers: number;
    /** Number of times the achievement has been unlocked */
    unlocksCount: number;

    constructor(json: any) {
        this.achievement = new UnlockAchievement(json.Achievement);
        json.Console.Name = json.Console.Title;
        this.console = new Console(json.Console);
        this.game = {
            id: Number(json.Game.ID),
            title: json.Game.Title,
        };
        for (let i = 0; i < json.Unlocks.length; i++) {
            this.unlocks.push({
                user: json.Unlocks[i].User,
                raPoints: Number(json.Unlocks[i].RAPoints),
                dateAwarded: new Date(json.Unlocks[i].DateAwarded),
                hardcoreMode: Boolean(Number(json.Unlocks[i].HardcoreMode)),
            });
        }
        this.totalPlayers = Number(json.TotalPlayers);
        this.unlocksCount = Number(json.UnlocksCount);
    }
}