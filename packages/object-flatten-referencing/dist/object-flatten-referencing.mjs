/**
 * object-flatten-referencing
 * Flatten complex nested objects according to a reference objects
 * Version: 5.0.9
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-flatten-referencing/
 */

import e from"lodash.clonedeep";import{strIndexesOfPlus as r}from"str-indexes-of-plus";import t from"matcher";import n from"lodash.isplainobject";const i={wrapHeadsWith:"%%_",wrapTailsWith:"_%%",dontWrapKeys:[],dontWrapPaths:[],xhtml:!0,preventDoubleWrapping:!0,preventWrappingIfContains:[],objectKeyAndValueJoinChar:".",wrapGlobalFlipSwitch:!0,ignore:[],whatToDoWhenReferenceIsMissing:0,mergeArraysWithLineBreaks:!0,mergeWithoutTrailingBrIfLineContainsBr:!0,enforceStrictKeyset:!0};function o(e){return"string"==typeof e}function a(r,t){const s={...i,...t};if(0===arguments.length||0===Object.keys(r).length)return[];const h=e(r);let l=[];return n(h)&&Object.keys(h).forEach((e=>{n(h[e])&&(h[e]=a(h[e],s)),Array.isArray(h[e])&&(l=l.concat(h[e].map((r=>e+s.objectKeyAndValueJoinChar+r)))),o(h[e])&&l.push(e+s.objectKeyAndValueJoinChar+h[e])})),l}function s(r,t,n=!1,a=!1){const s={...i,...t};if(0===arguments.length||0===r.length)return"";const h=e(r);let l="";if(h.length>0)if(a){for(let e=0,r=h.length;e<r;e++)if(o(h[e])){let r;r="",s.mergeArraysWithLineBreaks&&e>0&&(!s.mergeWithoutTrailingBrIfLineContainsBr||"string"!=typeof h[e-1]||s.mergeWithoutTrailingBrIfLineContainsBr&&void 0!==h[e-1]&&!h[e-1].toLowerCase().includes("<br"))&&(r=`<br${s.xhtml?" /":""}>`),l+=r+(n?s.wrapHeadsWith:"")+h[e]+(n?s.wrapTailsWith:"")}else if(Array.isArray(h[e])&&h[e].length>0&&h[e].every(o)){let r="";s.mergeArraysWithLineBreaks&&l.length>0&&(r=`<br${s.xhtml?" /":""}>`),l=h[e].reduce(((e,t,i,o)=>{let a="";return i!==o.length-1&&(a=" "),e+(0===i?r:"")+(n?s.wrapHeadsWith:"")+t+(n?s.wrapTailsWith:"")+a}),l)}}else l=h.reduce(((e,r,t,i)=>{let o="";s.mergeArraysWithLineBreaks&&t>0&&(o=`<br${s.xhtml?" /":""}>`);let a="";return t!==i.length-1&&(a=" "),e+(0===t?o:"")+(n?s.wrapHeadsWith:"")+r+(n?s.wrapTailsWith:"")+a}),l);return l}function h(e){return o(e)?e.length>0?[e]:[]:e}const l="5.0.9";function p(e){return null!=e}function f(e){return"string"==typeof e}function c(o,l,c){if(0===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_01] all inputs missing!");if(1===arguments.length)throw new Error("object-flatten-referencing/ofr(): [THROW_ID_02] reference object missing!");if(p(c)&&!n(c))throw new Error("object-flatten-referencing/ofr(): [THROW_ID_03] third input, options object must be a plain object. Currently it's: "+typeof c);const g={...i,...c};function W(i,o,h,l=!0,c=!0,g=""){let w=e(i);const y=e(o);return h.wrapGlobalFlipSwitch||(l=!1),n(w)?Object.keys(w).forEach((e=>{const r=g+(0===g.length?e:`.${e}`);if(0===h.ignore.length||!h.ignore.includes(e))if(h.wrapGlobalFlipSwitch&&(l=!0,h.dontWrapKeys.length>0&&(l=l&&!h.dontWrapKeys.some((r=>t.isMatch(e,r,{caseSensitive:!0})))),h.dontWrapPaths.length>0&&(l=l&&!h.dontWrapPaths.some((e=>e===r))),h.preventWrappingIfContains.length>0&&"string"==typeof w[e]&&(l=l&&!h.preventWrappingIfContains.some((r=>w[e].includes(r))))),p(y[e])||!p(y[e])&&2===h.whatToDoWhenReferenceIsMissing)if(Array.isArray(w[e]))if(2===h.whatToDoWhenReferenceIsMissing||f(y[e]))w[e]=s(w[e],h,l,c);else{if(w[e].every((e=>"string"==typeof e||Array.isArray(e)))){let r=!0;w[e].forEach((e=>{Array.isArray(e)&&!e.every(f)&&(r=!1)})),r&&(c=!1)}w[e]=W(w[e],y[e],h,l,c,r)}else n(w[e])?w[e]=2===h.whatToDoWhenReferenceIsMissing||f(y[e])?s(a(w[e],h),h,l,c):W(w[e],y[e],l?h:{...h,wrapGlobalFlipSwitch:!1},l,c,r):f(w[e])&&(w[e]=W(w[e],y[e],h,l,c,r));else if(typeof w[e]!=typeof y[e]&&1===h.whatToDoWhenReferenceIsMissing)throw new Error(`object-flatten-referencing/ofr(): [THROW_ID_06] reference object does not have the key ${e} and we need it. TIP: Turn off throwing via opts.whatToDoWhenReferenceIsMissing.`)})):Array.isArray(w)?Array.isArray(y)?w.forEach(((e,r)=>{w[r]=p(w[r])&&p(y[r])?W(w[r],y[r],h,l,c,`${g}[${r}]`):W(w[r],y[0],h,l,c,`${g}[${r}]`)})):f(y)&&(w=s(w,h,l,c)):f(w)&&w.length>0&&(h.wrapHeadsWith||h.wrapTailsWith)&&(h.preventDoubleWrapping&&(""!==h.wrapHeadsWith&&r(w,h.wrapHeadsWith.trim()).length||""!==h.wrapTailsWith&&r(w,h.wrapTailsWith.trim()).length)||(w=(l?h.wrapHeadsWith:"")+w+(l?h.wrapTailsWith:""))),w}return g.dontWrapKeys=h(g.dontWrapKeys),g.preventWrappingIfContains=h(g.preventWrappingIfContains),g.dontWrapPaths=h(g.dontWrapPaths),g.ignore=h(g.ignore),"number"!=typeof g.whatToDoWhenReferenceIsMissing&&(g.whatToDoWhenReferenceIsMissing=+g.whatToDoWhenReferenceIsMissing||0),W(o,l,g)}export{h as arrayiffyString,i as defaults,s as flattenArr,a as flattenObject,c as flattenReferencing,l as version};
