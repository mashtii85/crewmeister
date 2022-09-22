/**
 * PrepareColumns
 */

import { IAbsenceViewModel, IColumn } from '@crewmeister-code-challenge/types'

export const tableColumns: IColumn<IAbsenceViewModel>[] = [
  {
    hidden: true,
    text: 'id'
    // sort: true
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
  }
]
