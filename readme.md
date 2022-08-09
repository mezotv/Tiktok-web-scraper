
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

```js
{
  username: 'tiktok',
  followings: '543',
  followers: '61.1M',
  likes: '265M',
  dsc: 'You Have To See It 👀',
  website: 'https://tiktok.com/',
  url: 'https://www.tiktok.com/@tiktok',
  pfp: 'https://p16-sign.tiktokcdn-us.com/tos-useast5-avt-0068-tx/1971e99be0d67160f34f39fb1d66a0e5~c5_100x100.jpeg?x-expires=1647277200&x-signature=nW%2F5bqAsSmzmaA%2FfsZB2qRUzIFg%3D'
}
```
## Developers

- [@RT](https://github.com/rtgamingwdt)
- [@Mezo](https://github.com/mezotv)

