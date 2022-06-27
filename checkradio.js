const { firefox } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    //launching browser
    const browser = await firefox.launch({ headless: false, slowMo: 100 });

    //creating a page inside browser
    const page = await browser.newPage();

    //navigating to site
    await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');

    //check the second checkbox
    const checks = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=checkbox]');
    await checks[1].check();


    //uncheck the first checkbox
    await checks[0].uncheck();

    //select the second radio button
    const radios = await page.$$('#main > div.w3-row > div:nth-child(1) > input[type=radio]');
    await radios[1].check();

    await browser.close();
})();