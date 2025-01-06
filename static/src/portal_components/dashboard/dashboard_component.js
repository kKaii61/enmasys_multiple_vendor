/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

// Import các components
import { AnnouncementsComponent } from "../announcements/announcements_component";
import { AssignmentsComponent } from "../assignments/assignments_component";
import { CoursesComponent } from "../courses/courses_component";
import { EnrolledCoursesComponent } from "../enrolled_courses/enrolled_courses_component";
import { MyQuizAttemptsComponent } from "../my_quiz_attempts/my_quiz_attempts_component";
import { OrderHistoryComponent } from "../order_history/order_history_component";
import { ProfileComponent } from "../profile/profile_component";
import { ReviewComponent } from "../reviews/reviews_component";
import { QuizAttemptsComponent } from "../quiz_attempts/quiz_attempts_component";
import { WishlistComponent } from "../wishlist/wishlist_component";
import { SettingsComponent } from "../settings/settings_component";
// import { LoadingComponent } from "../utils/loading_component";

export class DashboardComponent extends Component {
  static template = "enmasys_multiple_vendor.DashboardComponent";
  static props = {
    currentView: { type: String, optional: true },
  };

  setup() {
    const urlParams = new URLSearchParams(window.location.search);
    const initialView = urlParams.get('view') || "dashboard";
    
    this.state = useState({
      isLoading: false,
      currentView: initialView,
      showStatsAndCourses: initialView === "dashboard",
  });

    this.switchView = this.switchView.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);

    this.components = {
      dashboard: null,
      profile: ProfileComponent,
      enrolled_courses: EnrolledCoursesComponent,
      wishlist: WishlistComponent,
      reviews: ReviewComponent,
      my_quiz_attempts: MyQuizAttemptsComponent,
      orderhistory: OrderHistoryComponent,
      courses: CoursesComponent,
      announcements: AnnouncementsComponent,
      quiz_attempts: QuizAttemptsComponent,
      assignments: AssignmentsComponent,
      setting: SettingsComponent,
    };
  }

  handleTabClick(view, url) {
    this.state.isLoading = true;
    this.switchView(view, url);
    this.state.showStatsAndCourses = view === "dashboard";

    setTimeout(() => {
      this.state.isLoading = false;
    }, 500);
  }

  switchView(view, url) {
    this.state.currentView = view;
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("view", view);
    window.history.pushState({}, "", newUrl);
}

  get CurrentComponent() {
    return this.components[this.state.currentView] || null;
  }
}

registry
  .category("public_components")
  .add("enmasys_multiple_vendor.DashboardComponent", DashboardComponent);
