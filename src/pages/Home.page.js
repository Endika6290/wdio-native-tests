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
        }else{
            ActionHelper.pause(10);
            ActionHelper.click(this.getObjectLocator().ProfileButton);
        }
    }

    launchApp() {
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    closeApp() {
        ActionHelper.closeApp();
    }

    deleteSession() {
        ActionHelper.deleteSession();
    }

}

module.exports = HomePage;

