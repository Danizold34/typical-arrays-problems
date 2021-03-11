
exports.min = function min (array) {
    let min = array[0];
    if (!array || array.length  === 0) return 0;
    else {
    for( let i = 0 ; i < array.length; i++){
        if( array[i] < array[i+1] {
           min  = array[i];
           }
           
           
    }
  return min;
           }
}

exports.max = function max (array) {
                let max = array[0];
             if (!array || array.length  === 0) return 0;
    else 
    for( let i = 0 ; i < array.length; i++){
        if( array[i] > array[i+1] {
           max  = array[i];
           }
            
  return max;
           }
}

exports.avg = function avg (array) {
                let avg = array[0];
             if (!array || array.length  === 0) return 0;
    else 
    for( let i = 0 ; i < array.length; i++){
      let avg1 += array[i];
        avg = avg1/i;
           }
  return avg;
        }
}
