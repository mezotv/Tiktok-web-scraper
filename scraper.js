const puppeteer = require("puppeteer");
class Scraper {
  async tiktokScraper({ username } = {}) {
    const url = `https://www.tiktok.com/@${username}`;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url, { waitUntil: "networkidle0" });

    //Scrape Username
    const [el3] = await page.$x(
      '//*[@id="app"]/div[2]/div[2]/div/div[1]/div[1]/div[2]/h2'
    );
    const txt3 = await el3.getProperty("textContent");
    const username1 = await txt3.jsonValue()
    //console.log(`Username: ${rawTxt3}`)
    //Scrape Followers
    const [el] = await page.$x(
      '//*[@id="app"]/div[2]/div[2]/div/div[1]/h2[1]/div[2]/strong'
    );
    const txt = await el.getProperty("textContent");
    const followers = await txt.jsonValue();
    //console.log(`Followers: ${rawTxt}`)
    //Scrape Followings
    const [el1] = await page.$x(
      '//*[@id="app"]/div[2]/div[2]/div/div[1]/h2[1]/div[1]/strong'
    );
    const txt1 = await el1.getProperty("textContent");
    const followings = await txt1.jsonValue();
    //console.log(`Followings: ${rawTxt1}`)
    //Scrape Likes
    const [el2] = await page.$x(
      '//*[@id="app"]/div[2]/div[2]/div/div[1]/h2[1]/div[3]/strong'
    );
    const txt2 = await el2.getProperty("textContent");
    const likes = await txt2.jsonValue();
    //console.log(`Likes: ${rawTxt2}`)

    return {
        username: username1.trim(),
        followings: followings,
        followers: followers,
        likes: likes
    }
  }
}

module.exports = Scraper;
