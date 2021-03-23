/**
 * string-range-expander
 * Expands string index ranges within whitespace boundaries until letters are met
 * Version: 2.0.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-range-expander/
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).stringRangeExpander={})}(this,(function(e){"use strict";function t(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function i(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function n(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(i){t(e,i,r[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var r={str:"",from:0,to:0,ifLeftSideIncludesThisThenCropTightly:"",ifLeftSideIncludesThisCropItToo:"",ifRightSideIncludesThisThenCropTightly:"",ifRightSideIncludesThisCropItToo:"",extendToOneSide:!1,wipeAllWhitespaceOnLeft:!1,wipeAllWhitespaceOnRight:!1,addSingleSpaceToPreventAccidentalConcatenation:!1};e.defaults=r,e.expander=function(e){var t,i=/^[0-9a-zA-Z]+$/;function o(e){return!(!e||"string"!=typeof e)&&!e.trim()}function s(e){return"string"==typeof e}if(!e||"object"!=typeof e||Array.isArray(e))throw t=void 0===e?"but it is missing completely.":null===e?"but it was given as null.":"but it was given as "+typeof e+", equal to:\n"+JSON.stringify(e,null,4)+".",new Error("string-range-expander: [THROW_ID_01] Input must be a plain object "+t);if("object"==typeof e&&null!==e&&!Array.isArray(e)&&!Object.keys(e).length)throw new Error("string-range-expander: [THROW_ID_02] Input must be a plain object but it was given as a plain object without any keys.");if("number"!=typeof e.from)throw new Error("string-range-expander: [THROW_ID_03] The input's \"from\" value opts.from, is not a number! Currently it's given as "+typeof e.from+", equal to "+JSON.stringify(e.from,null,0));if("number"!=typeof e.to)throw new Error("string-range-expander: [THROW_ID_04] The input's \"to\" value opts.to, is not a number! Currently it's given as "+typeof e.to+", equal to "+JSON.stringify(e.to,null,0));if(e&&e.str&&!e.str[e.from]&&e.from!==e.to)throw new Error('string-range-expander: [THROW_ID_05] The given input string opts.str ("'+e.str+'") must contain the character at index "from" ("'+e.from+'")');if(e&&e.str&&!e.str[e.to-1])throw new Error('string-range-expander: [THROW_ID_06] The given input string, opts.str ("'+e.str+'") must contain the character at index before "to" ("'+(e.to-1)+'")');if(e.from>e.to)throw new Error('string-range-expander: [THROW_ID_07] The given "from" index, "'+e.from+'" is greater than "to" index, "'+e.to+"\". That's wrong!");if(s(e.extendToOneSide)&&"left"!==e.extendToOneSide&&"right"!==e.extendToOneSide||!s(e.extendToOneSide)&&void 0!==e.extendToOneSide&&!1!==e.extendToOneSide)throw new Error("string-range-expander: [THROW_ID_08] The opts.extendToOneSide value is not recogniseable! It's set to: \""+e.extendToOneSide+'" ('+typeof e.extendToOneSide+'). It has to be either Boolean "false" or strings "left" or "right"');var l=n(n({},r),e);if(Array.isArray(l.ifLeftSideIncludesThisThenCropTightly)){var d,f;if(!l.ifLeftSideIncludesThisThenCropTightly.every((function(e,t){return!!s(e)||(d=t,f=e,!1)})))throw new Error("string-range-expander: [THROW_ID_09] The opts.ifLeftSideIncludesThisThenCropTightly was set to an array:\n"+JSON.stringify(l.ifLeftSideIncludesThisThenCropTightly,null,4)+". Now, that array contains not only string elements. For example, an element at index "+d+" is of a type "+typeof f+" (equal to "+JSON.stringify(f,null,0)+").");l.ifLeftSideIncludesThisThenCropTightly=l.ifLeftSideIncludesThisThenCropTightly.join("")}var h=l.str,a=l.from,T=l.to;if("right"!==l.extendToOneSide&&(o(h[a-1])&&(o(h[a-2])||l.ifLeftSideIncludesThisCropItToo.includes(h[a-2]))||h[a-1]&&l.ifLeftSideIncludesThisCropItToo.includes(h[a-1])||l.wipeAllWhitespaceOnLeft&&o(h[a-1])))for(var p=a;p--;)if(!l.ifLeftSideIncludesThisCropItToo.includes(h[p])){if(h[p].trim()){a=l.wipeAllWhitespaceOnLeft||l.ifLeftSideIncludesThisCropItToo.includes(h[p+1])?p+1:p+2;break}if(0===p){a=l.wipeAllWhitespaceOnLeft?0:1;break}}if("left"!==l.extendToOneSide&&(o(h[T])&&(l.wipeAllWhitespaceOnRight||o(h[T+1]))||l.ifRightSideIncludesThisCropItToo.includes(h[T])))for(var u=T,c=h.length;u<c;u++)if(!l.ifRightSideIncludesThisCropItToo.includes(h[u])&&(h[u]&&h[u].trim()||void 0===h[u])){T=l.wipeAllWhitespaceOnRight||l.ifRightSideIncludesThisCropItToo.includes(h[u-1])?u:u-1;break}return("right"!==l.extendToOneSide&&s(l.ifLeftSideIncludesThisThenCropTightly)&&l.ifLeftSideIncludesThisThenCropTightly&&(h[a-2]&&l.ifLeftSideIncludesThisThenCropTightly.includes(h[a-2])||h[a-1]&&l.ifLeftSideIncludesThisThenCropTightly.includes(h[a-1]))||"left"!==l.extendToOneSide&&s(l.ifRightSideIncludesThisThenCropTightly)&&l.ifRightSideIncludesThisThenCropTightly&&(h[T+1]&&l.ifRightSideIncludesThisThenCropTightly.includes(h[T+1])||h[T]&&l.ifRightSideIncludesThisThenCropTightly.includes(h[T])))&&("right"!==l.extendToOneSide&&o(h[a-1])&&!l.wipeAllWhitespaceOnLeft&&(a-=1),"left"!==l.extendToOneSide&&o(h[T])&&!l.wipeAllWhitespaceOnRight&&(T+=1)),l.addSingleSpaceToPreventAccidentalConcatenation&&h[a-1]&&h[a-1].trim()&&h[T]&&h[T].trim()&&(!l.ifLeftSideIncludesThisThenCropTightly&&!l.ifRightSideIncludesThisThenCropTightly||l.ifLeftSideIncludesThisThenCropTightly&&!l.ifLeftSideIncludesThisThenCropTightly.includes(h[a-1])||!(!l.ifRightSideIncludesThisThenCropTightly||h[T]&&l.ifRightSideIncludesThisThenCropTightly.includes(h[T])))&&(i.test(h[a-1])||i.test(h[T]))?[a,T," "]:[a,T]},e.version="2.0.9",Object.defineProperty(e,"__esModule",{value:!0})}));
