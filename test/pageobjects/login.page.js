class LoginPage {

    get inputUserName () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin () {
        return $('#login-button');
    }

    get errorMsg () {
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }

    get logoLoginPage () {
        return $('#root > div > div.login_logo');
    }

    get botImgLoginPage () {
        return $('#root > div > div.login_wrapper > div.login_wrapper-inner > div.bot_column')
    }

    async loginAs (username, password) {
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }
}

export default new LoginPage();
