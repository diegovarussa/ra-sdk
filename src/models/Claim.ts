export default class Claim {
    /** User holding the claim */
    user: string;
    /** Set type claimed: 0 - new set, 1 - revision */
    setType: number;
    /** Claim type: 0 - primary, 1 - collaboration */
    claimType: number;
    /** Date the claim was made */
    created: Date;
    /** Date the claim will expire */
    expiration: Date;

    constructor(json: any) {
        this.user = json.User;
        this.setType = Number(json.SetType);
        this.claimType = Number(json.ClaimType);
        this.created = new Date(json.Created);
        this.expiration = new Date(json.Expiration);
    }
};