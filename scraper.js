const puppeteer = require("puppeteer");
const config = require("./config.json")
class Scraper {
  async tiktokScraper({ username } = {}) {
    const url = `${config.url}${username}`;
    const browser = await puppeteer.launch({ headless: true });
   // const page = await browser.newPage();
    const start = Date.now();

    await page.goto(`${url}?lang=en`, { waitUntil: "networkidle2" });

    //Scrape Username
    const [el1] = await page.$x(
      `${config.username}`
    );
    const txt1 = await el1.getProperty("textContent");
    const username1 = await txt1.jsonValue()
    //Scrape Followers
    const [el2] = await page.$x(
      `${config.followers}`
    );
    const txt2 = await el2.getProperty("textContent");
    const followers = await txt2.jsonValue();
    //Scrape Followings
    const [el3] = await page.$x(
      `${config.followings}`
    );
    const txt3 = await el3.getProperty("textContent");
    const followings = await txt3.jsonValue();
    //Scrape Likes
    const [el4] = await page.$x(
      `${config.likes}`
    );
    const txt4 = await el4.getProperty("textContent");
    const likes = await txt4.jsonValue();
    //Scrape Description
    const [el5] = await page.$x(
      `${config.desc}`
    );
    const txt5 = await el5.getProperty("textContent");
    const dsc = await txt5.jsonValue();

    //Scrape Description
    let website = "None";
      try {
        const [el6] = await page.$x(
      `${config.website}`
    );
    const txt6 = await el6.getProperty("textContent");
    website = "https://" + await txt6.jsonValue();
        } catch (error) {
          website = "None";
        }


        //Scrape Pfp
        const [el7] = await page.$x(
          `${config.pfp}`
        );
        const txt7 = await el7.getProperty("src");
        const pfp = await txt7.jsonValue();

        console.log('Took', Date.now() - start, 'ms');
    return {
        username: username1.trim(),
        followings: followings,
        followers: followers,
        likes: likes,
        website: website,
        dsc: dsc,
        url: url,
        pfp: pfp
    }
  }
}

module.exports = Scraper;
