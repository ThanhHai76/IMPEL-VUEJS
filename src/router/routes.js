// single pages
import homePage from '@/pages/Home.vue'
import loginPage from '@/pages/Login.vue'
import notFoundPage from '@/pages/NotFound.vue'

import cars from '@/pages/Vehicles/Cars.vue'
import motorbike from '@/pages/Vehicles/Motorbike.vue'
import bicycle from '@/pages/Vehicles/Bicycle.vue'
import sellStep from '@/pages/Sell_Step.vue'

import purchaseNew from '@/pages/Purchase/Purchase_New.vue'
import purchaseUsed from '@/pages/Purchase/Purchase_Used.vue'
import purchaseNewSingle from '@/pages/Purchase/Purchase_New_Single.vue'
import purchaseOldSingle from '@/pages/Purchase/Purchase_Old_Single.vue'
import service from '@/pages/Service.vue'
import blogLeftSidebar from '@/pages/Blog/Blog_Left_Sidebar.vue'
import blogRightSidebar from '@/pages/Blog/Blog_Right_Sidebar.vue'
import blogSingle from '@/pages/Blog/Blog_Single.vue'

import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage,
    meta: { title: `${DOMAIN_TITLE} | login`, layout: 'login' }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found` }
  },

  {
    path: '/transport_car',
    name: 'cars',
    component: cars,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Cars` }
  },
  {
    path: '/transport_motorcycle',
    name: 'motorbike',
    component: motorbike,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Motorcycle` }
  },
  {
    path: '/transport_bicycle',
    name: 'bicycle',
    component: bicycle,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Bicycle` }
  },

  {
    path: '/sell-step',
    name: 'sell-step',
    component: sellStep,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Sell Step` }
  },
  {
    path: '/purchase-new',
    name: 'purchaseNew',
    component: purchaseNew,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Purchase New` }
  },
  {
    path: '/purchase-used',
    name: 'purchaseUsed',
    component: purchaseUsed,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Purchase Used` }
  },
  {
    path: '/purchase-new-single',
    name: 'purchaseNewSingle',
    component: purchaseNewSingle,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Purchase New Single` }
  },
  {
    path: '/purchase-old-single',
    name: 'purchaseOldSingle',
    component: purchaseOldSingle,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Purchase Old Single` }
  },
  {
    path: '/service',
    name: 'service',
    component: service,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Service` }
  },
  {
    path: '/blog-left-sidebar',
    name: 'blogLeftSidebar',
    component: blogLeftSidebar,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Blog Left Sidebar` }
  },
  {
    path: '/blog-right-sidebar',
    name: 'blogRightSidebar',
    component: blogRightSidebar,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Blog Right Sidebar` }
  },
  {
    path: '/blog-single',
    name: 'blogSingle',
    component: blogSingle,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Blog Single` }
  }
  
]
