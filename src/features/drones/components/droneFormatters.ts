/** Formatea números según el locale es-AR. */
export function fmtNumber(value: number): string {
  return new Intl.NumberFormat('es-AR', { maximumFractionDigits: 0 }).format(value);
}