/**
 * PrepareColumns
 */

import { IAbsenceViewModel, IColumn } from '@crewmeister-code-challenge/types'

export const tableColumns: IColumn<IAbsenceViewModel>[] = [
  {
    hidden: true,
    text: 'id'
  },
  {
    hidden: true,
    text: 'image'
  },
  {
    hidden: true,
    text: 'userId'
  },
  {
    hidden: false,
    text: 'Name',
    sortable: true
  },
  {
    hidden: false,
    text: 'Type',
    formatter({ row }) {
      return row
    },
    sortable: true
  },
  {
    hidden: false,
    text: 'Period'
  },
  {
    hidden: false,
    text: 'Status'
  },
  {
    hidden: true,
    text: 'Start Date'
  },
  {
    hidden: true,
    text: 'End Date'
  },
  {
    hidden: true,
    text: 'Member Note'
  },
  {
    hidden: true,
    text: 'Admitter Note'
  }
]
