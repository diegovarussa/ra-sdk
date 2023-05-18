# Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting started](#getting-started)
- [Examples](#examples)
  - [Initializing the client](#initializing-the-client)
  - [Top ten users by points](#top-ten-users-by-points)
  - [User summary](#user-summary)
  - [Game info and user progress](#game-info-and-user-progress)
  - [Game info](#game-info)
  - [Game comments](#game-comments)
  - [Achievement comments](#achievement-comments)
  - [CORS for browser](#top-ten-users-by-points)
  - [Check credentials](#check-credentials)
- [Projects using this library](#projects-using-this-library)
- [How to test](#how-to-test)
- [Bug / Feature Request](#bug-and-feature-request)
- [Buy me a coffee ;)](#buy-me-a-coffee)
- [About me](#about-me)

![Version](https://img.shields.io/github/package-json/v/diegovarussa/ra-sdk)
[![GitHub Issues](https://img.shields.io/github/issues/diegovarussa/ra-sdk.svg)](https://github.com/diegovarussa/ra-sdk/issues) 
![Repo Size](https://img.shields.io/github/repo-size/diegovarussa/ra-sdk)

# Introduction
RA SDK (RetroAchievements SDK) offers a high-level object-oriented abstraction to fetch [RA API](https://github.com/RetroAchievements/RAWeb/tree/master/public/API) with full typing support and extra features.

## Features

### Supports:
* Node.js
* Browsers
* TypeScript

### Provide correct types:
API result `"123"` (`string`) will be `123` (`number`) in the SDK

### Provide documentation for each field:
![Autocomplete and comments](https://i.imgur.com/rFhDMFq.png)


### Parse comments from achievement and game:
Extract data from comments to provide user tips about how to complete that achievement.

### Added extra fields that the API does not provide and are useful information to use:


* New filed `isMissable` (`boolean`):
  * Tell if this achievement can be missable searching for the string "[m]" in the title.
  * `false` does not guarantee it is not missable because some people forget to insert that string in the title.

# Getting started

## Installing:

```sh
npm install --save ra-sdk
```

## Examples:

### Initializing the Client

To initialize the client, you will need your username and your RetroAchievements Web API key. To get your Web API key, visit [your control panel](http://retroachievements.org/controlpanel.php) on the RetroAchievements website.

You can initialize the client like so:

```typescript
import { Client } from "ra-sdk";
const client = new Client('youUserName', 'yourWebApiKey');
```
---

### Top ten users by points:

  ```ts
  const topTen = await client.getTopTenUsers();
  ```
<details>
  <summary>Result</summary>

  ```js
  [
    UserTopTen { name: 'MaxMilyin', points: 348687, retroRatio: 1001566 },
    UserTopTen {
      name: 'HippopotamusRex',
      points: 314940,
      retroRatio: 1193974
    },
    UserTopTen { name: 'Sarconius', points: 260080, retroRatio: 1175577 },
    UserTopTen { name: 'guineu', points: 243826, retroRatio: 678515 },
    UserTopTen {
      name: 'Andrey199650',
      points: 241322,
      retroRatio: 571014
    },
    UserTopTen { name: 'Wendigo', points: 231206, retroRatio: 1102330 },
    UserTopTen {
      name: 'donutweegee',
      points: 210093,
      retroRatio: 602855
    },
    UserTopTen { name: 'Infernum', points: 204931, retroRatio: 713560 },
    UserTopTen {
      name: 'AmericanNinja',
      points: 204226,
      retroRatio: 569431
    },
    UserTopTen {
      name: 'FabricioPrie',
      points: 198120,
      retroRatio: 458509
    }
  ]

  ```
</details>

---

### User summary:

  ```ts
  const userSummary = await client.getUserSummary();
  ```

<details>
  <summary>Result</summary>

  ```js
 UserSummary {
      recentlyPlayed: [
        GameRecentPlayed {
          id: 11750,
          title: 'Metal Slug: Super Vehicle-001',
          consoleId: 27,
          consoleName: 'Arcade',
          imageIcon: '/Images/049652.png',
          lastPlayed: 2023-02-06T21:15:12.000Z,
          myVote: NaN
        },
        GameRecentPlayed {
          id: 10073,
          title: 'GoldenEye 007',
          consoleId: 2,
          consoleName: 'Nintendo 64',
          imageIcon: '/Images/022585.png',
          lastPlayed: 2023-01-28T00:52:32.000Z,
          myVote: NaN
        },
        GameRecentPlayed {
          id: 21877,
          title: '~Hack~ Legend of Zelda, The: Ancient Dungeon',
          consoleId: 7,
          consoleName: 'NES',
          imageIcon: '/Images/065506.png',
          lastPlayed: 2023-01-25T21:41:24.000Z,
          myVote: NaN
        },
      ],
      awarded: [
        UserProgress {
          id: 319,
          numPossibleAchievements: 77,
          possibleScore: 600,
          numAchieved: 15,
          scoreAchieved: 68,
          numAchievedHardcore: 15,
          scoreAchievedHardcore: 68
        },
        UserProgress {
          id: 10073,
          numPossibleAchievements: 141,
          possibleScore: 1070,
          numAchieved: 0,
          scoreAchieved: 0,
          numAchievedHardcore: 0,
          scoreAchievedHardcore: 0
        },
        UserProgress {
          id: 11750,
          numPossibleAchievements: 32,
          possibleScore: 460,
          numAchieved: 2,
          scoreAchieved: 8,
          numAchievedHardcore: 2,
          scoreAchievedHardcore: 8
        },
      ],
      recentAchievements: [
        AchievementRecent {
          isAwarded: 1,
          hardcoreAchieved: 0,
          id: 59229,
          gameId: 11750,
          gameTitle: 'Metal Slug: Super Vehicle-001',
          badgeName: '136912',
          title: 'Tetsuyuki',
          description: 'Clear Mission 1.',
          points: 5,
          dateAwarded: 2023-01-17T18:04:59.000Z
        },
        AchievementRecent {
          isAwarded: 1,
          hardcoreAchieved: 0,
          id: 59251,
          gameId: 11750,
          gameTitle: 'Metal Slug: Super Vehicle-001',
          badgeName: '136929',
          title: 'Super Vehicle-001 - Rise',
          description: 'Clear Mission 1 with a Slug Tank.',
          points: 3,
          dateAwarded: 2023-01-17T18:05:07.000Z
        },
        AchievementRecent {
          isAwarded: 1,
          hardcoreAchieved: 0,
          id: 86029,
          gameId: 11825,
          gameTitle: 'Metal Slug 2: Super Vehicle-001/II',
          badgeName: '92440',
          title: 'Desert POW Rescue',
          description: 'Save 5 POWs in Mission 1 (P1).',
          points: 5,
          dateAwarded: 2023-01-17T18:08:01.000Z
        },
      ],
      id: 82930,
      totalPoints: 10041,
      totalSoftcorePoints: 129,
      totalTruePoints: 24039,
      permissions: 1,
      memberSince: 2018-11-12T12:09:51.000Z,
      rank: 2868,
      untracked: false,
      userPic: '/UserPic/Varussa.png',
      motto: 'We must all face the choice between what is right.',
      userWallActive: true,
      totalRanked: 35040,
      lastGameID: 11750,
      lastGame: GameLast {
        flags: 0,
        id: 11750,
        title: 'Metal Slug: Super Vehicle-001',
        consoleId: 27,
        consoleName: 'Arcade',
        forumTopicId: 6387,
        imageIcon: '/Images/049652.png',
        imageTitle: '/Images/016020.png',
        imageInGame: '/Images/016021.png',
        imageBoxArt: '/Images/016022.png',
        publisher: 'SNK',
        developer: 'Nazca Corporation',
        genre: 'Run & Gun',
        released: 1996-04-01T03:00:00.000Z,
        isFinal: false,
        richPresencePatch: 'Lookup:Difficulty\r\n' +
          '0x00=Level-1\r\n' +
          '0x01=Level-1\r\n' +
          '0x02=Level-3\r\n' +
          '0x03=Level-4\r\n' +
          '0x04=Level-5\r\n' +
          '0x05=Level-6\r\n' +
          '0x06=Level-7\r\n' +
          '0x07=Level-8\r\n' +
          '\r\n' +
          'Lookup:LevelName\r\n' +
          '0x00=Playing on Mission 1\r\n' +
          '0x01=Playing on Mission 2\r\n' +
          '0x02=Playing on Mission 3\r\n' +
          '0x03=Playing on Mission 4\r\n' +
          '0x04=Playing on Mission 5\r\n' +
          '0x05=Playing on Final Mission\r\n' +
          '0xff=Title Screen\r\n' +
          '\r\n' +
          'Lookup:Gun\r\n' +
          '0x00=Handgun\r\n' +
          '0x01=Shotgun\r\n' +
          '0x02=Flameshot\r\n' +
          '0x03=Rocket Launcher\r\n' +
          '0x04=H. Machine Gun\r\n' +
          '\r\n' +
          'Format:Continues\r\n' +
          'FormatType=VALUE\r\n' +
          '\r\n' +
          'Format:Prisoners\r\n' +
          'FormatType=VALUE\r\n' +
          '\r\n' +
          'Display:\r\n' +
          '?0xh6ece=hff?Title Screen\r\n' +
          '?0xh6ecb=h01?Demo\r\n' +
          '@LevelName(0xh6ece) on @Difficulty(0xhfd8a) - P1:  @Continues(0xHe3bb) continues and @Prisoners(0xhe3bd) POWs, P2: @Continues(0xHe3ba) continues and @Prisoners(0xhe3bc) POWs.'
      },
      richPresenceMsg: 'Playing on Mission 1 on Level-4 - P1:  0 continues and 0 POWs, P2: 0 continues and 0 POWs.',
      recentlyPlayedCount: 5,
      lastActivity: Activity {
        id: 60112782,
        timestamp: 2023-02-06T21:14:47.000Z,
        lastUpdate: 2023-02-06T21:15:12.000Z,
        activityType: 3,
        user: 'Varussa',
        data: '11750',
        data2: 'null'
      },
      status: 'Offline',
      contribCount: 0,
      contribYield: 0
    }

  ```
</details>

---

### Game info and user progress:

  ```ts
  const gameUserProgress = await client.getGameUserProgress(788);
  ```

<details>
  <summary>Result</summary>

  ```js
GameUserProgress {
      id: 788,
      title: 'Pokemon LeafGreen Version',
      gameTitle: 'Pokemon LeafGreen Version',
      consoleID: 5,
      consoleName: 'Game Boy Advance',
      console: undefined,
      forumTopicId: 2257,
      flags: 0,
      gameIcon: undefined,
      imageIcon: '/Images/042055.png',
      imageTitle: '/Images/008033.png',
      imageInGame: '/Images/008036.png',
      imageBoxArt: '/Images/052366.png',
      publisher: 'Nintendo',
      developer: 'Game Freak',
      genre: 'Role-Playing Game',
      released: 2004-09-07T03:00:00.000Z,
      achievements: [
        GameAchievement {
          id: 34776,
          title: 'I Choose You! [m]',
          description: "Defeat your rival in Oak's Lab.",
          points: 1,
          author: 'gooby',
          isMissable: true,
          trueRatio: 1,
          dateModified: 2022-04-13T00:13:47.000Z,
          dateCreated: 2016-04-15T22:06:54.000Z,
          numAwarded: 2955,
          numAwardedHardcore: 1762,
          badgeName: '233606',
          displayOrder: 1,
          memAddr: 'e235e95031553f17d22318e46f29197a',
          dateEarned: 2022-12-13T21:40:23.000Z,
          dateEarnedHardcore: 2022-12-13T21:40:23.000Z
        },
        GameAchievement {
          id: 34777,
          title: 'Champ In The Making! [m]',
          description: 'Win the optional battle against your rival on route 22.',
          points: 5,
          author: 'gooby',
          isMissable: true,
          trueRatio: 6,
          dateModified: 2022-04-13T00:13:48.000Z,
          dateCreated: 2016-04-15T22:07:15.000Z,
          numAwarded: 1709,
          numAwardedHardcore: 1195,
          badgeName: '233607',
          displayOrder: 2,
          memAddr: 'bb303ba7155f25b0021c1d6773e3d389',
          dateEarned: 2022-12-13T21:58:01.000Z,
          dateEarnedHardcore: 2022-12-13T21:58:01.000Z
        },
        GameAchievement {
          id: 34778,
          title: 'Always Plodding Behind!',
          description: 'Defeat your rival in Cerulean City.',
          points: 5,
          author: 'gooby',
          isMissable: false,
          trueRatio: 6,
          dateModified: 2022-04-13T00:13:48.000Z,
          dateCreated: 2016-04-15T22:07:21.000Z,
          numAwarded: 1620,
          numAwardedHardcore: 1100,
          badgeName: '233608',
          displayOrder: 4,
          memAddr: 'ae7f21588f1f4c758d3c083991f11cb8',
          dateEarned: null,
          dateEarnedHardcore: null
        }
      ],
      isFinal: false,
      numAchievements: 42,
      numDistinctPlayersCasual: 3173,
      numDistinctPlayersHardcore: 1838,
      richPresencePatch: 'b01e29de87e0f7bdcc04be88bce6fc66',
      numAwardedToUser: 3,
      numAwardedToUserHardcore: 3,
      userCompletion: 7.14,
      userCompletionHardcore: 7.14
    }

  ```
</details>

---

### Game info:

  ```ts
  const game = await client.getGame(788);
  ```

<details>
  <summary>Result</summary>

  ```js
  Game {
      id: 788,
      title: 'Pokemon LeafGreen Version',
      gameTitle: 'Pokemon LeafGreen Version',
      consoleID: 5,
      consoleName: 'Game Boy Advance',
      console: 'Game Boy Advance',
      forumTopicId: 2257,
      flags: 0,
      gameIcon: '/Images/042055.png',
      imageIcon: '/Images/042055.png',
      imageTitle: '/Images/008033.png',
      imageInGame: '/Images/008036.png',
      imageBoxArt: '/Images/052366.png',
      publisher: 'Nintendo',
      developer: 'Game Freak',
      genre: 'Role-Playing Game',
      released: 2004-09-07T03:00:00.000Z
    }

  ```
</details>

---

### Game comments:

  ```ts
  const gameComments = await client.getGameComments(788);
  ```

<details>
  <summary>Result</summary>

  ```js
  [
    CommentItem {
      user: 'completos',
      date: 2022-06-11T14:43:00.000Z,
      comment: 'MASTERED!'
    },
    CommentItem {
      user: 'SRamos',
      date: 2022-06-26T19:53:00.000Z,
      comment: 'Mastered :)'
    },
    CommentItem {
      user: 'Omegaelnegro',
      date: 2022-07-02T22:58:00.000Z,
      comment: 'Achievements for the Spain version plz'
    },
    CommentItem {
      user: 'LilacChicky',
      date: 2022-07-05T19:27:00.000Z,
      comment: 'Mastered! This is a good place to start doing Pokémon cheevos due to it being a remake of the first games and the relatively simple goals. Bulbapedia and the speed-up key will definitely be your friends. Incidentally, the guy that gave me my copy back in the Diamond/Pearl days insisted I call it LuigiGreen...and I still do! XD'
    }
  ]

  ```
</details>

---

### Achievement comments:

  ```ts
  const achievementComments = await client.getAchievementComments(59235);
  ```

<details>
  <summary>Result</summary>

  ```js
  [
    CommentItem {
      user: 'BerserkerBR',
      date: 2018-08-08T02:18:00.000Z,
      comment: 'stage 3. Stand in a specific point in the mountains. It triggers a special animation'
    },
    CommentItem {
      user: 'QRS666',
      date: 2020-08-28T15:57:00.000Z,
      comment: 'I still do not get this one :/ Any hint would be nice, thanks!'
    },
    CommentItem {
      user: 'xcommander',
      date: 2020-11-20T21:31:00.000Z,
      comment: "This can be triggered in any stage, as long as you're on the edge of a platform. Wait for a few seconds and the animation will be triggered."
    },
    CommentItem {
      user: 'jago2077',
      date: 2021-09-10T23:34:00.000Z,
      comment: 'like he s falling waoooooow'
    }
  ]
  ```
</details>

---

### Check credentials:

  ```ts
  const result = await client.isCredentialsValid();
  ```

<details>
  <summary>Result</summary>

  ```js
{ valid: false, message: 'Invalid Web API Key' }

  ```
</details>

---

### CORS for browser

To web scraping achievement and game comments a cors proxy is needed for browsers, we are using https://corsproxy.io/ but you can provide yours in the client constructor if you need this feature: 
```typescript
import { Client } from "ra-sdk";
const client = new Client('youUserName', 'yourWebApiKey', 'https://proxy.cors.sh/');
```

## Projects using this library:

* [RA Manager](https://diegovarussa.github.io/#/retro)

## How to test

```
npm run test
```

## Bug and Feature Request

If you find a bug, kindly open an issue [here](https://github.com/diegovarussa/ra-sdk/issues/new).

If you'd like to request a new function, feel free to do so by opening an issue [here](https://github.com/diegovarussa/ra-sdk/issues/new).

---

## Buy me a coffee ;)

Whether you use this project, have learned something from it, or just like it, please consider supporting it by buying me a coffee, so I can dedicate more time on open-source projects like this :)

<a href="https://www.buymeacoffee.com/diegovarussa" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## About me :)
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://diegovarussa.github.io/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/diegovarussa/)
