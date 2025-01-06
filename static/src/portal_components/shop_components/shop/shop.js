/** @odoo-module **/
import { Component } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { BlockBanner } from "../shop_block_banner/block_banner";
import { FeaturedCategories } from "../shop_featured_categories/featured_categories";
import { CategoriesBanner } from "../shop_categories/categories_banner";
import { FlashDeal } from "../shop_flash_deals/flash_deal";
class Shop extends Component {

    static template = "enmasys_multiple_vendor.Shop";
    static components = {
        BlockBanner,
        FeaturedCategories,
        CategoriesBanner,
        FlashDeal
    };
    static props = {};

    setup() {

    }
}
registry.category("public_components").add("enmasys_multiple_vendor.Shop", Shop);
