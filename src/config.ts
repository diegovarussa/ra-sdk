import Client from "../src/Client"
import * as dotenv from 'dotenv';
dotenv.config();

/** RetroAchievements Username */
const userName = process.env.USER_NAME as string;
/** RetroAchievements Web API Key */
const webApiKey = process.env.WEB_API_KEY as string;
/** RetroAchievements game ID */
const gameId = Number(process.env.GAME_ID as string);
/** Client instance */
const client = new Client(userName, webApiKey);

export {
    gameId,
    client,
}
