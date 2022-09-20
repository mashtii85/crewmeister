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
}
