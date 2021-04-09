const fb = require('../fizzbuzz')

// TEST EXAMPLE
test('sanity check', () => {
  expect(7 + 7).toBe(14) // Pass
})

// TEST FIZZ
test('fizz', () => {
  expect(fb.FIZZ).toBe('fizz') // Pass
})

// TEST BUZZ
test('buzz', () => {
  expect(fb.BUZZ).toBe('buzz') // Pass
})

// TEST FIZZBUZZ
test('fizzbuzz', () => {
  expect(fb.FIZZBUZZ).toBe('fizzbuzz') // Pass
})

// TEST FIZZBUZZ
test('fizzBuzz', () => {
  expect(fb.fizzBuzz(121).fizz).toBe(32) // Pass
  expect(fb.fizzBuzz(121).buzz).toBe(16) // Pass
  expect(fb.fizzBuzz(121).fizzBuzz).toBe(8) // Pass
})

// TEST IS FIZZY
test('isFizzy', () => {
  expect(fb.isFizzy(3)).toBe(true) // Pass
  expect(fb.isFizzy(5)).toBe(false) // Pass
  expect(fb.isFizzy(6)).toBe(true) // Pass
  expect(fb.isFizzy(10)).toBe(false) // Pass
})

// TEST IS BUZZY
test('isBuzzy', () => {
  expect(fb.isBuzzy(10)).toBe(true) // Pass
  expect(fb.isBuzzy(6)).toBe(false) // Pass
  expect(fb.isBuzzy(5)).toBe(true) // Pass
  expect(fb.isBuzzy(3)).toBe(false) // Pass
})

// TEST FIZZYBUZZY
test('fizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(3)).toBe(fb.FIZZ) // Pass
  expect(fb.fizzyBuzzy(5)).toBe(fb.BUZZ) // Pass
  expect(fb.fizzyBuzzy(15)).toBe(fb.FIZZBUZZ) // Pass
})

// TEST NONE FIZZYBUZZY
test('noneFizzyBuzzy', () => {
  expect(fb.fizzyBuzzy(1, 2, 4)).toBe('') // Pass
  expect(fb.fizzyBuzzy(7, 8, 11)).toBe('') // Pass
  expect(fb.fizzyBuzzy(13, 14, 16)).toBe('') // Pass
})
