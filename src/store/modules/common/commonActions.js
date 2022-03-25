import { CommonService } from '@/services/common.service'

export default {
  getConfigSystem ({ commit }) {
    return CommonService.getConfigSystem()
      .then(data => commit('SET_CONFIG_SYSTEM', data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
  },

  getConfigCCRP ({ commit }) {
    return CommonService.getConfigCCRP()
      .then(data => commit('SET_CONFIG_CCRP', data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
      .catch(error => console.error(error))
  },

  getConfigRegion ({ commit }) {
    return CommonService.getConfigRegion()
      .then(data => commit('SET_CONFIG_REGION', data))
      .catch(error => commit('toast/NEW', { type: 'error', message: error.message }, { root: true }))
      .catch(error => console.error(error))
  }
}
