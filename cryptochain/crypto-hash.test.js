const cryptoHash = require('./crypto-hash')

describe('cryptoHash()', () => {
  it('generates a SHA-256 hashed output', () => {
    result = cryptoHash('foo')
    expect(cryptoHash('foo')).toEqual(result)
  })

  it('produces the same hash with the same input arguments in any order', () => {
    expect(cryptoHash('one', 'two', 'three')).toEqual(cryptoHash('three', 'two', 'one'))
  })
})