import { describe, it, expect } from 'vitest'
import { isValidPassword } from '../../../src/utils/isValidPassword'

describe('isValidPassword (solution)', () => {
  it('accepts a valid password', () => {
    expect(isValidPassword('StrongPass1')).toBe(true)
  })

  it('rejects passwords shorter than 8 characters', () => {
    expect(isValidPassword('Ab1cd')).toBe(false)
  })

  it('rejects passwords with no uppercase letter', () => {
    expect(isValidPassword('lowercase1')).toBe(false)
  })

  it('rejects passwords with no lowercase letter', () => {
    expect(isValidPassword('UPPERCASE1')).toBe(false)
  })

  it('rejects passwords with no number', () => {
    expect(isValidPassword('NoNumbersHere')).toBe(false)
  })
})
