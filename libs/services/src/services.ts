/**
 * Index
 */

// Axios
import { IBaseModel } from '@crewmeister-code-challenge/types'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

class APIService {
  private static _instance: APIService // = new APIService()
  // _commonService = new CommonService()
  // appStore = useContext(store)

  constructor() {
    if (APIService._instance) {
      return APIService._instance
    }

    APIService._instance = this
    return this
  }

  public async readJsonFile<T>(fileName: string): Promise<IBaseModel<T>> {
    const response = import('./db/' + fileName)

    return new Promise((resolve) => resolve(response))
      .then((data: any) => {
        console.log('data=>', data)

        return data
      })
      .catch((error) => {
        console.error(error.message)
        const payload: IBaseModel<T> = {
          message: error.message,
          payload: []
        }
        return payload
      })
  }

  public async get<T>(url: string, queryString?: string): Promise<AxiosResponse<T>> {
    const response = await axios.get(url)
    return response
  }

  async post<T>(url: string, body?: unknown): Promise<AxiosResponse<T>> {
    const jsonBody = JSON.stringify(body)
    const header = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: jsonBody
    }

    const jsonResponse = await axios.post(url, header)
    return jsonResponse
  }

  public async put<T>(url: string, body?: unknown): Promise<AxiosResponse<T>> {
    const header = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },

      body: JSON.stringify(body)
    }
    const response = await axios.put(url, header)
    return response
  }

  async delete<T>(url: string, body?: unknown): Promise<AxiosResponse<T>> {
    const config: AxiosRequestConfig = {
      headers: {}
    }

    const jsonResponse = await axios.delete<T>(url, config)
    return jsonResponse
  }
}

export default APIService
