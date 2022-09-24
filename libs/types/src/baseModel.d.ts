/**
 * IBaseModel.d
 */

export interface IBaseModel<T> {
  message: 'Success' | string
  payload: T[]
}
