function isEven(x) {
  x = Math.abs(x);
  if (x == 0) {
    return true;
  }
  else if (x == 1) {
    return false;
  }
  else {
    return isEven(x - 2);
  }
}
