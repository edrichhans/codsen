/**
 * check-types-mini
 * Check the types of your options object's values after user has customised them
 * Version: 5.7.4
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/check-types-mini
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).checkTypesMini=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=e(function(e,r){var n,o,c,a,i,u,s,f,p,l,y,h,g,v,d,b,_,m,j,w;e.exports=(n="function"==typeof Promise,o="object"==typeof self?self:t,c="undefined"!=typeof Symbol,a="undefined"!=typeof Map,i="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,p=c&&void 0!==Symbol.iterator,l=c&&void 0!==Symbol.toStringTag,y=i&&"function"==typeof Set.prototype.entries,h=a&&"function"==typeof Map.prototype.entries,g=y&&Object.getPrototypeOf((new Set).entries()),v=h&&Object.getPrototypeOf((new Map).entries()),d=p&&"function"==typeof Array.prototype[Symbol.iterator],b=d&&Object.getPrototypeOf([][Symbol.iterator]()),_=p&&"function"==typeof String.prototype[Symbol.iterator],m=_&&Object.getPrototypeOf(""[Symbol.iterator]()),j=8,w=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===l||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=l&&t[Symbol.toStringTag];if("string"==typeof r)return r;var c=Object.getPrototypeOf(t);return c===RegExp.prototype?"RegExp":c===Date.prototype?"Date":n&&c===Promise.prototype?"Promise":i&&c===Set.prototype?"Set":a&&c===Map.prototype?"Map":s&&c===WeakSet.prototype?"WeakSet":u&&c===WeakMap.prototype?"WeakMap":f&&c===DataView.prototype?"DataView":a&&c===v?"Map Iterator":i&&c===g?"Set Iterator":d&&c===b?"Array Iterator":_&&c===m?"String Iterator":null===c?"Object":Object.prototype.toString.call(t).slice(j,w)})});function n(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,c=r+(n?1:-1);n?c--:++c<o;)if(e(t[c],c,t))return c;return-1}(t,c,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function o(t,e,r,n){for(var o=r-1,c=t.length;++o<c;)if(n(t[o],e))return o;return-1}function c(t){return t!=t}var a=Array.prototype.splice;function i(t,e,r,c){var i,u=c?o:n,s=-1,f=e.length,p=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(p=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(i=r,function(t){return i(t)})));++s<f;)for(var l=0,y=e[s],h=r?r(y):y;(l=u(p,h,l,c))>-1;)p!==t&&a.call(p,l,1),a.call(t,l,1);return t}var u=function(t,e){return t&&t.length&&e&&e.length?i(t,e):t},s=e(function(e,r){var n=200,o="__lodash_hash_undefined__",c=9007199254740991,a="[object Arguments]",i="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",p="[object Map]",l="[object Number]",y="[object Object]",h="[object RegExp]",g="[object Set]",v="[object String]",d="[object Symbol]",b="[object ArrayBuffer]",_="[object DataView]",m="[object Float32Array]",j="[object Float64Array]",w="[object Int8Array]",O="[object Int16Array]",S="[object Int32Array]",A="[object Uint8Array]",k="[object Uint8ClampedArray]",T="[object Uint16Array]",E="[object Uint32Array]",P=/\w*$/,N=/^\[object .+?Constructor\]$/,M=/^(?:0|[1-9]\d*)$/,x={};x[a]=x["[object Array]"]=x[b]=x[_]=x[i]=x[u]=x[m]=x[j]=x[w]=x[O]=x[S]=x[p]=x[l]=x[y]=x[h]=x[g]=x[v]=x[d]=x[A]=x[k]=x[T]=x[E]=!0,x["[object Error]"]=x[s]=x["[object WeakMap]"]=!1;var I="object"==typeof t&&t&&t.Object===Object&&t,$="object"==typeof self&&self&&self.Object===Object&&self,L=I||$||Function("return this")(),C=r&&!r.nodeType&&r,K=C&&e&&!e.nodeType&&e,V=K&&K.exports===C;function D(t,e){return t.set(e[0],e[1]),t}function W(t,e){return t.add(e),t}function F(t,e,r,n){var o=-1,c=t?t.length:0;for(n&&c&&(r=t[++o]);++o<c;)r=e(r,t[o],o,t);return r}function J(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function H(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function R(t,e){return function(r){return t(e(r))}}function B(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var U,q=Array.prototype,z=Function.prototype,G=Object.prototype,Q=L["__core-js_shared__"],X=(U=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+U:"",Y=z.toString,Z=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=V?L.Buffer:void 0,nt=L.Symbol,ot=L.Uint8Array,ct=R(Object.getPrototypeOf,Object),at=Object.create,it=G.propertyIsEnumerable,ut=q.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,pt=R(Object.keys,Object),lt=Kt(L,"DataView"),yt=Kt(L,"Map"),ht=Kt(L,"Promise"),gt=Kt(L,"Set"),vt=Kt(L,"WeakMap"),dt=Kt(Object,"create"),bt=Jt(lt),_t=Jt(yt),mt=Jt(ht),jt=Jt(gt),wt=Jt(vt),Ot=nt?nt.prototype:void 0,St=Ot?Ot.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function kt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new kt(t)}function Pt(t,e){var r=Rt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&Z.call(t,"callee")&&(!it.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var c in t)!e&&!Z.call(t,c)||o&&("length"==c||Wt(c,n))||r.push(c);return r}function Nt(t,e,r){var n=t[e];Z.call(t,e)&&Ht(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Mt(t,e){for(var r=t.length;r--;)if(Ht(t[r][0],e))return r;return-1}function xt(t,e,r,n,o,c,N){var M;if(n&&(M=c?n(t,o,c,N):n(t)),void 0!==M)return M;if(!zt(t))return t;var I=Rt(t);if(I){if(M=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,M)}else{var $=Dt(t),L=$==s||$==f;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if($==y||$==a||L&&!c){if(J(t))return c?t:{};if(M=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=ct(t),zt(e)?at(e):{});var e}(L?{}:t),!e)return function(t,e){return Lt(t,Vt(t),e)}(t,function(t,e){return t&&Lt(e,Gt(e),t)}(M,t))}else{if(!x[$])return c?t:{};M=function(t,e,r,n){var o=t.constructor;switch(e){case b:return $t(t);case i:case u:return new o(+t);case _:return function(t,e){var r=e?$t(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case j:case w:case O:case S:case A:case k:case T:case E:return function(t,e){var r=e?$t(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case p:return function(t,e,r){return F(e?r(H(t),!0):H(t),D,new t.constructor)}(t,n,r);case l:case v:return new o(t);case h:return(s=new(a=t).constructor(a.source,P.exec(a))).lastIndex=a.lastIndex,s;case g:return function(t,e,r){return F(e?r(B(t),!0):B(t),W,new t.constructor)}(t,n,r);case d:return c=t,St?Object(St.call(c)):{}}var c;var a,s}(t,$,xt,e)}}N||(N=new Et);var C=N.get(t);if(C)return C;if(N.set(t,M),!I)var K=r?function(t){return function(t,e,r){var n=e(t);return Rt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Vt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(K||t,function(o,c){K&&(o=t[c=o]),Nt(M,c,xt(o,e,r,n,c,t,N))}),M}function It(t){return!(!zt(t)||(e=t,X&&X in e))&&(qt(t)||J(t)?et:N).test(Jt(t));var e}function $t(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Lt(t,e,r,n){r||(r={});for(var o=-1,c=e.length;++o<c;){var a=e[o],i=n?n(r[a],t[a],a,r,t):void 0;Nt(r,a,void 0===i?t[a]:i)}return r}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Kt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return It(r)?r:void 0}At.prototype.clear=function(){this.__data__=dt?dt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===o?void 0:r}return Z.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},kt.prototype.clear=function(){this.__data__=[]},kt.prototype.delete=function(t){var e=this.__data__,r=Mt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},kt.prototype.get=function(t){var e=this.__data__,r=Mt(e,t);return r<0?void 0:e[r][1]},kt.prototype.has=function(t){return Mt(this.__data__,t)>-1},kt.prototype.set=function(t,e){var r=this.__data__,n=Mt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new At,map:new(yt||kt),string:new At}},Tt.prototype.delete=function(t){return Ct(this,t).delete(t)},Tt.prototype.get=function(t){return Ct(this,t).get(t)},Tt.prototype.has=function(t){return Ct(this,t).has(t)},Tt.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new kt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof kt){var o=r.__data__;if(!yt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Vt=st?R(st,Object):function(){return[]},Dt=function(t){return tt.call(t)};function Wt(t,e){return!!(e=null==e?c:e)&&("number"==typeof t||M.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Jt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ht(t,e){return t===e||t!=t&&e!=e}(lt&&Dt(new lt(new ArrayBuffer(1)))!=_||yt&&Dt(new yt)!=p||ht&&"[object Promise]"!=Dt(ht.resolve())||gt&&Dt(new gt)!=g||vt&&"[object WeakMap]"!=Dt(new vt))&&(Dt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Jt(r):void 0;if(n)switch(n){case bt:return _;case _t:return p;case mt:return"[object Promise]";case jt:return g;case wt:return"[object WeakMap]"}return e});var Rt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=c}(t.length)&&!qt(t)}var Ut=ft||function(){return!1};function qt(t){var e=zt(t)?tt.call(t):"";return e==s||e==f}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Bt(t)?Pt(t):function(t){if(!Ft(t))return pt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return xt(t,!0,!0)}}),f="[object Object]";var p,l,y=Function.prototype,h=Object.prototype,g=y.toString,v=h.hasOwnProperty,d=g.call(Object),b=h.toString,_=(p=Object.getPrototypeOf,l=Object,function(t){return p(l(t))});var m=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||b.call(t)!=f||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=_(t);if(null===e)return!0;var r=v.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&g.call(r)==d};const j=Array.isArray;function w(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function O(t,e){return function t(e,r,n){const o=s(e);let c,a,i,u,f;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(c=0,a=o.length;c<a;c++){const e=`${n.path}.${c}`;void 0!==o[c]?(n.parent=s(o),n.parentType="array",i=t(r(o[c],void 0,Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(i)&&c<o.length?(o.splice(c,1),c-=1):o[c]=i):o.splice(c,1)}else if(m(o))for(c=0,a=(u=Object.keys(o)).length;c<a;c++){f=u[c];const e=`${n.path}.${f}`;0===n.depth&&null!=f&&(n.topmostKey=f),n.parent=s(o),n.parentType="object",i=t(r(f,o[f],Object.assign({},n,{path:w(e)})),r,Object.assign({},n,{path:w(e)})),Number.isNaN(i)?delete o[f]:o[f]=i}return o}(t,e,{})}var S="__lodash_hash_undefined__",A=9007199254740991,k="[object Function]",T="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,P="object"==typeof t&&t&&t.Object===Object&&t,N="object"==typeof self&&self&&self.Object===Object&&self,M=P||N||Function("return this")();function x(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,c=r+(n?1:-1);for(;n?c--:++c<o;)if(e(t[c],c,t))return c;return-1}(t,L,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function I(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function $(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function L(t){return t!=t}function C(t){return function(e){return t(e)}}function K(t,e){return t.has(e)}var V,D=Array.prototype,W=Function.prototype,F=Object.prototype,J=M["__core-js_shared__"],H=(V=/[^.]+$/.exec(J&&J.keys&&J.keys.IE_PROTO||""))?"Symbol(src)_1."+V:"",R=W.toString,B=F.hasOwnProperty,U=F.toString,q=RegExp("^"+R.call(B).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),z=D.splice,G=Math.max,Q=Math.min,X=it(M,"Map"),Y=it(Object,"create");function Z(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.__data__=new et;++e<r;)this.add(t[e])}function nt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function ot(t){return!(!st(t)||(e=t,H&&H in e))&&(ut(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?q:E).test(function(t){if(null!=t){try{return R.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function ct(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}(t.length)&&!ut(t)}(t)}(t)?t:[]}function at(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function it(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return ot(r)?r:void 0}function ut(t){var e=st(t)?U.call(t):"";return e==k||e==T}function st(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}Z.prototype.clear=function(){this.__data__=Y?Y(null):{}},Z.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Z.prototype.get=function(t){var e=this.__data__;if(Y){var r=e[t];return r===S?void 0:r}return B.call(e,t)?e[t]:void 0},Z.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:B.call(e,t)},Z.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?S:e,this},tt.prototype.clear=function(){this.__data__=[]},tt.prototype.delete=function(t){var e=this.__data__,r=nt(e,t);return!(r<0||(r==e.length-1?e.pop():z.call(e,r,1),0))},tt.prototype.get=function(t){var e=this.__data__,r=nt(e,t);return r<0?void 0:e[r][1]},tt.prototype.has=function(t){return nt(this.__data__,t)>-1},tt.prototype.set=function(t,e){var r=this.__data__,n=nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},et.prototype.clear=function(){this.__data__={hash:new Z,map:new(X||tt),string:new Z}},et.prototype.delete=function(t){return at(this,t).delete(t)},et.prototype.get=function(t){return at(this,t).get(t)},et.prototype.has=function(t){return at(this,t).has(t)},et.prototype.set=function(t,e){return at(this,t).set(t,e),this},rt.prototype.add=rt.prototype.push=function(t){return this.__data__.set(t,S),this},rt.prototype.has=function(t){return this.__data__.has(t)};var ft=function(t,e){return e=G(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=G(r.length-e,0),c=Array(o);++n<o;)c[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=c,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=$(t,ct);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?I:x,o=t[0].length,c=t.length,a=c,i=Array(c),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=$(f,C(e))),u=Q(f.length,u),i[a]=!r&&(e||o>=120&&f.length>=120)?new rt(a&&f):void 0}f=t[0];var p=-1,l=i[0];t:for(;++p<o&&s.length<u;){var y=f[p],h=e?e(y):y;if(y=r||0!==y?y:0,!(l?K(l,h):n(s,h,r))){for(a=c;--a;){var g=i[a];if(!(g?K(g,h):n(t[a],h,r)))continue t}l&&l.push(h),s.push(y)}}return s}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var lt=e(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function c(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function i(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(i(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(c),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var i=c(n[a]);if(!("number"==typeof i&&o(r)&&i<r.length||(t.includeInheritedProps?i in Object(r):e(r,i))))return!1;r=r[i]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var c=a.get(t,e);n=~~n,o(c)||(c=[],a.set(t,e,c)),c.splice(n,0,r)},a.empty=function(t,e){var c,u;if(!r(e)&&null!=t&&(c=a.get(t,e))){if("string"==typeof c)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(c))return a.set(t,e,!1);if("number"==typeof c)return a.set(t,e,0);if(o(c))c.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(c))return a.set(t,e,null);for(u in c)i(c,u)&&delete c[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,c=e.length;o<c;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=c(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=c(e[0]);return i(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var i=a();return i.create=a,i.withInheritedProps=a({includeInheritedProps:!0}),i}()}),yt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function ht(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+yt(t)}ht.indicator=yt;var gt=ht,vt=/[|\\{}()[\]^$+*?.]/g,dt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(vt,"\\$&")};const bt=new Map;function _t(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(bt.has(n))return bt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=dt(t).replace(/\\\*/g,".*");const c=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return c.negated=o,bt.set(n,c),c}var mt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>_t(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};return mt.isMatch=((t,e,r)=>{const n=_t(e,r),o=n.test(t);return n.negated?!o:o}),function(t,e,n){return function t(e,n,o){var c=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=Object.prototype.hasOwnProperty;function i(t){return null!=t}function s(t){return"Object"===r(t)}function f(t,e){return e=pt(e),Array.from(t).filter(function(t){return!e.some(function(e){return mt.isMatch(t,e,{caseSensitive:!0})})})}var p=["any","anything","every","everything","all","whatever","whatevs"],l=Array.isArray;if(!i(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");var y,h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};if(y=i(o)&&s(o)?Object.assign({},h,o):Object.assign({},h),i(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=pt(y.ignoreKeys):y.ignoreKeys=[],i(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=pt(y.ignorePaths):y.ignorePaths=[],i(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=pt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(function(t){if(s(y.schema[t])){var e={};O(y.schema[t],function(r,n,o){var c=void 0!==n?n:r;return l(c)||s(c)||(e["".concat(t,".").concat(o.path)]=c),c}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(function(t){l(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})})),i(n)||(n={}),c&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(i(y.schema)&&Object.keys(y.schema).length>0){if(0!==f(u(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema))),y.ignoreKeys).length){var g=u(Object.keys(e),Object.keys(n).concat(Object.keys(y.schema)));throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".enforceStrictKeyset is on and the following key").concat(g.length>1?"s":""," ").concat(g.length>1?"are":"is"," not covered by schema and/or reference objects: ").concat(g.join(", ")))}}else{if(!(i(n)&&Object.keys(n).length>0))throw new TypeError("".concat(y.msg,": Both ").concat(y.optsVarName,".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!"));if(0!==f(u(Object.keys(e),Object.keys(n)),y.ignoreKeys).length){var v=u(Object.keys(e),Object.keys(n));throw new TypeError("".concat(y.msg,": The input object has key").concat(v.length>1?"s":""," which ").concat(v.length>1?"are":"is"," not covered by the reference object: ").concat(v.join(", ")))}if(0!==f(u(Object.keys(n),Object.keys(e)),y.ignoreKeys).length){var d=u(Object.keys(n),Object.keys(e));throw new TypeError("".concat(y.msg,": The reference object has key").concat(d.length>1?"s":""," which ").concat(d.length>1?"are":"is"," not present in the input object: ").concat(d.join(", ")))}}var b=[];O(e,function(t,o,c){var i=o,u=t;if("array"===c.parentType&&(u=void 0,i=t),l(b)&&b.length&&b.some(function(t){return c.path.startsWith(t)}))return i;if(u&&y.ignoreKeys.some(function(t){return mt.isMatch(u,t)}))return i;if(y.ignorePaths.some(function(t){return mt.isMatch(c.path,t)}))return i;var f=!(!s(i)&&!l(i)&&l(c.parent)),h=!1;s(y.schema)&&a.call(y.schema,lt.get(c.path))&&(h=!0);var g=!1;if(s(n)&&lt.has(n,lt.get(c.path))&&(g=!0),y.enforceStrictKeyset&&f&&!h&&!g)throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(c.path," is neither covered by reference object (second input argument), nor ").concat(y.optsVarName,".schema! To stop this error, turn off ").concat(y.optsVarName,".enforceStrictKeyset or provide some type reference (2nd argument or ").concat(y.optsVarName,".schema).\n\nDebug info:\n\nobj = ").concat(JSON.stringify(e,null,4),"\n\nref = ").concat(JSON.stringify(n,null,4),"\n\ninnerObj = ").concat(JSON.stringify(c,null,4),"\n\nopts = ").concat(JSON.stringify(y,null,4),"\n\ncurrent = ").concat(JSON.stringify(i,null,4),"\n\n"));if(h){var v=pt(y.schema[c.path]).map(String).map(function(t){return t.toLowerCase()});if(lt.set(y.schema,c.path,v),ft(v,p).length)b.push(c.path);else if(!0!==i&&!1!==i&&!v.includes(r(i).toLowerCase())||(!0===i||!1===i)&&!v.includes(String(i))&&!v.includes("boolean")){if(!l(i)||!y.acceptArrays)throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(c.path," was customised to ").concat("string"!==r(i)?'"':"").concat(JSON.stringify(i,null,0)).concat("string"!==r(i)?'"':""," (type: ").concat(r(i).toLowerCase(),") which is not among the allowed types in schema (which is equal to ").concat(JSON.stringify(v,null,0),")"));for(var d=0,_=i.length;d<_;d++)if(!v.includes(r(i[d]).toLowerCase()))throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(c.path,".").concat(d,", the ").concat(gt(d+1)," element (equal to ").concat(JSON.stringify(i[d],null,0),") is of a type ").concat(r(i[d]).toLowerCase(),", but only the following are allowed by the ").concat(y.optsVarName,".schema: ").concat(v.join(", ")))}}else if(g){var m=lt.get(n,c.path);if(y.acceptArrays&&l(i)&&!y.acceptArraysIgnore.includes(t)){if(!i.every(function(e){return r(e).toLowerCase()===r(n[t]).toLowerCase()}))throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(c.path," was customised to be array, but not all of its elements are ").concat(r(n[t]).toLowerCase(),"-type"))}else if(r(i)!==r(m))throw new TypeError("".concat(y.msg,": ").concat(y.optsVarName,".").concat(c.path," was customised to ").concat("string"===r(i).toLowerCase()?"":'"').concat(JSON.stringify(i,null,0)).concat("string"===r(i).toLowerCase()?"":'"'," which is not ").concat(r(m).toLowerCase()," but ").concat(r(i).toLowerCase()))}return i})}(t,e,n)}});
