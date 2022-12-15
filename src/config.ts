import Client from "../src/Client"
import * as dotenv from 'dotenv';
dotenv.config();

/** RetroAchievements Username */
const userName = process.env.USER_NAME as string;
/** RetroAchievements Web API Key */
const webApiKey = process.env.WEB_API_KEY as string;
/** RetroAchievements game ID */
const gameId = Number(process.env.GAME_ID as string);
/** RetroAchievements game ID */
const consoleId = Number(process.env.CONSOLE_ID as string);
/** RetroAchievements Achievement ID */
const achievementId = Number(process.env.ACHIEVEMENT_ID as string);
/** User who has claims to return in API */
const claimUser = process.env.CLAIM_USER as string;
/** Star date used to filter range (Unix Timestamp) in seconds */
const fromDate = Number(process.env.FROM_DATE);
/** End date used to filter range (Unix Timestamp) in seconds */
const toDate = Number(process.env.TO_DATE);
/** To filter by day (YYYY-MM-DD) */
const dayFilter = process.env.DAY as string;
/** Client instance */
const client = new Client(userName, webApiKey);

export {
    userName,
    gameId,
    consoleId,
    achievementId,
    claimUser,
    fromDate,
    toDate,
    dayFilter,
    client,
}
