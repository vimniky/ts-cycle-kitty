const _ = require('lodash')
const ifElse = (condition) => (a, b) => condition ? a : b
const removeEmpty = (arr) => arr.filter(entry => _.isNaN(entry) || _.isUndefined(entry))

module.exports = {
  ifElse,
  removeEmpty,
}
