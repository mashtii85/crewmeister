/**
 * Sort_Objects - Specs - Fixtures
 */

import { IMember } from '@crewmeister-code-challenge/type'

interface IFixutre {
  members: IMember[]
  sortMembers: IMember[]
}
export const fixtures: IFixutre = {
  members: [
    {
      crewId: 352,
      id: 709,
      image: 'https://loremflickr.com/300/400',
      name: 'Max',
      userId: 644
    },
    {
      crewId: 352,
      id: 713,
      image: 'https://loremflickr.com/300/400',
      name: 'Ines',
      userId: 649
    }
  ],
  sortMembers: [
    {
      crewId: 352,
      id: 713,
      image: 'https://loremflickr.com/300/400',
      name: 'Ines',
      userId: 649
    },
    {
      crewId: 352,
      id: 709,
      image: 'https://loremflickr.com/300/400',
      name: 'Max',
      userId: 644
    }
  ]
}
