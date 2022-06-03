// single pages
import homePage from '@/pages/Home.vue'
import loginPage from '@/pages/auth/Login.vue'
import registerPage from '@/pages/auth/Register.vue'
import notFoundPage from '@/pages/NotFound.vue'

import cars from '@/pages/Vehicles/Cars.vue'
import motorbike from '@/pages/Vehicles/Motorbike.vue'
import bicycle from '@/pages/Vehicles/Bicycle.vue'

import detailTransport from '@/pages/Detail/Car-Detail.vue'

import sellStep from '@/pages/Sell_Step.vue'

import purchaseNew from '@/pages/Purchase/Purchase_New.vue'
import purchaseUsed from '@/pages/Purchase/Purchase_Used.vue'
import purchaseNewSingle from '@/pages/Purchase/Purchase_New_Single.vue'
import purchaseOldSingle from '@/pages/Purchase/Purchase_Old_Single.vue'
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
    path: '/register',
    name: 'register',
    component: registerPage,
    meta: { title: `${DOMAIN_TITLE} | register`, layout: 'login' }
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
    path: '/transport',
    name: 'transport',
    component: purchaseNew,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Cars` }
  },
  {
    path: '/detail',
    name: 'detail',
    component: detailTransport,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | Detail` }
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
  }
  
]
