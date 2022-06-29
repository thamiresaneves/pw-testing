const { chromium } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();

    await page.goto('https://paint.js.org/');

    //move to canvas
    await page.mouse.move(200, 200);

    //click on the mouse
    await page.mouse.down();
    await page.mouse.move(400, 200);
    await page.mouse.move(400, 400);
    await page.mouse.move(200, 400);
    await page.mouse.move(200, 200);

    //releasing mouse click
    await page.mouse.up();

    //closing browser
    await browser.close();
})();