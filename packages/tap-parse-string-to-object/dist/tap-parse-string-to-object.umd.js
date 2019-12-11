/**
 * tap-parse-string-to-object
 * Parses raw Tap output, string-to-object
 * Version: 1.1.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/tap-parse-string-to-object
 */

!function(s,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(s=s||self).tapParseStringToObject=t()}(this,(function(){"use strict";function s(s){return function(s){if(Array.isArray(s)){for(var t=0,e=new Array(s.length);t<s.length;t++)e[t]=s[t];return e}}(s)||function(s){if(Symbol.iterator in Object(s)||"[object Arguments]"===Object.prototype.toString.call(s))return Array.from(s)}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function t(s,t,e){for(var r={assertsPassed:0,assertsFailed:0},a=t,i=!1,n=!1,o=t;o<e;o++){if(i||"-"!==s[o]||"-"!==s[o+1]||"-"!==s[o+2]||(i=!0,a=null),i){if("."!==s[o-1]||"."!==s[o-2]||"."!==s[o-3])continue;i=!1,a=o}if(!i&&["\n","\r"].includes(s[o])){if(Number.isInteger(a)){var l=s.slice(a,o);i||n||!l.trim().startsWith("# Subtest")||(n=!0),!i&&n&&l.trim().startsWith("1..")&&(n=!1),!l.trim().startsWith("#")&&n&&(l.trim().startsWith("ok ")?r.assertsPassed=r.assertsPassed+1:l.trim().startsWith("not ok ")&&(r.assertsFailed=r.assertsFailed+1)),a=null}}else i||null===a&&(a=o)}return r}return function(e){if("string"!=typeof e)throw new Error("tap-parse-string-to-object: [THROW_ID_01] input must be a string");var r={ok:!0,assertsTotal:0,assertsPassed:0,assertsFailed:0,suitesTotal:0,suitesPassed:0,suitesFailed:0};return function(s){var t=s.length,e=[],r=null,a=!1;if(!s.includes("{"))return[[0,s.length]];for(var i=0;i<t;i++){if(a||"-"!==s[i]||"-"!==s[i+1]||"-"!==s[i+2]||(a=!0),a&&"."===s[i-1]&&"."===s[i-2]&&"."===s[i-3])a=!1;else if(a)continue;a||"{"!==s[i]||null!==r||(r=i+1),a||"}"!==s[i]||null===r||(e.push([r,i]),r=null)}return e}(e).forEach((function(a){var i=t.apply(void 0,[e].concat(s(a)));i.assertsFailed?(r.suitesFailed=r.suitesFailed+1,r.assertsFailed=r.assertsFailed+i.assertsFailed):(r.suitesPassed=r.suitesPassed+1,r.assertsPassed=r.assertsPassed+i.assertsPassed),r.assertsTotal=r.assertsTotal+i.assertsPassed+i.assertsFailed,r.suitesTotal=r.suitesTotal+1})),r}}));