/**
 * HTTP request layer
 * if auth is required return patched axios instance(with access token in headers)
 * else return clear axios instance
 */

import axios from 'axios'
import store from '@/store/index'

import { AuthService } from '@/services/auth.service'

export class Http {
  constructor (status) {
    this.isAuth = status && status.auth ? status.auth : false
    this.instance = axios.create()
    return this.init()
  }

  init () {
    if (this.isAuth) {
      this.instance.interceptors.request.use(request => {
        request.headers.Authorization = AuthService.getBearer()
        // if access token expired and refreshToken is exist >> go to API and get new access token
        if (AuthService.isAccessTokenExpired() && AuthService.hasRefreshToken()) {
          return AuthService.debounceRefreshTokens()
            .then(response => {
              AuthService.setBearer(response.data.accessToken)
              request.headers.authorization = AuthService.getBearer()
              return request
            }).catch(error => Promise.reject(error))
        } else {
          return request
        }
      }, error => {
        return Promise.reject(error)
      })
    }
    this.instance.interceptors.response.use(
      null,
      error => {
        if (
          error.response &&
          error.response.status &&
          [401, 403].includes(error.response.status)
        ) {
          // logout
          store.dispatch('user/clear')
          store.dispatch('auth/logout')
        }
        return Promise.reject(error)
      }
    )
    return this.instance
  }
}
