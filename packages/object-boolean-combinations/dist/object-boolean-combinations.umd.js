!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):t.objectBooleanCombinations=r()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e="__lodash_hash_undefined__",n=9007199254740991,o="[object Function]",u="[object GeneratorFunction]",c=/^\[object .+?Constructor\]$/,a="object"==r(t)&&t&&t.Object===Object&&t,i="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,f=a||i||Function("return this")();function s(t,r){return!!(t?t.length:0)&&function(t,r,e){if(r!=r)return function(t,r,e,n){var o=t.length,u=e+(n?1:-1);for(;n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,h,e);var n=e-1,o=t.length;for(;++n<o;)if(t[n]===r)return n;return-1}(t,r,0)>-1}function l(t,r,e){for(var n=-1,o=t?t.length:0;++n<o;)if(e(r,t[n]))return!0;return!1}function p(t,r){for(var e=-1,n=t?t.length:0,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}function h(t){return t!=t}function y(t){return function(r){return t(r)}}function _(t,r){return t.has(r)}var v,d,b,g=Array.prototype,j=Function.prototype,m=Object.prototype,w=f["__core-js_shared__"],O=(v=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+v:"",S=j.toString,A=m.hasOwnProperty,x=m.toString,E=RegExp("^"+S.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$=g.splice,k=Math.max,I=Math.min,P=H(f,"Map"),F=H(Object,"create");function R(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function M(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function T(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function D(t){var r=-1,e=t?t.length:0;for(this.__data__=new T;++r<e;)this.add(t[r])}function B(t,r){for(var e,n,o=t.length;o--;)if((e=t[o][0])===(n=r)||e!=e&&n!=n)return o;return-1}function W(t){return!(!G(t)||O&&O in t)&&(z(t)||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t)?E:c).test(function(t){if(null!=t){try{return S.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function U(t){return(c=e=t)&&"object"==(void 0===c?"undefined":r(c))&&(null!=(o=e)&&("number"==typeof(u=o.length)&&u>-1&&u%1==0&&u<=n)&&!z(o))?t:[];var e,o,u,c}function C(t,e){var n,o,u=t.__data__;return("string"==(o=void 0===(n=e)?"undefined":r(n))||"number"==o||"symbol"==o||"boolean"==o?"__proto__"!==n:null===n)?u["string"==typeof e?"string":"hash"]:u.map}function H(t,r){var e,n=null==(e=t)?void 0:e[r];return W(n)?n:void 0}function z(t){var r=G(t)?x.call(t):"";return r==o||r==u}function G(t){var e=void 0===t?"undefined":r(t);return!!t&&("object"==e||"function"==e)}R.prototype.clear=function(){this.__data__=F?F(null):{}},R.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},R.prototype.get=function(t){var r=this.__data__;if(F){var n=r[t];return n===e?void 0:n}return A.call(r,t)?r[t]:void 0},R.prototype.has=function(t){var r=this.__data__;return F?void 0!==r[t]:A.call(r,t)},R.prototype.set=function(t,r){return this.__data__[t]=F&&void 0===r?e:r,this},M.prototype.clear=function(){this.__data__=[]},M.prototype.delete=function(t){var r=this.__data__,e=B(r,t);return!(e<0||(e==r.length-1?r.pop():$.call(r,e,1),0))},M.prototype.get=function(t){var r=this.__data__,e=B(r,t);return e<0?void 0:r[e][1]},M.prototype.has=function(t){return B(this.__data__,t)>-1},M.prototype.set=function(t,r){var e=this.__data__,n=B(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},T.prototype.clear=function(){this.__data__={hash:new R,map:new(P||M),string:new R}},T.prototype.delete=function(t){return C(this,t).delete(t)},T.prototype.get=function(t){return C(this,t).get(t)},T.prototype.has=function(t){return C(this,t).has(t)},T.prototype.set=function(t,r){return C(this,t).set(t,r),this},D.prototype.add=D.prototype.push=function(t){return this.__data__.set(t,e),this},D.prototype.has=function(t){return this.__data__.has(t)};var L=(d=function(t){var r=p(t,U);return r.length&&r[0]===t[0]?function(t,r,e){for(var n=e?l:s,o=t[0].length,u=t.length,c=u,a=Array(u),i=1/0,f=[];c--;){var h=t[c];c&&r&&(h=p(h,y(r))),i=I(h.length,i),a[c]=!e&&(r||o>=120&&h.length>=120)?new D(c&&h):void 0}h=t[0];var v=-1,d=a[0];t:for(;++v<o&&f.length<i;){var b=h[v],g=r?r(b):b;if(b=e||0!==b?b:0,!(d?_(d,g):n(f,g,e))){for(c=u;--c;){var j=a[c];if(!(j?_(j,g):n(t[c],g,e)))continue t}d&&d.push(g),f.push(b)}}return f}(r):[]},b=k(void 0===b?d.length-1:b,0),function(){for(var t=arguments,r=-1,e=k(t.length-b,0),n=Array(e);++r<e;)n[r]=t[b+r];r=-1;for(var o=Array(b+1);++r<b;)o[r]=t[r];return o[b]=n,function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}(d,this,o)});function V(t,r,e){if(r!=r)return function(t,r,e,n){for(var o=t.length,u=e+(n?1:-1);n?u--:++u<o;)if(r(t[u],u,t))return u;return-1}(t,q,e);for(var n=e-1,o=t.length;++n<o;)if(t[n]===r)return n;return-1}function N(t,r,e,n){for(var o=e-1,u=t.length;++o<u;)if(n(t[o],r))return o;return-1}function q(t){return t!=t}var J,K,Q=Array.prototype.splice,X=Math.max;function Y(t,r,e,n){var o,u=n?N:V,c=-1,a=r.length,i=t;for(t===r&&(r=function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(r)),e&&(i=function(t,r){for(var e=-1,n=t?t.length:0,o=Array(n);++e<n;)o[e]=r(t[e],e,t);return o}(t,(o=e,function(t){return o(t)})));++c<a;)for(var f=0,s=r[c],l=e?e(s):s;(f=u(i,l,f,n))>-1;)i!==t&&Q.call(i,f,1),Q.call(t,f,1);return t}var Z=(J=function(t,r){return t&&t.length&&r&&r.length?Y(t,r):t},K=X(void 0===K?J.length-1:K,0),function(){for(var t=arguments,r=-1,e=X(t.length-K,0),n=Array(e);++r<e;)n[r]=t[K+r];r=-1;for(var o=Array(K+1);++r<K;)o[r]=t[r];return o[K]=n,function(t,r,e){switch(e.length){case 0:return t.call(r);case 1:return t.call(r,e[0]);case 2:return t.call(r,e[0],e[1]);case 3:return t.call(r,e[0],e[1],e[2])}return t.apply(r,e)}(J,this,o)}),tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},rt="[object Object]";var et,nt,ot=Function.prototype,ut=Object.prototype,ct=ot.toString,at=ut.hasOwnProperty,it=ct.call(Object),ft=ut.toString,st=(et=Object.getPrototypeOf,nt=Object,function(t){return et(nt(t))});var lt,pt=function(t){if(!(r=t)||"object"!=(void 0===r?"undefined":tt(r))||ft.call(t)!=rt||function(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}(t))return!1;var r,e=st(t);if(null===e)return!0;var n=at.call(e,"constructor")&&e.constructor;return"function"==typeof n&&n instanceof n&&ct.call(n)==it},ht="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},yt=(function(r,e){var n=200,o="__lodash_hash_undefined__",u=9007199254740991,c="[object Arguments]",a="[object Boolean]",i="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",p="[object Number]",h="[object Object]",y="[object Promise]",_="[object RegExp]",v="[object Set]",d="[object String]",b="[object Symbol]",g="[object WeakMap]",j="[object ArrayBuffer]",m="[object DataView]",w="[object Float32Array]",O="[object Float64Array]",S="[object Int8Array]",A="[object Int16Array]",x="[object Int32Array]",E="[object Uint8Array]",$="[object Uint8ClampedArray]",k="[object Uint16Array]",I="[object Uint32Array]",P=/\w*$/,F=/^\[object .+?Constructor\]$/,R=/^(?:0|[1-9]\d*)$/,M={};M[c]=M["[object Array]"]=M[j]=M[m]=M[a]=M[i]=M[w]=M[O]=M[S]=M[A]=M[x]=M[l]=M[p]=M[h]=M[_]=M[v]=M[d]=M[b]=M[E]=M[$]=M[k]=M[I]=!0,M["[object Error]"]=M[f]=M[g]=!1;var T="object"==ht(t)&&t&&t.Object===Object&&t,D="object"==("undefined"==typeof self?"undefined":ht(self))&&self&&self.Object===Object&&self,B=T||D||Function("return this")(),W=e&&!e.nodeType&&e,U=W&&r&&!r.nodeType&&r,C=U&&U.exports===W;function H(t,r){return t.set(r[0],r[1]),t}function z(t,r){return t.add(r),t}function G(t,r,e,n){var o=-1,u=t?t.length:0;for(n&&u&&(e=t[++o]);++o<u;)e=r(e,t[o],o,t);return e}function L(t){var r=!1;if(null!=t&&"function"!=typeof t.toString)try{r=!!(t+"")}catch(t){}return r}function V(t){var r=-1,e=Array(t.size);return t.forEach(function(t,n){e[++r]=[n,t]}),e}function N(t,r){return function(e){return t(r(e))}}function q(t){var r=-1,e=Array(t.size);return t.forEach(function(t){e[++r]=t}),e}var J,K=Array.prototype,Q=Function.prototype,X=Object.prototype,Y=B["__core-js_shared__"],Z=(J=/[^.]+$/.exec(Y&&Y.keys&&Y.keys.IE_PROTO||""))?"Symbol(src)_1."+J:"",tt=Q.toString,rt=X.hasOwnProperty,et=X.toString,nt=RegExp("^"+tt.call(rt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ot=C?B.Buffer:void 0,ut=B.Symbol,ct=B.Uint8Array,at=N(Object.getPrototypeOf,Object),it=Object.create,ft=X.propertyIsEnumerable,st=K.splice,lt=Object.getOwnPropertySymbols,pt=ot?ot.isBuffer:void 0,yt=N(Object.keys,Object),_t=Ct(B,"DataView"),vt=Ct(B,"Map"),dt=Ct(B,"Promise"),bt=Ct(B,"Set"),gt=Ct(B,"WeakMap"),jt=Ct(Object,"create"),mt=Vt(_t),wt=Vt(vt),Ot=Vt(dt),St=Vt(bt),At=Vt(gt),xt=ut?ut.prototype:void 0,Et=xt?xt.valueOf:void 0;function $t(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function kt(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function It(t){var r=-1,e=t?t.length:0;for(this.clear();++r<e;){var n=t[r];this.set(n[0],n[1])}}function Pt(t){this.__data__=new kt(t)}function Ft(t,r){var e,n,o,u=qt(t)||(o=n=e=t)&&"object"==(void 0===o?"undefined":ht(o))&&Jt(n)&&rt.call(e,"callee")&&(!ft.call(e,"callee")||et.call(e)==c)?function(t,r){for(var e=-1,n=Array(t);++e<t;)n[e]=r(e);return n}(t.length,String):[],a=u.length,i=!!a;for(var f in t)!r&&!rt.call(t,f)||i&&("length"==f||Gt(f,a))||u.push(f);return u}function Rt(t,r,e){var n=t[r];rt.call(t,r)&&Nt(n,e)&&(void 0!==e||r in t)||(t[r]=e)}function Mt(t,r){for(var e=t.length;e--;)if(Nt(t[e][0],r))return e;return-1}function Tt(t,r,e,n,o,u,y){var g;if(n&&(g=u?n(t,o,u,y):n(t)),void 0!==g)return g;if(!Xt(t))return t;var F,R,T,D,B,W,U=qt(t);if(U){if(g=function(t){var r=t.length,e=t.constructor(r);r&&"string"==typeof t[0]&&rt.call(t,"index")&&(e.index=t.index,e.input=t.input);return e}(t),!r)return function(t,r){var e=-1,n=t.length;r||(r=Array(n));for(;++e<n;)r[e]=t[e];return r}(t,g)}else{var C=zt(t),N=C==f||C==s;if(Kt(t))return function(t,r){if(r)return t.slice();var e=new t.constructor(t.length);return t.copy(e),e}(t,r);if(C==h||C==c||N&&!u){if(L(t))return u?t:{};if(g="function"!=typeof(B=N?{}:t).constructor||Lt(B)?{}:Xt(W=at(B))?it(W):{},!r)return F=t,D=t,R=(T=g)&&Wt(D,Yt(D),T),Wt(F,Ht(F),R)}else{if(!M[C])return u?t:{};g=function(t,r,e,n){var o=t.constructor;switch(r){case j:return Bt(t);case a:case i:return new o(+t);case m:return F=t,R=n?Bt(F.buffer):F.buffer,new F.constructor(R,F.byteOffset,F.byteLength);case w:case O:case S:case A:case x:case E:case $:case k:case I:return y=t,g=n?Bt(y.buffer):y.buffer,new y.constructor(g,y.byteOffset,y.length);case l:return h=t,G(n?e(V(h),!0):V(h),H,new h.constructor);case p:case d:return new o(t);case _:return(s=new(f=t).constructor(f.source,P.exec(f))).lastIndex=f.lastIndex,s;case v:return c=t,G(n?e(q(c),!0):q(c),z,new c.constructor);case b:return u=t,Et?Object(Et.call(u)):{}}var u;var c;var f,s;var h;var y,g;var F,R}(t,C,Tt,r)}}y||(y=new Pt);var J,K,Q,X=y.get(t);if(X)return X;if(y.set(t,g),!U)var Y=e?(K=Ht,Q=Yt(J=t),qt(J)?Q:function(t,r){for(var e=-1,n=r.length,o=t.length;++e<n;)t[o+e]=r[e];return t}(Q,K(J))):Yt(t);return function(t,r){for(var e=-1,n=t?t.length:0;++e<n&&!1!==r(t[e],e,t););}(Y||t,function(o,u){Y&&(o=t[u=o]),Rt(g,u,Tt(o,r,e,n,u,t,y))}),g}function Dt(t){return!(!Xt(t)||Z&&Z in t)&&(Qt(t)||L(t)?nt:F).test(Vt(t))}function Bt(t){var r=new t.constructor(t.byteLength);return new ct(r).set(new ct(t)),r}function Wt(t,r,e,n){e||(e={});for(var o=-1,u=r.length;++o<u;){var c=r[o],a=n?n(e[c],t[c],c,e,t):void 0;Rt(e,c,void 0===a?t[c]:a)}return e}function Ut(t,r){var e,n,o=t.__data__;return("string"==(n=void 0===(e=r)?"undefined":ht(e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==e:null===e)?o["string"==typeof r?"string":"hash"]:o.map}function Ct(t,r){var e,n=null==(e=t)?void 0:e[r];return Dt(n)?n:void 0}$t.prototype.clear=function(){this.__data__=jt?jt(null):{}},$t.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},$t.prototype.get=function(t){var r=this.__data__;if(jt){var e=r[t];return e===o?void 0:e}return rt.call(r,t)?r[t]:void 0},$t.prototype.has=function(t){var r=this.__data__;return jt?void 0!==r[t]:rt.call(r,t)},$t.prototype.set=function(t,r){return this.__data__[t]=jt&&void 0===r?o:r,this},kt.prototype.clear=function(){this.__data__=[]},kt.prototype.delete=function(t){var r=this.__data__,e=Mt(r,t);return!(e<0||(e==r.length-1?r.pop():st.call(r,e,1),0))},kt.prototype.get=function(t){var r=this.__data__,e=Mt(r,t);return e<0?void 0:r[e][1]},kt.prototype.has=function(t){return Mt(this.__data__,t)>-1},kt.prototype.set=function(t,r){var e=this.__data__,n=Mt(e,t);return n<0?e.push([t,r]):e[n][1]=r,this},It.prototype.clear=function(){this.__data__={hash:new $t,map:new(vt||kt),string:new $t}},It.prototype.delete=function(t){return Ut(this,t).delete(t)},It.prototype.get=function(t){return Ut(this,t).get(t)},It.prototype.has=function(t){return Ut(this,t).has(t)},It.prototype.set=function(t,r){return Ut(this,t).set(t,r),this},Pt.prototype.clear=function(){this.__data__=new kt},Pt.prototype.delete=function(t){return this.__data__.delete(t)},Pt.prototype.get=function(t){return this.__data__.get(t)},Pt.prototype.has=function(t){return this.__data__.has(t)},Pt.prototype.set=function(t,r){var e=this.__data__;if(e instanceof kt){var o=e.__data__;if(!vt||o.length<n-1)return o.push([t,r]),this;e=this.__data__=new It(o)}return e.set(t,r),this};var Ht=lt?N(lt,Object):function(){return[]},zt=function(t){return et.call(t)};function Gt(t,r){return!!(r=null==r?u:r)&&("number"==typeof t||R.test(t))&&t>-1&&t%1==0&&t<r}function Lt(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||X)}function Vt(t){if(null!=t){try{return tt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Nt(t,r){return t===r||t!=t&&r!=r}(_t&&zt(new _t(new ArrayBuffer(1)))!=m||vt&&zt(new vt)!=l||dt&&zt(dt.resolve())!=y||bt&&zt(new bt)!=v||gt&&zt(new gt)!=g)&&(zt=function(t){var r=et.call(t),e=r==h?t.constructor:void 0,n=e?Vt(e):void 0;if(n)switch(n){case mt:return m;case wt:return l;case Ot:return y;case St:return v;case At:return g}return r});var qt=Array.isArray;function Jt(t){return null!=t&&("number"==typeof(r=t.length)&&r>-1&&r%1==0&&r<=u)&&!Qt(t);var r}var Kt=pt||function(){return!1};function Qt(t){var r=Xt(t)?et.call(t):"";return r==f||r==s}function Xt(t){var r=void 0===t?"undefined":ht(t);return!!t&&("object"==r||"function"==r)}function Yt(t){return Jt(t)?Ft(t):function(t){if(!Lt(t))return yt(t);var r=[];for(var e in Object(t))rt.call(t,e)&&"constructor"!=e&&r.push(e);return r}(t)}r.exports=function(t){return Tt(t,!0,!0)}}(lt={exports:{}},lt.exports),lt.exports);return function(t,r){function e(t){return null!=t}if(!e(t))throw new Error("[THROW_ID_01] missing input object");if(!pt(t))throw new Error("[THROW_ID_02] the first input object must be a true object");if(e(r)&&!pt(r))throw new Error("[THROW_ID_03] the second override object must be a true object");var n=yt(t),o=yt(r),u=Object.keys(n),c=[],a=void 0;e(o)&&pt(o)&&Object.keys(o).forEach(function(t){if(0!==o[t]&&1!==o[t]&&!0!==o[t]&&!1!==o[t])throw new Error("[THROW_ID_04] override object's values must contain only true/valse or 0/1")});var i=!1;e(o)&&0!==Object.keys(o).length&&(i=!0),i&&(a=L(Object.keys(o),Object.keys(n))).forEach(function(t){return Z(u,t)});var f=function(t){for(var r=[],e=0;e<1<<t;e++){for(var n=[],o=0;o<t;o++)n.push(e&1<<o?1:0);r.push(n)}return r}(Object.keys(u).length),s={};return f.forEach(function(t,r){s={},u.forEach(function(t,e){s[t]=1===f[r][e]?1:0}),c.push(s)}),i&&c.forEach(function(t){return a.forEach(function(r){t[r]=o[r]})}),c}});
