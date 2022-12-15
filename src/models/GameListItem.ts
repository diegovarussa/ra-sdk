/**
 * Returns information about a game
 */
export default class GameListItem {
    /** Unique identifier of the game */
    id: number;
    /** Name of the game */
    title: string;
    /** Unique identifier of the console associated to the game */
    consoleID: number;
    /** Name of the console associated to the game */
    consoleName: string;
    /** Site-relative path to the game's icon image */
    imageIcon: string;
    /** Number of core achievements for the game */
    numAchievements: number;
    /** Number of leaderboards for the game */
    numLeaderboards: number;
    /** Total number of points the game's achievements are worth */
    points: number;
    /** When the last modification was made */
    dateModified: Date;
    /** Unique identifier of the official forum topic for the game */
    forumTopicId: number;
    /** RetroAchievements hash associated to the game */
    hashes: Array<string> = [];

    constructor(json: any) {
        this.id = Number(json.ID);
        this.title = json.Title;
        this.consoleID = Number(json.ConsoleID);
        this.consoleName = json.ConsoleName;
        this.imageIcon = json.ImageIcon;
        this.numAchievements = Number(json.NumAchievements);
        this.numLeaderboards = Number(json.NumLeaderboards);
        this.points = Number(json.Points);
        this.forumTopicId = Number(json.ForumTopicID);
        this.dateModified = new Date(json.DateModified);
        if(json.Hashes) {
            for (let i = 0; i < json.Hashes.length; i++) {
                this.hashes.push(json.Hashes[i])
            }
        }
    }
}