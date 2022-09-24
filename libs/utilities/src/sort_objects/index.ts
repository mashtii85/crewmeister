/**
 * SortObject
 */

import { TSort } from '@crewmeister-code-challenge/types'

export const sortObject = <T>({ array = [], key, sortType }: { array: T[]; key: keyof T; sortType: TSort }) => {
  if (sortType === 'DES') {
    array.sort((a: any, b: any) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
  } else {
    array.sort((a: any, b: any) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0))
  }
}
