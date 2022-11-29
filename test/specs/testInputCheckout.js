import LoginPage from  '../pageobjects/login.page';
import InventoryPage from '../pageobjects/inventory.page';
import InventoryPageBackPack from '../pageobjects/inventory.page.backpack';
import CartPage from '../pageobjects/page.cart';
import CheckoutStepOne from '../pageobjects/checkout.step.one';


describe('Testing of input checkout', () => {
    beforeAll('Navigate to url', async () => {
        browser.url('https://www.saucedemo.com/');
    })

    it('should not buy item with empty inputs', async () => {
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
        await CheckoutStepOne.inputUserBuy ('','','');
        await CheckoutStepOne.errorMsgBuyItem.waitForDisplayed({timeout: 10000});
        await expect(CheckoutStepOne.errorMsgBuyItem).toBeDisplayed();
        await expect(CheckoutStepOne.errorMsgBuyItem).toHaveText('Error: First Name is required');
    });

    it('should not buy item with empty last name', async () => {
        await CheckoutStepOne.inputUserBuy ('Tom','','');
        await CheckoutStepOne.errorMsgBuyItem.waitForDisplayed({timeout: 10000});
        await expect(CheckoutStepOne.errorMsgBuyItem).toBeDisplayed();
        await expect(CheckoutStepOne.errorMsgBuyItem).toHaveText('Error: Last Name is required');
    });

    it('should not buy item with empty zip', async () => {
        await CheckoutStepOne.inputUserBuy ('Warren','Sanchez','');
        await CheckoutStepOne.errorMsgBuyItem.waitForDisplayed({timeout: 10000});
        await expect(CheckoutStepOne.errorMsgBuyItem).toBeDisplayed();
        await expect(CheckoutStepOne.errorMsgBuyItem).toHaveText('Error: Postal Code is required');
    });

});