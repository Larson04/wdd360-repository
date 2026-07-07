import { describe, it, expect } from 'vitest'
import { calcSubtotal } from '../../../src/utils/calcSubtotal'

describe('calcSubtotal (solution)', () => {
  it('calculates subtotal for a typical multiple-item cart', () => {
    const items = [
      { price: 10, qty: 2 },
      { price: 5, qty: 1 }
    ]

    expect(calcSubtotal(items)).toBe(25)
  })

  it('returns 0 for an empty cart', () => {
    expect(calcSubtotal([])).toBe(0)
  })

  it('handles an item with zero quantity', () => {
    const items = [
      { price: 10, qty: 0 },
      { price: 3, qty: 4 }
    ]

    expect(calcSubtotal(items)).toBe(12)
  })

  it('handles decimal prices', () => {
    const items = [
      { price: 2.5, qty: 2 },
      { price: 1.25, qty: 1 }
    ]

    expect(calcSubtotal(items)).toBe(6.25)
  })
})
