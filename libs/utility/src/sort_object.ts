/**
 * SortObject
 */

import { TSort } from '@crewmeister-code-challenge/types'

export const sortObject = <T>({ array = [], key, sortType }: { array: T[]; key: string; sortType: TSort }) => {
  if (sortType === 'DES') {
    array.sort((a: T, b: T) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0))
  } else {
    array.sort((a: T, b: T) => (a[key] < b[key] ? 1 : b[key] < a[key] ? -1 : 0))
  }
}
