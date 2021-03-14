/**
 * ast-loose-compare
 * Compare anything: AST, objects, arrays and strings
 * Version: 2.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-loose-compare/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).astLooseCompare={})}(this,(function(t){"use strict";function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?e(Object(o),!0).forEach((function(e){r(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):e(Object(o)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(o,r))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var u=function(t){var r={exports:{}};return t(r,r.exports),r.exports}((function(t,r){var e="__lodash_hash_undefined__",n=9007199254740991,u="[object Arguments]",c="[object Boolean]",i="[object Date]",a="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",b="[object Set]",v="[object String]",_="[object Symbol]",d="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",O="[object Float32Array]",w="[object Float64Array]",A="[object Int8Array]",m="[object Int16Array]",P="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",k="[object Uint16Array]",E="[object Uint32Array]",T=/\w*$/,I=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,D={};D[u]=D["[object Array]"]=D[g]=D[j]=D[c]=D[i]=D[O]=D[w]=D[A]=D[m]=D[P]=D[s]=D[l]=D[p]=D[h]=D[b]=D[v]=D[_]=D[x]=D[S]=D[k]=D[E]=!0,D["[object Error]"]=D[a]=D[d]=!1;var F="object"==typeof self&&self&&self.Object===Object&&self,N="object"==typeof o&&o&&o.Object===Object&&o||F||Function("return this")(),B=r&&!r.nodeType&&r,M=B&&t&&!t.nodeType&&t,U=M&&M.exports===B;function C(t,r){return t.set(r[0],r[1]),t}function K(t,r){return t.add(r),t}function L(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function R(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function z(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function V(t,r){return function(e){return t(r(e))}}function W(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var G,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=N["__core-js_shared__"],X=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=U?N.Buffer:void 0,nt=N.Symbol,ot=N.Uint8Array,ut=V(Object.getPrototypeOf,Object),ct=Object.create,it=J.propertyIsEnumerable,at=q.splice,ft=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,lt=V(Object.keys,Object),pt=Mt(N,"DataView"),yt=Mt(N,"Map"),ht=Mt(N,"Promise"),bt=Mt(N,"Set"),vt=Mt(N,"WeakMap"),_t=Mt(Object,"create"),dt=Rt(pt),gt=Rt(yt),jt=Rt(ht),Ot=Rt(bt),wt=Rt(vt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function Pt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function kt(t){this.__data__=new xt(t)}function Et(t,r){var e=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Wt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==u)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var c in t)!r&&!Z.call(t,c)||o&&("length"==c||Kt(c,n))||e.push(c);return e}function Tt(t,r,e){var n=t[r];Z.call(t,r)&&zt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function It(t,r){for(var e=t.length;e--;)if(zt(t[e][0],r))return e;return-1}function $t(t,r,e,n,o,y,d){var I;if(n&&(I=y?n(t,o,y,d):n(t)),void 0!==I)return I;if(!Ht(t))return t;var $=Vt(t);if($){if(I=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,I)}else{var F=Ct(t),N=F==a||F==f;if(Gt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(F==p||F==u||N&&!y){if(R(t))return y?t:{};if(I=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(r=ut(t),Ht(r)?ct(r):{});var r}(N?{}:t),!r)return function(t,r){return Nt(t,Ut(t),r)}(t,function(t,r){return t&&Nt(r,Jt(r),t)}(I,t))}else{if(!D[F])return y?t:{};I=function(t,r,e,n){var o=t.constructor;switch(r){case g:return Ft(t);case c:case i:return new o(+t);case j:return function(t,r){var e=r?Ft(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case O:case w:case A:case m:case P:case x:case S:case k:case E:return function(t,r){var e=r?Ft(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case s:return function(t,r,e){return L(r?e(z(t),!0):z(t),C,new t.constructor)}(t,n,e);case l:case v:return new o(t);case h:return function(t){var r=new t.constructor(t.source,T.exec(t));return r.lastIndex=t.lastIndex,r}(t);case b:return function(t,r,e){return L(r?e(W(t),!0):W(t),K,new t.constructor)}(t,n,e);case _:return u=t,mt?Object(mt.call(u)):{}}var u}(t,F,$t,r)}}d||(d=new kt);var B=d.get(t);if(B)return B;if(d.set(t,I),!$)var M=e?function(t){return function(t,r,e){var n=r(t);return Vt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Jt,Ut)}(t):Jt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(M||t,(function(o,u){M&&(o=t[u=o]),Tt(I,u,$t(o,r,e,n,u,t,d))})),I}function Dt(t){return!(!Ht(t)||(r=t,X&&X in r))&&(qt(t)||R(t)?rt:I).test(Rt(t));var r}function Ft(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Nt(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var c=r[o],i=n?n(e[c],t[c],c,e,t):void 0;Tt(e,c,void 0===i?t[c]:i)}return e}function Bt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Mt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Dt(e)?e:void 0}Pt.prototype.clear=function(){this.__data__=_t?_t(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var r=this.__data__;if(_t){var n=r[t];return n===e?void 0:n}return Z.call(r,t)?r[t]:void 0},Pt.prototype.has=function(t){var r=this.__data__;return _t?void 0!==r[t]:Z.call(r,t)},Pt.prototype.set=function(t,r){return this.__data__[t]=_t&&void 0===r?e:r,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var r=this.__data__,e=It(r,t);return!(e<0)&&(e==r.length-1?r.pop():at.call(r,e,1),!0)},xt.prototype.get=function(t){var r=this.__data__,e=It(r,t);return e<0?void 0:r[e][1]},xt.prototype.has=function(t){return It(this.__data__,t)>-1},xt.prototype.set=function(t,r){var e=this.__data__,n=It(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},St.prototype.clear=function(){this.__data__={hash:new Pt,map:new(yt||xt),string:new Pt}},St.prototype.delete=function(t){return Bt(this,t).delete(t)},St.prototype.get=function(t){return Bt(this,t).get(t)},St.prototype.has=function(t){return Bt(this,t).has(t)},St.prototype.set=function(t,r){return Bt(this,t).set(t,r),this},kt.prototype.clear=function(){this.__data__=new xt},kt.prototype.delete=function(t){return this.__data__.delete(t)},kt.prototype.get=function(t){return this.__data__.get(t)},kt.prototype.has=function(t){return this.__data__.has(t)},kt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof xt){var n=e.__data__;if(!yt||n.length<199)return n.push([t,r]),this;e=this.__data__=new St(n)}return e.set(t,r),this};var Ut=ft?V(ft,Object):function(){return[]},Ct=function(t){return tt.call(t)};function Kt(t,r){return!!(r=null==r?n:r)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<r}function Lt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||J)}function Rt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,r){return t===r||t!=t&&r!=r}(pt&&Ct(new pt(new ArrayBuffer(1)))!=j||yt&&Ct(new yt)!=s||ht&&Ct(ht.resolve())!=y||bt&&Ct(new bt)!=b||vt&&Ct(new vt)!=d)&&(Ct=function(t){var r=tt.call(t),e=r==p?t.constructor:void 0,n=e?Rt(e):void 0;if(n)switch(n){case dt:return j;case gt:return s;case jt:return y;case Ot:return b;case wt:return d}return r});var Vt=Array.isArray;function Wt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!qt(t)}var Gt=st||function(){return!1};function qt(t){var r=Ht(t)?tt.call(t):"";return r==a||r==f}function Ht(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Jt(t){return Wt(t)?Et(t):function(t){if(!Lt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return $t(t,!0,!0)}}));var c,i,a=Object.prototype,f=Function.prototype.toString,s=a.hasOwnProperty,l=f.call(Object),p=a.toString,y=(c=Object.getPrototypeOf,i=Object,function(t){return c(i(t))});var h=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=p.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=y(t);if(null===r)return!0;var e=s.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&f.call(e)==l};function b(t){if(t.includes(".")){var r=t.lastIndexOf(".");if(!t.slice(0,r).includes("."))return t.slice(0,r);for(var e=r-1;e--;)if("."===t[e])return t.slice(e+1,r)}return null}function v(t){if("string"==typeof t)return!t.trim();if(!["object","string"].includes(typeof t)||!t)return!1;var r=!0;return t=function t(r,e,o,c){var i,a=u(r),f=n({depth:-1,path:""},o);if(f.depth+=1,Array.isArray(a))for(var s=0,l=a.length;s<l&&!c.now;s++){var p=f.path?f.path+"."+s:""+s;void 0!==a[s]?(f.parent=u(a),f.parentType="array",f.parentKey=b(p),i=t(e(a[s],void 0,n(n({},f),{},{path:p}),c),e,n(n({},f),{},{path:p}),c),Number.isNaN(i)&&s<a.length?(a.splice(s,1),s-=1):a[s]=i):a.splice(s,1)}else if(h(a))for(var y in a){if(c.now&&null!=y)break;var v=f.path?f.path+"."+y:y;0===f.depth&&null!=y&&(f.topmostKey=y),f.parent=u(a),f.parentType="object",f.parentKey=b(v),i=t(e(y,a[y],n(n({},f),{},{path:v}),c),e,n(n({},f),{},{path:v}),c),Number.isNaN(i)?delete a[y]:a[y]=i}return a}(t,(function(t,e,n,o){var u=void 0!==e?e:t;return"string"==typeof u&&u.trim()&&(r=!1,o.now=!0),u}),{},{now:!1}),r}function _(t,r,e){function n(t){return null!=t}var o,u;if(void 0===e){if(!n(t)||!n(r))return}else if(!n(t)||!n(r))return!1;if(e=e||!0,typeof t!=typeof r)return!(!v(t)||!v(r));if(Array.isArray(t)&&Array.isArray(r)){if(!(r.length>0))return!!(0===r.length&&0===t.length||v(r)&&v(t));for(o=0,u=r.length;o<u;o++)if(Array.isArray(r[o])||h(r[o])){if(!(e=_(t[o],r[o],e)))return!1}else if(r[o]!==t[o])return!(!v(r[o])||!v(t[o]))}else if(h(t)&&h(r)){if(!(Object.keys(r).length>0))return!!(0===Object.keys(r).length&&0===Object.keys(t).length||v(r)&&v(t));var c=Object.keys(r);for(o=0,u=c.length;o<u;o++)if(Array.isArray(r[c[o]])||h(r[c[o]])||"string"==typeof r[c[o]]){if(!(e=_(t[c[o]],r[c[o]],e)))return!1}else if(!(r[c[o]]===t[c[o]]||v(r[c[o]])&&v(t[c[o]])))return!1}else{if("string"!=typeof t||"string"!=typeof r)return!(!v(r)||!v(t));if(t!==r)return!(!v(r)||!v(t))}return e}t.looseCompare=function(t,r){return _(t,r)},t.version="2.0.8",Object.defineProperty(t,"__esModule",{value:!0})}));
