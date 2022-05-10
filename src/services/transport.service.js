import { BaseService } from './base.service'
import { ErrorWrapper, ResponseWrapper } from './util'
import storeHelper from '@/store/helper'

export class TransportService extends BaseService {
  static async getListTransportHeader (params) {
    try {
      const response = await this.request({ auth: true }).post(params.endpoint, params.data)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }

  static async getListTransport (params) {
    try {
      const response = await this.request({ auth: true }).post(storeHelper.getUrl('hnp.luxury.transport.get-list-transport'), params)
      return new ResponseWrapper(response, response.data.data)
    } catch (error) {
      const message = error.response.data ? error.response.data.error : error.response.statusText
      throw new ErrorWrapper(error, message)
    }
  }
}