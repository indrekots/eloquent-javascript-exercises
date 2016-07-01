function reverseArray(array) {
  var newArray = [];
  for (var i = array.length-1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length/2); i++) {
    var elem1 = array[i];
    var elem2 = array[array.length -1 - i];
    array[i] = elem2;
    array[array.length -1 -i] = elem1;
  }
}
