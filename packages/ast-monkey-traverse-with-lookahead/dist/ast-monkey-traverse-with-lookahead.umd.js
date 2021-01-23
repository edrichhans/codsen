/**
 * ast-monkey-traverse-with-lookahead
 * Utility library to traverse AST, reports upcoming values
 * Version: 2.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-monkey-traverse-with-lookahead/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astMonkeyTraverseWithLookahead={})}(this,(function(t){"use strict";function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var c=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,c="[object Arguments]",u="[object Boolean]",a="[object Date]",i="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",h="[object RegExp]",v="[object Set]",b="[object String]",_="[object Symbol]",d="[object WeakMap]",j="[object ArrayBuffer]",g="[object DataView]",O="[object Float32Array]",w="[object Float64Array]",A="[object Int8Array]",m="[object Int16Array]",x="[object Int32Array]",P="[object Uint8Array]",S="[object Uint8ClampedArray]",T="[object Uint16Array]",k="[object Uint32Array]",E=/\w*$/,$=/^\[object .+?Constructor\]$/,D=/^(?:0|[1-9]\d*)$/,F={};F[c]=F["[object Array]"]=F[j]=F[g]=F[u]=F[a]=F[O]=F[w]=F[A]=F[m]=F[x]=F[s]=F[l]=F[p]=F[h]=F[v]=F[b]=F[_]=F[P]=F[S]=F[T]=F[k]=!0,F["[object Error]"]=F[i]=F[d]=!1;var I="object"==typeof self&&self&&self.Object===Object&&self,M="object"==typeof o&&o&&o.Object===Object&&o||I||Function("return this")(),B=e&&!e.nodeType&&e,U=B&&t&&!t.nodeType&&t,L=U&&U.exports===B;function R(t,e){return t.set(e[0],e[1]),t}function W(t,e){return t.add(e),t}function z(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function C(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function G(t,e){return function(r){return t(e(r))}}function K(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var N,q=Array.prototype,H=Function.prototype,J=Object.prototype,Q=M["__core-js_shared__"],X=(N=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+N:"",Y=H.toString,Z=J.hasOwnProperty,tt=J.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=L?M.Buffer:void 0,nt=M.Symbol,ot=M.Uint8Array,ct=G(Object.getPrototypeOf,Object),ut=Object.create,at=J.propertyIsEnumerable,it=q.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=G(Object.keys,Object),pt=Ut(M,"DataView"),yt=Ut(M,"Map"),ht=Ut(M,"Promise"),vt=Ut(M,"Set"),bt=Ut(M,"WeakMap"),_t=Ut(Object,"create"),dt=Ct(pt),jt=Ct(yt),gt=Ct(ht),Ot=Ct(vt),wt=Ct(bt),At=nt?nt.prototype:void 0,mt=At?At.valueOf:void 0;function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){this.__data__=new Pt(t)}function kt(t,e){var r=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Kt(t)}(t)&&Z.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==c)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Wt(u,n))||r.push(u);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&Vt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function $t(t,e){for(var r=t.length;r--;)if(Vt(t[r][0],e))return r;return-1}function Dt(t,e,r,n,o,y,d){var $;if(n&&($=y?n(t,o,y,d):n(t)),void 0!==$)return $;if(!Ht(t))return t;var D=Gt(t);if(D){if($=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,$)}else{var I=Rt(t),M=I==i||I==f;if(Nt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(I==p||I==c||M&&!y){if(C(t))return y?t:{};if($=function(t){return"function"!=typeof t.constructor||zt(t)?{}:(e=ct(t),Ht(e)?ut(e):{});var e}(M?{}:t),!e)return function(t,e){return Mt(t,Lt(t),e)}(t,function(t,e){return t&&Mt(e,Jt(e),t)}($,t))}else{if(!F[I])return y?t:{};$=function(t,e,r,n){var o=t.constructor;switch(e){case j:return It(t);case u:case a:return new o(+t);case g:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case O:case w:case A:case m:case x:case P:case S:case T:case k:return function(t,e){var r=e?It(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return z(e?r(V(t),!0):V(t),R,new t.constructor)}(t,n,r);case l:case b:return new o(t);case h:return function(t){var e=new t.constructor(t.source,E.exec(t));return e.lastIndex=t.lastIndex,e}(t);case v:return function(t,e,r){return z(e?r(K(t),!0):K(t),W,new t.constructor)}(t,n,r);case _:return c=t,mt?Object(mt.call(c)):{}}var c}(t,I,Dt,e)}}d||(d=new Tt);var B=d.get(t);if(B)return B;if(d.set(t,$),!D)var U=r?function(t){return function(t,e,r){var n=e(t);return Gt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Jt,Lt)}(t):Jt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(U||t,(function(o,c){U&&(o=t[c=o]),Et($,c,Dt(o,e,r,n,c,t,d))})),$}function Ft(t){return!(!Ht(t)||(e=t,X&&X in e))&&(qt(t)||C(t)?et:$).test(Ct(t));var e}function It(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Mt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var u=e[o],a=n?n(r[u],t[u],u,r,t):void 0;Et(r,u,void 0===a?t[u]:a)}return r}function Bt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(r)?r:void 0}xt.prototype.clear=function(){this.__data__=_t?_t(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(_t){var n=e[t];return n===r?void 0:n}return Z.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Z.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?r:e,this},Pt.prototype.clear=function(){this.__data__=[]},Pt.prototype.delete=function(t){var e=this.__data__,r=$t(e,t);return!(r<0)&&(r==e.length-1?e.pop():it.call(e,r,1),!0)},Pt.prototype.get=function(t){var e=this.__data__,r=$t(e,t);return r<0?void 0:e[r][1]},Pt.prototype.has=function(t){return $t(this.__data__,t)>-1},Pt.prototype.set=function(t,e){var r=this.__data__,n=$t(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},St.prototype.clear=function(){this.__data__={hash:new xt,map:new(yt||Pt),string:new xt}},St.prototype.delete=function(t){return Bt(this,t).delete(t)},St.prototype.get=function(t){return Bt(this,t).get(t)},St.prototype.has=function(t){return Bt(this,t).has(t)},St.prototype.set=function(t,e){return Bt(this,t).set(t,e),this},Tt.prototype.clear=function(){this.__data__=new Pt},Tt.prototype.delete=function(t){return this.__data__.delete(t)},Tt.prototype.get=function(t){return this.__data__.get(t)},Tt.prototype.has=function(t){return this.__data__.has(t)},Tt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Pt){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new St(n)}return r.set(t,e),this};var Lt=ft?G(ft,Object):function(){return[]},Rt=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||D.test(t))&&t>-1&&t%1==0&&t<e}function zt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||J)}function Ct(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Vt(t,e){return t===e||t!=t&&e!=e}(pt&&Rt(new pt(new ArrayBuffer(1)))!=g||yt&&Rt(new yt)!=s||ht&&Rt(ht.resolve())!=y||vt&&Rt(new vt)!=v||bt&&Rt(new bt)!=d)&&(Rt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Ct(r):void 0;if(n)switch(n){case dt:return g;case jt:return s;case gt:return y;case Ot:return v;case wt:return d}return e});var Gt=Array.isArray;function Kt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!qt(t)}var Nt=st||function(){return!1};function qt(t){var e=Ht(t)?tt.call(t):"";return e==i||e==f}function Ht(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Jt(t){return Kt(t)?kt(t):function(t){if(!zt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Dt(t,!0,!0)}}));var u,a,i=Object.prototype,f=Function.prototype.toString,s=i.hasOwnProperty,l=f.call(Object),p=i.toString,y=(u=Object.getPrototypeOf,a=Object,function(t){return u(a(t))});var h=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=p.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=y(t);if(null===e)return!0;var r=s.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==l};t.traverse=function(t,e,r){function o(t){return"string"==typeof t&&"."===t[0]?t.slice(1):t}void 0===r&&(r=0);var u=[];function a(){var t=u.shift();t[2].next=[];for(var n=0;n<r&&u[n];n++)t[2].next.push(c([u[n][0],u[n][1],u[n][2]]));e.apply(void 0,t)}if(function t(e,r,u,a){if((u=n({},u)).depth+=1,Array.isArray(e))for(var i=0,f=e.length;i<f&&!a.now;i++){var s=u.path+"."+i;u.parent=c(e),u.parentType="array",r(e[i],void 0,n(n({},u),{},{path:o(s)}),a),t(e[i],r,n(n({},u),{},{path:o(s)}),a)}else if(h(e))for(var l in e){if(a.now&&null!=l)break;var p=u.path+"."+l;0===u.depth&&null!=l&&(u.topmostKey=l),u.parent=c(e),u.parentType="object",r(l,e[l],n(n({},u),{},{path:o(p)}),a),t(e[l],r,n(n({},u),{},{path:o(p)}),a)}return e}(t,(function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];u.push([].concat(e)),u.length>r&&a()}),{depth:-1,path:""},{now:!1}),u.length)for(var i=0,f=u.length;i<f;i++)a()},t.version="2.0.0",Object.defineProperty(t,"__esModule",{value:!0})}));
