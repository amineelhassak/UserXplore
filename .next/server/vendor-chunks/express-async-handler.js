/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/express-async-handler";
exports.ids = ["vendor-chunks/express-async-handler"];
exports.modules = {

/***/ "(rsc)/./node_modules/express-async-handler/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/express-async-handler/index.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("const asyncUtil = fn =>\nfunction asyncUtilWrap(...args) {\n  const fnReturn = fn(...args)\n  const next = args[args.length-1]\n  return Promise.resolve(fnReturn).catch(next)\n}\n\nmodule.exports = asyncUtil\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZXhwcmVzcy1hc3luYy1oYW5kbGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LW5leHRqcy1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2V4cHJlc3MtYXN5bmMtaGFuZGxlci9pbmRleC5qcz8xOTliIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGFzeW5jVXRpbCA9IGZuID0+XG5mdW5jdGlvbiBhc3luY1V0aWxXcmFwKC4uLmFyZ3MpIHtcbiAgY29uc3QgZm5SZXR1cm4gPSBmbiguLi5hcmdzKVxuICBjb25zdCBuZXh0ID0gYXJnc1thcmdzLmxlbmd0aC0xXVxuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGZuUmV0dXJuKS5jYXRjaChuZXh0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFzeW5jVXRpbFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/express-async-handler/index.js\n");

/***/ })

};
;