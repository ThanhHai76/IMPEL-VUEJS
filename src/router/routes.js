// single pages
import homePage from '@/pages/Home.vue'
import loginPage from '@/pages/Login.vue'
import notFoundPage from '@/pages/NotFound.vue'

import sellStep from '@/pages/Sell_Step.vue'
import about from '@/pages/About.vue'
import purchaseNew from '@/pages/Purchase/Purchase_New.vue'
import service from '@/pages/Service.vue'

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
    path: '/sell-step',
    name: 'sell-step',
    component: sellStep,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | home` }
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
    path: '/service',
    name: 'service',
    component: service,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Service` }
  }
  
]
