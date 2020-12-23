class LoginScreen{
    constructor(){
        this.SignInTitle = '//XCUIElementTypeStaticText[@name="lblLogin"]';
        this.EmailInput= $('~SignInEmailField');
        this.PasswordInput= $('~SignInPasswordField');
        this.SignInButton = $('~LogInButton');


        this.USERNAME= 'stubhubmobileqe2016@gmail.com';
        this.PASSWORD='ihatestupidpeople2';

    }

}

module.exports = new LoginScreen();