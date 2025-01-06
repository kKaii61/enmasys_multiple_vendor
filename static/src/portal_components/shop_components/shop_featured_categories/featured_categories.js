/** @odoo-module **/
import { Component, useState, useRef, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry"

const defaultPos = -1240;
export class FeaturedCategories extends Component {
    static template = "enmasys_multiple_vendor.FeaturedCategories";
    setup() {
        this.categories = useState([
            { classify: 12, name: "Autoparts", img: "autopart" },
            { classify: 34, name: "Glasses", img: "glasses" },
            { classify: 56, name: "Shoes", img: "shoes" },
            { classify: 15, name: "Watches", img: "watches" },
            { classify: 14, name: "Plants", img: "plants" },
            { classify: 87, name: "Furniture", img: "furniture" },
            { classify: 87, name: "Sports", img: "sports" },
            { classify: 87, name: "Jewelleries", img: "jewel" },
        ])
        // For dragging
        this.leftVal = useState({ value: defaultPos });
        this.pos1 = useState({ value: 0 });
        this.pos3 = useState({ value: 0 });
        this.sliderRef = useRef("sliderRef");
        // For autoplay
        this.pos = useState({ value: 0 })
        this.time = 3000;

        onMounted(() => {
            this.snapToItem();
            this.moveInterval = setInterval(() => this.moveSlider(), this.time);
        });
    }

    // *******  Autoplay Functions  ********* \\
    moveSlider() {
        const slider = this.sliderRef.el;
        const totalWidth = slider.scrollWidth / 2;
        this.leftVal.value -= slider.children[0].offsetWidth + 10; // Adjust for the sliding distance equal to width of items
        slider.style.transform = `translateX(${this.leftVal.value}px)`;

        if (this.leftVal.value > -154 || this.leftVal.value < -2590) {
            slider.style.transition = "none";
            this.leftVal.value = defaultPos;
            slider.style.transform = `translateX(${this.leftVal.value}px)`;
            this.snapToItem();
        }
        setTimeout(() => {
            slider.style.transition = "all 0.5s ease-in-out";
        }, 100);
    }

    snapToItem() {
        const slider = this.sliderRef.el;
        const itemWidth = slider.children[0].offsetWidth + 10;
        const snapIndex = Math.round(this.leftVal.value / itemWidth);
        this.leftVal.value = snapIndex * itemWidth;
        slider.style.transform = `translateX(${this.leftVal.value}px)`;
    }
    limitCheck() {
        const slider = this.sliderRef.el;
        if (this.leftVal.value > -154 || this.leftVal.value < -2590) {
            slider.style.transition = "none";
            this.returnToDefault(); }
    }
    returnToDefault() {
        this.leftVal.value = defaultPos;
    }
    stopInterval() {
        clearInterval(this.moveInterval);
    }
    startInterval() {
        this.moveInterval = setInterval(() => this.moveSlider(), this.time);
    }
    resetInterval() {
        this.stopInterval();
        this.startInterval();
    }
    nextItem() {
        const slider = this.sliderRef.el;
        this.leftVal.value -= slider.children[0].offsetWidth + 10; // Adjust for the sliding distance equal to width of items
        slider.style.transform = `translateX(${this.leftVal.value}px)`;
        this.limitCheck();
        this.snapToItem();
        this.resetInterval();
    }
    prevItem() {
        const slider = this.sliderRef.el;
        this.leftVal.value += slider.children[0].offsetWidth + 10; // Adjust for the sliding distance equal to width of items
        slider.style.transform = `translateX(${this.leftVal.value}px)`;
        this.limitCheck();
        this.snapToItem();
        this.resetInterval();
    }

    // *******  Dragging Functions  ********* \\

    // onMouseDown listener
    handleMouseDown(e, el) {
        e.preventDefault();
        this.pos3.value = e.clientX; // Save current X position on e
        this.stopInterval();

        this.limitCheck();

        window.addEventListener("mousemove", (event) => this.handleMouseMove(event, el));
        window.addEventListener("mouseup", (event) => this.handleMouseUp(event, el));
    }
    // onMouseMove listener
    handleMouseMove(e, el) {
        e.preventDefault();
        if (e.buttons !== 1) return; // Only drag when left mouse button is pressed
        this.stopInterval();
        const slider = el;
        if (!slider) return; // return on null
        slider.style.transition = "none"; // Dragging don't have transition

        this.pos1.value = this.pos3.value - e.clientX;
        this.pos3.value = e.clientX;
        const deltaX = (this.leftVal.value - this.pos1.value);
        this.leftVal.value = deltaX;
        this.limitCheck();

    };
    // remove eventlistener on mouse up
    handleMouseUp(e, el) {
        e.preventDefault();
        const slider = el;
        this.limitCheck();
        this.snapToItem();

        this.resetInterval();
        window.removeEventListener("mousemove", (event) => this.handleMouseMove(event, el));
        window.removeEventListener("mouseup", (event) => this.handleMouseUp(event, el));

        slider.style.transition = "all 0.5s ease-in-out";
    }

    // *******  Snapping Functions  ********* \\

}

registry.category("public_components").add("enmasys_multiple_vendor.FeaturedCategories", FeaturedCategories);
