/**
 * object-fill-missing-keys
 * Add missing keys into plain objects, according to a reference object
 * Version: 8.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/object-fill-missing-keys/
 */

import e from"lodash.clonedeep";import{mergeAdvanced as t}from"object-merge-advanced";import{arrayiffy as l}from"arrayiffy-if-string";import{allEq as r}from"object-all-values-equal-to";import o from"lodash.isplainobject";const i="8.0.8",n={placeholder:!1,doNotFillThesePathsIfTheyContainPlaceholders:[],useNullAsExplicitFalse:!0};function s(e){return o(e)?"plain object":Array.isArray(e)?"array":typeof e}function a(e){return"string"==typeof e}function h(e){return null!=e}function c(l,i,n,s=""){const a=e(l);if(h(a)||!(s.length&&n.doNotFillThesePathsIfTheyContainPlaceholders.includes(s)&&r(a,n.placeholder)))if(o(i)&&o(a))Object.keys(i).forEach((e=>{const t=`${s?`${s}.`:""}${e}`;n.doNotFillThesePathsIfTheyContainPlaceholders.includes(t)&&(h(a[e])?r(a[e],n.placeholder)&&(a[e]=n.placeholder):a[e]=n.placeholder),h(a[e])&&n.doNotFillThesePathsIfTheyContainPlaceholders.includes(t)&&r(a[e],n.placeholder)||(a[e]=c(a[e],i[e],n,t))}));else{if(!Array.isArray(i)||!Array.isArray(a))return t(i,a,{useNullAsExplicitFalse:n.useNullAsExplicitFalse});if(0===a.length)return i;if(i.length>0)for(let e=a.length;e--;){const t=(s?`${s}.`:"")+"0";(o(i[0])||Array.isArray(i[0]))&&(a[e]=c(a[e],i[0],n,t))}}return a}function u(t,r,i){if(0===arguments.length)throw new Error("object-fill-missing-keys: [THROW_ID_01] All arguments are missing!");if(!o(t))throw new Error(`object-fill-missing-keys: [THROW_ID_02] First argument, input object must be a plain object. Currently it's type is "${s(t)}" and it's equal to: ${JSON.stringify(t,null,4)}`);if(!o(r))throw new Error(`object-fill-missing-keys: [THROW_ID_03] Second argument, schema object, must be a plain object. Currently it's type is "${s(r)}" and it's equal to: ${JSON.stringify(r,null,4)}`);if(i&&!o(i))throw new Error(`object-fill-missing-keys: [THROW_ID_04] Third argument, schema object, must be a plain object. Currently it's type is "${s(i)}" and it's equal to: ${JSON.stringify(i,null,4)}`);const h={...n,...i||{}};h.doNotFillThesePathsIfTheyContainPlaceholders=l(h.doNotFillThesePathsIfTheyContainPlaceholders);let u=null,f=null;if(h.doNotFillThesePathsIfTheyContainPlaceholders.length>0&&!h.doNotFillThesePathsIfTheyContainPlaceholders.every(((e,t)=>!!a(e)||(u=e,f=t,!1))))throw new Error(`object-fill-missing-keys: [THROW_ID_06] opts.doNotFillThesePathsIfTheyContainPlaceholders element with an index number "${f}" is not a string! It's ${s(u)}, equal to:\n${JSON.stringify(u,null,4)}`);return c(e(t),e(r),h)}export{u as fillMissing,i as version};
