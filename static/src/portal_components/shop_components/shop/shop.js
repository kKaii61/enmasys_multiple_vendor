/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";
import { BlockBanner } from "../shop_block_banner/block_banner";
import { FeaturedCategories } from "../shop_featured_categories/featured_categories";
import { CategoriesBanner } from "../shop_categories/categories_banner";
import { FlashDeal } from "../shop_flash_deals/flash_deal";
import { Trending } from "../shop_trending/trending";
class Shop extends Component {

    static template = "enmasys_multiple_vendor.Shop";
    static components = {
        BlockBanner,
        FeaturedCategories,
        CategoriesBanner,
        FlashDeal,
        Trending
    };

    // static defaultProps = {
    //     dev: false,
    // }
    // static props = {
    //     dev: { type: Boolean, value: this.dev},
    // };

    setup() {
        this.initialView = null;
        this.checkPath();
        this.state = useState({
            currentView: this.initialView,
        });
        this.generateComponent();
    }

    //**
    /* This function check current path starts with `/shop/`
    /* and capture dynamic parameters after it, then render the corresponding component.
    */
    checkPath() {
        const path = window.location.pathname;
        const match = path.match(/^\/shop\/(.+)/);
        if (!match) {
            this.initialView = null;
        } else {
            this.initialView = match ? match[1].replace(/-/g, "") : "shop";
        }
    }

    //**
    /* This function check current path starts with `/shop/`
    /* and capture dynamic parameters after it, then render the corresponding component.
    */
    checkValidView() {
        if(this.mappedComponents[this.initialView] == undefined){}
    }

    //**
    /* This function mapped from the `components` class property and-
    /* grant it to this.mappedComponents
    */
    generateComponent() {
        this.mappedComponents = Object.entries(Shop.components).reduce((acc, [key, value]) => {
            // Convert the key to lowercase
            const newKey = key.toLowerCase();
            // Add the key-value pair to the accumulator
            acc[newKey] = value;
            return acc;
        }, {});
    }
    //**
    //
    //
    get getComponent() {
        return this.mappedComponents[this.initialView] || Shop;
    }
}
registry.category("public_components").add("enmasys_multiple_vendor.Shop", Shop);
