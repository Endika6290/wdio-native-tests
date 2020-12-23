class LoginScreen{
    constructor(){
        this.SignInTitle = '//android.widget.TextView[@resource-id="com.stubhub:id/title_tv"]';
        this.EmailInput = '//android.widget.EditText[@resource-id="com.stubhub:id/username_input"]';
        this.PasswordInput = '//android.widget.EditText[@resource-id="com.stubhub:id/password_input"]';
        this.SignInButton = '//android.widget.Button[@resource-id="com.stubhub:id/login_btn"]';

        this.USERNAME= 'stubhubmobileqe2016@gmail.com';
        this.PASSWORD='ihatestupidpeople2';
    }
}

module.exports = new LoginScreen();