import GameRecentPlayed from "./GameRecentPlayed";
import Activity from "./Activity";
import UserProgress from "./UserProgress";
import AchievementRecent from "./AchievementRecent";
import GameLast from "./GameLast";

export default class UserSummary {
    id: number;
    totalPoints: number;
    totalSoftcorePoints: number;
    totalTruePoints: number;
    permissions: number;
    memberSince: Date;
    rank: number;
    untracked: boolean;
    userPic: string;
    motto: string;
    userWallActive: boolean;
    totalRanked: number;
    lastGameID: number;
    lastGame: GameLast;
    richPresenceMsg: string;
    recentlyPlayedCount: number
    recentlyPlayed: Array<GameRecentPlayed> = [];
    lastActivity: Activity;
    status: string;
    awarded: Array<UserProgress> = [];
    recentAchievements: Array<AchievementRecent> = [];
    contribCount: number;
    contribYield: number;

    constructor(json: any) {
        this.id = Number(json.ID);
        this.totalPoints = Number(json.TotalPoints);
        this.totalSoftcorePoints = Number(json.TotalSoftcorePoints);
        this.totalTruePoints = Number(json.TotalTruePoints);
        this.permissions = Number(json.Permissions);
        this.memberSince = new Date(json.MemberSince);
        this.rank = Number(json.Rank);
        this.untracked = Boolean(Number(json.Untracked));
        this.userPic = json.UserPic;
        this.motto = json.Motto;
        this.userWallActive = Boolean(Number(json.UserWallActive));
        this.totalRanked = Number(json.TotalRanked);
        this.lastGameID = Number(json.LastGameID);
        this.lastGame = new GameLast(json.LastGame);
        this.richPresenceMsg = json.RichPresenceMsg;
        this.recentlyPlayedCount = Number(json.RecentlyPlayedCount);
        Object.entries(json.RecentlyPlayed).forEach(([_key, value]) => {
            this.recentlyPlayed.push(new GameRecentPlayed(value))
        });
        this.lastActivity = new Activity(json.LastActivity);
        this.status = json.Status;
        Object.entries(json.Awarded).forEach(([key, value]) => {
            this.awarded.push(new UserProgress(Number(key), value))
        });
        Object.entries(json.RecentAchievements).forEach(([_, game]) => {
            Object.entries(game as object).forEach(([_, achievement]) => {
                this.recentAchievements.push(new AchievementRecent(achievement))
            })
        });
        this.contribCount = Number(json.ContribCount);
        this.contribYield = Number(json.ContribYield);
    }
};