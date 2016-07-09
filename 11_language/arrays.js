topEnv["array"] = function() {
  var a = [];
  for (var i = 0; i < arguments.length; i++) {
    a.push(arguments[i]);
  }
  return a;
};

topEnv["length"] = function(a) {
  return a.length;
};

topEnv["element"] = function(array, i) {
  return array[i];
};

run("do(define(sum, fun(array,",
    "     do(define(i, 0),",
    "        define(sum, 0),",
    "        while(<(i, length(array)),",
    "          do(define(sum, +(sum, element(array, i))),",
    "             define(i, +(i, 1)))),",
    "        sum))),",
    "   print(sum(array(1, 2, 3))))");
