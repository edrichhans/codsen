/**
 * @name string-extract-class-names
 * @fileoverview Extracts CSS class/id names from a string
 * @version 6.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-extract-class-names/}
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).stringExtractClassNames={})}(this,(function(t){"use strict";Function.prototype.toString.call(Object);var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var r={exports:{}};t(r,r.exports)}((function(t,e){var n="__lodash_hash_undefined__",o=9007199254740991,u="[object Arguments]",i="[object Boolean]",c="[object Date]",a="[object Function]",s="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",h="[object Promise]",y="[object RegExp]",_="[object Set]",d="[object String]",b="[object Symbol]",v="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",A="[object Float64Array]",m="[object Int8Array]",O="[object Int16Array]",x="[object Int32Array]",S="[object Uint8Array]",$="[object Uint8ClampedArray]",N="[object Uint16Array]",E="[object Uint32Array]",T=/\w*$/,I=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,R={};R[u]=R["[object Array]"]=R[g]=R[j]=R[i]=R[c]=R[w]=R[A]=R[m]=R[O]=R[x]=R[f]=R[l]=R[p]=R[y]=R[_]=R[d]=R[b]=R[S]=R[$]=R[N]=R[E]=!0,R["[object Error]"]=R[a]=R[v]=!1;var C="object"==typeof self&&self&&self.Object===Object&&self,F="object"==typeof r&&r&&r.Object===Object&&r||C||Function("return this")(),k=e&&!e.nodeType&&e,B=k&&t&&!t.nodeType&&t,M=B&&B.exports===k;function U(t,r){return t.set(r[0],r[1]),t}function W(t,r){return t.add(r),t}function D(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function L(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function V(t,r){return function(e){return t(r(e))}}function q(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var G,H=Array.prototype,J=Function.prototype,K=Object.prototype,Q=F["__core-js_shared__"],X=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=M?F.Buffer:void 0,nt=F.Symbol,ot=F.Uint8Array,ut=V(Object.getPrototypeOf,Object),it=Object.create,ct=K.propertyIsEnumerable,at=H.splice,st=Object.getOwnPropertySymbols,ft=et?et.isBuffer:void 0,lt=V(Object.keys,Object),pt=Bt(F,"DataView"),ht=Bt(F,"Map"),yt=Bt(F,"Promise"),_t=Bt(F,"Set"),dt=Bt(F,"WeakMap"),bt=Bt(Object,"create"),vt=zt(pt),gt=zt(ht),jt=zt(yt),wt=zt(_t),At=zt(dt),mt=nt?nt.prototype:void 0,Ot=mt?mt.valueOf:void 0;function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function $t(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Nt(t){this.__data__=new St(t)}function Et(t,r){var e=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==u)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var i in t)!r&&!Z.call(t,i)||o&&("length"==i||Wt(i,n))||e.push(i);return e}function Tt(t,r,e){var n=t[r];Z.call(t,r)&&Lt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function It(t,r){for(var e=t.length;e--;)if(Lt(t[e][0],r))return e;return-1}function Pt(t,r,e,n,o,h,v){var I;if(n&&(I=h?n(t,o,h,v):n(t)),void 0!==I)return I;if(!Jt(t))return t;var P=Vt(t);if(P){if(I=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,I)}else{var C=Ut(t),F=C==a||C==s;if(Gt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(C==p||C==u||F&&!h){if(z(t))return h?t:{};if(I=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(r=ut(t),Jt(r)?it(r):{});var r}(F?{}:t),!r)return function(t,r){return Ft(t,Mt(t),r)}(t,function(t,r){return t&&Ft(r,Kt(r),t)}(I,t))}else{if(!R[C])return h?t:{};I=function(t,r,e,n){var o=t.constructor;switch(r){case g:return Ct(t);case i:case c:return new o(+t);case j:return function(t,r){var e=r?Ct(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case w:case A:case m:case O:case x:case S:case $:case N:case E:return function(t,r){var e=r?Ct(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case f:return function(t,r,e){return D(r?e(L(t),!0):L(t),U,new t.constructor)}(t,n,e);case l:case d:return new o(t);case y:return function(t){var r=new t.constructor(t.source,T.exec(t));return r.lastIndex=t.lastIndex,r}(t);case _:return function(t,r,e){return D(r?e(q(t),!0):q(t),W,new t.constructor)}(t,n,e);case b:return u=t,Ot?Object(Ot.call(u)):{}}var u}(t,C,Pt,r)}}v||(v=new Nt);var k=v.get(t);if(k)return k;if(v.set(t,I),!P)var B=e?function(t){return function(t,r,e){var n=r(t);return Vt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Kt,Mt)}(t):Kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(B||t,(function(o,u){B&&(o=t[u=o]),Tt(I,u,Pt(o,r,e,n,u,t,v))})),I}function Rt(t){return!(!Jt(t)||(r=t,X&&X in r))&&(Ht(t)||z(t)?rt:I).test(zt(t));var r}function Ct(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Ft(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var i=r[o],c=n?n(e[i],t[i],i,e,t):void 0;Tt(e,i,void 0===c?t[i]:c)}return e}function kt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Bt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Rt(e)?e:void 0}xt.prototype.clear=function(){this.__data__=bt?bt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(bt){var e=r[t];return e===n?void 0:e}return Z.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return bt?void 0!==r[t]:Z.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=bt&&void 0===r?n:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=It(r,t);return!(e<0)&&(e==r.length-1?r.pop():at.call(r,e,1),!0)},St.prototype.get=function(t){var r=this.__data__,e=It(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return It(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=It(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},$t.prototype.clear=function(){this.__data__={hash:new xt,map:new(ht||St),string:new xt}},$t.prototype.delete=function(t){return kt(this,t).delete(t)},$t.prototype.get=function(t){return kt(this,t).get(t)},$t.prototype.has=function(t){return kt(this,t).has(t)},$t.prototype.set=function(t,r){return kt(this,t).set(t,r),this},Nt.prototype.clear=function(){this.__data__=new St},Nt.prototype.delete=function(t){return this.__data__.delete(t)},Nt.prototype.get=function(t){return this.__data__.get(t)},Nt.prototype.has=function(t){return this.__data__.has(t)},Nt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof St){var n=e.__data__;if(!ht||n.length<199)return n.push([t,r]),this;e=this.__data__=new $t(n)}return e.set(t,r),this};var Mt=st?V(st,Object):function(){return[]},Ut=function(t){return tt.call(t)};function Wt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<r}function Dt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,r){return t===r||t!=t&&r!=r}(pt&&Ut(new pt(new ArrayBuffer(1)))!=j||ht&&Ut(new ht)!=f||yt&&Ut(yt.resolve())!=h||_t&&Ut(new _t)!=_||dt&&Ut(new dt)!=v)&&(Ut=function(t){var r=tt.call(t),e=r==p?t.constructor:void 0,n=e?zt(e):void 0;if(n)switch(n){case vt:return j;case gt:return f;case jt:return h;case wt:return _;case At:return v}return r});var Vt=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Ht(t)}var Gt=ft||function(){return!1};function Ht(t){var r=Jt(t)?tt.call(t):"";return r==a||r==s}function Jt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return qt(t)?Et(t):function(t){if(!Dt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return Pt(t,!0,!0)}}));
/**
 * @name string-left-right
 * @fileoverview Looks up the first non-whitespace character to the left/right of a given index
 * @version 4.0.16
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/string-left-right/}
 */
