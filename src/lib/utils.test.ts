import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('joins class names with a space', () => {
    expect(cn('a', 'b')).toBe('a b')
  })

  it('merges conflicting classes correctly', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })
})
