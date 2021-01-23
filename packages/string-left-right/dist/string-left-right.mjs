/**
 * string-left-right
 * Looks up the first non-whitespace character to the left/right of a given index
 * Version: 4.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-left-right/
 */

import e from"lodash.isplainobject";import t from"lodash.clonedeep";const n="4.0.0";function r(e){const t={value:e,hungry:!1,optional:!1};return(t.value.endsWith("?*")||t.value.endsWith("*?"))&&t.value.length>2?(t.value=t.value.slice(0,t.value.length-2),t.optional=!0,t.hungry=!0):t.value.endsWith("?")&&t.value.length>1?(t.value=t.value.slice(0,~-t.value.length),t.optional=!0):t.value.endsWith("*")&&t.value.length>1&&(t.value=t.value.slice(0,~-t.value.length),t.hungry=!0),t}function i(e){return"number"==typeof e}function l(e){return"string"==typeof e}function o({str:e,idx:t=0,stopAtNewlines:n=!1,stopAtRawNbsp:r=!1}){if("string"!=typeof e||!e.length)return null;if(t&&"number"==typeof t||(t=0),!e[t+1])return null;if(e[t+1]&&(e[t+1].trim()||n&&"\n\r".includes(e[t+1])||r&&" "===e[t+1]))return t+1;if(e[t+2]&&(e[t+2].trim()||n&&"\n\r".includes(e[t+2])||r&&" "===e[t+2]))return t+2;for(let i=t+1,l=e.length;i<l;i++)if(e[i].trim()||n&&"\n\r".includes(e[i])||r&&" "===e[i])return i;return null}function u(e,t=0){return o({str:e,idx:t,stopAtNewlines:!1,stopAtRawNbsp:!1})}function s(e,t){return o({str:e,idx:t,stopAtNewlines:!0,stopAtRawNbsp:!1})}function f(e,t){return o({str:e,idx:t,stopAtNewlines:!1,stopAtRawNbsp:!0})}function d({str:e,idx:t,stopAtNewlines:n,stopAtRawNbsp:r}){if("string"!=typeof e||!e.length)return null;if(t&&"number"==typeof t||(t=0),t<1)return null;if(e[~-t]&&(e[~-t].trim()||n&&"\n\r".includes(e[~-t])||r&&" "===e[~-t]))return~-t;if(e[t-2]&&(e[t-2].trim()||n&&"\n\r".includes(e[t-2])||r&&" "===e[t-2]))return t-2;for(let i=t;i--;)if(e[i]&&(e[i].trim()||n&&"\n\r".includes(e[i])||r&&" "===e[i]))return i;return null}function h(e,t=0){return d({str:e,idx:t,stopAtNewlines:!1,stopAtRawNbsp:!1})}function c(e,t){return d({str:e,idx:t,stopAtNewlines:!0,stopAtRawNbsp:!1})}function g(e,t){return d({str:e,idx:t,stopAtNewlines:!1,stopAtRawNbsp:!0})}function m(e,t,n,i,o){if("string"!=typeof t||!t.length)return null;if("number"!=typeof n&&(n=0),"right"===e&&!t[n+1]||"left"===e&&!t[~-n])return null;let s=n;const f=[];let d,c,g,m=0;for(;m<o.length;){if(!l(o[m])||!o[m].length){m+=1;continue}const{value:n,optional:p,hungry:a}=r(o[m]),w="right"===e?u(t,s):h(t,s);if(!(i.i&&t[w].toLowerCase()===n.toLowerCase()||!i.i&&t[w]===n)){if(p){m+=1;continue}if(g){m+=1,g=void 0;continue}return null}{const r="right"===e?u(t,w):h(t,w);a&&(i.i&&t[r].toLowerCase()===n.toLowerCase()||!i.i&&t[r]===n)?g=!0:m+=1,"number"==typeof w&&"right"===e&&w>s+1?f.push([s+1,w]):"left"===e&&"number"==typeof w&&w<~-s&&f.unshift([w+1,s]),s=w,"right"===e?(void 0===d&&(d=w),c=w):(void 0===c&&(c=w),d=w)}}return void 0===d||void 0===c?null:{gaps:f,leftmostChar:d,rightmostChar:c}}const p={i:!1};function a(t,n,...r){if(!r||!r.length)throw new Error("string-left-right/leftSeq(): only two input arguments were passed! Did you intend to use left() method instead?");let i;return i=e(r[0])?{...p,...r.shift()}:p,m("left",t,n,i,Array.from(r).reverse())}function w(t,n,...r){if(!r||!r.length)throw new Error("string-left-right/rightSeq(): only two input arguments were passed! Did you intend to use right() method instead?");let i;return i=e(r[0])?{...p,...r.shift()}:p,m("right",t,n,i,r)}function v(e,t,n,r,i=[]){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),"right"===e&&!t[n+1]||"left"===e&&0==+n)return null;let l=null,o=null;do{l="right"===e?w(t,"number"==typeof o?o:n,...i):a(t,"number"==typeof o?o:n,...i),null!==l&&(o="right"===e?l.rightmostChar:l.leftmostChar)}while(l);if(null!=o&&"right"===e&&(o+=1),null===o)return null;if("right"===e){if(t[o]&&t[o].trim())return o;const e=u(t,o);if(r&&0!==r.mode){if(1===r.mode)return o;if(2===r.mode){const e=t.slice(o);if(e.trim()||e.includes("\n")||e.includes("\r"))for(let e=o,n=t.length;e<n;e++)if(t[e].trim()||"\n\r".includes(t[e]))return e;return t.length}}else{if(e===o+1)return o;if(!(t.slice(o,e||t.length).trim()||t.slice(o,e||t.length).includes("\n")||t.slice(o,e||t.length).includes("\r")))return e?~-e:t.length;for(let e=o,n=t.length;e<n;e++)if("\n\r".includes(t[e]))return e}return e||t.length}if(t[o]&&t[~-o]&&t[~-o].trim())return o;const s=h(t,o);if(!r||0===r.mode){if(s===o-2)return o;if(t.slice(0,o).trim()||t.slice(0,o).includes("\n")||t.slice(0,o).includes("\r"))for(let e=o;e--;)if("\n\r".includes(t[e])||t[e].trim())return e+1+(t[e].trim()?1:0);return 0}if(1===r.mode)return o;if(2===r.mode){const e=t.slice(0,o);if(e.trim()||e.includes("\n")||e.includes("\r"))for(let e=o;e--;)if(t[e].trim()||"\n\r".includes(t[e]))return e+1;return 0}return null!==s?s+1:0}function y(n,r,...o){if(!o.length||1===o.length&&e(o[0]))return null;const u={mode:0};if(e(o[0])){const e={...u,...t(o[0])};if(e.mode){if(l(e.mode)&&"0123".includes(e.mode))e.mode=Number.parseInt(e.mode,10);else if(!i(e.mode))throw new Error(`string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${e.mode} (type ${typeof e.mode})`)}else e.mode=0;return v("left",n,r,e,t(o).slice(1))}return l(o[0])?v("left",n,r,u,t(o)):v("left",n,r,u,t(o).slice(1))}function b(n,r,...o){if(!o.length||1===o.length&&e(o[0]))return null;const u={mode:0};if(e(o[0])){const e={...u,...t(o[0])};if(e.mode){if(l(e.mode)&&"0123".includes(e.mode))e.mode=Number.parseInt(e.mode,10);else if(!i(e.mode))throw new Error(`string-left-right/chompRight(): [THROW_ID_02] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${e.mode} (type ${typeof e.mode})`)}else e.mode=0;return v("right",n,r,e,t(o).slice(1))}return l(o[0])?v("right",n,r,u,t(o)):v("right",n,r,u,t(o).slice(1))}export{y as chompLeft,b as chompRight,h as left,a as leftSeq,c as leftStopAtNewLines,g as leftStopAtRawNbsp,u as right,w as rightSeq,s as rightStopAtNewLines,f as rightStopAtRawNbsp,n as version};
