module.exports = function(args,parent) {
  var constructor = args.initialize || function () {};
  if (parent) {
    constructor.prototype = new parent();
  }
  constructor.__super__ = parent || Object;
  constructor.prototype.constructor = constructor;

  for(var i in args) {
    if (args[i].hasOwnProperty && typeof args[i] == 'function' &&
        i != 'initialize') {
      constructor.prototype[i] = args[i];
    }
  }

  var current = constructor
  constructor.prototype.super = function(method) {
    current = current.__super__;
    var result = current.prototype[method].apply(this, [].slice.call(arguments, 1));
    // set current back
    current = constructor;
    return result;
  };

  return constructor;
};
