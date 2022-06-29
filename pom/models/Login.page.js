const BasePage = require('./Base.page');

class LoginPage extends BasePage {

    constructor(page) {
        super(page);

        //locators
        this.usernameField = '#username';
        this.passwordField = '#password';
        this.loginButton = '#log-in';
    }

    async navigate() {
        await super.navigate('index.html');
    }

    async login(username, password) {
        await this.page.fill(this.usernameField, username);
        await this.page.fill(this.passwordField, password);
        await this.page.click(this.loginButton);
    }

}

module.exports = LoginPage;