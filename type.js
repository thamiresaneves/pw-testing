const { chromium } = require('playwright'); // Or 'chromium' or 'webkit'.

(async() => {
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();

    await page.goto('https://the-internet.herokuapp.com/forgot_password');

    //Code to type text in email text box
    const email = await page.$('#email');
    await email.type('test@gmail.com', { delay: 50 });

    await browser.close();
})();