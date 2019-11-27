/**
 * ranges-merge
 * Merge and sort arrays which mean string slice ranges
 * Version: 4.2.27
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/ranges-merge
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).rangesMerge=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}var e=function(t,e){if(e){if("object"!=typeof e)throw new TypeError(String(e)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero&&0===t)return!0}}return Number.isSafeInteger(t)&&t>=1};const r=Array.isArray;function n(t,n){if(!r(t))throw new TypeError(`ranges-sort: [THROW_ID_01] Input must be an array, consisting of range arrays! Currently its type is: ${typeof t}, equal to: ${JSON.stringify(t,null,4)}`);if(0===t.length)return t;const o=Object.assign({},{strictlyTwoElementsInRangeArrays:!1,progressFn:null},n);let a,i;if(o.strictlyTwoElementsInRangeArrays&&!t.every((t,e)=>2===t.length||(a=e,i=t.length,!1)))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${a}th range (${JSON.stringify(t[a],null,4)}) has not two but ${i} elements!`);if(!t.every((t,r)=>!(!e(t[0],{includeZero:!0})||!e(t[1],{includeZero:!0}))||(a=r,!1)))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${a}th range (${JSON.stringify(t[a],null,4)}) does not consist of only natural numbers!`);const u=t.length*t.length;let c=0;return Array.from(t).sort((t,e)=>(o.progressFn&&(c++,o.progressFn(Math.floor(100*c/u))),t[0]===e[0]?t[1]<e[1]?-1:t[1]>e[1]?1:0:t[0]<e[0]?-1:1))}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var a=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t,e){var r=200,n="__lodash_hash_undefined__",a=9007199254740991,i="[object Arguments]",u="[object Boolean]",c="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",p="[object Number]",y="[object Object]",g="[object RegExp]",h="[object Set]",_="[object String]",b="[object Symbol]",d="[object ArrayBuffer]",v="[object DataView]",j="[object Float32Array]",w="[object Float64Array]",m="[object Int8Array]",O="[object Int16Array]",T="[object Int32Array]",S="[object Uint8Array]",A="[object Uint8ClampedArray]",E="[object Uint16Array]",F="[object Uint32Array]",x=/\w*$/,I=/^\[object .+?Constructor\]$/,R=/^(?:0|[1-9]\d*)$/,$={};$[i]=$["[object Array]"]=$[d]=$[v]=$[u]=$[c]=$[j]=$[w]=$[m]=$[O]=$[T]=$[l]=$[p]=$[y]=$[g]=$[h]=$[_]=$[b]=$[S]=$[A]=$[E]=$[F]=!0,$["[object Error]"]=$[s]=$["[object WeakMap]"]=!1;var M="object"==typeof o&&o&&o.Object===Object&&o,W="object"==typeof self&&self&&self.Object===Object&&self,D=M||W||Function("return this")(),P=e&&!e.nodeType&&e,H=P&&t&&!t.nodeType&&t,N=H&&H.exports===P;function k(t,e){return t.set(e[0],e[1]),t}function Z(t,e){return t.add(e),t}function J(t,e,r,n){var o=-1,a=t?t.length:0;for(n&&a&&(r=t[++o]);++o<a;)r=e(r,t[o],o,t);return r}function B(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function U(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function q(t,e){return function(r){return t(e(r))}}function C(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var z,L=Array.prototype,V=Function.prototype,G=Object.prototype,K=D["__core-js_shared__"],Q=(z=/[^.]+$/.exec(K&&K.keys&&K.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",X=V.toString,Y=G.hasOwnProperty,tt=G.toString,et=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),rt=N?D.Buffer:void 0,nt=D.Symbol,ot=D.Uint8Array,at=q(Object.getPrototypeOf,Object),it=Object.create,ut=G.propertyIsEnumerable,ct=L.splice,st=Object.getOwnPropertySymbols,ft=rt?rt.isBuffer:void 0,lt=q(Object.keys,Object),pt=Ht(D,"DataView"),yt=Ht(D,"Map"),gt=Ht(D,"Promise"),ht=Ht(D,"Set"),_t=Ht(D,"WeakMap"),bt=Ht(Object,"create"),dt=Bt(pt),vt=Bt(yt),jt=Bt(gt),wt=Bt(ht),mt=Bt(_t),Ot=nt?nt.prototype:void 0,Tt=Ot?Ot.valueOf:void 0;function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Ft(t){this.__data__=new At(t)}function xt(t,e){var r=qt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ct(t)}(t)&&Y.call(t,"callee")&&(!ut.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var a in t)!e&&!Y.call(t,a)||o&&("length"==a||Zt(a,n))||r.push(a);return r}function It(t,e,r){var n=t[e];Y.call(t,e)&&Ut(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Rt(t,e){for(var r=t.length;r--;)if(Ut(t[r][0],e))return r;return-1}function $t(t,e,r,n,o,a,I){var R;if(n&&(R=a?n(t,o,a,I):n(t)),void 0!==R)return R;if(!Vt(t))return t;var M=qt(t);if(M){if(R=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&Y.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,R)}else{var W=kt(t),D=W==s||W==f;if(zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(W==y||W==i||D&&!a){if(B(t))return a?t:{};if(R=function(t){return"function"!=typeof t.constructor||Jt(t)?{}:(e=at(t),Vt(e)?it(e):{});var e}(D?{}:t),!e)return function(t,e){return Dt(t,Nt(t),e)}(t,function(t,e){return t&&Dt(e,Gt(e),t)}(R,t))}else{if(!$[W])return a?t:{};R=function(t,e,r,n){var o=t.constructor;switch(e){case d:return Wt(t);case u:case c:return new o(+t);case v:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case w:case m:case O:case T:case S:case A:case E:case F:return function(t,e){var r=e?Wt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return function(t,e,r){return J(e?r(U(t),!0):U(t),k,new t.constructor)}(t,n,r);case p:case _:return new o(t);case g:return(s=new(i=t).constructor(i.source,x.exec(i))).lastIndex=i.lastIndex,s;case h:return function(t,e,r){return J(e?r(C(t),!0):C(t),Z,new t.constructor)}(t,n,r);case b:return a=t,Tt?Object(Tt.call(a)):{}}var a;var i,s}(t,W,$t,e)}}I||(I=new Ft);var P=I.get(t);if(P)return P;if(I.set(t,R),!M)var H=r?function(t){return function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Gt,Nt)}(t):Gt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(H||t,(function(o,a){H&&(o=t[a=o]),It(R,a,$t(o,e,r,n,a,t,I))})),R}function Mt(t){return!(!Vt(t)||(e=t,Q&&Q in e))&&(Lt(t)||B(t)?et:I).test(Bt(t));var e}function Wt(t){var e=new t.constructor(t.byteLength);return new ot(e).set(new ot(t)),e}function Dt(t,e,r,n){r||(r={});for(var o=-1,a=e.length;++o<a;){var i=e[o],u=n?n(r[i],t[i],i,r,t):void 0;It(r,i,void 0===u?t[i]:u)}return r}function Pt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function Ht(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return Mt(r)?r:void 0}St.prototype.clear=function(){this.__data__=bt?bt(null):{}},St.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},St.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===n?void 0:r}return Y.call(e,t)?e[t]:void 0},St.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:Y.call(e,t)},St.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?n:e,this},At.prototype.clear=function(){this.__data__=[]},At.prototype.delete=function(t){var e=this.__data__,r=Rt(e,t);return!(r<0)&&(r==e.length-1?e.pop():ct.call(e,r,1),!0)},At.prototype.get=function(t){var e=this.__data__,r=Rt(e,t);return r<0?void 0:e[r][1]},At.prototype.has=function(t){return Rt(this.__data__,t)>-1},At.prototype.set=function(t,e){var r=this.__data__,n=Rt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new St,map:new(yt||At),string:new St}},Et.prototype.delete=function(t){return Pt(this,t).delete(t)},Et.prototype.get=function(t){return Pt(this,t).get(t)},Et.prototype.has=function(t){return Pt(this,t).has(t)},Et.prototype.set=function(t,e){return Pt(this,t).set(t,e),this},Ft.prototype.clear=function(){this.__data__=new At},Ft.prototype.delete=function(t){return this.__data__.delete(t)},Ft.prototype.get=function(t){return this.__data__.get(t)},Ft.prototype.has=function(t){return this.__data__.has(t)},Ft.prototype.set=function(t,e){var n=this.__data__;if(n instanceof At){var o=n.__data__;if(!yt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new Et(o)}return n.set(t,e),this};var Nt=st?q(st,Object):function(){return[]},kt=function(t){return tt.call(t)};function Zt(t,e){return!!(e=null==e?a:e)&&("number"==typeof t||R.test(t))&&t>-1&&t%1==0&&t<e}function Jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Bt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Ut(t,e){return t===e||t!=t&&e!=e}(pt&&kt(new pt(new ArrayBuffer(1)))!=v||yt&&kt(new yt)!=l||gt&&"[object Promise]"!=kt(gt.resolve())||ht&&kt(new ht)!=h||_t&&"[object WeakMap]"!=kt(new _t))&&(kt=function(t){var e=tt.call(t),r=e==y?t.constructor:void 0,n=r?Bt(r):void 0;if(n)switch(n){case dt:return v;case vt:return l;case jt:return"[object Promise]";case wt:return h;case mt:return"[object WeakMap]"}return e});var qt=Array.isArray;function Ct(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=a}(t.length)&&!Lt(t)}var zt=ft||function(){return!1};function Lt(t){var e=Vt(t)?tt.call(t):"";return e==s||e==f}function Vt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Gt(t){return Ct(t)?xt(t):function(t){if(!Jt(t))return lt(t);var e=[];for(var r in Object(t))Y.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return $t(t,!0,!0)}})),i="[object Object]";var u,c,s=Function.prototype,f=Object.prototype,l=s.toString,p=f.hasOwnProperty,y=l.call(Object),g=f.toString,h=(u=Object.getPrototypeOf,c=Object,function(t){return u(c(t))});var _=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||g.call(t)!=i||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=h(t);if(null===e)return!0;var r=p.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&l.call(r)==y};return function(e,r){function o(t){return"string"==typeof t}if(!Array.isArray(e))return e;var i,u={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};if(r){if(!_(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n".concat(JSON.stringify(r,null,4)," (type ").concat(t(r),")"));if((i=Object.assign({},u,r)).progressFn&&_(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'.concat(t(i.progressFn),'", equal to ').concat(JSON.stringify(i.progressFn,null,4)));if(i.mergeType&&1!==i.mergeType&&2!==i.mergeType)if(o(i.mergeType)&&"1"===i.mergeType.trim())i.mergeType=1;else{if(!o(i.mergeType)||"2"!==i.mergeType.trim())throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'.concat(t(i.mergeType),'", equal to ').concat(JSON.stringify(i.mergeType,null,4)));i.mergeType=2}if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'.concat(t(i.joinRangesThatTouchEdges),'", equal to ').concat(JSON.stringify(i.joinRangesThatTouchEdges,null,4)))}else i=a(u);for(var c,s,f,l=a(e).filter((function(t){return void 0!==t[2]||t[0]!==t[1]})),p=(c=i.progressFn?n(l,{progressFn:function(t){(f=Math.floor(t/5))!==s&&(s=f,i.progressFn(f))}}):n(l)).length-1,y=p;y>0;y--)i.progressFn&&(f=Math.floor(78*(1-y/p))+21)!==s&&f>s&&(s=f,i.progressFn(f)),(c[y][0]<=c[y-1][0]||!i.joinRangesThatTouchEdges&&c[y][0]<c[y-1][1]||i.joinRangesThatTouchEdges&&c[y][0]<=c[y-1][1])&&(c[y-1][0]=Math.min(c[y][0],c[y-1][0]),c[y-1][1]=Math.max(c[y][1],c[y-1][1]),void 0!==c[y][2]&&(c[y-1][0]>=c[y][0]||c[y-1][1]<=c[y][1])&&null!==c[y-1][2]&&(null===c[y][2]&&null!==c[y-1][2]?c[y-1][2]=null:void 0!==c[y-1][2]?2===i.mergeType&&c[y-1][0]===c[y][0]?c[y-1][2]=c[y][2]:c[y-1][2]+=c[y][2]:c[y-1][2]=c[y][2]),c.splice(y,1),y=c.length);return c}}));
