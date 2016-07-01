function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

function listToArray(list) {
  var array = [];
  while (list != null) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}

function prepend(elem, list) {
  return {value: elem, rest: list};
}

function nth(list, index) {
  if (list == null) return undefined;
  if (index == 0) {
    return list.value;
  }
  else {
    return nth(list.rest, index - 1);
  }
}
