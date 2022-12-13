export enum TYPE_FILTER {
    /** Query all unlocks */
    ALL = 0,
    /**  Query only hardcore unlocks */
    HARDCORE_ONLY = 1,
}

export enum FLAG_FILTER {
    /** For core achievements */
    CORE_ACHIEVEMENTS = 3,
    /** For unofficial achievements */
    UNOFFICIAL = 5,
}

/**
 * key: string - Number of achievements earned
 * value: number - Number of players who have earned that many achievement
 */
type DistributionType = { 
    /** bbb */
    [key: string]: number; 
}

/**
 * Returns a mapping of the number of players who have earned each quantity of achievements for a game
 */
export default class AchievementDistribution {
    public distribution: DistributionType;

    constructor(json: any) {
        this.distribution = json;
    }
}