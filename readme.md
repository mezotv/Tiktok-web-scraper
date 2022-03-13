
# Project Title

Easy Tiktok scraper


## Installation

Install easy-tiktok-scraper with npm

```bash
  npm install easy-tiktok-scraper
```
    
## Example

```js
const { Scraper } = require("easy-tiktok-scraper")

const scraper1 = new Scraper()

const tiktokData = [];

scraper1.tiktokScraper({
    username: "tiktok",
  })
  .then(async (data) => {
    console.log(data);
    tiktokData.push(data);
  });

```
## Console output

```json
{
  username: 'tiktok',
  followings: '543',
  followers: '61.1M',
  likes: '265M'
}
```
## Developers

- [@RT](https://github.com/rtgamingwdt)
- [@Mezo](https://github.com/mezotv)

