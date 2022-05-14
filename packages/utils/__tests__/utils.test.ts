import { it, expect } from 'vitest'
import { add } from '../lib/utils'
it('add', () => {
  expect(add(1, 1)).toBe(2)
})
