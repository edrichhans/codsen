/**
 * edit-package-json
 * Edit package.json without parsing, as string, keep indentation etc intact
 * Version: 0.1.29
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/edit-package-json
 */

!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((t=t||self).editPackageJson={})}(this,(function(t){"use strict";function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var e,r,o=Function.prototype,i=Object.prototype,c=o.toString,u=i.hasOwnProperty,a=c.call(Object),l=i.toString,s=(e=Object.getPrototypeOf,r=Object,function(t){return e(r(t))});var f=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=l.call(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}(t))return!1;var n=s(t);if(null===n)return!0;var e=u.call(n,"constructor")&&n.constructor;return"function"==typeof e&&e instanceof e&&c.call(e)==a},g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var h=function(t,n,e){return t(e={path:n,exports:{},require:function(t,n){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==n&&e.path)}},e.exports),e.exports}((function(t,n){var e="[object Arguments]",r="[object Function]",o="[object GeneratorFunction]",i="[object Map]",c="[object Set]",u=/\w*$/,a=/^\[object .+?Constructor\]$/,l=/^(?:0|[1-9]\d*)$/,s={};s[e]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object DataView]"]=s["[object Boolean]"]=s["[object Date]"]=s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s[i]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s[c]=s["[object String]"]=s["[object Symbol]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Error]"]=s[r]=s["[object WeakMap]"]=!1;var f="object"==typeof g&&g&&g.Object===Object&&g,h="object"==typeof self&&self&&self.Object===Object&&self,p=f||h||Function("return this")(),y=n&&!n.nodeType&&n,m=y&&t&&!t.nodeType&&t,d=m&&m.exports===y;function b(t,n){return t.set(n[0],n[1]),t}function _(t,n){return t.add(n),t}function v(t,n,e,r){var o=-1,i=t?t.length:0;for(r&&i&&(e=t[++o]);++o<i;)e=n(e,t[o],o,t);return e}function w(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(t){}return n}function j(t){var n=-1,e=Array(t.size);return t.forEach((function(t,r){e[++n]=[r,t]})),e}function O(t,n){return function(e){return t(n(e))}}function S(t){var n=-1,e=Array(t.size);return t.forEach((function(t){e[++n]=t})),e}var T,I=Array.prototype,A=Function.prototype,N=Object.prototype,$=p["__core-js_shared__"],J=(T=/[^.]+$/.exec($&&$.keys&&$.keys.IE_PROTO||""))?"Symbol(src)_1."+T:"",E=A.toString,P=N.hasOwnProperty,F=N.toString,R=RegExp("^"+E.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),W=d?p.Buffer:void 0,x=p.Symbol,H=p.Uint8Array,D=O(Object.getPrototypeOf,Object),U=Object.create,k=N.propertyIsEnumerable,M=I.splice,C=Object.getOwnPropertySymbols,q=W?W.isBuffer:void 0,L=O(Object.keys,Object),B=mt(p,"DataView"),V=mt(p,"Map"),z=mt(p,"Promise"),G=mt(p,"Set"),Q=mt(p,"WeakMap"),K=mt(Object,"create"),X=wt(B),Y=wt(V),Z=wt(z),tt=wt(G),nt=wt(Q),et=x?x.prototype:void 0,rt=et?et.valueOf:void 0;function ot(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function it(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function ct(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function ut(t){this.__data__=new it(t)}function at(t,n){var r=Ot(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&St(t)}(t)&&P.call(t,"callee")&&(!k.call(t,"callee")||F.call(t)==e)}(t)?function(t,n){for(var e=-1,r=Array(t);++e<t;)r[e]=n(e);return r}(t.length,String):[],o=r.length,i=!!o;for(var c in t)!n&&!P.call(t,c)||i&&("length"==c||_t(c,o))||r.push(c);return r}function lt(t,n,e){var r=t[n];P.call(t,n)&&jt(r,e)&&(void 0!==e||n in t)||(t[n]=e)}function st(t,n){for(var e=t.length;e--;)if(jt(t[e][0],n))return e;return-1}function ft(t,n,a,l,f,g,h){var p;if(l&&(p=g?l(t,f,g,h):l(t)),void 0!==p)return p;if(!At(t))return t;var y=Ot(t);if(y){if(p=function(t){var n=t.length,e=t.constructor(n);n&&"string"==typeof t[0]&&P.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!n)return function(t,n){var e=-1,r=t.length;n||(n=Array(r));for(;++e<r;)n[e]=t[e];return n}(t,p)}else{var m=bt(t),d=m==r||m==o;if(Tt(t))return function(t,n){if(n)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,n);if("[object Object]"==m||m==e||d&&!g){if(w(t))return g?t:{};if(p=function(t){return"function"!=typeof t.constructor||vt(t)?{}:(n=D(t),At(n)?U(n):{});var n}(d?{}:t),!n)return function(t,n){return pt(t,dt(t),n)}(t,function(t,n){return t&&pt(n,Nt(n),t)}(p,t))}else{if(!s[m])return g?t:{};p=function(t,n,e,r){var o=t.constructor;switch(n){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,n){var e=n?ht(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,n){var e=n?ht(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,r);case i:return function(t,n,e){return v(n?e(j(t),!0):j(t),b,new t.constructor)}(t,r,e);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var n=new t.constructor(t.source,u.exec(t));return n.lastIndex=t.lastIndex,n}(t);case c:return function(t,n,e){return v(n?e(S(t),!0):S(t),_,new t.constructor)}(t,r,e);case"[object Symbol]":return a=t,rt?Object(rt.call(a)):{}}var a}(t,m,ft,n)}}h||(h=new ut);var O=h.get(t);if(O)return O;if(h.set(t,p),!y)var T=a?function(t){return function(t,n,e){var r=n(t);return Ot(t)?r:function(t,n){for(var e=-1,r=n.length,o=t.length;++e<r;)t[o+e]=n[e];return t}(r,e(t))}(t,Nt,dt)}(t):Nt(t);return function(t,n){for(var e=-1,r=t?t.length:0;++e<r&&!1!==n(t[e],e,t););}(T||t,(function(e,r){T&&(e=t[r=e]),lt(p,r,ft(e,n,a,l,r,t,h))})),p}function gt(t){return!(!At(t)||function(t){return!!J&&J in t}(t))&&(It(t)||w(t)?R:a).test(wt(t))}function ht(t){var n=new t.constructor(t.byteLength);return new H(n).set(new H(t)),n}function pt(t,n,e,r){e||(e={});for(var o=-1,i=n.length;++o<i;){var c=n[o],u=r?r(e[c],t[c],c,e,t):void 0;lt(e,c,void 0===u?t[c]:u)}return e}function yt(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function mt(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return gt(e)?e:void 0}ot.prototype.clear=function(){this.__data__=K?K(null):{}},ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},ot.prototype.get=function(t){var n=this.__data__;if(K){var e=n[t];return"__lodash_hash_undefined__"===e?void 0:e}return P.call(n,t)?n[t]:void 0},ot.prototype.has=function(t){var n=this.__data__;return K?void 0!==n[t]:P.call(n,t)},ot.prototype.set=function(t,n){return this.__data__[t]=K&&void 0===n?"__lodash_hash_undefined__":n,this},it.prototype.clear=function(){this.__data__=[]},it.prototype.delete=function(t){var n=this.__data__,e=st(n,t);return!(e<0)&&(e==n.length-1?n.pop():M.call(n,e,1),!0)},it.prototype.get=function(t){var n=this.__data__,e=st(n,t);return e<0?void 0:n[e][1]},it.prototype.has=function(t){return st(this.__data__,t)>-1},it.prototype.set=function(t,n){var e=this.__data__,r=st(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},ct.prototype.clear=function(){this.__data__={hash:new ot,map:new(V||it),string:new ot}},ct.prototype.delete=function(t){return yt(this,t).delete(t)},ct.prototype.get=function(t){return yt(this,t).get(t)},ct.prototype.has=function(t){return yt(this,t).has(t)},ct.prototype.set=function(t,n){return yt(this,t).set(t,n),this},ut.prototype.clear=function(){this.__data__=new it},ut.prototype.delete=function(t){return this.__data__.delete(t)},ut.prototype.get=function(t){return this.__data__.get(t)},ut.prototype.has=function(t){return this.__data__.has(t)},ut.prototype.set=function(t,n){var e=this.__data__;if(e instanceof it){var r=e.__data__;if(!V||r.length<199)return r.push([t,n]),this;e=this.__data__=new ct(r)}return e.set(t,n),this};var dt=C?O(C,Object):function(){return[]},bt=function(t){return F.call(t)};function _t(t,n){return!!(n=null==n?9007199254740991:n)&&("number"==typeof t||l.test(t))&&t>-1&&t%1==0&&t<n}function vt(t){var n=t&&t.constructor;return t===("function"==typeof n&&n.prototype||N)}function wt(t){if(null!=t){try{return E.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function jt(t,n){return t===n||t!=t&&n!=n}(B&&"[object DataView]"!=bt(new B(new ArrayBuffer(1)))||V&&bt(new V)!=i||z&&"[object Promise]"!=bt(z.resolve())||G&&bt(new G)!=c||Q&&"[object WeakMap]"!=bt(new Q))&&(bt=function(t){var n=F.call(t),e="[object Object]"==n?t.constructor:void 0,r=e?wt(e):void 0;if(r)switch(r){case X:return"[object DataView]";case Y:return i;case Z:return"[object Promise]";case tt:return c;case nt:return"[object WeakMap]"}return n});var Ot=Array.isArray;function St(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}(t.length)&&!It(t)}var Tt=q||function(){return!1};function It(t){var n=At(t)?F.call(t):"";return n==r||n==o}function At(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function Nt(t){return St(t)?at(t):function(t){if(!vt(t))return L(t);var n=[];for(var e in Object(t))P.call(t,e)&&"constructor"!=e&&n.push(e);return n}(t)}t.exports=function(t){return ft(t,!0,!0)}}));function p(t){const n={value:t,hungry:!1,optional:!1};return(n.value.endsWith("?*")||n.value.endsWith("*?"))&&n.value.length>2?(n.value=n.value.slice(0,n.value.length-2),n.optional=!0,n.hungry=!0):n.value.endsWith("?")&&n.value.length>1?(n.value=n.value.slice(0,~-n.value.length),n.optional=!0):n.value.endsWith("*")&&n.value.length>1&&(n.value=n.value.slice(0,~-n.value.length),n.hungry=!0),n}function y(t){return"number"==typeof t}function m(t){return"string"==typeof t}function d(t,n){return function(t,n,e){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),!t[n+1])return null;if(t[n+1]&&(!e&&t[n+1].trim()||e&&(t[n+1].trim()||"\n\r".includes(t[n+1]))))return n+1;if(t[n+2]&&(!e&&t[n+2].trim()||e&&(t[n+2].trim()||"\n\r".includes(t[n+2]))))return n+2;for(let r=n+1,o=t.length;r<o;r++)if(t[r]&&(!e&&t[r].trim()||e&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,n,!1)}function b(t,n){return function(t,n,e){if("string"!=typeof t||!t.length)return null;if(n&&"number"==typeof n||(n=0),n<1)return null;if(t[~-n]&&(!e&&t[~-n].trim()||e&&(t[~-n].trim()||"\n\r".includes(t[~-n]))))return~-n;if(t[n-2]&&(!e&&t[n-2].trim()||e&&(t[n-2].trim()||"\n\r".includes(t[n-2]))))return n-2;for(let r=n;r--;)if(t[r]&&(!e&&t[r].trim()||e&&(t[r].trim()||"\n\r".includes(t[r]))))return r;return null}(t,n,!1)}function _(t,n,e,r,o){if("string"!=typeof n||!n.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!n[e+1]||"left"===t&&!n[~-e])return null;let i=e;const c=[];let u,a,l,s=0;for(;s<o.length;){if(!m(o[s])||!o[s].length){s+=1;continue}const{value:e,optional:f,hungry:g}=p(o[s]),h="right"===t?d(n,i):b(n,i);if(!(r.i&&n[h].toLowerCase()===e.toLowerCase()||!r.i&&n[h]===e)){if(f){s+=1;continue}if(l){s+=1,l=void 0;continue}return null}{const o="right"===t?d(n,h):b(n,h);g&&(r.i&&n[o].toLowerCase()===e.toLowerCase()||!r.i&&n[o]===e)?l=!0:s+=1,"right"===t&&h>i+1?c.push([i+1,h]):"left"===t&&h<~-i&&c.unshift([h+1,i]),i=h,"right"===t?(void 0===u&&(u=h),a=h):(void 0===a&&(a=h),u=h)}}return void 0===u?null:{gaps:c,leftmostChar:u,rightmostChar:a}}function v(t,n,...e){if(!e.length)return b(t,n);const r={i:!1};let o;return o=f(e[0])?{...r,...e.shift()}:r,_("left",t,n,o,Array.from(e).reverse())}function w(t,n,...e){if(!e.length)return d(t,n);const r={i:!1};let o;return o=f(e[0])?{...r,...e.shift()}:r,_("right",t,n,o,e)}function j(t,n,e,r,o){if("string"!=typeof n||!n.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!n[e+1]||"left"===t&&(y(e)&&e<1||"0"===e))return null;let i=null,c=null;do{i="right"===t?w(n,y(c)?c:e,...o):v(n,y(c)?c:e,...o),null!==i&&(c="right"===t?i.rightmostChar:i.leftmostChar)}while(i);if(null!=c&&"right"===t&&(c+=1),null===c)return null;if("right"===t){if(n[c]&&n[c].trim())return c;const t=d(n,c);if(0===r.mode){if(t===c+1)return c;if(!(n.slice(c,t||n.length).trim()||n.slice(c,t||n.length).includes("\n")||n.slice(c,t||n.length).includes("\r")))return t?~-t:n.length;for(let t=c,e=n.length;t<e;t++)if("\n\r".includes(n[t]))return t}else{if(1===r.mode)return c;if(2===r.mode){const t=n.slice(c);if(t.trim()||t.includes("\n")||t.includes("\r"))for(let t=c,e=n.length;t<e;t++)if(n[t].trim()||"\n\r".includes(n[t]))return t;return n.length}}return t||n.length}if(n[c]&&n[~-c]&&n[~-c].trim())return c;const u=b(n,c);if(0===r.mode){if(u===c-2)return c;if(n.slice(0,c).trim()||n.slice(0,c).includes("\n")||n.slice(0,c).includes("\r"))for(let t=c;t--;)if("\n\r".includes(n[t])||n[t].trim())return t+1+(n[t].trim()?1:0);return 0}if(1===r.mode)return c;if(2===r.mode){const t=n.slice(0,c);if(t.trim()||t.includes("\n")||t.includes("\r"))for(let t=c;t--;)if(n[t].trim()||"\n\r".includes(n[t]))return t+1;return 0}return null!==u?u+1:0}function O(t,n){if(!Array.isArray(t)||!t.length)return t;const e={strictlyTwoElementsInRangeArrays:!1,progressFn:null,...n};let r,o;if(e.strictlyTwoElementsInRangeArrays&&!t.every((t,n)=>2===t.length||(r=n,o=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${r}th range (${JSON.stringify(t[r],null,4)}) has not two but ${o} elements!`);if(!t.every((t,n)=>!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(r=n,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${r}th range (${JSON.stringify(t[r],null,4)}) does not consist of only natural numbers!`);const i=t.length*t.length;let c=0;return Array.from(t).sort((t,n)=>(e.progressFn&&(c+=1,e.progressFn(Math.floor(100*c/i))),t[0]===n[0]?t[1]<n[1]?-1:t[1]>n[1]?1:0:t[0]<n[0]?-1:1))}function S(t,n){function e(t){return"string"==typeof t}function r(t){return t&&"object"==typeof t&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return t;const o={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let i;if(n){if(!r(n))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(n,null,4)} (type ${typeof n})`);if(i={...o,...n},i.progressFn&&r(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof i.progressFn}", equal to ${JSON.stringify(i.progressFn,null,4)}`);if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(e(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!e(i.mergeType)||"2"!==i.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof i.mergeType}", equal to ${JSON.stringify(i.mergeType,null,4)}`);i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof i.joinRangesThatTouchEdges}", equal to ${JSON.stringify(i.joinRangesThatTouchEdges,null,4)}`)}else i={...o};const c=t.map(t=>[...t]).filter(t=>void 0!==t[2]||t[0]!==t[1]);let u,a,l;u=i.progressFn?O(c,{progressFn:t=>{l=Math.floor(t/5),l!==a&&(a=l,i.progressFn(l))}}):O(c);const s=u.length-1;for(let t=s;t>0;t--)i.progressFn&&(l=Math.floor(78*(1-t/s))+21,l!==a&&l>a&&(a=l,i.progressFn(l))),(u[t][0]<=u[t-1][0]||!i.joinRangesThatTouchEdges&&u[t][0]<u[t-1][1]||i.joinRangesThatTouchEdges&&u[t][0]<=u[t-1][1])&&(u[t-1][0]=Math.min(u[t][0],u[t-1][0]),u[t-1][1]=Math.max(u[t][1],u[t-1][1]),void 0!==u[t][2]&&(u[t-1][0]>=u[t][0]||u[t-1][1]<=u[t][1])&&null!==u[t-1][2]&&(null===u[t][2]&&null!==u[t-1][2]?u[t-1][2]=null:void 0!==u[t-1][2]?2===i.mergeType&&u[t-1][0]===u[t][0]?u[t-1][2]=u[t][2]:u[t-1][2]+=u[t][2]:u[t-1][2]=u[t][2]),u.splice(t,1),t=u.length);return u}function T(t){return null!=t}function I(t){return"string"==typeof t}function A(t,n,e){let r,o=0,i=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if(!I(t))throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===n)return t;if(!Array.isArray(n))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof n}, equal to: ${JSON.stringify(n,null,4)}`);if(e&&"function"!=typeof e)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);r=Array.isArray(n)&&(Number.isInteger(n[0])&&n[0]>=0||/^\d*$/.test(n[0]))&&(Number.isInteger(n[1])&&n[1]>=0||/^\d*$/.test(n[1]))?[Array.from(n)]:Array.from(n);const c=r.length;let u=0;r.forEach((t,n)=>{if(e&&(o=Math.floor(u/c*10),o!==i&&(i=o,e(o))),!Array.isArray(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${n}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!Number.isInteger(t[0])||t[0]<0){if(!/^\d*$/.test(t[0]))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${n}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);r[n][0]=Number.parseInt(r[n][0],10)}if(!Number.isInteger(t[1])){if(!/^\d*$/.test(t[1]))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${n}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);r[n][1]=Number.parseInt(r[n][1],10)}u+=1});const a=S(r,{progressFn:t=>{e&&(o=10+Math.floor(t/10),o!==i&&(i=o,e(o)))}}),l=a.length;if(l>0){const n=t.slice(a[l-1][1]);t=a.reduce((n,r,c,u)=>{e&&(o=20+Math.floor(c/l*80),o!==i&&(i=o,e(o)));const a=0===c?0:u[c-1][1],s=u[c][0];return n+t.slice(a,s)+(T(u[c][2])?u[c][2]:"")},""),t+=n}return t}var N=Array.isArray;function $(t){return"string"==typeof t}function J(t){return"number"==typeof t}function E(t){return N(t)?t.join("."):$(t)?t:String(t)}function P(t,n){if("\\"!==t[n])return!0;var e=function(t,n,...e){if(!e.length||1===e.length&&f(e[0]))return null;const r={mode:0};if(f(e[0])){const o={...r,...h(e[0])};if(o.mode){if(m(o.mode)&&"0123".includes(o.mode))o.mode=Number.parseInt(o.mode,10);else if(!y(o.mode))throw new Error(`string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as ${o.mode} (type ${typeof o.mode})`)}else o.mode=0;return j("left",t,n,o,h(e).slice(1))}return m(e[0])?j("left",t,n,r,h(e)):j("left",t,n,r,h(e).slice(1))}(t,n,{mode:1},"\\");return!(!J(e)||(n-e)%2==0)}function F(t){var n,e=t.str,r=t.path,o=t.valToInsert,i=t.mode;function c(t){e[n]}var u=e.length,a=[];c();var l=["{","}","[","]",":",","],s=o;!$(o)||o.startsWith('"')||o.startsWith("{")||(s='"'.concat(o,'"'));var f,g,h,p,y,m,_,v=[],w=[],j=!1,O=!1,S=!1,T=!1,I=[];function F(){f=null,g=null,h=null,p=null,y=null,m=null}F();var R,W=[];for(n=0;n<u;n++){if(c("\n[".concat(36,"m","===============================","[",39,"m [",35,"m","str[ ".concat(n," ] = ").concat(e[n]&&e[n].trim()?e[n]:JSON.stringify(e[n],null,0)),"[",39,"m [",36,"m","===============================","[",39,"m\n")),J(_)||"["!==e[n-1]||(O=!0,"]"!==e[n]&&(j=!1)),J(_)||"{"!==e[n-1]||(j=!0,"}"!==e[n]&&(O=!1)),J(_)||"{"!==e[n]||!P(e,n-1)||S||(O&&(T||(c("198 ".concat("[".concat(33,"m","currentPath","[",39,"m")," = ",JSON.stringify(W,null,4))),W[W.length-1]=W[W.length-1]+1,c())),v.push(n),c("215 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","withinObjectIndexes","[",39,"m")," = ",JSON.stringify(v,null,4)))),J(_)||"}"!==e[n]||!P(e,n-1)||S||(v.pop(),c("231 ".concat("[".concat(31,"m","POP","[",39,"m")," ","[".concat(33,"m","withinObjectIndexes","[",39,"m")," = ",JSON.stringify(v,null,4)))),J(_)||"]"!==e[n]||!P(e,n-1)||S||(w.pop(),c("248 ".concat("[".concat(32,"m","POP","[",39,"m")," ","[".concat(33,"m","withinArrayIndexes","[",39,"m")," = ",JSON.stringify(w,null,4))),W.pop(),c("256 POP path, now = ".concat(JSON.stringify(W,null,4))),c(),F(),T&&(T=!1,c())),J(_)||"]"!==e[n]||(w.length?w.length&&(!v.length||w[w.length-1]>v[v.length-1])&&(O=!0):(O=!1,v.length&&!j&&(j=!0))),J(_)||"}"!==e[n]||(v.length?(!w.length||v[v.length-1]>w[w.length-1])&&(j=!0):j=!1),O&&E(r)===W.join(".")&&!S&&e[n].trim()&&(S=!0,c(),h=n,c()),J(_)||"["!==e[n]||!P(e,n-1)||S||(w.push(n),T=!0,c("348 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","withinArrayIndexes","[",39,"m")," = ",JSON.stringify(w,null,4),"; ","[".concat(33,"m","itsTheFirstElem","[",39,"m")," = ").concat(T)),W.push(0),c("359 ".concat("[".concat(32,"m","PUSH","[",39,"m")," zero to path, now = ",JSON.stringify(W,null,0)))),O&&","===e[n]&&T&&(!h||p)&&(T=!1,c()),S||h||!e[n].trim()||l.includes(e[n])||!(O||!O&&y)||(c(),h=n,c(),O&&(T?(T=!1,c()):(W[W.length-1]=W[W.length-1]+1,c()))),!S&&!J(_)&&(O||!O&&y)&&h&&h<n&&!p&&('"'===e[h]&&'"'===e[n]&&"\\"!==e[n-1]||'"'!==e[h]&&!e[n].trim()||["}",","].includes(e[n]))&&(c(),m=e.slice(h,'"'===e[h]?n+1:n),c(),p=n,c()),S||O||'"'!==e[n]||"\\"===e[n-1]||y||f||g||!e[n+1]||(f=n+1,c()),!S&&!O&&'"'===e[n]&&"\\"!==e[n-1]&&!g&&f&&!h&&f<n&&(g=n+1,y=e.slice(f,n),c(),W.push(y),c("506 PUSH to path, now = ".concat(JSON.stringify(W,null,4))),E(r)===W.join(".")&&(S=!0,c())),S||J(_)||","!==e[n]||!j||(W.pop(),c("535 POP(), now ".concat("[".concat(33,"m","currentPath","[",39,"m")," = ",JSON.stringify(W,null,0)))),!S&&(p&&n>=p||["}","]"].includes(e[b(e,n)])&&["}","]"].includes(e[n])||"}"===e[n]&&"{"===e[b(e,n)])&&e[n].trim()&&(c(),","!==e[n]||["}","]"].includes(e[d(e,n)])?"}"===e[n]&&(c(),(p||"{"!==e[b(e,n)])&&(W.pop(),c("569 POP(), now ".concat("[".concat(33,"m","currentPath","[",39,"m")," = ",JSON.stringify(W,null,0)))),c(),c(),w.length&&v.length&&w[w.length-1]>v[v.length-1]&&(j=!1,O=!0),c(),F()):(c(),F())),S||"{"!==e[n]||!$(y)||h||m||(c(),F()),e[n].trim()&&S&&!h&&n>g&&![":"].includes(e[n])&&(h=n,c()),'"'===e[n]&&P(e,n-1)&&(J(f)&&!g||J(h)&&!p)&&!J(_)&&(_=n,c()),I.length&&e[n]===I[I.length-1]&&P(e,n-1)?(I.pop(),c("677 ".concat("[".concat(32,"m","POP","[",39,"m")," skipUntilTheFollowingIsMet = ",JSON.stringify(I,null,4)))):_&&_!==n||!S||O||!h||("{"===e[n]&&P(e,n-1)?(I.push("}"),c("695 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","skipUntilTheFollowingIsMet","[",39,"m")," = ",JSON.stringify(I,null,4)))):"["===e[n]&&P(e,n-1)?(I.push("]"),c("705 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","skipUntilTheFollowingIsMet","[",39,"m")," = ",JSON.stringify(I,null,4)))):'"'===e[n]&&P(e,n-1)&&(I.push('"'),c("715 ".concat("[".concat(32,"m","PUSH","[",39,"m")," ","[".concat(33,"m","skipUntilTheFollowingIsMet","[",39,"m")," = ",JSON.stringify(I,null,4))))),'"'===e[n]&&P(e,n-1)&&J(_)&&_!==n&&(_=void 0,c()),S&&N(I)&&!I.length&&h&&n>h&&(c(),!_&&("["===e[h]&&"]"===e[n]||"{"===e[h]&&"}"===e[n]||'"'===e[h]&&'"'===e[n]||!["[","{",'"'].includes(e[h])&&e[h].trim()&&(!e[n].trim()||l.includes(e[n])&&P(e,n-1))))){if(c("780 INSIDE CATCH-END CLAUSES currently ".concat("[".concat(33,"m","str[valueStartedAt=".concat(h,"]"),"[",39,"m")," = ",JSON.stringify(e[h],null,4))),"set"===i){c();var x="";e.slice(h,n+(e[n].trim()?1:0)).includes("\n")&&"\n"!==e[n+(e[n].trim()?1:0)]&&(x="\n");var H=n+(e[n].trim()?1:0);return(O&&!['"',"[","{"].includes(e[h])&&"]"!==e[d(e,H-1)]||","===e[H-1]&&'"'!==e[h-1])&&(H-=1),O&&'"'===e[h-1]&&(h-=1),"".concat(e.slice(0,h)).concat((R=s,$(R)&&R.startsWith('"')&&R.endsWith('"')?"".concat(JSON.stringify(R.slice(1,R.length-1),null,0)):JSON.stringify(R,null,0))).concat(x).concat(e.slice(H))}if("del"===i){c(),c("851 ".concat("[".concat(33,"m","keyStartedAt","[",39,"m")," = ",JSON.stringify(f,null,4),"; val = ").concat((O?h:f)-1));var D=b(e,(O?h:f)-1)+1;c();var U=n+(e[n].trim()?1:0);","===e[D-1]&&["}","]"].includes(e[d(e,U-1)])&&(D-=1,c()),","===e[U]&&(U+=1,c()),c("883 ".concat("[".concat(33,"m","startingPoint","[",39,"m")," = ",JSON.stringify(D,null,4),"; ","[".concat(33,"m","endingPoint","[",39,"m")," = ").concat(JSON.stringify(U,null,4),";")),a.push([D,U]),c("896 ".concat("[".concat(32,"m","FINAL PUSH","[",39,"m")," ","[".concat(33,"m","ranges","[",39,"m")," = ",JSON.stringify(a,null,4))),c();break}}c("".concat("[".concat(_?32:31,"m","withinQuotesSince".concat(J(_)?"=".concat(_):""),"[",39,"m"),"; ","[".concat(j?32:31,"m","currentlyWithinObject","[",39,"m"),"; ","[".concat(O?32:31,"m","currentlyWithinArray","[",39,"m"),"; ","[".concat(S?32:31,"m","replaceThisValue","[",39,"m"),"; ","[".concat(T?32:31,"m","itsTheFirstElem","[",39,"m"),"; ","[".concat(I.length?32:31,"m","skipUntilTheFollowingIsMet".concat(I?": ".concat(JSON.stringify(I,null,0)):""),"[",39,"m"))),c("current path: ".concat(JSON.stringify(W.join("."),null,0))),c(),c("".concat("[".concat(33,"m","withinArrayIndexes","[",39,"m")," = ",JSON.stringify(w,null,0),"; ","[".concat(33,"m","withinObjectIndexes","[",39,"m")," = ").concat(JSON.stringify(v,null,0),";"))}return c(),c("947 RETURN applied ".concat(JSON.stringify(A(e,a),null,4))),A(e,a)}t.del=function(t,e){if(!$(t)||!t.length)throw new Error("edit-package-json/del(): [THROW_ID_02] first input argument must be a non-empty string. It was given as ".concat(JSON.stringify(t,null,4)," (type ").concat(n(t),")"));return F({str:t,path:e,mode:"del"})},t.set=function(t,e,r){if(!$(t)||!t.length)throw new Error("edit-package-json/set(): [THROW_ID_01] first input argument must be a non-empty string. It was given as ".concat(JSON.stringify(t,null,4)," (type ").concat(n(t),")"));return F({str:t,path:e,valToInsert:r,mode:"set"})},Object.defineProperty(t,"__esModule",{value:!0})}));
