import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';

describe('Correct store display', () => {
    beforeAll('Navigate to url', async () => {
        browser.url('https://www.saucedemo.com/');
    })

    it('Should show all shop items', async () => {
        await LoginPage.loginAs ('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await expect (InventoryPage.allItemsDiv).toBeDisplayed();
        await expect (InventoryPage.allItems).toBeDisplayed();
        await expect (InventoryPage.invetoryItemDescription).toBeDisplayed();
        await expect (InventoryPage.header).toBeDisplayed();
        await expect (InventoryPage.footer).toBeDisplayed();
        await expect (InventoryPage.btnInventoryAdd).toBeClickable();
    })
});