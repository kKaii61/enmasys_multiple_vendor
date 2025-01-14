/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry"

export class Trending extends Component {

    static template = "enmasys_multiple_vendor.Trending";
    static components = {};
    static props = {};

    setup() {
        this.products = useState([
            { id: 0, name: "Porsche Cayenne", price_old: "84,700", price_new: "82,500", rating: '3', img: 'car' },
            { id: 1, name: "Porsche Macan", price_old: "75,300", price_new: "74,300", rating: '5', img: 'drone' },
            { id: 2, name: "Shoes", price_old: "102,800", price_new: "101,000", rating: '1', img: 'shoes' },
            { id: 3, name: "Bag", price_old: "12.000", price_new: "10,000", rating: '2', img: 'bag' },
            { id: 4, name: "Statue", price_old: "120", price_new: "110", rating: '4', img: 'statue' },
            { id: 5, name: "Xbox", price_old: "100", price_new: "90", rating: '5', img: 'xbox' },
            { id: 6, name: "Earings", price_old: "12.000", price_new: "10.999", rating: '2', img: 'earings' },
            { id: 7, name: "Makeup Box", price_old: "300", price_new: "250", rating: '0', img: 'makeup' },
            { id: 8, name: "Headphone", price_old: "900", price_new: "560", rating: '0', img: 'headphone' },
            { id: 9, name: "Headphone", price_old: "900", price_new: "560", rating: '0', img: 'headphone' },
            { id: 10, name: "Headphone", price_old: "900", price_new: "560", rating: '0', img: 'headphone' },
            { id: 11, name: "Headphone", price_old: "900", price_new: "560", rating: '0', img: 'headphone' },
        ]);
    }

}
registry.category("public_components").add("enmasys_multiple_vendor.Trending", Trending);
