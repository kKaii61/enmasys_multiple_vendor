# __manifest__.py
{
    'name': 'Enmasys Multiple Vendor Theme',
    'description': 'A basic theme for multiple vendor functionality in Odoo 17.',
    'version': '1.0',
    'author': 'Your Name',
    'category': 'Theme/Creative',
    'depends': ['website','web','base'],
    'data': [
        'views/headers.xml',
        'views/portal_my_home_dashboard.xml',
        'views/shop.xml',
        # 'data/theme_data.xml',
    ],
    'assets': {
        'web.assets_frontend': [



            # Vendor JS
            'enmasys_multiple_vendor/static/src/js/vendor/modernizr.min.js',
            # 'enmasys_multiple_vendor/static/src/js/vendor/jquery.js',
            'enmasys_multiple_vendor/static/src/js/vendor/bootstrap.min.js',
            'enmasys_multiple_vendor/static/src/js/vendor/paralax.js',
            'enmasys_multiple_vendor/static/src/js/vendor/sal.js',
            'enmasys_multiple_vendor/static/src/js/vendor/swiper.js',
            'enmasys_multiple_vendor/static/src/js/vendor/magnify.min.js',
            'enmasys_multiple_vendor/static/src/js/vendor/jquery-appear.js',
            'enmasys_multiple_vendor/static/src/js/vendor/odometer.js',
            'enmasys_multiple_vendor/static/src/js/vendor/isotop.js',
            'enmasys_multiple_vendor/static/src/js/vendor/countdown.js',
            'enmasys_multiple_vendor/static/src/js/vendor/wow.js',
            # 'enmasys_multiple_vendor/static/src/js/vendor/waypoint.min.js',
            'enmasys_multiple_vendor/static/src/js/vendor/easypie.js',
            'enmasys_multiple_vendor/static/src/js/vendor/text-type.js',
            'enmasys_multiple_vendor/static/src/js/vendor/jquery-one-page-nav.js',
            'enmasys_multiple_vendor/static/src/js/vendor/bootstrap-select.min.js',
            'enmasys_multiple_vendor/static/src/js/vendor/jquery-ui.js',
            'enmasys_multiple_vendor/static/src/js/vendor/magnify-popup.min.js',
            'enmasys_multiple_vendor/static/src/js/vendor/plyr.js',
            # Main js
            'enmasys_multiple_vendor/static/src/js/main.js',


            # # Vendor css
            'enmasys_multiple_vendor/static/src/css/vendor/*',
            # # Plugins css
            'enmasys_multiple_vendor/static/src/css/plugins/*',
            #
            # # Default Styles
            'enmasys_multiple_vendor/static/src/scss/default/variables.scss',
            'enmasys_multiple_vendor/static/src/scss/default/mixins.scss',
            'enmasys_multiple_vendor/static/src/scss/default/reset.scss',
            'enmasys_multiple_vendor/static/src/scss/default/typography.scss',
            'enmasys_multiple_vendor/static/src/scss/default/extend.scss',
            'enmasys_multiple_vendor/static/src/scss/default/shortcode.scss',
            'enmasys_multiple_vendor/static/src/scss/default/spacing.scss',
            'enmasys_multiple_vendor/static/src/scss/default/edu-common.scss',
            'enmasys_multiple_vendor/static/src/scss/default/forms.scss',
            'enmasys_multiple_vendor/static/src/scss/default/text-animation.scss',

            # #Header Styles
            'enmasys_multiple_vendor/static/src/scss/header/common/header-common.scss',
            'enmasys_multiple_vendor/static/src/scss/header/common/headertop.scss',
            'enmasys_multiple_vendor/static/src/scss/header/topoffer/offertopbar.scss',
            'enmasys_multiple_vendor/static/src/scss/header/headermiddle/headermid.scss',
            'enmasys_multiple_vendor/static/src/scss/header/social-share.scss',
            'enmasys_multiple_vendor/static/src/scss/header/header.scss',
            'enmasys_multiple_vendor/static/src/scss/header/nav.scss',
            'enmasys_multiple_vendor/static/src/scss/header/mega-menu.scss',
            'enmasys_multiple_vendor/static/src/scss/header/mobilemenu.scss',
            'enmasys_multiple_vendor/static/src/scss/header/offcanvas.scss',
            'enmasys_multiple_vendor/static/src/scss/header/one-page-navigation.scss',

            # # Elements Styles
            'enmasys_multiple_vendor/static/src/scss/elements/button.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/section-title.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/breadcrumb.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/course-meta.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/service.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/feature.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/about.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/callto-action.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/accordion.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/image-gallery.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/counterup.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/pricingtable.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/badge.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/team.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/social.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/pagination.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/backtotop.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/newsletterform.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/brands.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/portfolio.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/contact.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/testimonial.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/advance-tab.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/category.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/instagram.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/split.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/countdown.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/progressbar.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/category-box.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/course-filter.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/modal.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/list.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/search.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/video.scss',
            'enmasys_multiple_vendor/static/src/scss/elements/404.scss',
            # Blog Styles
            'enmasys_multiple_vendor/static/src/scss/blog/blog.scss',
            'enmasys_multiple_vendor/static/src/scss/blog/post-default.scss',
            'enmasys_multiple_vendor/static/src/scss/blog/sidebar.scss',
            'enmasys_multiple_vendor/static/src/scss/blog/blog.scss',
            # Shop Styles
            'enmasys_multiple_vendor/static/src/scss/shop/shop.scss',
            'enmasys_multiple_vendor/static/src/scss/shop/product-details.scss',
            'enmasys_multiple_vendor/static/src/scss/shop/my-account.scss',
            'enmasys_multiple_vendor/static/src/scss/shop/cart.scss',
            'enmasys_multiple_vendor/static/src/scss/shop/checkout.scss',
            'enmasys_multiple_vendor/static/src/scss/shop/minicart.scss',
            # Template Styles
            'enmasys_multiple_vendor/static/src/scss/template/banner.scss',
            'enmasys_multiple_vendor/static/src/scss/template/course-details.scss',
            'enmasys_multiple_vendor/static/src/scss/template/course-sidebar.scss',
            'enmasys_multiple_vendor/static/src/scss/template/contact.scss',
            'enmasys_multiple_vendor/static/src/scss/template/sidebar.scss',
            'enmasys_multiple_vendor/static/src/scss/template/course-action-bottom.scss',
            'enmasys_multiple_vendor/static/src/scss/template/preview.scss',
            # Other template
            'enmasys_multiple_vendor/static/src/scss/template/banner.scss',
            'enmasys_multiple_vendor/static/src/scss/template/course-details.scss',
            'enmasys_multiple_vendor/static/src/scss/template/course-sidebar.scss',
            'enmasys_multiple_vendor/static/src/scss/template/contact.scss',
            'enmasys_multiple_vendor/static/src/scss/template/sidebar.scss',
            'enmasys_multiple_vendor/static/src/scss/template/teacher-details.scss',
            'enmasys_multiple_vendor/static/src/scss/template/single-zoom-section.scss',
            'enmasys_multiple_vendor/static/src/scss/template/shop-page.scss',
            'enmasys_multiple_vendor/static/src/scss/template/shop-details.scss',
            'enmasys_multiple_vendor/static/src/scss/template/shop.scss',
            'enmasys_multiple_vendor/static/src/scss/template/register-page.scss',
            'enmasys_multiple_vendor/static/src/scss/template/profile-page.scss',
            'enmasys_multiple_vendor/static/src/scss/template/product-details.scss',
            'enmasys_multiple_vendor/static/src/scss/template/my-account.scss',
            'enmasys_multiple_vendor/static/src/scss/template/login-page.scss',
            'enmasys_multiple_vendor/static/src/scss/template/list-course.scss',
            'enmasys_multiple_vendor/static/src/scss/template/lesson.scss',
            'enmasys_multiple_vendor/static/src/scss/template/instructor-dashboard.scss',
            'enmasys_multiple_vendor/static/src/scss/template/grid-course.scss',
            'enmasys_multiple_vendor/static/src/scss/template/events-page.scss',
            'enmasys_multiple_vendor/static/src/scss/template/events-details.scss',
            'enmasys_multiple_vendor/static/src/scss/template/error-page.scss',
            'enmasys_multiple_vendor/static/src/scss/template/course-slidebar.scss',
            'enmasys_multiple_vendor/static/src/scss/template/contact-page.scss',
            'enmasys_multiple_vendor/static/src/scss/template/connect-area.scss',
            'enmasys_multiple_vendor/static/src/scss/template/blog-details.scss',
            'enmasys_multiple_vendor/static/src/scss/template/about-us.scss',



            # Footer Styles
            'enmasys_multiple_vendor/static/src/scss/footer/footer.scss',
            'enmasys_multiple_vendor/static/src/scss/footer/copyright.scss',
            'enmasys_multiple_vendor/static/src/scss/footer/back-to-top.scss',

            # Service Components
            # userSession Component
            # 'enmasys_multiple_vendor/static/src/portal_components/service_components/*',

            # Header Components
            'enmasys_multiple_vendor/static/src/portal_components/header/*',

            # Dashboard Components
            'enmasys_multiple_vendor/static/src/portal_components/dashboard/*',


            # Enrolled Courses Components
            'enmasys_multiple_vendor/static/src/portal_components/enrolled_courses/*',

            # Wishlist Components
            'enmasys_multiple_vendor/static/src/portal_components/wishlist/*',

            # Review Components
            'enmasys_multiple_vendor/static/src/portal_components/reviews/*',

            # My Quiz Attempts Components
            'enmasys_multiple_vendor/static/src/portal_components/my_quiz_attempts/*',

            # Order History Components
            'enmasys_multiple_vendor/static/src/portal_components/order_history/*',

            # Courses Components
            'enmasys_multiple_vendor/static/src/portal_components/courses/*',

            # Announcements Components
            'enmasys_multiple_vendor/static/src/portal_components/announcements/*',

            # Quiz Attempts Components
            'enmasys_multiple_vendor/static/src/portal_components/quiz_attempts/*',

            # Assignments Components
            'enmasys_multiple_vendor/static/src/portal_components/assignments/*',

            # Settings Components
            'enmasys_multiple_vendor/static/src/portal_components/settings/*',

            # Footer Components
            'enmasys_multiple_vendor/static/src/portal_components/footer/*',

            # Profile Components
            'enmasys_multiple_vendor/static/src/portal_components/profile/*',


            # Shop Body
            'enmasys_multiple_vendor/static/src/portal_components/shop_components/shop/*',
            
            # Shop Body Components
            'enmasys_multiple_vendor/static/src/portal_components/shop_components/shop_categories/*',
            'enmasys_multiple_vendor/static/src/portal_components/shop_components/shop_block_banner/*',
            'enmasys_multiple_vendor/static/src/portal_components/shop_components/shop_featured_categories/**',
            'enmasys_multiple_vendor/static/src/portal_components/shop_components/shop_flash_deals/*',

            'enmasys_multiple_vendor/static/src/portal_components/utils/*',





        ],
    },
    'images': ['static/description/icon.png'],
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'LGPL-3',
}