/**
 * Dates - DateDiffInDays
 */

export const DateDiffInDays = (startDate: string, endDate: string, { showDay }: { showDay: boolean }): string => {
  if (!startDate || !endDate) return ''
  const start = new Date(startDate)

  const end = new Date(endDate)

  const diffTime = Math.abs(Number(end) - Number(start))
  let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24) + 1).toString()

  diffDays += showDay ? ' day/s' : ''

  return diffDays
}
