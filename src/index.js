
exports.min = function min (array) {
  Math.min.apply(Math, array)  
}

exports.max = function max (array) {
  Math.max.apply(Math, array) 
}

exports.avg = function avg (array) {
  return array.reduce((a, b) => (a + b)) / array.length;
}
