
exports.min = function min (array) {
    try {
  return array.reduce((a, b) => Math.min(a, b);}
    catch {
    return 0;
    }
}

exports.max = function max (array) {
    try { 
  return array.reduce((a, b) => Math.max(a, b);}
    catch { return 0;}
}

exports.avg = function avg (array) {
    try {
  return array.reduce((a, b) => (a + b)) / array.length;}
    catch {
    return 0;}
}
