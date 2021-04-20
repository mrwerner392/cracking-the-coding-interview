const isPerm = require('./index')

describe('isPerm', () => {
  test('it is defined', () => {
    expect(isPerm).toBeDefined()
  })

  test('it throws if either input is not a string', () => {
    expect(() => isPerm(null, 'hi')).toThrow()
    expect(() => isPerm('hi', 10)).toThrow()
  })

  test('it returns true if one string is a permutation of the other and false otherwise', () => {
    expect(isPerm('', '')).toEqual(true)
    expect(isPerm('qwerty', 'ytrewq')).toEqual(true)
    expect(isPerm('aabbcc112233', '123abc123abc')).toEqual(true)
    expect(isPerm('abcdef', 'abcdeff')).toEqual(false)
    expect(isPerm('qwerty', 'zwerty')).toEqual(false)
  })
})