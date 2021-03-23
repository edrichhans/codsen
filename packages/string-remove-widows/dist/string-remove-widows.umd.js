/**
 * string-remove-widows
 * Helps to prevent widow words in a text
 * Version: 2.0.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-remove-widows/
 */

!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).stringRemoveWidows={})}(this,(function(t){"use strict";function r(t,r,e){return r in t?Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[r]=e,t}function e(t,r){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),e.push.apply(e,n)}return e}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){r(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))}))}return t}function i(t){return t&&"object"==typeof t&&!Array.isArray(t)}function o(t){return"string"==typeof t}var s={cb:void 0,i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[],maxMismatches:0,firstMustMatch:!1,lastMustMatch:!1,hungry:!1},a=function(t){return t+1};function u(t,r,e,i,o,u){void 0===o&&(o=!1),void 0===u&&(u=a);var c="function"==typeof e?e():e;if(+r<0&&o&&"EOL"===c)return c;var f=n(n({},s),i);if(r>=t.length&&!o)return!1;var l=o?1:e.length,g=0,h=!1,p=!1,y=!1,m=f.maxMismatches,d=r,v=!1,b=!1,w=!1;function _(){return 1===g&&m<f.maxMismatches-1}for(;t[d];){var O=u(d);if(f.trimBeforeMatching&&""===t[d].trim()){if(!t[O]&&o&&"EOL"===e)return!0;d=u(d)}else if(f&&!f.i&&f.trimCharsBeforeMatching&&f.trimCharsBeforeMatching.includes(t[d])||f&&f.i&&f.trimCharsBeforeMatching&&f.trimCharsBeforeMatching.map((function(t){return t.toLowerCase()})).includes(t[d].toLowerCase())){if(o&&"EOL"===e&&!t[O])return!0;d=u(d)}else{var T=O>d?e[e.length-l]:e[l-1];if(!f.i&&t[d]===T||f.i&&t[d].toLowerCase()===T.toLowerCase()){if(v||(v=!0),y||(y=!0),l===e.length){if(b=!0,m!==f.maxMismatches)return!1}else 1===l&&(w=!0);if(l-=1,g++,_())return!1;if(!l)return(g!==e.length||m===f.maxMismatches||!h)&&d}else{if(h||g||(h=!0),!(f.maxMismatches&&m&&d))return!(0!==d||1!==l||f.lastMustMatch||!y)&&0;m-=1;for(var j=0;j<=m;j++){var A=O>d?e[e.length-l+1+j]:e[l-2-j],M=t[u(d)];if(A&&(!f.i&&t[d]===A||f.i&&t[d].toLowerCase()===A.toLowerCase())&&(!f.firstMustMatch||l!==e.length)){if(g++,_())return!1;l-=2,v=!0;break}if(M&&A&&(!f.i&&M===A||f.i&&M.toLowerCase()===A.toLowerCase())&&(!f.firstMustMatch||l!==e.length)){if(!g&&!f.hungry)return!1;l-=1,v=!0;break}if(void 0===A&&m>=0&&v&&(!f.firstMustMatch||b)&&(!f.lastMustMatch||w))return d}v||(p=d)}if(!1!==p&&p!==d&&(p=!1),l<1)return d;d=u(d)}}return l>0?!(!o||"EOL"!==c)||!!(f&&f.maxMismatches>=l&&y)&&(p||0):void 0}function c(t,r,e,a){return function(t,r,e,a,c){if(i(c)&&Object.prototype.hasOwnProperty.call(c,"trimBeforeMatching")&&"boolean"!=typeof c.trimBeforeMatching)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_09] opts.trimBeforeMatching should be boolean!"+(Array.isArray(c.trimBeforeMatching)?" Did you mean to use opts.trimCharsBeforeMatching?":""));var f,l,g,h=n(n({},s),c);if("string"==typeof h.trimCharsBeforeMatching&&(h.trimCharsBeforeMatching="string"==typeof(f=h.trimCharsBeforeMatching)?f.length?[f]:[]:f),h.trimCharsBeforeMatching=h.trimCharsBeforeMatching.map((function(t){return o(t)?t:String(t)})),!o(r))return!1;if(!r.length)return!1;if(!Number.isInteger(e)||e<0)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: "+typeof e+", equal to:\n"+JSON.stringify(e,null,4));if(o(a))l=[a];else if(Array.isArray(a))l=a;else if(a){if("function"!=typeof a)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's "+typeof a+", equal to:\n"+JSON.stringify(a,null,4));(l=[]).push(a)}else l=a;if(c&&!i(c))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \""+typeof c+'", and equal to:\n'+JSON.stringify(c,null,4));var p=0,y="";if(h&&h.trimCharsBeforeMatching&&h.trimCharsBeforeMatching.some((function(t,r){return t.length>1&&(p=r,y=t,!0)})))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_07] the fourth argument, options object contains trimCharsBeforeMatching. It was meant to list the single characters but one of the entries at index "+p+" is longer than 1 character, "+y.length+" (equals to "+y+"). Please split it into separate characters and put into array as separate elements.");if(!l||!Array.isArray(l)||Array.isArray(l)&&!l.length||Array.isArray(l)&&1===l.length&&o(l[0])&&!l[0].trim()){if("function"==typeof h.cb){var m,d=e;if("matchLeftIncl"!==t&&"matchRight"!==t||(d+=1),"L"===t[5])for(var v=d;v--;){var b=r[v];if((!h.trimBeforeMatching||h.trimBeforeMatching&&void 0!==b&&b.trim())&&(!h.trimCharsBeforeMatching||!h.trimCharsBeforeMatching.length||void 0!==b&&!h.trimCharsBeforeMatching.includes(b))){m=v;break}}else if(t.startsWith("matchRight"))for(var w=d;w<r.length;w++){var _=r[w];if((!h.trimBeforeMatching||h.trimBeforeMatching&&_.trim())&&(!h.trimCharsBeforeMatching||!h.trimCharsBeforeMatching.length||!h.trimCharsBeforeMatching.includes(_))){m=w;break}}if(void 0===m)return!1;var O=r[m],T=m+1,j="";return T&&T>0&&(j=r.slice(0,T)),"L"===t[5]||m&&m>0&&(j=r.slice(m)),h.cb(O,j,m)}var A="";throw c||(A=" More so, the whole options object, the fourth input argument, is missing!"),new Error("string-match-left-right/"+t+'(): [THROW_ID_08] the third argument, "whatToMatch", was given as an empty string. This means, you intend to match purely by a callback. The callback was not set though, the opts key "cb" is not set!'+A)}for(var M=0,E=l.length;M<E;M++){var W=l[M],I=void 0,R=void 0,C="",N=e;"matchRight"===t?N+=1:"matchLeft"===t&&(N-=1);var F=u(r,N,W,h,g="function"==typeof l[M],(function(r){return"L"===t[5]?r-1:r+1}));if(F&&g&&"function"==typeof W&&"EOL"===W())return!(!W()||h.cb&&!h.cb(I,C,R))&&W();if(Number.isInteger(F)&&(R=t.startsWith("matchLeft")?F-1:F+1,C="L"===t[5]?r.slice(0,F):r.slice(R)),R<0&&(R=void 0),r[R]&&(I=r[R]),Number.isInteger(F)&&(!h.cb||h.cb(I,C,R)))return W}return!1}("matchRightIncl",t,r,e,a)}Function.prototype.toString.call(Object);var f="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};!function(t){var r={exports:{}};t(r,r.exports)}((function(t,r){var e="__lodash_hash_undefined__",n=9007199254740991,i="[object Arguments]",o="[object Boolean]",s="[object Date]",a="[object Function]",u="[object GeneratorFunction]",c="[object Map]",l="[object Number]",g="[object Object]",h="[object Promise]",p="[object RegExp]",y="[object Set]",m="[object String]",d="[object Symbol]",v="[object WeakMap]",b="[object ArrayBuffer]",w="[object DataView]",_="[object Float32Array]",O="[object Float64Array]",T="[object Int8Array]",j="[object Int16Array]",A="[object Int32Array]",M="[object Uint8Array]",E="[object Uint8ClampedArray]",W="[object Uint16Array]",I="[object Uint32Array]",R=/\w*$/,C=/^\[object .+?Constructor\]$/,N=/^(?:0|[1-9]\d*)$/,F={};F[i]=F["[object Array]"]=F[b]=F[w]=F[o]=F[s]=F[_]=F[O]=F[T]=F[j]=F[A]=F[c]=F[l]=F[g]=F[p]=F[y]=F[m]=F[d]=F[M]=F[E]=F[W]=F[I]=!0,F["[object Error]"]=F[a]=F[v]=!1;var L="object"==typeof self&&self&&self.Object===Object&&self,S="object"==typeof f&&f&&f.Object===Object&&f||L||Function("return this")(),x=r&&!r.nodeType&&r,B=x&&t&&!t.nodeType&&t,D=B&&B.exports===x;function P(t,r){return t.set(r[0],r[1]),t}function H(t,r){return t.add(r),t}function k(t,r,e,n){var i=-1,o=t?t.length:0;for(n&&o&&(e=t[++i]);++i<o;)e=r(e,t[i],i,t);return e}function J(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function q(t){var r=-1,e=Array(t.size);return t.forEach((function(t,n){e[++r]=[n,t]})),e}function U(t,r){return function(e){return t(r(e))}}function $(t){var r=-1,e=Array(t.size);return t.forEach((function(t){e[++r]=t})),e}var z,Z=Array.prototype,K=Function.prototype,V=Object.prototype,G=S["__core-js_shared__"],Q=(z=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+z:"",X=K.toString,Y=V.hasOwnProperty,tt=V.toString,rt=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),et=D?S.Buffer:void 0,nt=S.Symbol,it=S.Uint8Array,ot=U(Object.getPrototypeOf,Object),st=Object.create,at=V.propertyIsEnumerable,ut=Z.splice,ct=Object.getOwnPropertySymbols,ft=et?et.isBuffer:void 0,lt=U(Object.keys,Object),gt=Bt(S,"DataView"),ht=Bt(S,"Map"),pt=Bt(S,"Promise"),yt=Bt(S,"Set"),mt=Bt(S,"WeakMap"),dt=Bt(Object,"create"),vt=Jt(gt),bt=Jt(ht),wt=Jt(pt),_t=Jt(yt),Ot=Jt(mt),Tt=nt?nt.prototype:void 0,jt=Tt?Tt.valueOf:void 0;function At(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Mt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Et(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Wt(t){this.__data__=new Mt(t)}function It(t,r){var e=Ut(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&$t(t)}(t)&&Y.call(t,"callee")&&(!at.call(t,"callee")||tt.call(t)==i)}(t)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],n=e.length,o=!!n;for(var s in t)!r&&!Y.call(t,s)||o&&("length"==s||Ht(s,n))||e.push(s);return e}function Rt(t,r,e){var n=t[r];Y.call(t,r)&&qt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Ct(t,r){for(var e=t.length;e--;)if(qt(t[e][0],r))return e;return-1}function Nt(t,r,e,n,f,h,v){var C;if(n&&(C=h?n(t,f,h,v):n(t)),void 0!==C)return C;if(!Kt(t))return t;var N=Ut(t);if(N){if(C=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&Y.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,C)}else{var L=Pt(t),S=L==a||L==u;if(zt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(L==g||L==i||S&&!h){if(J(t))return h?t:{};if(C=function(t){return"function"!=typeof t.constructor||kt(t)?{}:(r=ot(t),Kt(r)?st(r):{});var r}(S?{}:t),!r)return function(t,r){return St(t,Dt(t),r)}(t,function(t,r){return t&&St(r,Vt(r),t)}(C,t))}else{if(!F[L])return h?t:{};C=function(t,r,e,n){var i=t.constructor;switch(r){case b:return Lt(t);case o:case s:return new i(+t);case w:return function(t,r){var e=r?Lt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.byteLength)}(t,n);case _:case O:case T:case j:case A:case M:case E:case W:case I:return function(t,r){var e=r?Lt(t.buffer):t.buffer;return new t.constructor(e,t.byteOffset,t.length)}(t,n);case c:return function(t,r,e){return k(r?e(q(t),!0):q(t),P,new t.constructor)}(t,n,e);case l:case m:return new i(t);case p:return function(t){var r=new t.constructor(t.source,R.exec(t));return r.lastIndex=t.lastIndex,r}(t);case y:return function(t,r,e){return k(r?e($(t),!0):$(t),H,new t.constructor)}(t,n,e);case d:return a=t,jt?Object(jt.call(a)):{}}var a}(t,L,Nt,r)}}v||(v=new Wt);var x=v.get(t);if(x)return x;if(v.set(t,C),!N)var B=e?function(t){return function(t,r,e){var n=r(t);return Ut(t)?n:function(t,r){for(var e=-1,n=r.length,i=t.length;++e<n;)t[i+e]=r[e];return t}(n,e(t))}(t,Vt,Dt)}(t):Vt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(B||t,(function(i,o){B&&(i=t[o=i]),Rt(C,o,Nt(i,r,e,n,o,t,v))})),C}function Ft(t){return!(!Kt(t)||(r=t,Q&&Q in r))&&(Zt(t)||J(t)?rt:C).test(Jt(t));var r}function Lt(t){var r=new t.constructor(t.byteLength);return new it(r).set(new it(t)),r}function St(t,r,e,n){e||(e={});for(var i=-1,o=r.length;++i<o;){var s=r[i],a=n?n(e[s],t[s],s,e,t):void 0;Rt(e,s,void 0===a?t[s]:a)}return e}function xt(t,r){var e,n,i=t.__data__;return("string"==(n=typeof(e=r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?i["string"==typeof r?"string":"hash"]:i.map}function Bt(t,r){var e=function(t,r){return null==t?void 0:t[r]}(t,r);return Ft(e)?e:void 0}At.prototype.clear=function(){this.__data__=dt?dt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var r=this.__data__;if(dt){var n=r[t];return n===e?void 0:n}return Y.call(r,t)?r[t]:void 0},At.prototype.has=function(t){var r=this.__data__;return dt?void 0!==r[t]:Y.call(r,t)},At.prototype.set=function(t,r){return this.__data__[t]=dt&&void 0===r?e:r,this},Mt.prototype.clear=function(){this.__data__=[]},Mt.prototype.delete=function(t){var r=this.__data__,e=Ct(r,t);return!(e<0)&&(e==r.length-1?r.pop():ut.call(r,e,1),!0)},Mt.prototype.get=function(t){var r=this.__data__,e=Ct(r,t);return e<0?void 0:r[e][1]},Mt.prototype.has=function(t){return Ct(this.__data__,t)>-1},Mt.prototype.set=function(t,r){var e=this.__data__,n=Ct(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},Et.prototype.clear=function(){this.__data__={hash:new At,map:new(ht||Mt),string:new At}},Et.prototype.delete=function(t){return xt(this,t).delete(t)},Et.prototype.get=function(t){return xt(this,t).get(t)},Et.prototype.has=function(t){return xt(this,t).has(t)},Et.prototype.set=function(t,r){return xt(this,t).set(t,r),this},Wt.prototype.clear=function(){this.__data__=new Mt},Wt.prototype.delete=function(t){return this.__data__.delete(t)},Wt.prototype.get=function(t){return this.__data__.get(t)},Wt.prototype.has=function(t){return this.__data__.has(t)},Wt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof Mt){var n=e.__data__;if(!ht||n.length<199)return n.push([t,r]),this;e=this.__data__=new Et(n)}return e.set(t,r),this};var Dt=ct?U(ct,Object):function(){return[]},Pt=function(t){return tt.call(t)};function Ht(t,r){return!!(r=null==r?n:r)&&("number"==typeof t||N.test(t))&&t>-1&&t%1==0&&t<r}function kt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||V)}function Jt(t){if(null!=t){try{return X.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function qt(t,r){return t===r||t!=t&&r!=r}(gt&&Pt(new gt(new ArrayBuffer(1)))!=w||ht&&Pt(new ht)!=c||pt&&Pt(pt.resolve())!=h||yt&&Pt(new yt)!=y||mt&&Pt(new mt)!=v)&&(Pt=function(t){var r=tt.call(t),e=r==g?t.constructor:void 0,n=e?Jt(e):void 0;if(n)switch(n){case vt:return w;case bt:return c;case wt:return h;case _t:return y;case Ot:return v}return r});var Ut=Array.isArray;function $t(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=n}(t.length)&&!Zt(t)}var zt=ft||function(){return!1};function Zt(t){var r=Kt(t)?tt.call(t):"";return r==a||r==u}function Kt(t){var r=typeof t;return!!t&&("object"==r||"function"==r)}function Vt(t){return $t(t)?It(t):function(t){if(!kt(t))return lt(t);var r=[];for(var e in Object(t))Y.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}t.exports=function(t){return Nt(t,!0,!0)}}));var l=" ";function g(t,r){return void 0===r&&(r=0),function(t){var r=t.str,e=t.idx,n=void 0===e?0:e,i=t.stopAtNewlines,o=void 0!==i&&i,s=t.stopAtRawNbsp,a=void 0!==s&&s;if("string"!=typeof r||!r.length)return null;if(n&&"number"==typeof n||(n=0),!r[n+1])return null;if(r[n+1]&&(r[n+1].trim()||o&&"\n\r".includes(r[n+1])||a&&r[n+1]===l))return n+1;if(r[n+2]&&(r[n+2].trim()||o&&"\n\r".includes(r[n+2])||a&&r[n+2]===l))return n+2;for(var u=n+1,c=r.length;u<c;u++)if(r[u].trim()||o&&"\n\r".includes(r[u])||a&&r[u]===l)return u;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}function h(t,r){return void 0===r&&(r=0),function(t){var r=t.str,e=t.idx,n=t.stopAtNewlines,i=t.stopAtRawNbsp;if("string"!=typeof r||!r.length)return null;if(e&&"number"==typeof e||(e=0),e<1)return null;if(r[~-e]&&(r[~-e].trim()||n&&"\n\r".includes(r[~-e])||i&&r[~-e]===l))return~-e;if(r[e-2]&&(r[e-2].trim()||n&&"\n\r".includes(r[e-2])||i&&r[e-2]===l))return e-2;for(var o=e;o--;)if(r[o]&&(r[o].trim()||n&&"\n\r".includes(r[o])||i&&r[o]===l))return o;return null}({str:t,idx:r,stopAtNewlines:!1,stopAtRawNbsp:!1})}function p(t,r){void 0===r&&(r=1);function e(t){return Array.from(t).reverse().join("")}function n(t,r,e){var n=e?"\n":"\r",i=e?"\r":"\n";if(!t)return t;for(var o=0,s="",a=0,u=t.length;a<u;a++)(t[a]===n||t[a]===i&&t[a-1]!==n)&&o++,"\r\n".includes(t[a])||" "===t[a]?" "===t[a]?s+=t[a]:t[a]===n?o<=r&&(s+=t[a],t[a+1]===i&&(s+=t[a+1],a++)):t[a]===i&&(!t[a-1]||t[a-1]!==n)&&o<=r&&(s+=t[a]):t[a+1]||o||(s+=" ");return s}if("string"==typeof t&&t.length){var i=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(i=+r);var o="",s="";if(t.trim()){if(!t[0].trim())for(var a=0,u=t.length;a<u;a++)if(t[a].trim()){o=t.slice(0,a);break}}else o=t;if(t.trim()&&(""===t.slice(-1).trim()||" "===t.slice(-1)))for(var c=t.length;c--;)if(t[c].trim()){s=t.slice(c+1);break}return""+n(o,i,!1)+t.trim()+e(n(e(s),i,!0))}return t}var y={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function m(t,r){if(!Array.isArray(t)||!t.length)return t;var e,i,o=n(n({},y),r);if(o.strictlyTwoElementsInRangeArrays&&!t.filter((function(t){return t})).every((function(t,r){return 2===t.length||(e=r,i=t.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+e+"th range ("+JSON.stringify(t[e],null,4)+") has not two but "+i+" elements!");if(!t.filter((function(t){return t})).every((function(t,r){return!(!Number.isInteger(t[0])||t[0]<0||!Number.isInteger(t[1])||t[1]<0)||(e=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+e+"th range ("+JSON.stringify(t[e],null,4)+") does not consist of only natural numbers!");var s=Math.pow(t.filter((function(t){return t})).length,2),a=0;return Array.from(t).filter((function(t){return t})).sort((function(t,r){return o.progressFn&&o.progressFn(Math.floor(100*(a+=1)/s)),t[0]===r[0]?t[1]<r[1]?-1:t[1]>r[1]?1:0:t[0]<r[0]?-1:1}))}var d={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function v(t,r){function e(t){return t&&"object"==typeof t&&!Array.isArray(t)}if(!Array.isArray(t)||!t.length)return null;var i;if(r){if(!e(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((i=n(n({},d),r)).progressFn&&e(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof i.progressFn+'", equal to '+JSON.stringify(i.progressFn,null,4));if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof i.mergeType+'", equal to '+JSON.stringify(i.mergeType,null,4));if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof i.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(i.joinRangesThatTouchEdges,null,4))}else i=n({},d);var o,s,a,u=t.filter((function(t){return t})).map((function(t){return[].concat(t)})).filter((function(t){return void 0!==t[2]||t[0]!==t[1]}));if(!(o=i.progressFn?m(u,{progressFn:function(t){(a=Math.floor(t/5))!==s&&(s=a,i.progressFn(a))}}):m(u)))return null;for(var c=o.length-1,f=c;f>0;f--)i.progressFn&&(a=Math.floor(78*(1-f/c))+21)!==s&&a>s&&(s=a,i.progressFn(a)),(o[f][0]<=o[f-1][0]||!i.joinRangesThatTouchEdges&&o[f][0]<o[f-1][1]||i.joinRangesThatTouchEdges&&o[f][0]<=o[f-1][1])&&(o[f-1][0]=Math.min(o[f][0],o[f-1][0]),o[f-1][1]=Math.max(o[f][1],o[f-1][1]),void 0!==o[f][2]&&(o[f-1][0]>=o[f][0]||o[f-1][1]<=o[f][1])&&null!==o[f-1][2]&&(null===o[f][2]&&null!==o[f-1][2]?o[f-1][2]=null:null!=o[f-1][2]?2==+i.mergeType&&o[f-1][0]===o[f][0]?o[f-1][2]=o[f][2]:o[f-1][2]+=o[f][2]:o[f-1][2]=o[f][2]),o.splice(f,1),f=o.length);return o.length?o:null}function b(t){return null!=t}function w(t){return Number.isInteger(t)&&t>=0}function _(t){return"string"==typeof t}var O={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},T=function(){function t(t){var r=n(n({},O),t);if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(_(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!_(r.mergeType)||"2"!==r.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof r.mergeType+'", equal to '+JSON.stringify(r.mergeType,null,4));r.mergeType=2}this.opts=r,this.ranges=[]}var r=t.prototype;return r.add=function(t,r,e){var n=this;if(null!=t||null!=r){if(b(t)&&!b(r)){if(Array.isArray(t)){if(t.length){if(t.some((function(t){return Array.isArray(t)})))return void t.forEach((function(t){Array.isArray(t)&&n.add.apply(n,t)}));t.length&&w(+t[0])&&w(+t[1])&&this.add.apply(this,t)}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('+JSON.stringify(t,null,0)+') but second-one, "to" is not ('+JSON.stringify(r,null,0)+")")}if(!b(t)&&b(r))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('+JSON.stringify(r,null,0)+') but first-one, "from" is not ('+JSON.stringify(t,null,0)+")");var i=+t,o=+r;if(w(e)&&(e=String(e)),!w(i)||!w(o))throw w(i)&&i>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof o+'" equal to: '+JSON.stringify(o,null,4)):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof i+'" equal to: '+JSON.stringify(i,null,4));if(b(e)&&!_(e)&&!w(e))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+typeof e+", equal to:\n"+JSON.stringify(e,null,4));if(b(this.ranges)&&Array.isArray(this.last())&&i===this.last()[1]){if(this.last()[1]=o,this.last(),null!==this.last()[2]&&b(e)){var s=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?e:this.last()[2]+e;this.opts.limitToBeAddedWhitespace&&(s=p(s,this.opts.limitLinebreaksCount)),_(s)&&!s.length||(this.last()[2]=s)}}else{this.ranges||(this.ranges=[]);var a=void 0===e||_(e)&&!e.length?[i,o]:[i,o,e&&this.opts.limitToBeAddedWhitespace?p(e,this.opts.limitLinebreaksCount):e];this.ranges.push(a)}}},r.push=function(t,r,e){this.add(t,r,e)},r.current=function(){var t=this;return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=v(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return b(r[2])?[r[0],r[1],p(r[2],t.opts.limitLinebreaksCount)]:r})):this.ranges):null},r.wipe=function(){this.ranges=[]},r.replace=function(t){if(Array.isArray(t)&&t.length){if(!Array.isArray(t[0])||!w(t[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, "+JSON.stringify(t[0],null,4)+" should be an array and its first element should be an integer, a string index.");this.ranges=Array.from(t)}else this.ranges=[]},r.last=function(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null},t}();function j(t,r,e){var n,i=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(r&&!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(e&&"function"!=typeof e)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(!r||!r.filter((function(t){return t})).length)return t;var s=(n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r)).length,a=0;n.filter((function(t){return t})).forEach((function(t,r){if(e&&(i=Math.floor(a/s*10))!==o&&(o=i,e(i)),!Array.isArray(t))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+r+"th element not an array: "+JSON.stringify(t,null,4)+", which is "+typeof t);if(!Number.isInteger(t[0])){if(!Number.isInteger(+t[0])||+t[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(t,null,0)+". Its first element is not an integer, string index, but "+typeof t[0]+", equal to: "+JSON.stringify(t[0],null,4)+".");n[r][0]=+n[r][0]}if(!Number.isInteger(t[1])){if(!Number.isInteger(+t[1])||+t[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(t,null,0)+". Its second element is not an integer, string index, but "+typeof t[1]+", equal to: "+JSON.stringify(t[1],null,4)+".");n[r][1]=+n[r][1]}a+=1}));var u=v(n,{progressFn:function(t){e&&(i=10+Math.floor(t/10))!==o&&(o=i,e(i))}}),c=Array.isArray(u)?u.length:0;if(c>0){var f=t.slice(u[c-1][1]);t=u.reduce((function(r,n,s,a){return e&&(i=20+Math.floor(s/c*80))!==o&&(o=i,e(i)),r+t.slice(0===s?0:a[s-1][1],a[s][0])+(a[s][2]||"")}),""),t+=f}return t}var A=" ",M="&nbsp;",E="\\00A0",W="\\u00A0",I=[{heads:"{{",tails:"}}"},{heads:["{% if","{%- if"],tails:["{% endif","{%- endif"]},{heads:["{% for","{%- for"],tails:["{% endfor","{%- endfor"]},{heads:["{%","{%-"],tails:["%}","-%}"]},{heads:"{#",tails:"#}"}],R=[{heads:"{{",tails:"}}"}],C=[{heads:["<%","<%=","<%-"],tails:["%>","=%>","-%>"]}],N=["abbr","address","area","article","aside","audio","base","bdi","bdo","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","doctype","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","param","picture","pre","progress","rb","rp","rt","rtc","ruby","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","ul","var","video","wbr","xml"],F={removeWidowPreventionMeasures:!1,convertEntities:!0,targetLanguage:"html",UKPostcodes:!1,hyphens:!0,minWordCount:4,minCharCount:5,ignore:[],reportProgressFunc:null,reportProgressFuncFrom:0,reportProgressFuncTo:100,tagRanges:[]};t.defaults=F,t.removeWidows=function(t,r){var e=Date.now();if("string"!=typeof t)throw void 0===t?new Error("string-remove-widows: [THROW_ID_01] the first input argument is completely missing! It should be given as string."):new Error('string-remove-widows: [THROW_ID_02] the first input argument must be string! It was given as "'+typeof t+'", equal to:\n'+JSON.stringify(t,null,4));if(r&&"object"!=typeof r)throw new Error("string-remove-widows: [THROW_ID_03] the second input argument, options object, should be a plain object but it was given as type "+typeof r+", equal to "+JSON.stringify(r,null,4));var i,o,s,a,u,f,l,p,y,m,d=Array.isArray,v=t.length,b=new T({mergeType:2}),w=["."],_=/[A-Z]{1,2}[0-9][0-9A-Z]?$/,O=/^[0-9][A-Z]{2}/,L=.06,S=0,x=0,B=0,D=n(n({},F),r),P={removeWidows:!1,convertEntities:!1};if(!D.ignore||!d(D.ignore)&&"string"!=typeof D.ignore)D.ignore=[];else if("string"==typeof D.ignore&&(D.ignore=[D.ignore]),D.ignore.includes("all"))D.ignore=D.ignore.concat(I.concat(C));else if(D.ignore.some((function(t){return"string"==typeof t}))){var H=[];D.ignore=D.ignore.filter((function(t){return"string"==typeof t&&t.length?(["nunjucks","jinja","liquid"].includes(t.trim().toLowerCase())?H=H.concat(I):["hugo"].includes(t.trim().toLowerCase())?H=H.concat(R):["hexo"].includes(t.trim().toLowerCase())&&(H=H.concat(C)),!1):"object"==typeof t||void 0})),H.length&&(D.ignore=D.ignore.concat(H))}function k(r,e){var n=A;D.removeWidowPreventionMeasures?n=" ":D.convertEntities&&(n=M,"string"==typeof D.targetLanguage&&("css"===D.targetLanguage.trim().toLowerCase()?n=E:"js"===D.targetLanguage.trim().toLowerCase()&&(n=W))),t.slice(r,e)!==n&&b.push(r,e,n)}function J(){x=0,B=0,o=void 0,s=void 0,a=void 0,u=void 0,f=void 0,l=void 0}D.reportProgressFunc&&(m=Math.floor(D.reportProgressFuncTo-(D.reportProgressFuncTo-D.reportProgressFuncFrom)*L-D.reportProgressFuncFrom)),J();for(var q=function(r){if(!p&&d(D.ignore)&&D.ignore.length&&D.ignore.some((function(e,n){if(d(e.heads)&&e.heads.some((function(e){return t.startsWith(e,r)}))||"string"==typeof e.heads&&t.startsWith(e.heads,r))return x+=1,p=D.ignore[n].tails,U=r,!0})),!p&&y&&y===r&&(x+=1,y=void 0),"function"==typeof D.reportProgressFunc&&(i=D.reportProgressFuncFrom+Math.floor(r/v*(m||1)))!==S&&(S=i,D.reportProgressFunc(i)),!p&&r&&t[r]&&t[r].trim()&&(!t[r-1]||t[r-1]&&!t[r-1].trim())&&(u=r),!p&&t[r]&&t[r].trim()&&(B+=1),p||!D.hyphens||!("-—–".includes(t[r])||t.startsWith("&ndash;",r)||t.startsWith("\\2013",r)||t.startsWith("\\u2013",r)||t.startsWith("&mdash;",r)||t.startsWith("\\2014",r)||t.startsWith("\\u2014",r))||!t[r+1]||t[r+1].trim()&&"&"!==t[r]||t[r-1]&&!t[r-1].trim()&&t[h(t,r)]&&(k(h(t,r)+1,r),P.removeWidows=!0),p||!t.startsWith("&nbsp;",r)&&!t.startsWith("&#160;",r)||(f=r,l=r+6,t[r+6]&&t[r+6].trim()&&(y=r+6),D.convertEntities?"css"!==D.targetLanguage&&"js"!==D.targetLanguage||(b.push(r,r+6,"css"===D.targetLanguage?E:W),P.convertEntities=!0):(b.push(r,r+6,A),P.convertEntities=!0)),!p&&t[r+4]&&"\\"===t[r]&&"0"===t[r+1]&&"0"===t[r+2]&&"A"===t[r+3].toUpperCase()&&"0"===t[r+4]&&(f=r,l=r+5,t[r+5]&&t[r+5].trim()&&(y=r+5),D.convertEntities?"html"!==D.targetLanguage&&"js"!==D.targetLanguage||(b.push(r,r+5,"html"===D.targetLanguage?M:W),P.convertEntities=!0):(b.push(r,r+5,A),P.convertEntities=!0)),!p&&"\\"===t[r]&&t[r+1]&&"u"===t[r+1].toLowerCase()&&"0"===t[r+2]&&"0"===t[r+3]&&t[r+4]&&"A"===t[r+4].toUpperCase()&&"0"===t[r+5]&&(f=r,l=r+6,t[r+6]&&t[r+6].trim()&&(y=r+6),D.convertEntities?"html"!==D.targetLanguage&&"css"!==D.targetLanguage||b.push(r,r+6,"html"===D.targetLanguage?M:E):b.push(r,r+6,A)),p||t[r]!==A||(f=r,l=r+1,D.convertEntities&&b.push(r,r+1,"css"===D.targetLanguage?E:"js"===D.targetLanguage?W:M)),p||!t[r]||!t[r].trim()||t[r-1]&&t[r-1].trim()||(x+=1),!p&&(!t[r]||"\r\n".includes(t[r])||("\n"===t[r]||"\r"===t[r]||"\r"===t[r]&&"\n"===t[r+1])&&h(t,r)&&w.includes(t[h(t,r)]))){var e,n;if((!D.minWordCount||x>=D.minWordCount)&&(!D.minCharCount||B>=D.minCharCount))void 0!==a&&void 0!==u&&void 0!==f&&void 0!==l?a>f?(e=a,n=u):(e=f,n=l):void 0!==a&&void 0!==u?(e=a,n=u):void 0!==f&&void 0!==l&&(e=f,n=l),e&&n||!o||!s||(e=o,n=s),e&&n&&(k(e,n),P.removeWidows=!0);J()}D.UKPostcodes&&t[r]&&!t[r].trim()&&t[r-1]&&t[r-1].trim()&&_.test(t.slice(0,r))&&t[g(t,r)]&&O.test(t.slice(g(t,r)))&&(k(r,g(t,r)),P.removeWidows=!0),p||!t[r]||t[r].trim()||!t[r-1]||!t[r-1].trim()||!(void 0===a||t[a-1]&&t[a-1].trim())||"/>".includes(t[g(t,r)])||t.slice(0,r).trim().endsWith("br")||t.slice(0,r).trim().endsWith("hr")||t.slice(0,r).endsWith("<")&&N.some((function(e){return t.startsWith(e,g(t,r))}))||(o=a,s=u,a=r,u=void 0,void 0===f&&void 0===l||(f=void 0,l=void 0));var T=void 0;p&&("string"!=typeof p||p.length&&!t.startsWith(p,r)?!d(p)||p.length&&!p.some((function(e){if(t.startsWith(e,r))return T=e,U=r,!0}))||(p=void 0,r+=T.length,d(D.ignore)&&D.ignore.length&&t[r+1]&&D.ignore.some((function(e){return U=r,c(t,r,e.tails,{trimBeforeMatching:!0,cb:function(e,n,i){return i&&t[(r=i-1)+1]&&t[r+1].trim()&&(x+=1),U=r,!0}})}))):p=void 0),t[r]&&"\r\n".includes(t[r])&&(x=0,B=0),d(D.tagRanges)&&D.tagRanges.length&&D.tagRanges.some((function(t){if(r>=t[0]&&r<=t[1]&&t[1]-1>r)return U=r=t[1]-1,!0})),U=r},U=0;U<=v;U++)q(U);return j(t,b.current()).split("").forEach((function(t,r){})),{res:j(t,b.current(),D.reportProgressFunc?function(t){(i=Math.floor(.94*(D.reportProgressFuncTo-D.reportProgressFuncFrom)+t/100*(D.reportProgressFuncTo-D.reportProgressFuncFrom)*L))!==S&&(S=i,D.reportProgressFunc(i))}:void 0),ranges:b.current(),log:{timeTakenInMilliseconds:Date.now()-e},whatWasDone:P}},t.version="2.0.9",Object.defineProperty(t,"__esModule",{value:!0})}));
