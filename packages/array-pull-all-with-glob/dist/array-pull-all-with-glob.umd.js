/**
 * array-pull-all-with-glob
 * pullAllWithGlob - like _.pullAll but pulling stronger, with globs
 * Version: 4.12.66
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-pull-all-with-glob
 */

!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r=r||self).arrayPullAllWithGlob=t()}(this,(function(){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(t)}function t(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r}function e(r,t){var e=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.push.apply(e,n)}return e}function n(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){t(r,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(t){Object.defineProperty(r,t,Object.getOwnPropertyDescriptor(o,t))}))}return r}const o=new Map;function i(r,t){t={caseSensitive:!1,...t};const e=r+JSON.stringify(t);if(o.has(e))return o.get(e);const n="!"===r[0];n&&(r=r.slice(1)),r=(r=>{if("string"!=typeof r)throw new TypeError("Expected a string");return r.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")})(r).replace(/\\\*/g,"[\\s\\S]*");const i=new RegExp(`^${r}$`,t.caseSensitive?"":"i");return i.negated=n,o.set(e,i),i}var a=(r,t,e)=>{if(!Array.isArray(r)||!Array.isArray(t))throw new TypeError(`Expected two arrays, got ${typeof r} ${typeof t}`);if(0===t.length)return r;const n="!"===t[0][0];t=t.map(r=>i(r,e));const o=[];for(const e of r){let r=n;for(const n of t)n.test(e)&&(r=!n.negated);r&&o.push(e)}return o};return a.isMatch=(r,t,e)=>{const n=Array.isArray(r)?r:[r],o=Array.isArray(t)?t:[t];return n.some(r=>o.every(t=>{const n=i(t,e),o=n.test(r);return n.negated?!o:o}))},function(t,e,o){function i(r){return"string"==typeof r}if(!Array.isArray(t))throw new Error("array-pull-all-with-glob: [THROW_ID_01] first argument must be an array! Currently it's ".concat(r(t),", equal to: ").concat(JSON.stringify(t,null,4)));if(!t.length)return[];if(null==e)throw new Error("array-pull-all-with-glob: [THROW_ID_02] second argument is missing!");var s,l;if("string"==typeof e){if(0===e.length)return t;s=[e]}else if(Array.isArray(e)){if(0===e.length)return t;s=Array.from(e)}else if(!Array.isArray(e))throw new Error("array-pull-all-with-glob: [THROW_ID_04] first argument must be an array! Currently it's ".concat(r(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(0===t.length||0===e.length)return t;if(!t.every((function(r){return i(r)})))throw new Error("array-pull-all-with-glob: [THROW_ID_05] first argument array contains non-string elements: ".concat(JSON.stringify(t,null,4)));if(!s.every((function(r){return i(r)})))throw new Error("array-pull-all-with-glob: [THROW_ID_06] first argument array contains non-string elements: ".concat(JSON.stringify(s,null,4)));if(o&&(Array.isArray(o)||"object"!==r(o)))throw new Error("array-pull-all-with-glob: [THROW_ID_07] third argument, options object is not a plain object but ".concat(Array.isArray(o)?"array":r(o)));var c={caseSensitive:!0};return l=null===o?n({},c):n(n({},c),o),Array.from(t).filter((function(r){return!s.some((function(t){return a.isMatch(r,t,{caseSensitive:l.caseSensitive})}))}))}}));
