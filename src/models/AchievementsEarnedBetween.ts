/** Returns achievements earned by a user between two timestamps */
export default class AchievementsEarnedBetween
{
    achievements: Array<{
        achievementId: number,
        author: string,
        badgeName: number,
        badgeUrl: string,
        consoleName: string,
        cumulativeScore: number,
        date: Date,
        description: string,
        gameIcon: string,
        gameId: number,
        gameTitle: string,
        gameUrl: string,
        hardcoreMode: boolean,
        points: number,
        title: string,
    }> = [];

    constructor(json: any) {
        for (let i = 0; i < json.length; i++) {
            this.achievements.push({
                achievementId: Number(json[i].AchievementID),
                author: json[i].Author,
                badgeName: Number(json[i].BadgeName),
                badgeUrl: json[i].BadgeURL,
                consoleName: json[i].ConsoleName,
                cumulativeScore: Number(json[i].CumulScore),
                date: new Date(json[i].Date),
                description: json[i].Description,
                gameIcon: json[i].GameIcon,
                gameId: Number(json[i].GameID),
                gameTitle: json[i].GameTitle,
                gameUrl: json[i].GameURL,
                hardcoreMode: Boolean(Number(json[i].HardcoreMode)),
                points: Number(json[i].Points),
                title: json[i].Title,
            });
        }
    }
};