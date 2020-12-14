class HomeScreen{
    constructor(){
        this.jumbotron = '//android.widget.ImageView[@resource-id="com.stubhub:id/item_image"]';
        this.ProfileButton = '//android.widget.FrameLayout[@resource-id="com.stubhub:id/action_profile"]';
    }
}

module.exports = new HomeScreen();

