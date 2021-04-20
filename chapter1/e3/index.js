const isPerm = (str1, str2) => {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw 'inputs must be of type string'
  }

  if (str1.length !== str2.length) {
    return false
  }

  const charMap = str => {
    let map = {}
    for (let char of str) {
      if (map[char]) {
        map[char]++
      } else {
        map[char] = 1
      }
    }
    return map
  }

  const str1Map = charMap(str1)
  const str2Map = charMap(str2)

  for (let char in str1Map) {
    if (str1Map[char] !== str2Map[char]) {
      return false
    }
  }

  return true
}

module.exports = isPerm