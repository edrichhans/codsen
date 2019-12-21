/**
 * string-convert-indexes
 * Convert string character indexes from JS native index-based to Unicode character-count-based and backwards.
 * Version: 1.9.53
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://gitlab.com/codsen/codsen/tree/master/packages/string-convert-indexes
 */

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).stringConvertIndexes={})}(this,(function(e){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function n(e,t){return e(t={exports:{}},t.exports),t.exports}var o=n((function(e,t){var n=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",c="[object Boolean]",u="[object Date]",s="[object Function]",f="[object GeneratorFunction]",l="[object Map]",h="[object Number]",p="[object Object]",y="[object RegExp]",g="[object Set]",d="[object String]",v="[object Symbol]",b="[object ArrayBuffer]",m="[object DataView]",_="[object Float32Array]",w="[object Float64Array]",j="[object Int8Array]",O="[object Int16Array]",$="[object Int32Array]",S="[object Uint8Array]",T="[object Uint8ClampedArray]",A="[object Uint16Array]",k="[object Uint32Array]",x=/\w*$/,E=/^\[object .+?Constructor\]$/,W=/^(?:0|[1-9]\d*)$/,I={};I[a]=I["[object Array]"]=I[b]=I[m]=I[c]=I[u]=I[_]=I[w]=I[j]=I[O]=I[$]=I[l]=I[h]=I[p]=I[y]=I[g]=I[d]=I[v]=I[S]=I[T]=I[A]=I[k]=!0,I["[object Error]"]=I[s]=I["[object WeakMap]"]=!1;var N="object"==typeof r&&r&&r.Object===Object&&r,P="object"==typeof self&&self&&self.Object===Object&&self,M=N||P||Function("return this")(),D=t&&!t.nodeType&&t,R=D&&e&&!e.nodeType&&e,H=R&&R.exports===D;function F(e,t){return e.set(t[0],t[1]),e}function J(e,t){return e.add(t),e}function C(e,t,r,n){var o=-1,i=e?e.length:0;for(n&&i&&(r=e[++o]);++o<i;)r=t(r,e[o],o,e);return r}function L(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}function K(e){var t=-1,r=Array(e.size);return e.forEach((function(e,n){r[++t]=[n,e]})),r}function Z(e,t){return function(r){return e(t(r))}}function V(e){var t=-1,r=Array(e.size);return e.forEach((function(e){r[++t]=e})),r}var q,B=Array.prototype,U=Function.prototype,z=Object.prototype,G=M["__core-js_shared__"],Q=(q=/[^.]+$/.exec(G&&G.keys&&G.keys.IE_PROTO||""))?"Symbol(src)_1."+q:"",X=U.toString,Y=z.hasOwnProperty,ee=z.toString,te=RegExp("^"+X.call(Y).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),re=H?M.Buffer:void 0,ne=M.Symbol,oe=M.Uint8Array,ie=Z(Object.getPrototypeOf,Object),ae=Object.create,ce=z.propertyIsEnumerable,ue=B.splice,se=Object.getOwnPropertySymbols,fe=re?re.isBuffer:void 0,le=Z(Object.keys,Object),he=Re(M,"DataView"),pe=Re(M,"Map"),ye=Re(M,"Promise"),ge=Re(M,"Set"),de=Re(M,"WeakMap"),ve=Re(Object,"create"),be=Le(he),me=Le(pe),_e=Le(ye),we=Le(ge),je=Le(de),Oe=ne?ne.prototype:void 0,$e=Oe?Oe.valueOf:void 0;function Se(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Te(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function Ae(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ke(e){this.__data__=new Te(e)}function xe(e,t){var r=Ze(e)||function(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&Ve(e)}(e)&&Y.call(e,"callee")&&(!ce.call(e,"callee")||ee.call(e)==a)}(e)?function(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}(e.length,String):[],n=r.length,o=!!n;for(var i in e)!t&&!Y.call(e,i)||o&&("length"==i||Je(i,n))||r.push(i);return r}function Ee(e,t,r){var n=e[t];Y.call(e,t)&&Ke(n,r)&&(void 0!==r||t in e)||(e[t]=r)}function We(e,t){for(var r=e.length;r--;)if(Ke(e[r][0],t))return r;return-1}function Ie(e,t,r,n,o,i,E){var W;if(n&&(W=i?n(e,o,i,E):n(e)),void 0!==W)return W;if(!Ue(e))return e;var N=Ze(e);if(N){if(W=function(e){var t=e.length,r=e.constructor(t);t&&"string"==typeof e[0]&&Y.call(e,"index")&&(r.index=e.index,r.input=e.input);return r}(e),!t)return function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(e,W)}else{var P=Fe(e),M=P==s||P==f;if(qe(e))return function(e,t){if(t)return e.slice();var r=new e.constructor(e.length);return e.copy(r),r}(e,t);if(P==p||P==a||M&&!i){if(L(e))return i?e:{};if(W=function(e){return"function"!=typeof e.constructor||Ce(e)?{}:(t=ie(e),Ue(t)?ae(t):{});var t}(M?{}:e),!t)return function(e,t){return Me(e,He(e),t)}(e,function(e,t){return e&&Me(t,ze(t),e)}(W,e))}else{if(!I[P])return i?e:{};W=function(e,t,r,n){var o=e.constructor;switch(t){case b:return Pe(e);case c:case u:return new o(+e);case m:return function(e,t){var r=t?Pe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}(e,n);case _:case w:case j:case O:case $:case S:case T:case A:case k:return function(e,t){var r=t?Pe(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}(e,n);case l:return function(e,t,r){return C(t?r(K(e),!0):K(e),F,new e.constructor)}(e,n,r);case h:case d:return new o(e);case y:return function(e){var t=new e.constructor(e.source,x.exec(e));return t.lastIndex=e.lastIndex,t}(e);case g:return function(e,t,r){return C(t?r(V(e),!0):V(e),J,new e.constructor)}(e,n,r);case v:return i=e,$e?Object($e.call(i)):{}}var i}(e,P,Ie,t)}}E||(E=new ke);var D=E.get(e);if(D)return D;if(E.set(e,W),!N)var R=r?function(e){return function(e,t,r){var n=t(e);return Ze(e)?n:function(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}(n,r(e))}(e,ze,He)}(e):ze(e);return function(e,t){for(var r=-1,n=e?e.length:0;++r<n&&!1!==t(e[r],r,e););}(R||e,(function(o,i){R&&(o=e[i=o]),Ee(W,i,Ie(o,t,r,n,i,e,E))})),W}function Ne(e){return!(!Ue(e)||(t=e,Q&&Q in t))&&(Be(e)||L(e)?te:E).test(Le(e));var t}function Pe(e){var t=new e.constructor(e.byteLength);return new oe(t).set(new oe(e)),t}function Me(e,t,r,n){r||(r={});for(var o=-1,i=t.length;++o<i;){var a=t[o],c=n?n(r[a],e[a],a,r,e):void 0;Ee(r,a,void 0===c?e[a]:c)}return r}function De(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function Re(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return Ne(r)?r:void 0}Se.prototype.clear=function(){this.__data__=ve?ve(null):{}},Se.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},Se.prototype.get=function(e){var t=this.__data__;if(ve){var r=t[e];return r===o?void 0:r}return Y.call(t,e)?t[e]:void 0},Se.prototype.has=function(e){var t=this.__data__;return ve?void 0!==t[e]:Y.call(t,e)},Se.prototype.set=function(e,t){return this.__data__[e]=ve&&void 0===t?o:t,this},Te.prototype.clear=function(){this.__data__=[]},Te.prototype.delete=function(e){var t=this.__data__,r=We(t,e);return!(r<0)&&(r==t.length-1?t.pop():ue.call(t,r,1),!0)},Te.prototype.get=function(e){var t=this.__data__,r=We(t,e);return r<0?void 0:t[r][1]},Te.prototype.has=function(e){return We(this.__data__,e)>-1},Te.prototype.set=function(e,t){var r=this.__data__,n=We(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},Ae.prototype.clear=function(){this.__data__={hash:new Se,map:new(pe||Te),string:new Se}},Ae.prototype.delete=function(e){return De(this,e).delete(e)},Ae.prototype.get=function(e){return De(this,e).get(e)},Ae.prototype.has=function(e){return De(this,e).has(e)},Ae.prototype.set=function(e,t){return De(this,e).set(e,t),this},ke.prototype.clear=function(){this.__data__=new Te},ke.prototype.delete=function(e){return this.__data__.delete(e)},ke.prototype.get=function(e){return this.__data__.get(e)},ke.prototype.has=function(e){return this.__data__.has(e)},ke.prototype.set=function(e,t){var r=this.__data__;if(r instanceof Te){var o=r.__data__;if(!pe||o.length<n-1)return o.push([e,t]),this;r=this.__data__=new Ae(o)}return r.set(e,t),this};var He=se?Z(se,Object):function(){return[]},Fe=function(e){return ee.call(e)};function Je(e,t){return!!(t=null==t?i:t)&&("number"==typeof e||W.test(e))&&e>-1&&e%1==0&&e<t}function Ce(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||z)}function Le(e){if(null!=e){try{return X.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function Ke(e,t){return e===t||e!=e&&t!=t}(he&&Fe(new he(new ArrayBuffer(1)))!=m||pe&&Fe(new pe)!=l||ye&&"[object Promise]"!=Fe(ye.resolve())||ge&&Fe(new ge)!=g||de&&"[object WeakMap]"!=Fe(new de))&&(Fe=function(e){var t=ee.call(e),r=t==p?e.constructor:void 0,n=r?Le(r):void 0;if(n)switch(n){case be:return m;case me:return l;case _e:return"[object Promise]";case we:return g;case je:return"[object WeakMap]"}return t});var Ze=Array.isArray;function Ve(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=i}(e.length)&&!Be(e)}var qe=fe||function(){return!1};function Be(e){var t=Ue(e)?ee.call(e):"";return t==s||t==f}function Ue(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function ze(e){return Ve(e)?xe(e):function(e){if(!Ce(e))return le(e);var t=[];for(var r in Object(e))Y.call(e,r)&&"constructor"!=r&&t.push(r);return t}(e)}e.exports=function(e){return Ie(e,!0,!0)}})),i="[object Object]";var a,c,u=Function.prototype,s=Object.prototype,f=u.toString,l=s.hasOwnProperty,h=f.call(Object),p=s.toString,y=(a=Object.getPrototypeOf,c=Object,function(e){return a(c(e))});var g=function(e){if(!function(e){return!!e&&"object"==typeof e}(e)||p.call(e)!=i||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e))return!1;var t=y(e);if(null===t)return!0;var r=l.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&f.call(r)==h},d=n((function(e,t){var n,o,i,a,c,u,s,f,l,h,p,y,g,d,v,b,m,_,w,j;e.exports=(n="function"==typeof Promise,o="object"==typeof self?self:r,i="undefined"!=typeof Symbol,a="undefined"!=typeof Map,c="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,s="undefined"!=typeof WeakSet,f="undefined"!=typeof DataView,l=i&&void 0!==Symbol.iterator,h=i&&void 0!==Symbol.toStringTag,p=c&&"function"==typeof Set.prototype.entries,y=a&&"function"==typeof Map.prototype.entries,g=p&&Object.getPrototypeOf((new Set).entries()),d=y&&Object.getPrototypeOf((new Map).entries()),v=l&&"function"==typeof Array.prototype[Symbol.iterator],b=v&&Object.getPrototypeOf([][Symbol.iterator]()),m=l&&"function"==typeof String.prototype[Symbol.iterator],_=m&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1,function(e){var t=typeof e;if("object"!==t)return t;if(null===e)return"null";if(e===o)return"global";if(Array.isArray(e)&&(!1===h||!(Symbol.toStringTag in e)))return"Array";if("object"==typeof window&&null!==window){if("object"==typeof window.location&&e===window.location)return"Location";if("object"==typeof window.document&&e===window.document)return"Document";if("object"==typeof window.navigator){if("object"==typeof window.navigator.mimeTypes&&e===window.navigator.mimeTypes)return"MimeTypeArray";if("object"==typeof window.navigator.plugins&&e===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"==typeof window.HTMLElement)&&e instanceof window.HTMLElement){if("BLOCKQUOTE"===e.tagName)return"HTMLQuoteElement";if("TD"===e.tagName)return"HTMLTableDataCellElement";if("TH"===e.tagName)return"HTMLTableHeaderCellElement"}}var r=h&&e[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(e);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":c&&i===Set.prototype?"Set":a&&i===Map.prototype?"Map":s&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":f&&i===DataView.prototype?"DataView":a&&i===d?"Map Iterator":c&&i===g?"Set Iterator":v&&i===b?"Array Iterator":m&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(e).slice(w,j)})}));function v(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,m,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function b(e,t,r,n){for(var o=r-1,i=e.length;++o<i;)if(n(e[o],t))return o;return-1}function m(e){return e!=e}var _=Array.prototype.splice;function w(e,t,r,n){var o=n?b:v,i=-1,a=t.length,c=e;for(e===t&&(t=function(e,t){var r=-1,n=e.length;t||(t=Array(n));for(;++r<n;)t[r]=e[r];return t}(t)),r&&(c=function(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}(e,function(e){return function(t){return e(t)}}(r)));++i<a;)for(var u=0,s=t[i],f=r?r(s):s;(u=o(c,f,u,n))>-1;)c!==e&&_.call(c,u,1),_.call(e,u,1);return e}var j=function(e,t){return e&&e.length&&t&&t.length?w(e,t):e};const O=Array.isArray;function $(e){return"string"==typeof e&&e.length>0&&"."===e[0]?e.slice(1):e}function S(e,t){return function e(t,r,n,i){const a=o(t);let c,u,s,f,l;if((n=Object.assign({depth:-1,path:""},n)).depth+=1,O(a))for(c=0,u=a.length;c<u&&!i.now;c++){const t=`${n.path}.${c}`;void 0!==a[c]?(n.parent=o(a),n.parentType="array",s=e(r(a[c],void 0,Object.assign({},n,{path:$(t)}),i),r,Object.assign({},n,{path:$(t)}),i),Number.isNaN(s)&&c<a.length?(a.splice(c,1),c-=1):a[c]=s):a.splice(c,1)}else if(g(a))for(f=Object.keys(a),c=0,u=f.length;c<u&&!i.now;c++){l=f[c];const t=`${n.path}.${l}`;0===n.depth&&null!=l&&(n.topmostKey=l),n.parent=o(a),n.parentType="object",s=e(r(l,a[l],Object.assign({},n,{path:$(t)}),i),r,Object.assign({},n,{path:$(t)}),i),Number.isNaN(s)?delete a[l]:a[l]=s}return a}(e,t,{},{now:!1})}var T="__lodash_hash_undefined__",A=9007199254740991,k="[object Function]",x="[object GeneratorFunction]",E=/^\[object .+?Constructor\]$/,W="object"==typeof r&&r&&r.Object===Object&&r,I="object"==typeof self&&self&&self.Object===Object&&self,N=W||I||Function("return this")();function P(e,t,r){switch(r.length){case 0:return e.call(t);case 1:return e.call(t,r[0]);case 2:return e.call(t,r[0],r[1]);case 3:return e.call(t,r[0],r[1],r[2])}return e.apply(t,r)}function M(e,t){return!!(e?e.length:0)&&function(e,t,r){if(t!=t)return function(e,t,r,n){var o=e.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,H,r);var n=r-1,o=e.length;for(;++n<o;)if(e[n]===t)return n;return-1}(e,t,0)>-1}function D(e,t,r){for(var n=-1,o=e?e.length:0;++n<o;)if(r(t,e[n]))return!0;return!1}function R(e,t){for(var r=-1,n=e?e.length:0,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}function H(e){return e!=e}function F(e){return function(t){return e(t)}}function J(e,t){return e.has(t)}var C,L=Array.prototype,K=Function.prototype,Z=Object.prototype,V=N["__core-js_shared__"],q=(C=/[^.]+$/.exec(V&&V.keys&&V.keys.IE_PROTO||""))?"Symbol(src)_1."+C:"",B=K.toString,U=Z.hasOwnProperty,z=Z.toString,G=RegExp("^"+B.call(U).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Q=L.splice,X=Math.max,Y=Math.min,ee=fe(N,"Map"),te=fe(Object,"create");function re(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ne(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function oe(e){var t=-1,r=e?e.length:0;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}function ie(e){var t=-1,r=e?e.length:0;for(this.__data__=new oe;++t<r;)this.add(e[t])}function ae(e,t){for(var r,n,o=e.length;o--;)if((r=e[o][0])===(n=t)||r!=r&&n!=n)return o;return-1}function ce(e){return!(!he(e)||function(e){return!!q&&q in e}(e))&&(le(e)||function(e){var t=!1;if(null!=e&&"function"!=typeof e.toString)try{t=!!(e+"")}catch(e){}return t}(e)?G:E).test(function(e){if(null!=e){try{return B.call(e)}catch(e){}try{return e+""}catch(e){}}return""}(e))}function ue(e){return function(e){return function(e){return!!e&&"object"==typeof e}(e)&&function(e){return null!=e&&function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=A}(e.length)&&!le(e)}(e)}(e)?e:[]}function se(e,t){var r,n,o=e.__data__;return("string"==(n=typeof(r=t))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof t?"string":"hash"]:o.map}function fe(e,t){var r=function(e,t){return null==e?void 0:e[t]}(e,t);return ce(r)?r:void 0}function le(e){var t=he(e)?z.call(e):"";return t==k||t==x}function he(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}re.prototype.clear=function(){this.__data__=te?te(null):{}},re.prototype.delete=function(e){return this.has(e)&&delete this.__data__[e]},re.prototype.get=function(e){var t=this.__data__;if(te){var r=t[e];return r===T?void 0:r}return U.call(t,e)?t[e]:void 0},re.prototype.has=function(e){var t=this.__data__;return te?void 0!==t[e]:U.call(t,e)},re.prototype.set=function(e,t){return this.__data__[e]=te&&void 0===t?T:t,this},ne.prototype.clear=function(){this.__data__=[]},ne.prototype.delete=function(e){var t=this.__data__,r=ae(t,e);return!(r<0)&&(r==t.length-1?t.pop():Q.call(t,r,1),!0)},ne.prototype.get=function(e){var t=this.__data__,r=ae(t,e);return r<0?void 0:t[r][1]},ne.prototype.has=function(e){return ae(this.__data__,e)>-1},ne.prototype.set=function(e,t){var r=this.__data__,n=ae(r,e);return n<0?r.push([e,t]):r[n][1]=t,this},oe.prototype.clear=function(){this.__data__={hash:new re,map:new(ee||ne),string:new re}},oe.prototype.delete=function(e){return se(this,e).delete(e)},oe.prototype.get=function(e){return se(this,e).get(e)},oe.prototype.has=function(e){return se(this,e).has(e)},oe.prototype.set=function(e,t){return se(this,e).set(e,t),this},ie.prototype.add=ie.prototype.push=function(e){return this.__data__.set(e,T),this},ie.prototype.has=function(e){return this.__data__.has(e)};var pe=function(e,t){return t=X(void 0===t?e.length-1:t,0),function(){for(var r=arguments,n=-1,o=X(r.length-t,0),i=Array(o);++n<o;)i[n]=r[t+n];n=-1;for(var a=Array(t+1);++n<t;)a[n]=r[n];return a[t]=i,P(e,this,a)}}((function(e){var t=R(e,ue);return t.length&&t[0]===e[0]?function(e,t,r){for(var n=r?D:M,o=e[0].length,i=e.length,a=i,c=Array(i),u=1/0,s=[];a--;){var f=e[a];a&&t&&(f=R(f,F(t))),u=Y(f.length,u),c[a]=!r&&(t||o>=120&&f.length>=120)?new ie(a&&f):void 0}f=e[0];var l=-1,h=c[0];e:for(;++l<o&&s.length<u;){var p=f[l],y=t?t(p):p;if(p=r||0!==p?p:0,!(h?J(h,y):n(s,y,r))){for(a=i;--a;){var g=c[a];if(!(g?J(g,y):n(e[a],y,r)))continue e}h&&h.push(y),s.push(p)}}return s}(t):[]}));function ye(e){return"string"==typeof e?e.length>0?[e]:[]:e}var ge=n((function(e){e.exports=function(){var e=Object.prototype.toString;function t(e,t){return null!=e&&Object.prototype.hasOwnProperty.call(e,t)}function r(e){if(!e)return!0;if(o(e)&&0===e.length)return!0;if("string"!=typeof e){for(var r in e)if(t(e,r))return!1;return!0}return!1}function n(t){return e.call(t)}var o=Array.isArray||function(t){return"[object Array]"===e.call(t)};function i(e){var t=parseInt(e);return t.toString()===e?t:e}function a(e){e=e||{};var a=function(e){return Object.keys(a).reduce((function(t,r){return"create"===r?t:("function"==typeof a[r]&&(t[r]=a[r].bind(a,e)),t)}),{})};function c(r,n){return e.includeInheritedProps||"number"==typeof n&&Array.isArray(r)||t(r,n)}function u(e,t){if(c(e,t))return e[t]}function s(e,t,r,n){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if("string"==typeof t)return s(e,t.split(".").map(i),r,n);var o=t[0],a=u(e,o);return 1===t.length?(void 0!==a&&n||(e[o]=r),a):(void 0===a&&("number"==typeof t[1]?e[o]=[]:e[o]={}),s(e[o],t.slice(1),r,n))}return a.has=function(r,n){if("number"==typeof n?n=[n]:"string"==typeof n&&(n=n.split(".")),!n||0===n.length)return!!r;for(var a=0;a<n.length;a++){var c=i(n[a]);if(!("number"==typeof c&&o(r)&&c<r.length||(e.includeInheritedProps?c in Object(r):t(r,c))))return!1;r=r[c]}return!0},a.ensureExists=function(e,t,r){return s(e,t,r,!0)},a.set=function(e,t,r,n){return s(e,t,r,n)},a.insert=function(e,t,r,n){var i=a.get(e,t);n=~~n,o(i)||(i=[],a.set(e,t,i)),i.splice(n,0,r)},a.empty=function(e,t){var i,u;if(!r(t)&&null!=e&&(i=a.get(e,t))){if("string"==typeof i)return a.set(e,t,"");if(function(e){return"boolean"==typeof e||"[object Boolean]"===n(e)}(i))return a.set(e,t,!1);if("number"==typeof i)return a.set(e,t,0);if(o(i))i.length=0;else{if(!function(e){return"object"==typeof e&&"[object Object]"===n(e)}(i))return a.set(e,t,null);for(u in i)c(i,u)&&delete i[u]}}},a.push=function(e,t){var r=a.get(e,t);o(r)||(r=[],a.set(e,t,r)),r.push.apply(r,Array.prototype.slice.call(arguments,2))},a.coalesce=function(e,t,r){for(var n,o=0,i=t.length;o<i;o++)if(void 0!==(n=a.get(e,t[o])))return n;return r},a.get=function(e,t,r){if("number"==typeof t&&(t=[t]),!t||0===t.length)return e;if(null==e)return r;if("string"==typeof t)return a.get(e,t.split("."),r);var n=i(t[0]),o=u(e,n);return void 0===o?r:1===t.length?o:a.get(e[n],t.slice(1),r)},a.del=function(e,t){if("number"==typeof t&&(t=[t]),null==e)return e;if(r(t))return e;if("string"==typeof t)return a.del(e,t.split("."));var n=i(t[0]);return c(e,n)?1!==t.length?a.del(e[n],t.slice(1)):(o(e)?e.splice(n,1):delete e[n],e):e},a}var c=a();return c.create=a,c.withInheritedProps=a({includeInheritedProps:!0}),c}()}));const de=/[|\\{}()[\]^$+*?.-]/g;var ve=e=>{if("string"!=typeof e)throw new TypeError("Expected a string");return e.replace(de,"\\$&")};const be=new Map;function me(e,t){t={caseSensitive:!1,...t};const r=e+JSON.stringify(t);if(be.has(r))return be.get(r);const n="!"===e[0];n&&(e=e.slice(1)),e=ve(e).replace(/\\\*/g,".*");const o=new RegExp(`^${e}$`,t.caseSensitive?"":"i");return o.negated=n,be.set(r,o),o}var _e=(e,t,r)=>{if(!Array.isArray(e)||!Array.isArray(t))throw new TypeError(`Expected two arrays, got ${typeof e} ${typeof t}`);if(0===t.length)return e;const n="!"===t[0][0];t=t.map(e=>me(e,r));const o=[];for(const r of e){let e=n;for(const n of t)n.test(r)&&(e=!n.negated);e&&o.push(r)}return o};function we(e,t,r){return function e(t,r,n,o=!0){const i=Object.prototype.hasOwnProperty;function a(e){return null!=e}function c(e){return"Object"===d(e)}function u(e,t){return t=ye(t),Array.from(e).filter(e=>!t.some(t=>_e.isMatch(e,t,{caseSensitive:!0})))}const s=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(!a(t))throw new Error("check-types-mini: [THROW_ID_01] First argument is missing!");const l={ignoreKeys:[],ignorePaths:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"};let h;if(h=a(n)&&c(n)?Object.assign({},l,n):Object.assign({},l),a(h.ignoreKeys)&&h.ignoreKeys?h.ignoreKeys=ye(h.ignoreKeys):h.ignoreKeys=[],a(h.ignorePaths)&&h.ignorePaths?h.ignorePaths=ye(h.ignorePaths):h.ignorePaths=[],a(h.acceptArraysIgnore)&&h.acceptArraysIgnore?h.acceptArraysIgnore=ye(h.acceptArraysIgnore):h.acceptArraysIgnore=[],h.msg="string"==typeof h.msg?h.msg.trim():h.msg,":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1).trim()),h.schema&&(Object.keys(h.schema).forEach(e=>{if(c(h.schema[e])){const t={};S(h.schema[e],(r,n,o)=>{const i=void 0!==n?n:r;return f(i)||c(i)||(t[`${e}.${o.path}`]=i),i}),delete h.schema[e],h.schema=Object.assign(h.schema,t)}}),Object.keys(h.schema).forEach(e=>{f(h.schema[e])||(h.schema[e]=[h.schema[e]]),h.schema[e]=h.schema[e].map(String).map(e=>e.toLowerCase()).map(e=>e.trim())})),a(r)||(r={}),o&&e(h,l,{enforceStrictKeyset:!1},!1),h.enforceStrictKeyset)if(a(h.schema)&&Object.keys(h.schema).length>0){if(0!==u(j(Object.keys(t),Object.keys(r).concat(Object.keys(h.schema))),h.ignoreKeys).length){const e=j(Object.keys(t),Object.keys(r).concat(Object.keys(h.schema)));throw new TypeError(`${h.msg}: ${h.optsVarName}.enforceStrictKeyset is on and the following key${e.length>1?"s":""} ${e.length>1?"are":"is"} not covered by schema and/or reference objects: ${e.join(", ")}`)}}else{if(!(a(r)&&Object.keys(r).length>0))throw new TypeError(`${h.msg}: Both ${h.optsVarName}.schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!`);if(0!==u(j(Object.keys(t),Object.keys(r)),h.ignoreKeys).length){const e=j(Object.keys(t),Object.keys(r));throw new TypeError(`${h.msg}: The input object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not covered by the reference object: ${e.join(", ")}`)}if(0!==u(j(Object.keys(r),Object.keys(t)),h.ignoreKeys).length){const e=j(Object.keys(r),Object.keys(t));throw new TypeError(`${h.msg}: The reference object has key${e.length>1?"s":""} which ${e.length>1?"are":"is"} not present in the input object: ${e.join(", ")}`)}}const p=[];S(t,(e,n,o)=>{let a=n,u=e;if("array"===o.parentType&&(u=void 0,a=e),f(p)&&p.length&&p.some(e=>o.path.startsWith(e)))return a;if(u&&h.ignoreKeys.some(e=>_e.isMatch(u,e)))return a;if(h.ignorePaths.some(e=>_e.isMatch(o.path,e)))return a;const l=!(!c(a)&&!f(a)&&f(o.parent));let y=!1;c(h.schema)&&i.call(h.schema,ge.get(o.path))&&(y=!0);let g=!1;if(c(r)&&ge.has(r,ge.get(o.path))&&(g=!0),h.enforceStrictKeyset&&l&&!y&&!g)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} is neither covered by reference object (second input argument), nor ${h.optsVarName}.schema! To stop this error, turn off ${h.optsVarName}.enforceStrictKeyset or provide some type reference (2nd argument or ${h.optsVarName}.schema).\n\nDebug info:\n\nobj = ${JSON.stringify(t,null,4)}\n\nref = ${JSON.stringify(r,null,4)}\n\ninnerObj = ${JSON.stringify(o,null,4)}\n\nopts = ${JSON.stringify(h,null,4)}\n\ncurrent = ${JSON.stringify(a,null,4)}\n\n`);if(y){const e=ye(h.schema[o.path]).map(String).map(e=>e.toLowerCase());if(ge.set(h.schema,o.path,e),pe(e,s).length)p.push(o.path);else if(!0!==a&&!1!==a&&!e.includes(d(a).toLowerCase())||(!0===a||!1===a)&&!e.includes(String(a))&&!e.includes("boolean")){if(!f(a)||!h.acceptArrays)throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"!==d(a)?'"':""}${JSON.stringify(a,null,0)}${"string"!==d(a)?'"':""} (type: ${d(a).toLowerCase()}) which is not among the allowed types in schema (which is equal to ${JSON.stringify(e,null,0)})`);for(let t=0,r=a.length;t<r;t++)if(!e.includes(d(a[t]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path}.${t}, the ${t}th element (equal to ${JSON.stringify(a[t],null,0)}) is of a type ${d(a[t]).toLowerCase()}, but only the following are allowed by the ${h.optsVarName}.schema: ${e.join(", ")}`)}}else if(g){const t=ge.get(r,o.path);if(h.acceptArrays&&f(a)&&!h.acceptArraysIgnore.includes(e)){if(!a.every(t=>d(t).toLowerCase()===d(r[e]).toLowerCase()))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to be array, but not all of its elements are ${d(r[e]).toLowerCase()}-type`)}else if(d(a)!==d(t))throw new TypeError(`${h.msg}: ${h.optsVarName}.${o.path} was customised to ${"string"===d(a).toLowerCase()?"":'"'}${JSON.stringify(a,null,0)}${"string"===d(a).toLowerCase()?"":'"'} which is not ${d(t).toLowerCase()} but ${d(a).toLowerCase()}`)}return a})}(e,t,r)}_e.isMatch=(e,t,r)=>{const n=Array.isArray(e)?e:[e],o=Array.isArray(t)?t:[t];return n.some(e=>o.every(t=>{const n=me(t,r),o=n.test(e);return n.negated?!o:o}))};var je=1/0,Oe="[object Symbol]",$e=/^\s+|\s+$/g,Se="[\\ud800-\\udfff]",Te="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",Ae="\\ud83c[\\udffb-\\udfff]",ke="[^\\ud800-\\udfff]",xe="(?:\\ud83c[\\udde6-\\uddff]){2}",Ee="[\\ud800-\\udbff][\\udc00-\\udfff]",We="(?:"+Te+"|"+Ae+")"+"?",Ie="[\\ufe0e\\ufe0f]?"+We+("(?:\\u200d(?:"+[ke,xe,Ee].join("|")+")[\\ufe0e\\ufe0f]?"+We+")*"),Ne="(?:"+[ke+Te+"?",Te,xe,Ee,Se].join("|")+")",Pe=RegExp(Ae+"(?="+Ae+")|"+Ne+Ie,"g"),Me=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0\\ufe0e\\ufe0f]"),De="object"==typeof r&&r&&r.Object===Object&&r,Re="object"==typeof self&&self&&self.Object===Object&&self,He=De||Re||Function("return this")();function Fe(e,t,r){if(t!=t)return function(e,t,r,n){for(var o=e.length,i=r+(n?1:-1);n?i--:++i<o;)if(t(e[i],i,e))return i;return-1}(e,Je,r);for(var n=r-1,o=e.length;++n<o;)if(e[n]===t)return n;return-1}function Je(e){return e!=e}function Ce(e){return function(e){return Me.test(e)}(e)?function(e){return e.match(Pe)||[]}(e):function(e){return e.split("")}(e)}var Le=Object.prototype.toString,Ke=He.Symbol,Ze=Ke?Ke.prototype:void 0,Ve=Ze?Ze.toString:void 0;function qe(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&Le.call(e)==Oe}(e))return Ve?Ve.call(e):"";var t=e+"";return"0"==t&&1/e==-je?"-0":t}function Be(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:function(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),(r=r>o?o:r)<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}(e,t,r)}var Ue=function(e,t,r){var n;if((e=null==(n=e)?"":qe(n))&&(r||void 0===t))return e.replace($e,"");if(!e||!(t=qe(t)))return e;var o=Ce(e),i=Ce(t);return Be(o,function(e,t){for(var r=-1,n=e.length;++r<n&&Fe(t,e[r],0)>-1;);return r}(o,i),function(e,t){for(var r=e.length;r--&&Fe(t,e[r],0)>-1;);return r}(o,i)+1).join("")};function ze(e){function t(e){return"string"==typeof e}const r=Array.isArray;let n=!0;return!!(r(e)||g(e)||t(e))&&(t(e)?0===Ue(e).length:(e=S(e,(e,r)=>{const o=void 0!==r?r:e;return t(o)&&""!==Ue(o)&&(n=!1),o}),n))}const Ge=Array.isArray;function Qe(e){return null!=e}function Xe(e){return"Object"===d(e)}function Ye(e){return"string"===d(e)}function et(e){return Xe(e)||Ye(e)||function(e){return"number"===d(e)}(e)||function(e){return"boolean"===d(e)}(e)||Ge(e)||function(e){return null===e}(e)}function tt(e,t,r){if(void 0===e)throw new TypeError("ast-compare/compare(): [THROW_ID_01] first argument is missing!");if(void 0===t)throw new TypeError("ast-compare/compare(): [THROW_ID_02] second argument is missing!");if(Qe(e)&&!et(e))throw new TypeError(`ast-compare/compare(): [THROW_ID_03] first input argument is of a wrong type, ${d(e)}, equal to: ${JSON.stringify(e,null,4)}`);if(Qe(t)&&!et(t))throw new TypeError(`ast-compare/compare(): [THROW_ID_04] second input argument is of a wrong type, ${d(t)}, equal to: ${JSON.stringify(t,null,4)}`);if(Qe(r)&&!Xe(r))throw new TypeError(`ast-compare/compare(): [THROW_ID_05] third argument, options object, must, well, be an object! Currently it's: ${d(r)} and equal to: ${JSON.stringify(r,null,4)}`);const n=o(t),i=o(e);let a,c,u,s=0;const f=Object.assign({},{hungryForWhitespace:!1,matchStrictly:!1,verboseWhenMismatches:!1,useWildcards:!1},r);if(f.hungryForWhitespace&&f.matchStrictly&&Xe(e)&&ze(e)&&Xe(t)&&0===Object.keys(t).length)return!0;if((!f.hungryForWhitespace||f.hungryForWhitespace&&!ze(e)&&ze(t))&&Xe(e)&&0!==Object.keys(e).length&&Xe(t)&&0===Object.keys(t).length||d(e)!==d(t)&&(!f.hungryForWhitespace||f.hungryForWhitespace&&!ze(e)))return!1;if(Ye(i)&&Ye(n))return!!(f.hungryForWhitespace&&ze(i)&&ze(n))||(f.verboseWhenMismatches?i===n||`Given string ${n} is not matched! We have ${i} on the other end.`:f.useWildcards?_e.isMatch(i,n,{caseSensitive:!0}):i===n);if(Ge(i)&&Ge(n)){if(f.hungryForWhitespace&&ze(n)&&(!f.matchStrictly||f.matchStrictly&&i.length===n.length))return!0;if(!f.hungryForWhitespace&&n.length>i.length||f.matchStrictly&&n.length!==i.length)return!!f.verboseWhenMismatches&&`The length of a given array, ${JSON.stringify(n,null,4)} is ${n.length} but the length of an array on the other end, ${JSON.stringify(i,null,4)} is ${i.length}`;if(0===n.length)return 0===i.length||!!f.verboseWhenMismatches&&`The given array has no elements, but the array on the other end, ${JSON.stringify(i,null,4)} does have some`;for(let e=0,t=n.length;e<t;e++){u=!1;for(let t=s,r=i.length;t<r;t++)if(s+=1,!0===tt(i[t],n[e],f)){u=!0;break}if(!u)return!!f.verboseWhenMismatches&&`The given array ${JSON.stringify(n,null,4)} is not a subset of an array on the other end, ${JSON.stringify(i,null,4)}`}}else{if(!Xe(i)||!Xe(n))return!!(f.hungryForWhitespace&&ze(i)&&ze(n)&&(!f.matchStrictly||f.matchStrictly&&(l=n,Xe(l)?0===Object.keys(l).length:(Ge(l)||Ye(l))&&0===l.length)))||i===n;if(a=Object.keys(n),c=Object.keys(i),f.matchStrictly&&a.length!==c.length){if(!f.verboseWhenMismatches)return!1;const e=j(o(a),o(c)),t=e.length>0?`First object has unique keys: ${JSON.stringify(e,null,4)}.`:"",r=j(o(c),o(a));return`When matching strictly, we found that both objects have different amount of keys. ${t} ${r.length>0?`Second object has unique keys:\n        ${JSON.stringify(r,null,4)}.`:""}`}for(let e=0,t=a.length;e<t;e++){if(!Qe(i[a[e]]))return!f.useWildcards||f.useWildcards&&!a[e].includes("*")?!!f.verboseWhenMismatches&&`The given object has key ${a[e]} which the other-one does not have.`:!!Object.keys(i).some(t=>_e.isMatch(t,a[e],{caseSensitive:!0}))||!!f.verboseWhenMismatches&&`The given object has key ${a[e]} which the other-one does not have.`;if(void 0!==i[a[e]]&&!et(i[a[e]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_07] The input ${JSON.stringify(i,null,4)} contains a value of a wrong type, ${d(i[a[e]])} at index ${e}, equal to: ${JSON.stringify(i[a[e]],null,4)}`);if(!et(n[a[e]]))throw new TypeError(`ast-compare/compare(): [THROW_ID_08] The input ${JSON.stringify(n,null,4)} contains a value of a wrong type, ${d(n[a[e]])} at index ${e}, equal to: ${JSON.stringify(n[a[e]],null,4)}`);if(Qe(i[a[e]])&&d(i[a[e]])!==d(n[a[e]])){if(!(ze(i[a[e]])&&ze(n[a[e]])&&f.hungryForWhitespace))return!!f.verboseWhenMismatches&&`The given key ${a[e]} is of a different type on both objects. On the first-one, it's ${d(n[a[e]])}, on the second-one, it's ${d(i[a[e]])}`}else if(!0!==tt(i[a[e]],n[a[e]],f))return!!f.verboseWhenMismatches&&`The given piece ${JSON.stringify(n[a[e]],null,4)} and ${JSON.stringify(i[a[e]],null,4)} don't match.`}}var l;return!0}function rt(e){return null!=e}function nt(e){return void 0!==e}function ot(e,t){return d(e)===d(t)&&tt(e,t,{matchStrictly:!0,useWildcards:!0})}function it(e,t){if(!rt(e))throw new Error("ast-monkey/main.js/set(): [THROW_ID_12] Please provide the input");if("object"!=typeof(r=t)||null===r)throw new Error("ast-monkey/main.js/set(): [THROW_ID_13] Please provide the input");var r;if(!rt(t.key)&&!nt(t.val))throw new Error("ast-monkey/main.js/set(): [THROW_ID_14] Please provide opts.val");if(!rt(t.index))throw new Error("ast-monkey/main.js/set(): [THROW_ID_15] Please provide opts.index");if("string"==typeof t.index){if(!Number.isInteger(parseFloat(t.index,10),{includeZero:!0}))throw new Error(`ast-monkey/main.js/set(): [THROW_ID_16] opts.index must be a natural number. It was given as: ${t.index}`);t.index=parseInt(t.index,10)}else if(!Number.isInteger(t.index,{includeZero:!0}))throw new Error(`ast-monkey/main.js/set(): [THROW_ID_17] opts.index must be a natural number. It was given as: ${t.index}`);return rt(t.key)&&!nt(t.val)&&(t.val=t.key),we(t,null,{schema:{key:[null,"string"],val:"any",index:"number"},msg:"ast-monkey/set(): [THROW_ID_18*]"}),function(e,t){if(!rt(e))throw new Error("ast-monkey/main.js/monkey(): [THROW_ID_01] Please provide an input");let r=o(e);(t=Object.assign({key:null,val:void 0},t)).mode;const n={count:0,gatherPath:[],finding:null},i=[];let a=!1,c=!1;return rt(t.key)&&!nt(t.val)&&(a=!0),!rt(t.key)&&nt(t.val)&&(c=!0),t.mode,t.mode,"arrayFirstOnly"===t.mode&&Array.isArray(r)&&r.length>0&&(r=[r[0]]),r=S(r,(e,r,u)=>{let s;if(n.count+=1,t.mode,t.mode,t.mode,n.gatherPath.length=u.depth,n.gatherPath.push(n.count),t.mode,"get"===t.mode)n.count===t.index&&(nt(r)?(n.finding={},n.finding[e]=r):n.finding=e);else if("find"===t.mode||"del"===t.mode){if(!("any"===t.only||"array"===t.only&&void 0===r||"object"===t.only&&void 0!==r)||!(a&&ot(e,t.key)||c&&ot(r,t.val)||!a&&!c&&ot(e,t.key)&&ot(r,t.val)))return void 0!==r?r:e;if("find"!==t.mode)return NaN;s={},s.index=n.count,s.key=e,s.val=r,s.path=o(n.gatherPath),i.push(s)}return t.mode,"set"===t.mode&&n.count===t.index?t.val:"drop"===t.mode&&n.count===t.index?NaN:"arrayFirstOnly"===t.mode?nt(r)&&Array.isArray(r)?[r[0]]:rt(e)&&Array.isArray(e)?[e[0]]:void 0!==r?r:e:void 0!==r?r:e}),"get"===t.mode?n.finding:"find"===t.mode?i.length>0?i:null:r}(e,Object.assign({},t,{mode:"set"}))}
/*!
   * is-natural-number.js | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number.js
  */var at=function(e,t){if(t){if("object"!=typeof t)throw new TypeError(String(t)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},ct=function(e,t){if("string"!=typeof e)return!1;if(t&&"includeZero"in t){if("boolean"!=typeof t.includeZero)throw new TypeError(String(t.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(t.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(e)}return/^[1-9]\d*(\.0+)?$/.test(e)};
/*!
   * is-natural-number-string | MIT (c) Shinnosuke Watanabe
   * https://github.com/shinnn/is-natural-number-string
  */function ut(e){return"string"==typeof e}function st(e){throw new Error("string-convert-indexes: [THROW_ID_01*] Missing ".concat(e,"th parameter!"))}function ft(e){return"string"==typeof e?parseInt(e,10):e}function lt(e,r,n,i){if(!ut(r)||0===r.length)throw new TypeError("string-convert-indexes: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: ".concat(t(r),", equal to:\n").concat(r));if(null!=i&&!g(i))throw new TypeError("string-convert-indexes: [THROW_ID_03] the third input argument, Optional Options Object, must be a plain object! Currently it's: ".concat(t(i),", equal to:\n").concat(i));var a=Object.assign({},{throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString:!0},i),c={id:0},u=[];if(at(n,{includeZero:!0})||ct(n,{includeZero:!0})?u=[{id:1,val:n}]:n=S(n,(function(e,t){return c.id+=1,c.val=void 0!==t?t:e,(at(c.val,{includeZero:!0})||ct(c.val,{includeZero:!0}))&&u.push(o(c)),c.val})),0===u.length)return n;u=u.sort((function(e,t){return ft(e.val)<ft(t.val)?-1:ft(e.val)>ft(t.val)?1:0}));for(var s=-1,f=!1,l=0,h=r.length;l<=h;l++){if(void 0===r[l]?s+=1:r[l].charCodeAt(0)>=55296&&r[l].charCodeAt(0)<=57343?!0!==f?(s+=1,f=!0):f=!1:(s+=1,!0===f&&(f=!1)),"n"===e){for(var p=0,y=u.length;p<y;p++)if(ft(u[p].val)===l)u[p].res=ut(u[p].val)?String(s):s;else if(ft(u[p].val)>l)break}else for(var d=0,v=u.length;d<v;d++)if(ft(u[d].val)===s&&void 0===u[d].res)u[d].res=ut(u[d].val)?String(l):l;else if(ft(u[d].val)>s)break;if(a.throwIfAnyOfTheIndexesAreOutsideOfTheReferenceString&&l===h-1&&("n"===e&&ft(u[u.length-1].val)>h||"u"===e&&ft(u[u.length-1].val)>s+1))throw"n"===e?new Error("string-convert-indexes: [THROW_ID_05] the reference string has native JS string indexes going only upto ".concat(l,", but you are trying to convert an index larger than that, ").concat(ft(u[u.length-1].val))):new Error("string-convert-indexes: [THROW_ID_06] the reference string has Unicode character count going only upto ".concat(s,", but you are trying to convert an index larger than that, ").concat(ft(u[u.length-1].val)))}if(at(n,{includeZero:!0})||ct(n,{includeZero:!0}))return void 0!==u[0].res?u[0].res:u[0].val;for(var b=o(n),m=u.length;m--;)b=it(b,{index:u[m].id,val:void 0!==u[m].res?u[m].res:u[m].val});return b}e.nativeToUnicode=function(){return lt("n",arguments.length>0&&void 0!==arguments[0]?arguments[0]:st(1),arguments.length>1&&void 0!==arguments[1]?arguments[1]:st(2),arguments.length>2?arguments[2]:void 0)},e.unicodeToNative=function(){return lt("u",arguments.length>0&&void 0!==arguments[0]?arguments[0]:st(1),arguments.length>1&&void 0!==arguments[1]?arguments[1]:st(2),arguments.length>2?arguments[2]:void 0)},Object.defineProperty(e,"__esModule",{value:!0})}));
