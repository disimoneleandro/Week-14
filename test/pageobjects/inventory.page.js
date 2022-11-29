class InventoryPage {

    get btnBurgerMenu () {
        return $('#react-burger-menu-btn');
    }

    get btnLogout () {
        return $('#logout_sidebar_link');
    }

    get backPackImg () {
        return $('img[alt="Sauce Labs Backpack"]');
    }

    get backPackAddCartBtn () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get btnCart () {
        return $('#shopping_cart_container > a');
    }

    get allItemsDiv () {
        return $('.inventory_list');
    }

    get allItems () {
        return $('.inventory_item');
    }

    get invetoryItemDescription () {
        return $('.inventory_item_description');
    }

    get btnInventoryAdd () {
        return $('.btn_inventory');
    }

    get header () {
        return $('.header_label');
    }

    get footer () {
        return $('.footer_copy');
    }
}

export default new InventoryPage();