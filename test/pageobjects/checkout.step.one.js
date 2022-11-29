class CheckoutStepOne {

    get inputName () {
        return $('#first-name');
    }

    get inputLastName () {
        return $('#last-name');
    }

    get inputPostalCode () {
        return $('#postal-code');
    }

    get btnCancel () {
        return $('#cancel');
    }

    get btnContinue () {
        return $('input[name="continue"]');
    }

    get errorMsgBuyItem () {
        return $('h3[data-test="error"]');
    }

    async inputUserBuy (firstname, lastname, zip) {
        await this.inputName.setValue(firstname);
        await this.inputLastName.setValue(lastname);
        await this.inputPostalCode.setValue(zip);
        await this.btnContinue.click();
    }

}

export default new CheckoutStepOne();