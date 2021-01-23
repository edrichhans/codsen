/**
 * color-shorthand-hex-to-six-digit
 * Convert shorthand hex color codes into full
 * Version: 3.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/color-shorthand-hex-to-six-digit/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).colorShorthandHexToSixDigit={})}(this,(function(t){"use strict";
/*!
 * hex-color-regex <https://github.com/regexps/hex-color-regex>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */var r,e,n=Object.prototype,o=Function.prototype.toString,c=n.hasOwnProperty,u=o.call(Object),a=n.toString,i=(r=Object.getPrototypeOf,e=Object,function(t){return r(e(t))});var f=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=a.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=i(t);if(null===r)return!0;var e=c.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&o.call(e)==u},s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var l=function(t){var r={exports:{}};return t(r,r.exports),r.exports}((function(t,r){var e="__lodash_hash_undefined__",n=9007199254740991,o="[object Arguments]",c="[object Boolean]",u="[object Date]",a="[object Function]",i="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",h="[object Promise]",y="[object RegExp]",_="[object Set]",v="[object String]",b="[object Symbol]",d="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",A="[object Int8Array]",x="[object Int16Array]",m="[object Int32Array]",S="[object Uint8Array]",P="[object Uint8ClampedArray]",$="[object Uint16Array]",E="[object Uint32Array]",T=/\w*$/,F=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,k={};k[o]=k["[object Array]"]=k[g]=k[j]=k[c]=k[u]=k[w]=k[O]=k[A]=k[x]=k[m]=k[f]=k[l]=k[p]=k[y]=k[_]=k[v]=k[b]=k[S]=k[P]=k[$]=k[E]=!0,k["[object Error]"]=k[a]=k[d]=!1;var B="object"==typeof self&&self&&self.Object===Object&&self,M="object"==typeof s&&s&&s.Object===Object&&s||B||Function("return this")(),U=r&&!r.nodeType&&r,C=U&&t&&!t.nodeType&&t,D=C&&C.exports===U;function L(t,r){return t.set(r[0],r[1]),t}function R(t,r){return t.add(r),t}function z(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function V(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function W(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function G(t,r){return function(e){return t(r(e))}}function H(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var N,q=Array.prototype,J=Function.prototype,K=Object.prototype,Q=M["__core-js_shared__"],X=(N=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=D?M.Buffer:void 0,nt=M.Symbol,ot=M.Uint8Array,ct=G(Object.getPrototypeOf,Object),ut=Object.create,at=K.propertyIsEnumerable,it=q.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=G(Object.keys,Object),pt=Ct(M,"DataView"),ht=Ct(M,"Map"),yt=Ct(M,"Promise"),_t=Ct(M,"Set"),vt=Ct(M,"WeakMap"),bt=Ct(Object,"create"),dt=Vt(pt),gt=Vt(ht),jt=Vt(yt),wt=Vt(_t),Ot=Vt(vt),At=nt?nt.prototype:void 0,xt=At?At.valueOf:void 0;function mt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function $t(t){this.__data__=new St(t)}function Et(t,r){var e=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ht(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==o)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,c=!!n;for(var u in t)!r&&!Z.call(t,u)||c&&("length"==u||Rt(u,n))||e.push(u);return e}function Tt(t,r,e){var n=t[r];Z.call(t,r)&&Wt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(Wt(t[e][0],r))return e;return-1}function It(t,r,e,n,s,h,d){var F;if(n&&(F=h?n(t,s,h,d):n(t)),void 0!==F)return F;if(!Jt(t))return t;var I=Gt(t);if(I){if(F=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,F)}else{var B=Lt(t),M=B==a||B==i;if(Nt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(B==p||B==o||M&&!h){if(V(t))return h?t:{};if(F=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(r=ct(t),Jt(r)?ut(r):{});var r}(M?{}:t),!r)return function(t,r){return Mt(t,Dt(t),r)}(t,function(t,r){return t&&Mt(r,Kt(r),t)}(F,t))}else{if(!k[B])return h?t:{};F=function(t,r,e,n){var o=t.constructor;switch(r){case g:return Bt(t);case c:case u:return new o(+t);case j:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case w:case O:case A:case x:case m:case S:case P:case $:case E:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case f:return function(t,r,e){return z(r?e(W(t),!0):W(t),L,new t.constructor)}(t,n,e);case l:case v:return new o(t);case y:return function(t){var r=new t.constructor(t.source,T.exec(t));return r.lastIndex=t.lastIndex,r}(t);case _:return function(t,r,e){return z(r?e(H(t),!0):H(t),R,new t.constructor)}(t,n,e);case b:return a=t,xt?Object(xt.call(a)):{}}var a}(t,B,It,r)}}d||(d=new $t);var U=d.get(t);if(U)return U;if(d.set(t,F),!I)var C=e?function(t){return function(t,r,e){var n=r(t);return Gt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Kt,Dt)}(t):Kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(C||t,(function(o,c){C&&(o=t[c=o]),Tt(F,c,It(o,r,e,n,c,t,d))})),F}function kt(t){return!(!Jt(t)||function(t){return!!X&&X in t}(t))&&(qt(t)||V(t)?rt:F).test(Vt(t))}function Bt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Mt(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var u=r[o],a=n?n(e[u],t[u],u,e,t):void 0;Tt(e,u,void 0===a?t[u]:a)}return e}function Ut(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Ct(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return kt(e)?e:void 0}mt.prototype.clear=function(){this.__data__=bt?bt(null):{}},mt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},mt.prototype.get=function(t){var r=this.__data__;if(bt){var n=r[t];return n===e?void 0:n}return Z.call(r,t)?r[t]:void 0},mt.prototype.has=function(t){var r=this.__data__;return bt?void 0!==r[t]:Z.call(r,t)},mt.prototype.set=function(t,r){return this.__data__[t]=bt&&void 0===r?e:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0)&&(e==r.length-1?r.pop():it.call(r,e,1),!0)},St.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return Ft(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Pt.prototype.clear=function(){this.__data__={hash:new mt,map:new(ht||St),string:new mt}},Pt.prototype.delete=function(t){return Ut(this,t).delete(t)},Pt.prototype.get=function(t){return Ut(this,t).get(t)},Pt.prototype.has=function(t){return Ut(this,t).has(t)},Pt.prototype.set=function(t,r){return Ut(this,t).set(t,r),this},$t.prototype.clear=function(){this.__data__=new St},$t.prototype.delete=function(t){return this.__data__.delete(t)},$t.prototype.get=function(t){return this.__data__.get(t)},$t.prototype.has=function(t){return this.__data__.has(t)},$t.prototype.set=function(t,r){var e=this.__data__;if(e instanceof St){var n=e.__data__;if(!ht||n.length<199)return n.push([t,r]),this;e=this.__data__=new Pt(n)}return e.set(t,r),this};var Dt=ft?G(ft,Object):function(){return[]},Lt=function(t){return tt.call(t)};function Rt(t,r){return!!(r=null==r?n:r)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<r}function zt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function Vt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,r){return t===r||t!=t&&r!=r}(pt&&Lt(new pt(new ArrayBuffer(1)))!=j||ht&&Lt(new ht)!=f||yt&&Lt(yt.resolve())!=h||_t&&Lt(new _t)!=_||vt&&Lt(new vt)!=d)&&(Lt=function(t){var r=tt.call(t),e=r==p?t.constructor:void 0,n=e?Vt(e):void 0;if(n)switch(n){case dt:return j;case gt:return f;case jt:return h;case wt:return _;case Ot:return d}return r});var Gt=Array.isArray;function Ht(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!qt(t)}var Nt=st||function(){return!1};function qt(t){var r=Jt(t)?tt.call(t):"";return r==a||r==i}function Jt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return Ht(t)?Et(t):function(t){if(!zt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return It(t,!0,!0)}}));t.conv=function t(r){var e,n=l(r);if("string"==typeof r)n=n.replace((e=e&&"object"==typeof e?e:{}).strict?/^#([a-f0-9]{3,4}|[a-f0-9]{4}(?:[a-f0-9]{2}){1,2})\b$/i:/#([a-f0-9]{3}|[a-f0-9]{4}(?:[a-f0-9]{2}){0,2})\b/gi,(function(t,r,e,n){return"&"!==n[e-1]&&4===t.length&&"#"===t.charAt(0)?("#"+t.charAt(1)+t.charAt(1)+t.charAt(2)+t.charAt(2)+t.charAt(3)+t.charAt(3)).toLowerCase():t.toLowerCase()}));else if(Array.isArray(n))for(var o=0,c=n.length;o<c;o++)n[o]=t(n[o]);else{if(!f(r))return r;Object.keys(n).forEach((function(r){n[r]=t(n[r])}))}return n},t.version="3.0.0",Object.defineProperty(t,"__esModule",{value:!0})}));
