function all(promises) {
  return new Promise(function(success, fail) {
    var result = [];
    var counter = promises.length;
    if (counter == 0) success(result);

    promises.forEach(function(promise, i) {
      promise.then(function(val) {
        result[i] = val;
        counter--;
        if (counter == 0) {
          success(result);
        }
      }).catch(function(err) {
        fail(err);
      });
    });
  });
}
