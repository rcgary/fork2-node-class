module.exports = function(args) {
  var constructor = args.initialize || function () {};
  for(var i in args) {
    if (args[i].hasOwnProperty && typeof args[i] == 'function' && i != 'initialize') {
      constructor.prototype[i] = args[i];
    }
  }
  return constructor;
};
