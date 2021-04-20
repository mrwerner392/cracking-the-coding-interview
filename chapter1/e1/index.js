const unique = str => {
  if (typeof str !== 'string') {
    return false
  }

  let charMap = {}
  for (let char of str) {
    if (charMap[char]) {
      return false
    } else {
      charMap[char] = 1
    }
  }

  return true
}

const uniqueNoStructs = str => {
  if (typeof str !== 'string') {
    return false
  }

  let testStr = str
  while (testStr.length > 1) {
    const char = testStr[0]
    testStr = testStr.slice(1)
    if (testStr.indexOf(char) > -1) {
      return false
    }
  }

  return true
}

module.exports = { unique, uniqueNoStructs }