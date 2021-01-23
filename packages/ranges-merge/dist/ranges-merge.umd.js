/**
 * ranges-merge
 * Merge and sort string index ranges
 * Version: 7.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/ranges-merge/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).rangesMerge={})}(this,(function(e){"use strict";function r(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function n(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function t(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(n){r(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}var o={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function s(e,r){if(!Array.isArray(e)||!e.length)return e;var n,s,i=t(t({},o),r);if(i.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(n=r,s=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+n+"th range ("+JSON.stringify(e[n],null,4)+") has not two but "+s+" elements!");if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(n=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+n+"th range ("+JSON.stringify(e[n],null,4)+") does not consist of only natural numbers!");var a=Math.pow(e.filter((function(e){return e})).length,2),u=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return i.progressFn&&i.progressFn(Math.floor(100*(u+=1)/a)),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}var i={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};e.defaults=i,e.rMerge=function(e,r){function n(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var o;if(r){if(!n(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((o=t(t({},i),r)).progressFn&&n(o.progressFn)&&!Object.keys(o.progressFn).length)o.progressFn=null;else if(o.progressFn&&"function"!=typeof o.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof o.progressFn+'", equal to '+JSON.stringify(o.progressFn,null,4));if(o.mergeType&&1!=+o.mergeType&&2!=+o.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof o.mergeType+'", equal to '+JSON.stringify(o.mergeType,null,4));if("boolean"!=typeof o.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof o.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(o.joinRangesThatTouchEdges,null,4))}else o=t({},i);var a,u,g,l=e.filter((function(e){return e})).map((function(e){return[].concat(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]}));if(!(a=o.progressFn?s(l,{progressFn:function(e){(g=Math.floor(e/5))!==u&&(u=g,o.progressFn(g))}}):s(l)))return null;for(var f=a.length-1,p=f;p>0;p--)o.progressFn&&(g=Math.floor(78*(1-p/f))+21)!==u&&g>u&&(u=g,o.progressFn(g)),(a[p][0]<=a[p-1][0]||!o.joinRangesThatTouchEdges&&a[p][0]<a[p-1][1]||o.joinRangesThatTouchEdges&&a[p][0]<=a[p-1][1])&&(a[p-1][0]=Math.min(a[p][0],a[p-1][0]),a[p-1][1]=Math.max(a[p][1],a[p-1][1]),void 0!==a[p][2]&&(a[p-1][0]>=a[p][0]||a[p-1][1]<=a[p][1])&&null!==a[p-1][2]&&(null===a[p][2]&&null!==a[p-1][2]?a[p-1][2]=null:null!=a[p-1][2]?2==+o.mergeType&&a[p-1][0]===a[p][0]?a[p-1][2]=a[p][2]:a[p-1][2]+=a[p][2]:a[p-1][2]=a[p][2]),a.splice(p,1),p=a.length);return a.length?a:null},e.version="7.0.0",Object.defineProperty(e,"__esModule",{value:!0})}));
