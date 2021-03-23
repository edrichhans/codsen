/**
 * string-match-left-right
 * Match substrings on the left or right of a given index, ignoring whitespace
 * Version: 7.0.3
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-match-left-right/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).stringMatchLeftRight={})}(this,(function(t){"use strict";function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,i)}return e}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))}))}return t}function n(t){return t&&"object"==typeof t&&!Array.isArray(t)}function a(t){return"string"==typeof t}var o={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},h=function(t){return t+1};function s(t,r,e,n,a,s){void 0===a&&(a=!1),void 0===s&&(s=h);var f="function"==typeof e?e():e;if(+r<0&&a&&"EOL"===f)return f;var c=i(i({},o),n);if(r>=t.length&&!a)return!1;var u=a?1:e.length,g=0,l=!1,m=!1,y=!1,p=c.maxMismatches,M=r,b=!1,d=!1,v=!1;function O(){return 1===g&&p<c.maxMismatches-1}for(;t[M];){var w=s(M);if(c.trimBeforeMatching&&""===t[M].trim()){if(!t[w]&&a&&"EOL"===e)return!0;M=s(M)}else if(c&&!c.i&&c.trimCharsBeforeMatching&&c.trimCharsBeforeMatching.includes(t[M])||c&&c.i&&c.trimCharsBeforeMatching&&c.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[M].toLowerCase())){if(a&&"EOL"===e&&!t[w])return!0;M=s(M)}else{var B=w>M?e[e.length-u]:e[u-1];if(!c.i&&t[M]===B||c.i&&t[M].toLowerCase()===B.toLowerCase()){if(b||(b=!0),y||(y=!0),u===e.length){if(d=!0,p!==c.maxMismatches)return!1}else 1===u&&(v=!0);if(u-=1,g++,O())return!1;if(!u)return(g!==e.length||p===c.maxMismatches||!l)&&M}else{if(l||g||(l=!0),!(c.maxMismatches&&p&&M))return!(0!==M||1!==u||c.lastMustMatch||!y)&&0;p-=1;for(var C=0;C<=p;C++){var L=w>M?e[e.length-u+1+C]:e[u-2-C],j=t[s(M)];if(L&&(!c.i&&t[M]===L||c.i&&t[M].toLowerCase()===L.toLowerCase())&&(!c.firstMustMatch||u!==e.length)){if(g++,O())return!1;u-=2,b=!0;break}if(j&&L&&(!c.i&&j===L||c.i&&j.toLowerCase()===L.toLowerCase())&&(!c.firstMustMatch||u!==e.length)){if(!g&&!c.hungry)return!1;u-=1,b=!0;break}if(void 0===L&&p>=0&&b&&(!c.firstMustMatch||d)&&(!c.lastMustMatch||v))return M}b||(m=M)}if(!1!==m&&m!==M&&(m=!1),u<1)return M;M=s(M)}}return u>0?!(!a||"EOL"!==f)||!!(c&&c.maxMismatches>=u&&y)&&(m||0):void 0}function f(t,r,e,h,f){if(n(f)&&Object.prototype.hasOwnProperty.call(f,"trimBeforeMatching")&&"boolean"!=typeof f.trimBeforeMatching)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!"+(Array.isArray(f.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var c,u,g,l=i(i({},o),f);if("string"==typeof l.trimCharsBeforeMatching&&(l.trimCharsBeforeMatching="string"==typeof(c=l.trimCharsBeforeMatching)?c.length?[c]:[]:c),l.trimCharsBeforeMatching=l.trimCharsBeforeMatching.map((function(t){return a(t)?t:String(t)})),!a(r))return!1;if(!r.length)return!1;if(!Number.isInteger(e)||e<0)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: "+typeof e+", equal to:\n"+JSON.stringify(e,null,4));if(a(h))u=[h];else if(Array.isArray(h))u=h;else if(h){if("function"!=typeof h)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's "+typeof h+", equal to:\n"+JSON.stringify(h,null,4));(u=[]).push(h)}else u=h;if(f&&!n(f))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \""+typeof f+'", and equal to:\n'+JSON.stringify(f,null,4));var m=0,y="";if(l&&l.trimCharsBeforeMatching&&l.trimCharsBeforeMatching.some((function(t,r){return t.length>1&&(m=r,y=t,!0)})))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index "+m+" is longer than 1 character, "+y.length+" (equals to "+y+"). Please split it into separate characters and put into array as separate elements.");if(!u||!Array.isArray(u)||Array.isArray(u)&&!u.length||Array.isArray(u)&&1===u.length&&a(u[0])&&!u[0].trim()){if("function"==typeof l.cb){var p,M=e;if("matchLeftIncl"!==t&&"matchRight"!==t||(M+=1),"L"===t[5])for(var b=M;b--;){var d=r[b];if((!l.trimBeforeMatching||l.trimBeforeMatching&&void 0!==d&&d.trim())&&(!l.trimCharsBeforeMatching||!l.trimCharsBeforeMatching.length||void 0!==d&&!l.trimCharsBeforeMatching.includes(d))){p=b;break}}else if(t.startsWith("matchRight"))for(var v=M;v<r.length;v++){var O=r[v];if((!l.trimBeforeMatching||l.trimBeforeMatching&&O.trim())&&(!l.trimCharsBeforeMatching||!l.trimCharsBeforeMatching.length||!l.trimCharsBeforeMatching.includes(O))){p=v;break}}if(void 0===p)return!1;var w=r[p],B=p+1,C="";return B&&B>0&&(C=r.slice(0,B)),"L"===t[5]?l.cb(w,C,p):(p&&p>0&&(C=r.slice(p)),l.cb(w,C,p))}var L="";throw f||(L=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/"+t+'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!'+L)}for(var j=0,I=u.length;j<I;j++){var R=u[j],_=void 0,E=void 0,A="",P=e;"matchRight"===t?P+=1:"matchLeft"===t&&(P-=1);var T=s(r,P,R,l,g="function"==typeof u[j],(function(r){return"L"===t[5]?r-1:r+1}));if(T&&g&&"function"==typeof R&&"EOL"===R())return!(!R()||l.cb&&!l.cb(_,A,E))&&R();if(Number.isInteger(T)&&(E=t.startsWith("matchLeft")?T-1:T+1,A="L"===t[5]?r.slice(0,T):r.slice(E)),E<0&&(E=void 0),r[E]&&(_=r[E]),Number.isInteger(T)&&(!l.cb||l.cb(_,A,E)))return R}return!1}t.matchLeft=function(t,r,e,i){return f("matchLeft",t,r,e,i)},t.matchLeftIncl=function(t,r,e,i){return f("matchLeftIncl",t,r,e,i)},t.matchRight=function(t,r,e,i){return f("matchRight",t,r,e,i)},t.matchRightIncl=function(t,r,e,i){return f("matchRightIncl",t,r,e,i)},Object.defineProperty(t,"__esModule",{value:!0})}));
