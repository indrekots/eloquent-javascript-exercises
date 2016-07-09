specialForms["set"] = function(args, env) {
  if (args.length != 2 || args[0].type != "word")
    throw new SyntaxError("Bad use of set");
  var scope = env;
  while (scope = Object.getPrototypeOf(scope)) {
  	if (Object.prototype.hasOwnProperty.call(scope, args[0].name)) {
      var value = evaluate(args[1], env);
      scope[args[0].name] = value;
      return value;
    }
  };
  throw new ReferenceError();
};
