/**
 * edit-package-json
 * Edit package.json without parsing, as string, to keep the formatting intact
 * Version: 0.3.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/edit-package-json/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).editPackageJson={})}(this,(function(t){"use strict";function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))}))}return t}var i,o,u=Object.prototype,l=Function.prototype.toString,s=u.hasOwnProperty,a=l.call(Object),f=u.toString,c=(i=Object.getPrototypeOf,o=Object,function(t){return i(o(t))});var p=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=f.call(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r=c(t);if(null===r)return!0;var e=s.call(r,"constructor")&&r.constructor;return"function"==typeof e&&e instanceof e&&l.call(e)==a},g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var y=function(t){var r={exports:{}};return t(r,r.exports),r.exports}((function(t,r){var e="__lodash_hash_undefined__",n=9007199254740991,i="[object Arguments]",o="[object Boolean]",u="[object Date]",l="[object Function]",s="[object GeneratorFunction]",a="[object Map]",f="[object Number]",c="[object Object]",p="[object Promise]",y="[object RegExp]",h="[object Set]",d="[object String]",v="[object Symbol]",m="[object WeakMap]",b="[object ArrayBuffer]",_="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",j="[object Int8Array]",S="[object Int16Array]",N="[object Int32Array]",T="[object Uint8Array]",A="[object Uint8ClampedArray]",I="[object Uint16Array]",J="[object Uint32Array]",E=/\w*$/,R=/^\[object .+?Constructor\]$/,x=/^(?:0|[1-9]\d*)$/,W={};W[i]=W["[object Array]"]=W[b]=W[_]=W[o]=W[u]=W[w]=W[O]=W[j]=W[S]=W[N]=W[a]=W[f]=W[c]=W[y]=W[h]=W[d]=W[v]=W[T]=W[A]=W[I]=W[J]=!0,W["[object Error]"]=W[l]=W[m]=!1;var F="object"==typeof self&&self&&self.Object===Object&&self,D="object"==typeof g&&g&&g.Object===Object&&g||F||Function("return this")(),P=r&&!r.nodeType&&r,H=P&&t&&!t.nodeType&&t,M=H&&H.exports===P;function C(t,r){return t.set(r[0],r[1]),t}function k(t,r){return t.add(r),t}function q(t,r,e,n){var i=-1,o=t?t.length:0;for(n&&o&&(e=t[++i]);++i<o;)e=r(e,t[i],i,t);return e}function $(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function L(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function B(t,r){return function(e){return t(r(e))}}function U(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var z,V=Array.prototype,G=Function.prototype,K=Object.prototype,Q=D["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=G.toString,Z=K.hasOwnProperty,tt=K.toString,rt=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=M?D.Buffer:void 0,nt=D.Symbol,it=D.Uint8Array,ot=B(Object.getPrototypeOf,Object),ut=Object.create,lt=K.propertyIsEnumerable,st=V.splice,at=Object.getOwnPropertySymbols,ft=et?et.isBuffer:void 0,ct=B(Object.keys,Object),pt=Ht(D,"DataView"),gt=Ht(D,"Map"),yt=Ht(D,"Promise"),ht=Ht(D,"Set"),dt=Ht(D,"WeakMap"),vt=Ht(Object,"create"),mt=$t(pt),bt=$t(gt),_t=$t(yt),wt=$t(ht),Ot=$t(dt),jt=nt?nt.prototype:void 0,St=jt?jt.valueOf:void 0;function Nt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Tt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function At(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function It(t){this.__data__=new Tt(t)}function Jt(t,r){var e=Bt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&Ut(t)}(t)&&Z.call(t,"callee")&&(!lt.call(t,"callee")||tt.call(t)==i)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var u in t)!r&&!Z.call(t,u)||o&&("length"==u||kt(u,n))||e.push(u);return e}function Et(t,r,e){var n=t[r];Z.call(t,r)&&Lt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Rt(t,r){for(var e=t.length;e--;)if(Lt(t[e][0],r))return e;return-1}function xt(t,r,e,n,p,g,m){var R;if(n&&(R=g?n(t,p,g,m):n(t)),void 0!==R)return R;if(!Gt(t))return t;var x=Bt(t);if(x){if(R=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Z.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,R)}else{var F=Ct(t),D=F==l||F==s;if(zt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(F==c||F==i||D&&!g){if($(t))return g?t:{};if(R=function(t){return"function"!=typeof t.constructor||qt(t)?{}:(r=ot(t),Gt(r)?ut(r):{});var r}(D?{}:t),!r)return function(t,r){return Dt(t,Mt(t),r)}(t,function(t,r){return t&&Dt(r,Kt(r),t)}(R,t))}else{if(!W[F])return g?t:{};R=function(t,r,e,n){var i=t.constructor;switch(r){case b:return Ft(t);case o:case u:return new i(+t);case _:return function(t,r){var e=r?Ft(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case w:case O:case j:case S:case N:case T:case A:case I:case J:return function(t,r){var e=r?Ft(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case a:return function(t,r,e){return q(r?e(L(t),!0):L(t),C,new t.constructor)}(t,n,e);case f:case d:return new i(t);case y:return function(t){var r=new t.constructor(t.source,E.exec(t));return r.lastIndex=t.lastIndex,r}(t);case h:return function(t,r,e){return q(r?e(U(t),!0):U(t),k,new t.constructor)}(t,n,e);case v:return l=t,St?Object(St.call(l)):{}}var l}(t,F,xt,r)}}m||(m=new It);var P=m.get(t);if(P)return P;if(m.set(t,R),!x)var H=e?function(t){return function(t,r,e){var n=r(t);return Bt(t)?n:function(t,r){for(var e=-1,n=r.length,i=t.length;++e<n;)t[i+e]=r[e];return t}(n,e(t))}(t,Kt,Mt)}(t):Kt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(H||t,(function(i,o){H&&(i=t[o=i]),Et(R,o,xt(i,r,e,n,o,t,m))})),R}function Wt(t){return!(!Gt(t)||function(t){return!!X&&X in t}(t))&&(Vt(t)||$(t)?rt:R).test($t(t))}function Ft(t){var r=new t.constructor(t.byteLength);return new it(r).set(new it(t)),r}function Dt(t,r,e,n){e||(e={});for(var i=-1,o=r.length;++i<o;){var u=r[i],l=n?n(e[u],t[u],u,e,t):void 0;Et(e,u,void 0===l?t[u]:l)}return e}function Pt(t,r){var e,n,i=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?i["string"==typeof r?"string":"hash"]:i.map}function Ht(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Wt(e)?e:void 0}Nt.prototype.clear=function(){this.__data__=vt?vt(null):{}},Nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Nt.prototype.get=function(t){var r=this.__data__;if(vt){var n=r[t];return n===e?void 0:n}return Z.call(r,t)?r[t]:void 0},Nt.prototype.has=function(t){var r=this.__data__;return vt?void 0!==r[t]:Z.call(r,t)},Nt.prototype.set=function(t,r){return this.__data__[t]=vt&&void 0===r?e:r,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var r=this.__data__,e=Rt(r,t);return!(e<0)&&(e==r.length-1?r.pop():st.call(r,e,1),!0)},Tt.prototype.get=function(t){var r=this.__data__,e=Rt(r,t);return e<0?void 0:r[e][1]},Tt.prototype.has=function(t){return Rt(this.__data__,t)>-1},Tt.prototype.set=function(t,r){var e=this.__data__,n=Rt(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},At.prototype.clear=function(){this.__data__={hash:new Nt,map:new(gt||Tt),string:new Nt}},At.prototype.delete=function(t){return Pt(this,t).delete(t)},At.prototype.get=function(t){return Pt(this,t).get(t)},At.prototype.has=function(t){return Pt(this,t).has(t)},At.prototype.set=function(t,r){return Pt(this,t).set(t,r),this},It.prototype.clear=function(){this.__data__=new Tt},It.prototype.delete=function(t){return this.__data__.delete(t)},It.prototype.get=function(t){return this.__data__.get(t)},It.prototype.has=function(t){return this.__data__.has(t)},It.prototype.set=function(t,r){var e=this.__data__;if(e instanceof Tt){var n=e.__data__;if(!gt||n.length<199)return n.push([t,r]),this;e=this.__data__=new At(n)}return e.set(t,r),this};var Mt=at?B(at,Object):function(){return[]},Ct=function(t){return tt.call(t)};function kt(t,r){return!!(r=null==r?n:r)&&("number"==typeof t||x.test(t))&&t>-1&&t%1==0&&t<r}function qt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||K)}function $t(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Lt(t,r){return t===r||t!=t&&r!=r}(pt&&Ct(new pt(new ArrayBuffer(1)))!=_||gt&&Ct(new gt)!=a||yt&&Ct(yt.resolve())!=p||ht&&Ct(new ht)!=h||dt&&Ct(new dt)!=m)&&(Ct=function(t){var r=tt.call(t),e=r==c?t.constructor:void 0,n=e?$t(e):void 0;if(n)switch(n){case mt:return _;case bt:return a;case _t:return p;case wt:return h;case Ot:return m}return r});var Bt=Array.isArray;function Ut(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Vt(t)}var zt=ft||function(){return!1};function Vt(t){var r=Gt(t)?tt.call(t):"";return r==l||r==s}function Gt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Kt(t){return Ut(t)?Jt(t):function(t){if(!qt(t))return ct(t);var r=[];for(var e in Object(t))Z.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return xt(t,!0,!0)}})),h=" ";function d(t){return"number"==typeof t}function v(t){return"string"==typeof t}function m(t,r){return void 0===r&&(r=0),function(t){var r=t.str,e=t.idx,n=void 0===e?0:e,i=t.stopAtNewlines,o=void 0!==i&&i,u=t.stopAtRawNbsp,l=void 0!==u&&u;if("string"!=typeof r||!r.length)return null;if(n&&"number"==typeof n||(n=0),!r[n+1])return null;if(r[n+1]&&(r[n+1].trim()||o&&"\n\r".includes(r[n+1])||l&&r[n+1]===h))return n+1;if(r[n+2]&&(r[n+2].trim()||o&&"\n\r".includes(r[n+2])||l&&r[n+2]===h))return n+2;for(var s=n+1,a=r.length;s<a;s++)if(r[s].trim()||o&&"\n\r".includes(r[s])||l&&r[s]===h)return s;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}function b(t,r){return void 0===r&&(r=0),function(t){var r=t.str,e=t.idx,n=t.stopAtNewlines,i=t.stopAtRawNbsp;if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(r[~-e]&&(r[~-e].trim()||n&&"\n\r".includes(r[~-e])||i&&r[~-e]===h))return~-e;if(r[e-2]&&(r[e-2].trim()||n&&"\n\r".includes(r[e-2])||i&&r[e-2]===h))return e-2;for(var o=e;o--;)if(r[o]&&(r[o].trim()||n&&"\n\r".includes(r[o])||i&&r[o]===h))return o;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}function _(t,r,e,n,i){if("string"!=typeof r||!r.length)return null;if("number"!=typeof e&&(e=0),"right"===t&&!r[e+1]||"left"===t&&!r[~-e])return null;for(var o,u,l,s,a=e,f=[],c=0;c<i.length;)if(v(i[c])&&i[c].length){var p=(s=void 0,((s={value:i[c],hungry:!1,optional:!1}).value.endsWith("?*")||s.value.endsWith("*?"))&&s.value.length>2?(s.value=s.value.slice(0,s.value.length-2),s.optional=!0,s.hungry=!0):s.value.endsWith("?")&&s.value.length>1?(s.value=s.value.slice(0,~-s.value.length),s.optional=!0):s.value.endsWith("*")&&s.value.length>1&&(s.value=s.value.slice(0,~-s.value.length),s.hungry=!0),s),g=p.value,y=p.optional,h=p.hungry,d="right"===t?m(r,a):b(r,a);if(!(n.i&&r[d].toLowerCase()===g.toLowerCase()||!n.i&&r[d]===g)){if(y){c+=1;continue}if(l){c+=1,l=void 0;continue}return null}var _="right"===t?m(r,d):b(r,d);h&&(n.i&&r[_].toLowerCase()===g.toLowerCase()||!n.i&&r[_]===g)?l=!0:c+=1,"number"==typeof d&&"right"===t&&d>a+1?f.push([a+1,d]):"left"===t&&"number"==typeof d&&d<~-a&&f.unshift([d+1,a]),a=d,"right"===t?(void 0===o&&(o=d),u=d):(void 0===u&&(u=d),o=d)}else c+=1;return void 0===o||void 0===u?null:{gaps:f,leftmostChar:o,rightmostChar:u}}var w={i:!1};function O(t,r){for(var e=arguments.length,i=new Array(e>2?e-2:0),o=2;o<e;o++)i[o-2]=arguments[o];if(!i||!i.length)throw new Error("string-left-right/leftSeq(): only two input arguments were passed! Did you intend to use left() method instead?");return _("left",t,r,p(i[0])?n(n({},w),i.shift()):w,Array.from(i).reverse())}function j(t,r){for(var e=arguments.length,i=new Array(e>2?e-2:0),o=2;o<e;o++)i[o-2]=arguments[o];if(!i||!i.length)throw new Error("string-left-right/rightSeq(): only two input arguments were passed! Did you intend to use right() method instead?");return _("right",t,r,p(i[0])?n(n({},w),i.shift()):w,i)}function S(t,r,e,n,i){if(void 0===i&&(i=[]),"string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),"right"===t&&!r[e+1]||"left"===t&&0==+e)return null;var o=null,u=null;do{null!==(o="right"===t?j.apply(void 0,[r,"number"==typeof u?u:e].concat(i)):O.apply(void 0,[r,"number"==typeof u?u:e].concat(i)))&&(u="right"===t?o.rightmostChar:o.leftmostChar)}while(o);if(null!=u&&"right"===t&&(u+=1),null===u)return null;if("right"===t){if(r[u]&&r[u].trim())return u;var l=m(r,u);if(n&&0!==n.mode){if(1===n.mode)return u;if(2===n.mode){var s=r.slice(u);if(s.trim()||s.includes("\n")||s.includes("\r"))for(var a=u,f=r.length;a<f;a++)if(r[a].trim()||"\n\r".includes(r[a]))return a;return r.length}}else{if(l===u+1)return u;if(!(r.slice(u,l||r.length).trim()||r.slice(u,l||r.length).includes("\n")||r.slice(u,l||r.length).includes("\r")))return l?~-l:r.length;for(var c=u,p=r.length;c<p;c++)if("\n\r".includes(r[c]))return c}return l||r.length}if(r[u]&&r[~-u]&&r[~-u].trim())return u;var g=b(r,u);if(!n||0===n.mode){if(g===u-2)return u;if(r.slice(0,u).trim()||r.slice(0,u).includes("\n")||r.slice(0,u).includes("\r"))for(var y=u;y--;)if("\n\r".includes(r[y])||r[y].trim())return y+1+(r[y].trim()?1:0);return 0}if(1===n.mode)return u;if(2===n.mode){var h=r.slice(0,u);if(h.trim()||h.includes("\n")||h.includes("\r"))for(var d=u;d--;)if(r[d].trim()||"\n\r".includes(r[d]))return d+1;return 0}return null!==g?g+1:0}var N={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function T(t,r){if(!Array.isArray(t)||!t.length)return t;var e,i,o=n(n({},N),r);if(o.strictlyTwoElementsInRangeArrays&&!t.filter((function(t){return t})).every((function(t,r){return 2===t.length||(e=r,i=t.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+e+"th range ("+JSON.stringify(t[e],null,4)+") has not two but "+i+" elements!");if(!t.filter((function(t){return t})).every((function(t,r){return!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(e=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+e+"th range ("+JSON.stringify(t[e],null,4)+") does not consist of only natural numbers!");var u=Math.pow(t.filter((function(t){return t})).length,2),l=0;return Array.from(t).filter((function(t){return t})).sort((function(t,r){return o.progressFn&&o.progressFn(Math.floor(100*(l+=1)/u)),t[0]===r[0]?t[1]<r[1]?-1:t[1]>r[1]?1:0:t[0]<r[0]?-1:1}))}var A={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function I(t,r){function e(t){return t&&"object"==typeof t&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return null;var i;if(r){if(!e(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((i=n(n({},A),r)).progressFn&&e(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof i.progressFn+'", equal to '+JSON.stringify(i.progressFn,null,4));if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof i.mergeType+'", equal to '+JSON.stringify(i.mergeType,null,4));if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof i.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(i.joinRangesThatTouchEdges,null,4))}else i=n({},A);var o,u,l,s=t.filter((function(t){return t})).map((function(t){return[].concat(t)})).filter((function(t){return void 0!==t[2]||t[0]!==t[1]}));if(!(o=i.progressFn?T(s,{progressFn:function(t){(l=Math.floor(t/5))!==u&&(u=l,i.progressFn(l))}}):T(s)))return null;for(var a=o.length-1,f=a;f>0;f--)i.progressFn&&(l=Math.floor(78*(1-f/a))+21)!==u&&l>u&&(u=l,i.progressFn(l)),(o[f][0]<=o[f-1][0]||!i.joinRangesThatTouchEdges&&o[f][0]<o[f-1][1]||i.joinRangesThatTouchEdges&&o[f][0]<=o[f-1][1])&&(o[f-1][0]=Math.min(o[f][0],o[f-1][0]),o[f-1][1]=Math.max(o[f][1],o[f-1][1]),void 0!==o[f][2]&&(o[f-1][0]>=o[f][0]||o[f-1][1]<=o[f][1])&&null!==o[f-1][2]&&(null===o[f][2]&&null!==o[f-1][2]?o[f-1][2]=null:null!=o[f-1][2]?2==+i.mergeType&&o[f-1][0]===o[f][0]?o[f-1][2]=o[f][2]:o[f-1][2]+=o[f][2]:o[f-1][2]=o[f][2]),o.splice(f,1),f=o.length);return o.length?o:null}function J(t,r,e){var n,i=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(r&&!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(e&&"function"!=typeof e)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(!r||!r.filter((function(t){return t})).length)return t;var u=(n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r)).length,l=0;n.filter((function(t){return t})).forEach((function(t,r){if(e&&(i=Math.floor(l/u*10))!==o&&(o=i,e(i)),!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+r+"th element not an array: "+JSON.stringify(t,null,4)+", which is "+typeof t);if(!Number.isInteger(t[0])){if(!Number.isInteger(+t[0])||+t[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(t,null,0)+". Its first element is not an integer, string index, but "+typeof t[0]+", equal to: "+JSON.stringify(t[0],null,4)+".");n[r][0]=+n[r][0]}if(!Number.isInteger(t[1])){if(!Number.isInteger(+t[1])||+t[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(t,null,0)+". Its second element is not an integer, string index, but "+typeof t[1]+", equal to: "+JSON.stringify(t[1],null,4)+".");n[r][1]=+n[r][1]}l+=1}));var s=I(n,{progressFn:function(t){e&&(i=10+Math.floor(t/10))!==o&&(o=i,e(i))}}),a=Array.isArray(s)?s.length:0;if(a>0){var f=t.slice(s[a-1][1]);t=s.reduce((function(r,n,u,l){return e&&(i=20+Math.floor(u/a*80))!==o&&(o=i,e(i)),r+t.slice(0===u?0:l[u-1][1],l[u][0])+(l[u][2]||"")}),""),t+=f}return t}function E(t){return"string"==typeof t}function R(t){return Array.isArray(t)?t.join("."):E(t)?t:String(t)}function x(t,r){if("\\"!==t[r])return!0;var e=function(t,r){for(var e=arguments.length,i=new Array(e>2?e-2:0),o=2;o<e;o++)i[o-2]=arguments[o];if(!i.length||1===i.length&&p(i[0]))return null;var u={mode:0};if(p(i[0])){var l=n(n({},u),y(i[0]));if(l.mode){if(v(l.mode)&&"0123".includes(l.mode))l.mode=Number.parseInt(l.mode,10);else if(!d(l.mode))throw new Error("string-left-right/chompLeft(): [THROW_ID_01] the opts.mode is wrong! It should be 0, 1, 2 or 3. It was given as "+l.mode+" (type "+typeof l.mode+")")}else l.mode=0;return S("left",t,r,l,y(i).slice(1))}return v(i[0])?S("left",t,r,u,y(i)):S("left",t,r,u,y(i).slice(1))}(t,r,{mode:1},"\\");return"number"==typeof e&&(r-e)%2!=0}function W(t){var r=t.str,e=t.path,n=t.valToInsert,i=t.mode,o=0;var u=r.length,l=[],s=["{","}","[","]",":",","],a=n;!E(n)||n.startsWith('"')||n.startsWith("{")||(a='"'+n+'"');var f,c=[],p=[],g=!1,y=!1,h=!1,d=null,v=null,_=null,w=null,O=null,j=null,S=!1,N=[];function T(){d=null,v=null,_=null,w=null,O=null,j=null}T();var A,I=[];for(o=0;o<u;o++){if(r[o]&&r[o].trim()||JSON.stringify(r[o],null,0),"number"!=typeof f&&"["===r[o-1]&&(y=!0,"]"!==r[o]&&(g=!1)),"number"!=typeof f&&"{"===r[o-1]&&(g=!0,"}"!==r[o]&&(y=!1)),"number"!=typeof f&&"{"===r[o]&&x(r,o-1)&&!h&&(y&&(S||(JSON.stringify(I,null,4),I[I.length-1]=I[I.length-1]+1)),c.push(o),JSON.stringify(c,null,4)),"number"!=typeof f&&"}"===r[o]&&x(r,o-1)&&!h&&(c.pop(),JSON.stringify(c,null,4)),"number"!=typeof f&&"]"===r[o]&&x(r,o-1)&&!h&&(p.pop(),JSON.stringify(p,null,4),I.pop(),JSON.stringify(I,null,4),T(),S&&(S=!1)),"number"!=typeof f&&"]"===r[o]&&(p.length?p.length&&(!c.length||p[p.length-1]>c[c.length-1])&&(y=!0):(y=!1,c.length&&!g&&(g=!0))),"number"!=typeof f&&"}"===r[o]&&(c.length?(!p.length||c[c.length-1]>p[p.length-1])&&(g=!0):g=!1),y&&R(e)===I.join(".")&&!h&&r[o].trim()&&(h=!0,_=o),"number"!=typeof f&&"["===r[o]&&x(r,o-1)&&!h&&(p.push(o),S=!0,JSON.stringify(p,null,4),I.push(0),JSON.stringify(I,null,0)),y&&","===r[o]&&S&&("number"!=typeof _||null!==w)&&(S=!1),h||null!==_||!r[o].trim()||s.includes(r[o])||!y&&(y||null===O)||(_=o,y&&(S?S=!1:"number"==typeof I[I.length-1]&&(I[I.length-1]=I[I.length-1]+1))),!h&&"number"!=typeof f&&(y||!y&&null!==O)&&"number"==typeof _&&_<o&&null===w&&('"'===r[_]&&'"'===r[o]&&"\\"!==r[o-1]||'"'!==r[_]&&!r[o].trim()||["}",","].includes(r[o]))&&(j=r.slice(_,'"'===r[_]?o+1:o),w=o),h||y||'"'!==r[o]||"\\"===r[o-1]||null!==O||null!==d||null!==v||!r[o+1]||(d=o+1),!h&&!y&&'"'===r[o]&&"\\"!==r[o-1]&&null===v&&"number"==typeof d&&null===_&&d<o&&(v=o+1,O=r.slice(d,o),I.push(O),JSON.stringify(I,null,4),R(e)===I.join(".")&&(h=!0)),!h&&"number"!=typeof f&&","===r[o]&&g&&(I.pop(),JSON.stringify(I,null,0)),!h&&("number"==typeof w&&o>=w||["}","]"].includes(r[b(r,o)])&&["}","]"].includes(r[o])||"}"===r[o]&&"{"===r[b(r,o)])&&r[o].trim()&&(","!==r[o]||["}","]"].includes(r[m(r,o)])?"}"===r[o]&&((w||"{"!==r[b(r,o)])&&(I.pop(),JSON.stringify(I,null,0)),p.length&&c.length&&p[p.length-1]>c[c.length-1]&&(g=!1,y=!0),T()):T()),!h&&"{"===r[o]&&E(O)&&null===_&&null===j&&T(),r[o].trim()&&h&&null===_&&"number"==typeof v&&o>v&&![":"].includes(r[o])&&(_=o),'"'===r[o]&&x(r,o-1)&&("number"==typeof d&&null===v||"number"==typeof _&&null===w)&&"number"!=typeof f&&(f=o),N.length&&r[o]===N[N.length-1]&&x(r,o-1)?(N.pop(),JSON.stringify(N,null,4)):"number"==typeof f&&f!==o||!h||y||"number"!=typeof _||("{"===r[o]&&x(r,o-1)?(N.push("}"),JSON.stringify(N,null,4)):"["===r[o]&&x(r,o-1)?(N.push("]"),JSON.stringify(N,null,4)):'"'===r[o]&&x(r,o-1)&&(N.push('"'),JSON.stringify(N,null,4))),'"'===r[o]&&x(r,o-1)&&"number"==typeof f&&f!==o&&(f=void 0),h&&Array.isArray(N)&&!N.length&&"number"==typeof _&&o>_&&"number"!=typeof f&&("["===r[_]&&"]"===r[o]||"{"===r[_]&&"}"===r[o]||'"'===r[_]&&'"'===r[o]||!["[","{",'"'].includes(r[_])&&r[_].trim()&&(!r[o].trim()||s.includes(r[o])&&x(r,o-1)))){if(JSON.stringify(r[_],null,4),"set"===i){var W="";r.slice(_,o+(r[o].trim()?1:0)).includes("\n")&&"\n"!==r[o+(r[o].trim()?1:0)]&&(W="\n");var F=o+(r[o].trim()?1:0);return(y&&!['"',"[","{"].includes(r[_])&&"]"!==r[m(r,F-1)]||","===r[F-1]&&'"'!==r[_-1])&&(F-=1),y&&'"'===r[_-1]&&(_-=1),""+r.slice(0,_)+(E(A=a)&&A.startsWith('"')&&A.endsWith('"')?""+JSON.stringify(A.slice(1,A.length-1),null,0):JSON.stringify(A,null,0))+W+r.slice(F)}if("del"===i){JSON.stringify(d,null,4);var D=b(r,(y?_:d)-1);"number"==typeof D&&D++;var P=o+(r[o].trim()?1:0);"number"==typeof D&&","===r[D-1]&&["}","]"].includes(r[m(r,P-1)])&&(D-=1),","===r[P]&&(P+=1),JSON.stringify(D,null,4),JSON.stringify(P,null,4),l.push([D,P]),JSON.stringify(l,null,4);break}}N&&JSON.stringify(N,null,0),JSON.stringify(I.join("."),null,0),JSON.stringify(p,null,0),JSON.stringify(c,null,0)}return JSON.stringify(J(r,l),null,4),J(r,l)}t.del=function(t,r){if(!E(t)||!t.length)throw new Error("edit-package-json/del(): [THROW_ID_02] first input argument must be a non-empty string. It was given as "+JSON.stringify(t,null,4)+" (type "+typeof t+")");return W({str:t,path:r,mode:"del"})},t.set=function(t,r,e){if(!E(t)||!t.length)throw new Error("edit-package-json/set(): [THROW_ID_01] first input argument must be a non-empty string. It was given as "+JSON.stringify(t,null,4)+" (type "+typeof t+")");return W({str:t,path:r,valToInsert:e,mode:"set"})},t.version="0.3.9",Object.defineProperty(t,"__esModule",{value:!0})}));
