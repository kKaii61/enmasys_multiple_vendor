/** @odoo-module */
import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry"

export class EnrolledcoursesComponent extends Component {
    static template = "enmasys_multiple_vendor.EnrolledcoursesComponent";

    setup() {

    }





}

registry.category("public_components").add("enmasys_multiple_vendor.EnrolledCoursesComponent", EnrolledcoursesComponent);