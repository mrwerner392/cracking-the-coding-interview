const spaceReplace = str => {
  if (typeof str !== 'string') throw 'input must be a string'
  console.log(str.split(' ').join('%20'))
  return str.split(' ').join('%20')
}

module.exports = spaceReplace