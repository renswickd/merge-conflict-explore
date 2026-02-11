function calculateTotal(price, tax, discount) {
  const subtotal = price + tax;
  return subtotal - discount;
}
