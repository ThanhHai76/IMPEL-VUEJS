// single pages
import homePage from '@/pages/Home.vue'
import homePage2 from '@/pages/Home2.vue'
import loginPage from '@/pages/Login.vue'
import notFoundPage from '@/pages/NotFound.vue'

import about from '@/pages/About.vue'
import purchaseNew from '@/pages/Purchase_New.vue'
import purchaseUsed from '@/pages/Purchase_Used.vue'
import purchaseNewSingle from '@/pages/Purchase_New_Single.vue'
import purchaseOldSingle from '@/pages/Purchase_Old_Single.vue'
import service from '@/pages/Service.vue'
import blogLeftSidebar from '@/pages/Blog_Left_Sidebar.vue'
import blogRightSidebar from '@/pages/Blog_Right_Sidebar.vue'
import blogSingle from '@/pages/Blog_Single.vue'

import { DOMAIN_TITLE } from '../.env'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | home` }
  },
  {
    path: '/home',
    name: 'home',
    component: homePage2,
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
    path: '/about',
    name: 'about',
    component: about,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | about` }
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
