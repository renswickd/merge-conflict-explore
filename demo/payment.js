export function processPayment(amount, taxRate) {
  const tax = amount * taxRate;
return Math.round(amount + tax);
}
