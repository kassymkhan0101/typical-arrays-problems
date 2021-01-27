
exports.min = function min (array) {
    try {
        return Math.min.apply(Math, array);
    }
    catch {
    return 0;
    }
}

exports.max = function max (array) {
    try { 
        Math.max.apply(Math, array);
    }
    catch { return 0;}
}

exports.avg = function avg (array) {
    try {
  return array.reduce((a, b) => (a + b)) / array.length;}
    catch {
    return 0;}
}
