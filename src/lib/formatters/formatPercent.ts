const formatter = new Intl.NumberFormat(undefined, {
  style: 'percent',
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export function formatPercent(value: number) {
  return formatter.format(value);
}
