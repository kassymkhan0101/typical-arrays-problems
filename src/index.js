
exports.min = function min (array) {
    try {
        if(array.length == 0){
        return 0}
        return Math.min.apply(0, array);
    }
    catch(e) {
    return e;
    }
}

exports.max = function max (array) {
    try { 
         if(array.length == 0){
        return 0}
        
        
        
        
        Math.max.apply(0, array);
    }
    catch(e) { return e;}
}

exports.avg = function avg (array) {
    try {
  return array.reduce((a, b) => (a + b)) / array.length;}
    catch {
    return 0;}
}
