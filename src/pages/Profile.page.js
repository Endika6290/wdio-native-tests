const ActionHelper = require('./../helpers/actionHelpers');

class HomePage {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/`
            + 'Profile.screen.js');
    }

    checkProfilePage() {
        ActionHelper.isVisible(this.getObjectLocator().ProfileImage);
        //ActionHelper.waitForElement(this.getObjectLocator().ProfileImage,10);
    }

}

module.exports = HomePage;
