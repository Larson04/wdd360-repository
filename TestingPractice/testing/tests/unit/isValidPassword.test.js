import { describe, it, expect } from 'vitest'
import { isValidPassword } from '../../src/utils/isValidPassword'

describe('isValidPassword', () => {
  it('accepts a valid password', () => {
    const password = 'ValidPass123'
    expect(isValidPassword(password)).toBe(true)
  })

  it('rejects passwords shorter than 8 chars', () => {
    const password = 'Short1'
    expect(isValidPassword(password)).toBe(false)
  })

  it('rejects passwords with no uppercase letter', () => {
    const password = 'nouppercase1'
    expect(isValidPassword(password)).toBe(false)
  })

  it('rejects passwords with no lowercase letter', () => {
    const password = 'NOLOWERCASE1'
    expect(isValidPassword(password)).toBe(false)
  })

  it('rejects passwords with no number', () => {
    const password = 'NoNumber'
    expect(isValidPassword(password)).toBe(false)
  })

  isValidPassword
})
