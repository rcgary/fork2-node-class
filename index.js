module.exports = function Class(c,p) {
  var constructor = c.initialize || function () {};
  return constructor;
};
