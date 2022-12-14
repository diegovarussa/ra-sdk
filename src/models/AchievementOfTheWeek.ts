import AchievementUnlocks from "./AchievementUnlocks";

/**
 * Return the achievement of the week and people who unlocks it
 */
export default class AchievementOfTheWeek extends AchievementUnlocks {
    /** Information about the game's official forum topic */
    forumTopic: { id: number };
    /** When the achievement was set as the achievement of the week */
    startAt: Date;

    constructor(json: any) {
        super(json);
        this.forumTopic = {
            id: Number(json.ForumTopic.ID),
        };
        this.startAt = new Date(json.StartAt);
    }
}