const { chromium } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });

    const context = await browser.newContext({
        recordVideo: {
            dir: "./recordings"
        }
    });

    const page = await context.newPage();

    await page.goto('https://the-internet.herokuapp.com/dynamic_loading/1');

    //clicking on button
    await page.click('button');
    await page.waitForSelector('#loading');
    await page.waitForSelector('#loading', { state: 'hidden' });
    await page.waitForTimeout(100);

    //closing browser
    await browser.close();
})();