import Client from "../src/Client"
import * as dotenv from 'dotenv';
dotenv.config();

/** RetroAchievements Username */
const userName = process.env.USER_NAME as string;
/** RetroAchievements Web API Key */
const webApiKey = process.env.WEB_API_KEY as string;
/** RetroAchievements game ID */
const gameId = Number(process.env.GAME_ID as string);
/** RetroAchievements Achievement ID */
const achievementId = Number(process.env.ACHIEVEMENT_ID as string);
/** Star date used to filter range (Unix Timestamp) */
const fromDate = new Date(process.env.FROM_DATE as string).getTime() / 1000;
/** End date used to filter range (Unix Timestamp)  */
const toDate = new Date(process.env.TO_DATE as string).getTime() / 1000;
/** Client instance */
const client = new Client(userName, webApiKey);

export {
    userName,
    gameId,
    achievementId,
    fromDate,
    toDate,
    client,
}
