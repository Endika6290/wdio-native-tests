const HomePage = require('../../pages/Home.page');
const LoginPage = require('../../pages/Login.page');
const ProfilePage = require('../../pages/Profile.page');
const profilePage = new ProfilePage();
const loginPage = new LoginPage();
const homePage = new HomePage();

describe('go to home page', () => {

    before(() => {
        homePage.launchApp();
    });

    after(() => {
        homePage.closeApp();
    });

    it('go to Profile or login', () => {
        homePage.goToProfile();
        loginPage.login();
        expect (profilePage.checkProfilePage());
    });
});