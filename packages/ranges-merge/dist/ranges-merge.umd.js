/**
 * @name ranges-merge
 * @fileoverview Merge and sort string index ranges
 * @version 8.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-merge/}
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesMerge={})}(this,(function(e){"use strict";
/**
 * @name ranges-sort
 * @fileoverview Sort string index ranges
 * @version 5.0.3
 * @author Roy Revelt, Codsen Ltd
 * @license MIT
 * {@link https://codsen.com/os/ranges-sort/}
 */const r={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function n(e,n){if(!Array.isArray(e)||!e.length)return e;const t={...r,...n};let s,o;if(t.strictlyTwoElementsInRangeArrays&&!e.filter((e=>e)).every(((e,r)=>2===e.length||(s=r,o=e.length,!1))))throw new TypeError(`ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) has not two but ${o} elements!`);if(!e.filter((e=>e)).every(((e,r)=>!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(s=r,!1))))throw new TypeError(`ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, ${s}th range (${JSON.stringify(e[s],null,4)}) does not consist of only natural numbers!`);const i=e.filter((e=>e)).length**2;let g=0;return Array.from(e).filter((e=>e)).sort(((e,r)=>(t.progressFn&&(g+=1,t.progressFn(Math.floor(100*g/i))),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1)))}const t={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};e.defaults=t,e.rMerge=function(e,r){function s(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;let o;if(r){if(!s(r))throw new Error(`emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n${JSON.stringify(r,null,4)} (type ${typeof r})`);if(o={...t,...r},o.progressFn&&s(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error(`ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "${typeof o.progressFn}", equal to ${JSON.stringify(o.progressFn,null,4)}`);if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error(`ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "${typeof o.mergeType}", equal to ${JSON.stringify(o.mergeType,null,4)}`);if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error(`ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "${typeof o.joinRangesThatTouchEdges}", equal to ${JSON.stringify(o.joinRangesThatTouchEdges,null,4)}`)}else o={...t};const i=e.filter((e=>e)).map((e=>[...e])).filter((e=>void 0!==e[2]||e[0]!==e[1]));let g,a,l;if(g=o.progressFn?n(i,{progressFn:e=>{l=Math.floor(e/5),l!==a&&(a=l,o.progressFn(l))}}):n(i),!g)return null;const u=g.length-1;for(let e=u;e>0;e--)o.progressFn&&(l=Math.floor(78*(1-e/u))+21,l!==a&&l>a&&(a=l,o.progressFn(l))),(g[e][0]<=g[e-1][0]||!o.joinRangesThatTouchEdges&&g[e][0]<g[e-1][1]||o.joinRangesThatTouchEdges&&g[e][0]<=g[e-1][1])&&(g[e-1][0]=Math.min(g[e][0],g[e-1][0]),g[e-1][1]=Math.max(g[e][1],g[e-1][1]),void 0!==g[e][2]&&(g[e-1][0]>=g[e][0]||g[e-1][1]<=g[e][1])&&null!==g[e-1][2]&&(null===g[e][2]&&null!==g[e-1][2]?g[e-1][2]=null:null!=g[e-1][2]?2==+o.mergeType&&g[e-1][0]===g[e][0]?g[e-1][2]=g[e][2]:g[e-1][2]+=g[e][2]:g[e-1][2]=g[e][2]),g.splice(e,1),e=g.length);return g.length?g:null},e.version="8.0.3",Object.defineProperty(e,"__esModule",{value:!0})}));
