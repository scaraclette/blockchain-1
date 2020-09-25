const crypto = require('crypto')

const cryptoHash = (...inputs) => {
  const hash = crypto.createHash('sha256')
  hash.update(inputs.sort().join(' '))

  // result to hash in hex form
  return hash.digest('hex')
}

module.exports = cryptoHash