/**
 * Sort_Objects - Sort_Objects.spec
 */

import { sortObject } from '..'
import { fixtures } from './fixtures'

describe('Sort objects should work', () => {
  test('', () => {
    sortObject({ array: fixtures.array, key: 'name', sortType: 'DES' })
    console.log('sort', JSON.stringify(fixtures.array))
  })
})
