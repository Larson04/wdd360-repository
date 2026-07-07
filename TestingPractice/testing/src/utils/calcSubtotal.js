export function calcSubtotal(items) {
  return items.reduce((sum, item) => sum + item.price * item.qty, 0)
}
