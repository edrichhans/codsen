/**
 * string-split-by-whitespace
 * Split string into array by chunks of whitespace
 * Version: 1.6.35
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-split-by-whitespace
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).stringSplitByWhitespace=e()}(this,function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e(function(e,r){var n,o,i,a,c,s,u,f,l,p,h,y,g,d,b,v,_,m,j,w;e.exports=(n="function"==typeof Promise,o="object"==typeof self?self:t,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,s="undefined"!=typeof WeakMap,u="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),b=l&&"function"==typeof Array.prototype[Symbol.iterator],v=b&&Object.getPrototypeOf([][Symbol.iterator]()),_=l&&"function"==typeof String.prototype[Symbol.iterator],m=_&&Object.getPrototypeOf(""[Symbol.iterator]()),j=8,w=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":u&&i===WeakSet.prototype?"WeakSet":s&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":b&&i===v?"Array Iterator":_&&i===m?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(j,w)})});function n(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,i,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function o(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function i(t){return t!=t}var a=Array.prototype.splice;function c(t,e,r,i){var c,s=i?o:n,u=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(c=r,function(t){return c(t)})));++u<f;)for(var p=0,h=e[u],y=r?r(h):h;(p=s(l,y,p,i))>-1;)l!==t&&a.call(l,p,1),a.call(t,p,1);return t}var s=function(t,e){return t&&t.length&&e&&e.length?c(t,e):t},u=e(function(e,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",s="[object Date]",u="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",v="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",k=/\w*$/,P=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,M={};M[a]=M["[object Array]"]=M[v]=M[_]=M[c]=M[s]=M[m]=M[j]=M[w]=M[O]=M[$]=M[l]=M[p]=M[h]=M[y]=M[g]=M[d]=M[b]=M[S]=M[A]=M[T]=M[E]=!0,M["[object Error]"]=M[u]=M["[object WeakMap]"]=!1;var I="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,R=I||x||Function("return this")(),L=r&&!r.nodeType&&r,C=L&&e&&!e.nodeType&&e,K=C&&C.exports===L;function V(t,e){return t.set(e[0],e[1]),t}function W(t,e){return t.add(e),t}function D(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function F(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function H(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function J(t,e){return function(r){return t(e(r))}}function B(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var U,q=Array.prototype,z=Function.prototype,G=Object.prototype,Q=R["__core-js_shared__"],X=(U=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Y=z.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=K?R.Buffer:void 0,nt=R.Symbol,ot=R.Uint8Array,it=J(Object.getPrototypeOf,Object),at=Object.create,ct=G.propertyIsEnumerable,st=q.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=J(Object.keys,Object),pt=Ct(R,"DataView"),ht=Ct(R,"Map"),yt=Ct(R,"Promise"),gt=Ct(R,"Set"),dt=Ct(R,"WeakMap"),bt=Ct(Object,"create"),vt=Ft(pt),_t=Ft(ht),mt=Ft(yt),jt=Ft(gt),wt=Ft(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new At(t)}function kt(t,e){var r=Jt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Z.call(t,i)||o&&("length"==i||Wt(i,n))||r.push(i);return r}function Pt(t,e,r){var n=t[e];Z.call(t,e)&&Ht(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Ht(t[r][0],e))return r;return-1}function Mt(t,e,r,n,o,i,P){var N;if(n&&(N=i?n(t,o,i,P):n(t)),void 0!==N)return N;if(!zt(t))return t;var I=Jt(t);if(I){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var x=Vt(t),R=x==u||x==f;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==h||x==a||R&&!i){if(F(t))return i?t:{};if(N=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(e=it(t),zt(e)?at(e):{});var e}(R?{}:t),!e)return function(t,e){return Rt(t,Kt(t),e)}(t,function(t,e){return t&&Rt(e,Gt(e),t)}(N,t))}else{if(!M[x])return i?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case v:return xt(t);case c:case s:return new o(+t);case _:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case j:case w:case O:case $:case S:case A:case T:case E:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return D(e?r(H(t),!0):H(t),V,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(u=new(a=t).constructor(a.source,k.exec(a))).lastIndex=a.lastIndex,u;case g:return function(t,e,r){return D(e?r(B(t),!0):B(t),W,new t.constructor)}(t,n,r);case b:return i=t,$t?Object($t.call(i)):{}}var i;var a,u}(t,x,Mt,e)}}P||(P=new Et);var L=P.get(t);if(L)return L;if(P.set(t,N),!I)var C=r?function(t){return function(t,e,r){var n=e(t);return Jt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Kt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,function(o,i){C&&(o=t[i=o]),Pt(N,i,Mt(o,e,r,n,i,t,P))}),N}function It(t){return!(!zt(t)||(e=t,X&&X in e))&&(qt(t)||F(t)?et:P).test(Ft(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Rt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Pt(r,a,void 0===c?t[a]:c)}return r}function Lt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}St.prototype.clear=function(){this.__data__=bt?bt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0||(r==e.length-1?e.pop():st.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Nt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new St,map:new(ht||At),string:new St}},Tt.prototype.delete=function(t){return Lt(this,t).delete(t)},Tt.prototype.get=function(t){return Lt(this,t).get(t)},Tt.prototype.has=function(t){return Lt(this,t).has(t)},Tt.prototype.set=function(t,e){return Lt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new At},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof At){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Kt=ut?J(ut,Object):function(){return[]},Vt=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Dt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Ft(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ht(t,e){return t===e||t!=t&&e!=e}(pt&&Vt(new pt(new ArrayBuffer(1)))!=_||ht&&Vt(new ht)!=l||yt&&"[object Promise]"!=Vt(yt.resolve())||gt&&Vt(new gt)!=g||dt&&"[object WeakMap]"!=Vt(new dt))&&(Vt=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Ft(r):void 0;if(n)switch(n){case vt:return _;case _t:return l;case mt:return"[object Promise]";case jt:return g;case wt:return"[object WeakMap]"}return e});var Jt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!qt(t)}var Ut=ft||function(){return!1};function qt(t){var e=zt(t)?tt.call(t):"";return e==u||e==f}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Bt(t)?kt(t):function(t){if(!Dt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return Mt(t,!0,!0)}}),f="[object Object]";var l,p,h=Function.prototype,y=Object.prototype,g=h.toString,d=y.hasOwnProperty,b=g.call(Object),v=y.toString,_=(l=Object.getPrototypeOf,p=Object,function(t){return l(p(t))});var m=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||v.call(t)!=f||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=_(t);if(null===e)return!0;var r=d.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&g.call(r)==b};const j=Array.isArray;function w(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function O(t,e){return function t(e,r,n){const o=u(e);let i,a,c,s,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=u(o),n.parentType="array",c=t(r(o[i],void 0,Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(m(o))for(i=0,a=(s=Object.keys(o)).length;i<a;i++){f=s[i];const e=`${n.path}.${f}`;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=u(o),n.parentType="object",c=t(r(f,o[f],Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(c)?delete o[f]:o[f]=c}return o}(t,e,{})}var $="__lodash_hash_undefined__",S=9007199254740991,A="[object Function]",T="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,k="object"==typeof t&&t&&t.Object===Object&&t,P="object"==typeof self&&self&&self.Object===Object&&self,N=k||P||Function("return this")();function M(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}function I(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,L,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function x(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function R(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function L(t){return t!=t}function C(t){return function(e){return t(e)}}function K(t,e){return t.has(e)}var V,W=Array.prototype,D=Function.prototype,F=Object.prototype,H=N["__core-js_shared__"],J=(V=/[^.]+$/.exec(H&&H.keys&&H.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",B=D.toString,U=F.hasOwnProperty,q=F.toString,z=RegExp("^"+B.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=W.splice,Q=Math.max,X=Math.min,Y=st(N,"Map"),Z=st(Object,"create");function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.__data__=new rt;++e<r;)this.add(t[e])}function ot(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function it(t){return!(!ft(t)||function(t){return!!J&&J in t}(t))&&(ut(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?z:E).test(function(t){if(null!=t){try{return B.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=S}(t.length)&&!ut(t)}(t)}(t)?t:[]}function ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function st(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return it(r)?r:void 0}function ut(t){var e=ft(t)?q.call(t):"";return e==A||e==T}function ft(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}tt.prototype.clear=function(){this.__data__=Z?Z(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var e=this.__data__;if(Z){var r=e[t];return r===$?void 0:r}return U.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return Z?void 0!==e[t]:U.call(e,t)},tt.prototype.set=function(t,e){return this.__data__[t]=Z&&void 0===e?$:e,this},et.prototype.clear=function(){this.__data__=[]},et.prototype.delete=function(t){var e=this.__data__,r=ot(e,t);return!(r<0||(r==e.length-1?e.pop():G.call(e,r,1),0))},et.prototype.get=function(t){var e=this.__data__,r=ot(e,t);return r<0?void 0:e[r][1]},et.prototype.has=function(t){return ot(this.__data__,t)>-1},et.prototype.set=function(t,e){var r=this.__data__,n=ot(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},rt.prototype.clear=function(){this.__data__={hash:new tt,map:new(Y||et),string:new tt}},rt.prototype.delete=function(t){return ct(this,t).delete(t)},rt.prototype.get=function(t){return ct(this,t).get(t)},rt.prototype.has=function(t){return ct(this,t).has(t)},rt.prototype.set=function(t,e){return ct(this,t).set(t,e),this},nt.prototype.add=nt.prototype.push=function(t){return this.__data__.set(t,$),this},nt.prototype.has=function(t){return this.__data__.has(t)};var lt=function(t,e){return e=Q(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=Q(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,M(t,this,a)}}(function(t){var e=R(t,at);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?x:I,o=t[0].length,i=t.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=t[a];a&&e&&(f=R(f,C(e))),s=X(f.length,s),c[a]=!r&&(e||o>=120&&f.length>=120)?new nt(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&u.length<s;){var h=f[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?K(p,y):n(u,y,r))){for(a=i;--a;){var g=c[a];if(!(g?K(g,y):n(t[a],y,r)))continue t}p&&p.push(y),u.push(h)}}return u}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var ht=e(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function s(t,e){if(c(t,e))return t[e]}function u(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return u(t,e.split(".").map(i),r,n);var o=e[0],a=s(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),u(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return u(t,e,r,!0)},a.set=function(t,e,r,n){return u(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,s;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(s in i)c(i,s)&&delete i[s]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=s(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),yt=function(t){var e=(t=Math.abs(t))%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function gt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return Number.isFinite(t)?t+yt(t):t}gt.indicator=yt;var dt=gt;const bt=/[|\\{}()[\]^$+*?.-]/g;var vt=t=>{if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(bt,"\\$&")};const _t=new Map;function mt(t,e){e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(_t.has(r))return _t.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=vt(t).replace(/\\\*/g,".*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,_t.set(r,o),o}var jt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>mt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function wt(t,e,n){return function t(e,n,o,i=!0){const a=Object.prototype.hasOwnProperty;function c(t){return null!=t}function u(t){return"Object"===r(t)}function f(t,e){return e=pt(e),Array.from(t).filter(t=>!e.some(e=>jt.isMatch(t,e,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=c(o)&&u(o)?Object.assign({},h,o):Object.assign({},h),c(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=pt(y.ignoreKeys):y.ignoreKeys=[],c(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=pt(y.ignorePaths):y.ignorePaths=[],c(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=pt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(u(y.schema[t])){const e={};O(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),c(n)||(n={}),i&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(c(y.schema)&&Object.keys(y.schema).length>0){if(0!==f(s(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=s(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(c(n)&&Object.keys(n).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==f(s(Object.keys(e),Object.keys(n)),y.ignoreKeys).length){const t=s(Object.keys(e),Object.keys(n));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==f(s(Object.keys(n),Object.keys(e)),y.ignoreKeys).length){const t=s(Object.keys(n),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];O(e,(t,o,i)=>{let c=o,s=t;if("array"===i.parentType&&(s=void 0,c=t),p(g)&&g.length&&g.some(t=>i.path.startsWith(t)))return c;if(s&&y.ignoreKeys.some(t=>jt.isMatch(s,t)))return c;if(y.ignorePaths.some(t=>jt.isMatch(i.path,t)))return c;const f=!(!u(c)&&!p(c)&&p(i.parent));let h=!1;u(y.schema)&&a.call(y.schema,ht.get(i.path))&&(h=!0);let d=!1;if(u(n)&&ht.has(n,ht.get(i.path))&&(d=!0),y.enforceStrictKeyset&&f&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(n,null,4)}\n\ninnerObj = ${JSON.stringify(i,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(c,null,4)}\n\n`);if(h){const t=pt(y.schema[i.path]).map(String).map(t=>t.toLowerCase());if(ht.set(y.schema,i.path,t),lt(t,l).length)g.push(i.path);else if(!0!==c&&!1!==c&&!t.includes(r(c).toLowerCase())||(!0===c||!1===c)&&!t.includes(String(c))&&!t.includes("boolean")){if(!p(c)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"!==r(c)?'"':""}${JSON.stringify(c,null,0)}${"string"!==r(c)?'"':""} (type: ${r(c).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,n=c.length;e<n;e++)if(!t.includes(r(c[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path}.${e}, the ${dt(e+1)} element (equal to ${JSON.stringify(c[e],null,0)}) is of a type ${r(c[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=ht.get(n,i.path);if(y.acceptArrays&&p(c)&&!y.acceptArraysIgnore.includes(t)){if(!c.every(e=>r(e).toLowerCase()===r(n[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to be array, but not all of its elements are ${r(n[t]).toLowerCase()}-type`)}else if(r(c)!==r(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"===r(c).toLowerCase()?"":'"'}${JSON.stringify(c,null,0)}${"string"===r(c).toLowerCase()?"":'"'} which is not ${r(e).toLowerCase()} but ${r(c).toLowerCase()}`)}return c})}(t,e,n)}jt.isMatch=(t,e,r)=>{const n=mt(e,r),o=n.test(t);return n.negated?!o:o};const Ot=Array.isArray;function $t(t,e,r){const n=Object.assign(Object.assign({},{inclusiveRangeEnds:!1,returnMatchedRangeInsteadOfTrue:!1}),r);return!!Ot(e)&&(n.returnMatchedRangeInsteadOfTrue?e.find(e=>n.inclusiveRangeEnds?t>=e[0]&&t<=e[1]:t>e[0]&&t<e[1])||!1:e.some(e=>n.inclusiveRangeEnds?t>=e[0]&&t<=e[1]:t>e[0]&&t<e[1]))}return function(t,e){if(void 0===t)throw new Error("string-split-by-whitespace: [THROW_ID_01] The input is missing!");if("string"!=typeof t)return t;if(""===t.trim())return[];var r={ignoreRanges:[]},n=Object.assign({},r,e);if(wt(n,r,{msg:"string-split-by-whitespace: [THROW_ID_02*]",ignorePaths:["ignoreRanges.*"]}),n.ignoreRanges.length>0&&!n.ignoreRanges.every(function(t){return Array.isArray(t)}))throw new Error("string-split-by-whitespace: [THROW_ID_03] The opts.ignoreRanges contains elements which are not arrays!");for(var o=null,i=[],a=0,c=t.length;a<c;a++)null!==o||""===t[a].trim()||0!==n.ignoreRanges.length&&(0===n.ignoreRanges.length||$t(a,n.ignoreRanges.map(function(t){return[t[0],t[1]-1]}),{inclusiveRangeEnds:!0}))||(o=a),null!==o&&(""===t[a].trim()?(i.push(t.slice(o,a)),o=null):n.ignoreRanges.length&&$t(a,n.ignoreRanges)?(i.push(t.slice(o,a-1)),o=null):void 0===t[a+1]&&i.push(t.slice(o,a+1)));return i}});
