/** @odoo-module **/
import { Component, useState, onMounted, useRef, onWillUnmount } from "@odoo/owl";
import { registry } from "@web/core/registry"

export class CategoriesBanner extends Component {
    static template = "enmasys_multiple_vendor.CategoriesBanner";

    setup() {
        // Maximum 4 banner show
        this.categories = useState([
            { id: 0, img: "accessory" },
            { id: 1, img: "bike" },
            { id: 2, img: "new" },
            { id: 3, img: "car" },
        ]);
        this.index = useState({ current: 0, prev: 0 });
        this.time = 4000;
        this.slideRefs = useState(this.generateRefs());
        this.sliderElement = useRef("sliderElement");
        this.sliderLeft = useState({ value: 0 })

        onMounted(() => {
            this.setupSlide();
            // Make this interval accessible on unmounted
            this.interval = setInterval(() => {
                this.processSlider();
            }, this.time);
        });

        // Clear event, interval, ...
        onWillUnmount(() => {
            console.log("Cleaning...");
            clearInterval(this.interval);
        });
    }

    // Generate all refs on xml, then return an array
    generateRefs() {
        let arr = [];
        for (let index = 0; index < this.categories.length; index++) {
            arr.push(useRef("" + index));
        }
        return arr;
    }

    // Setup first slide style
    setupSlide() {
        // Can only change element style when onMounted (on DOM) which rendered html element
        this.slideRefs[0].el.style.opacity = "1";
        this.slideRefs[0].el.style.zIndex = "2";
        let leftVal = (this.sliderLeft.value);
        this.sliderElement.el.style.left = `${leftVal}%`;
    }

    // Process the slider
    processSlider() {
        if (this.index.current != this.categories.length - 1) {
            this.index.prev = this.index.current;
            this.index.current = this.index.current + 1;
            this.updateSlides();
            this.updateSlider();
        } else {
            this.index.prev = this.index.current;
            this.index.current = 0;
            this.updateSlides();
            this.updateSlider();
        }
    }

    // Change slides visibility
    updateSlides = () => {
        this.slideRefs.forEach((slide, index) => {
            if (index === this.index.current) {
                slide.el.style.opacity = "1";
                slide.el.style.zIndex = "2";
            } else {
                slide.el.style.opacity = "0";
                slide.el.style.zIndex = "1";
            }
        });
    };

    // Change the slider bar position
    updateSlider() {
        switch (this.index.current) {
            case 0:
                this.sliderLeft.value = 0;
                this.sliderElement.el.style.left = `${this.sliderLeft.value}%`;
                break;
            case 1:
                this.sliderLeft.value = 25;
                this.sliderElement.el.style.left = `${this.sliderLeft.value}%`;
                break;
            case 2:
                this.sliderLeft.value = 50;
                this.sliderElement.el.style.left = `${this.sliderLeft.value}%`;
                break;
            case 3:
                this.sliderLeft.value = 75;
                this.sliderElement.el.style.left = `${this.sliderLeft.value}%`;
                break;
            default:
                break;
        }
    }

    // Change current slide and update
    changeSlide(index) {
        this.index.current = index;
        this.updateSlides();
        this.updateSlider();
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.processSlider();
        }, this.time);
    }
}
registry.category("public_components").add("enmasys_multiple_vendor.CategoriesBanner", CategoriesBanner);