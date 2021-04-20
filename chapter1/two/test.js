const reverse = require('./index');

describe('reverse', () => {
  test('it is defined', () => {
    expect(reverse).toBeDefined()
  })
  test('it throws an error on non-string input', () => {
    expect(() => reverse(null)).toThrow()
    expect(() => reverse(undefined)).toThrow()
    expect(() => reverse(10)).toThrow()
    expect(() => reverse(true)).toThrow()
    expect(() => reverse([])).toThrow()
  })

  test('it reverses a string', () => {
    expect(reverse('')).toEqual('')
    expect(reverse('qwerty')).toEqual('ytrewq')
    expect(reverse('Hello, world!')).toEqual('!dlrow ,olleH')
    expect(reverse('12345')).toEqual('54321')
  })
})