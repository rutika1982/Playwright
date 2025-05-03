export  class LoginPage{

    username_textbox = '[data-test="username"]';
    password_textbox = '[data-test="password"]';
    login_button = '[data-test="login-button"]';
    

    constructor(page){
        this.page = page;
    }

    async enterUsername(username){
        return this.page.locator(this.username_textbox).fill(username);
    }
    async enterPassword(password){
        return this.page.locator(this.password_textbox).fill(password);
    }
    async clickLoginButton(){
        return this.page.locator(this.login_button).click();
    }
    async login(username, password){
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginButton();
    }

}