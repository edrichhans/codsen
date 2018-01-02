!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.strFindHeadsTails=e()}(this,function(){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},e=function(e,r){if(r){if("object"!==(void 0===r?"undefined":t(r)))throw new TypeError(String(r)+" is not an object. Expected an object that has boolean `includeZero` property.");if("includeZero"in r){if("boolean"!=typeof r.includeZero)throw new TypeError(String(r.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(r.includeZero&&0===e)return!0}}return Number.isSafeInteger(e)&&e>=1},r=function(t,e){if("string"!=typeof t)return!1;if(e&&"includeZero"in e){if("boolean"!=typeof e.includeZero)throw new TypeError(String(e.includeZero)+" is neither true nor false. `includeZero` option must be a Boolean value.");if(e.includeZero)return/^(-?0|[1-9]\d*)(\.0+)?$/.test(t)}return/^[1-9]\d*(\.0+)?$/.test(t)},n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(t,e){return t(e={exports:{}},e.exports),e.exports}var i=o(function(t,e){(e=t.exports=function(t){return t+e.suffix(+t)}).suffix=function(t){return 1===Math.floor(t/10)?"th":t%10==1?"st":t%10==2?"nd":t%10==3?"rd":"th"}}),a=(i.suffix,"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t}),u=o(function(t,e){t.exports=function(){var t="function"==typeof Promise,e="object"===("undefined"==typeof self?"undefined":a(self))?self:n,r="object"===("undefined"==typeof window?"undefined":a(window))&&"document"in window&&"navigator"in window&&"HTMLElement"in window,o="undefined"!=typeof Symbol,i="undefined"!=typeof Map,u="undefined"!=typeof Set,c="undefined"!=typeof WeakMap,f="undefined"!=typeof WeakSet,s="undefined"!=typeof DataView,l=o&&void 0!==Symbol.iterator,h=o&&void 0!==Symbol.toStringTag,y=u&&"function"==typeof Set.prototype.entries,p=i&&"function"==typeof Map.prototype.entries,d=y&&Object.getPrototypeOf((new Set).entries()),g=p&&Object.getPrototypeOf((new Map).entries()),m=l&&"function"==typeof Array.prototype[Symbol.iterator],b=m&&Object.getPrototypeOf([][Symbol.iterator]()),v=l&&"function"==typeof String.prototype[Symbol.iterator],_=v&&Object.getPrototypeOf(""[Symbol.iterator]()),w=8,j=-1;return function(n){var o=void 0===n?"undefined":a(n);if("object"!==o)return o;if(null===n)return"null";if(n===e)return"global";if(Array.isArray(n)&&(!1===h||!(Symbol.toStringTag in n)))return"Array";if(r){if(n===e.location)return"Location";if(n===e.document)return"Document";if(n===(e.navigator||{}).mimeTypes)return"MimeTypeArray";if(n===(e.navigator||{}).plugins)return"PluginArray";if(n instanceof e.HTMLElement&&"BLOCKQUOTE"===n.tagName)return"HTMLQuoteElement";if(n instanceof e.HTMLElement&&"TD"===n.tagName)return"HTMLTableDataCellElement";if(n instanceof e.HTMLElement&&"TH"===n.tagName)return"HTMLTableHeaderCellElement"}var l=h&&n[Symbol.toStringTag];if("string"==typeof l)return l;var y=Object.getPrototypeOf(n);return y===RegExp.prototype?"RegExp":y===Date.prototype?"Date":t&&y===Promise.prototype?"Promise":u&&y===Set.prototype?"Set":i&&y===Map.prototype?"Map":f&&y===WeakSet.prototype?"WeakSet":c&&y===WeakMap.prototype?"WeakMap":s&&y===DataView.prototype?"DataView":i&&y===g?"Map Iterator":u&&y===d?"Set Iterator":m&&y===b?"Array Iterator":v&&y===_?"String Iterator":null===y?"Object":Object.prototype.toString.call(n).slice(w,j)}}()}),c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f=1/0,s=9007199254740991,l=1.7976931348623157e308,h=NaN,y="[object Arguments]",p="[object Function]",d="[object GeneratorFunction]",g="[object String]",m="[object Symbol]",b=/^\s+|\s+$/g,v=/^[-+]0x[0-9a-f]+$/i,_=/^0b[01]+$/i,w=/^0o[0-7]+$/i,j=/^(?:0|[1-9]\d*)$/,O=parseInt;function S(t){return t!=t}function T(t,e){return function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(e,function(e){return t[e]})}var A,E,I=Object.prototype,W=I.hasOwnProperty,C=I.toString,k=I.propertyIsEnumerable,M=(A=Object.keys,E=Object,function(t){return A(E(t))}),x=Math.max;function D(t,e){var r=N(t)||function(t){return e=t,P(e)&&B(e)&&W.call(t,"callee")&&(!k.call(t,"callee")||C.call(t)==y);var e}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],n=r.length,o=!!n;for(var i in t)!e&&!W.call(t,i)||o&&("length"==i||H(i,n))||r.push(i);return r}function R(t){if(!function(t){var e=t&&t.constructor,r="function"==typeof e&&e.prototype||I;return t===r}(t))return M(t);var e=[];for(var r in Object(t))W.call(t,r)&&"constructor"!=r&&e.push(r);return e}function H(t,e){return!!(e=null==e?s:e)&&("number"==typeof t||j.test(t))&&t>-1&&t%1==0&&t<e}var N=Array.isArray;function B(t){return null!=t&&(e=t.length,"number"==typeof e&&e>-1&&e%1==0&&e<=s)&&!function(t){var e=L(t)?C.call(t):"";return e==p||e==d}(t);var e}function L(t){var e=void 0===t?"undefined":c(t);return!!t&&("object"==e||"function"==e)}function P(t){return!!t&&"object"==(void 0===t?"undefined":c(t))}var $=function(t,e,r,n){t=B(t)?t:function(t){return t?T(t,B(e=t)?D(e):R(e)):[];var e}(t),r=r&&!n?function(t){var e=function(t){if(!t)return 0===t?t:0;if((t=function(t){if("number"==typeof t)return t;if("symbol"==(void 0===(e=t)?"undefined":c(e))||P(e)&&C.call(e)==m)return h;var e;if(L(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=L(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(b,"");var n=_.test(t);return n||w.test(t)?O(t.slice(2),n?2:8):v.test(t)?h:+t}(t))===f||t===-f){var e=t<0?-1:1;return e*l}return t==t?t:0}(t),r=e%1;return e==e?r?e-r:e:0}(r):0;var o=t.length;return r<0&&(r=x(o+r,0)),"string"==typeof(i=t)||!N(i)&&P(i)&&C.call(i)==g?r<=o&&t.indexOf(e,r)>-1:!!o&&function(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,S,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}(t,e,r)>-1;var i};function F(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,J,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function V(t,e,r,n){for(var o=r-1,i=t.length;++o<i;)if(n(t[o],e))return o;return-1}function J(t){return t!=t}var q=Array.prototype.splice;function K(t,e,r,n){var o=n?V:F,i=-1,a=e.length,u=t;t===e&&(e=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(e)),r&&(u=function(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}(t,(c=r,function(t){return c(t)})));for(var c;++i<a;)for(var f=0,s=e[i],l=r?r(s):s;(f=o(u,l,f,n))>-1;)u!==t&&q.call(u,f,1),q.call(t,f,1);return t}var Z=function(t,e){return t&&t.length&&e&&e.length?K(t,e):t},U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z="__lodash_hash_undefined__",G=9007199254740991,Q="[object Function]",X="[object GeneratorFunction]",Y=/^\[object .+?Constructor\]$/,tt="object"==U(n)&&n&&n.Object===Object&&n,et="object"==("undefined"==typeof self?"undefined":U(self))&&self&&self.Object===Object&&self,rt=tt||et||Function("return this")();function nt(t,e){return!!(t?t.length:0)&&function(t,e,r){if(e!=e)return function(t,e,r,n){var o=t.length,i=r+(n?1:-1);for(;n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,at,r);var n=r-1,o=t.length;for(;++n<o;)if(t[n]===e)return n;return-1}(t,e,0)>-1}function ot(t,e,r){for(var n=-1,o=t?t.length:0;++n<o;)if(r(e,t[n]))return!0;return!1}function it(t,e){for(var r=-1,n=t?t.length:0,o=Array(n);++r<n;)o[r]=e(t[r],r,t);return o}function at(t){return t!=t}function ut(t){return function(e){return t(e)}}function ct(t,e){return t.has(e)}var ft=Array.prototype,st=Function.prototype,lt=Object.prototype,ht=rt["__core-js_shared__"],yt=function(){var t=/[^.]+$/.exec(ht&&ht.keys&&ht.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),pt=st.toString,dt=lt.hasOwnProperty,gt=lt.toString,mt=RegExp("^"+pt.call(dt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),bt=ft.splice,vt=Math.max,_t=Math.min,wt=kt(rt,"Map"),jt=kt(Object,"create");function Ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Ot.prototype.clear=function(){this.__data__=jt?jt(null):{}},Ot.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},Ot.prototype.get=function(t){var e=this.__data__;if(jt){var r=e[t];return r===z?void 0:r}return dt.call(e,t)?e[t]:void 0},Ot.prototype.has=function(t){var e=this.__data__;return jt?void 0!==e[t]:dt.call(e,t)},Ot.prototype.set=function(t,e){return this.__data__[t]=jt&&void 0===e?z:e,this};function St(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}St.prototype.clear=function(){this.__data__=[]},St.prototype.delete=function(t){var e=this.__data__,r=Et(e,t);return!(r<0||(r==e.length-1?e.pop():bt.call(e,r,1),0))},St.prototype.get=function(t){var e=this.__data__,r=Et(e,t);return r<0?void 0:e[r][1]},St.prototype.has=function(t){return Et(this.__data__,t)>-1},St.prototype.set=function(t,e){var r=this.__data__,n=Et(r,t);return n<0?r.push([t,e]):r[n][1]=e,this};function Tt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Tt.prototype.clear=function(){this.__data__={hash:new Ot,map:new(wt||St),string:new Ot}},Tt.prototype.delete=function(t){return Ct(this,t).delete(t)},Tt.prototype.get=function(t){return Ct(this,t).get(t)},Tt.prototype.has=function(t){return Ct(this,t).has(t)},Tt.prototype.set=function(t,e){return Ct(this,t).set(t,e),this};function At(t){var e=-1,r=t?t.length:0;for(this.__data__=new Tt;++e<r;)this.add(t[e])}At.prototype.add=At.prototype.push=function(t){return this.__data__.set(t,z),this},At.prototype.has=function(t){return this.__data__.has(t)};function Et(t,e){for(var r=t.length;r--;)if((n=t[r][0])===(o=e)||n!=n&&o!=o)return r;var n,o;return-1}function It(t){if(!Rt(t)||(e=t,yt&&yt in e))return!1;var e;return(Dt(t)||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t)?mt:Y).test(function(t){if(null!=t){try{return pt.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function Wt(t){return function(t){return e=t,!!e&&"object"==(void 0===e?"undefined":U(e))&&function(t){return null!=t&&(e=t.length,"number"==typeof e&&e>-1&&e%1==0&&e<=G)&&!Dt(t);var e}(t);var e}(t)?t:[]}function Ct(t,e){var r=t.__data__;return function(t){var e=void 0===t?"undefined":U(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map}function kt(t,e){var r,n,o=(r=t,n=e,null==r?void 0:r[n]);return It(o)?o:void 0}var Mt,xt;function Dt(t){var e=Rt(t)?gt.call(t):"";return e==Q||e==X}function Rt(t){var e=void 0===t?"undefined":U(t);return!!t&&("object"==e||"function"==e)}var Ht=(Mt=function(t){var e=it(t,Wt);return e.length&&e[0]===t[0]?function(t,e,r){for(var n=r?ot:nt,o=t[0].length,i=t.length,a=i,u=Array(i),c=1/0,f=[];a--;){var s=t[a];a&&e&&(s=it(s,ut(e))),c=_t(s.length,c),u[a]=!r&&(e||o>=120&&s.length>=120)?new At(a&&s):void 0}s=t[0];var l=-1,h=u[0];t:for(;++l<o&&f.length<c;){var y=s[l],p=e?e(y):y;if(y=r||0!==y?y:0,!(h?ct(h,p):n(f,p,r))){for(a=i;--a;){var d=u[a];if(!(d?ct(d,p):n(t[a],p,r)))continue t}h&&h.push(p),f.push(y)}}return f}(e):[]},xt=void 0,xt=vt(void 0===xt?Mt.length-1:xt,0),function(){for(var t=arguments,e=-1,r=vt(t.length-xt,0),n=Array(r);++e<r;)n[e]=t[xt+e];e=-1;for(var o=Array(xt+1);++e<xt;)o[e]=t[e];return o[xt]=n,function(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}(Mt,this,o)});function Nt(t){return"string"==typeof t?t.length>0?[t]:[]:t}function Bt(t,e,r){function n(t){return null!=t}function o(t){return"boolean"===u(t)}function i(t){return"string"===u(t)}function a(t){return"Object"===u(t)}var c=["any","anything","every","everything","all","whatever","whatevs"],f=Array.isArray;if(0===arguments.length)throw new Error("check-types-mini/checkTypes(): Missing all arguments!");if(1===arguments.length)throw new Error("check-types-mini/checkTypes(): Missing second argument!");var s=a(e)?e:{},l={ignoreKeys:[],acceptArrays:!1,acceptArraysIgnore:[],enforceStrictKeyset:!0,schema:{},msg:"check-types-mini/checkTypes()",optsVarName:"opts"},h=void 0;if(!i((h=n(r)&&a(r)?Object.assign({},l,r):Object.assign({},l)).msg))throw new Error("check-types-mini/checkTypes(): opts.msg must be string! Currently it's: "+u(h.msg)+", equal to "+JSON.stringify(h.msg,null,4));if(h.msg=h.msg.trim(),":"===h.msg[h.msg.length-1]&&(h.msg=h.msg.slice(0,h.msg.length-1)),!i(h.optsVarName))throw new Error("check-types-mini/checkTypes(): opts.optsVarName must be string! Currently it's: "+u(h.optsVarName)+", equal to "+JSON.stringify(h.optsVarName,null,4));if(h.ignoreKeys=Nt(h.ignoreKeys),h.acceptArraysIgnore=Nt(h.acceptArraysIgnore),!f(h.ignoreKeys))throw new TypeError("check-types-mini/checkTypes(): opts.ignoreKeys should be an array, currently it's: "+u(h.ignoreKeys));if(!o(h.acceptArrays))throw new TypeError("check-types-mini/checkTypes(): opts.acceptArrays should be a Boolean, currently it's: "+u(h.acceptArrays));if(!f(h.acceptArraysIgnore))throw new TypeError("check-types-mini/checkTypes(): opts.acceptArraysIgnore should be an array, currently it's: "+u(h.acceptArraysIgnore));if(!o(h.enforceStrictKeyset))throw new TypeError("check-types-mini/checkTypes(): opts.enforceStrictKeyset should be a Boolean, currently it's: "+u(h.enforceStrictKeyset));if(Object.keys(h.schema).forEach(function(t){f(h.schema[t])||(h.schema[t]=[h.schema[t]]),h.schema[t]=h.schema[t].map(String).map(function(t){return t.toLowerCase()}).map(function(t){return t.trim()})}),h.enforceStrictKeyset)if(n(h.schema)&&Object.keys(h.schema).length>0){if(0!==Z(Object.keys(t),Object.keys(s).concat(Object.keys(h.schema))).length)throw new TypeError(h.msg+": "+h.optsVarName+".enforceStrictKeyset is on and the following keys are not covered by schema and/or reference objects: "+JSON.stringify(Z(Object.keys(t),Object.keys(s).concat(Object.keys(h.schema))),null,4))}else{if(!(n(s)&&Object.keys(s).length>0))throw new TypeError(h.msg+": Both "+h.optsVarName+".schema and reference objects are missing! We don't have anything to match the keys as you requested via opts.enforceStrictKeyset!");if(0!==Z(Object.keys(t),Object.keys(s)).length)throw new TypeError(h.msg+": The input object has keys that are not covered by reference object: "+JSON.stringify(Z(Object.keys(t),Object.keys(s)),null,4));if(0!==Z(Object.keys(s),Object.keys(t)).length)throw new TypeError(h.msg+": The reference object has keys that are not present in the input object: "+JSON.stringify(Z(Object.keys(s),Object.keys(t)),null,4))}Object.keys(t).forEach(function(e){if(n(h.schema)&&Object.prototype.hasOwnProperty.call(h.schema,e)){if(h.schema[e]=Nt(h.schema[e]).map(String).map(function(t){return t.toLowerCase()}),!Ht(h.schema[e],c).length&&!$(h.schema[e],u(t[e]).toLowerCase())){if(!f(t[e])||!h.acceptArrays)throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not among the allowed types in schema ("+h.schema[e]+") but "+u(t[e]));for(var r=0,o=t[e].length;r<o;r++)if(!$(h.schema[e],u(t[e][r]).toLowerCase()))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" is of type "+u(t[e][r]).toLowerCase()+", but only the following are allowed in "+h.optsVarName+".schema: "+h.schema[e])}}else if(n(s)&&Object.prototype.hasOwnProperty.call(s,e)&&u(t[e])!==u(s[e])&&!$(h.ignoreKeys,e)){if(!h.acceptArrays||!f(t[e])||$(h.acceptArraysIgnore,e))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to "+JSON.stringify(t[e],null,4)+" which is not "+u(s[e])+" but "+u(t[e]));if(!t[e].every(function(t){return u(t)===u(s[e])}))throw new TypeError(h.msg+": "+h.optsVarName+"."+e+" was customised to be array, but not all of its elements are "+u(s[e])+"-type")}})}var Lt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pt="[object Object]";var $t,Ft,Vt=Function.prototype,Jt=Object.prototype,qt=Vt.toString,Kt=Jt.hasOwnProperty,Zt=qt.call(Object),Ut=Jt.toString,zt=($t=Object.getPrototypeOf,Ft=Object,function(t){return $t(Ft(t))});var Gt=function(t){if(!(e=t)||"object"!=(void 0===e?"undefined":Lt(e))||Ut.call(t)!=Pt||function(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}(t))return!1;var e,r=zt(t);if(null===r)return!0;var n=Kt.call(r,"constructor")&&r.constructor;return"function"==typeof n&&n instanceof n&&qt.call(n)==Zt},Qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Xt=1/0,Yt="[object Symbol]",te=/^\s+/,ee="\\ud800-\\udfff",re="\\u0300-\\u036f\\ufe20-\\ufe23",ne="\\u20d0-\\u20f0",oe="\\ufe0e\\ufe0f",ie="["+ee+"]",ae="["+re+ne+"]",ue="\\ud83c[\\udffb-\\udfff]",ce="[^"+ee+"]",fe="(?:\\ud83c[\\udde6-\\uddff]){2}",se="[\\ud800-\\udbff][\\udc00-\\udfff]",le="(?:"+ae+"|"+ue+")"+"?",he="["+oe+"]?",ye=he+le+("(?:\\u200d(?:"+[ce,fe,se].join("|")+")"+he+le+")*"),pe="(?:"+[ce+ae+"?",ae,fe,se,ie].join("|")+")",de=RegExp(ue+"(?="+ue+")|"+pe+ye,"g"),ge=RegExp("[\\u200d"+ee+re+ne+oe+"]"),me="object"==Qt(n)&&n&&n.Object===Object&&n,be="object"==("undefined"==typeof self?"undefined":Qt(self))&&self&&self.Object===Object&&self,ve=me||be||Function("return this")();function _e(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,we,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function we(t){return t!=t}function je(t){return e=t,ge.test(e)?t.match(de)||[]:t.split("");var e}var Oe=Object.prototype.toString,Se=ve.Symbol,Te=Se?Se.prototype:void 0,Ae=Te?Te.toString:void 0;function Ee(t){if("string"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":Qt(t))||(e=t,!!e&&"object"==(void 0===e?"undefined":Qt(e))&&Oe.call(t)==Yt);var e}(t))return Ae?Ae.call(t):"";var e=t+"";return"0"==e&&1/t==-Xt?"-0":e}function Ie(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}var We=function(t,e,r){var n;if((t=null==(n=t)?"":Ee(n))&&(r||void 0===e))return t.replace(te,"");if(!t||!(e=Ee(e)))return t;var o=je(t);return Ie(o,function(t,e){for(var r=-1,n=t.length;++r<n&&_e(e,t[r],0)>-1;);return r}(o,je(e))).join("")},Ce="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ke=1/0,Me="[object Symbol]",xe=/\s+$/,De="\\ud800-\\udfff",Re="\\u0300-\\u036f\\ufe20-\\ufe23",He="\\u20d0-\\u20f0",Ne="\\ufe0e\\ufe0f",Be="["+De+"]",Le="["+Re+He+"]",Pe="\\ud83c[\\udffb-\\udfff]",$e="[^"+De+"]",Fe="(?:\\ud83c[\\udde6-\\uddff]){2}",Ve="[\\ud800-\\udbff][\\udc00-\\udfff]",Je="(?:"+Le+"|"+Pe+")"+"?",qe="["+Ne+"]?",Ke=qe+Je+("(?:\\u200d(?:"+[$e,Fe,Ve].join("|")+")"+qe+Je+")*"),Ze="(?:"+[$e+Le+"?",Le,Fe,Ve,Be].join("|")+")",Ue=RegExp(Pe+"(?="+Pe+")|"+Ze+Ke,"g"),ze=RegExp("[\\u200d"+De+Re+He+Ne+"]"),Ge="object"==Ce(n)&&n&&n.Object===Object&&n,Qe="object"==("undefined"==typeof self?"undefined":Ce(self))&&self&&self.Object===Object&&self,Xe=Ge||Qe||Function("return this")();function Ye(t,e,r){if(e!=e)return function(t,e,r,n){for(var o=t.length,i=r+(n?1:-1);n?i--:++i<o;)if(e(t[i],i,t))return i;return-1}(t,tr,r);for(var n=r-1,o=t.length;++n<o;)if(t[n]===e)return n;return-1}function tr(t){return t!=t}function er(t){return e=t,ze.test(e)?t.match(Ue)||[]:t.split("");var e}var rr=Object.prototype.toString,nr=Xe.Symbol,or=nr?nr.prototype:void 0,ir=or?or.toString:void 0;function ar(t){if("string"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":Ce(t))||(e=t,!!e&&"object"==(void 0===e?"undefined":Ce(e))&&rr.call(t)==Me);var e}(t))return ir?ir.call(t):"";var e=t+"";return"0"==e&&1/t==-ke?"-0":e}function ur(t,e,r){var n=t.length;return r=void 0===r?n:r,!e&&r>=n?t:function(t,e,r){var n=-1,o=t.length;e<0&&(e=-e>o?0:o+e),(r=r>o?o:r)<0&&(r+=o),o=e>r?0:r-e>>>0,e>>>=0;for(var i=Array(o);++n<o;)i[n]=t[n+e];return i}(t,e,r)}var cr=function(t,e,r){var n;if((t=null==(n=t)?"":ar(n))&&(r||void 0===e))return t.replace(xe,"");if(!t||!(e=ar(e)))return t;var o=er(t);return ur(o,0,function(t,e){for(var r=t.length;r--&&Ye(e,t[r],0)>-1;);return r}(o,er(e))+1).join("")},fr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},sr=o(function(t,e){var r=200,o="__lodash_hash_undefined__",i=9007199254740991,a="[object Arguments]",u="[object Boolean]",c="[object Date]",f="[object Function]",s="[object GeneratorFunction]",l="[object Map]",h="[object Number]",y="[object Object]",p="[object Promise]",d="[object RegExp]",g="[object Set]",m="[object String]",b="[object Symbol]",v="[object WeakMap]",_="[object ArrayBuffer]",w="[object DataView]",j="[object Float32Array]",O="[object Float64Array]",S="[object Int8Array]",T="[object Int16Array]",A="[object Int32Array]",E="[object Uint8Array]",I="[object Uint8ClampedArray]",W="[object Uint16Array]",C="[object Uint32Array]",k=/\w*$/,M=/^\[object .+?Constructor\]$/,x=/^(?:0|[1-9]\d*)$/,D={};D[a]=D["[object Array]"]=D[_]=D[w]=D[u]=D[c]=D[j]=D[O]=D[S]=D[T]=D[A]=D[l]=D[h]=D[y]=D[d]=D[g]=D[m]=D[b]=D[E]=D[I]=D[W]=D[C]=!0,D["[object Error]"]=D[f]=D[v]=!1;var R="object"==fr(n)&&n&&n.Object===Object&&n,H="object"==("undefined"==typeof self?"undefined":fr(self))&&self&&self.Object===Object&&self,N=R||H||Function("return this")(),B=e&&!e.nodeType&&e,L=B&&t&&!t.nodeType&&t,P=L&&L.exports===B;function $(t,e){return t.set(e[0],e[1]),t}function F(t,e){return t.add(e),t}function V(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function J(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function q(t){var e=-1,r=Array(t.size);return t.forEach(function(t,n){r[++e]=[n,t]}),r}function K(t,e){return function(r){return t(e(r))}}function Z(t){var e=-1,r=Array(t.size);return t.forEach(function(t){r[++e]=t}),r}var U=Array.prototype,z=Function.prototype,G=Object.prototype,Q=N["__core-js_shared__"],X=function(){var t=/[^.]+$/.exec(Q&&Q.keys&&Q.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Y=z.toString,tt=G.hasOwnProperty,et=G.toString,rt=RegExp("^"+Y.call(tt).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),nt=P?N.Buffer:void 0,ot=N.Symbol,it=N.Uint8Array,at=K(Object.getPrototypeOf,Object),ut=Object.create,ct=G.propertyIsEnumerable,ft=U.splice,st=Object.getOwnPropertySymbols,lt=nt?nt.isBuffer:void 0,ht=K(Object.keys,Object),yt=Bt(N,"DataView"),pt=Bt(N,"Map"),dt=Bt(N,"Promise"),gt=Bt(N,"Set"),mt=Bt(N,"WeakMap"),bt=Bt(Object,"create"),vt=Vt(yt),_t=Vt(pt),wt=Vt(dt),jt=Vt(gt),Ot=Vt(mt),St=ot?ot.prototype:void 0,Tt=St?St.valueOf:void 0;function At(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}At.prototype.clear=function(){this.__data__=bt?bt(null):{}},At.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},At.prototype.get=function(t){var e=this.__data__;if(bt){var r=e[t];return r===o?void 0:r}return tt.call(e,t)?e[t]:void 0},At.prototype.has=function(t){var e=this.__data__;return bt?void 0!==e[t]:tt.call(e,t)},At.prototype.set=function(t,e){return this.__data__[t]=bt&&void 0===e?o:e,this};function Et(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}Et.prototype.clear=function(){this.__data__=[]},Et.prototype.delete=function(t){var e=this.__data__,r=Mt(e,t);return!(r<0||(r==e.length-1?e.pop():ft.call(e,r,1),0))},Et.prototype.get=function(t){var e=this.__data__,r=Mt(e,t);return r<0?void 0:e[r][1]},Et.prototype.has=function(t){return Mt(this.__data__,t)>-1},Et.prototype.set=function(t,e){var r=this.__data__,n=Mt(r,t);return n<0?r.push([t,e]):r[n][1]=e,this};function It(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}It.prototype.clear=function(){this.__data__={hash:new At,map:new(pt||Et),string:new At}},It.prototype.delete=function(t){return Nt(this,t).delete(t)},It.prototype.get=function(t){return Nt(this,t).get(t)},It.prototype.has=function(t){return Nt(this,t).has(t)},It.prototype.set=function(t,e){return Nt(this,t).set(t,e),this};function Wt(t){this.__data__=new Et(t)}Wt.prototype.clear=function(){this.__data__=new Et},Wt.prototype.delete=function(t){return this.__data__.delete(t)},Wt.prototype.get=function(t){return this.__data__.get(t)},Wt.prototype.has=function(t){return this.__data__.has(t)},Wt.prototype.set=function(t,e){var n=this.__data__;if(n instanceof Et){var o=n.__data__;if(!pt||o.length<r-1)return o.push([t,e]),this;n=this.__data__=new It(o)}return n.set(t,e),this};function Ct(t,e){var r,n=qt(t)||(r=t,function(t){return!!(e=t)&&"object"==(void 0===e?"undefined":fr(e))&&Kt(t);var e}(r)&&tt.call(r,"callee")&&(!ct.call(r,"callee")||et.call(r)==a))?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=n.length,i=!!o;for(var u in t)!e&&!tt.call(t,u)||i&&("length"==u||$t(u,o))||n.push(u);return n}function kt(t,e,r){var n=t[e];tt.call(t,e)&&Jt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function Mt(t,e){for(var r=t.length;r--;)if(Jt(t[r][0],e))return r;return-1}function xt(t,e,r,n,o,i,p){var v;if(n&&(v=i?n(t,o,i,p):n(t)),void 0!==v)return v;if(!zt(t))return t;var M=qt(t);if(M){if(v=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&tt.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,v)}else{var x=Pt(t),R=x==f||x==s;if(Zt(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if(x==y||x==a||R&&!i){if(J(t))return i?t:{};if(v=function(t){return"function"!=typeof t.constructor||Ft(t)?{}:(e=at(t),zt(e)?ut(e):{});var e}(R?{}:t),!e)return H=t,L=t,N=(B=v)&&Ht(L,Gt(L),B),Ht(H,Lt(H),N)}else{if(!D[x])return i?t:{};v=function(t,e,r,n){var o=t.constructor;switch(e){case _:return Rt(t);case u:case c:return new o(+t);case w:return function(t,e){var r=e?Rt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case j:case O:case S:case T:case A:case E:case I:case W:case C:return function(t,e){var r=e?Rt(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case l:return f=t,V(n?r(q(f),!0):q(f),$,new f.constructor);case h:case m:return new o(t);case d:return function(t){var e=new t.constructor(t.source,k.exec(t));return e.lastIndex=t.lastIndex,e}(t);case g:return a=t,V(n?r(Z(a),!0):Z(a),F,new a.constructor);case b:return i=t,Tt?Object(Tt.call(i)):{}}var i;var a;var f}(t,x,xt,e)}}var H,N,B,L;p||(p=new Wt);var P=p.get(t);if(P)return P;if(p.set(t,v),!M)var K=r?(U=t,function(t,e,r){var n=e(t);return qt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(U,Gt,Lt)):Gt(t);var U;return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(K||t,function(o,i){K&&(o=t[i=o]),kt(v,i,xt(o,e,r,n,i,t,p))}),v}function Dt(t){if(!zt(t)||(e=t,X&&X in e))return!1;var e;return(Ut(t)||J(t)?rt:M).test(Vt(t))}function Rt(t){var e=new t.constructor(t.byteLength);return new it(e).set(new it(t)),e}function Ht(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;kt(r,a,void 0===u?t[a]:u)}return r}function Nt(t,e){var r=t.__data__;return function(t){var e=void 0===t?"undefined":fr(t);return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}(e)?r["string"==typeof e?"string":"hash"]:r.map}function Bt(t,e){var r,n,o=(r=t,n=e,null==r?void 0:r[n]);return Dt(o)?o:void 0}var Lt=st?K(st,Object):function(){return[]},Pt=function(t){return et.call(t)};(yt&&Pt(new yt(new ArrayBuffer(1)))!=w||pt&&Pt(new pt)!=l||dt&&Pt(dt.resolve())!=p||gt&&Pt(new gt)!=g||mt&&Pt(new mt)!=v)&&(Pt=function(t){var e=et.call(t),r=e==y?t.constructor:void 0,n=r?Vt(r):void 0;if(n)switch(n){case vt:return w;case _t:return l;case wt:return p;case jt:return g;case Ot:return v}return e});function $t(t,e){return!!(e=null==e?i:e)&&("number"==typeof t||x.test(t))&&t>-1&&t%1==0&&t<e}function Ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||G)}function Vt(t){if(null!=t){try{return Y.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function Jt(t,e){return t===e||t!=t&&e!=e}var qt=Array.isArray;function Kt(t){return null!=t&&(e=t.length,"number"==typeof e&&e>-1&&e%1==0&&e<=i)&&!Ut(t);var e}var Zt=lt||function(){return!1};function Ut(t){var e=zt(t)?et.call(t):"";return e==f||e==s}function zt(t){var e=void 0===t?"undefined":fr(t);return!!t&&("object"==e||"function"==e)}function Gt(t){return Kt(t)?Ct(t):function(t){if(!Ft(t))return ht(t);var e=[];for(var r in Object(t))tt.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}t.exports=function(t){return xt(t,!0,!0)}}),lr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},hr="function"==typeof Symbol&&"symbol"===lr(Symbol.iterator)?function(t){return void 0===t?"undefined":lr(t)}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":void 0===t?"undefined":lr(t)};function yr(t){return"string"==typeof t}function pr(t,r,n,o){return function(t,r,n,o,i){function a(t){return null!=t}var u=Array.isArray;if(!yr(r))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_01] the first argument should be a string. Currently it's of a type: "+(void 0===r?"undefined":hr(r))+", equal to:\n"+JSON.stringify(r,null,4));if(0===r.length)throw new Error("string-match-left-right/"+t+"(): [THROW_ID_02] the first argument should be a non-empty string. Currently it's empty!");if(!e(n,{includeZero:!0}))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_03] the second argument should be a natural number. Currently it's of a type: "+(void 0===n?"undefined":hr(n))+", equal to:\n"+JSON.stringify(n,null,4));var c=void 0;if(!a(o))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_04] Third argument, whatToMatch, is missing!");if(yr(o))c=[o];else{if(!u(o))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_05] the third argument, whatToMatch, is neither string nor array of strings! It's "+(void 0===o?"undefined":hr(o))+", equal to:\n"+JSON.stringify(o,null,4));c=sr(o)}if(a(i)&&!Gt(i))throw new Error("string-match-left-right/"+t+"(): [THROW_ID_06] the fourth argument, options object, should be a plain object. Currently it's of a type \""+(void 0===i?"undefined":hr(i))+'", and equal to:\n'+JSON.stringify(i,null,4));var f={i:!1,trimBeforeMatching:!1,trimCharsBeforeMatching:[]},s=Object.assign({},f,i);s.trimCharsBeforeMatching=Nt(s.trimCharsBeforeMatching),Bt(s,f,{msg:"string-match-left-right: [THROW_ID_07*]",schema:{cb:["null","undefined","function"]}}),s.trimCharsBeforeMatching=s.trimCharsBeforeMatching.map(function(t){return yr(t)?t:String(t)});var l=void 0;switch(t){case"matchLeftIncl":return!!c.some(function(t){var e=void 0;return e=s.trimCharsBeforeMatching.length||s.trimBeforeMatching?cr(r.slice(0,n+1),s.trimCharsBeforeMatching.length?s.trimCharsBeforeMatching.join(""):" \n\t\r"):r.slice(0,n+1),s.i?!(!e.toLowerCase().endsWith(t.toLowerCase())||s.cb&&!s.cb(e[e.length-1-t.length],e.slice(0,n-t.length+1))||(l=t,0)):!(!e.endsWith(t)||s.cb&&!s.cb(e[e.length-1-t.length],e.slice(0,n-t.length+1))||(l=t,0))})&&l;case"matchLeft":return!!c.some(function(t){var e=void 0;return e=s.trimCharsBeforeMatching.length||s.trimBeforeMatching?cr(r.slice(0,n),s.trimCharsBeforeMatching.length?s.trimCharsBeforeMatching.join(""):" \n\t\r"):r.slice(0,n),s.i?!(!e.toLowerCase().endsWith(t.toLowerCase())||s.cb&&!s.cb(e[e.length-1-t.length],r.slice(0,n-t.length))||(l=t,0)):!(!e.endsWith(t)||s.cb&&!s.cb(e[e.length-1-t.length],r.slice(0,n-t.length))||(l=t,0))})&&l;case"matchRightIncl":return!!c.some(function(t){var e=void 0;return e=s.trimCharsBeforeMatching.length||s.trimBeforeMatching?We(r.slice(n),s.trimCharsBeforeMatching.length?s.trimCharsBeforeMatching.join(""):" \n\t\r"):r.slice(n),s.i?!(!e.toLowerCase().startsWith(t.toLowerCase())||s.cb&&!s.cb(e[t.length],e.slice(t.length))||(l=t,0)):!(!e.startsWith(t)||s.cb&&!s.cb(e[t.length],e.slice(t.length))||(l=t,0))})&&l;case"matchRight":return!!c.some(function(t){var e=void 0;return e=s.trimCharsBeforeMatching.length||s.trimBeforeMatching?We(r.slice(n+1),s.trimCharsBeforeMatching.length?s.trimCharsBeforeMatching.join(""):" \n\t\r"):r.slice(n+1),s.i?!(!e.toLowerCase().startsWith(t.toLowerCase())||s.cb&&!s.cb(e[t.length],e.slice(t.length))||(l=t,0)):!(!e.startsWith(t)||s.cb&&!s.cb(e[t.length],e.slice(t.length))||(l=t,0))})&&l}}("matchRightIncl",t,r,n,o)}var dr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function gr(t){return"string"==typeof t}var mr=Array.isArray;function br(t){throw new Error("string-find-heads-tails: [THROW_ID_01*] Missing "+i(t)+" parameter!")}return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:br(1),n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:br(2),o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:br(3),a=arguments[3];if(!gr(t)||0===t.length)throw new TypeError("string-find-heads-tails: [THROW_ID_02] the first input argument, input string, must be a non-zero-length string! Currently it's: "+(void 0===t?"undefined":dr(t))+", equal to: "+t);var u=void 0,c=void 0;if(!gr(n)&&!mr(n))throw new TypeError("string-find-heads-tails: [THROW_ID_03] the second input argument, heads, must be either a string or an array of strings! Currently it's: "+(void 0===n?"undefined":dr(n))+", equal to:\n"+JSON.stringify(n,null,4));if(gr(n)){if(0===n.length)throw new TypeError("string-find-heads-tails: [THROW_ID_04] the second input argument, heads, must be a non-empty string! Currently it's empty.");n=Nt(n)}else if(mr(n)){if(0===n.length)throw new TypeError("string-find-heads-tails: [THROW_ID_05] the second input argument, heads, must be a non-empty array and contain at least one string! Currently it's empty.");if(!n.every(function(t,e){return u=t,c=e,gr(t)}))throw new TypeError("string-find-heads-tails: [THROW_ID_06] the second input argument, heads, contains non-string elements! For example, element at "+i(c)+" index is "+(void 0===u?"undefined":dr(u))+", equal to:\n"+JSON.stringify(u,null,4));if(!n.every(function(t,e){return c=e,gr(t)&&t.length>0&&""!==t.trim()}))throw new TypeError("string-find-heads-tails: [THROW_ID_07] the second input argument, heads, should not contain empty strings! For example, there's one detected at index "+c+".")}if(!gr(o)&&!mr(o))throw new TypeError("string-find-heads-tails: [THROW_ID_08] the third input argument, tails, must be either a string or an array of strings! Currently it's: "+(void 0===o?"undefined":dr(o))+", equal to:\n"+JSON.stringify(o,null,4));if(gr(o)){if(0===o.length)throw new TypeError("string-find-heads-tails: [THROW_ID_09] the third input argument, tails, must be a non-empty string! Currently it's empty.");o=Nt(o)}else if(mr(o)){if(0===o.length)throw new TypeError("string-find-heads-tails: [THROW_ID_10] the third input argument, tails, must be a non-empty array and contain at least one string! Currently it's empty.");if(!o.every(function(t,e){return u=t,c=e,gr(t)}))throw new TypeError("string-find-heads-tails: [THROW_ID_11] the third input argument, tails, contains non-string elements! For example, element at "+i(c)+" index is "+(void 0===u?"undefined":dr(u))+", equal to:\n"+JSON.stringify(u,null,4));if(!o.every(function(t,e){return c=e,gr(t)&&t.length>0&&""!==t.trim()}))throw new TypeError("string-find-heads-tails: [THROW_ID_12] the third input argument, tails, should not contain empty strings! For example, there's one detected at index "+c+".")}if(null!=a){if(!Gt(a))throw new TypeError("string-find-heads-tails: [THROW_ID_13] the fourth input argument, Optional Options Object, must be a plain object! Currently it's: "+(void 0===a?"undefined":dr(a))+", equal to: "+a);r(a.fromIndex,{includeZero:!0})&&(a.fromIndex=Number(a.fromIndex))}var f={fromIndex:0,throwWhenSomethingWrongIsDetected:!0,allowWholeValueToBeOnlyHeadsOrTails:!0,source:"string-find-heads-tails"};Bt(a=Object.assign({},f,a),f,{msg:"string-find-heads-tails: [THROW_ID_14*]"});var s=a.source===f.source;if(a.throwWhenSomethingWrongIsDetected&&!a.allowWholeValueToBeOnlyHeadsOrTails){if($(Nt(n),t))throw new Error(a.source+(s?": [THROW_ID_16]":"")+" the whole input string can't be equal to "+(gr(n)?"":"one of ")+"heads ("+t+")!");if($(Nt(o),t))throw new Error(a.source+(s?": [THROW_ID_17]":"")+" the whole input string can't be equal to "+(gr(o)?"":"one of ")+"tails ("+t+")!")}if(!e(a.fromIndex,{includeZero:!0})&&!r(a.fromIndex,{includeZero:!0}))throw new TypeError(a.source+(s?": [THROW_ID_18]":"")+" the fourth input argument must be a natural number! Currently it's: "+a.fromIndex);for(var l=n.concat(o).map(function(t){return t.charAt(0)}).reduce(function(t,e){return e.charCodeAt(0)>t[1]?[t[0],e.charCodeAt(0)]:e.charCodeAt(0)<t[0]?[e.charCodeAt(0),t[1]]:t},[n[0].charCodeAt(0),n[0].charCodeAt(0)]),h=[],y=!1,p={},d=!1,g=a.fromIndex,m=t.length;g<m;g++){var b=t[g].charCodeAt(0);if(b<=l[1]&&b>=l[0]){var v=pr(t,g,n);if(v){if(!y){(p={}).headsStartAt=g,p.headsEndAt=g+v.length,y=!0,g+=v.length-1,d&&(d=!1);continue}if(a.throwWhenSomethingWrongIsDetected)throw new TypeError(a.source+(s?": [THROW_ID_19]":"")+' When processing "'+t+'", we found heads ('+t.slice(g,g+v.length)+") but there were no tails preceding it! Instead there was another set of heads before it! That's very naughty!")}var _=pr(t,g,o);if(_){if(y){p.tailsStartAt=g,p.tailsEndAt=g+_.length,h.push(p),p={},y=!1,g+=_.length-1;continue}a.throwWhenSomethingWrongIsDetected&&(d=a.source+(s?": [THROW_ID_20]":"")+' When processing "'+t+'", we found tails ('+t.slice(g,g+_.length)+") but there were no heads preceding it. That's very naughty!")}}if(a.throwWhenSomethingWrongIsDetected&&g===m-1){if(0!==Object.keys(p).length)throw new TypeError(a.source+(s?": [THROW_ID_21]":"")+' When processing "'+t+"\", we reached the end of the string and yet didn't find any tails ("+JSON.stringify(o,null,4)+") to match the last detected heads ("+t.slice(p.headsStartAt,p.headsEndAt)+")!");if(d)throw new Error(d)}}return h}});
