import $store from '../store'

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
