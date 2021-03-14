/**
 * object-set-all-values-to
 * Recursively walk the input and set all found values in plain objects to something
 * Version: 4.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-set-all-values-to/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).objectSetAllValuesTo={})}(this,(function(t){"use strict";var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=function(t){var r={exports:{}};return t(r,r.exports),r.exports}((function(t,e){var n="__lodash_hash_undefined__",o=9007199254740991,c="[object Arguments]",u="[object Boolean]",a="[object Date]",i="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",_="[object RegExp]",h="[object Set]",v="[object String]",b="[object Symbol]",d="[object WeakMap]",j="[object ArrayBuffer]",g="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",A="[object Int8Array]",m="[object Int16Array]",x="[object Int32Array]",S="[object Uint8Array]",P="[object Uint8ClampedArray]",E="[object Uint16Array]",T="[object Uint32Array]",$=/\w*$/,F=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,k={};k[c]=k["[object Array]"]=k[j]=k[g]=k[u]=k[a]=k[w]=k[O]=k[A]=k[m]=k[x]=k[s]=k[l]=k[p]=k[_]=k[h]=k[v]=k[b]=k[S]=k[P]=k[E]=k[T]=!0,k["[object Error]"]=k[i]=k[d]=!1;var B="object"==typeof self&&self&&self.Object===Object&&self,M="object"==typeof r&&r&&r.Object===Object&&r||B||Function("return this")(),U=e&&!e.nodeType&&e,V=U&&t&&!t.nodeType&&t,D=V&&V.exports===U;function R(t,r){return t.set(r[0],r[1]),t}function z(t,r){return t.add(r),t}function C(t,r,e,n){var o=-1,c=t?t.length:0;for(n&&c&&(e=t[++o]);++o<c;)e=r(e,t[o],o,t);return e}function L(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function W(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function G(t,r){return function(e){return t(r(e))}}function N(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var q,H=Array.prototype,J=Function.prototype,K=Object.prototype,Q=M["__core-js_shared__"],X=(q=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=D?M.Buffer:void 0,nt=M.Symbol,ot=M.Uint8Array,ct=G(Object.getPrototypeOf,Object),ut=Object.create,at=K.propertyIsEnumerable,it=H.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=G(Object.keys,Object),pt=Vt(M,"DataView"),yt=Vt(M,"Map"),_t=Vt(M,"Promise"),ht=Vt(M,"Set"),vt=Vt(M,"WeakMap"),bt=Vt(Object,"create"),dt=Lt(pt),jt=Lt(yt),gt=Lt(_t),wt=Lt(ht),Ot=Lt(vt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){this.__data__=new St(t)}function Tt(t,r){var e=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Nt(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==c)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!Z.call(t,u)||o&&("length"==u||zt(u,n))||e.push(u);return e}function $t(t,r,e){var n=t[r];Z.call(t,r)&&Wt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ft(t,r){for(var e=t.length;e--;)if(Wt(t[e][0],r))return e;return-1}function It(t,r,e,n,o,y,d){var F;if(n&&(F=y?n(t,o,y,d):n(t)),void 0!==F)return F;if(!Jt(t))return t;var I=Gt(t);if(I){if(F=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,F)}else{var B=Rt(t),M=B==i||B==f;if(qt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(B==p||B==c||M&&!y){if(L(t))return y?t:{};if(F=function(t){return"function"!=typeof t.constructor||Ct(t)?{}:(r=ct(t),Jt(r)?ut(r):{});var r}(M?{}:t),!r)return function(t,r){return Mt(t,Dt(t),r)}(t,function(t,r){return t&&Mt(r,Kt(r),t)}(F,t))}else{if(!k[B])return y?t:{};F=function(t,r,e,n){var o=t.constructor;switch(r){case j:return Bt(t);case u:case a:return new o(+t);case g:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case w:case O:case A:case m:case x:case S:case P:case E:case T:return function(t,r){var e=r?Bt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case s:return function(t,r,e){return C(r?e(W(t),!0):W(t),R,new t.constructor)}(t,n,e);case l:case v:return new o(t);case _:return function(t){var r=new t.constructor(t.source,$.exec(t));return r.lastIndex=t.lastIndex,r}(t);case h:return function(t,r,e){return C(r?e(N(t),!0):N(t),z,new t.constructor)}(t,n,e);case b:return c=t,mt?Object(mt.call(c)):{}}var c}(t,B,It,r)}}d||(d=new Et);var U=d.get(t);if(U)return U;if(d.set(t,F),!I)var V=e?function(t){return function(t,r,e){var n=r(t);return Gt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Kt,Dt)}(t):Kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(V||t,(function(o,c){V&&(o=t[c=o]),$t(F,c,It(o,r,e,n,c,t,d))})),F}function kt(t){return!(!Jt(t)||(r=t,X&&X in r))&&(Ht(t)||L(t)?rt:F).test(Lt(t));var r}function Bt(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Mt(t,r,e,n){e||(e={});for(var o=-1,c=r.length;++o<c;){var u=r[o],a=n?n(e[u],t[u],u,e,t):void 0;$t(e,u,void 0===a?t[u]:a)}return e}function Ut(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Vt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return kt(e)?e:void 0}xt.prototype.clear=function(){this.__data__=bt?bt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(bt){var e=r[t];return e===n?void 0:e}return Z.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return bt?void 0!==r[t]:Z.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=bt&&void 0===r?n:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=Ft(r,t);return!(e<0)&&(e==r.length-1?r.pop():it.call(r,e,1),!0)},St.prototype.get=function(t){var r=this.__data__,e=Ft(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return Ft(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=Ft(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Pt.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||St),string:new xt}},Pt.prototype.delete=function(t){return Ut(this,t).delete(t)},Pt.prototype.get=function(t){return Ut(this,t).get(t)},Pt.prototype.has=function(t){return Ut(this,t).has(t)},Pt.prototype.set=function(t,r){return Ut(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof St){var n=e.__data__;if(!yt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Pt(n)}return e.set(t,r),this};var Dt=ft?G(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function zt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<r}function Ct(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function Lt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Wt(t,r){return t===r||t!=t&&r!=r}(pt&&Rt(new pt(new ArrayBuffer(1)))!=g||yt&&Rt(new yt)!=s||_t&&Rt(_t.resolve())!=y||ht&&Rt(new ht)!=h||vt&&Rt(new vt)!=d)&&(Rt=function(t){var r=tt.call(t),e=r==p?t.constructor:void 0,n=e?Lt(e):void 0;if(n)switch(n){case dt:return g;case jt:return s;case gt:return y;case wt:return h;case Ot:return d}return r});var Gt=Array.isArray;function Nt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Ht(t)}var qt=st||function(){return!1};function Ht(t){var r=Jt(t)?tt.call(t):"";return r==i||r==f}function Jt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return Nt(t)?Tt(t):function(t){if(!Ct(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return It(t,!0,!0)}}));var n,o,c=Object.prototype,u=Function.prototype.toString,a=c.hasOwnProperty,i=u.call(Object),f=c.toString,s=(n=Object.getPrototypeOf,o=Object,function(t){return n(o(t))});var l=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=f.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=s(t);if(null===r)return!0;var e=a.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&u.call(e)==i};t.setAllValuesTo=function t(r,n){var o,c=e(r);return o=!(arguments.length<2)&&(l(n)||Array.isArray(n)?e(n):n),Array.isArray(c)?c.forEach((function(r,e){(l(c[e])||Array.isArray(c[e]))&&(c[e]=t(c[e],o))})):l(c)&&Object.keys(c).forEach((function(r){c[r]=Array.isArray(c[r])||l(c[r])?t(c[r],o):o})),c},t.version="4.0.8",Object.defineProperty(t,"__esModule",{value:!0})}));
