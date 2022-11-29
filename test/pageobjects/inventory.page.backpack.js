class InventoryPageBackPack {

    get btnAddToCartButton () {
        return $('#add-to-cart-sauce-labs-backpack');
    }

    get cart () {
        return $('#shopping_cart_container > a');
    }

    get backPackTitleItem () {
        return $('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_name.large_size');
    }

    get backPackParagraph () {
        return $('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_desc.large_size');
    }

    get backPackPrice () {
        return $('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_price');
    }

    get backPackImg () {
        return $('.inventory_details_img');
    }
}

export default new InventoryPageBackPack();