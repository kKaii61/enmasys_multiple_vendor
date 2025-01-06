/** @odoo-module */
import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry"

export class MyquizattemptsComponent extends Component {
    static template = "enmasys_multiple_vendor.MyquizattemptsComponent";

    setup() {

    }





}

registry.category("public_components").add("enmasys_multiple_vendor.MyquizattemptsComponent", MyquizattemptsComponent);