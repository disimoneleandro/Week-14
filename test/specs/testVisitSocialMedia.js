import LoginPage from  '../pageobjects/login.page';
import SocialMediaIcons from '../pageobjects/social.media.icons';


describe('Check social media navigation', () => {
    beforeAll('Navigate to url', async () => {
        browser.url('https://www.saucedemo.com/');
    })

    it('Should navigate to twitter page', async () => {
        await LoginPage.loginAs ('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await SocialMediaIcons.btnTwitter.click();
        await browser.url('https://twitter.com/saucelabs');
        await browser.url('https://www.saucedemo.com/');
    })

    it('Should navigate to facebook page', async () => {
        await LoginPage.loginAs ('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await SocialMediaIcons.btnFacebook.click();
        await browser.url('https://www.facebook.com/saucelabs');
        await browser.url('https://www.saucedemo.com/');
    })

    it('Should navigate to linkedin page', async () => {
        await LoginPage.loginAs ('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await SocialMediaIcons.btnLinkedIn.click();
        await browser.url('https://twitter.com/saucelabs');
        await browser.url('https://www.linkedin.com/company/sauce-labs/');
    })
});