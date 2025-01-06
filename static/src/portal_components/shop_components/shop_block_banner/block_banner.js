/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry"

export class BlockBanner extends Component {
    static template = "enmasys_multiple_vendor.BlockBanner";
    static props = {};

    setup() {
        this.products = useState([
            { id: 0, imgName: "1.png" },
            { id: 1, imgName: "2.png" },
            { id: 2, imgName: "3.png" },
            { id: 3, imgName: "4.png" },
        ])
    }

}
registry.category("public_components").add("enmasys_multiple_vendor.BlockBanner", BlockBanner);

