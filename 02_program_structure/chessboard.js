var size = 8, str = "";
for (var i = 0; i < size; i++) {
  var evenRow = !(i % 2);
  for (var j = 0; j < size; j++) {
    var evenCol = !(j % 2);
    if ((evenRow && evenCol) || (!evenRow && !evenCol)) {
      str += " ";
    }
    else {
      str += "#";
    }

    if (j == size-1)
      str += "\n";
  }
}
console.log(str);
