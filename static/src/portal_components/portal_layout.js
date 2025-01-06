/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

// Import các components
import { DashboardComponent } from "./dashboard/dashboard_component";
import { AnnouncementsComponent } from "./announcements/announcements_component";
import { AssignmentsComponent } from "./assignments/assignments_component";
import { CoursesComponent } from "./courses/courses_component";
// import { EnrolledcoursesComponent } from "./enrolled_courses/enrolled_courses_component";
import { MyquizattemptsComponent } from "./my_quiz_attempts/my_quiz_attempts_component";
import { OrderhistoryComponent } from "./order_history/order_history_component";
import { ProfileComponent } from "./profile/profile_component";
import { ReviewComponent } from "./reviews/reviews_component";

export class SidebarContentComponent extends Component {
    static template = "enmasys_multiple_vendor.SidebarContentComponent"; // Đổi tên để khớp với component Sidebar
    static components = {
        DashboardComponent,
        AnnouncementsComponent,
        AssignmentsComponent,
        CoursesComponent,
        // EnrolledcoursesComponent,
        MyquizattemptsComponent,
        OrderhistoryComponent,
        ProfileComponent,
        ReviewComponent,
    };

    setup() {
        this.state = useState({
            currentView: "dashboard", // View mặc định
        });
    }

    switchView(view) {
        this.state.currentView = view;
    }

    get CurrentComponent() {
        switch (this.state.currentView) {
            case "dashboard":
                return DashboardComponent;
            case "announcements":
                return AnnouncementsComponent;
            case "assignments":
                return AssignmentsComponent;
            case "courses":
                return CoursesComponent;
            case "enrolled_courses":
                return EnrolledcoursesComponent;
            case "my_quiz_attempts":
                return MyquizattemptsComponent;
            case "order_history":
                return OrderhistoryComponent;
            case "profile":
                return ProfileComponent;
            case "reviews":
                return ReviewComponent;
            default:
                return DashboardComponent; // Fallback nếu không tìm thấy view
        }
    }
}

registry
    .category("public_components")
    .add("enmasys_multiple_vendor.SidebarContentComponent", SidebarContentComponent);
