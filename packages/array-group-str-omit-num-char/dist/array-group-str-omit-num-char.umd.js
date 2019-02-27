/**
 * array-group-str-omit-num-char
 * Groups array of strings by omitting number characters
 * Version: 1.3.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-group-str-omit-num-char
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).arrayGroupStrOmitNumChar=e()}(this,function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function r(t,e){return t(e={exports:{}},e.exports),e.exports}var n=r(function(t,r){var n,o,i,a,c,u,s,f,l,p,h,y,g,d,_,b,v,m,w,j;t.exports=(n="function"==typeof Promise,o="object"==typeof self?self:e,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=h&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),_=l&&"function"==typeof Array.prototype[Symbol.iterator],b=_&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],m=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(t){var e=typeof t;if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&t===window.location)return"Location";if("object"==typeof window.document&&t===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":_&&i===b?"Array Iterator":v&&i===m?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(w,j)})});function o(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,a,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function i(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function a(t){return t!=t}var c=Array.prototype.splice;function u(t,e,r,n){var a,u=n?i:o,s=-1,f=e.length,l=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(l=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(a=r,function(t){return a(t)})));++s<f;)for(var p=0,h=e[s],y=r?r(h):h;(p=u(l,y,p,n))>-1;)l!==t&&c.call(l,p,1),c.call(t,p,1);return t}var s=function(t,e){return t&&t.length&&e&&e.length?u(t,e):t},f=r(function(t,r){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",_="[object Symbol]",b="[object ArrayBuffer]",v="[object DataView]",m="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",T="[object Uint16Array]",W="[object Uint32Array]",E=/\w*$/,I=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,k={};k[a]=k["[object Array]"]=k[b]=k[v]=k[c]=k[u]=k[m]=k[w]=k[j]=k[O]=k[$]=k[l]=k[p]=k[h]=k[y]=k[g]=k[d]=k[_]=k[S]=k[A]=k[T]=k[W]=!0,k["[object Error]"]=k[s]=k["[object WeakMap]"]=!1;var x="object"==typeof e&&e&&e.Object===Object&&e,P="object"==typeof self&&self&&self.Object===Object&&self,M=x||P||Function("return this")(),R=r&&!r.nodeType&&r,C=R&&t&&!t.nodeType&&t,D=C&&C.exports===R;function H(t,e){return t.set(e[0],e[1]),t}function L(t,e){return t.add(e),t}function F(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function J(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function Z(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function K(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var q,B=Array.prototype,U=Function.prototype,G=Object.prototype,z=M["__core-js_shared__"],Q=(q=/[^.]+$/.exec(z&&z.keys&&z.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=U.toString,Y=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=D?M.Buffer:void 0,nt=M.Symbol,ot=M.Uint8Array,it=K(Object.getPrototypeOf,Object),at=Object.create,ct=G.propertyIsEnumerable,ut=B.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=K(Object.keys,Object),pt=Ct(M,"DataView"),ht=Ct(M,"Map"),yt=Ct(M,"Promise"),gt=Ct(M,"Set"),dt=Ct(M,"WeakMap"),_t=Ct(Object,"create"),bt=Jt(pt),vt=Jt(ht),mt=Jt(yt),wt=Jt(gt),jt=Jt(dt),Ot=nt?nt.prototype:void 0,$t=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Wt(t){this.__data__=new At(t)}function Et(t,e){var r=Kt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Y.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==a)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!Y.call(t,i)||o&&("length"==i||Lt(i,n))||r.push(i);return r}function It(t,e,r){var n=t[e];Y.call(t,e)&&Zt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Nt(t,e){for(var r=t.length;r--;)if(Zt(t[r][0],e))return r;return-1}function kt(t,e,r,n,o,i,I){var N;if(n&&(N=i?n(t,o,i,I):n(t)),void 0!==N)return N;if(!Ut(t))return t;var x=Kt(t);if(x){if(N=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,N)}else{var P=Ht(t),M=P==s||P==f;if(qt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(P==h||P==a||M&&!i){if(J(t))return i?t:{};if(N=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=it(t),Ut(e)?at(e):{});var e}(M?{}:t),!e)return function(t,e){return Mt(t,Dt(t),e)}(t,function(t,e){return t&&Mt(e,Gt(e),t)}(N,t))}else{if(!k[P])return i?t:{};N=function(t,e,r,n){var o=t.constructor;switch(e){case b:return Pt(t);case c:case u:return new o(+t);case v:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case m:case w:case j:case O:case $:case S:case A:case T:case W:return function(t,e){var r=e?Pt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return F(e?r(Z(t),!0):Z(t),H,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(s=new(a=t).constructor(a.source,E.exec(a))).lastIndex=a.lastIndex,s;case g:return function(t,e,r){return F(e?r(V(t),!0):V(t),L,new t.constructor)}(t,n,r);case _:return i=t,$t?Object($t.call(i)):{}}var i;var a,s}(t,P,kt,e)}}I||(I=new Wt);var R=I.get(t);if(R)return R;if(I.set(t,N),!x)var C=r?function(t){return function(t,e,r){var n=e(t);return Kt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Dt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(C||t,function(o,i){C&&(o=t[i=o]),It(N,i,kt(o,e,r,n,i,t,I))}),N}function xt(t){return!(!Ut(t)||(e=t,Q&&Q in e))&&(Bt(t)||J(t)?et:I).test(Jt(t));var e}function Pt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Mt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;It(r,a,void 0===c?t[a]:c)}return r}function Rt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return xt(r)?r:void 0}St.prototype.clear=function(){this.__data__=_t?_t(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(_t){var r=e[t];return r===o?void 0:r}return Y.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return _t?void 0!==e[t]:Y.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=_t&&void 0===e?o:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Nt(e,t);return!(r<0||(r==e.length-1?e.pop():ut.call(e,r,1),0))},At.prototype.get=function(t){var e=this.__data__,r=Nt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Nt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Nt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Tt.prototype.clear=function(){this.__data__={hash:new St,map:new(ht||At),string:new St}},Tt.prototype.delete=function(t){return Rt(this,t).delete(t)},Tt.prototype.get=function(t){return Rt(this,t).get(t)},Tt.prototype.has=function(t){return Rt(this,t).has(t)},Tt.prototype.set=function(t,e){return Rt(this,t).set(t,e),this},Wt.prototype.clear=function(){this.__data__=new At},Wt.prototype.delete=function(t){return this.__data__.delete(t)},Wt.prototype.get=function(t){return this.__data__.get(t)},Wt.prototype.has=function(t){return this.__data__.has(t)},Wt.prototype.set=function(t,e){var r=this.__data__;if(r instanceof At){var o=r.__data__;if(!ht||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new Tt(o)}return r.set(t,e),this};var Dt=st?K(st,Object):function(){return[]},Ht=function(t){return tt.call(t)};function Lt(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Jt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Zt(t,e){return t===e||t!=t&&e!=e}(pt&&Ht(new pt(new ArrayBuffer(1)))!=v||ht&&Ht(new ht)!=l||yt&&"[object Promise]"!=Ht(yt.resolve())||gt&&Ht(new gt)!=g||dt&&"[object WeakMap]"!=Ht(new dt))&&(Ht=function(t){var e=tt.call(t),r=e==h?t.constructor:void 0,n=r?Jt(r):void 0;if(n)switch(n){case bt:return v;case vt:return l;case mt:return"[object Promise]";case wt:return g;case jt:return"[object WeakMap]"}return e});var Kt=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=i}(t.length)&&!Bt(t)}var qt=ft||function(){return!1};function Bt(t){var e=Ut(t)?tt.call(t):"";return e==s||e==f}function Ut(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Vt(t)?Et(t):function(t){if(!Ft(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return kt(t,!0,!0)}}),l="[object Object]";var p,h,y=Function.prototype,g=Object.prototype,d=y.toString,_=g.hasOwnProperty,b=d.call(Object),v=g.toString,m=(p=Object.getPrototypeOf,h=Object,function(t){return p(h(t))});var w=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||v.call(t)!=l||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=m(t);if(null===e)return!0;var r=_.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&d.call(r)==b};const j=Array.isArray;function O(t){return"string"==typeof t&&t.length>0&&"."===t[0]?t.slice(1):t}function $(t,e){return function t(e,r,n){const o=f(e);let i,a,c,u,s;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,j(o))for(i=0,a=o.length;i<a;i++){const e=`${n.path}.${i}`;void 0!==o[i]?(n.parent=f(o),n.parentType="array",c=t(r(o[i],void 0,Object.assign({},n,{path:O(e)})),r,Object.assign({},n,{path:O(e)})),Number.isNaN(c)&&i<o.length?(o.splice(i,1),i-=1):o[i]=c):o.splice(i,1)}else if(w(o))for(i=0,a=(u=Object.keys(o)).length;i<a;i++){s=u[i];const e=`${n.path}.${s}`;0===n.depth&&null!=s&&(n.topmostKey=s),n.parent=f(o),n.parentType="object",c=t(r(s,o[s],Object.assign({},n,{path:O(e)})),r,Object.assign({},n,{path:O(e)})),Number.isNaN(c)?delete o[s]:o[s]=c}return o}(t,e,{})}var S="__lodash_hash_undefined__",A=9007199254740991,T="[object Function]",W="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,I="object"==typeof e&&e&&e.Object===Object&&e,N="object"==typeof self&&self&&self.Object===Object&&self,k=I||N||Function("return this")();function x(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,R,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function P(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function M(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function R(t){return t!=t}function C(t){return function(e){return t(e)}}function D(t,e){return t.has(e)}var H,L=Array.prototype,F=Function.prototype,J=Object.prototype,Z=k["__core-js_shared__"],K=(H=/[^.]+$/.exec(Z&&Z.keys&&Z.keys.IE_PROTO||""))?"Symbol(src)_1."+H:"",V=F.toString,q=J.hasOwnProperty,B=J.toString,U=RegExp("^"+V.call(q).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),G=L.splice,z=Math.max,Q=Math.min,X=ut(k,"Map"),Y=ut(Object,"create");function tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=t?t.length:0;for(this.__data__=new rt;++e<r;)this.add(t[e])}function ot(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function it(t){return!(!ft(t)||(e=t,K&&K in e))&&(st(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?U:E).test(function(t){if(null!=t){try{return V.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}function at(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=A}(t.length)&&!st(t)}(t)}(t)?t:[]}function ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ut(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return it(r)?r:void 0}function st(t){var e=ft(t)?B.call(t):"";return e==T||e==W}function ft(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}tt.prototype.clear=function(){this.__data__=Y?Y(null):{}},tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},tt.prototype.get=function(t){var e=this.__data__;if(Y){var r=e[t];return r===S?void 0:r}return q.call(e,t)?e[t]:void 0},tt.prototype.has=function(t){var e=this.__data__;return Y?void 0!==e[t]:q.call(e,t)},tt.prototype.set=function(t,e){return this.__data__[t]=Y&&void 0===e?S:e,this},et.prototype.clear=function(){this.__data__=[]},et.prototype.delete=function(t){var e=this.__data__,r=ot(e,t);return!(r<0||(r==e.length-1?e.pop():G.call(e,r,1),0))},et.prototype.get=function(t){var e=this.__data__,r=ot(e,t);return r<0?void 0:e[r][1]},et.prototype.has=function(t){return ot(this.__data__,t)>-1},et.prototype.set=function(t,e){var r=this.__data__,n=ot(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},rt.prototype.clear=function(){this.__data__={hash:new tt,map:new(X||et),string:new tt}},rt.prototype.delete=function(t){return ct(this,t).delete(t)},rt.prototype.get=function(t){return ct(this,t).get(t)},rt.prototype.has=function(t){return ct(this,t).has(t)},rt.prototype.set=function(t,e){return ct(this,t).set(t,e),this},nt.prototype.add=nt.prototype.push=function(t){return this.__data__.set(t,S),this},nt.prototype.has=function(t){return this.__data__.has(t)};var lt=function(t,e){return e=z(void 0===e?t.length-1:e,0),function(){for(var r=arguments,n=-1,o=z(r.length-e,0),i=Array(o);++n<o;)i[n]=r[e+n];n=-1;for(var a=Array(e+1);++n<e;)a[n]=r[n];return a[e]=i,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(t,this,a)}}(function(t){var e=M(t,at);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?P:x,o=t[0].length,i=t.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=t[a];a&&e&&(f=M(f,C(e))),u=Q(f.length,u),c[a]=!r&&(e||o>=120&&f.length>=120)?new nt(a&&f):void 0}f=t[0];var l=-1,p=c[0];t:for(;++l<o&&s.length<u;){var h=f[l],y=e?e(h):h;if(h=r||0!==h?h:0,!(p?D(p,y):n(s,y,r))){for(a=i;--a;){var g=c[a];if(!(g?D(g,y):n(t[a],y,r)))continue t}p&&p.push(y),s.push(h)}}return s}(e):[]});function pt(t){return"string"==typeof t?t.length>0?[t]:[]:t}var ht=r(function(t){t.exports=function(){var t=Object.prototype.toString;function e(t,e){return null!=t&&Object.prototype.hasOwnProperty.call(t,e)}function r(t){if(!t)return!0;if(o(t)&&0===t.length)return!0;if("string"!=typeof t){for(var r in t)if(e(t,r))return!1;return!0}return!1}function n(e){return t.call(e)}var o=Array.isArray||function(e){return"[object Array]"===t.call(e)};function i(t){var e=parseInt(t);return e.toString()===t?e:t}function a(t){t=t||{};var a=function(t){return Object.keys(a).reduce(function(e,r){return"create"===r?e:("function"==typeof a[r]&&(e[r]=a[r].bind(a,t)),e)},{})};function c(r,n){return t.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||e(r,n)}function u(t,e){if(c(t,e))return t[e]}function s(t,e,r,n){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if("string"==typeof e)return s(t,e.split(".").map(i),r,n);var o=e[0],a=u(t,o);return 1===e.length?(void 0!==a&&n||(t[o]=r),a):(void 0===a&&("number"==typeof e[1]?t[o]=[]:t[o]={}),s(t[o],e.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(t.includeInheritedProps?c in Object(r):e(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(t,e,r){return s(t,e,r,!0)},a.set=function(t,e,r,n){return s(t,e,r,n)},a.insert=function(t,e,r,n){var i=a.get(t,e);n=~~n,o(i)||(i=[],a.set(t,e,i)),i.splice(n,0,r)},a.empty=function(t,e){var i,u;if(!r(e)&&null!=t&&(i=a.get(t,e))){if("string"==typeof i)return a.set(t,e,"");if(function(t){return"boolean"==typeof t||"[object Boolean]"===n(t)}(i))return a.set(t,e,!1);if("number"==typeof i)return a.set(t,e,0);if(o(i))i.length=0;else{if(!function(t){return"object"==typeof t&&"[object Object]"===n(t)}(i))return a.set(t,e,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(t,e){var r=a.get(t,e);o(r)||(r=[],a.set(t,e,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(t,e,r){for(var n,o=0,i=e.length;o<i;o++)if(void 0!==(n=a.get(t,e[o])))return n;return r},a.get=function(t,e,r){if("number"==typeof e&&(e=[e]),!e||0===e.length)return t;if(null==t)return r;if("string"==typeof e)return a.get(t,e.split("."),r);var n=i(e[0]),o=u(t,n);return void 0===o?r:1===e.length?o:a.get(t[n],e.slice(1),r)},a.del=function(t,e){if("number"==typeof e&&(e=[e]),null==t)return t;if(r(e))return t;if("string"==typeof e)return a.del(t,e.split("."));var n=i(e[0]);return c(t,n)?1!==e.length?a.del(t[n],e.slice(1)):(o(t)?t.splice(n,1):delete t[n],t):t},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}),yt=function(t){var e=t%100;if(e>=10&&e<=20)return"th";var r=t%10;return 1===r?"st":2===r?"nd":3===r?"rd":"th"};function gt(t){if("number"!=typeof t)throw new TypeError("Expected Number, got "+typeof t+" "+t);return t+yt(t)}gt.indicator=yt;var dt=gt,_t=/[|\\{}()[\]^$+*?.]/g,bt=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(_t,"\\$&")};const vt=new Map;function mt(t,e){const r=Object.assign({caseSensitive:!1},e),n=t+JSON.stringify(r);if(vt.has(n))return vt.get(n);const o="!"===t[0];o&&(t=t.slice(1)),t=bt(t).replace(/\\\*/g,".*");const i=new RegExp(`^${t}$`,r.caseSensitive?"":"i");return i.negated=o,vt.set(n,i),i}var wt=(t,e,r)=>{if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError(`Expected two arrays, got ${typeof t} ${typeof e}`);if(0===e.length)return t;const n="!"===e[0][0];e=e.map(t=>mt(t,r));const o=[];for(const r of t){let t=n;for(const n of e)n.test(r)&&(t=!n.negated);t&&o.push(r)}return o};function jt(t,e,r){return function t(e,r,o,i=!0){const a=Object.prototype.hasOwnProperty;function c(t){return null!=t}function u(t){return"Object"===n(t)}function f(t,e){return e=pt(e),Array.from(t).filter(t=>!e.some(e=>wt.isMatch(t,e,{caseSensitive:!0})))}const l=["any","anything","every","everything","all","whatever","whatevs"],p=Array.isArray;if(!c(e))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const h={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let y;if(y=c(o)&&u(o)?Object.assign({},h,o):Object.assign({},h),c(y.ignoreKeys)&&y.ignoreKeys?y.ignoreKeys=pt(y.ignoreKeys):y.ignoreKeys=[],c(y.ignorePaths)&&y.ignorePaths?y.ignorePaths=pt(y.ignorePaths):y.ignorePaths=[],c(y.acceptArraysIgnore)&&y.acceptArraysIgnore?y.acceptArraysIgnore=pt(y.acceptArraysIgnore):y.acceptArraysIgnore=[],y.msg="string"==typeof y.msg?y.msg.trim():y.msg,":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1).trim()),y.schema&&(Object.keys(y.schema).forEach(t=>{if(u(y.schema[t])){const e={};$(y.schema[t],(r,n,o)=>{const i=void 0!==n?n:r;return p(i)||u(i)||(e[`${t}.${o.path}`]=i),i}),delete y.schema[t],y.schema=Object.assign(y.schema,e)}}),Object.keys(y.schema).forEach(t=>{p(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(t=>t.toLowerCase()).map(t=>t.trim())})),c(r)||(r={}),i&&t(y,h,{enforceStrictKeyset:!1},!1),y.enforceStrictKeyset)if(c(y.schema)&&Object.keys(y.schema).length>0){if(0!==f(s(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema))),y.ignoreKeys).length){const t=s(Object.keys(e),Object.keys(r).concat(Object.keys(y.schema)));throw new TypeError(`${y.msg}: ${y.optsVarName}.enforceStrictKeyset is on and the following key${t.length>1?"s":""} ${t.length>1?"are":"is"} not covered by schema and/or reference objects: ${t.join(", ")}`)}}else{if(!(c(r)&&Object.keys(r).length>0))throw new TypeError(`${y.msg}: Both ${y.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==f(s(Object.keys(e),Object.keys(r)),y.ignoreKeys).length){const t=s(Object.keys(e),Object.keys(r));throw new TypeError(`${y.msg}: The input object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not covered by the reference object: ${t.join(", ")}`)}if(0!==f(s(Object.keys(r),Object.keys(e)),y.ignoreKeys).length){const t=s(Object.keys(r),Object.keys(e));throw new TypeError(`${y.msg}: The reference object has key${t.length>1?"s":""} which ${t.length>1?"are":"is"} not present in the input object: ${t.join(", ")}`)}}const g=[];$(e,(t,o,i)=>{let c=o,s=t;if("array"===i.parentType&&(s=void 0,c=t),p(g)&&g.length&&g.some(t=>i.path.startsWith(t)))return c;if(s&&y.ignoreKeys.some(t=>wt.isMatch(s,t)))return c;if(y.ignorePaths.some(t=>wt.isMatch(i.path,t)))return c;const f=!(!u(c)&&!p(c)&&p(i.parent));let h=!1;u(y.schema)&&a.call(y.schema,ht.get(i.path))&&(h=!0);let d=!1;if(u(r)&&ht.has(r,ht.get(i.path))&&(d=!0),y.enforceStrictKeyset&&f&&!h&&!d)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} is neither covered by reference object (second input argument), nor ${y.optsVarName}.schema! To stop this error, turn off ${y.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${y.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(e,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(i,null,4)}\n\nopts = ${JSON.stringify(y,null,4)}\n\ncurrent = ${JSON.stringify(c,null,4)}\n\n`);if(h){const t=pt(y.schema[i.path]).map(String).map(t=>t.toLowerCase());if(ht.set(y.schema,i.path,t),lt(t,l).length)g.push(i.path);else if(!0!==c&&!1!==c&&!t.includes(n(c).toLowerCase())||(!0===c||!1===c)&&!t.includes(String(c))&&!t.includes("boolean")){if(!p(c)||!y.acceptArrays)throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"!==n(c)?'"':""}${JSON.stringify(c,null,0)}${"string"!==n(c)?'"':""} (type: ${n(c).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(t,null,0)})`);for(let e=0,r=c.length;e<r;e++)if(!t.includes(n(c[e]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path}.${e}, the ${dt(e+1)} element (equal to ${JSON.stringify(c[e],null,0)}) is of a type ${n(c[e]).toLowerCase()}, but only the following are allowed by the ${y.optsVarName}.schema: ${t.join(", ")}`)}}else if(d){const e=ht.get(r,i.path);if(y.acceptArrays&&p(c)&&!y.acceptArraysIgnore.includes(t)){if(!c.every(e=>n(e).toLowerCase()===n(r[t]).toLowerCase()))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to be array, but not all of its elements are ${n(r[t]).toLowerCase()}-type`)}else if(n(c)!==n(e))throw new TypeError(`${y.msg}: ${y.optsVarName}.${i.path} was customised to ${"string"===n(c).toLowerCase()?"":'"'}${JSON.stringify(c,null,0)}${"string"===n(c).toLowerCase()?"":'"'} which is not ${n(e).toLowerCase()} but ${n(c).toLowerCase()}`)}return c})}(t,e,r)}wt.isMatch=((t,e,r)=>{const n=mt(e,r),o=n.test(t);return n.negated?!o:o});var Ot=200,$t="__lodash_hash_undefined__",St="[object Function]",At="[object GeneratorFunction]",Tt=/^\[object .+?Constructor\]$/,Wt="object"==typeof e&&e&&e.Object===Object&&e,Et="object"==typeof self&&self&&self.Object===Object&&self,It=Wt||Et||Function("return this")();function Nt(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,xt,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function kt(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function xt(t){return t!=t}function Pt(t,e){return t.has(e)}function Mt(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var Rt=Array.prototype,Ct=Function.prototype,Dt=Object.prototype,Ht=It["__core-js_shared__"],Lt=function(){var t=/[^.]+$/.exec(Ht&&Ht.keys&&Ht.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Ft=Ct.toString,Jt=Dt.hasOwnProperty,Zt=Dt.toString,Kt=RegExp("^"+Ft.call(Jt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Vt=Rt.splice,qt=ne(It,"Map"),Bt=ne(It,"Set"),Ut=ne(Object,"create");function Gt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function zt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Qt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Xt(t){var e=-1,r=t?t.length:0;for(this.__data__=new Qt;++e<r;)this.add(t[e])}function Yt(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function te(t){return!(!oe(t)||(e=t,Lt&&Lt in e))&&(function(t){var e=oe(t)?Zt.call(t):"";return e==St||e==At}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?Kt:Tt).test(function(t){if(null!=t){try{return Ft.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}Gt.prototype.clear=function(){this.__data__=Ut?Ut(null):{}},Gt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Gt.prototype.get=function(t){var e=this.__data__;if(Ut){var r=e[t];return r===$t?void 0:r}return Jt.call(e,t)?e[t]:void 0},Gt.prototype.has=function(t){var e=this.__data__;return Ut?void 0!==e[t]:Jt.call(e,t)},Gt.prototype.set=function(t,e){return this.__data__[t]=Ut&&void 0===e?$t:e,this},zt.prototype.clear=function(){this.__data__=[]},zt.prototype.delete=function(t){var e=this.__data__,r=Yt(e,t);return!(r<0||(r==e.length-1?e.pop():Vt.call(e,r,1),0))},zt.prototype.get=function(t){var e=this.__data__,r=Yt(e,t);return r<0?void 0:e[r][1]},zt.prototype.has=function(t){return Yt(this.__data__,t)>-1},zt.prototype.set=function(t,e){var r=this.__data__,n=Yt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Qt.prototype.clear=function(){this.__data__={hash:new Gt,map:new(qt||zt),string:new Gt}},Qt.prototype.delete=function(t){return re(this,t).delete(t)},Qt.prototype.get=function(t){return re(this,t).get(t)},Qt.prototype.has=function(t){return re(this,t).has(t)},Qt.prototype.set=function(t,e){return re(this,t).set(t,e),this},Xt.prototype.add=Xt.prototype.push=function(t){return this.__data__.set(t,$t),this},Xt.prototype.has=function(t){return this.__data__.has(t)};var ee=Bt&&1/Mt(new Bt([,-0]))[1]==1/0?function(t){return new Bt(t)}:function(){};function re(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ne(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return te(r)?r:void 0}function oe(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var ie=function(t){return t&&t.length?function(t,e,r){var n=-1,o=Nt,i=t.length,a=!0,c=[],u=c;if(r)a=!1,o=kt;else if(i>=Ot){var s=e?null:ee(t);if(s)return Mt(s);a=!1,o=Pt,u=new Xt}else u=e?[]:c;t:for(;++n<i;){var f=t[n],l=e?e(f):f;if(f=r||0!==f?f:0,a&&l==l){for(var p=u.length;p--;)if(u[p]===l)continue t;e&&u.push(l),c.push(f)}else o(u,l,r)||(u!==c&&u.push(l),c.push(f))}return c}(t):[]},ae=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},ce=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},ue=r(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return t%=100,1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}});ue.suffix;const se=Array.isArray;function fe(t,e){if(!se(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null},n=Object.assign({},r,e);let o,i;if(jt(n,r,{msg:"ranges-sort: [THROW_ID_02*]",schema:{progressFn:["function","false","null"]}}),n.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(o=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${ue(o)} range (${JSON.stringify(t[o],null,4)}) has not two but ${i} elements!`);if(!t.every((t,e)=>!(!ae(t[0],{includeZero:!0})||!ae(t[1],{includeZero:!0}))||(o=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${ue(o)} range (${JSON.stringify(t[o],null,4)}) does not consist of only natural numbers!`);const a=t.length*t.length;let c=0;return Array.from(t).sort((t,e)=>(n.progressFn&&(c++,n.progressFn(Math.floor(100*c/a))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}const le=Array.isArray;function pe(t,e,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!le(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);le(e)&&(ae(e[0],{includeZero:!0})||ce(e[0],{includeZero:!0}))&&(ae(e[1],{includeZero:!0})||ce(e[1],{includeZero:!0}))&&(e=[e]);const i=e.length;let a=0;e.forEach((t,c)=>{if(r&&(n=Math.floor(a/i*10))!==o&&(o=n,r(n)),!le(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${ue(c)} element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!ae(t[0],{includeZero:!0})){if(!ce(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${ue(c)} element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[c][0]=Number.parseInt(e[c][0],10)}if(!ae(t[1],{includeZero:!0})){if(!ce(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${ue(c)} element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[c][1]=Number.parseInt(e[c][1],10)}a++});const c=function(t,e){if(!Array.isArray(t))return t;if(e&&"function"!=typeof e)throw new Error(`ranges-merge: [THROW_ID_01] the second input argument must be a function! It was given of a type: "${typeof e}", equal to ${JSON.stringify(e,null,4)}`);const r=f(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let n,o,i;const a=(n=e?fe(r,{progressFn:t=>{(i=Math.floor(t/5))!==o&&(o=i,e(i))}}):fe(r)).length-1;for(let t=a;t>0;t--)e&&(i=Math.floor(78*(1-t/a))+21)!==o&&i>o&&(o=i,e(i)),(n[t][0]<=n[t-1][0]||n[t][0]<=n[t-1][1])&&(n[t-1][0]=Math.min(n[t][0],n[t-1][0]),n[t-1][1]=Math.max(n[t][1],n[t-1][1]),void 0!==n[t][2]&&(n[t-1][0]>=n[t][0]||n[t-1][1]<=n[t][1])&&null!==n[t-1][2]&&(null===n[t][2]&&null!==n[t-1][2]?n[t-1][2]=null:void 0!==n[t-1][2]?n[t-1][2]+=n[t][2]:n[t-1][2]=n[t][2]),n.splice(t,1),t=n.length);return n}(e,t=>{r&&(n=10+Math.floor(t/10))!==o&&(o=n,r(n))}),u=c.length;if(u>0){const e=t.slice(c[u-1][1]);t=c.reduce((e,i,a,c)=>{r&&(n=20+Math.floor(a/u*80))!==o&&(o=n,r(n));const s=0===a?0:c[a-1][1],f=c[a][0];return e+t.slice(s,f)+(function(t){return null!=t}(c[a][2])?c[a][2]:"")},""),t+=e}return t}var he=Array.isArray;return function(e,r){if(!he(e))throw new Error("array-group-str-omit-num-char: [THROW_ID_01] the first input argument must be an array!");var n,o,i={wildcard:"*",dedupePlease:!0};if(null!=r){if(!w(r))throw new Error("array-group-str-omit-num-char: [THROW_ID_02] the second input argument, options object must be a plain object! It was given as ".concat(t(r),", equal to:\n").concat(JSON.stringify(r,null,4)));jt(n=Object.assign({},i,r),i,{msg:"array-group-str-omit-num-char: [THROW_ID_03*]"})}else n=Object.assign({},i);for(var a=(o=n.dedupePlease?ie(e):Array.from(e)).length,c={},u=0;u<a;u++){var s=o[u].match(/\d+/gm);s?function(){var t=o[u].replace(/\d+/gm,n.wildcard);c.hasOwnProperty(t)?(s.forEach(function(e,r){c[t].elementsWhichWeCanReplaceWithWildcards[r]&&e!==c[t].elementsWhichWeCanReplaceWithWildcards[r]&&(c[t].elementsWhichWeCanReplaceWithWildcards[r]=!1)}),c[t].count++):c[t]={count:1,elementsWhichWeCanReplaceWithWildcards:Array.from(s)}}():c[o[u]]={count:1}}var f={};return Object.keys(c).forEach(function(t){var e=t;if(he(c[t].elementsWhichWeCanReplaceWithWildcards)&&c[t].elementsWhichWeCanReplaceWithWildcards.some(function(t){return!1!==t})){for(var r=[],o=0,i=0;i<c[t].elementsWhichWeCanReplaceWithWildcards.length;i++)o=e.indexOf(n.wildcard,o+n.wildcard.length),!1!==c[t].elementsWhichWeCanReplaceWithWildcards[i]&&r.push([o,o+n.wildcard.length,c[t].elementsWhichWeCanReplaceWithWildcards[i]]);e=pe(e,r)}f[e]=c[t].count}),f}});
