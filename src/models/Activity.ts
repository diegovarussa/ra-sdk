export default class Activity {
    /** Unique identifier of the activity */
    id: number;
    /** When the activity occurred */
    timestamp: Date;
    /** When the activity was last modified */
    lastUpdate: Date;
    /** Type of activity */
    activityType: number;
    /** User associated to the activity */
    user: string;
    /** Additional information about the activity */
    data: string;
    /** Additional information about the activity */
    data2: string;

    constructor(json: any) {
        this.id = Number(json.ID);
        this.timestamp = new Date(json.timestamp);
        this.lastUpdate = new Date(json.lastupdate);
        this.activityType = Number(json.activitytype);
        this.user = json.User;
        this.data = String(json.data);
        this.data2 = String(json.data2);
    }
};