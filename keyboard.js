const { chromium } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/key_presses');

    //type some text
    await page.click('input');
    await page.keyboard.type('one does not simply exit vim');

    //selecting part of the text and erasing it
    await page.keyboard.down('Shift');
    for (let i = 0; i < 'exit vim'.length; i++) {
        await page.keyboard.press('ArrowLeft');
    }

    await page.keyboard.up('Shift');

    await page.keyboard.press('Backspace');
    await page.keyboard.type('walk in to mordor');

    await browser.close();
})();