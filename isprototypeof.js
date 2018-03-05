// Requirements

(function (root) {

  function isPrototypeOf(origin, obj) {
     
    var properties = Object.keys(origin);
    var length = properties.length;
    var exist = 0;

    properties.forEach(function(p) {
      if(Boolean(obj[p])) {
        exist++;
      }
    });

    if (length === exist) {
      return true;
    } else {
      return false;
    }
  }

  root.isPrototypeOf = isPrototypeOf;
})(window);