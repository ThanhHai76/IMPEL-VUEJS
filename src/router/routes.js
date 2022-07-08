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

import purchaseNew from '@/pages/Purchase/Purchase_Car.vue'
import purchaseUsed from '@/pages/Purchase/Purchase_Used.vue'
import service from '@/pages/Service.vue'

import { DOMAIN_TITLE } from '../.env'

//CMS
import adminHome from '@/pages/Admin/index.vue'
import createTransport from '@/pages/Admin/TransportController/create-transport.vue'

import configVehicle from '@/pages/Admin/VehicleController/config-vehicle.vue'
import listVehicle from '@/pages/Admin/VehicleController/list-vehicle.vue'

export const routes = [
  {
    path: '/',
    name: 'index',
    component: homePage,
    meta: { title: `${DOMAIN_TITLE} | home`, layout: 'default' }
  },
  {
    path: '*',
    component: notFoundPage,
    meta: { title: `${DOMAIN_TITLE} | not found`, layout: 'default' }
  },

  {
    path: '/transport_car',
    name: 'cars',
    component: cars,
    meta: { title: `${DOMAIN_TITLE} | Cars`, layout: 'default' }
  },
  {
    path: '/transport_motorcycle',
    name: 'motorbike',
    component: motorbike,
    meta: { title: `${DOMAIN_TITLE} | Motorcycle`, layout: 'default' }
  },
  {
    path: '/transport_bicycle',
    name: 'bicycle',
    component: bicycle,
    meta: { title: `${DOMAIN_TITLE} | Bicycle`, layout: 'default' }
  },

  {
    path: '/transport',
    name: 'transport',
    component: purchaseNew,
    meta: { title: `${DOMAIN_TITLE} | Cars`, layout: 'default' }
  },
  {
    path: '/detail',
    name: 'detail',
    component: detailTransport,
    meta: { title: `${DOMAIN_TITLE} | Detail`, layout: 'default' }
  },

  {
    path: '/sell-step',
    name: 'sell-step',
    component: sellStep,
    meta: { title: `${DOMAIN_TITLE} | Sell Step`, layout: 'default' }
  },
  {
    path: '/purchase-new',
    name: 'purchaseNew',
    component: purchaseNew,
    meta: { title: `${DOMAIN_TITLE} | Purchase New`, layout: 'default' }
  },
  {
    path: '/purchase-used',
    name: 'purchaseUsed',
    component: purchaseUsed,
    meta: { title: `${DOMAIN_TITLE} | Purchase Used`, layout: 'default' }
  },
  {
    path: '/service',
    name: 'service',
    component: service,
    meta: { title: `${DOMAIN_TITLE} | Service`, layout: 'default' }
  },

  // Admin
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
    path: '/admin',
    name: 'adminHome',
    component: adminHome,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | admin`, layout: 'admin' }
  },
  {
    path: '/admin/create-transport',
    name: 'createTransport',
    component: createTransport,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | create transport`, layout: 'admin' }
  },

  {
    path: '/admin/config-vehicle',
    name: 'configVehicle',
    component: configVehicle,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | config vehicle`, layout: 'admin' }
  },
  {
    path: '/admin/list-vehicle',
    name: 'listVehicle',
    component: listVehicle,
    meta: { isAuth: true, title: `${DOMAIN_TITLE} | list vehicle`, layout: 'admin' }
  },
  
]
