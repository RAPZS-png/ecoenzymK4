const decimal = new Intl.NumberFormat('id-ID', {
  maximumFractionDigits: 1,
})

const integer = new Intl.NumberFormat('id-ID', {
  maximumFractionDigits: 0,
})

export function formatDecimal(value: number): string {
  return Number.isFinite(value) ? decimal.format(value) : '0'
}

export function formatInteger(value: number): string {
  return Number.isFinite(value) ? integer.format(value) : '0'
}

export function padTwo(value: number): string {
  return String(value).padStart(2, '0')
}
