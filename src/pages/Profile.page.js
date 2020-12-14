const ActionHelper = require('./../helpers/actionHelpers');

class HomePage {

    getObjectLocator() {
        return require(`./../screens/native/${browser.capabilities.platformName.toLowerCase()}/`
            + 'Profile.screen.js');
    }

    checkProfilePage() {
        ActionHelper.isVisible(this.getObjectLocator().ProfileImage);
    }

}

module.exports = HomePage;
