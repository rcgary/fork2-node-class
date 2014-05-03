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
  return constructor;
};
