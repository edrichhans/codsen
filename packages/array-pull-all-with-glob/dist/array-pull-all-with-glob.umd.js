!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.arrayPullAllWithGlob=e()}(this,function(){"use strict";var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var r=/[|\\{}()[\]^$+*?.]/g,n=function(t){if("string"!=typeof t)throw new TypeError("Expected a string");return t.replace(r,"\\$&")},o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=e(function(t){var e=new Map;function r(t,r,o){var i=Object.assign({caseSensitive:!1},o),a=t+r+JSON.stringify(i);if(e.has(a))return e.get(a);var c="!"===t[0];c&&(t=t.slice(1)),t=n(t).replace(/\\\*/g,".*"),c&&r&&(t="(?!"+t+")");var s=new RegExp("^"+t+"$",i.caseSensitive?"":"i");return s.negated=c,e.set(a,s),s}t.exports=function(t,e,n){if(!Array.isArray(t)||!Array.isArray(e))throw new TypeError("Expected two arrays, got "+(void 0===t?"undefined":o(t))+" "+(void 0===e?"undefined":o(e)));if(0===e.length)return t;var i="!"===e[0][0];e=e.map(function(t){return r(t,!1,n)});var a=[],c=!0,s=!1,u=void 0;try{for(var f,l=t[Symbol.iterator]();!(c=(f=l.next()).done);c=!0){var y=f.value,p=i,h=!0,g=!1,m=void 0;try{for(var d,b=e[Symbol.iterator]();!(h=(d=b.next()).done);h=!0){var w=d.value;w.test(y)&&(p=!w.negated)}}catch(t){g=!0,m=t}finally{try{!h&&b.return&&b.return()}finally{if(g)throw m}}p&&a.push(y)}}catch(t){s=!0,u=t}finally{try{!c&&l.return&&l.return()}finally{if(s)throw u}}return a},t.exports.isMatch=function(t,e,n){return r(e,!0,n).test(t)}}),a=(i.isMatch,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}),c=e(function(e,r){var n,o,i,c,s,u,f,l,y,p,h,g,m,d,b,w,v,_,O,S;e.exports=(n="function"==typeof Promise,o="object"===("undefined"==typeof self?"undefined":a(self))?self:t,i="undefined"!=typeof Symbol,c="undefined"!=typeof Map,s="undefined"!=typeof Set,u="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,l="undefined"!=typeof DataView,y=i&&void 0!==Symbol.iterator,p=i&&void 0!==Symbol.toStringTag,h=s&&"function"==typeof Set.prototype.entries,g=c&&"function"==typeof Map.prototype.entries,m=h&&Object.getPrototypeOf((new Set).entries()),d=g&&Object.getPrototypeOf((new Map).entries()),b=y&&"function"==typeof Array.prototype[Symbol.iterator],w=b&&Object.getPrototypeOf([][Symbol.iterator]()),v=y&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),O=8,S=-1,function(t){var e=void 0===t?"undefined":a(t);if("object"!==e)return e;if(null===t)return"null";if(t===o)return"global";if(Array.isArray(t)&&(!1===p||!(Symbol.toStringTag in t)))return"Array";if("object"===("undefined"==typeof window?"undefined":a(window))&&null!==window){if("object"===a(window.location)&&t===window.location)return"Location";if("object"===a(window.document)&&t===window.document)return"Document";if("object"===a(window.navigator)){if("object"===a(window.navigator.mimeTypes)&&t===window.navigator.mimeTypes)return"MimeTypeArray";if("object"===a(window.navigator.plugins)&&t===window.navigator.plugins)return"PluginArray"}if(("function"==typeof window.HTMLElement||"object"===a(window.HTMLElement))&&t instanceof window.HTMLElement){if("BLOCKQUOTE"===t.tagName)return"HTMLQuoteElement";if("TD"===t.tagName)return"HTMLTableDataCellElement";if("TH"===t.tagName)return"HTMLTableHeaderCellElement"}}var r=p&&t[Symbol.toStringTag];if("string"==typeof r)return r;var i=Object.getPrototypeOf(t);return i===RegExp.prototype?"RegExp":i===Date.prototype?"Date":n&&i===Promise.prototype?"Promise":s&&i===Set.prototype?"Set":c&&i===Map.prototype?"Map":f&&i===WeakSet.prototype?"WeakSet":u&&i===WeakMap.prototype?"WeakMap":l&&i===DataView.prototype?"DataView":c&&i===d?"Map Iterator":s&&i===m?"Set Iterator":b&&i===w?"Array Iterator":v&&i===_?"String Iterator":null===i?"Object":Object.prototype.toString.call(t).slice(O,S)})});function s(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,f,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function u(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function f(t){return t!=t}var l=Array.prototype.splice;function y(t,e,r,n){var o,i=n?u:s,a=-1,c=e.length,f=t;for(t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(f=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(o=r,function(t){return o(t)})));++a<c;)for(var y=0,p=e[a],h=r?r(p):p;(y=i(f,h,y,n))>-1;)f!==t&&l.call(f,y,1),l.call(t,y,1);return t}var p=function(t,e){return t&&t.length&&e&&e.length?y(t,e):t},h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},g="__lodash_hash_undefined__",m=9007199254740991,d="[object Function]",b="[object GeneratorFunction]",w=/^\[object .+?Constructor\]$/,v="object"==h(t)&&t&&t.Object===Object&&t,_="object"==("undefined"==typeof self?"undefined":h(self))&&self&&self.Object===Object&&self,O=v||_||Function("return this")();function S(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,E,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function j(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function T(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function E(t){return t!=t}function A(t){return function(e){return t(e)}}function k(t,e){return t.has(e)}var I,N,M,D=Array.prototype,H=Function.prototype,W=Object.prototype,R=O["__core-js_shared__"],x=(I=/[^.]+$/.exec(R&&R.keys&&R.keys.IE_PROTO||""))?"Symbol(src)_1."+I:"",P=H.toString,V=W.hasOwnProperty,K=W.toString,L=RegExp("^"+P.call(V).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),C=D.splice,J=Math.max,$=Math.min,F=tt(O,"Map"),q=tt(Object,"create");function B(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function G(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function Q(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function U(t){var e=-1,r=t?t.length:0;for(this.__data__=new Q;++e<r;)this.add(t[e])}function z(t,e){for(var r,n,o=t.length;o--;)if((r=t[o][0])===(n=e)||r!=r&&n!=n)return o;return-1}function X(t){return!(!rt(t)||x&&x in t)&&(et(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?L:w).test(function(t){if(null!=t){try{return P.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function Y(t){return function(t){return function(t){return!!t&&"object"==(void 0===t?"undefined":h(t))}(t)&&function(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=m}(t.length)&&!et(t)}(t)}(t)?t:[]}function Z(t,e){var r,n,o=t.__data__;return("string"==(n=void 0===(r=e)?"undefined":h(r))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function tt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return X(r)?r:void 0}function et(t){var e=rt(t)?K.call(t):"";return e==d||e==b}function rt(t){var e=void 0===t?"undefined":h(t);return!!t&&("object"==e||"function"==e)}B.prototype.clear=function(){this.__data__=q?q(null):{}},B.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},B.prototype.get=function(t){var e=this.__data__;if(q){var r=e[t];return r===g?void 0:r}return V.call(e,t)?e[t]:void 0},B.prototype.has=function(t){var e=this.__data__;return q?void 0!==e[t]:V.call(e,t)},B.prototype.set=function(t,e){return this.__data__[t]=q&&void 0===e?g:e,this},G.prototype.clear=function(){this.__data__=[]},G.prototype.delete=function(t){var e=this.__data__,r=z(e,t);return!(r<0||(r==e.length-1?e.pop():C.call(e,r,1),0))},G.prototype.get=function(t){var e=this.__data__,r=z(e,t);return r<0?void 0:e[r][1]},G.prototype.has=function(t){return z(this.__data__,t)>-1},G.prototype.set=function(t,e){var r=this.__data__,n=z(r,t);return n<0?r.push([t,e]):r[n][1]=e,this},Q.prototype.clear=function(){this.__data__={hash:new B,map:new(F||G),string:new B}},Q.prototype.delete=function(t){return Z(this,t).delete(t)},Q.prototype.get=function(t){return Z(this,t).get(t)},Q.prototype.has=function(t){return Z(this,t).has(t)},Q.prototype.set=function(t,e){return Z(this,t).set(t,e),this},U.prototype.add=U.prototype.push=function(t){return this.__data__.set(t,g),this},U.prototype.has=function(t){return this.__data__.has(t)};var nt=(N=function(t){var e=T(t,Y);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?j:S,o=t[0].length,i=t.length,a=i,c=Array(i),s=1/0,u=[];a--;){var f=t[a];a&&e&&(f=T(f,A(e))),s=$(f.length,s),c[a]=!r&&(e||o>=120&&f.length>=120)?new U(a&&f):void 0}f=t[0];var l=-1,y=c[0];t:for(;++l<o&&u.length<s;){var p=f[l],h=e?e(p):p;if(p=r||0!==p?p:0,!(y?k(y,h):n(u,h,r))){for(a=i;--a;){var g=c[a];if(!(g?k(g,h):n(t[a],h,r)))continue t}y&&y.push(h),u.push(p)}}return u}(e):[]},M=J(void 0===M?N.length-1:M,0),function(){for(var t=arguments,e=-1,r=J(t.length-M,0),n=Array(r);++e<r;)n[e]=t[M+e];e=-1;for(var o=Array(M+1);++e<M;)o[e]=t[e];return o[M]=n,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(N,this,o)});function ot(t){return"string"==typeof t?t.length>0?[t]:[]:t}var it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},at="[object Object]";var ct=Function.prototype,st=Object.prototype,ut=ct.toString,ft=st.hasOwnProperty,lt=ut.call(Object),yt=st.toString,pt=function(t,e){return function(r){return t(e(r))}}(Object.getPrototypeOf,Object);var ht=function(t){if(!function(t){return!!t&&"object"==(void 0===t?"undefined":it(t))}(t)||yt.call(t)!=at||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e=pt(t);if(null===e)return!0;var r=ft.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&ut.call(r)==lt},gt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},mt=Array.isArray;return function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};function n(t){return null!=t}function o(t){return"string"==typeof t}if(!n(t))throw new Error("array-pull-all-with-glob: [THROW_ID_01] first argument is missing!");if(!n(e))throw new Error("array-pull-all-with-glob: [THROW_ID_02] second argument is missing!");if(!mt(t))throw new Error("array-pull-all-with-glob: [THROW_ID_03] first argument must be an array! Currently it's "+(void 0===t?"undefined":gt(t))+", equal to: "+JSON.stringify(t,null,4));if(!mt(e))throw new Error("array-pull-all-with-glob: [THROW_ID_04] first argument must be an array! Currently it's "+(void 0===e?"undefined":gt(e))+", equal to: "+JSON.stringify(e,null,4));if(0===t.length||0===e.length)return t;if(!t.every(function(t){return o(t)}))throw new Error("array-pull-all-with-glob: [THROW_ID_05] first argument array contains non-string elements: "+JSON.stringify(t,null,4));if(!e.every(function(t){return o(t)}))throw new Error("array-pull-all-with-glob: [THROW_ID_06] first argument array contains non-string elements: "+JSON.stringify(e,null,4));if(n(r)&&!ht(r))throw new Error("array-pull-all-with-glob: [THROW_ID_07] third argument, options object is not a plain object but "+(Array.isArray(r)?"array":void 0===r?"undefined":gt(r)));var a=void 0,s={caseSensitive:!0};return function(t,e,r){function n(t){return null!=t}function o(t){return"boolean"===c(t)}function i(t){return"string"===c(t)}function a(t){return"Object"===c(t)}var s=["any","anything","every","everything","all","whatever","whatevs"],u=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini: [THROW_ID_01] Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini: [THROW_ID_02] Missing second argument!");var f=a(e)?e:{},l={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini",optsVarName:"opts"},y=void 0;if(!i((y=n(r)&&a(r)?Object.assign({},l,r):Object.assign({},l)).msg))throw new Error("check-types-mini: [THROW_ID_03] opts.msg must be string! Currently it's: "+c(y.msg)+", equal to "+JSON.stringify(y.msg,null,4));if(y.msg=y.msg.trim(),":"===y.msg[y.msg.length-1]&&(y.msg=y.msg.slice(0,y.msg.length-1)),!i(y.optsVarName))throw new Error("check-types-mini: [THROW_ID_04] opts.optsVarName must be string! Currently it's: "+c(y.optsVarName)+", equal to "+JSON.stringify(y.optsVarName,null,4));if(y.ignoreKeys=ot(y.ignoreKeys),y.acceptArraysIgnore=ot(y.acceptArraysIgnore),!u(y.ignoreKeys))throw new TypeError("check-types-mini: [THROW_ID_05] opts.ignoreKeys should be an array, currently it's: "+c(y.ignoreKeys));if(!o(y.acceptArrays))throw new TypeError("check-types-mini: [THROW_ID_06] opts.acceptArrays should be a Boolean, currently it's: "+c(y.acceptArrays));if(!u(y.acceptArraysIgnore))throw new TypeError("check-types-mini: [THROW_ID_07] opts.acceptArraysIgnore should be an array, currently it's: "+c(y.acceptArraysIgnore));if(!o(y.enforceStrictKeyset))throw new TypeError("check-types-mini: [THROW_ID_08] opts.enforceStrictKeyset should be a Boolean, currently it's: "+c(y.enforceStrictKeyset));if(Object.keys(y.schema).forEach(function(t){u(y.schema[t])||(y.schema[t]=[y.schema[t]]),y.schema[t]=y.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),y.enforceStrictKeyset)if(n(y.schema)&&Object.keys(y.schema).length>0){if(0!==p(Object.keys(t),Object.keys(f).concat(Object.keys(y.schema))).length)throw new TypeError(y.msg+": "+y.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(p(Object.keys(t),Object.keys(f).concat(Object.keys(y.schema))),null,4))}else{if(!(n(f)&&Object.keys(f).length>0))throw new TypeError(y.msg+": Both "+y.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==p(Object.keys(t),Object.keys(f)).length)throw new TypeError(y.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(p(Object.keys(t),Object.keys(f)),null,4));if(0!==p(Object.keys(f),Object.keys(t)).length)throw new TypeError(y.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(p(Object.keys(f),Object.keys(t)),null,4))}Object.keys(t).forEach(function(e){if(n(y.schema)&&Object.prototype.hasOwnProperty.call(y.schema,e)){if(y.schema[e]=ot(y.schema[e]).map(String).map(function(t){return t.toLowerCase()}),!(nt(y.schema[e],s).length||(!0===t[e]||!1===t[e]||y.schema[e].includes(c(t[e]).toLowerCase()))&&(!0!==t[e]&&!1!==t[e]||y.schema[e].includes(String(t[e]))||y.schema[e].includes("boolean")))){if(!u(t[e])||!y.acceptArrays)throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not among the allowed types in schema ("+y.schema[e]+") but "+c(t[e]));for(var r=0,o=t[e].length;r<o;r++)if(!y.schema[e].includes(c(t[e][r]).toLowerCase()))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" is of type "+c(t[e][r]).toLowerCase()+", but only the following are allowed in "+y.optsVarName+".schema: "+y.schema[e])}}else if(n(f)&&Object.prototype.hasOwnProperty.call(f,e)&&c(t[e])!==c(f[e])&&!y.ignoreKeys.includes(e)){if(!y.acceptArrays||!u(t[e])||y.acceptArraysIgnore.includes(e))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not "+c(f[e])+" but "+c(t[e]));if(!t[e].every(function(t){return c(t)===c(f[e])}))throw new TypeError(y.msg+": "+y.optsVarName+"."+e+" was customised to be array, but not all of its elements are "+c(f[e])+"-type")}})}(a=null===r?Object.assign({},s):Object.assign({},s,r),s,{msg:"newLibrary/yourFunction(): [THROW_ID_08]",optsVarName:"opts"}),Array.from(t).filter(function(t){return!e.some(function(e){return i.isMatch(t,e,{caseSensitive:a.caseSensitive})})})}});
