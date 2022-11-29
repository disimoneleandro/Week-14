import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import InventoryPageBackPack from '../pageobjects/inventory.page.backpack';
import CartPage from '../pageobjects/page.cart';
import CheckoutStepOne from '../pageobjects/checkout.step.one';
import CheckoutStepTwo from '../pageobjects/checkout.step.two';
import CheckoutComplete from '../pageobjects/checkout.complete';


describe('Buy item', () => {
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

    it('Should login with valid credentials and buy item', async () => {
        await LoginPage.loginAs ('standard_user','secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        await browser.url('https://www.saucedemo.com/inventory.html');
        await InventoryPage.backPackImg.click();
        await browser.url('https://www.saucedemo.com/inventory-item.html?id=4');
        await InventoryPage.backPackImg.click();
        await InventoryPageBackPack.btnAddToCartButton.click();
        await InventoryPageBackPack.cart.click();
        await browser.url('https://www.saucedemo.com/cart.html');
        await CartPage.checkoutCart.click();
        await browser.url('https://www.saucedemo.com/checkout-step-one.html');
        await CheckoutStepOne.inputUserBuy ('Roy','Good','1880');
        await browser.url('https://www.saucedemo.com/checkout-step-two.html');
        await CheckoutStepTwo.btnFinish.click();
        await browser.url('https://www.saucedemo.com/checkout-complete.html');
        await CheckoutComplete.btnCheckoutComplete.click();
        await browser.url('https://www.saucedemo.com/inventory.html');
        await InventoryPage.btnBurgerMenu.click();
        await InventoryPage.btnBurgerMenu.waitForDisplayed({timeout: 50000});
        await browser.url('https://www.saucedemo.com/');
    });
});