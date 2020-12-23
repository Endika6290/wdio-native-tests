const ActionHelper = require('./../helpers/actionHelpers');

class LoginPage {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/`
            + 'Login.screen.js');
    }

    checkTitle() {
        ActionHelper.isVisible(this.getObjectLocator().SignInTitle);
    }

    login(){
        ActionHelper.sendText((this.getObjectLocator().EmailInput),(this.getObjectLocator().USERNAME));
        ActionHelper.sendText((this.getObjectLocator().PasswordInput),(this.getObjectLocator().PASSWORD));
        ActionHelper.click((this.getObjectLocator().SignInButton));
        ActionHelper.pause(5);

    }
}

module.exports = LoginPage;