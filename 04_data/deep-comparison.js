function deepEqual(val1, val2) {
  if (typeof val1 == "object" && val1 != null &&
      typeof val2 == "object" && val2 != null) {
    if (Object.keys(val1).length != Object.keys(val2).length) {
      return false;
    }

    for (var prop in val1) {
      if (!(prop in val2) || !deepEqual(val1[prop], val2[prop])) {
        return false;
      }
    }
    return true;
  }
  else {
    return val1 === val2;
  }
}
