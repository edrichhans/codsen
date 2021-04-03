/**
 * string-range-expander
 * Expands string index ranges within whitespace boundaries until letters are met
 * Version: 2.0.13
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-range-expander/
 */

!function(e,i){"object"==typeof exports&&"undefined"!=typeof module?i(exports):"function"==typeof define&&define.amd?define(["exports"],i):i((e="undefined"!=typeof globalThis?globalThis:e||self).stringRangeExpander={})}(this,(function(e){"use strict";const i={str:"",from:0,to:0,ifLeftSideIncludesThisThenCropTightly:"",ifLeftSideIncludesThisCropItToo:"",ifRightSideIncludesThisThenCropTightly:"",ifRightSideIncludesThisCropItToo:"",extendToOneSide:!1,wipeAllWhitespaceOnLeft:!1,wipeAllWhitespaceOnRight:!1,addSingleSpaceToPreventAccidentalConcatenation:!1};e.defaults=i,e.expander=function(e){const t=/^[0-9a-zA-Z]+$/;function n(e){return!(!e||"string"!=typeof e)&&!e.trim()}function r(e){return"string"==typeof e}if(!e||"object"!=typeof e||Array.isArray(e)){let i;throw i=void 0===e?"but it is missing completely.":null===e?"but it was given as null.":`but it was given as ${typeof e}, equal to:\n${JSON.stringify(e,null,4)}.`,new Error(`string-range-expander: [THROW_ID_01] Input must be a plain object ${i}`)}if("object"==typeof e&&null!==e&&!Array.isArray(e)&&!Object.keys(e).length)throw new Error("string-range-expander: [THROW_ID_02] Input must be a plain object but it was given as a plain object without any keys.");if("number"!=typeof e.from)throw new Error(`string-range-expander: [THROW_ID_03] The input's "from" value opts.from, is not a number! Currently it's given as ${typeof e.from}, equal to ${JSON.stringify(e.from,null,0)}`);if("number"!=typeof e.to)throw new Error(`string-range-expander: [THROW_ID_04] The input's "to" value opts.to, is not a number! Currently it's given as ${typeof e.to}, equal to ${JSON.stringify(e.to,null,0)}`);if(e&&e.str&&!e.str[e.from]&&e.from!==e.to)throw new Error(`string-range-expander: [THROW_ID_05] The given input string opts.str ("${e.str}") must contain the character at index "from" ("${e.from}")`);if(e&&e.str&&!e.str[e.to-1])throw new Error(`string-range-expander: [THROW_ID_06] The given input string, opts.str ("${e.str}") must contain the character at index before "to" ("${e.to-1}")`);if(e.from>e.to)throw new Error(`string-range-expander: [THROW_ID_07] The given "from" index, "${e.from}" is greater than "to" index, "${e.to}". That's wrong!`);if(r(e.extendToOneSide)&&"left"!==e.extendToOneSide&&"right"!==e.extendToOneSide||!r(e.extendToOneSide)&&void 0!==e.extendToOneSide&&!1!==e.extendToOneSide)throw new Error(`string-range-expander: [THROW_ID_08] The opts.extendToOneSide value is not recogniseable! It's set to: "${e.extendToOneSide}" (${typeof e.extendToOneSide}). It has to be either Boolean "false" or strings "left" or "right"`);const o={...i,...e};if(Array.isArray(o.ifLeftSideIncludesThisThenCropTightly)){let e,i;if(!o.ifLeftSideIncludesThisThenCropTightly.every(((t,n)=>!!r(t)||(e=n,i=t,!1))))throw new Error(`string-range-expander: [THROW_ID_09] The opts.ifLeftSideIncludesThisThenCropTightly was set to an array:\n${JSON.stringify(o.ifLeftSideIncludesThisThenCropTightly,null,4)}. Now, that array contains not only string elements. For example, an element at index ${e} is of a type ${typeof i} (equal to ${JSON.stringify(i,null,0)}).`);o.ifLeftSideIncludesThisThenCropTightly=o.ifLeftSideIncludesThisThenCropTightly.join("")}const s=o.str;let l=o.from,d=o.to;if("right"!==o.extendToOneSide&&(n(s[l-1])&&(n(s[l-2])||o.ifLeftSideIncludesThisCropItToo.includes(s[l-2]))||s[l-1]&&o.ifLeftSideIncludesThisCropItToo.includes(s[l-1])||o.wipeAllWhitespaceOnLeft&&n(s[l-1])))for(let e=l;e--;)if(!o.ifLeftSideIncludesThisCropItToo.includes(s[e])){if(s[e].trim()){l=o.wipeAllWhitespaceOnLeft||o.ifLeftSideIncludesThisCropItToo.includes(s[e+1])?e+1:e+2;break}if(0===e){l=o.wipeAllWhitespaceOnLeft?0:1;break}}if("left"!==o.extendToOneSide&&(n(s[d])&&(o.wipeAllWhitespaceOnRight||n(s[d+1]))||o.ifRightSideIncludesThisCropItToo.includes(s[d])))for(let e=d,i=s.length;e<i;e++)if(!o.ifRightSideIncludesThisCropItToo.includes(s[e])&&(s[e]&&s[e].trim()||void 0===s[e])){d=o.wipeAllWhitespaceOnRight||o.ifRightSideIncludesThisCropItToo.includes(s[e-1])?e:e-1;break}return("right"!==o.extendToOneSide&&r(o.ifLeftSideIncludesThisThenCropTightly)&&o.ifLeftSideIncludesThisThenCropTightly&&(s[l-2]&&o.ifLeftSideIncludesThisThenCropTightly.includes(s[l-2])||s[l-1]&&o.ifLeftSideIncludesThisThenCropTightly.includes(s[l-1]))||"left"!==o.extendToOneSide&&r(o.ifRightSideIncludesThisThenCropTightly)&&o.ifRightSideIncludesThisThenCropTightly&&(s[d+1]&&o.ifRightSideIncludesThisThenCropTightly.includes(s[d+1])||s[d]&&o.ifRightSideIncludesThisThenCropTightly.includes(s[d])))&&("right"!==o.extendToOneSide&&n(s[l-1])&&!o.wipeAllWhitespaceOnLeft&&(l-=1),"left"!==o.extendToOneSide&&n(s[d])&&!o.wipeAllWhitespaceOnRight&&(d+=1)),o.addSingleSpaceToPreventAccidentalConcatenation&&s[l-1]&&s[l-1].trim()&&s[d]&&s[d].trim()&&(!o.ifLeftSideIncludesThisThenCropTightly&&!o.ifRightSideIncludesThisThenCropTightly||o.ifLeftSideIncludesThisThenCropTightly&&!o.ifLeftSideIncludesThisThenCropTightly.includes(s[l-1])||!(!o.ifRightSideIncludesThisThenCropTightly||s[d]&&o.ifRightSideIncludesThisThenCropTightly.includes(s[d])))&&(t.test(s[l-1])||t.test(s[d]))?[l,d," "]:[l,d]},e.version="2.0.13",Object.defineProperty(e,"__esModule",{value:!0})}));