const e=" ";function n(t,r=0){return function({str:t,idx:r=0,stopAtNewlines:n=!1,stopAtRawNbsp:o=!1}){if("string"!=typeof t||!t.length)return null;if(r&&"number"==typeof r||(r=0),!t[r+1])return null;if(t[r+1]&&(t[r+1].trim()||n&&"\n\r".includes(t[r+1])||o&&t[r+1]===e))return r+1;if(t[r+2]&&(t[r+2].trim()||n&&"\n\r".includes(t[r+2])||o&&t[r+2]===e))return r+2;for(let u=r+1,i=t.length;u<i;u++)if(t[u].trim()||n&&"\n\r".includes(t[u])||o&&t[u]===e)return u;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}function o(t,r=0){return function({str:t,idx:r,stopAtNewlines:n,stopAtRawNbsp:o}){if("string"!=typeof t||!t.length)return null;if(r&&"number"==typeof r||(r=0),r<1)return null;if(t[~-r]&&(t[~-r].trim()||n&&"\n\r".includes(t[~-r])||o&&t[~-r]===e))return~-r;if(t[r-2]&&(t[r-2].trim()||n&&"\n\r".includes(t[r-2])||o&&t[r-2]===e))return r-2;for(let u=r;u--;)if(t[u]&&(t[u].trim()||n&&"\n\r".includes(t[u])||o&&t[u]===e))return u;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}t.extract=function(t){if("string"!=typeof t)throw new TypeError(`string-extract-class-names: [THROW_ID_01] first str should be string, not ${typeof t}, currently equal to ${JSON.stringify(t,null,4)}`);const r=".# ~\\!@$%^&*()+=,/';:\"?><[]{}|`";let e;function u(t){return"string"==typeof t&&!!t.length&&(t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>96&&t.charCodeAt(0)<123)}let i=null;const c={res:[],ranges:[]};for(let a=0,s=t.length;a<=s;a++){null!==i&&a>=i&&(!t[a]||!t[a].trim()||r.includes(t[a]))&&(a>i+1&&(c.ranges.push([i,a]),c.res.push(`${e||""}${t.slice(i,a)}`),e&&(e=void 0)),i=null),!t[a]||null!==i||"."!==t[a]&&"#"!==t[a]||(i=a);const s=n(t,a+4);t.startsWith("class",a)&&"number"==typeof o(t,a)&&"["===t[o(t,a)]&&"number"==typeof s&&"="===t[s]&&(n(t,s)&&u(t[n(t,s)])?i=n(t,s):"'\"".includes(t[n(t,s)])&&u(t[n(t,n(t,s))])&&(i=n(t,n(t,s))),e=".");const f=n(t,a+1);t.startsWith("id",a)&&"["===t[o(t,a)]&&null!==f&&"="===t[f]&&(u(t[n(t,f)])?i=n(t,f):"'\"".includes(t[n(t,f)])&&u(t[n(t,n(t,f))])&&(i=n(t,n(t,f))),e="#")}return c.ranges.length||(c.ranges=null),c},t.version="6.0.16",Object.defineProperty(t,"__esModule",{value:!0})}));
