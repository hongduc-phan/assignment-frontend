import axios from 'axios'
import { ErrorType } from '../types'
// import history from '../helpers/history'

function ApiFactory(baseUrl: string) {
  const api = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  const _onRejectedResponse = (errRes: {} & ErrorType) => {
    if (errRes?.response?.status) {
      switch (errRes.response.status) {
      case 404:
        // console.log('redirect to page 404')
        // return history.push('/not-found')
        throw errRes
      case 403:
        // TODO
        console.log('redirect to page 403')
        return errRes.response?.message || 'ERROR 403'

      default: {
        // TODO
        console.log('redirect to page 500')
        return errRes.response?.message || 'ERROR 500'
      }
      }
    }
    throw errRes
  }

  api.interceptors.response.use((res) => res, _onRejectedResponse)
  return api
}

export default ApiFactory
