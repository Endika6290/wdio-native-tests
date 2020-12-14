const HomePage = require('../../pages/Home.page');
const LoginPage = require('../../pages/Login.page');
const ProfilePage = require('../../pages/Profile.page');
const profilePage = new ProfilePage();
const loginPage = new LoginPage();
const homePage = new HomePage();
const assert = require('assert');


describe('go to home page', () => {

    before(() => {
        homePage.launchApp();
    });

    it('go to Profile or login', () => {
        homePage.goToProfile();
        expect (loginPage.checkTitle());
    });

    it('Login in', () =>{
        homePage.goToProfile();
        loginPage.login();
        expect (profilePage.checkProfilePage());
    });

});