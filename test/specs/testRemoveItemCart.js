import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import InventoryPageBackPack from '../pageobjects/inventory.page.backpack';
import CartPage from '../pageobjects/page.cart';

describe('Remove item to cart', () => {
    beforeAll('Navigate to url', async () => {
        browser.url('https://www.saucedemo.com/');
    })

    it('Should remove item to cart', async () => {
        await LoginPage.loginAs ('standard_user','secret_sauce');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await InventoryPage.backPackAddCartBtn.click();
        await InventoryPage.btnCart.click();
        await browser.url('https://www.saucedemo.com/cart.html');
        await CartPage.removeBtn.click();
        await CartPage.continueToShopping.click();
        await browser.url('https://www.saucedemo.com/inventory.html');
        await InventoryPage.btnBurgerMenu.click();
        await InventoryPage.btnBurgerMenu.waitForDisplayed({timeout: 50000});
        await browser.url('https://www.saucedemo.com/');

    });

});