/** @odoo-module */
import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry"

export class WishlistComponent extends Component {
    static template = "enmasys_multiple_vendor.WishlistComponent";

    setup() {

    }





}

registry.category("public_components").add("enmasys_multiple_vendor.WishlistComponent", WishlistComponent);