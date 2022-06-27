const { webkit } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    const browser = await webkit.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();

    //navigate to site
    await page.goto('https://demoqa.com/frames');

    //logic to handle iframes
    const frame1 = await page.frame({ url: /\/sample/ });
    const heading1 = await frame1.$('h1');

    console.log(await heading1.innerText());

    await browser.close();
})();