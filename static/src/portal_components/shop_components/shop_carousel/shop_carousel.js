/** @odoo-module **/
import { Component, useState, useRef, onWillUnmount, onMounted } from "@odoo/owl";
import { registry } from "@web/core/registry"

const defaultPos = 0;
export class ShopCarousel extends Component {

    static template = "enmasys_multiple_vendor.ShopCarousel";
    static props = {
        title: { type: String, optional: false },
        countDown: { type: Boolean, optional: true },
        multiTab: { type: Boolean, optional: true },
        tabs: {
            type: Array,
            element: {
                type: Object,
                shape: {
                    id: String,
                    name: String,
                    href: String
                }
            }
        },
    };
    static defaultProps = {
        title: "New Title",
        countDown: false,
        multiTab: false
    }
    setup() {

        console.table(this.props.countDown, this.props.multiTab, this.props.tabs);

        /////////////// TITLE \\\\\\\\\\\\\\\
        this.state = useState({
            activeTab: this.props.tabs[0].id // Set first tab as default active
        });
        

        ////////////////////////////////             Products Demo        \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
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
            { id: 12, name: "Headphone", price_old: "900", price_new: "560", rating: '0', img: 'headphone' },
        ]);
        this.products2 = useState([
            { id: 0, name: "Porsche Cayenne", price_old: "84,700", price_new: "82,500", rating: '3', img: 'camera' },
            { id: 1, name: "Porsche Macan", price_old: "75,300", price_new: "74,300", rating: '5', img: 'camera' },
            { id: 2, name: "camera handheld", price_old: "102,800", price_new: "101,000", rating: '1', img: 'camera' },
            { id: 3, name: "camera handheld", price_old: "12.000", price_new: "10,000", rating: '2', img: 'camera' },
            { id: 4, name: "camera handheld", price_old: "120", price_new: "110", rating: '4', img: 'camera' },
            { id: 5, name: "camera handheld", price_old: "100", price_new: "90", rating: '5', img: 'camera' },
            { id: 6, name: "camera handheld", price_old: "12.000", price_new: "10.999", rating: '2', img: 'camera' },
            { id: 7, name: "Makeup Box", price_old: "300", price_new: "250", rating: '0', img: 'camera' },
            { id: 8, name: "camera handheld", price_old: "900", price_new: "560", rating: '0', img: 'camera' },
            { id: 9, name: "camera handheld", price_old: "900", price_new: "560", rating: '0', img: 'camera' },
            { id: 10, name: "camera handheld", price_old: "900", price_new: "560", rating: '0', img: 'camera' },
            { id: 11, name: "camera handheld", price_old: "900", price_new: "560", rating: '0', img: 'camera' },
            { id: 12, name: "camera handheld", price_old: "900", price_new: "560", rating: '0', img: 'camera' },
        ]);
        this.products3 = useState([
            { id: 0, name: "Router", price_old: "84,700", price_new: "82,500", rating: '3', img: 'router' },
            { id: 1, name: "Router", price_old: "75,300", price_new: "74,300", rating: '5', img: 'router' },
            { id: 2, name: "Router", price_old: "102,800", price_new: "101,000", rating: '1', img: 'router' },
            { id: 3, name: "Router", price_old: "12.000", price_new: "10,000", rating: '2', img: 'router' },
            { id: 4, name: "Router", price_old: "120", price_new: "110", rating: '4', img: 'router' },
            { id: 5, name: "Router", price_old: "100", price_new: "90", rating: '5', img: 'router' },
            { id: 6, name: "Router", price_old: "12.000", price_new: "10.999", rating: '2', img: 'router' },
            { id: 7, name: "router", price_old: "300", price_new: "250", rating: '0', img: 'router' },
            { id: 8, name: "Router", price_old: "900", price_new: "560", rating: '0', img: 'router' },
            { id: 9, name: "Router", price_old: "900", price_new: "560", rating: '0', img: 'router' },
            { id: 11, name: "Router", price_old: "900", price_new: "560", rating: '0', img: 'router' },
            { id: 10, name: "Router", price_old: "900", price_new: "560", rating: '0', img: 'router' },
            { id: 12, name: "Router", price_old: "900", price_new: "560", rating: '0', img: 'router' },
        ]);

        this.upsaleProducts = useState([
            { id: 0, name: "Makeup Box", price_old: "381.77", price_new: "195.77", rating: '0', inStock: 23, img: 'makeup' },
            { id: 1, name: "Drone", price_old: "266.00", price_new: "199.99", rating: '4', inStock: 12, img: 'drone' },
        ]);
        //////////////////////////           End of demo          \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

        this.timeRemaining = useState({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        });
        if (this.props.countDown === true) {
            // Set day til now to 7 days
            // this.endDate = new Date();
            // this.endDate.setDate(this.endDate.getDate() + 7);
            // Or just set a specific date
            this.endDate = new Date("2025-1-12");
        }

        // For dragging
        this.leftVal = useState({ value: defaultPos });
        this.pos1 = useState({ value: 0 });
        this.pos3 = useState({ value: 0 });
        this.sliderRef = useRef("slick");

        onMounted(() => {
            this.props.countDown ? this.startTimer() : '';
            this.snapToItem();
         });
        onWillUnmount(() => {
            if (this.timer) {
                this.stopTimer()
            }
        });
    }
    setActiveTab(tabId) {
        this.state.activeTab = tabId;
        // Here you can also trigger content loading for the selected tab
        this.loadTabContent(tabId);
    }
    // Render Rating Stars
    generateStars(rating) {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push({
                index: i,
                type: i < rating ? "fas fa-star" : "far fa-star", // Filled or empty star
            });
        }
        return stars;
    }
    startTimer() {
        this.timer = setInterval(() => {
            const now = new Date();
            const diff = this.endDate - now;

            if (diff <= 0) {
                this.stopTimer();
                this.timeRemaining.days = 0;
                this.timeRemaining.hours = 0;
                this.timeRemaining.minutes = 0;
                this.timeRemaining.seconds = 0;
            } else {
                this.timeRemaining.days = Math.floor(diff / (1000 * 60 * 60 * 24));
                this.timeRemaining.hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                this.timeRemaining.minutes = Math.floor((diff / (1000 * 60)) % 60);
                this.timeRemaining.seconds = Math.floor((diff / 1000) % 60);
            }
        }, 1000);
    }
    // Stop the timer
    stopTimer() {
        clearInterval(this.timer);
    }
    // *******  Dragging Functions  ********* \\
    // onMouseDown listener
    handleMouseDown(e, el) {
        e.preventDefault();
        this.pos3.value = e.clientX; // Save current X position on e
        // window.addEventListener("mousemove", (event) => this.handleMouseMove(event, el));
        window.addEventListener("mouseup", (event) => this.handleMouseUp(event, el));
    }
    // onMouseMove listener
    handleMouseMove(e, el) {
        e.preventDefault();
        if (e.buttons !== 1) return; // Only drag when left mouse button is pressed
        const slider = el;
        if (!slider) return; // return on null
        slider.style.transition = "none";
        this.pos1.value = this.pos3.value - e.clientX;
        this.pos3.value = e.clientX;
        const deltaX = (this.leftVal.value - this.pos1.value);
        this.leftVal.value = deltaX;
    };
    // remove eventlistener on mouse up
    handleMouseUp(e, el) {
        e.preventDefault();
        const slider = el;
        this.snapToItem();
        // window.removeEventListener("mousemove", (event) => this.handleMouseMove(event, el));
        window.removeEventListener("mouseup", (event) => this.handleMouseUp(event, el));
        slider.style.transition = "all 0.5s ease-in-out";
    }
    /** end */
    nextItem() {
        const slider = this.sliderRef.el;
        this.leftVal.value -= Math.round((slider.children[0].offsetWidth * 6)); // Adjust for the sliding distance equal to width of 6 items
        slider.style.transform = `translateX(${this.leftVal.value}px)`;
        this.snapToItem();
    }
    prevItem() {
        const slider = this.sliderRef.el;
        this.leftVal.value += Math.round((slider.children[0].offsetWidth * 6)); // Adjust for the sliding distance equal to width of 6 items
        slider.style.transform = `translateX(${this.leftVal.value}px)`;
        this.snapToItem();
    }
    snapToItem() {
        const slider = this.sliderRef.el;
        const contentWidth = (slider.children[0].offsetWidth + 10) * 6;
        const snapIndex = Math.round(((this.leftVal.value) / contentWidth));
        this.leftVal.value = snapIndex * contentWidth;
        slider.style.transform = `translateX(${this.leftVal.value}px)`;
    }
}
registry.category("public_components").add("enmasys_multiple_vendor.ShopCarousel", ShopCarousel);
