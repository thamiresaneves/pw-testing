const { chromium } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();

    await page.goto('https://google.com');

    await browser.close();
})();