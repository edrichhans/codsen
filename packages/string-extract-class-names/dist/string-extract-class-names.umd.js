/**
 * string-extract-class-names
 * Extracts CSS class/id names from a string
 * Version: 6.0.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-extract-class-names/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).stringExtractClassNames={})}(this,(function(t){"use strict";Function.prototype.toString.call(Object);var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var r={exports:{}};t(r,r.exports)}((function(t,e){var n="__lodash_hash_undefined__",o=9007199254740991,u="[object Arguments]",i="[object Boolean]",c="[object Date]",a="[object Function]",s="[object GeneratorFunction]",f="[object Map]",l="[object Number]",p="[object Object]",d="[object Promise]",h="[object RegExp]",y="[object Set]",_="[object String]",v="[object Symbol]",b="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",A="[object Float64Array]",m="[object Int8Array]",O="[object Int16Array]",x="[object Int32Array]",S="[object Uint8Array]",N="[object Uint8ClampedArray]",E="[object Uint16Array]",T="[object Uint32Array]",$=/\w*$/,I=/^\[object .+?Constructor\]$/,P=/^(?:0|[1-9]\d*)$/,R={};R[u]=R["[object Array]"]=R[g]=R[j]=R[i]=R[c]=R[w]=R[A]=R[m]=R[O]=R[x]=R[f]=R[l]=R[p]=R[h]=R[y]=R[_]=R[v]=R[S]=R[N]=R[E]=R[T]=!0,R["[object Error]"]=R[a]=R[b]=!1;var C="object"==typeof self&&self&&self.Object===Object&&self,F="object"==typeof r&&r&&r.Object===Object&&r||C||Function("return this")(),k=e&&!e.nodeType&&e,B=k&&t&&!t.nodeType&&t,M=B&&B.exports===k;function U(t,r){return t.set(r[0],r[1]),t}function W(t,r){return t.add(r),t}function D(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function z(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function L(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function V(t,r){return function(e){return t(r(e))}}function q(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var G,H=Array.prototype,J=Function.prototype,K=Object.prototype,Q=F["__core-js_shared__"],X=(G=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+G:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=M?F.Buffer:void 0,nt=F.Symbol,ot=F.Uint8Array,ut=V(Object.getPrototypeOf,Object),it=Object.create,ct=K.propertyIsEnumerable,at=H.splice,st=Object.getOwnPropertySymbols,ft=et?et.isBuffer:void 0,lt=V(Object.keys,Object),pt=Bt(F,"DataView"),dt=Bt(F,"Map"),ht=Bt(F,"Promise"),yt=Bt(F,"Set"),_t=Bt(F,"WeakMap"),vt=Bt(Object,"create"),bt=zt(pt),gt=zt(dt),jt=zt(ht),wt=zt(yt),At=zt(_t),mt=nt?nt.prototype:void 0,Ot=mt?mt.valueOf:void 0;function xt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function St(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Nt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){this.__data__=new St(t)}function Tt(t,r){var e=Vt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==u)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var i in t)!r&&!Z.call(t,i)||o&&("length"==i||Wt(i,n))||e.push(i);return e}function $t(t,r,e){var n=t[r];Z.call(t,r)&&Lt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function It(t,r){for(var e=t.length;e--;)if(Lt(t[e][0],r))return e;return-1}function Pt(t,r,e,n,o,d,b){var I;if(n&&(I=d?n(t,o,d,b):n(t)),void 0!==I)return I;if(!Jt(t))return t;var P=Vt(t);if(P){if(I=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,I)}else{var C=Ut(t),F=C==a||C==s;if(Gt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(C==p||C==u||F&&!d){if(z(t))return d?t:{};if(I=function(t){return"function"!=typeof t.constructor||Dt(t)?{}:(r=ut(t),Jt(r)?it(r):{});var r}(F?{}:t),!r)return function(t,r){return Ft(t,Mt(t),r)}(t,function(t,r){return t&&Ft(r,Kt(r),t)}(I,t))}else{if(!R[C])return d?t:{};I=function(t,r,e,n){var o=t.constructor;switch(r){case g:return Ct(t);case i:case c:return new o(+t);case j:return function(t,r){var e=r?Ct(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case w:case A:case m:case O:case x:case S:case N:case E:case T:return function(t,r){var e=r?Ct(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case f:return function(t,r,e){return D(r?e(L(t),!0):L(t),U,new t.constructor)}(t,n,e);case l:case _:return new o(t);case h:return function(t){var r=new t.constructor(t.source,$.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,e){return D(r?e(q(t),!0):q(t),W,new t.constructor)}(t,n,e);case v:return u=t,Ot?Object(Ot.call(u)):{}}var u}(t,C,Pt,r)}}b||(b=new Et);var k=b.get(t);if(k)return k;if(b.set(t,I),!P)var B=e?function(t){return function(t,r,e){var n=r(t);return Vt(t)?n:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(n,e(t))}(t,Kt,Mt)}(t):Kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(B||t,(function(o,u){B&&(o=t[u=o]),$t(I,u,Pt(o,r,e,n,u,t,b))})),I}function Rt(t){return!(!Jt(t)||(r=t,X&&X in r))&&(Ht(t)||z(t)?rt:I).test(zt(t));var r}function Ct(t){var r=new t.constructor(t.byteLength);return new ot(r).set(new ot(t)),r}function Ft(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var i=r[o],c=n?n(e[i],t[i],i,e,t):void 0;$t(e,i,void 0===c?t[i]:c)}return e}function kt(t,r){var e,n,o=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Bt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Rt(e)?e:void 0}xt.prototype.clear=function(){this.__data__=vt?vt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var r=this.__data__;if(vt){var e=r[t];return e===n?void 0:e}return Z.call(r,t)?r[t]:void 0},xt.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Z.call(r,t)},xt.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?n:r,this},St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var r=this.__data__,e=It(r,t);return!(e<0)&&(e==r.length-1?r.pop():at.call(r,e,1),!0)},St.prototype.get=function(t){var r=this.__data__,e=It(r,t);return e<0?void 0:r[e][1]},St.prototype.has=function(t){return It(this.__data__,t)>-1},St.prototype.set=function(t,r){var e=this.__data__,n=It(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Nt.prototype.clear=function(){this.__data__={hash:new xt,map:new(dt||St),string:new xt}},Nt.prototype.delete=function(t){return kt(this,t).delete(t)},Nt.prototype.get=function(t){return kt(this,t).get(t)},Nt.prototype.has=function(t){return kt(this,t).has(t)},Nt.prototype.set=function(t,r){return kt(this,t).set(t,r),this},Et.prototype.clear=function(){this.__data__=new St},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,r){var e=this.__data__;if(e instanceof St){var n=e.__data__;if(!dt||n.length<199)return n.push([t,r]),this;e=this.__data__=new Nt(n)}return e.set(t,r),this};var Mt=st?V(st,Object):function(){return[]},Ut=function(t){return tt.call(t)};function Wt(t,r){return!!(r=null==r?o:r)&&("number"==typeof t||P.test(t))&&t>-1&&t%1==0&&t<r}function Dt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function zt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,r){return t===r||t!=t&&r!=r}(pt&&Ut(new pt(new ArrayBuffer(1)))!=j||dt&&Ut(new dt)!=f||ht&&Ut(ht.resolve())!=d||yt&&Ut(new yt)!=y||_t&&Ut(new _t)!=b)&&(Ut=function(t){var r=tt.call(t),e=r==p?t.constructor:void 0,n=e?zt(e):void 0;if(n)switch(n){case bt:return j;case gt:return f;case jt:return d;case wt:return y;case At:return b}return r});var Vt=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=o}(t.length)&&!Ht(t)}var Gt=ft||function(){return!1};function Ht(t){var r=Jt(t)?tt.call(t):"";return r==a||r==s}function Jt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return qt(t)?Tt(t):function(t){if(!Dt(t))return lt(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return Pt(t,!0,!0)}}));var e=" ";function n(t,r){return void 0===r&&(r=0),function(t){var r=t.str,n=t.idx,o=void 0===n?0:n,u=t.stopAtNewlines,i=void 0!==u&&u,c=t.stopAtRawNbsp,a=void 0!==c&&c;if("string"!=typeof r||!r.length)return null;if(o&&"number"==typeof o||(o=0),!r[o+1])return null;if(r[o+1]&&(r[o+1].trim()||i&&"\n\r".includes(r[o+1])||a&&r[o+1]===e))return o+1;if(r[o+2]&&(r[o+2].trim()||i&&"\n\r".includes(r[o+2])||a&&r[o+2]===e))return o+2;for(var s=o+1,f=r.length;s<f;s++)if(r[s].trim()||i&&"\n\r".includes(r[s])||a&&r[s]===e)return s;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}function o(t,r){return void 0===r&&(r=0),function(t){var r=t.str,n=t.idx,o=t.stopAtNewlines,u=t.stopAtRawNbsp;if("string"!=typeof r||!r.length)return null;if(n&&"number"==typeof n||(n=0),n<1)return null;if(r[~-n]&&(r[~-n].trim()||o&&"\n\r".includes(r[~-n])||u&&r[~-n]===e))return~-n;if(r[n-2]&&(r[n-2].trim()||o&&"\n\r".includes(r[n-2])||u&&r[n-2]===e))return n-2;for(var i=n;i--;)if(r[i]&&(r[i].trim()||o&&"\n\r".includes(r[i])||u&&r[i]===e))return i;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}t.extract=function(t){if("string"!=typeof t)throw new TypeError("string-extract-class-names: [THROW_ID_01] first str should be string, not "+typeof t+", currently equal to "+JSON.stringify(t,null,4));var r;function e(t){return"string"==typeof t&&!!t.length&&(t.charCodeAt(0)>64&&t.charCodeAt(0)<91||t.charCodeAt(0)>96&&t.charCodeAt(0)<123)}for(var u=null,i={res:[],ranges:[]},c=0,a=t.length;c<=a;c++){null!==u&&c>=u&&(!t[c]||!t[c].trim()||".# ~\\!@$%^&*()+=,/';:\"?><[]{}|`".includes(t[c]))&&(c>u+1&&(i.ranges.push([u,c]),i.res.push(""+(r||"")+t.slice(u,c)),r&&(r=void 0)),u=null),!t[c]||null!==u||"."!==t[c]&&"#"!==t[c]||(u=c);var s=n(t,c+4);t.startsWith("class",c)&&"number"==typeof o(t,c)&&"["===t[o(t,c)]&&"number"==typeof s&&"="===t[s]&&(n(t,s)&&e(t[n(t,s)])?u=n(t,s):"'\"".includes(t[n(t,s)])&&e(t[n(t,n(t,s))])&&(u=n(t,n(t,s))),r=".");var f=n(t,c+1);t.startsWith("id",c)&&"["===t[o(t,c)]&&null!==f&&"="===t[f]&&(e(t[n(t,f)])?u=n(t,f):"'\"".includes(t[n(t,f)])&&e(t[n(t,n(t,f))])&&(u=n(t,n(t,f))),r="#")}return i.ranges.length||(i.ranges=null),i},t.version="6.0.9",Object.defineProperty(t,"__esModule",{value:!0})}));
