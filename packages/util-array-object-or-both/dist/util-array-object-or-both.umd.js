/**
 * util-array-object-or-both
 * Validate and normalise user choice: array, object or both?
 * Version: 3.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/util-array-object-or-both/
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).utilArrayObjectOrBoth={})}(this,(function(r){"use strict";function e(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(r){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?t(Object(o),!0).forEach((function(t){e(r,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(o,e))}))}return r}var o=1/0,u=9007199254740991,a=17976931348623157e292,i=NaN,c="[object Arguments]",f="[object Function]",l="[object GeneratorFunction]",s="[object String]",b="[object Symbol]",p=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=/^(?:0|[1-9]\d*)$/,j=parseInt;function m(r){return r!=r}function O(r,e){return function(r,e){for(var t=-1,n=r?r.length:0,o=Array(n);++t<n;)o[t]=e(r[t],t,r);return o}(e,(function(e){return r[e]}))}var d,w,P=Object.prototype,A=P.hasOwnProperty,N=P.toString,x=P.propertyIsEnumerable,S=(d=Object.keys,w=Object,function(r){return d(w(r))}),V=Math.max;function $(r,e){var t=T(r)||function(r){return function(r){return I(r)&&k(r)}(r)&&A.call(r,"callee")&&(!x.call(r,"callee")||N.call(r)==c)}(r)?function(r,e){for(var t=-1,n=Array(r);++t<r;)n[t]=e(t);return n}(r.length,String):[],n=t.length,o=!!n;for(var u in r)!e&&!A.call(r,u)||o&&("length"==u||E(u,n))||t.push(u);return t}function D(r){if((e=r)!==("function"==typeof(t=e&&e.constructor)&&t.prototype||P))return S(r);var e,t,n=[];for(var o in Object(r))A.call(r,o)&&"constructor"!=o&&n.push(o);return n}function E(r,e){return!!(e=null==e?u:e)&&("number"==typeof r||h.test(r))&&r>-1&&r%1==0&&r<e}var T=Array.isArray;function k(r){return null!=r&&function(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=u}(r.length)&&!function(r){var e=C(r)?N.call(r):"";return e==f||e==l}(r)}function C(r){var e=typeof r;return!!r&&("object"==e||"function"==e)}function I(r){return!!r&&"object"==typeof r}var L=function(r,e,t,n){var u;r=k(r)?r:(u=r)?O(u,function(r){return k(r)?$(r):D(r)}(u)):[],t=t&&!n?function(r){var e=function(r){if(!r)return 0===r?r:0;if((r=function(r){if("number"==typeof r)return r;if(function(r){return"symbol"==typeof r||I(r)&&N.call(r)==b}(r))return i;if(C(r)){var e="function"==typeof r.valueOf?r.valueOf():r;r=C(e)?e+"":e}if("string"!=typeof r)return 0===r?r:+r;r=r.replace(p,"");var t=g.test(r);return t||v.test(r)?j(r.slice(2),t?2:8):y.test(r)?i:+r}(r))===o||r===-1/0){return(r<0?-1:1)*a}return r==r?r:0}(r),t=e%1;return e==e?t?e-t:e:0}(t):0;var c=r.length;return t<0&&(t=V(c+t,0)),function(r){return"string"==typeof r||!T(r)&&I(r)&&N.call(r)==s}(r)?t<=c&&r.indexOf(e,t)>-1:!!c&&function(r,e,t){if(e!=e)return function(r,e,t,n){for(var o=r.length,u=t+(n?1:-1);n?u--:++u<o;)if(e(r[u],u,r))return u;return-1}(r,m,t);for(var n=t-1,o=r.length;++n<o;)if(r[n]===e)return n;return-1}(r,e,t)>-1};r.arrObjOrBoth=function(r,e){var t=n(n({},{msg:"",optsVarName:"given variable"}),e);if(t&&t.msg&&t.msg.length>0&&(t.msg=t.msg.trim()+" "),"given variable"!==t.optsVarName&&(t.optsVarName='variable "'+t.optsVarName+'"'),L(["object","objects","obj","ob","o"],r.toLowerCase().trim()))return"object";if(L(["array","arrays","arr","aray","arr","a"],r.toLowerCase().trim()))return"array";if(L(["any","all","everything","both","either","each","whatever","whatevs","e"],r.toLowerCase().trim()))return"any";throw new TypeError(t.msg+"The "+t.optsVarName+" was customised to an unrecognised value: "+r+". Please check it against the API documentation.")},Object.defineProperty(r,"__esModule",{value:!0})}));
