/**
 * Gets information about the top ten users (by score) for the site
 */
export default class UserTopTen {
    /** Name of the user */
    name: string;
    /** Total points earned by the user */
    points: number;
    /** Total "white" points earned by the user */
    retroRatio: number;

    constructor(json: any) {
        this.name = json[1];
        this.points = Number(json[2]);
        this.retroRatio = Number(json[3]);
    }
}