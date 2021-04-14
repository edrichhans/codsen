/**
 * @name string-match-left-right
 * @fileoverview Match substrings on the left or right of a given index, ignoring whitespace
 * @version 7.0.10
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-match-left-right/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).stringMatchLeftRight={})}(this,(function(t){"use strict";
/**
 * @name arrayiffy-if-string
 * @fileoverview Put non-empty strings into arrays, turn empty-ones into empty arrays. Bypass everything else.
 * @version 3.13.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/arrayiffy-if-string/}
 */function e(t){return t&&"object"==typeof t&&!Array.isArray(t)}function r(t){return"string"==typeof t}const i={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},n=t=>t+1;function a(t,e,r,a,o=!1,s=n){const h="function"==typeof r?r():r;if(+e<0&&o&&"EOL"===h)return h;const c={...i,...a};if(e>=t.length&&!o)return!1;let f=o?1:r.length,u=0,l=!1,g=!1,m=!1,M=c.maxMismatches,y=e,p=!1,b=!1,d=!1;function B(){return 1===u&&M<c.maxMismatches-1}for(;t[y];){const e=s(y);if(c.trimBeforeMatching&&""===t[y].trim()){if(!t[e]&&o&&"EOL"===r)return!0;y=s(y);continue}if(c&&!c.i&&c.trimCharsBeforeMatching&&c.trimCharsBeforeMatching.includes(t[y])||c&&c.i&&c.trimCharsBeforeMatching&&c.trimCharsBeforeMatching.map((t=>t.toLowerCase())).includes(t[y].toLowerCase())){if(o&&"EOL"===r&&!t[e])return!0;y=s(y);continue}const i=e>y?r[r.length-f]:r[f-1];if(!c.i&&t[y]===i||c.i&&t[y].toLowerCase()===i.toLowerCase()){if(p||(p=!0),m||(m=!0),f===r.length){if(b=!0,M!==c.maxMismatches)return!1}else 1===f&&(d=!0);if(f-=1,u++,B())return!1;if(!f)return(u!==r.length||M===c.maxMismatches||!l)&&y}else{if(l||u||(l=!0),!(c.maxMismatches&&M&&y))return!(0!==y||1!==f||c.lastMustMatch||!m)&&0;M-=1;for(let i=0;i<=M;i++){const n=e>y?r[r.length-f+1+i]:r[f-2-i],a=t[s(y)];if(n&&(!c.i&&t[y]===n||c.i&&t[y].toLowerCase()===n.toLowerCase())&&(!c.firstMustMatch||f!==r.length)){if(u++,B())return!1;f-=2,p=!0;break}if(a&&n&&(!c.i&&a===n||c.i&&a.toLowerCase()===n.toLowerCase())&&(!c.firstMustMatch||f!==r.length)){if(!u&&!c.hungry)return!1;f-=1,p=!0;break}if(void 0===n&&M>=0&&p&&(!c.firstMustMatch||b)&&(!c.lastMustMatch||d))return y}p||(g=y)}if(!1!==g&&g!==y&&(g=!1),f<1)return y;y=s(y)}return f>0?!(!o||"EOL"!==h)||!!(c&&c.maxMismatches>=f&&m)&&(g||0):void 0}function o(t,n,o,s,h){if(e(h)&&Object.prototype.hasOwnProperty.call(h,"trimBeforeMatching")&&"boolean"!=typeof h.trimBeforeMatching)throw new Error(`string-match-left-right/${t}(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!${Array.isArray(h.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""}`);const c={...i,...h};var f;if("string"==typeof c.trimCharsBeforeMatching&&(c.trimCharsBeforeMatching="string"==typeof(f=c.trimCharsBeforeMatching)?f.length?[f]:[]:f),c.trimCharsBeforeMatching=c.trimCharsBeforeMatching.map((t=>r(t)?t:String(t))),!r(n))return!1;if(!n.length)return!1;if(!Number.isInteger(o)||o<0)throw new Error(`string-match-left-right/${t}(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: ${typeof o}, equal to:\n${JSON.stringify(o,null,4)}`);let u,l;if(r(s))u=[s];else if(Array.isArray(s))u=s;else if(s){if("function"!=typeof s)throw new Error(`string-match-left-right/${t}(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's ${typeof s}, equal to:\n${JSON.stringify(s,null,4)}`);u=[],u.push(s)}else u=s;if(h&&!e(h))throw new Error(`string-match-left-right/${t}(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type "${typeof h}", and equal to:\n${JSON.stringify(h,null,4)}`);let g=0,m="";if(c&&c.trimCharsBeforeMatching&&c.trimCharsBeforeMatching.some(((t,e)=>t.length>1&&(g=e,m=t,!0))))throw new Error(`string-match-left-right/${t}(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index ${g} is longer than 1 character, ${m.length} (equals to ${m}). Please split it into separate characters and put into array as separate elements.`);if(!u||!Array.isArray(u)||Array.isArray(u)&&!u.length||Array.isArray(u)&&1===u.length&&r(u[0])&&!u[0].trim()){if("function"==typeof c.cb){let e,r=o;if("matchLeftIncl"!==t&&"matchRight"!==t||(r+=1),"L"===t[5])for(let t=r;t--;){const r=n[t];if((!c.trimBeforeMatching||c.trimBeforeMatching&&void 0!==r&&r.trim())&&(!c.trimCharsBeforeMatching||!c.trimCharsBeforeMatching.length||void 0!==r&&!c.trimCharsBeforeMatching.includes(r))){e=t;break}}else if(t.startsWith("matchRight"))for(let t=r;t<n.length;t++){const r=n[t];if((!c.trimBeforeMatching||c.trimBeforeMatching&&r.trim())&&(!c.trimCharsBeforeMatching||!c.trimCharsBeforeMatching.length||!c.trimCharsBeforeMatching.includes(r))){e=t;break}}if(void 0===e)return!1;const i=n[e],a=e+1;let s="";return a&&a>0&&(s=n.slice(0,a)),"L"===t[5]?c.cb(i,s,e):(e&&e>0&&(s=n.slice(e)),c.cb(i,s,e))}let e="";throw h||(e=" More so, the whole options object, the fourth input argument, is missing!"),new Error(`string-match-left-right/${t}(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!${e}`)}for(let e=0,r=u.length;e<r;e++){l="function"==typeof u[e];const r=u[e];let i,s,h="",f=o;"matchRight"===t?f+=1:"matchLeft"===t&&(f-=1);const g=a(n,f,r,c,l,(e=>"L"===t[5]?e-1:e+1));if(g&&l&&"function"==typeof r&&"EOL"===r())return!(!r()||c.cb&&!c.cb(i,h,s))&&r();if(Number.isInteger(g)&&(s=t.startsWith("matchLeft")?g-1:g+1,h="L"===t[5]?n.slice(0,g):n.slice(s)),s<0&&(s=void 0),n[s]&&(i=n[s]),Number.isInteger(g)&&(!c.cb||c.cb(i,h,s)))return r}return!1}t.matchLeft=function(t,e,r,i){return o("matchLeft",t,e,r,i)},t.matchLeftIncl=function(t,e,r,i){return o("matchLeftIncl",t,e,r,i)},t.matchRight=function(t,e,r,i){return o("matchRight",t,e,r,i)},t.matchRightIncl=function(t,e,r,i){return o("matchRightIncl",t,e,r,i)},Object.defineProperty(t,"__esModule",{value:!0})}));
