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
    goToProfile2() {
            ActionHelper.click(this.getObjectLocator().ProfileButton);
            ActionHelper.pause(10);
    }


    launchApp() {
        if (browser.capabilities.platform.toLowerCase() === "android" ){
            ActionHelper.resetApp();
            ActionHelper.pause(3);
        }
        ActionHelper.launchApp();
        ActionHelper.switchToNativeContext();
        ActionHelper.pause(10);
    }

    deleteAllCookies(){
        ActionHelper.deleteAllCookies();
    }

}

module.exports = HomePage;

