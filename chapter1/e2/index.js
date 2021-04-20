const reverse = str => {
  if (typeof str !== 'string') {
    throw 'input must be a string'
  }

  const strArray = str.split('')
  const reverseStrArray = strArray.reverse()
  return reverseStrArray.join('')
}

// // No other data structures
// const reverse = str => {
//   if (typeof str !== 'string') {
//     throw 'input must be a string'
//   }

//   let result = ''
//   while (str.length) {
//     result += str.charAt(str.length - 1)
//     str = str.slice(0, str.length - 1)
//   }

//   return result
// }

// If not in JS, could do this right in place, swapping characters starting with first/last and going until the midpoint of the string. Strings in JS are immutable though so would need to create a new string

module.exports = reverse