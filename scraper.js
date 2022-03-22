const puppeteer = require("puppeteer");
const config = require("./config.json")
class Scraper {
  async tiktokScraper({ username } = {}) {
    const url = `${config.url}${username}`;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    //Scrape Username
    const [el3] = await page.$x(
      `${config.username}`
    );
    const txt3 = await el3.getProperty("textContent");
    const username1 = await txt3.jsonValue()
    //console.log(`Username: ${rawTxt3}`)
    //Scrape Followers
    const [el] = await page.$x(
      `${config.followers}`
    );
    const txt = await el.getProperty("textContent");
    const followers = await txt.jsonValue();
    //console.log(`Followers: ${rawTxt}`)
    //Scrape Followings
    const [el1] = await page.$x(
      `${config.followings}`
    );
    const txt1 = await el1.getProperty("textContent");
    const followings = await txt1.jsonValue();
    //console.log(`Followings: ${rawTxt1}`)
    //Scrape Likes
    const [el2] = await page.$x(
      `${config.likes}`
    );
    const txt2 = await el2.getProperty("textContent");
    const likes = await txt2.jsonValue();
    //Scrape Description
    const [el4] = await page.$x(
      `${config.desc}`
    );
    const txt4 = await el4.getProperty("textContent");
    const dsc = await txt4.jsonValue();
        //Scrape Pfp
        const [el5] = await page.$x(
          `${config.pfp}`
        );
        const txt5 = await el5.getProperty("src");
        const pfp = await txt5.jsonValue();


    return {
        username: username1.trim(),
        followings: followings,
        followers: followers,
        likes: likes,
        dsc: dsc,
        url: url,
        pfp: pfp
    }
  }
}

module.exports = Scraper;
