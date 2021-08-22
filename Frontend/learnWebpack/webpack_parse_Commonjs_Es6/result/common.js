(() => {
  var __webpack_modules__ = ({
    "./src/a.js":
      ((__unused_webpack_module, exports) => {
        function add(a, b) {
          return a + b;
        }
        exports.add = add;
      })
  });
  var __webpack_module_cache__ = {};
  function __webpack_require__(moduleId) {
    var cachedModule = __webpack_module_cache__[moduleId];
    if (cachedModule !== undefined) {
      return cachedModule.exports;
    }
    var module = __webpack_module_cache__[moduleId] = {
      exports: {}
    };
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }

  var __webpack_exports__ = {};
  (() => {
    let add = __webpack_require__(/*! ./a.js */ "./src/a.js");
    console.log(add);
  })();

})();