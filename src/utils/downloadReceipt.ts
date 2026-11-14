export interface ReceiptData {
  paymentId: string;
  orderId: string;
  planName: string;
  billing: 'monthly' | 'annual';
  amount: number;
  currency: string;
  date: string;
}

export async function downloadReceiptPDF(data: ReceiptData) {
  try {
    const { jsPDF } = await import('jspdf');
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    // Header Background
    doc.setFillColor(5, 150, 105); // emerald-600
    doc.rect(0, 0, 210, 28, 'F');

    // Header Text
    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text('GREENLANE', 16, 18);

    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');
    doc.text('PAYMENT RECEIPT', 145, 18);

    // Receipt Information
    doc.setTextColor(30, 41, 59);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.text('Transaction Details', 16, 42);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(100, 116, 139);

    doc.text('Receipt ID:', 16, 52);
    doc.text('Payment ID:', 16, 60);
    doc.text('Order ID:', 16, 68);
    doc.text('Date & Time:', 16, 76);
    doc.text('Status:', 16, 84);

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.text(`RCPT-${data.paymentId.replace(/^(pay_|in_|cs_|sub_)/i, '').toUpperCase()}`, 55, 52);
    doc.text(data.paymentId, 55, 60);
    doc.text(data.orderId, 55, 68);
    doc.text(data.date, 55, 76);

    // Status: Paid
    doc.setTextColor(5, 150, 105);
    doc.text('PAID (SUCCESSFUL)', 55, 84);

    // Table Header
    doc.setFillColor(241, 245, 249);
    doc.rect(16, 96, 178, 10, 'F');
    doc.setTextColor(71, 85, 105);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'bold');
    doc.text('DESCRIPTION', 22, 102);
    doc.text('BILLING', 110, 102);
    doc.text('AMOUNT', 160, 102);

    // Table Content
    doc.setFont('helvetica', 'normal');
    doc.setTextColor(15, 23, 42);
    doc.text(`Greenlane - ${data.planName} Plan`, 22, 115);
    doc.text(data.billing === 'monthly' ? 'Monthly' : 'Annual', 110, 115);
    doc.setFont('helvetica', 'bold');
    doc.text(`${data.currency} ${data.amount}`, 160, 115);

    // Divider line
    doc.setDrawColor(226, 232, 240);
    doc.line(16, 125, 194, 125);

    // Total Box
    doc.setFillColor(236, 253, 245);
    doc.rect(125, 135, 69, 14, 'F');
    doc.setTextColor(5, 150, 105);
    doc.setFontSize(12);
    doc.setFont('helvetica', 'bold');
    doc.text('Total Paid:', 130, 144);
    doc.text(`${data.currency} ${data.amount}`, 160, 144);

    // Footer note
    doc.setTextColor(148, 163, 184);
    doc.setFontSize(9);
    doc.setFont('helvetica', 'normal');
    doc.text('Thank you for choosing Greenlane!', 16, 175);
    doc.text('This is an official electronic payment receipt issued for your records.', 16, 182);
    doc.text('For support or queries, contact hello@greenlaneai.com', 16, 189);

    // Trigger auto-download
    doc.save(`greenlane-receipt-${data.paymentId}.pdf`);
  } catch (err) {
    console.error('Failed to generate PDF receipt:', err);
  }
}
