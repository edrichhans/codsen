/**
 * object-merge-advanced
 * Recursive, deep merge of anything (objects, arrays, strings or nested thereof), which weighs contents by type hierarchy to ensure the maximum content is retained
 * Version: 10.11.19
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/object-merge-advanced
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).objectMergeAdvanced=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r="[object Arguments]",n="[object Function]",a="[object GeneratorFunction]",c="[object Map]",u="[object Set]",i=/\w*$/,f=/^\[object .+?Constructor\]$/,s=/^(?:0|[1-9]\d*)$/,y={};y[r]=y["[object Array]"]=y["[object ArrayBuffer]"]=y["[object DataView]"]=y["[object Boolean]"]=y["[object Date]"]=y["[object Float32Array]"]=y["[object Float64Array]"]=y["[object Int8Array]"]=y["[object Int16Array]"]=y["[object Int32Array]"]=y[c]=y["[object Number]"]=y["[object Object]"]=y["[object RegExp]"]=y[u]=y["[object String]"]=y["[object Symbol]"]=y["[object Uint8Array]"]=y["[object Uint8ClampedArray]"]=y["[object Uint16Array]"]=y["[object Uint32Array]"]=!0,y["[object Error]"]=y[n]=y["[object WeakMap]"]=!1;var p="object"==typeof o&&o&&o.Object===Object&&o,l="object"==typeof self&&self&&self.Object===Object&&self,h=p||l||Function("return this")(),b=e&&!e.nodeType&&e,g=b&&t&&!t.nodeType&&t,v=g&&g.exports===b;function _(t,e){return t.set(e[0],e[1]),t}function d(t,e){return t.add(e),t}function j(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function O(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function A(t,e){return function(r){return t(e(r))}}function m(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var k,E=Array.prototype,S=Function.prototype,M=Object.prototype,x=h["__core-js_shared__"],I=(k=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+k:"",$=S.toString,P=M.hasOwnProperty,F=M.toString,T=RegExp("^"+$.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=v?h.Buffer:void 0,B=h.Symbol,D=h.Uint8Array,K=A(Object.getPrototypeOf,Object),R=Object.create,V=M.propertyIsEnumerable,C=E.splice,N=Object.getOwnPropertySymbols,U=W?W.isBuffer:void 0,G=A(Object.keys,Object),H=gt(h,"DataView"),z=gt(h,"Map"),L=gt(h,"Promise"),q=gt(h,"Set"),J=gt(h,"WeakMap"),Q=gt(Object,"create"),X=Ot(H),Y=Ot(z),Z=Ot(L),tt=Ot(q),et=Ot(J),rt=B?B.prototype:void 0,nt=rt?rt.valueOf:void 0;function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){this.__data__=new at(t)}function it(t,e){var n=At(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&mt(t)}(t)&&P.call(t,"callee")&&(!V.call(t,"callee")||F.call(t)==r)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,a=!!o;for(var c in t)!e&&!P.call(t,c)||a&&("length"==c||dt(c,o))||n.push(c);return n}function ft(t,e,r){var n=t[e];P.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function yt(t,e,o,f,s,p,l){var h;if(f&&(h=p?f(t,s,p,l):f(t)),void 0!==h)return h;if(!St(t))return t;var b=At(t);if(b){if(h=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&P.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,h)}else{var g=_t(t),v=g==n||g==a;if(kt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==g||g==r||v&&!p){if(O(t))return p?t:{};if(h=function(t){return"function"!=typeof t.constructor||jt(t)?{}:(e=K(t),St(e)?R(e):{});var e}(v?{}:t),!e)return function(t,e){return ht(t,vt(t),e)}(t,function(t,e){return t&&ht(e,Mt(e),t)}(h,t))}else{if(!y[g])return p?t:{};h=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return lt(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?lt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?lt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case c:return function(t,e,r){return j(e?r(w(t),!0):w(t),_,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,i.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,r){return j(e?r(m(t),!0):m(t),d,new t.constructor)}(t,n,r);case"[object Symbol]":return a=t,nt?Object(nt.call(a)):{}}var a}(t,g,yt,e)}}l||(l=new ut);var A=l.get(t);if(A)return A;if(l.set(t,h),!b)var k=o?function(t){return function(t,e,r){var n=e(t);return At(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Mt,vt)}(t):Mt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(k||t,(function(r,n){k&&(r=t[n=r]),ft(h,n,yt(r,e,o,f,n,t,l))})),h}function pt(t){return!(!St(t)||(e=t,I&&I in e))&&(Et(t)||O(t)?T:f).test(Ot(t));var e}function lt(t){var e=new t.constructor(t.byteLength);return new D(e).set(new D(t)),e}function ht(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var c=e[o],u=n?n(r[c],t[c],c,r,t):void 0;ft(r,c,void 0===u?t[c]:u)}return r}function bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function gt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return pt(r)?r:void 0}ot.prototype.clear=function(){this.__data__=Q?Q(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(Q){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return P.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return Q?void 0!==e[t]:P.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=Q&&void 0===e?"__lodash_hash_undefined__":e,this},at.prototype.clear=function(){this.__data__=[]},at.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return!(r<0)&&(r==e.length-1?e.pop():C.call(e,r,1),!0)},at.prototype.get=function(t){var e=this.__data__,r=st(e,t);return r<0?void 0:e[r][1]},at.prototype.has=function(t){return st(this.__data__,t)>-1},at.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(z||at),string:new ot}},ct.prototype.delete=function(t){return bt(this,t).delete(t)},ct.prototype.get=function(t){return bt(this,t).get(t)},ct.prototype.has=function(t){return bt(this,t).has(t)},ct.prototype.set=function(t,e){return bt(this,t).set(t,e),this},ut.prototype.clear=function(){this.__data__=new at},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,e){var r=this.__data__;if(r instanceof at){var n=r.__data__;if(!z||n.length<199)return n.push([t,e]),this;r=this.__data__=new ct(n)}return r.set(t,e),this};var vt=N?A(N,Object):function(){return[]},_t=function(t){return F.call(t)};function dt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||s.test(t))&&t>-1&&t%1==0&&t<e}function jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||M)}function Ot(t){if(null!=t){try{return $.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(H&&"[object DataView]"!=_t(new H(new ArrayBuffer(1)))||z&&_t(new z)!=c||L&&"[object Promise]"!=_t(L.resolve())||q&&_t(new q)!=u||J&&"[object WeakMap]"!=_t(new J))&&(_t=function(t){var e=F.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?Ot(r):void 0;if(n)switch(n){case X:return"[object DataView]";case Y:return c;case Z:return"[object Promise]";case tt:return u;case et:return"[object WeakMap]"}return e});var At=Array.isArray;function mt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!Et(t)}var kt=U||function(){return!1};function Et(t){var e=St(t)?F.call(t):"";return e==n||e==a}function St(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Mt(t){return mt(t)?it(t):function(t){if(!jt(t))return G(t);var e=[];for(var r in Object(t))P.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return yt(t,!0,!0)}}));const c=new Map;function u(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(c.has(r))return c.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=(t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")})(t).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,c.set(r,o),o}var i=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>u(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};i.isMatch=(t,e,r)=>{const n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some(t=>o.every(e=>{const n=u(e,r),o=n.test(t);return n.negated?!o:o}))};const f=Array.isArray;function s(t,e,r){function n(t){return null!=t}function o(t){return"string"==typeof t}const a={arrayVsArrayAllMustBeFound:"any"},c={...a,...r};if(0===arguments.length)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_02] second argument missing!");if(!f(t)){if(!o(t))throw new Error(`array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_03] first argument must be an array! It was given as ${typeof t}`);t=[t]}if(!o(e)&&!f(e))throw new Error(`array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_04] second argument must be a string or array of strings! It was given as ${typeof e}`);if("any"!==c.arrayVsArrayAllMustBeFound&&"all"!==c.arrayVsArrayAllMustBeFound)throw new Error(`array-includes-with-glob/arrayIncludesWithGlob(): [THROW_ID_05] opts.arrayVsArrayAllMustBeFound was customised to an unrecognised value, ${c.arrayVsArrayAllMustBeFound}. It must be equal to either "any" or "all".`);if(0===t.length)return!1;const u=t.filter(t=>n(t));return 0!==u.length&&(o(e)?u.some(t=>i.isMatch(t,e,{caseSensitive:!0})):"any"===c.arrayVsArrayAllMustBeFound?e.some(t=>u.some(e=>i.isMatch(e,t,{caseSensitive:!0}))):e.every(t=>u.some(e=>i.isMatch(e,t,{caseSensitive:!0}))))}var y=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,h=/^0o[0-7]+$/i,b=/^(?:0|[1-9]\d*)$/,g=parseInt;function v(t){return t!=t}function _(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,(function(e){return t[e]}))}var d,j,O=Object.prototype,w=O.hasOwnProperty,A=O.toString,m=O.propertyIsEnumerable,k=(d=Object.keys,j=Object,function(t){return d(j(t))}),E=Math.max;function S(t,e){var r=I(t)||function(t){return function(t){return F(t)&&$(t)}(t)&&w.call(t,"callee")&&(!m.call(t,"callee")||"[object Arguments]"==A.call(t))}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!w.call(t,a)||o&&("length"==a||x(a,n))||r.push(a);return r}function M(t){if(r=(e=t)&&e.constructor,n="function"==typeof r&&r.prototype||O,e!==n)return k(t);var e,r,n,o=[];for(var a in Object(t))w.call(t,a)&&"constructor"!=a&&o.push(a);return o}function x(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||b.test(t))&&t>-1&&t%1==0&&t<e}var I=Array.isArray;function $(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!function(t){var e=P(t)?A.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)}function P(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function F(t){return!!t&&"object"==typeof t}var T=function(t,e,r,n){var o;t=$(t)?t:(o=t)?_(o,function(t){return $(t)?S(t):M(t)}(o)):[],r=r&&!n?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||F(t)&&"[object Symbol]"==A.call(t)}(t))return NaN;if(P(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=P(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(y,"");var r=l.test(t);return r||h.test(t)?g(t.slice(2),r?2:8):p.test(t)?NaN:+t}(t))===1/0||t===-1/0){return 17976931348623157e292*(t<0?-1:1)}return t==t?t:0}(t),r=e%1;return e==e?r?e-r:e:0}(r):0;var a=t.length;return r<0&&(r=E(a+r,0)),function(t){return"string"==typeof t||!I(t)&&F(t)&&"[object String]"==A.call(t)}(t)?r<=a&&t.indexOf(e,r)>-1:!!a&&function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,a=r+(n?1:-1);n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,v,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r)>-1},W=/^\[object .+?Constructor\]$/,B="object"==typeof o&&o&&o.Object===Object&&o,D="object"==typeof self&&self&&self.Object===Object&&self,K=B||D||Function("return this")();function R(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,C,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function V(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function C(t){return t!=t}function N(t,e){return t.has(e)}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var G,H=Array.prototype,z=Function.prototype,L=Object.prototype,q=K["__core-js_shared__"],J=(G=/[^.]+$/.exec(q&&q.keys&&q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Q=z.toString,X=L.hasOwnProperty,Y=L.toString,Z=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),tt=H.splice,et=pt(K,"Map"),rt=pt(K,"Set"),nt=pt(Object,"create");function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ct(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ut(t){var e=-1,r=t?t.length:0;for(this.__data__=new ct;++e<r;)this.add(t[e])}function it(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ft(t){return!(!lt(t)||function(t){return!!J&&J in t}(t))&&(function(t){var e=lt(t)?Y.call(t):"";return"[object Function]"==e||"[object GeneratorFunction]"==e}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Z:W).test(function(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}ot.prototype.clear=function(){this.__data__=nt?nt(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var e=this.__data__;if(nt){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return X.call(e,t)?e[t]:void 0},ot.prototype.has=function(t){var e=this.__data__;return nt?void 0!==e[t]:X.call(e,t)},ot.prototype.set=function(t,e){return this.__data__[t]=nt&&void 0===e?"__lodash_hash_undefined__":e,this},at.prototype.clear=function(){this.__data__=[]},at.prototype.delete=function(t){var e=this.__data__,r=it(e,t);return!(r<0)&&(r==e.length-1?e.pop():tt.call(e,r,1),!0)},at.prototype.get=function(t){var e=this.__data__,r=it(e,t);return r<0?void 0:e[r][1]},at.prototype.has=function(t){return it(this.__data__,t)>-1},at.prototype.set=function(t,e){var r=this.__data__,n=it(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(et||at),string:new ot}},ct.prototype.delete=function(t){return yt(this,t).delete(t)},ct.prototype.get=function(t){return yt(this,t).get(t)},ct.prototype.has=function(t){return yt(this,t).has(t)},ct.prototype.set=function(t,e){return yt(this,t).set(t,e),this},ut.prototype.add=ut.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},ut.prototype.has=function(t){return this.__data__.has(t)};var st=rt&&1/U(new rt([,-0]))[1]==1/0?function(t){return new rt(t)}:function(){};function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function pt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ft(r)?r:void 0}function lt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var ht=function(t){return t&&t.length?function(t,e,r){var n=-1,o=R,a=t.length,c=!0,u=[],i=u;if(r)c=!1,o=V;else if(a>=200){var f=e?null:st(t);if(f)return U(f);c=!1,o=N,i=new ut}else i=e?[]:u;t:for(;++n<a;){var s=t[n],y=e?e(s):s;if(s=r||0!==s?s:0,c&&y==y){for(var p=i.length;p--;)if(i[p]===y)continue t;e&&i.push(y),u.push(s)}else o(i,y,r)||(i!==u&&i.push(y),u.push(s))}return u}(t):[]};function bt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var gt=Function.prototype,vt=Object.prototype,_t=gt.toString,dt=vt.hasOwnProperty,jt=_t.call(Object),Ot=vt.toString,wt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var At=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=Ot.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=wt(t);if(null===e)return!0;var r=dt.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&_t.call(r)==jt};const mt=Array.isArray;function kt(t){return"string"==typeof t}function Et(t){return"number"==typeof t}function St(t){return 0!==arguments.length&&void 0!==t&&(mt(t)||kt(t)?t.length>0:At(t)?Object.keys(t).length>0:!!Et(t))}function Mt(t){return void 0===t?"undefined":null===t?"null":String(t)+" ("+typeof t+")"}
/*!
   * array-includes-all | ISC (c) Shinnosuke Watanabe
   * https://github.com/shinnn/array-includes-all
  */function xt(t,e,r){if(!Array.isArray(t))throw new TypeError("Expected the first argument of array-includes-all to be an array, but got "+Mt(t)+".");if(!Array.isArray(e))throw new TypeError("Expected the second argument of array-includes-all to be an array, but got "+Mt(e)+".");if(0===e.length)throw new RangeError("Expected the second argument of array-includes-all to include at least one value, but recieved an empty array.");return 0!==t.length&&e.every((function(e){return t.includes(e,r)}))}function It(t){return"string"==typeof t}function $t(t){return"number"==typeof t}function Pt(t){return"boolean"==typeof t}function Ft(t){return"function"==typeof t}function Tt(e){return e&&"object"===t(e)&&!Array.isArray(e)}var Wt=Array.isArray;function Bt(t){return!!t&&t.some((function(t){return"string"==typeof t}))}function Dt(t,e){return 0===Object.keys(t).length||0===Object.keys(e).length||xt(Object.keys(t),Object.keys(e))||xt(Object.keys(e),Object.keys(t))}function Kt(e){return Tt(e)?"object":Wt(e)?"array":t(e)}function Rt(t,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(!Tt(o))throw new TypeError("object-merge-advanced/mergeAdvanced(): [THROW_ID_02] Options object, the third argument, must be a plain object");var c,u={cb:null,mergeObjectsOnlyWhenKeysetMatches:!0,ignoreKeys:[],hardMergeKeys:[],hardArrayConcatKeys:[],mergeArraysContainingStringsToBeEmpty:!1,oneToManyArrayObjectMerge:!1,hardMergeEverything:!1,hardArrayConcat:!1,ignoreEverything:!1,concatInsteadOfMerging:!0,dedupeStringsInArrayValues:!1,mergeBoolsUsingOrNotAnd:!0,useNullAsExplicitFalse:!1},i=Object.assign(a(u),o);if(i.ignoreKeys=bt(i.ignoreKeys),i.hardMergeKeys=bt(i.hardMergeKeys),i.hardMergeKeys.includes("*")&&(i.hardMergeEverything=!0),i.ignoreKeys.includes("*")&&(i.ignoreEverything=!0),i.useNullAsExplicitFalse&&(null===e||null===r))return Ft(i.cb)?i.cb(e,r,null,{path:t.path,key:t.key,type:t.type}):null;var f,y=Wt(e)||Tt(e)?a(e):e,p=Wt(r)||Tt(r)?a(r):r;i.ignoreEverything?f=y:i.hardMergeEverything&&(f=p);var l=i.hardMergeEverything||i.ignoreEverything;if(!Wt(y)){if(Tt(y)){if(St(y)){if(Wt(p)){if(St(p)){var h=l?f:p;return Ft(i.cb)?i.cb(y,p,h,{path:c,key:t.key,type:t.type}):h}var b=l?f:y;return Ft(i.cb)?i.cb(y,p,b,{path:c,key:t.key,type:t.type}):b}if(Tt(p))return Object.keys(p).forEach((function(e){c=t.path&&t.path.length?"".concat(t.path,".").concat(e):"".concat(e),y.hasOwnProperty(e)?s(e,i.ignoreKeys)?y[e]=Rt({path:c,key:e,type:[Kt(y),Kt(p)]},y[e],p[e],n(n({},i),{},{ignoreEverything:!0})):s(e,i.hardMergeKeys)?y[e]=Rt({path:c,key:e,type:[Kt(y),Kt(p)]},y[e],p[e],n(n({},i),{},{hardMergeEverything:!0})):s(e,i.hardArrayConcatKeys)?y[e]=Rt({path:c,key:e,type:[Kt(y),Kt(p)]},y[e],p[e],n(n({},i),{},{hardArrayConcat:!0})):y[e]=Rt({path:c,key:e,type:[Kt(y),Kt(p)]},y[e],p[e],i):y[e]=p[e]})),y;var g=l?f:y;return Ft(i.cb)?i.cb(y,p,g,{path:t.path,key:t.key,type:t.type}):g}if(Wt(p)||Tt(p)||St(p)){var v=l?f:p;return Ft(i.cb)?i.cb(y,p,v,{path:t.path,key:t.key,type:t.type}):v}var _=l?f:y;return Ft(i.cb)?i.cb(y,p,_,{path:t.path,key:t.key,type:t.type}):_}if(It(y)){if(St(y)){if((Wt(p)||Tt(p)||It(p))&&St(p)){var d=l?f:p;return Ft(i.cb)?i.cb(y,p,d,{path:t.path,key:t.key,type:t.type}):d}var j=l?f:y;return Ft(i.cb)?i.cb(y,p,j,{path:t.path,key:t.key,type:t.type}):j}if(null!=p&&!Pt(p)){var O=l?f:p;return Ft(i.cb)?i.cb(y,p,O,{path:t.path,key:t.key,type:t.type}):O}var w=l?f:y;return Ft(i.cb)?i.cb(y,p,w,{path:t.path,key:t.key,type:t.type}):w}if($t(y)){if(St(p)){var A=l?f:p;return Ft(i.cb)?i.cb(y,p,A,{path:t.path,key:t.key,type:t.type}):A}var m=l?f:y;return Ft(i.cb)?i.cb(y,p,m,{path:t.path,key:t.key,type:t.type}):m}if(Pt(y)){if(Pt(p)){if(i.mergeBoolsUsingOrNotAnd){var k=l?f:y||p;return Ft(i.cb)?i.cb(y,p,k,{path:t.path,key:t.key,type:t.type}):k}var E=l?f:y&&p;return Ft(i.cb)?i.cb(y,p,E,{path:t.path,key:t.key,type:t.type}):E}if(null!=p){var S=l?f:p;return Ft(i.cb)?i.cb(y,p,S,{path:t.path,key:t.key,type:t.type}):S}var M=l?f:y;return Ft(i.cb)?i.cb(y,p,M,{path:t.path,key:t.key,type:t.type}):M}if(null===y){if(null!=p){var x=l?f:p;return Ft(i.cb)?i.cb(y,p,x,{path:t.path,key:t.key,type:t.type}):x}var I=l?f:y;return Ft(i.cb)?i.cb(y,p,I,{path:t.path,key:t.key,type:t.type}):I}var $=l?f:p;return Ft(i.cb)?i.cb(y,p,$,{path:t.path,key:t.key,type:t.type}):$}if(!St(y)){if(St(p)){var P=l?f:p;return Ft(i.cb)?i.cb(y,p,P,{path:c,key:t.key,type:t.type}):P}var F=l?f:y;return Ft(i.cb)?i.cb(y,p,F,{path:c,key:t.key,type:t.type}):F}if(!Wt(p)||!St(p)){var W=l?f:y;return Ft(i.cb)?i.cb(y,p,W,{path:c,key:t.key,type:t.type}):W}if(i.mergeArraysContainingStringsToBeEmpty&&(Bt(y)||Bt(p))){var B=l?f:[];return Ft(i.cb)?i.cb(y,p,B,{path:c,key:t.key,type:t.type}):B}if(i.hardArrayConcat){var D=l?f:y.concat(p);return Ft(i.cb)?i.cb(y,p,D,{path:c,key:t.key,type:t.type}):D}for(var K=[],R=0,V=Math.max(y.length,p.length);R<V;R++)c=t.path.length?"".concat(t.path,".").concat(R):"".concat(R),Tt(y[R])&&Tt(p[R])&&(i.mergeObjectsOnlyWhenKeysetMatches&&Dt(y[R],p[R])||!i.mergeObjectsOnlyWhenKeysetMatches)?K.push(Rt({path:c,key:t.key,type:[Kt(y),Kt(p)]},y[R],p[R],i)):!i.oneToManyArrayObjectMerge||1!==y.length&&1!==p.length?i.concatInsteadOfMerging?(R<y.length&&K.push(y[R]),R<p.length&&K.push(p[R])):(R<y.length&&K.push(y[R]),R<p.length&&!T(y,p[R])&&K.push(p[R])):K.push(1===y.length?Rt({path:c,key:t.key,type:[Kt(y),Kt(p)]},y[0],p[R],i):Rt({path:c,key:t.key,type:[Kt(y),Kt(p)]},y[R],p[0],i));i.dedupeStringsInArrayValues&&K.every((function(t){return It(t)}))&&(K=ht(K).sort()),y=a(K);var C=l?f:y;return Ft(i.cb)?i.cb(y,p,C,{path:t.path,key:t.key,type:t.type}):C}return function(t,e,r){if(0===arguments.length)throw new TypeError("object-merge-advanced/mergeAdvanced(): [THROW_ID_01] Both inputs are missing");return Rt({key:null,path:"",type:[Kt(t),Kt(e)]},t,e,r)}}));
