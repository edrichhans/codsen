/**
 * generate-atomic-css
 * Generate Atomic CSS
 * Version: 1.4.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/generate-atomic-css/
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).generateAtomicCss={})}(this,(function(t){"use strict";function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function r(t){for(var r=1;r<arguments.length;r++){var i=null!=arguments[r]?arguments[r]:{};r%2?n(Object(i),!0).forEach((function(n){e(t,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var i,o,u=Object.prototype,c=Function.prototype.toString,l=u.hasOwnProperty,s=c.call(Object),f=u.toString,a=(i=Object.getPrototypeOf,o=Object,function(t){return i(o(t))});var d=function(t){if(!function(t){return!!t&&"object"==typeof t}(t)||"[object Object]"!=f.call(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=a(t);if(null===e)return!0;var n=l.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&c.call(n)==s},h="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var e={exports:{}};t(e,e.exports)}((function(t,e){var n="__lodash_hash_undefined__",r=9007199254740991,i="[object Arguments]",o="[object Boolean]",u="[object Date]",c="[object Function]",l="[object GeneratorFunction]",s="[object Map]",f="[object Number]",a="[object Object]",d="[object Promise]",g="[object RegExp]",p="[object Set]",v="[object String]",y="[object Symbol]",O="[object WeakMap]",b="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",A="[object Int16Array]",x="[object Int32Array]",T="[object Uint8Array]",E="[object Uint8ClampedArray]",S="[object Uint16Array]",C="[object Uint32Array]",N=/\w*$/,I=/^\[object .+?Constructor\]$/,$=/^(?:0|[1-9]\d*)$/,F={};F[i]=F["[object Array]"]=F[b]=F[m]=F[o]=F[u]=F[_]=F[w]=F[j]=F[A]=F[x]=F[s]=F[f]=F[a]=F[g]=F[p]=F[v]=F[y]=F[T]=F[E]=F[S]=F[C]=!0,F["[object Error]"]=F[c]=F[O]=!1;var P="object"==typeof self&&self&&self.Object===Object&&self,D="object"==typeof h&&h&&h.Object===Object&&h||P||Function("return this")(),W=e&&!e.nodeType&&e,R=W&&t&&!t.nodeType&&t,H=R&&R.exports===W;function G(t,e){return t.set(e[0],e[1]),t}function L(t,e){return t.add(e),t}function M(t,e,n,r){var i=-1,o=t?t.length:0;for(r&&o&&(n=t[++i]);++i<o;)n=e(n,t[i],i,t);return n}function k(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function B(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}function U(t,e){return function(n){return t(e(n))}}function q(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}var z,V=Array.prototype,J=Function.prototype,K=Object.prototype,Q=D["__core-js_shared__"],X=(z=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",Y=J.toString,Z=K.hasOwnProperty,tt=K.toString,et=RegExp("^"+Y.call(Z).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=H?D.Buffer:void 0,rt=D.Symbol,it=D.Uint8Array,ot=U(Object.getPrototypeOf,Object),ut=Object.create,ct=K.propertyIsEnumerable,lt=V.splice,st=Object.getOwnPropertySymbols,ft=nt?nt.isBuffer:void 0,at=U(Object.keys,Object),dt=Rt(D,"DataView"),ht=Rt(D,"Map"),gt=Rt(D,"Promise"),pt=Rt(D,"Set"),vt=Rt(D,"WeakMap"),yt=Rt(Object,"create"),Ot=kt(dt),bt=kt(ht),mt=kt(gt),_t=kt(pt),wt=kt(vt),jt=rt?rt.prototype:void 0,At=jt?jt.valueOf:void 0;function xt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Tt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Et(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function St(t){this.__data__=new Tt(t)}function Ct(t,e){var n=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&qt(t)}(t)&&Z.call(t,"callee")&&(!ct.call(t,"callee")||tt.call(t)==i)}(t)?function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}(t.length,String):[],r=n.length,o=!!r;for(var u in t)!e&&!Z.call(t,u)||o&&("length"==u||Lt(u,r))||n.push(u);return n}function Nt(t,e,n){var r=t[e];Z.call(t,e)&&Bt(r,n)&&(void 0!==n||e in t)||(t[e]=n)}function It(t,e){for(var n=t.length;n--;)if(Bt(t[n][0],e))return n;return-1}function $t(t,e,n,r,d,h,O){var I;if(r&&(I=h?r(t,d,h,O):r(t)),void 0!==I)return I;if(!Jt(t))return t;var $=Ut(t);if($){if(I=function(t){var e=t.length,n=t.constructor(e);e&&"string"==typeof t[0]&&Z.call(t,"index")&&(n.index=t.index,n.input=t.input);return n}(t),!e)return function(t,e){var n=-1,r=t.length;e||(e=Array(r));for(;++n<r;)e[n]=t[n];return e}(t,I)}else{var P=Gt(t),D=P==c||P==l;if(zt(t))return function(t,e){if(e)return t.slice();var n=new t.constructor(t.length);return t.copy(n),n}(t,e);if(P==a||P==i||D&&!h){if(k(t))return h?t:{};if(I=function(t){return"function"!=typeof t.constructor||Mt(t)?{}:(e=ot(t),Jt(e)?ut(e):{});var e}(D?{}:t),!e)return function(t,e){return Dt(t,Ht(t),e)}(t,function(t,e){return t&&Dt(e,Kt(e),t)}(I,t))}else{if(!F[P])return h?t:{};I=function(t,e,n,r){var i=t.constructor;switch(e){case b:return Pt(t);case o:case u:return new i(+t);case m:return function(t,e){var n=e?Pt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.byteLength)}(t,r);case _:case w:case j:case A:case x:case T:case E:case S:case C:return function(t,e){var n=e?Pt(t.buffer):t.buffer;return new t.constructor(n,t.byteOffset,t.length)}(t,r);case s:return function(t,e,n){return M(e?n(B(t),!0):B(t),G,new t.constructor)}(t,r,n);case f:case v:return new i(t);case g:return function(t){var e=new t.constructor(t.source,N.exec(t));return e.lastIndex=t.lastIndex,e}(t);case p:return function(t,e,n){return M(e?n(q(t),!0):q(t),L,new t.constructor)}(t,r,n);case y:return c=t,At?Object(At.call(c)):{}}var c}(t,P,$t,e)}}O||(O=new St);var W=O.get(t);if(W)return W;if(O.set(t,I),!$)var R=n?function(t){return function(t,e,n){var r=e(t);return Ut(t)?r:function(t,e){for(var n=-1,r=e.length,i=t.length;++n<r;)t[i+n]=e[n];return t}(r,n(t))}(t,Kt,Ht)}(t):Kt(t);return function(t,e){for(var n=-1,r=t?t.length:0;++n<r&&!1!==e(t[n],n,t););}(R||t,(function(i,o){R&&(i=t[o=i]),Nt(I,o,$t(i,e,n,r,o,t,O))})),I}function Ft(t){return!(!Jt(t)||function(t){return!!X&&X in t}(t))&&(Vt(t)||k(t)?et:I).test(kt(t))}function Pt(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Dt(t,e,n,r){n||(n={});for(var i=-1,o=e.length;++i<o;){var u=e[i],c=r?r(n[u],t[u],u,n,t):void 0;Nt(n,u,void 0===c?t[u]:c)}return n}function Wt(t,e){var n,r,i=t.__data__;return("string"==(r=typeof(n=e))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?i["string"==typeof e?"string":"hash"]:i.map}function Rt(t,e){var n=function(t,e){return null==t?void 0:t[e]}(t,e);return Ft(n)?n:void 0}xt.prototype.clear=function(){this.__data__=yt?yt(null):{}},xt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},xt.prototype.get=function(t){var e=this.__data__;if(yt){var r=e[t];return r===n?void 0:r}return Z.call(e,t)?e[t]:void 0},xt.prototype.has=function(t){var e=this.__data__;return yt?void 0!==e[t]:Z.call(e,t)},xt.prototype.set=function(t,e){return this.__data__[t]=yt&&void 0===e?n:e,this},Tt.prototype.clear=function(){this.__data__=[]},Tt.prototype.delete=function(t){var e=this.__data__,n=It(e,t);return!(n<0)&&(n==e.length-1?e.pop():lt.call(e,n,1),!0)},Tt.prototype.get=function(t){var e=this.__data__,n=It(e,t);return n<0?void 0:e[n][1]},Tt.prototype.has=function(t){return It(this.__data__,t)>-1},Tt.prototype.set=function(t,e){var n=this.__data__,r=It(n,t);return r<0?n.push([t,e]):n[r][1]=e,this},Et.prototype.clear=function(){this.__data__={hash:new xt,map:new(ht||Tt),string:new xt}},Et.prototype.delete=function(t){return Wt(this,t).delete(t)},Et.prototype.get=function(t){return Wt(this,t).get(t)},Et.prototype.has=function(t){return Wt(this,t).has(t)},Et.prototype.set=function(t,e){return Wt(this,t).set(t,e),this},St.prototype.clear=function(){this.__data__=new Tt},St.prototype.delete=function(t){return this.__data__.delete(t)},St.prototype.get=function(t){return this.__data__.get(t)},St.prototype.has=function(t){return this.__data__.has(t)},St.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Tt){var r=n.__data__;if(!ht||r.length<199)return r.push([t,e]),this;n=this.__data__=new Et(r)}return n.set(t,e),this};var Ht=st?U(st,Object):function(){return[]},Gt=function(t){return tt.call(t)};function Lt(t,e){return!!(e=null==e?r:e)&&("number"==typeof t||$.test(t))&&t>-1&&t%1==0&&t<e}function Mt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||K)}function kt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Bt(t,e){return t===e||t!=t&&e!=e}(dt&&Gt(new dt(new ArrayBuffer(1)))!=m||ht&&Gt(new ht)!=s||gt&&Gt(gt.resolve())!=d||pt&&Gt(new pt)!=p||vt&&Gt(new vt)!=O)&&(Gt=function(t){var e=tt.call(t),n=e==a?t.constructor:void 0,r=n?kt(n):void 0;if(r)switch(r){case Ot:return m;case bt:return s;case mt:return d;case _t:return p;case wt:return O}return e});var Ut=Array.isArray;function qt(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=r}(t.length)&&!Vt(t)}var zt=ft||function(){return!1};function Vt(t){var e=Jt(t)?tt.call(t):"";return e==c||e==l}function Jt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function Kt(t){return qt(t)?Ct(t):function(t){if(!Mt(t))return at(t);var e=[];for(var n in Object(t))Z.call(t,n)&&"constructor"!=n&&e.push(n);return e}(t)}t.exports=function(t){return $t(t,!0,!0)}}));var g=" ";function p(t){var e={value:t,hungry:!1,optional:!1};return(e.value.endsWith("?*")||e.value.endsWith("*?"))&&e.value.length>2?(e.value=e.value.slice(0,e.value.length-2),e.optional=!0,e.hungry=!0):e.value.endsWith("?")&&e.value.length>1?(e.value=e.value.slice(0,~-e.value.length),e.optional=!0):e.value.endsWith("*")&&e.value.length>1&&(e.value=e.value.slice(0,~-e.value.length),e.hungry=!0),e}function v(t,e){return void 0===e&&(e=0),function(t){var e=t.str,n=t.idx,r=void 0===n?0:n,i=t.stopAtNewlines,o=void 0!==i&&i,u=t.stopAtRawNbsp,c=void 0!==u&&u;if("string"!=typeof e||!e.length)return null;if(r&&"number"==typeof r||(r=0),!e[r+1])return null;if(e[r+1]&&(e[r+1].trim()||o&&"\n\r".includes(e[r+1])||c&&e[r+1]===g))return r+1;if(e[r+2]&&(e[r+2].trim()||o&&"\n\r".includes(e[r+2])||c&&e[r+2]===g))return r+2;for(var l=r+1,s=e.length;l<s;l++)if(e[l].trim()||o&&"\n\r".includes(e[l])||c&&e[l]===g)return l;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function y(t,e){return void 0===e&&(e=0),function(t){var e=t.str,n=t.idx,r=t.stopAtNewlines,i=t.stopAtRawNbsp;if("string"!=typeof e||!e.length)return null;if(n&&"number"==typeof n||(n=0),n<1)return null;if(e[~-n]&&(e[~-n].trim()||r&&"\n\r".includes(e[~-n])||i&&e[~-n]===g))return~-n;if(e[n-2]&&(e[n-2].trim()||r&&"\n\r".includes(e[n-2])||i&&e[n-2]===g))return n-2;for(var o=n;o--;)if(e[o]&&(e[o].trim()||r&&"\n\r".includes(e[o])||i&&e[o]===g))return o;return null}({str:t,idx:e,stopAtNewlines:!1,stopAtRawNbsp:!1})}function O(t,e,n,r,i){if("string"!=typeof e||!e.length)return null;if("number"!=typeof n&&(n=0),"right"===t&&!e[n+1]||"left"===t&&!e[~-n])return null;for(var o,u,c,l=n,s=[],f=0;f<i.length;)if("string"==typeof i[f]&&i[f].length){var a=p(i[f]),d=a.value,h=a.optional,g=a.hungry,O="right"===t?v(e,l):y(e,l);if(!(r.i&&e[O].toLowerCase()===d.toLowerCase()||!r.i&&e[O]===d)){if(h){f+=1;continue}if(c){f+=1,c=void 0;continue}return null}var b="right"===t?v(e,O):y(e,O);g&&(r.i&&e[b].toLowerCase()===d.toLowerCase()||!r.i&&e[b]===d)?c=!0:f+=1,"number"==typeof O&&"right"===t&&O>l+1?s.push([l+1,O]):"left"===t&&"number"==typeof O&&O<~-l&&s.unshift([O+1,l]),l=O,"right"===t?(void 0===o&&(o=O),u=O):(void 0===u&&(u=O),o=O)}else f+=1;return void 0===o||void 0===u?null:{gaps:s,leftmostChar:o,rightmostChar:u}}var b={i:!1};function m(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];if(!i||!i.length)throw new Error("string-left-right/leftSeq(): only two input arguments were passed! Did you intend to use left() method instead?");return O("left",t,e,d(i[0])?r(r({},b),i.shift()):b,Array.from(i).reverse())}function _(t,e){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];if(!i||!i.length)throw new Error("string-left-right/rightSeq(): only two input arguments were passed! Did you intend to use right() method instead?");return O("right",t,e,d(i[0])?r(r({},b),i.shift()):b,i)}function w(t){return"string"==typeof t}var j={CONFIGHEAD:"GENERATE-ATOMIC-CSS-CONFIG-STARTS",CONFIGTAIL:"GENERATE-ATOMIC-CSS-CONFIG-ENDS",CONTENTHEAD:"GENERATE-ATOMIC-CSS-CONTENT-STARTS",CONTENTTAIL:"GENERATE-ATOMIC-CSS-CONTENT-ENDS"},A=["px","em","%","rem","cm","mm","in","pt","pc","ex","ch","vw","vmin","vmax"],x=j.CONFIGHEAD,T=j.CONFIGTAIL,E=j.CONTENTHEAD,S=j.CONTENTTAIL,C=[":"];function N(t){var e=t,n="",r="";if(t.includes(x)&&t.includes(T)){if(-1!==t.indexOf(T)&&-1!==t.indexOf(E)&&t.indexOf(T)>t.indexOf(E))throw new Error("generate-atomic-css: [THROW_ID_02] Config heads are after config tails!");var i=t.indexOf(x)+x.length,o=t.indexOf(T);if("*"===t[v(t,i)]&&"/"===t[v(t,v(t,i))]&&(i=v(t,v(t,i))+1),"*"===t[y(t,o)]&&"/"===t[y(t,y(t,o))]&&(o=y(t,y(t,o))),!w(e=t.slice(i,o).trim())||!e.trim().length)return[e,n,r]}else if(t.includes(x)&&!t.includes(T)&&t.includes(E)){if(t.indexOf(x)>t.indexOf(E))throw new Error("generate-atomic-css: [THROW_ID_03] Config heads are after content heads!");e=t.slice(t.indexOf(x)+x.length,t.indexOf(E))}else if(t.includes(x)||t.includes(T)||!t.includes(E)&&!t.includes(S)){for(var u=new RegExp("(\\/\\s*\\*\\s*)*"+E+"(\\s*\\*\\s*\\/)*"),c=new RegExp("(\\/\\s*\\*\\s*)*"+S+"(\\s*\\*\\s*\\/)*"),l=!1,s=[],f=[],a=t.split("\n").filter((function(t){return!!l||(t.includes("$$$")||t.includes("{")||t.includes(":")?(l=!0,!0):(s.push(t),!1))})),d=a.length;d--&&!(a[d].includes("$$$")||a[d].includes("}")||a[d].includes(":"));)f.unshift(a.pop());e=a.join("\n").replace(u,"").replace(c,""),s.length&&(n=s.join("\n")+"\n"),f.length&&(r="\n"+f.join("\n"))}else if((e=t).includes(E)){if(y(t,e.indexOf(E))){var h=e.indexOf(E);m(t,h,"/","*")&&(h=m(t,h,"/","*").leftmostChar),n=0===h?"":t.slice(0,h)}var g=e.indexOf(E)+E.length;_(e,g-1,"*","/")&&(g=_(e,g-1,"*","/").rightmostChar+1);var p=null;if(t.includes(S)){p=t.indexOf(S),"*"===t[y(t,p)]&&"/"===t[y(t,y(t,p))]&&(p=y(t,y(t,p)));var O=t.indexOf(S)+S.length;"*"===t[v(t,O-1)]&&"/"===t[v(t,v(t,O-1))]&&(O=v(t,v(t,O-1))+1),v(t,O)&&(r=t.slice(O))}e=p?e.slice(g,p).trim():e.slice(g).trim()}else if(e.includes(S)){var b,j=[],A=!1,C=(e=e.split("\n").filter((function(t){return t.includes("$$$")||A?(A||(A=!0),!0):(A||j.push(t),!1)})).join("\n")).indexOf(S);m(e,C,"/","*")&&(C=m(e,C,"/","*").leftmostChar),e=e.slice(0,C).trim(),j.length&&(n=j.join("\n")+"\n"),v(t,t.indexOf(S)+S.length)&&(b=t.indexOf(S)+S.length,"*"===t[v(t,b)]&&"/"===t[v(t,v(t,b))]&&(b=v(t,v(t,b))+1,v(t,b)&&(r=t.slice(b))))}return[e,n,r]}function I(t,e,n){void 0===e&&(e=0),void 0===n&&(n=500);var r,i=e,o=n,u=t;if(t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")?r=t.slice(t.lastIndexOf("}")+1).split("|").filter((function(t){return t.trim().length})).map((function(t){return t.trim()})).filter((function(t){return String(t).split("").every((function(t){return/\d/g.test(t)}))})):t.includes("|")&&(r=t.split("|").filter((function(t){return t.trim().length})).map((function(t){return t.trim()})).filter((function(t){return String(t).split("").every((function(t){return/\d/g.test(t)}))}))),Array.isArray(r)&&(1===r.length?o=Number.parseInt(r[0],10):r.length>1&&(i=Number.parseInt(r[0],10),o=Number.parseInt(r[1],10))),t.lastIndexOf("}")>0&&t.slice(t.lastIndexOf("}")+1).includes("|")){if((u=t.slice(0,t.indexOf("|",t.lastIndexOf("}")+1)).trimEnd()).trim().startsWith("|"))for(;u.trim().startsWith("|");)u=u.trim().slice(1)}else{for(var c=null,l=!1,s=0,f=t.length,a=null,d=0,h=t.length;d<h;d++)if("0123456789".includes(t[d])?null===a&&t[d].trim().length&&(a=!0):"|"!==t[d]&&t[d].trim().length&&(a=!1),!t[d+1]&&a&&c&&(f=c),"|"===t[d]){if(a&&c){f=c;break}c=d,a=null}else!l&&t[d].trim().length&&(l=!0,null!==c&&(s=c+1));u=t.slice(s,f).trimEnd()}return[i,o,u]}function $(t,e,n,r,i,o,u){return void 0===i&&(i=!0),function(t,e){if(void 0===e&&(e=!0),!e)return t;var n=Array.from(t);if(n.length&&w(n[0])&&!n[0].trim().length)do{n.shift()}while(w(n[0])&&!n[0].trim().length);if(n.length&&w(n[n.length-1])&&!n[n.length-1].trim().length)do{n.pop()}while(n&&n[n.length-1]&&!n[n.length-1].trim().length);return n}(t.split(/\r?\n/).map((function(t,i,c){return t.includes("$$$")?function(t,e,n,r,i,o){for(var u,c=0,l=I(t,0,500),s=l[0],f=l[1],a=l[2],d=r-n,h="",g=function(t){for(var r=0,l=0,g=function(e,n){if(a[e].charCodeAt(0),"$"===a[e]&&"$"===a[e-1]&&"$"===a[e-2]){var i,u=a.slice(e+1);if(0!==t||!A.some((function(t){if(u.startsWith(t))return i=t,!0}))||"{"!==a[v(a,e+i.length)]&&a[e+i.length+1].trim().length){var c;if(A.some((function(t){if(a.startsWith(t,e+1))return c=t,!0})),!a[e-3].trim().length||C.some((function(t){return a.slice(l,e-2).trim().endsWith(t)}))){var s=0;0===t&&A.some((function(t){return(""+a.slice(l,e-2)).startsWith(t)&&(s=t.length),!0})),h+=""+a.slice(l+s,e-2)+(o?String(t).padStart(String(f).length+(0===t&&c?c.length:0)):t)}else a[e+1].trim().length&&"{"!==a[v(a,e)]?(h+=""+a.slice(l,e-2)+t,o&&(r=String(f).length-String(t).length)):h+=""+a.slice(l,e-2)+(o?String(t).padEnd(String(f).length+(0===t&&c?c.length:0)):t);l=e+1}else h+=""+a.slice(l,e-2)+(o?String(t).padStart(String(f).length-String(t).length+i.length+1):t),l=e+1+(i?i.length:0)}if("{"===a[e]&&o&&r&&(h+=""+a.slice(l,e)+" ".repeat(r),l=e,r=0),!a[e+1]){var d,g=a.slice(l);0===t&&A.some((function(t){if(g.startsWith(t))return d=t,!0}))?h+=""+a.slice(l+d.length):h+=""+a.slice(l),h+=t!==f?"\n":""}},p=0,y=a.length;p<y;p++)g(p);i.count+=1,"function"==typeof e&&(u=Math.floor(n+t/(f-s)*d))!==c&&(c=u,e(u))},p=s;p<=f;p++)g(p);return h}(t,e,n+(r-n)/c.length*i,n+(r-n)/c.length*(i+1),o,u):function(t,e){return/\.\w/g.test(t)&&(e.count+=1),t}(t,o)})),i).join("\n")}var F={includeConfig:!0,includeHeadsAndTails:!0,pad:!0,configOverride:null,reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100};t.defaults=F,t.extractFromToSource=I,t.genAtomic=function(t,e){if("string"!=typeof t)throw new Error('generate-atomic-css: [THROW_ID_01] First input argument must be a string! It was given as "'+JSON.stringify(t,null,4)+'" (type '+typeof t+")");var n=j.CONFIGHEAD,i=j.CONFIGTAIL,o=j.CONTENTHEAD,u=j.CONTENTTAIL,c={count:0},l=r(r({},F),e);if(l.includeConfig&&!l.includeHeadsAndTails&&(l.includeHeadsAndTails=!0),!l.configOverride&&!t.includes("$$$")&&!t.includes(n)&&!t.includes(i)&&!t.includes(o)&&!t.includes(u)||l&&l.configOverride&&"string"==typeof l.configOverride&&!l.configOverride.includes("$$$")&&!l.configOverride.includes(n)&&!l.configOverride.includes(i)&&!l.configOverride.includes(o)&&!l.configOverride.includes(u))return{log:{count:0},result:t};var s="",f="",a=N(l.configOverride?l.configOverride:t),d=a[0],h=a[1],g=a[2];if("string"!=typeof d||!d.trim())return{log:{count:0},result:""};if((l.includeConfig||l.includeHeadsAndTails)&&(s=o+" */\n",l.includeConfig||(s="/* "+s),f="\n/* "+u+" */"),l.includeConfig&&(s="/* "+n+"\n"+d.trim()+"\n"+i+"\n"+s),t.includes(n)&&null!=y(t,t.indexOf(n))){var p=t.indexOf(n);"*"===t[y(t,p)]&&"/"===t[y(t,y(t,p))]&&(p=y(t,y(t,p)));var O="/* ";("/"===t[v(t,p-1)]&&"*"===t[v(t,v(t,p-1))]||s.trim().startsWith("/*"))&&(O=""),s=""+t.slice(0,p)+O+s}if(t.includes(i)&&v(t,t.indexOf(i)+i.length)){var b=t.indexOf(i)+i.length;if("*"===t[v(t,t.indexOf(i)+i.length)]&&"/"===t[v(t,v(t,t.indexOf(i)+i.length))]&&(b=v(t,v(t,t.indexOf(i)+i.length))+1),t.slice(v(t,b-1)).startsWith(o)){var m=v(t,b);"*"===t[v(t,(b=m||0+o.length)-1)]&&"/"===t[v(t,v(t,b-1))]&&(b=v(t,v(t,b-1))+1),t.includes(u)&&(b=t.indexOf(u)+u.length,"*"===t[v(t,b)]&&"/"===t[v(t,v(t,b))]&&(b=v(t,v(t,b))+1))}var _=t.slice(b);_.length&&_.includes(u)&&(b=t.indexOf(u)+u.length,"*"===t[v(t,b)]&&"/"===t[v(t,v(t,b))]&&(b=v(t,v(t,b))+1)),f=""+f+(t[b]&&v(t,b-1)?t.slice(b):"")}if("string"==typeof h&&(s=""+h+s),"string"==typeof g){if(g.trim().endsWith("/*")&&!g.trim().startsWith("*/")){var w="";"string"==typeof g&&g[0]&&!g[0].trim()&&(w=g.slice(0,v(g,0)||0)),g=w+"/* "+g.trim()}f=""+f+g}var A=function(t,e){return void 0===e&&(e={}),e.includeConfig||e.includeHeadsAndTails?t.trim():t}(""+s+$(d,l.reportProgressFunc,l.reportProgressFuncFrom,l.reportProgressFuncTo,!0,c,l.pad)+f,l)+"\n";return{log:{count:c.count},result:A}},t.headsAndTails=j,t.version="1.4.8",Object.defineProperty(t,"__esModule",{value:!0})}));
