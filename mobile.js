const { chromium, devices } = require('playwright'); // Or 'chromium' or 'webkit'.
const iPhone = devices['iPhone 11'];

(async() => {
    //mobile code
    const browser = await chromium.launch({ headless: false, slowMo: 300 });

    const context = await browser.newContext({
        ...iPhone,
        permissions: ['geolocation'],
        geolocation: { latitude: 19.432608, longitude: -99.133209 },
        locale: 'pt-BR',
    });

    //accessing google maps
    const page = await context.newPage();
    await page.goto('https://www.google.com/maps');


    //closing browser
    await browser.close();
})();