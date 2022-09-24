/**
 * PrepareColumns
 */

import { IAbsenceViewModel, IColumn } from '@crewmeister-code-challenge/types'
import { Badge } from '../../badge'

export const tableColumns: IColumn<IAbsenceViewModel>[] = [
  {
    hidden: true,
    text: 'id'
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
      return row.type
    },
    sortable: true
  },
  {
    hidden: false,
    text: 'Period'
  },
  {
    hidden: false,
    text: 'Time Span'
  },
  {
    hidden: false,
    text: 'Status',
    formatter({ row }) {
      switch (row.status) {
        case 'CONFIRMED': {
          return <Badge color="green">{row.status}</Badge>
        }
        case 'REJECTED': {
          return <Badge color="red">{row.status}</Badge>
        }
        case 'REQUESTED': {
          return <Badge color="yellow">{row.status}</Badge>
        }
      }
    }
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
  },
  {
    hidden: true,
    text: 'image'
  }
]
