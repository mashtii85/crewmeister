/**
 * Index
 */

// Types
import { IBaseModel } from '@crewmeister-code-challenge/type'

// Axios
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

class BaseService {
  private static _instance: BaseService // = new APIService()

  constructor() {
    if (BaseService._instance) {
      return BaseService._instance
    }

    BaseService._instance = this
    return this
  }

  public async readJsonFile<T>(fileName: string): Promise<IBaseModel<T>> {
    const response = import('./db/' + fileName + '.json')

    return new Promise((resolve) => resolve(response))
      .then((data: any) => {
        // console.log('data', data.payload)
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

export default BaseService
