const { chromium } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    await page.goto('https://applitools.com');


    //take screenshot
    await page.screenshot({ path: 'screenshot.png' });

    //take screenshot of an element
    const logo = await page.$('.logo');
    await logo.screenshot({ path: 'logo.png' });

    //take screenshot full screen - entire page
    await page.screenshot({ path: 'fullpage.png', fullPage: true });

    //closing browser
    await browser.close();
})();