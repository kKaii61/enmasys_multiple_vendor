from odoo import http
from odoo.http import request

class MyController(http.Controller):
    @http.route(['/dashboard', '/dashboard/<string:view>'], type='http', auth='public', website=True)
    def dashboard_page(self, view=None, **kwargs):
        current_view = view if view else 'dashboard'
        return request.render('enmasys_multiple_vendor.dashboard_template', {'currentView': current_view})

class ShopEnmasys(http.Controller):
    @http.route('/shop', auth='public', website=True, type="http")
    def shop_page(self, **kw):
        template = "enmasys_multiple_vendor.multiple_vendor_shop_body"
        return request.render(template)