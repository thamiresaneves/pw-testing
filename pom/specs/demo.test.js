const { chromium } = require('playwright');
const BasePage = require('../models/Base.page')
const HomePage = require('../models/Home.page')
const LoginPage = require('../models/Login.page')

beforeAll(async() => {
    browser = await chromium.launch({ headless: false });
    context = await browser.newContext();
    page = await browser.newPage();

    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    basePage = new BasePage(page);

    await loginPage.navigate();
});

afterAll(async() => {
    await context.close();
    await browser.close();
});

test('Should be able to login', async() => {
    await loginPage.login('username', 'password');

    expect(await page.title()).not.toBeNull();
});

test('Should be logged in as Jack Gomez', async() => {
    expect(await homePage.getUserName()).toBe('Jack Gomez');
});

test('Should have total balance of $350', async() => {
    expect(await homePage.getBalance('total')).toBe('$350');
});

test('Should credit available is $17800', async() => {
    expect(await homePage.getBalance('credit')).toBe('$17,800');
});

test('Should have due today of $180', async() => {
    expect(await homePage.getBalance('due')).toBe('$180');
});