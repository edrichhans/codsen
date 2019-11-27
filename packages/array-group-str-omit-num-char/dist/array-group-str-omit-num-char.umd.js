/**
 * array-group-str-omit-num-char
 * Groups array of strings by omitting number characters
 * Version: 2.1.25
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/array-group-str-omit-num-char
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).arrayGroupStrOmitNumChar=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var e=200,r="__lodash_hash_undefined__",n="[object Function]",o="[object GeneratorFunction]",a=/^\[object .+?Constructor\]$/,i="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=i||u||Function("return this")();function s(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,a=r+(n?1:-1);for(;n?a--:++a<o;)if(e(t[a],a,t))return a;return-1}(t,l,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function f(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function l(t){return t!=t}function p(t,e){return t.has(e)}function h(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var y,g=Array.prototype,d=Function.prototype,_=Object.prototype,v=c["__core-js_shared__"],b=(y=/[^.]+$/.exec(v&&v.keys&&v.keys.IE_PROTO||""))?"Symbol(src)_1."+y:"",w=d.toString,m=_.hasOwnProperty,j=_.toString,O=RegExp("^"+w.call(m).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),T=g.splice,W=N(c,"Map"),$=N(c,"Set"),E=N(Object,"create");function R(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function S(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function A(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function I(t){var e=-1,r=t?t.length:0;for(this.__data__=new A;++e<r;)this.add(t[e])}function F(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function x(t){return!(!D(t)||(e=t,b&&b in e))&&(function(t){var e=D(t)?j.call(t):"";return e==n||e==o}(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?O:a).test(function(t){if(null!=t){try{return w.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t));var e}R.prototype.clear=function(){this.__data__=E?E(null):{}},R.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},R.prototype.get=function(t){var e=this.__data__;if(E){var n=e[t];return n===r?void 0:n}return m.call(e,t)?e[t]:void 0},R.prototype.has=function(t){var e=this.__data__;return E?void 0!==e[t]:m.call(e,t)},R.prototype.set=function(t,e){return this.__data__[t]=E&&void 0===e?r:e,this},S.prototype.clear=function(){this.__data__=[]},S.prototype.delete=function(t){var e=this.__data__,r=F(e,t);return!(r<0)&&(r==e.length-1?e.pop():T.call(e,r,1),!0)},S.prototype.get=function(t){var e=this.__data__,r=F(e,t);return r<0?void 0:e[r][1]},S.prototype.has=function(t){return F(this.__data__,t)>-1},S.prototype.set=function(t,e){var r=this.__data__,n=F(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},A.prototype.clear=function(){this.__data__={hash:new R,map:new(W||S),string:new R}},A.prototype.delete=function(t){return C(this,t).delete(t)},A.prototype.get=function(t){return C(this,t).get(t)},A.prototype.has=function(t){return C(this,t).has(t)},A.prototype.set=function(t,e){return C(this,t).set(t,e),this},I.prototype.add=I.prototype.push=function(t){return this.__data__.set(t,r),this},I.prototype.has=function(t){return this.__data__.has(t)};var Z=$&&1/h(new $([,-0]))[1]==1/0?function(t){return new $(t)}:function(){};function C(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function N(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return x(r)?r:void 0}function D(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}var H=function(t){return t&&t.length?function(t,r,n){var o=-1,a=s,i=t.length,u=!0,c=[],l=c;if(n)u=!1,a=f;else if(i>=e){var y=r?null:Z(t);if(y)return h(y);u=!1,a=p,l=new I}else l=r?[]:c;t:for(;++o<i;){var g=t[o],d=r?r(g):g;if(g=n||0!==g?g:0,u&&d==d){for(var _=l.length;_--;)if(l[_]===d)continue t;r&&l.push(d),c.push(g)}else a(l,d,n)||(l!==c&&l.push(d),c.push(g))}return c}(t):[]},P=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1},M=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)};const k=Array.isArray;function J(t,e){if(!k(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const r=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},e);let n,o;if(r.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(n=e,o=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) has not two but ${o} elements!`);if(!t.every((t,e)=>!(!P(t[0],{includeZero:!0})||!P(t[1],{includeZero:!0}))||(n=e,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${n}th range (${JSON.stringify(t[n],null,4)}) does not consist of only natural numbers!`);const a=t.length*t.length;let i=0;return Array.from(t).sort((t,e)=>(r.progressFn&&(i++,r.progressFn(Math.floor(100*i/a))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var q=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(e,r){var n=200,o="__lodash_hash_undefined__",a=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",_="[object Symbol]",v="[object ArrayBuffer]",b="[object DataView]",w="[object Float32Array]",m="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",T="[object Int32Array]",W="[object Uint8Array]",$="[object Uint8ClampedArray]",E="[object Uint16Array]",R="[object Uint32Array]",S=/\w*$/,A=/^\[object .+?Constructor\]$/,I=/^(?:0|[1-9]\d*)$/,F={};F[i]=F["[object Array]"]=F[v]=F[b]=F[u]=F[c]=F[w]=F[m]=F[j]=F[O]=F[T]=F[l]=F[p]=F[h]=F[y]=F[g]=F[d]=F[_]=F[W]=F[$]=F[E]=F[R]=!0,F["[object Error]"]=F[s]=F["[object WeakMap]"]=!1;var x="object"==typeof t&&t&&t.Object===Object&&t,Z="object"==typeof self&&self&&self.Object===Object&&self,C=x||Z||Function("return this")(),N=r&&!r.nodeType&&r,D=N&&e&&!e.nodeType&&e,H=D&&D.exports===N;function P(t,e){return t.set(e[0],e[1]),t}function M(t,e){return t.add(e),t}function k(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function J(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function B(t,e){return function(r){return t(e(r))}}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z=Array.prototype,G=Function.prototype,L=Object.prototype,V=C["__core-js_shared__"],K=function(){var t=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Q=G.toString,X=L.hasOwnProperty,Y=L.toString,tt=RegExp("^"+Q.call(X).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=H?C.Buffer:void 0,rt=C.Symbol,nt=C.Uint8Array,ot=B(Object.getPrototypeOf,Object),at=Object.create,it=L.propertyIsEnumerable,ut=z.splice,ct=Object.getOwnPropertySymbols,st=et?et.isBuffer:void 0,ft=B(Object.keys,Object),lt=Nt(C,"DataView"),pt=Nt(C,"Map"),ht=Nt(C,"Promise"),yt=Nt(C,"Set"),gt=Nt(C,"WeakMap"),dt=Nt(Object,"create"),_t=kt(lt),vt=kt(pt),bt=kt(ht),wt=kt(yt),mt=kt(gt),jt=rt?rt.prototype:void 0,Ot=jt?jt.valueOf:void 0;function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Wt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function $t(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new Wt(t)}function Rt(t,e){var r=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Bt(t)}(t)&&X.call(t,"callee")&&(!it.call(t,"callee")||Y.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!X.call(t,a)||o&&("length"==a||Pt(a,n))||r.push(a);return r}function St(t,e,r){var n=t[e];X.call(t,e)&&Jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function At(t,e){for(var r=t.length;r--;)if(Jt(t[r][0],e))return r;return-1}function It(t,e,r,n,o,a,A){var I;if(n&&(I=a?n(t,o,a,A):n(t)),void 0!==I)return I;if(!Gt(t))return t;var x=qt(t);if(x){if(I=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&X.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,I)}else{var Z=Ht(t),C=Z==s||Z==f;if(Ut(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(Z==h||Z==i||C&&!a){if(J(t))return a?t:{};if(I=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(e=ot(t),Gt(e)?at(e):{});var e}(C?{}:t),!e)return function(t,e){return Zt(t,Dt(t),e)}(t,function(t,e){return t&&Zt(e,Lt(e),t)}(I,t))}else{if(!F[Z])return a?t:{};I=function(t,e,r,n){var o=t.constructor;switch(e){case v:return xt(t);case u:case c:return new o(+t);case b:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case m:case j:case O:case T:case W:case $:case E:case R:return function(t,e){var r=e?xt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return k(e?r(q(t),!0):q(t),P,new t.constructor)}(t,n,r);case p:case d:return new o(t);case y:return(s=new(i=t).constructor(i.source,S.exec(i))).lastIndex=i.lastIndex,s;case g:return function(t,e,r){return k(e?r(U(t),!0):U(t),M,new t.constructor)}(t,n,r);case _:return a=t,Ot?Object(Ot.call(a)):{}}var a;var i,s}(t,Z,It,e)}}A||(A=new Et);var N=A.get(t);if(N)return N;if(A.set(t,I),!x)var D=r?function(t){return function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Lt,Dt)}(t):Lt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(D||t,(function(o,a){D&&(o=t[a=o]),St(I,a,It(o,e,r,n,a,t,A))})),I}function Ft(t){return!(!Gt(t)||(e=t,K&&K in e))&&(zt(t)||J(t)?tt:A).test(kt(t));var e}function xt(t){var e=new t.constructor(t.byteLength);return new nt(e).set(new nt(t)),e}function Zt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var i=e[o],u=n?n(r[i],t[i],i,r,t):void 0;St(r,i,void 0===u?t[i]:u)}return r}function Ct(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Nt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(r)?r:void 0}Tt.prototype.clear=function(){this.__data__=dt?dt(null):{}},Tt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Tt.prototype.get=function(t){var e=this.__data__;if(dt){var r=e[t];return r===o?void 0:r}return X.call(e,t)?e[t]:void 0},Tt.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:X.call(e,t)},Tt.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?o:e,this},Wt.prototype.clear=function(){this.__data__=[]},Wt.prototype.delete=function(t){var e=this.__data__,r=At(e,t);return!(r<0)&&(r==e.length-1?e.pop():ut.call(e,r,1),!0)},Wt.prototype.get=function(t){var e=this.__data__,r=At(e,t);return r<0?void 0:e[r][1]},Wt.prototype.has=function(t){return At(this.__data__,t)>-1},Wt.prototype.set=function(t,e){var r=this.__data__,n=At(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},$t.prototype.clear=function(){this.__data__={hash:new Tt,map:new(pt||Wt),string:new Tt}},$t.prototype.delete=function(t){return Ct(this,t).delete(t)},$t.prototype.get=function(t){return Ct(this,t).get(t)},$t.prototype.has=function(t){return Ct(this,t).has(t)},$t.prototype.set=function(t,e){return Ct(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new Wt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Wt){var o=r.__data__;if(!pt||o.length<n-1)return o.push([t,e]),this;r=this.__data__=new $t(o)}return r.set(t,e),this};var Dt=ct?B(ct,Object):function(){return[]},Ht=function(t){return Y.call(t)};function Pt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||I.test(t))&&t>-1&&t%1==0&&t<e}function Mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||L)}function kt(t){if(null!=t){try{return Q.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,e){return t===e||t!=t&&e!=e}(lt&&Ht(new lt(new ArrayBuffer(1)))!=b||pt&&Ht(new pt)!=l||ht&&"[object Promise]"!=Ht(ht.resolve())||yt&&Ht(new yt)!=g||gt&&"[object WeakMap]"!=Ht(new gt))&&(Ht=function(t){var e=Y.call(t),r=e==h?t.constructor:void 0,n=r?kt(r):void 0;if(n)switch(n){case _t:return b;case vt:return l;case bt:return"[object Promise]";case wt:return g;case mt:return"[object WeakMap]"}return e});var qt=Array.isArray;function Bt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!zt(t)}var Ut=st||function(){return!1};function zt(t){var e=Gt(t)?Y.call(t):"";return e==s||e==f}function Gt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Lt(t){return Bt(t)?Rt(t):function(t){if(!Mt(t))return ft(t);var e=[];for(var r in Object(t))X.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return It(t,!0,!0)}})),B="[object Object]";var U,z,G=Function.prototype,L=Object.prototype,V=G.toString,K=L.hasOwnProperty,Q=V.call(Object),X=L.toString,Y=(U=Object.getPrototypeOf,z=Object,function(t){return U(z(t))});var tt=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||X.call(t)!=B||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=Y(t);if(null===e)return!0;var r=K.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&V.call(r)==Q};const et=Array.isArray;function rt(t,e,r){let n=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError(`ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(null===e)return t;if(!et(e))throw new TypeError(`ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: ${typeof e}, equal to: ${JSON.stringify(e,null,4)}`);if(r&&"function"!=typeof r)throw new TypeError(`ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: ${typeof r}, equal to: ${JSON.stringify(r,null,4)}`);et(e)&&(P(e[0],{includeZero:!0})||M(e[0],{includeZero:!0}))&&(P(e[1],{includeZero:!0})||M(e[1],{includeZero:!0}))&&(e=[e]);const a=e.length;let i=0;e.forEach((t,u)=>{if(r&&(n=Math.floor(i/a*10))!==o&&(o=n,r(n)),!et(t))throw new TypeError(`ranges-apply: [THROW_ID_05] ranges array, second input arg., has ${u}th element not an array: ${JSON.stringify(t,null,4)}, which is ${typeof t}`);if(!P(t[0],{includeZero:!0})){if(!M(t[0],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_06] ranges array, second input arg. has ${u}th element, array [${t[0]},${t[1]}]. That array has first element not an integer, but ${typeof t[0]}, equal to: ${JSON.stringify(t[0],null,4)}. Computer doesn't like this.`);e[u][0]=Number.parseInt(e[u][0],10)}if(!P(t[1],{includeZero:!0})){if(!M(t[1],{includeZero:!0}))throw new TypeError(`ranges-apply: [THROW_ID_07] ranges array, second input arg. has ${u}th element, array [${t[0]},${t[1]}]. That array has second element not an integer, but ${typeof t[1]}, equal to: ${JSON.stringify(t[1],null,4)}. Computer doesn't like this.`);e[u][1]=Number.parseInt(e[u][1],10)}i++});const u=function(t,e){function r(t){return"string"==typeof t}if(!Array.isArray(t))return t;const n={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};let o;if(e){if(!tt(e))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(e,null,4)} (type ${typeof e})`);if((o=Object.assign({},n,e)).progressFn&&tt(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!==o.mergeType&&2!==o.mergeType)if(r(o.mergeType)&&"1"===o.mergeType.trim())o.mergeType=1;else{if(!r(o.mergeType)||"2"!==o.mergeType.trim())throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);o.mergeType=2}if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o=q(n);const a=q(t).filter(t=>void 0!==t[2]||t[0]!==t[1]);let i,u,c;const s=(i=o.progressFn?J(a,{progressFn:t=>{(c=Math.floor(t/5))!==u&&(u=c,o.progressFn(c))}}):J(a)).length-1;for(let t=s;t>0;t--)o.progressFn&&(c=Math.floor(78*(1-t/s))+21)!==u&&c>u&&(u=c,o.progressFn(c)),(i[t][0]<=i[t-1][0]||!o.joinRangesThatTouchEdges&&i[t][0]<i[t-1][1]||o.joinRangesThatTouchEdges&&i[t][0]<=i[t-1][1])&&(i[t-1][0]=Math.min(i[t][0],i[t-1][0]),i[t-1][1]=Math.max(i[t][1],i[t-1][1]),void 0!==i[t][2]&&(i[t-1][0]>=i[t][0]||i[t-1][1]<=i[t][1])&&null!==i[t-1][2]&&(null===i[t][2]&&null!==i[t-1][2]?i[t-1][2]=null:void 0!==i[t-1][2]?2===o.mergeType&&i[t-1][0]===i[t][0]?i[t-1][2]=i[t][2]:i[t-1][2]+=i[t][2]:i[t-1][2]=i[t][2]),i.splice(t,1),t=i.length);return i}(e,{progressFn:t=>{r&&(n=10+Math.floor(t/10))!==o&&(o=n,r(n))}}),c=u.length;if(c>0){const e=t.slice(u[c-1][1]);t=u.reduce((e,a,i,u)=>{r&&(n=20+Math.floor(i/c*80))!==o&&(o=n,r(n));const s=0===i?0:u[i-1][1],f=u[i][0];return e+t.slice(s,f)+(function(t){return null!=t}(u[i][2])?u[i][2]:"")},""),t+=e}return t}var nt=Array.isArray;return function(t,e){if(!nt(t))return t;if(!t.length)return{};var r,n,o={wildcard:"*",dedupePlease:!0};r=null!=e?Object.assign({},o,e):Object.assign({},o);for(var a=(n=r.dedupePlease?H(t):Array.from(t)).length,i={},u=0;u<a;u++){var c=n[u].match(/\d+/gm);c?function(){var t=n[u].replace(/\d+/gm,r.wildcard);Object.prototype.hasOwnProperty.call(i,t)?(c.forEach((function(e,r){i[t].elementsWhichWeCanReplaceWithWildcards[r]&&e!==i[t].elementsWhichWeCanReplaceWithWildcards[r]&&(i[t].elementsWhichWeCanReplaceWithWildcards[r]=!1)})),i[t].count++):i[t]={count:1,elementsWhichWeCanReplaceWithWildcards:Array.from(c)}}():i[n[u]]={count:1}}var s={};return Object.keys(i).forEach((function(t){var e=t;if(nt(i[t].elementsWhichWeCanReplaceWithWildcards)&&i[t].elementsWhichWeCanReplaceWithWildcards.some((function(t){return!1!==t}))){for(var n=[],o=0,a=0;a<i[t].elementsWhichWeCanReplaceWithWildcards.length;a++)o=e.indexOf(r.wildcard,o+r.wildcard.length),!1!==i[t].elementsWhichWeCanReplaceWithWildcards[a]&&n.push([o,o+r.wildcard.length,i[t].elementsWhichWeCanReplaceWithWildcards[a]]);e=rt(e,n)}s[e]=i[t].count})),s}}));
