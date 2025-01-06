/** @odoo-module **/
import { Component, useState } from "@odoo/owl";
import { registry } from "@web/core/registry";

// Import các components
import { AnnouncementsComponent } from "../announcements/announcements_component";
import { AssignmentsComponent } from "../assignments/assignments_component";
import { CoursesComponent } from "../courses/courses_component";
import { EnrolledcoursesComponent } from "../enrolled_courses/enrolled_courses_component";
import { MyquizattemptsComponent } from "../my_quiz_attempts/my_quiz_attempts_component";
import { OrderhistoryComponent } from "../order_history/order_history_component";
import { ProfileComponent } from "../profile/profile_component";
import { ReviewComponent } from "../reviews/reviews_component";
import { QuizattemptsComponent } from "../quiz_attempts/quiz_attempts_component";
import { WishlistComponent } from "../wishlist/wishlist_component";
import { SettingsComponent } from "../settings/settings_component";

export class DashboardComponent extends Component {
  static template = "enmasys_multiple_vendor.DashboardComponent";

  // Các props nhận vào nếu cần
  static props = {
    currentView: { type: String, optional: true },
  };

  setup() {
    // Lấy đường dẫn từ URL để xác định `view`
    const path = window.location.pathname;
    const viewMatch = path.match(/instructor-(.+)\.html/);
    const initialView = viewMatch ? viewMatch[1].replace(/-/g, "_") : "dashboard";

    this.state = useState({
      isLoading: false,
      currentView: initialView,
      showStatsAndCourses: initialView === "dashboard",
    });

    // Liên kết các hàm với instance hiện tại
    this.switchView = this.switchView.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);

    // Map các view với components
    this.components = {
      dashboard: null,
      profile: ProfileComponent,
      enrolled_courses: EnrolledcoursesComponent,
      wishlist: WishlistComponent,
      reviews: ReviewComponent,
      my_quiz_attempts: MyquizattemptsComponent,
      orderhistory: OrderhistoryComponent,
      courses: CoursesComponent,
      announcements: AnnouncementsComponent,
      quiz_attempts: QuizattemptsComponent,
      assignments: AssignmentsComponent,
      setting: SettingsComponent,
    };
  }

  /**
   * Xử lý khi người dùng nhấn tab
   * @param {String} view - Tên view được nhấn
   */
  handleTabClick(view) {
    this.state.isLoading = true;

    // Chuyển view và cập nhật URL
    this.switchView(view);

    // Hiển thị thống kê nếu view là `dashboard`
    this.state.showStatsAndCourses = view === "dashboard";

    // Giả lập loading (nếu cần)
    setTimeout(() => {
      this.state.isLoading = false;
    }, 500);
  }

  /**
   * Chuyển view và cập nhật URL
   * @param {String} view - Tên view
   */
  switchView(view) {
    this.state.currentView = view;

    // Tạo URL mới với đường dẫn chuẩn
    const newPath = `/instructor-${view.replace(/_/g, "-")}.html`;
    window.history.pushState({}, "", newPath);
  }

  /**
   * Trả về component hiện tại dựa trên `currentView`
   */
  get CurrentComponent() {
    return this.components[this.state.currentView] || null;
  }
}

// Đăng ký component trong registry
registry
  .category("public_components")
  .add("enmasys_multiple_vendor.DashboardComponent", DashboardComponent);
