import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('My Login application', () => {
    beforeAll('Navigate to url', async () => {
        browser.url('https://www.saucedemo.com/');
    })

    it('To have url title', async () => {
        await expect(browser).toHaveTitle('Swag Labs')
    });

    it('Button login to be clickable', async () => {
        await expect(LoginPage.btnLogin).toBeClickable();
    })

    it('Should Logo to be displayed', async () => {
        await expect (LoginPage.logoLoginPage).toBeExisting();
        await expect (LoginPage.logoLoginPage).toBeDisplayed();
    });

    it('Should Img Bot to be displayed', async () => {
        await expect (LoginPage.botImgLoginPage).toBeExisting();
        await expect (LoginPage.botImgLoginPage).toBeDisplayed();
        await LoginPage.botImgLoginPage.getCSSProperty('/static/media/Login_Bot_graphic.20658452.png')
    });

    it('Should not login with empty inputs', async () => {
        await LoginPage.loginAs ('','');
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username is required');
    });

    it('Should not login with user name empty', async () => {
        await LoginPage.loginAs ('','secret_sauce');
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username is required');
        await browser.refresh();
    });

    it('Should not login with password empty', async () => {
        await LoginPage.loginAs ('standard_user','');
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Password is required');
        await browser.refresh();
    });

    it('Should not login with user name invalid', async () => {
        await LoginPage.loginAs ('invalidUser','secret_sauce');
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await browser.refresh();
    });

    it('Should not login with password invalid', async () => {
        await LoginPage.loginAs ('standard_user','invalidPass');
        await LoginPage.errorMsg.waitForDisplayed({timeout: 10000});
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Username and password do not match any user in this service');
        await browser.refresh();
    });

    it('Should login with valid credentials and logout', async () => {
        await LoginPage.loginAs ('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await expect(InventoryPage.btnBurgerMenu).toBeClickable();
        await InventoryPage.btnBurgerMenu.click();
        await InventoryPage.btnBurgerMenu.waitForDisplayed({timeout: 50000});
        await browser.url('https://www.saucedemo.com/');
    });

    it('Should try to login with blocked user', async () => {
        await LoginPage.loginAs ('locked_out_user','secret_sauce');
        await expect(LoginPage.errorMsg).toBeDisplayed();
        await expect(LoginPage.errorMsg).toHaveText('Epic sadface: Sorry, this user has been locked out.');
    });

    it('Should login with user : problem user', async () => {
        await LoginPage.loginAs ('problem_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(InventoryPage.btnBurgerMenu).toBeClickable();
        await InventoryPage.btnBurgerMenu.click();
        await InventoryPage.btnBurgerMenu.waitForDisplayed({timeout: 50000});
        await browser.url('https://www.saucedemo.com/');
    });

    it('Should login with user : performance_glitch_user', async () => {
        await LoginPage.loginAs ('performance_glitch_user','secret_sauce');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await expect(InventoryPage.btnBurgerMenu).toBeClickable();
        await InventoryPage.btnBurgerMenu.click();
        await InventoryPage.btnBurgerMenu.waitForDisplayed({timeout: 50000});
        await browser.url('https://www.saucedemo.com/');
    });
});


