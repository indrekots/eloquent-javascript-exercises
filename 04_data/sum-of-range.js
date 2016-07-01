function range(start, end, step) {
  var step = step || 1;
  var result = [];
  if (step < 0) {
    for (var i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  else {
    for (var i = start; i <= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}
