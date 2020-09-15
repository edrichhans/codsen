/**
 * ast-delete-object
 * Delete all plain objects that contain a certain key/value pair
 * Version: 1.8.74
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-delete-object/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).astDeleteObject=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||i(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){if(t){if("string"==typeof t)return a(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(t,e):void 0}}function a(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=i(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){u=!0,a=t},f:function(){try{c||null==r.return||r.return()}finally{if(u)throw a}}}}var u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function f(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==e&&r.path)}},r.exports),r.exports}var s=f((function(e,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",y="[object Number]",p="[object Object]",h="[object Promise]",b="[object RegExp]",d="[object Set]",g="[object String]",v="[object Symbol]",m="[object WeakMap]",w="[object ArrayBuffer]",j="[object DataView]",_="[object Float32Array]",O="[object Float64Array]",S="[object Int8Array]",A="[object Int16Array]",T="[object Int32Array]",W="[object Uint8Array]",M="[object Uint8ClampedArray]",E="[object Uint16Array]",k="[object Uint32Array]",N=/\w*$/,P=/^\[object .+?Constructor\]$/,D=/^(?:0|[1-9]\d*)$/,x={};x[i]=x["[object Array]"]=x[w]=x[j]=x[a]=x[c]=x[_]=x[O]=x[S]=x[A]=x[T]=x[l]=x[y]=x[p]=x[b]=x[d]=x[g]=x[v]=x[W]=x[M]=x[E]=x[k]=!0,x["[object Error]"]=x[f]=x[m]=!1;var I="object"==t(u)&&u&&u.Object===Object&&u,F="object"==("undefined"==typeof self?"undefined":t(self))&&self&&self.Object===Object&&self,H=I||F||Function("return this")(),R=r&&!r.nodeType&&r,J=R&&e&&!e.nodeType&&e,$=J&&J.exports===R;function L(t,e){return t.set(e[0],e[1]),t}function q(t,e){return t.add(e),t}function C(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function U(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function z(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function B(t,e){return function(r){return t(e(r))}}function K(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var V,G=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=H["__core-js_shared__"],Z=(V=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",tt=Q.toString,et=X.hasOwnProperty,rt=X.toString,nt=RegExp("^"+tt.call(et).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=$?H.Buffer:void 0,it=H.Symbol,at=H.Uint8Array,ct=B(Object.getPrototypeOf,Object),ut=Object.create,ft=X.propertyIsEnumerable,st=G.splice,lt=Object.getOwnPropertySymbols,yt=ot?ot.isBuffer:void 0,pt=B(Object.keys,Object),ht=Jt(H,"DataView"),bt=Jt(H,"Map"),dt=Jt(H,"Promise"),gt=Jt(H,"Set"),vt=Jt(H,"WeakMap"),mt=Jt(Object,"create"),wt=Ut(ht),jt=Ut(bt),_t=Ut(dt),Ot=Ut(gt),St=Ut(vt),At=it?it.prototype:void 0,Tt=At?At.valueOf:void 0;function Wt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Mt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){this.__data__=new Mt(t)}function Nt(e,r){var n=Bt(e)||function(e){return function(e){return function(e){return!!e&&"object"==t(e)}(e)&&Kt(e)}(e)&&et.call(e,"callee")&&(!ft.call(e,"callee")||rt.call(e)==i)}(e)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(e.length,String):[],o=n.length,a=!!o;for(var c in e)!r&&!et.call(e,c)||a&&("length"==c||qt(c,o))||n.push(c);return n}function Pt(t,e,r){var n=t[e];et.call(t,e)&&zt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Dt(t,e){for(var r=t.length;r--;)if(zt(t[r][0],e))return r;return-1}function xt(t,e,r,n,o,u,h){var m;if(n&&(m=u?n(t,o,u,h):n(t)),void 0!==m)return m;if(!Qt(t))return t;var P=Bt(t);if(P){if(m=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&et.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,m)}else{var D=Lt(t),I=D==f||D==s;if(Vt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(D==p||D==i||I&&!u){if(U(t))return u?t:{};if(m=function(t){return"function"!=typeof t.constructor||Ct(t)?{}:(e=ct(t),Qt(e)?ut(e):{});var e}(I?{}:t),!e)return function(t,e){return Ht(t,$t(t),e)}(t,function(t,e){return t&&Ht(e,Xt(e),t)}(m,t))}else{if(!x[D])return u?t:{};m=function(t,e,r,n){var o=t.constructor;switch(e){case w:return Ft(t);case a:case c:return new o(+t);case j:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case _:case O:case S:case A:case T:case W:case M:case E:case k:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return C(e?r(z(t),!0):z(t),L,new t.constructor)}(t,n,r);case y:case g:return new o(t);case b:return function(t){var e=new t.constructor(t.source,N.exec(t));return e.lastIndex=t.lastIndex,e}(t);case d:return function(t,e,r){return C(e?r(K(t),!0):K(t),q,new t.constructor)}(t,n,r);case v:return i=t,Tt?Object(Tt.call(i)):{}}var i}(t,D,xt,e)}}h||(h=new kt);var F=h.get(t);if(F)return F;if(h.set(t,m),!P)var H=r?function(t){return function(t,e,r){var n=e(t);return Bt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Xt,$t)}(t):Xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(H||t,(function(o,i){H&&(o=t[i=o]),Pt(m,i,xt(o,e,r,n,i,t,h))})),m}function It(t){return!(!Qt(t)||(e=t,Z&&Z in e))&&(Gt(t)||U(t)?nt:P).test(Ut(t));var e}function Ft(t){var e=new t.constructor(t.byteLength);return new at(e).set(new at(t)),e}function Ht(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Pt(r,a,void 0===c?t[a]:c)}return r}function Rt(e,r){var n,o,i=e.__data__;return("string"==(o=t(n=r))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?i["string"==typeof r?"string":"hash"]:i.map}function Jt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}Wt.prototype.clear=function(){this.__data__=mt?mt(null):{}},Wt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Wt.prototype.get=function(t){var e=this.__data__;if(mt){var r=e[t];return r===n?void 0:r}return et.call(e,t)?e[t]:void 0},Wt.prototype.has=function(t){var e=this.__data__;return mt?void 0!==e[t]:et.call(e,t)},Wt.prototype.set=function(t,e){return this.__data__[t]=mt&&void 0===e?n:e,this},Mt.prototype.clear=function(){this.__data__=[]},Mt.prototype.delete=function(t){var e=this.__data__,r=Dt(e,t);return!(r<0)&&(r==e.length-1?e.pop():st.call(e,r,1),!0)},Mt.prototype.get=function(t){var e=this.__data__,r=Dt(e,t);return r<0?void 0:e[r][1]},Mt.prototype.has=function(t){return Dt(this.__data__,t)>-1},Mt.prototype.set=function(t,e){var r=this.__data__,n=Dt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new Wt,map:new(bt||Mt),string:new Wt}},Et.prototype.delete=function(t){return Rt(this,t).delete(t)},Et.prototype.get=function(t){return Rt(this,t).get(t)},Et.prototype.has=function(t){return Rt(this,t).has(t)},Et.prototype.set=function(t,e){return Rt(this,t).set(t,e),this},kt.prototype.clear=function(){this.__data__=new Mt},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Mt){var n=r.__data__;if(!bt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Et(n)}return r.set(t,e),this};var $t=lt?B(lt,Object):function(){return[]},Lt=function(t){return rt.call(t)};function qt(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||D.test(t))&&t>-1&&t%1==0&&t<e}function Ct(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||X)}function Ut(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,e){return t===e||t!=t&&e!=e}(ht&&Lt(new ht(new ArrayBuffer(1)))!=j||bt&&Lt(new bt)!=l||dt&&Lt(dt.resolve())!=h||gt&&Lt(new gt)!=d||vt&&Lt(new vt)!=m)&&(Lt=function(t){var e=rt.call(t),r=e==p?t.constructor:void 0,n=r?Ut(r):void 0;if(n)switch(n){case wt:return j;case jt:return l;case _t:return h;case Ot:return d;case St:return m}return e});var Bt=Array.isArray;function Kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Gt(t)}var Vt=yt||function(){return!1};function Gt(t){var e=Qt(t)?rt.call(t):"";return e==f||e==s}function Qt(e){var r=t(e);return!!e&&("object"==r||"function"==r)}function Xt(t){return Kt(t)?Nt(t):function(t){if(!Ct(t))return pt(t);var e=[];for(var r in Object(t))et.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return xt(t,!0,!0)}})),l=f((function(e,r){e.exports=function(){var e="function"==typeof Promise,r="object"===("undefined"==typeof self?"undefined":t(self))?self:u,n="undefined"!=typeof Symbol,o="undefined"!=typeof Map,i="undefined"!=typeof Set,a="undefined"!=typeof WeakMap,c="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,s=n&&void 0!==Symbol.iterator,l=n&&void 0!==Symbol.toStringTag,y=i&&"function"==typeof Set.prototype.entries,p=o&&"function"==typeof Map.prototype.entries,h=y&&Object.getPrototypeOf((new Set).entries()),b=p&&Object.getPrototypeOf((new Map).entries()),d=s&&"function"==typeof Array.prototype[Symbol.iterator],g=d&&Object.getPrototypeOf([][Symbol.iterator]()),v=s&&"function"==typeof String.prototype[Symbol.iterator],m=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1;function _(n){var u=t(n);if("object"!==u)return u;if(null===n)return"null";if(n===r)return"global";if(Array.isArray(n)&&(!1===l||!(Symbol.toStringTag in n)))return"Array";if("object"===("undefined"==typeof window?"undefined":t(window))&&null!==window){if("object"===t(window.location)&&n===window.location)return"Location";if("object"===t(window.document)&&n===window.document)return"Document";if("object"===t(window.navigator)){if("object"===t(window.navigator.mimeTypes)&&n===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===t(window.navigator.plugins)&&n===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===t(window.HTMLElement))&&n instanceof window.HTMLElement){if("BLOCKQUOTE"===n.tagName)return"HTMLQuoteElement";if("TD"===n.tagName)return"HTMLTableDataCellElement";if("TH"===n.tagName)return"HTMLTableHeaderCellElement"}}var s=l&&n[Symbol.toStringTag];if("string"==typeof s)return s;var y=Object.getPrototypeOf(n);return y===RegExp.prototype?"RegExp":y===Date.prototype?"Date":e&&y===Promise.prototype?"Promise":i&&y===Set.prototype?"Set":o&&y===Map.prototype?"Map":c&&y===WeakSet.prototype?"WeakSet":a&&y===WeakMap.prototype?"WeakMap":f&&y===DataView.prototype?"DataView":o&&y===b?"Map Iterator":i&&y===h?"Set Iterator":d&&y===g?"Array Iterator":v&&y===m?"String Iterator":null===y?"Object":Object.prototype.toString.call(n).slice(w,j)}return _}()}));function y(t){return"string"==typeof t&&t.length&&"."===t[0]?t.slice(1):t}function p(e,r){return function e(r,o,i,a){var c,u,f,l,p=s(r),h=n({depth:-1,path:""},i);if(h.depth+=1,Array.isArray(p))for(c=0,u=p.length;c<u&&!a.now;c++){var b="".concat(h.path,".").concat(c);void 0!==p[c]?(h.parent=s(p),h.parentType="array",f=e(o(p[c],void 0,n(n({},h),{},{path:y(b)}),a),o,n(n({},h),{},{path:y(b)}),a),Number.isNaN(f)&&c<p.length?(p.splice(c,1),c-=1):p[c]=f):p.splice(c,1)}else if((l=p)&&"object"===t(l)&&!Array.isArray(l))for(var d in p){if(a.now&&null!=d)break;var g="".concat(h.path,".").concat(d);0===h.depth&&null!=d&&(h.topmostKey=d),h.parent=s(p),h.parentType="object",f=e(o(d,p[d],n(n({},h),{},{path:y(g)}),a),o,n(n({},h),{},{path:y(g)}),a),Number.isNaN(f)?delete p[d]:p[d]=f}return p}(e,r,{},{now:!1})}function h(e){if("string"==typeof e)return!e.trim();if(!["object","string"].includes(t(e))||!e)return!1;var r=!0;return e=p(e,(function(t,e,n,o){var i=void 0!==e?e:t;return"string"==typeof i&&i.trim()&&(r=!1,o.now=!0),i})),r}var b=new Map;function d(t,e){e=n({caseSensitive:!1},e);var r=t+JSON.stringify(e);if(b.has(r))return b.get(r);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");var i=new RegExp("^".concat(t,"$"),e.caseSensitive?"":"i");return i.negated=o,b.set(r,i),i}var g=function(e,r,n){if(!Array.isArray(e)||!Array.isArray(r))throw new TypeError("Expected two arrays, got ".concat(t(e)," ").concat(t(r)));if(0===r.length)return e;var o="!"===r[0][0];r=r.map((function(t){return d(t,n)}));var i,a=[],u=c(e);try{for(u.s();!(i=u.n()).done;){var f,s=i.value,l=o,y=c(r);try{for(y.s();!(f=y.n()).done;){var p=f.value;p.test(s)&&(l=!p.negated)}}catch(t){y.e(t)}finally{y.f()}l&&a.push(s)}}catch(t){u.e(t)}finally{u.f()}return a};g.isMatch=function(t,e,r){var n=Array.isArray(t)?t:[t],o=Array.isArray(e)?e:[e];return n.some((function(t){return o.every((function(e){var n=d(e,r),o=n.test(t);return n.negated?!o:o}))}))};var v=Array.isArray;function m(t){return null!=t}function w(e){return e&&"object"===t(e)&&!Array.isArray(e)}function j(t){return"string"==typeof t}function _(t){return w(t)||j(t)||function(t){return"number"==typeof t}(t)||function(t){return"boolean"==typeof t}(t)||v(t)||function(t){return null===t}(t)}function O(e,r,i){if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===r)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(m(e)&&!_(e))throw new TypeError("ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ".concat(l(e),", equal to: ").concat(JSON.stringify(e,null,4)));if(m(r)&&!_(r))throw new TypeError("ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ".concat(l(r),", equal to: ").concat(JSON.stringify(r,null,4)));if(m(i)&&!w(i))throw new TypeError("ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ".concat(l(i)," and equal to: ").concat(JSON.stringify(i,null,4)));var a,u,f,s,y=0,p=n(n({},{hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1}),i);if(p.hungryForWhitespace&&p.matchStrictly&&w(e)&&h(e)&&w(r)&&!Object.keys(r).length)return!0;if((!p.hungryForWhitespace||p.hungryForWhitespace&&!h(e)&&h(r))&&w(e)&&0!==Object.keys(e).length&&w(r)&&0===Object.keys(r).length||l(e)!==l(r)&&(!p.hungryForWhitespace||p.hungryForWhitespace&&!h(e)))return!1;if(j(e)&&j(r))return!!(p.hungryForWhitespace&&h(e)&&h(r))||(p.verboseWhenMismatches?e===r||"Given string ".concat(r," is not matched! We have ").concat(e," on the other end."):p.useWildcards?g.isMatch(e,r,{caseSensitive:!0}):e===r);if(v(e)&&v(r)){if(p.hungryForWhitespace&&h(r)&&(!p.matchStrictly||p.matchStrictly&&e.length===r.length))return!0;if(!p.hungryForWhitespace&&r.length>e.length||p.matchStrictly&&r.length!==e.length)return!!p.verboseWhenMismatches&&"The length of a given array, ".concat(JSON.stringify(r,null,4)," is ").concat(r.length," but the length of an array on the other end, ").concat(JSON.stringify(e,null,4)," is ").concat(e.length);if(0===r.length)return 0===e.length||!!p.verboseWhenMismatches&&"The given array has no elements, but the array on the other end, ".concat(JSON.stringify(e,null,4)," does have some");for(var b=0,d=r.length;b<d;b++){f=!1;for(var S=y,A=e.length;S<A;S++)if(y+=1,!0===O(e[S],r[b],p)){f=!0;break}if(!f)return!!p.verboseWhenMismatches&&"The given array ".concat(JSON.stringify(r,null,4)," is not a subset of an array on the other end, ").concat(JSON.stringify(e,null,4))}}else{if(!w(e)||!w(r))return!(!(p.hungryForWhitespace&&h(e)&&h(r))||p.matchStrictly&&(!p.matchStrictly||(s=r,w(s)?Object.keys(s).length:!v(s)&&!j(s)||s.length)))||e===r;if(a=new Set(Object.keys(r)),u=new Set(Object.keys(e)),p.matchStrictly&&a.size!==u.size){if(!p.verboseWhenMismatches)return!1;var T=new Set(o(a).filter((function(t){return!u.has(t)}))),W=T.size?" First object has unique keys: ".concat(JSON.stringify(T,null,4),"."):"",M=new Set(o(u).filter((function(t){return!a.has(t)}))),E=M.size?" Second object has unique keys:\n        ".concat(JSON.stringify(M,null,4),"."):"";return"When matching strictly, we found that both objects have different amount of keys.".concat(W).concat(E)}var k,N=c(a);try{var P=function(){var t=k.value;if(!Object.prototype.hasOwnProperty.call(e,t))return!p.useWildcards||p.useWildcards&&!t.includes("*")?p.verboseWhenMismatches?{v:'The given object has key "'.concat(t,'" which the other-one does not have.')}:{v:!1}:Object.keys(e).some((function(e){return g.isMatch(e,t,{caseSensitive:!0})}))?{v:!0}:p.verboseWhenMismatches?{v:'The given object has key "'.concat(t,'" which the other-one does not have.')}:{v:!1};if(m(e[t])&&l(e[t])!==l(r[t])){if(!(h(e[t])&&h(r[t])&&p.hungryForWhitespace))return p.verboseWhenMismatches?{v:"The given key ".concat(t," is of a different type on both objects. On the first-one, it's ").concat(l(r[t]),", on the second-one, it's ").concat(l(e[t]))}:{v:!1}}else if(!0!==O(e[t],r[t],p))return p.verboseWhenMismatches?{v:"The given piece ".concat(JSON.stringify(r[t],null,4)," and ").concat(JSON.stringify(e[t],null,4)," don't match.")}:{v:!1}};for(N.s();!(k=N.n()).done;){var D=P();if("object"===t(D))return D.v}}catch(t){N.e(t)}finally{N.f()}}return!0}function S(e){return e&&"object"===t(e)&&!Array.isArray(e)}return function(t,e,r){if(!t)throw new Error("ast-delete-object/deleteObj(): [THROW_ID_01] Missing input!");if(!e)throw new Error("ast-delete-object/deleteObj(): [THROW_ID_02] Missing second argument, object to search for and delete!");if(r&&!S(r))throw new Error("ast-delete-object/deleteObj(): [THROW_ID_03] Third argument, options object, must be an object!");var o,i=n(n({},{matchKeysStrictly:!1,hungryForWhitespace:!1}),r),a=s(t);return O(a,e,{hungryForWhitespace:i.hungryForWhitespace,matchStrictly:i.matchKeysStrictly})?{}:a=p(a,(function(t,r){if(S(o=void 0!==r?r:t)){if(S(e)&&S(o)&&!Object.keys(e).length&&!Object.keys(o).length)return NaN;if(O(o,e,{hungryForWhitespace:i.hungryForWhitespace,matchStrictly:i.matchKeysStrictly}))return NaN}return o}))}}));
