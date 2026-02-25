export function processPayment(amount, taxRate) {
  const tax = amount * taxRate;
  return amount + tax;
}
