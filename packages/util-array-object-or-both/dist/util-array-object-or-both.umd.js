/**
 * @name util-array-object-or-both
 * @fileoverview Validate and normalise user choice: array, object or both?
 * @version 3.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/util-array-object-or-both/}
 */

!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((r="undefined"!=typeof globalThis?globalThis:r||self).utilArrayObjectOrBoth={})}(this,(function(r){"use strict";var t=1/0,e=9007199254740991,n=17976931348623157e292,o=NaN,u="[object Arguments]",a="[object Function]",i="[object GeneratorFunction]",f="[object String]",c="[object Symbol]",l=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,y=/^0o[0-7]+$/i,b=/^(?:0|[1-9]\d*)$/,v=parseInt;function g(r){return r!=r}function h(r,t){return function(r,t){for(var e=-1,n=r?r.length:0,o=Array(n);++e<n;)o[e]=t(r[e],e,r);return o}(t,(function(t){return r[t]}))}var m,j,d=Object.prototype,O=d.hasOwnProperty,$=d.toString,w=d.propertyIsEnumerable,A=(m=Object.keys,j=Object,function(r){return m(j(r))}),N=Math.max;function x(r,t){var e=S(r)||function(r){return function(r){return I(r)&&T(r)}(r)&&O.call(r,"callee")&&(!w.call(r,"callee")||$.call(r)==u)}(r)?function(r,t){for(var e=-1,n=Array(r);++e<r;)n[e]=t(e);return n}(r.length,String):[],n=e.length,o=!!n;for(var a in r)!t&&!O.call(r,a)||o&&("length"==a||P(a,n))||e.push(a);return e}function V(r){if((t=r)!==("function"==typeof(e=t&&t.constructor)&&e.prototype||d))return A(r);var t,e,n=[];for(var o in Object(r))O.call(r,o)&&"constructor"!=o&&n.push(o);return n}function P(r,t){return!!(t=null==t?e:t)&&("number"==typeof r||b.test(r))&&r>-1&&r%1==0&&r<t}var S=Array.isArray;function T(r){return null!=r&&function(r){return"number"==typeof r&&r>-1&&r%1==0&&r<=e}(r.length)&&!function(r){var t=C(r)?$.call(r):"";return t==a||t==i}(r)}function C(r){var t=typeof r;return!!r&&("object"==t||"function"==t)}function I(r){return!!r&&"object"==typeof r}var L=function(r,e,u,a){var i;r=T(r)?r:(i=r)?h(i,function(r){return T(r)?x(r):V(r)}(i)):[],u=u&&!a?function(r){var e=function(r){if(!r)return 0===r?r:0;if((r=function(r){if("number"==typeof r)return r;if(function(r){return"symbol"==typeof r||I(r)&&$.call(r)==c}(r))return o;if(C(r)){var t="function"==typeof r.valueOf?r.valueOf():r;r=C(t)?t+"":t}if("string"!=typeof r)return 0===r?r:+r;r=r.replace(l,"");var e=p.test(r);return e||y.test(r)?v(r.slice(2),e?2:8):s.test(r)?o:+r}(r))===t||r===-1/0){return(r<0?-1:1)*n}return r==r?r:0}(r),u=e%1;return e==e?u?e-u:e:0}(u):0;var b=r.length;return u<0&&(u=N(b+u,0)),function(r){return"string"==typeof r||!S(r)&&I(r)&&$.call(r)==f}(r)?u<=b&&r.indexOf(e,u)>-1:!!b&&function(r,t,e){if(t!=t)return function(r,t,e,n){for(var o=r.length,u=e+(n?1:-1);n?u--:++u<o;)if(t(r[u],u,r))return u;return-1}(r,g,e);for(var n=e-1,o=r.length;++n<o;)if(r[n]===t)return n;return-1}(r,e,u)>-1};r.arrObjOrBoth=function(r,t){const e={msg:"",optsVarName:"given variable",...t};if(e&&e.msg&&e.msg.length>0&&(e.msg=`${e.msg.trim()} `),"given variable"!==e.optsVarName&&(e.optsVarName=`variable "${e.optsVarName}"`),L(["object","objects","obj","ob","o"],r.toLowerCase().trim()))return"object";if(L(["array","arrays","arr","aray","arr","a"],r.toLowerCase().trim()))return"array";if(L(["any","all","everything","both","either","each","whatever","whatevs","e"],r.toLowerCase().trim()))return"any";throw new TypeError(`${e.msg}The ${e.optsVarName} was customised to an unrecognised value: ${r}. Please check it against the API documentation.`)},Object.defineProperty(r,"__esModule",{value:!0})}));
