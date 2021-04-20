const { unique, uniqueNoStructs } = require('./index')

describe('unique', () => {
  test('unique function is defined', () => {
    expect(unique).toBeDefined()
  })
  
  test('unique returns false on invalid input', () => {
    expect(unique(null)).toEqual(false)
    expect(unique(undefined)).toEqual(false)
    expect(unique(25)).toEqual(false)
    expect(unique(['hi', 'there'])).toEqual(false)
  })
  
  test('unique returns true on empty string', () => {
    expect(unique('')).toEqual(true)
  })
  
  test('unique returns true if string is unique and false otherwise', () => {
    expect(unique('This is not a unique string')).toEqual(false)
    expect(unique('abcdefghijklmnopqrstuvwxyz')).toEqual(true)
    expect(unique('1234567890qwerty!')).toEqual(true)
    expect(unique('aaaaaaa')).toEqual(false)
    expect(unique('aaqwerty')).toEqual(false)
    expect(unique('aqwertya')).toEqual(false)
    expect(unique('qwertyaa')).toEqual(false)
    expect(unique('            ')).toEqual(false)
    expect(unique('a')).toEqual(true)
    expect(unique(' ')).toEqual(true)
  })
})

describe('uniqueNoStructs', () => {
  test('uniqueNoStructs function is defined', () => {
    expect(uniqueNoStructs).toBeDefined()
  })

  test('uniqueNoStructs returns false on invalid input', () => {
    expect(uniqueNoStructs(null)).toEqual(false)
    expect(uniqueNoStructs(undefined)).toEqual(false)
    expect(uniqueNoStructs(25)).toEqual(false)
    expect(uniqueNoStructs(['hi', 'there'])).toEqual(false)
  })
  
  test('uniqueNoStructs returns true on empty string', () => {
    expect(uniqueNoStructs('')).toEqual(true)
  })
  
  test('uniqueNoStructs returns true if string is unique and false otherwise', () => {
    expect(uniqueNoStructs('This is not a uniqueNoStructs string')).toEqual(false)
    expect(uniqueNoStructs('abcdefghijklmnopqrstuvwxyz')).toEqual(true)
    expect(uniqueNoStructs('1234567890qwerty!')).toEqual(true)
    expect(uniqueNoStructs('aaaaaaa')).toEqual(false)
    expect(uniqueNoStructs('aaqwerty')).toEqual(false)
    expect(uniqueNoStructs('aqwertya')).toEqual(false)
    expect(uniqueNoStructs('qwertyaa')).toEqual(false)
    expect(uniqueNoStructs('            ')).toEqual(false)
    expect(uniqueNoStructs('a')).toEqual(true)
    expect(uniqueNoStructs(' ')).toEqual(true)
  })
})