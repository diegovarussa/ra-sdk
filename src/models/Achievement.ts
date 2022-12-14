export default class Achievement {
    /** Unique identifier of the achievement */
    id: number;
    /** User who originally created the achievement */
    author: string;
    /** Title of the achievement */
    title: string;
    /** Description fo the achievement */
    description: string;
    /** Number of points the achievement worth */
    points: number;
    /** Tell if this achievement can be missable (false) does not guarantee it is not missable */
    isMissable: boolean;

    constructor(json: any) {
        this.id = Number(json.ID);
        this.title = json.Title;
        this.description = json.Description;
        this.points = Number(json.Points);
        this.author = json.Author;
        this.isMissable = this.title.includes('[m]');
    }
};