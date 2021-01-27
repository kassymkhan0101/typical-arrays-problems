
exports.min = function min (array) {
    try {
  var min = array.reduce(function(a, b) {
    return Math.min(a, b);}
    catch {
    return 0;
    }
}

exports.max = function max (array) {
    try { 
  var max = array.reduce(function(a, b) {
    return Math.max(a, b);}
    catch { return 0;}
}

exports.avg = function avg (array) {
    try {
  return array.reduce((a, b) => (a + b)) / array.length;}
    catch {
    return 0;}
}
