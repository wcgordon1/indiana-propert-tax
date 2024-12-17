import { jsPDF } from 'jspdf';

interface TaxEstimate {
  countyName: string;
  homeValue: number;
  taxRate: number;
  annualTax: number;
}

export function generateTaxEstimatePDF({
  countyName,
  homeValue,
  taxRate,
  annualTax
}: TaxEstimate): void {
  const doc = new jsPDF();
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  });

  // Add header
  doc.setFontSize(20);
  doc.setTextColor(0, 51, 102); // Dark blue
  doc.text('Property Tax Estimate', 20, 20);
  
  // Add county information
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text(`County: ${countyName}`, 20, 40);
  
  // Add property details
  doc.setFontSize(12);
  doc.text(`Assessed Home Value: ${formatter.format(homeValue)}`, 20, 60);
  doc.text(`Tax Rate: ${taxRate}%`, 20, 70);
  doc.text(`Estimated Annual Property Tax: ${formatter.format(annualTax)}`, 20, 80);
  
  // Add disclaimer
  doc.setFontSize(10);
  doc.setTextColor(128, 128, 128);
  doc.text([
    'DISCLAIMER:',
    'This is an estimate based on the median property tax rate for your county.',
    'Actual tax amounts may vary based on local assessments, exemptions,',
    'and other factors such as schools, libraries, and fire districts.'
  ], 20, 100);
  
  // Save the PDF
  doc.save(`${countyName.toLowerCase()}-property-tax-estimate.pdf`);
}