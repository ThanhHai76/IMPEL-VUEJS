import $store from '../store'
import { AuthService } from '@/services/auth.service'

/**
 * Current user state initialization
 * @WARN Must be always first in middleware chain
 */
export async function initCurrentUserStateMiddleware (to, from, next) {
  const currentUserId = $store.state.user.currentUser.id

  if (AuthService.hasRefreshToken() && !currentUserId) {
    try {
      await AuthService.debounceRefreshTokens()
      await $store.dispatch('user/getCurrent')
      next()
    } catch (e) {
      console.log(e)
    }
  } else {
    next()
  }
}

export async function getLocalDataMiddleware (to, from, next) {
  const currentUserId = $store.state.user.currentUser.userId
  const token = $store.state.auth.token
  if (AuthService.hasToken() && !currentUserId && !token) {
    try {
      const userData = localStorage.getItem('userData')
      const localToken = localStorage.getItem('token')
      $store.commit('user/SET_CURRENT_USER', JSON.parse(userData))
      AuthService.setBearer(localToken)
      next()
    } catch (e) {
      console.log(e)
    }
  } else {
    next()
  }
}

export async function getEndpointConfigMiddleware (to, from, next) {
  const endPointConfig = $store.state.endpoint.endPointConfig
  await $store.dispatch('endpoint/getEndpointConfig')
  next()
  if (AuthService.hasToken() && !endPointConfig) {
    try {
      await $store.dispatch('endpoint/getEndpointConfig')
      next()
    } catch (e) {
      console.log(e)
    }
  } else {
    next()
  }
}

/**
 * Check access permission to auth routes
 */
export function checkAccessMiddleware (to, from, next) {
  const currentUserId = $store.state.user.currentUser.userId
  const isAuthRoute = to.matched.some(item => item.meta.isAuth)
  if (isAuthRoute && currentUserId) return next()
  if (currentUserId && to.name === 'login') next({ name: 'index' })
  if (isAuthRoute) return next({ name: 'index' })
  next()
}
