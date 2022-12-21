# Features

## Supports:
* Node.js
* Browsers
* TypeScript

## Provide correct types
API result `"123"` (`string`) will be `123` (`number`) in the SDK

## Provide documentation for each field
```typescript
client = new Client(userName, webApiKey);
game = await client.getGame(515);
game.forumTopicId; 
// Hovering the mouse over `forumTopicId` will show:
// Unique identifier of the official forum topic for the game
```

## Parse comments from achievement and game
Extract data form comments to provide user tips about how to complete that achievement.

## Extra Field
Added extra fields that the API does not provide and are useful information to use.

## Achievement Class
New filed `isMissable` (`boolean`):
* Tell if this achievement can be missable searching for the string "[m]" in the title.
* `false` does not guarantee it is not missable because some people forget to insert that string in the title.

## Contents

- [Getting started](#getting-started)
- [Examples](#examples)
  - [Initializing the client](#initializing-the-client)
  - [Top ten users by points](#top-ten-users-by-points)
  - [CORS for browser](#top-ten-users-by-points)


## Getting started

### Install

```sh
npm install --save ra-sdk
```

## Examples

### Initializing the Client

To initialize the client, you will need your username and your RetroAchievements Web API key. To get your Web API key, visit [your control panel](http://retroachievements.org/controlpanel.php) on the RetroAchievements website.

You can initialize the client like so:

```typescript
import { Client } from "ra-sdk";
const client = new Client('youUserName', 'yourWebApiKey');
```

### Top ten users by points

```typescript
const topTen = await client.getTopTenUsers();
console.log(topTen);
```

### CORS for browser

To web scrape achievement and game comments a cors proxy is needed for browsers, we are using https://corsproxy.io/ but you can provide yours in the client constructor if you need this feature: 
```typescript
import { Client } from "ra-sdk";
const client = new Client('youUserName', 'yourWebApiKey', 'https://proxy.cors.sh/');
```