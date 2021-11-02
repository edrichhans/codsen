/**
 * @name object-flatten-referencing
 * @fileoverview Flatten complex nested objects according to a reference objects
 * @version 6.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/object-flatten-referencing/}
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).objectFlattenReferencing={})}(this,(function(t){"use strict";var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r={exports:{}};!function(t,r){var n="__lodash_hash_undefined__",o=9007199254740991,i="[object Arguments]",a="[object Boolean]",c="[object Date]",s="[object Function]",u="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",h="[object Promise]",y="[object RegExp]",g="[object Set]",d="[object String]",b="[object Symbol]",_="[object WeakMap]",v="[object ArrayBuffer]",w="[object DataView]",j="[object Float32Array]",W="[object Float64Array]",m="[object Int8Array]",A="[object Int16Array]",O="[object Int32Array]",T="[object Uint8Array]",x="[object Uint8ClampedArray]",I="[object Uint16Array]",$="[object Uint32Array]",E=/\w*$/,S=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,R={};R[i]=R["[object Array]"]=R[v]=R[w]=R[a]=R[c]=R[j]=R[W]=R[m]=R[A]=R[O]=R[f]=R[l]=R[p]=R[y]=R[g]=R[d]=R[b]=R[T]=R[x]=R[I]=R[$]=!0,R["[object Error]"]=R[s]=R[_]=!1;var C="object"==typeof self&&self&&self.Object===Object&&self,D="object"==typeof e&&e&&e.Object===Object&&e||C||Function("return this")(),k=r&&!r.nodeType&&r,B=k&&t&&!t.nodeType&&t,M=B&&B.exports===k;function F(t,e){return t.set(e[0],e[1]),t}function H(t,e){return t.add(e),t}function L(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function K(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function G(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function U(t,e){return function(r){return t(e(r))}}function V(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var J,N=Array.prototype,z=Function.prototype,q=Object.prototype,Q=D["__core-js_shared__"],X=(J=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",Y=z.toString,Z=q.hasOwnProperty,tt=q.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=M?D.Buffer:void 0,nt=D.Symbol,ot=D.Uint8Array,it=U(Object.getPrototypeOf,Object),at=Object.create,ct=q.propertyIsEnumerable,st=N.splice,ut=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=U(Object.keys,Object),pt=Bt(D,"DataView"),ht=Bt(D,"Map"),yt=Bt(D,"Promise"),gt=Bt(D,"Set"),dt=Bt(D,"WeakMap"),bt=Bt(Object,"create"),_t=Kt(pt),vt=Kt(ht),wt=Kt(yt),jt=Kt(gt),Wt=Kt(dt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function Ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function It(t){this.__data__=new Tt(t)}function $t(t,e){var r=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Vt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Z.call(t,a)||o&&("length"==a||Ht(a,n))||r.push(a);return r}function Et(t,e,r){var n=t[e];Z.call(t,e)&&Gt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function St(t,e){for(var r=t.length;r--;)if(Gt(t[r][0],e))return r;return-1}function Pt(t,e,r,n,o,h,_){var S;if(n&&(S=h?n(t,o,h,_):n(t)),void 0!==S)return S;if(!zt(t))return t;var P=Ut(t);if(P){if(S=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,S)}else{var C=Ft(t),D=C==s||C==u;if(Jt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(C==p||C==i||D&&!h){if(K(t))return h?t:{};if(S=function(t){return"function"!=typeof t.constructor||Lt(t)?{}:(e=it(t),zt(e)?at(e):{});var e}(D?{}:t),!e)return function(t,e){return Dt(t,Mt(t),e)}(t,function(t,e){return t&&Dt(e,qt(e),t)}(S,t))}else{if(!R[C])return h?t:{};S=function(t,e,r,n){var o=t.constructor;switch(e){case v:return Ct(t);case a:case c:return new o(+t);case w:return function(t,e){var r=e?Ct(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case W:case m:case A:case O:case T:case x:case I:case $:return function(t,e){var r=e?Ct(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case f:return function(t,e,r){return L(e?r(G(t),!0):G(t),F,new t.constructor)}(t,n,r);case l:case d:return new o(t);case y:return function(t){var e=new t.constructor(t.source,E.exec(t));return e.lastIndex=t.lastIndex,e}(t);case g:return function(t,e,r){return L(e?r(V(t),!0):V(t),H,new t.constructor)}(t,n,r);case b:return i=t,At?Object(At.call(i)):{}}var i}(t,C,Pt,e)}}_||(_=new It);var k=_.get(t);if(k)return k;if(_.set(t,S),!P)var B=r?function(t){return function(t,e,r){var n=e(t);return Ut(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,qt,Mt)}(t):qt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(B||t,(function(o,i){B&&(o=t[i=o]),Et(S,i,Pt(o,e,r,n,i,t,_))})),S}function Rt(t){return!(!zt(t)||(e=t,X&&X in e))&&(Nt(t)||K(t)?et:S).test(Kt(t));var e}function Ct(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],c=n?n(r[a],t[a],a,r,t):void 0;Et(r,a,void 0===c?t[a]:c)}return r}function kt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Rt(r)?r:void 0}Ot.prototype.clear=function(){this.__data__=bt?bt(null):{}},Ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ot.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},Ot.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Z.call(e,t)},Ot.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,r=St(e,t);return!(r<0)&&(r==e.length-1?e.pop():st.call(e,r,1),!0)},Tt.prototype.get=function(t){var e=this.__data__,r=St(e,t);return r<0?void 0:e[r][1]},Tt.prototype.has=function(t){return St(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var r=this.__data__,n=St(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},xt.prototype.clear=function(){this.__data__={hash:new Ot,map:new(ht||Tt),string:new Ot}},xt.prototype.delete=function(t){return kt(this,t).delete(t)},xt.prototype.get=function(t){return kt(this,t).get(t)},xt.prototype.has=function(t){return kt(this,t).has(t)},xt.prototype.set=function(t,e){return kt(this,t).set(t,e),this},It.prototype.clear=function(){this.__data__=new Tt},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,e){var r=this.__data__;if(r instanceof Tt){var n=r.__data__;if(!ht||n.length<199)return n.push([t,e]),this;r=this.__data__=new xt(n)}return r.set(t,e),this};var Mt=ut?U(ut,Object):function(){return[]},Ft=function(t){return tt.call(t)};function Ht(t,e){return!!(e=null==e?o:e)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<e}function Lt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||q)}function Kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Gt(t,e){return t===e||t!=t&&e!=e}(pt&&Ft(new pt(new ArrayBuffer(1)))!=w||ht&&Ft(new ht)!=f||yt&&Ft(yt.resolve())!=h||gt&&Ft(new gt)!=g||dt&&Ft(new dt)!=_)&&(Ft=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Kt(r):void 0;if(n)switch(n){case _t:return w;case vt:return f;case wt:return h;case jt:return g;case Wt:return _}return e});var Ut=Array.isArray;function Vt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Nt(t)}var Jt=ft||function(){return!1};function Nt(t){var e=zt(t)?tt.call(t):"";return e==s||e==u}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function qt(t){return Vt(t)?$t(t):function(t){if(!Lt(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return Pt(t,!0,!0)}}(r,r.exports);var n=r.exports;
/**
 * @name str-indexes-of-plus
 * @fileoverview Like indexOf but returns array and counts per-grapheme
 * @version 4.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/str-indexes-of-plus/}
 */function o(t,e,r=0){if("string"!=typeof t)throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): first input argument must be a string! Currently it's: "+typeof t);if("string"!=typeof e)throw new TypeError("str-indexes-of-plus/strIndexesOfPlus(): second input argument must be a string! Currently it's: "+typeof e);if(isNaN(+r)||"string"==typeof r&&!/^\d*$/.test(r))throw new TypeError(`str-indexes-of-plus/strIndexesOfPlus(): third input argument must be a natural number! Currently it's: ${r}`);const n=Array.from(t),o=Array.from(e);if(0===n.length||0===o.length||null!=r&&+r>=n.length)return[];r||(r=0);const i=[];let a,c=!1;for(let t=r,e=n.length;t<e;t++)c&&(n[t]===o[t-+a]?t-+a+1===o.length&&i.push(+a):(a=null,c=!1)),c||n[t]===o[0]&&(1===o.length?i.push(t):(c=!0,a=t));return i}const i=new Map,a=(t,e)=>{if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError(`Expected '${e}' to be a string or an array, but got a type of '${typeof t}'`)}return t.filter((t=>{if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError(`Expected '${e}' to be an array of strings, but found a type of '${typeof t}' in the array`)}return!0}))},c=(t,e)=>{e={caseSensitive:!1,...e};const r=t+JSON.stringify(e);if(i.has(r))return i.get(r);const n="!"===t[0];n&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");const o=new RegExp(`^${t}$`,e.caseSensitive?"":"i");return o.negated=n,i.set(r,o),o};function s(t,e,r){return((t,e,r,n)=>{if(t=a(t,"inputs"),0===(e=a(e,"patterns")).length)return[];e=e.map((t=>c(t,r)));const{allPatterns:o}=r||{},i=[];for(const r of t){let t;const a=[...e].fill(!1);for(const[n,o]of e.entries())if(o.test(r)&&(a[n]=!0,t=!o.negated,!t))break;if(!(!1===t||void 0===t&&e.some((t=>!t.negated))||o&&a.some(((t,r)=>!t&&!e[r].negated)))&&(i.push(r),n))break}return i})(t,e,r,!0).length>0}var u,f,l=Object.prototype,p=Function.prototype.toString,h=l.hasOwnProperty,y=p.call(Object),g=l.toString,d=(u=Object.getPrototypeOf,f=Object,function(t){return u(f(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=g.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=d(t);if(null===e)return!0;var r=h.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&p.call(r)==y};const _={wrapHeadsWith:"%%_",wrapTailsWith:"_%%",dontWrapKeys:[],dontWrapPaths:[],xhtml:!0,preventDoubleWrapping:!0,preventWrappingIfContains:[],objectKeyAndValueJoinChar:".",wrapGlobalFlipSwitch:!0,ignore:[],whatToDoWhenReferenceIsMissing:0,mergeArraysWithLineBreaks:!0,mergeWithoutTrailingBrIfLineContainsBr:!0,enforceStrictKeyset:!0};function v(t){return"string"==typeof t}function w(t,e){const r={..._,...e};if(0===arguments.length||0===Object.keys(t).length)return[];const o=n(t);let i=[];return b(o)&&Object.keys(o).forEach((t=>{b(o[t])&&(o[t]=w(o[t],r)),Array.isArray(o[t])&&(i=i.concat(o[t].map((e=>t+r.objectKeyAndValueJoinChar+e)))),v(o[t])&&i.push(t+r.objectKeyAndValueJoinChar+o[t])})),i}function j(t,e,r=!1,o=!1){const i={..._,...e};if(0===arguments.length||0===t.length)return"";const a=n(t);let c="";if(a.length>0)if(o){for(let t=0,e=a.length;t<e;t++)if(v(a[t])){let e;e="",i.mergeArraysWithLineBreaks&&t>0&&(!i.mergeWithoutTrailingBrIfLineContainsBr||"string"!=typeof a[t-1]||i.mergeWithoutTrailingBrIfLineContainsBr&&void 0!==a[t-1]&&!a[t-1].toLowerCase().includes("<br"))&&(e=`<br${i.xhtml?" /":""}>`),c+=e+(r?i.wrapHeadsWith:"")+a[t]+(r?i.wrapTailsWith:"")}else if(Array.isArray(a[t])&&a[t].length>0&&a[t].every(v)){let e="";i.mergeArraysWithLineBreaks&&c.length>0&&(e=`<br${i.xhtml?" /":""}>`),c=a[t].reduce(((t,n,o,a)=>{let c="";return o!==a.length-1&&(c=" "),t+(0===o?e:"")+(r?i.wrapHeadsWith:"")+n+(r?i.wrapTailsWith:"")+c}),c)}}else c=a.reduce(((t,e,n,o)=>{let a="";i.mergeArraysWithLineBreaks&&n>0&&(a=`<br${i.xhtml?" /":""}>`);let c="";return n!==o.length-1&&(c=" "),t+(0===n?a:"")+(r?i.wrapHeadsWith:"")+e+(r?i.wrapTailsWith:"")+c}),c);return c}function W(t){return v(t)?t.length>0?[t]:[]:t}function m(t){return null!=t}function A(t){return"string"==typeof t}t.arrayiffyString=W,t.defaults=_,t.flattenArr=j,t.flattenObject=w,t.flattenReferencing=function(t,e,r){if(0===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_02] reference object missing!");if(m(r)&&!b(r))throw new Error("object-flatten-referencing/ofr(): [THROW_ID_03] third input, options object must be a plain object. Currently it's: "+typeof r);const i={..._,...r};function a(t,e,r,i=!0,c=!0,u=""){let f=n(t);const l=n(e);return r.wrapGlobalFlipSwitch||(i=!1),b(f)?Object.keys(f).forEach((t=>{const e=u+(0===u.length?t:`.${t}`);if(0===r.ignore.length||!r.ignore.includes(t))if(r.wrapGlobalFlipSwitch&&(i=!0,r.dontWrapKeys.length>0&&(i=i&&!r.dontWrapKeys.some((e=>s(t,e,{caseSensitive:!0})))),r.dontWrapPaths.length>0&&(i=i&&!r.dontWrapPaths.some((t=>t===e))),r.preventWrappingIfContains.length>0&&"string"==typeof f[t]&&(i=i&&!r.preventWrappingIfContains.some((e=>f[t].includes(e))))),m(l[t])||!m(l[t])&&2===r.whatToDoWhenReferenceIsMissing)if(Array.isArray(f[t]))if(2===r.whatToDoWhenReferenceIsMissing||A(l[t]))f[t]=j(f[t],r,i,c);else{if(f[t].every((t=>"string"==typeof t||Array.isArray(t)))){let e=!0;f[t].forEach((t=>{Array.isArray(t)&&!t.every(A)&&(e=!1)})),e&&(c=!1)}f[t]=a(f[t],l[t],r,i,c,e)}else b(f[t])?f[t]=2===r.whatToDoWhenReferenceIsMissing||A(l[t])?j(w(f[t],r),r,i,c):a(f[t],l[t],i?r:{...r,wrapGlobalFlipSwitch:!1},i,c,e):A(f[t])&&(f[t]=a(f[t],l[t],r,i,c,e));else if(typeof f[t]!=typeof l[t]&&1===r.whatToDoWhenReferenceIsMissing)throw new Error(`object-flatten-referencing/ofr(): [THROW_ID_06] reference object does not have the key ${t} and we need it. TIP: Turn off throwing via opts.whatToDoWhenReferenceIsMissing.`)})):Array.isArray(f)?Array.isArray(l)?f.forEach(((t,e)=>{f[e]=m(f[e])&&m(l[e])?a(f[e],l[e],r,i,c,`${u}[${e}]`):a(f[e],l[0],r,i,c,`${u}[${e}]`)})):A(l)&&(f=j(f,r,i,c)):A(f)&&f.length>0&&(r.wrapHeadsWith||r.wrapTailsWith)&&(r.preventDoubleWrapping&&(""!==r.wrapHeadsWith&&o(f,r.wrapHeadsWith.trim()).length||""!==r.wrapTailsWith&&o(f,r.wrapTailsWith.trim()).length)||(f=(i?r.wrapHeadsWith:"")+f+(i?r.wrapTailsWith:""))),f}return i.dontWrapKeys=W(i.dontWrapKeys),i.preventWrappingIfContains=W(i.preventWrappingIfContains),i.dontWrapPaths=W(i.dontWrapPaths),i.ignore=W(i.ignore),"number"!=typeof i.whatToDoWhenReferenceIsMissing&&(i.whatToDoWhenReferenceIsMissing=+i.whatToDoWhenReferenceIsMissing||0),a(t,e,i)},t.version="6.0.3",Object.defineProperty(t,"__esModule",{value:!0})}));
