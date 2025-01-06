/** @odoo-module */
import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry"

export class CoursesComponent extends Component {
    static template = "enmasys_multiple_vendor.CoursesComponent";

    setup() {

    }





}

registry.category("public_components").add("enmasys_multiple_vendor.CoursesComponent", CoursesComponent);