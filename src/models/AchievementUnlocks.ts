/**
 * Return the unlocks of the achievement
 */
export default class AchievementUnlocks {
    /** Information about the achievement */
    achievement: {
        id: number,
        title: string,
        description: string,
        points: number,
        trueRatio: number,
        author: string,
        dateCreated: Date,
        dateModified: Date,
    };
    /**Information about the console associated to the game associated to the achievement */
    console: { id: number, title: string };
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
        this.achievement = {
            id: Number(json.Achievement.ID),
            title: json.Achievement.Title,
            description: json.Achievement.Description,
            points: Number(json.Achievement.Points),
            trueRatio: Number(json.Achievement.TrueRatio),
            author: json.Achievement.Author,
            dateCreated: new Date(json.Achievement.DateCreated),
            dateModified: new Date(json.Achievement.DateModified),
        };
        this.console = {
            id: Number(json.Console.ID),
            title: json.Console.Title,
        };
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