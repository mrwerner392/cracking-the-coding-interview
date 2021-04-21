const spaceReplace = require('./index');

describe('spaceReplace', () => {
  test('it is defined', () => {
    expect(spaceReplace).toBeDefined()
  })

  test('it throws when input is not a string', () => {
    expect(() => spaceReplace()).toThrow()
    expect(() => spaceReplace(null)).toThrow()
    expect(() => spaceReplace(10)).toThrow()
    expect(() => spaceReplace(undefined)).toThrow()
    expect(() => spaceReplace(true)).toThrow()
  })

  test('it replaces all spaces with "%20"', () => {
    expect(spaceReplace('')).toEqual('')
    expect(spaceReplace(' ')).toEqual('%20')
    expect(spaceReplace('Hello, World!')).toEqual('Hello,%20World!')
    expect(spaceReplace('abc123')).toEqual('abc123')
    expect(spaceReplace('Hi my name is Matt.')).toEqual('Hi%20my%20name%20is%20Matt.')
    expect(spaceReplace(' outer spaces ')).toEqual('%20outer%20spaces%20')
  })
})