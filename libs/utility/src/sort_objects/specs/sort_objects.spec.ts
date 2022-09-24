/**
 * Sort_Objects - Sort_Objects.spec
 */

import { IMember } from '@crewmeister-code-challenge/type'
import { sortObject } from '..'
import { fixtures } from './fixtures'

describe('Sort objects should work', () => {
  test('Members orders get exchanged', () => {
    expect(fixtures.members[0]).toHaveProperty('crewId')
    expect(fixtures.members[0]).toHaveProperty('id')
    expect(fixtures.members[0]).toHaveProperty('image')
    expect(fixtures.members[0]).toHaveProperty('name')
    expect(fixtures.members[0]).toHaveProperty('userId')

    expect(fixtures.members[0].name).toBe('Max')
    expect(fixtures.members[1].name).toBe('Ines')

    expect(fixtures.members).toMatchObject(fixtures.members)
    sortObject<IMember>({ array: fixtures.members, key: 'name', sortType: 'DES' })
    expect(fixtures.members).toMatchObject(fixtures.sortMembers)

    expect(fixtures.members[0].name).toBe('Ines')
    expect(fixtures.members[1].name).toBe('Max')
  })
})
