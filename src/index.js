
exports.min = function min (array) {
    if(array.length == 0){return 0
                         }else{
        return
  Math.min.apply(Math, array) } 
}

exports.max = function max (array) {
     if(array.length == 0){return 0
                         }else{
        return
  Math.max.apply(Math, array) }
}

exports.avg = function avg (array) {
     if(array.length == 0){return 0
                         }else{
        return
  return array.reduce((a, b) => (a + b)) / array.length;}
}
