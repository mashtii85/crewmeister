/**
 * Table
 */

export interface ITableValues {
  title: string
  value: string
}
export interface ITable extends ITableValues {
  // id: number
  render?: (values: ITableValues) => JSX.Element
}

export type TTableList = {
  [K in keyof ITable]?: Partial<ITable[K]>
}

export interface I {
  [key: string]: keyof ITable
}

export interface IColumn<T> {
  hidden?: boolean
  formatter?: ({ row }: { row: T }) => ReactNode
  text: string
  sortable?: boolean
}

export type TSort = 'ASC' | 'DES' | null

export interface ISortHandler {
  columnIndex: number
  sortType: TSort
}

export interface ITableHeader {
  columns: IColumn<any>[]
  sortHandler: (columnIndex: number, sortType: TSort) => void
}

export interface ISetSort {
  columnIndex: number
  sortType: TSort
}
