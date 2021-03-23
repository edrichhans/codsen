/**
 * ast-monkey-traverse
 * Utility library to traverse AST
 * Version: 2.0.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-monkey-traverse/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astMonkeyTraverse={})}(this,(function(t){"use strict";function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,c="[object Arguments]",u="[object Boolean]",a="[object Date]",i="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",b="[object Set]",v="[object String]",_="[object Symbol]",d="[object WeakMap]",j="[object ArrayBuffer]",g="[object DataView]",O="[object Float32Array]",w="[object Float64Array]",m="[object Int8Array]",A="[object Int16Array]",P="[object Int32Array]",x="[object Uint8Array]",S="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",k=/\w*$/,I=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,D={};D[c]=D["[object Array]"]=D[j]=D[g]=D[u]=D[a]=D[O]=D[w]=D[m]=D[A]=D[P]=D[s]=D[l]=D[p]=D[h]=D[b]=D[v]=D[_]=D[x]=D[S]=D[T]=D[E]=!0,D["[object Error]"]=D[i]=D[d]=!1;var F="object"==typeof self&&self&&self.Object===Object&&self,N="object"==typeof o&&o&&o.Object===Object&&o||F||Function("return this")(),M=e&&!e.nodeType&&e,B=M&&t&&!t.nodeType&&t,U=B&&B.exports===M;function K(t,e){return t.set(e[0],e[1]),t}function R(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function C(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function L(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function V(t,e){return function(r){return t(e(r))}}function W(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var G,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=N["__core-js_shared__"],X=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=U?N.Buffer:void 0,nt=N.Symbol,ot=N.Uint8Array,ct=V(Object.getPrototypeOf,Object),ut=Object.create,at=J.propertyIsEnumerable,it=q.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=V(Object.keys,Object),pt=Bt(N,"DataView"),yt=Bt(N,"Map"),ht=Bt(N,"Promise"),bt=Bt(N,"Set"),vt=Bt(N,"WeakMap"),_t=Bt(Object,"create"),dt=Ct(pt),jt=Ct(yt),gt=Ct(ht),Ot=Ct(bt),wt=Ct(vt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){this.__data__=new xt(t)}function Et(t,e){var r=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Wt(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Rt(u,n))||r.push(u);return r}function kt(t,e,r){var n=t[e];Z.call(t,e)&&Lt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function It(t,e){for(var r=t.length;r--;)if(Lt(t[r][0],e))return r;return-1}function $t(t,e,r,n,o,y,d){var I;if(n&&(I=y?n(t,o,y,d):n(t)),void 0!==I)return I;if(!Ht(t))return t;var $=Vt(t);if($){if(I=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,I)}else{var F=Kt(t),N=F==i||F==f;if(Gt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(F==p||F==c||N&&!y){if(C(t))return y?t:{};if(I=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=ct(t),Ht(e)?ut(e):{});var e}(N?{}:t),!e)return function(t,e){return Nt(t,Ut(t),e)}(t,function(t,e){return t&&Nt(e,Jt(e),t)}(I,t))}else{if(!D[F])return y?t:{};I=function(t,e,r,n){var o=t.constructor;switch(e){case j:return Ft(t);case u:case a:return new o(+t);case g:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case O:case w:case m:case A:case P:case x:case S:case T:case E:return function(t,e){var r=e?Ft(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return z(e?r(L(t),!0):L(t),K,new t.constructor)}(t,n,r);case l:case v:return new o(t);case h:return function(t){var e=new t.constructor(t.source,k.exec(t));return e.lastIndex=t.lastIndex,e}(t);case b:return function(t,e,r){return z(e?r(W(t),!0):W(t),R,new t.constructor)}(t,n,r);case _:return c=t,At?Object(At.call(c)):{}}var c}(t,F,$t,e)}}d||(d=new Tt);var M=d.get(t);if(M)return M;if(d.set(t,I),!$)var B=r?function(t){return function(t,e,r){var n=e(t);return Vt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Ut)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(B||t,(function(o,c){B&&(o=t[c=o]),kt(I,c,$t(o,e,r,n,c,t,d))})),I}function Dt(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||C(t)?et:I).test(Ct(t));var e}function Ft(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Nt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;kt(r,u,void 0===a?t[u]:a)}return r}function Mt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Dt(r)?r:void 0}Pt.prototype.clear=function(){this.__data__=_t?_t(null):{}},Pt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Pt.prototype.get=function(t){var e=this.__data__;if(_t){var n=e[t];return n===r?void 0:n}return Z.call(e,t)?e[t]:void 0},Pt.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Z.call(e,t)},Pt.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?r:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=It(e,t);return!(r<0)&&(r==e.length-1?e.pop():it.call(e,r,1),!0)},xt.prototype.get=function(t){var e=this.__data__,r=It(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return It(this.__data__,t)>-1},xt.prototype.set=function(t,e){var r=this.__data__,n=It(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},St.prototype.clear=function(){this.__data__={hash:new Pt,map:new(yt||xt),string:new Pt}},St.prototype.delete=function(t){return Mt(this,t).delete(t)},St.prototype.get=function(t){return Mt(this,t).get(t)},St.prototype.has=function(t){return Mt(this,t).has(t)},St.prototype.set=function(t,e){return Mt(this,t).set(t,e),this},Tt.prototype.clear=function(){this.__data__=new xt},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof xt){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new St(n)}return r.set(t,e),this};var Ut=ft?V(ft,Object):function(){return[]},Kt=function(t){return tt.call(t)};function Rt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function Ct(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,e){return t===e||t!=t&&e!=e}(pt&&Kt(new pt(new ArrayBuffer(1)))!=g||yt&&Kt(new yt)!=s||ht&&Kt(ht.resolve())!=y||bt&&Kt(new bt)!=b||vt&&Kt(new vt)!=d)&&(Kt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Ct(r):void 0;if(n)switch(n){case dt:return g;case jt:return s;case gt:return y;case Ot:return b;case wt:return d}return e});var Vt=Array.isArray;function Wt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!qt(t)}var Gt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==i||e==f}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Wt(t)?Et(t):function(t){if(!zt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return $t(t,!0,!0)}}));var u,a,i=Object.prototype,f=Function.prototype.toString,s=i.hasOwnProperty,l=f.call(Object),p=i.toString,y=(u=Object.getPrototypeOf,a=Object,function(t){return u(a(t))});var h=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=p.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=y(t);if(null===e)return!0;var r=s.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==l};function b(t){if(t.includes(".")){var e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(var r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}t.traverse=function(t,e){return function t(e,r,o,u){var a,i=c(e),f=n({depth:-1,path:""},o);if(f.depth+=1,Array.isArray(i))for(var s=0,l=i.length;s<l&&!u.now;s++){var p=f.path?f.path+"."+s:""+s;void 0!==i[s]?(f.parent=c(i),f.parentType="array",f.parentKey=b(p),a=t(r(i[s],void 0,n(n({},f),{},{path:p}),u),r,n(n({},f),{},{path:p}),u),Number.isNaN(a)&&s<i.length?(i.splice(s,1),s-=1):i[s]=a):i.splice(s,1)}else if(h(i))for(var y in i){if(u.now&&null!=y)break;var v=f.path?f.path+"."+y:y;0===f.depth&&null!=y&&(f.topmostKey=y),f.parent=c(i),f.parentType="object",f.parentKey=b(v),a=t(r(y,i[y],n(n({},f),{},{path:v}),u),r,n(n({},f),{},{path:v}),u),Number.isNaN(a)?delete i[y]:i[y]=a}return i}(t,e,{},{now:!1})},t.version="2.0.9",Object.defineProperty(t,"__esModule",{value:!0})}));
