// Tax calculation utilities
export interface TaxCalculation {
  homeValue: number;
  taxRate: number;
}

export function calculatePropertyTax({ homeValue, taxRate }: TaxCalculation): number {
  return (homeValue * taxRate) / 100;
}

export const formatCurrency = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});