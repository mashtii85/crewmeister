/**
 * Table
 */

export interface ITableValues {
  title: string
  value: string
}
export interface ITable extends ITableValues {
  render?: (ITableValues) => JSX.Element
}
