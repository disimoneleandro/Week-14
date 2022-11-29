import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import InventoryPageBackPack from '../pageobjects/inventory.page.backpack';

describe('Correct information item', () => {
    beforeAll('Navigate to url', async () => {
            browser.url('https://www.saucedemo.com/');
    });

    it('Should valid information back pack item', async () => {
        await LoginPage.loginAs ('standard_user','secret_sauce');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await InventoryPage.backPackImg.click();
        await browser.url('https://www.saucedemo.com/inventory-item.html?id=4');
        await expect (InventoryPageBackPack.backPackTitleItem).toBeDisplayed();
        await expect (InventoryPageBackPack.backPackParagraph).toBeDisplayed();
        await expect (InventoryPageBackPack.backPackPrice).toBeDisplayed();
        await expect (InventoryPageBackPack.backPackImg).toBeDisplayed();
    })
});