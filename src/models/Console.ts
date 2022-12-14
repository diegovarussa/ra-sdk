/**
 * Returns mapping of known consoles
 */
export default class Console {
    /** Unique identifier of the console */
    id: number;
    /** Name of the console */
    name: string;

    constructor(json: any) {
        this.id = Number(json.ID);
        this.name = json.Name;
    }
}