/** @odoo-module */
import { Component, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { registry } from "@web/core/registry"
import { session } from "@web/session";
import { jsonrpc } from "@web/core/network/rpc_service";

export class HeaderComponent extends Component {
    static template = "enmasys_multiple_vendor.HeaderComponent";
    static props = {};

    setup() {
        this.state = useState({
            isLoading: true, // Trạng thái đang tải
            userInfo: null,  // Thông tin người dùng
            userId : null,
        });
        this.router = useService("router");
        this.loadUserInfo();
    }

    async loadUserInfo() {
        try {
            const session = await jsonrpc("/web/session/get_session_info", {});
            this.state.userInfo = session.name;
            this.state.userId = session.user_id;
            console.log("User Info:", this.session);
        } catch (error) {
            console.error("Failed to load user info:", error);
        }
    }

    get userId() {
        console.log('UserID', this.state.userInfo.userId);
        return this.state.userInfo.userId ? this.state.userInfo.userId : null;
    }

    get userName() {
        console.log('userName', this.state.userInfo);
        return this.state.userInfo ? this.state.userInfo : "Guest";
    }

    navigateToProfilePage() {
        this.router.navigate("product");
    }

}

registry.category("public_components").add("enmasys_multiple_vendor.HeaderComponent", HeaderComponent);