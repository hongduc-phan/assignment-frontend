import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CatType } from '../types'
import ApiFactory from './index'

const baseUrl = 'https://api.thecatapi.com/v1'

interface ICatApi {
  getAll: () => any
  getByWords: (words: string, cats: []) => any
}

const axiosInstance = ApiFactory(baseUrl)

class CatApi implements ICatApi {
  private _http = axiosInstance

  private _fetch(
    url: string,
    params?: Object
  ): Promise<AxiosResponse<CatType[] | CatType>> {
    let conf: AxiosRequestConfig = {
      params: params,
    }
    return this._http.get(url, conf)
  }

  async getAll(): Promise<CatType[]> {
    try {
      let res: AxiosResponse = await this._fetch('/breeds')
      return res.data
    } catch (e) {
      throw e
    }
  }

  async getByWords(words: string, allCats: CatType[]) {
    return !!allCats?.length && allCats?.filter(c => {
      return c?.name?.includes(words) 
        || c?.description?.includes(words)
        || c?.origin?.includes(words)
        || c?.alt_names?.includes(words)
    })
  }
}

const catApi = new CatApi()
export default catApi
