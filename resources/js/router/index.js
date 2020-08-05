import Vue from 'vue';
import Router from 'vue-router';

/**
 * Layzloading will create many files and slow on compiling, so best not to use lazyloading on devlopment.
 * The syntax is lazyloading, but we convert to proper require() with babel-plugin-syntax-dynamic-import
 * @see https://doc.laravue.dev/guide/advanced/lazy-loading.html
 */

Vue.use(Router);

/* Layout */
import Layout from '@/layout';

/* Router for modules */
// import elementUiRoutes from './modules/element-ui';
// import componentRoutes from './modules/components';
// import chartsRoutes from './modules/charts';
// import tableRoutes from './modules/table';
import adminRoutes from './modules/admin';
// import nestedRoutes from './modules/nested';
import errorRoutes from './modules/error';
// import excelRoutes from './modules/excel';
// import permissionRoutes from './modules/permission';

/**
 * Sub-menu only appear when children.length>=1
 * @see https://doc.laravue.dev/guide/essentials/router-and-nav.html
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    roles: ['admin', 'editor']   Visible for these roles only
    permissions: ['view menu zip', 'manage user'] Visible for these permissions only
    title: 'title'               the name show in sub-menu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if true, the page will no be cached(default is false)
    breadcrumb: false            if false, the item will hidden in breadcrumb (default is true)
    affix: true                  if true, the tag will affix in the tags-view
  }
**/

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/AuthRedirect'),
    hidden: true,
  },
  {
    path: '/404',
    redirect: { name: 'Page404' },
    component: () => import('@/views/error-page/404'),
    hidden: true,
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true,
  },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: {
          title: 'dashboard',
          icon: 'analytics-graph-bar',
          noCache: false,
        },
      },
    ],
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/edit',
    hidden: true,
    children: [
      {
        path: 'edit',
        component: () => import('@/views/users/SelfProfile'),
        name: 'SelfProfile',
        meta: { title: 'userProfile', icon: 'user', noCache: true },
      },
    ],
  },
];

export const asyncRoutes = [
  adminRoutes,
  {
    path: '/appointments',
    component: Layout,
    redirect: '/appointments/index',
    meta: {
      permissions: ['view menu appointments'],
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/appointments/index'),
        name: 'appointments',
        meta: {
          title: 'appointments',
          pageTitle: 'Appointments',
          icon: 'home',
          noCache: false,
          permissions: ['view menu appointments'],
        },
      },
    ],
  },

  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/index',
    meta: {
      permissions: ['view menu shop'],
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/shop/index'),
        name: 'Shop',
        meta: {
          title: 'shop',
          pageTitle: 'Shop Details',
          icon: 'shop',
          roles: ['seller'],
          permissions: ['view menu shop'],
          noCache: true,
        },
      },
    ],
  },

  {
    path: '/products',
    component: Layout,
    redirect: '/products/index',
    meta: {
      permissions: ['view menu products'],
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/products/index'),
        name: 'Products',
        meta: {
          title: 'products',
          pageTitle: 'Products',
          icon: 'cart',
          permissions: ['view menu products'],
          noCache: true,
        },
      },
    ],
  },

  {
    path: '/add-product',
    component: Layout,
    redirect: '/add-product/index',
    meta: {
      permissions: ['view menu addProduct'],
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/add-product/index'),
        name: 'add-Product',
        meta: {
          title: 'addProduct',
          pageTitle: 'Add Product',
          icon: 'cart_fill_badge_plus',
          permissions: ['view menu addProduct'],
          noCache: true,
        },
      },
    ],
  },

  {
    path: '/edit-product',
    component: Layout,
    redirect: '/edit-product/index/:id',
    meta: {
      permissions: ['view menu addProduct'],
    },
    children: [
      {
        path: 'index/:id',
        component: () => import('@/views/add-product/index'),
        name: 'edit-Product',
        meta: {
          title: 'addProduct',
          pageTitle: 'Add Product',
          icon: 'cart_fill_badge_plus',
          permissions: ['view menu addProduct'],
          noCache: true,
        },
      },
    ],
  },

  {
    path: '/orders',
    component: Layout,
    redirect: '/orders/index',
    meta: {
      permissions: ['view menu orders'],
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/orders/index'),
        name: 'Orders',
        meta: {
          title: 'orders',
          pageTitle: 'Orders',
          icon: 'orders',
          permissions: ['view menu orders'],
          noCache: true,
        },
      },
    ],
  },

  {
    path: '/feedback',
    component: Layout,
    redirect: '/feedback/index',
    meta: {
      permissions: ['view menu feedback'],
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/feedback/index'),
        name: 'feedback',
        meta: {
          title: 'feedback',
          pageTitle: 'Orders',
          icon: 'star-empty',
          permissions: ['view menu feedback'],
          noCache: true,
        },
      },
    ],
  },

  {
    path: '/product-requests',
    component: Layout,
    redirect: '/product-requests/index',
    meta: {
      permissions: ['view menu productRequests'],
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/product-requests/index'),
        name: 'productRequests',
        meta: {
          title: 'productRequests',
          pageTitle: 'Product Requests',
          icon: 'cart_fill_badge_plus',
          permissions: ['view menu productRequests'],
          noCache: true,
        },
      },
    ],
  },

  {
    path: '/sale-product',
    component: Layout,
    redirect: '/sale-product/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/sale/product'),
        name: 'SaleAProduct',
        meta: {
          title: 'saleAProduct',
          pageTitle: 'Add Product',
          icon: 'cart-bag',
          permissions: ['view menu sale A Product'],
          noCache: true,
        },
      },
    ],
  },
  {
    path: '/inbox',
    component: Layout,
    redirect: '/inbox/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/inbox/index'),
        name: 'Inbox',
        meta: {
          title: 'inbox',
          pageTitle: 'Inbox',
          icon: 'inbox',
          permissions: ['view menu inbox'],
          noCache: true,
        },
      },
    ],
  },
  {
    path: '/store',
    component: Layout,
    redirect: '/store/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/store/index'),
        name: 'Store',
        meta: {
          title: 'store',
          pageTitle: 'Store',
          icon: 'cart',
          permissions: ['view menu store'],
          noCache: true,
        },
      },
    ],
  },
  errorRoutes,
  { path: '*', redirect: '/404', hidden: true },
];

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    base: process.env.MIX_LARAVUE_PATH,
    routes: constantRoutes,
  });

const router = createRouter();

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher; // reset router
}

export default router;
