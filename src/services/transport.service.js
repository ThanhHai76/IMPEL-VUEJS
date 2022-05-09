import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
// import storeHelper from '@/store/helper'

export class TransportService extends BaseService {
  static async getListTransport (params) {
    try {
      const response = await this.request({ auth: true }).post(params.endpoint, params.data)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      return error.response
    }
  }
}
