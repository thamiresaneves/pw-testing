const { chromium } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();

    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');

    //click on the keynotes
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');

    await browser.close();
})();