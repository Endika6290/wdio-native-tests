const ActionHelper = require('./../helpers/actionHelpers');

class HomePage {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/`
            + 'Home.screen.js');
    }

    goToProfile() {
        if (ActionHelper.isVisible(this.getObjectLocator().jumbotron)) {
            ActionHelper.click(this.getObjectLocator().ProfileButton);
            ActionHelper.pause(10);
        }
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }
}

module.exports = HomePage;

