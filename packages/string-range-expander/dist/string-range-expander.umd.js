/**
 * string-range-expander
 * Expands string index ranges within whitespace boundaries until letters are met
 * Version: 1.10.50
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-range-expander
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).stringRangeExpander=t()}(this,(function(){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}var t="[object Object]";var n,i,o=Function.prototype,r=Object.prototype,s=o.toString,l=r.hasOwnProperty,c=s.call(Object),h=r.toString,f=(n=Object.getPrototypeOf,i=Object,function(e){return n(i(e))});var d=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||h.call(e)!=t||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var n=f(e);if(null===n)return!0;var i=l.call(n,"constructor")&&n.constructor;return"function"==typeof i&&i instanceof i&&s.call(i)==c},a=Array.isArray;return function(t){var n,i=/^[0-9a-zA-Z]+$/;function o(e){return!(!e||"string"!=typeof e)&&0===e.trim().length}function r(e){return"string"==typeof e}if(!d(t))throw n=void 0===t?"but it is missing completely.":null===t?"but it was given as null.":"but it was given as ".concat(e(t),", equal to:\n").concat(JSON.stringify(t,null,4),"."),new Error("string-range-expander: [THROW_ID_01] Input must be a plain object ".concat(n));if(d(t)&&0===Object.keys(t).length)throw new Error("string-range-expander: [THROW_ID_02] Input must be a plain object but it was given as a plain object without any keys and computer doesn't know what to expand.");if("number"!=typeof t.from)throw new Error("string-range-expander: [THROW_ID_03] The input's \"from\" value opts.from, is not a number! Currently it's given as ".concat(e(t.from),", equal to ").concat(JSON.stringify(t.from,null,0)));if("number"!=typeof t.to)throw new Error("string-range-expander: [THROW_ID_04] The input's \"to\" value opts.to, is not a number! Currently it's given as ".concat(e(t.to),", equal to ").concat(JSON.stringify(t.to,null,0)));if(!t.str[t.from]&&t.from!==t.to)throw new Error('string-range-expander: [THROW_ID_05] The given input string opts.str ("'.concat(t.str,'") must contain the character at index "from" ("').concat(t.from,'")'));if(!t.str[t.to-1])throw new Error('string-range-expander: [THROW_ID_06] The given input string, opts.str ("'.concat(t.str,'") must contain the character at index before "to" ("').concat(t.to-1,'")'));if(t.from>t.to)throw new Error('string-range-expander: [THROW_ID_07] The given "from" index, "'.concat(t.from,'" is greater than "to" index, "').concat(t.to,"\". That's wrong!"));if(r(t.extendToOneSide)&&"left"!==t.extendToOneSide&&"right"!==t.extendToOneSide||!r(t.extendToOneSide)&&void 0!==t.extendToOneSide&&!1!==t.extendToOneSide)throw new Error("string-range-expander: [THROW_ID_08] The opts.extendToOneSide value is not recogniseable! It's set to: \"".concat(t.extendToOneSide,'" (').concat(e(t.extendToOneSide),'). It has to be either Boolean "false" or strings "left" or "right"'));var s=Object.assign({},{str:"",from:0,to:0,ifLeftSideIncludesThisThenCropTightly:"",ifLeftSideIncludesThisCropItToo:"",ifRightSideIncludesThisThenCropTightly:"",ifRightSideIncludesThisCropItToo:"",extendToOneSide:!1,wipeAllWhitespaceOnLeft:!1,wipeAllWhitespaceOnRight:!1,addSingleSpaceToPreventAccidentalConcatenation:!1},t);if(a(s.ifLeftSideIncludesThisThenCropTightly)){var l,c;if(!s.ifLeftSideIncludesThisThenCropTightly.every((function(e,t){return!!r(e)||(l=t,c=e,!1)})))throw new Error("string-range-expander: [THROW_ID_09] The opts.ifLeftSideIncludesThisThenCropTightly was set to an array:\n".concat(JSON.stringify(s.ifLeftSideIncludesThisThenCropTightly,null,4),". Now, that array contains not only string elements. For example, an element at index ").concat(l," is of a type ").concat(e(c)," (equal to ").concat(JSON.stringify(c,null,0),")."));s.ifLeftSideIncludesThisThenCropTightly=s.ifLeftSideIncludesThisThenCropTightly.join("")}var h=s.str,f=s.from,u=s.to;if("right"!==s.extendToOneSide&&(o(h[f-1])&&(o(h[f-2])||s.ifLeftSideIncludesThisCropItToo.includes(h[f-2]))||h[f-1]&&s.ifLeftSideIncludesThisCropItToo.includes(h[f-1])||s.wipeAllWhitespaceOnLeft&&o(h[f-1])))for(var T=f;T--;)if(!s.ifLeftSideIncludesThisCropItToo.includes(h[T])){if(h[T].trim().length){f=s.wipeAllWhitespaceOnLeft||s.ifLeftSideIncludesThisCropItToo.includes(h[T+1])?T+1:T+2;break}if(0===T){f=s.wipeAllWhitespaceOnLeft?0:1;break}}if("left"!==s.extendToOneSide&&(o(h[u])&&(s.wipeAllWhitespaceOnRight||o(h[u+1]))||s.ifRightSideIncludesThisCropItToo.includes(h[u])))for(var p=u,g=h.length;p<g;p++)if(!s.ifRightSideIncludesThisCropItToo.includes(h[p])&&(h[p]&&h[p].trim().length||void 0===h[p])){u=s.wipeAllWhitespaceOnRight||s.ifRightSideIncludesThisCropItToo.includes(h[p-1])?p:p-1;break}return("right"!==s.extendToOneSide&&r(s.ifLeftSideIncludesThisThenCropTightly)&&s.ifLeftSideIncludesThisThenCropTightly.length&&(h[f-2]&&s.ifLeftSideIncludesThisThenCropTightly.includes(h[f-2])||h[f-1]&&s.ifLeftSideIncludesThisThenCropTightly.includes(h[f-1]))||"left"!==s.extendToOneSide&&r(s.ifRightSideIncludesThisThenCropTightly)&&s.ifRightSideIncludesThisThenCropTightly.length&&(h[u+1]&&s.ifRightSideIncludesThisThenCropTightly.includes(h[u+1])||h[u]&&s.ifRightSideIncludesThisThenCropTightly.includes(h[u])))&&("right"!==s.extendToOneSide&&o(h[f-1])&&!s.wipeAllWhitespaceOnLeft&&f--,"left"!==s.extendToOneSide&&o(h[u])&&!s.wipeAllWhitespaceOnRight&&u++),s.addSingleSpaceToPreventAccidentalConcatenation&&h[f-1]&&h[f-1].trim().length&&h[u]&&h[u].trim().length&&(!s.ifLeftSideIncludesThisThenCropTightly&&!s.ifRightSideIncludesThisThenCropTightly||s.ifLeftSideIncludesThisThenCropTightly&&!s.ifLeftSideIncludesThisThenCropTightly.includes(h[f-1])||!(!s.ifRightSideIncludesThisThenCropTightly||h[u]&&s.ifRightSideIncludesThisThenCropTightly.includes(h[u])))&&(i.test(h[f-1])||i.test(h[u]))?[f,u," "]:[f,u]}}));
