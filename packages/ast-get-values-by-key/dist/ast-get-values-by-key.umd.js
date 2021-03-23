/**
 * ast-get-values-by-key
 * Extract values and paths from AST by keys OR set them by keys
 * Version: 3.0.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ast-get-values-by-key/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).astGetValuesByKey={})}(this,(function(t){"use strict";function e(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function n(t){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(r){e(t,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(t){if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0;return function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=t[Symbol.iterator]()).next.bind(r)}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var u=function(t){var e={exports:{}};return t(e,e.exports),e.exports}((function(t,e){var r="__lodash_hash_undefined__",n=9007199254740991,o="[object Arguments]",a="[object Boolean]",u="[object Date]",c="[object Function]",f="[object GeneratorFunction]",s="[object Map]",l="[object Number]",p="[object Object]",y="[object Promise]",v="[object RegExp]",h="[object Set]",b="[object String]",d="[object Symbol]",_="[object WeakMap]",g="[object ArrayBuffer]",j="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",m="[object Int8Array]",A="[object Int16Array]",S="[object Int32Array]",x="[object Uint8Array]",P="[object Uint8ClampedArray]",E="[object Uint16Array]",T="[object Uint32Array]",$=/\w*$/,I=/^\[object .+?Constructor\]$/,k=/^(?:0|[1-9]\d*)$/,M={};M[o]=M["[object Array]"]=M[g]=M[j]=M[a]=M[u]=M[w]=M[O]=M[m]=M[A]=M[S]=M[s]=M[l]=M[p]=M[v]=M[h]=M[b]=M[d]=M[x]=M[P]=M[E]=M[T]=!0,M["[object Error]"]=M[c]=M[_]=!1;var N="object"==typeof self&&self&&self.Object===Object&&self,B="object"==typeof i&&i&&i.Object===Object&&i||N||Function("return this")(),D=e&&!e.nodeType&&e,F=D&&t&&!t.nodeType&&t,U=F&&F.exports===D;function K(t,e){return t.set(e[0],e[1]),t}function R(t,e){return t.add(e),t}function C(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function V(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function z(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function G(t,e){return function(r){return t(e(r))}}function L(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var W,J=Array.prototype,q=Function.prototype,H=Object.prototype,Q=B["__core-js_shared__"],X=(W=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+W:"",Y=q.toString,Z=H.hasOwnProperty,tt=H.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=U?B.Buffer:void 0,nt=B.Symbol,ot=B.Uint8Array,at=G(Object.getPrototypeOf,Object),it=Object.create,ut=H.propertyIsEnumerable,ct=J.splice,ft=Object.getOwnPropertySymbols,st=rt?rt.isBuffer:void 0,lt=G(Object.keys,Object),pt=Ft(B,"DataView"),yt=Ft(B,"Map"),vt=Ft(B,"Promise"),ht=Ft(B,"Set"),bt=Ft(B,"WeakMap"),dt=Ft(Object,"create"),_t=Vt(pt),gt=Vt(yt),jt=Vt(vt),wt=Vt(ht),Ot=Vt(bt),mt=nt?nt.prototype:void 0,At=mt?mt.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function xt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Pt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){this.__data__=new xt(t)}function Tt(t,e){var r=Gt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Lt(t)}(t)&&Z.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==o)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,a=!!n;for(var i in t)!e&&!Z.call(t,i)||a&&("length"==i||Rt(i,n))||r.push(i);return r}function $t(t,e,r){var n=t[e];Z.call(t,e)&&zt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function It(t,e){for(var r=t.length;r--;)if(zt(t[r][0],e))return r;return-1}function kt(t,e,r,n,i,y,_){var I;if(n&&(I=y?n(t,i,y,_):n(t)),void 0!==I)return I;if(!qt(t))return t;var k=Gt(t);if(k){if(I=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,I)}else{var N=Kt(t),B=N==c||N==f;if(Wt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(N==p||N==o||B&&!y){if(V(t))return y?t:{};if(I=function(t){return"function"!=typeof t.constructor||Ct(t)?{}:(e=at(t),qt(e)?it(e):{});var e}(B?{}:t),!e)return function(t,e){return Bt(t,Ut(t),e)}(t,function(t,e){return t&&Bt(e,Ht(e),t)}(I,t))}else{if(!M[N])return y?t:{};I=function(t,e,r,n){var o=t.constructor;switch(e){case g:return Nt(t);case a:case u:return new o(+t);case j:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case w:case O:case m:case A:case S:case x:case P:case E:case T:return function(t,e){var r=e?Nt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case s:return function(t,e,r){return C(e?r(z(t),!0):z(t),K,new t.constructor)}(t,n,r);case l:case b:return new o(t);case v:return function(t){var e=new t.constructor(t.source,$.exec(t));return e.lastIndex=t.lastIndex,e}(t);case h:return function(t,e,r){return C(e?r(L(t),!0):L(t),R,new t.constructor)}(t,n,r);case d:return i=t,At?Object(At.call(i)):{}}var i}(t,N,kt,e)}}_||(_=new Et);var D=_.get(t);if(D)return D;if(_.set(t,I),!k)var F=r?function(t){return function(t,e,r){var n=e(t);return Gt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Ht,Ut)}(t):Ht(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(F||t,(function(o,a){F&&(o=t[a=o]),$t(I,a,kt(o,e,r,n,a,t,_))})),I}function Mt(t){return!(!qt(t)||(e=t,X&&X in e))&&(Jt(t)||V(t)?et:I).test(Vt(t));var e}function Nt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Bt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var i=e[o],u=n?n(r[i],t[i],i,r,t):void 0;$t(r,i,void 0===u?t[i]:u)}return r}function Dt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ft(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}St.prototype.clear=function(){this.__data__=dt?dt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(dt){var n=e[t];return n===r?void 0:n}return Z.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return dt?void 0!==e[t]:Z.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=dt&&void 0===e?r:e,this},xt.prototype.clear=function(){this.__data__=[]},xt.prototype.delete=function(t){var e=this.__data__,r=It(e,t);return!(r<0)&&(r==e.length-1?e.pop():ct.call(e,r,1),!0)},xt.prototype.get=function(t){var e=this.__data__,r=It(e,t);return r<0?void 0:e[r][1]},xt.prototype.has=function(t){return It(this.__data__,t)>-1},xt.prototype.set=function(t,e){var r=this.__data__,n=It(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Pt.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||xt),string:new St}},Pt.prototype.delete=function(t){return Dt(this,t).delete(t)},Pt.prototype.get=function(t){return Dt(this,t).get(t)},Pt.prototype.has=function(t){return Dt(this,t).has(t)},Pt.prototype.set=function(t,e){return Dt(this,t).set(t,e),this},Et.prototype.clear=function(){this.__data__=new xt},Et.prototype.delete=function(t){return this.__data__.delete(t)},Et.prototype.get=function(t){return this.__data__.get(t)},Et.prototype.has=function(t){return this.__data__.has(t)},Et.prototype.set=function(t,e){var r=this.__data__;if(r instanceof xt){var n=r.__data__;if(!yt||n.length<199)return n.push([t,e]),this;r=this.__data__=new Pt(n)}return r.set(t,e),this};var Ut=ft?G(ft,Object):function(){return[]},Kt=function(t){return tt.call(t)};function Rt(t,e){return!!(e=null==e?n:e)&&("number"==typeof t||k.test(t))&&t>-1&&t%1==0&&t<e}function Ct(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||H)}function Vt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function zt(t,e){return t===e||t!=t&&e!=e}(pt&&Kt(new pt(new ArrayBuffer(1)))!=j||yt&&Kt(new yt)!=s||vt&&Kt(vt.resolve())!=y||ht&&Kt(new ht)!=h||bt&&Kt(new bt)!=_)&&(Kt=function(t){var e=tt.call(t),r=e==p?t.constructor:void 0,n=r?Vt(r):void 0;if(n)switch(n){case _t:return j;case gt:return s;case jt:return y;case wt:return h;case Ot:return _}return e});var Gt=Array.isArray;function Lt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Jt(t)}var Wt=st||function(){return!1};function Jt(t){var e=qt(t)?tt.call(t):"";return e==c||e==f}function qt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Ht(t){return Lt(t)?Tt(t):function(t){if(!Ct(t))return lt(t);var e=[];for(var r in Object(t))Z.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return kt(t,!0,!0)}}));var c,f,s=Object.prototype,l=Function.prototype.toString,p=s.hasOwnProperty,y=l.call(Object),v=s.toString,h=(c=Object.getPrototypeOf,f=Object,function(t){return c(f(t))});var b=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=v.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=h(t);if(null===e)return!0;var r=p.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==y};function d(t){if(t.includes(".")){var e=t.lastIndexOf(".");if(!t.slice(0,e).includes("."))return t.slice(0,e);for(var r=e-1;r--;)if("."===t[r])return t.slice(r+1,e)}return null}var _=new Map;function g(t,e){if(!Array.isArray(t))switch(typeof t){case"string":t=[t];break;case"undefined":t=[];break;default:throw new TypeError("Expected '"+e+"' to be a string or an array, but got a type of '"+typeof t+"'")}return t.filter((function(t){if("string"!=typeof t){if(void 0===t)return!1;throw new TypeError("Expected '"+e+"' to be an array of strings, but found a type of '"+typeof t+"' in the array")}return!0}))}function j(t,e){e=n({caseSensitive:!1},e);var r=t+JSON.stringify(e);if(_.has(r))return _.get(r);var o="!"===t[0];o&&(t=t.slice(1)),t=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(t).replace(/\\\*/g,"[\\s\\S]*");var a=new RegExp("^"+t+"$",e.caseSensitive?"":"i");return a.negated=o,_.set(r,a),a}var w=function(t,e,r){if(t=g(t,"inputs"),0===(e=g(e,"patterns")).length)return[];var n="!"===e[0][0];e=e.map((function(t){return j(t,r)}));for(var o,i=[],u=a(t);!(o=u()).done;){for(var c,f=o.value,s=n,l=a(e);!(c=l()).done;){var p=c.value;p.test(f)&&(s=!p.negated)}s&&i.push(f)}return i};w.isMatch=function(t,e,r){return t=g(t,"inputs"),0!==(e=g(e,"patterns")).length&&t.some((function(t){return e.every((function(e){var n=j(e,r),o=n.test(t);return n.negated?!o:o}))}))};t.getByKey=function(t,e,r){var o;void 0!==r&&(o=Array.isArray(r)?u(r):[u(r)]);var a=[],i=function t(e,r,o,a){var i,c=u(e),f=n({depth:-1,path:""},o);if(f.depth+=1,Array.isArray(c))for(var s=0,l=c.length;s<l&&!a.now;s++){var p=f.path?f.path+"."+s:""+s;void 0!==c[s]?(f.parent=u(c),f.parentType="array",f.parentKey=d(p),i=t(r(c[s],void 0,n(n({},f),{},{path:p}),a),r,n(n({},f),{},{path:p}),a),Number.isNaN(i)&&s<c.length?(c.splice(s,1),s-=1):c[s]=i):c.splice(s,1)}else if(b(c))for(var y in c){if(a.now&&null!=y)break;var v=f.path?f.path+"."+y:y;0===f.depth&&null!=y&&(f.topmostKey=y),f.parent=u(c),f.parentType="object",f.parentKey=d(v),i=t(r(y,c[y],n(n({},f),{},{path:v}),a),r,n(n({},f),{},{path:v}),a),Number.isNaN(i)?delete c[y]:c[y]=i}return c}(t,(function(t,r,n){var i=void 0!==r?r:t;if(void 0!==r&&w.isMatch(t,e,{caseSensitive:!0}))if(void 0===o)a.push({val:r,path:n.path});else if(o.length)return o.shift();return i}),{},{now:!1});return void 0===o?a:i},t.version="3.0.9",Object.defineProperty(t,"__esModule",{value:!0})}));
