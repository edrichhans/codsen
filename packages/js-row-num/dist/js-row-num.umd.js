/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 4.0.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/js-row-num/
 */

!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((r="undefined"!=typeof globalThis?globalThis:r||self).jsRowNum={})}(this,(function(r){"use strict";function e(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}function t(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),t.push.apply(t,n)}return t}function n(r){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){e(r,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(i,e))}))}return r}function i(r,e){void 0===e&&(e=1);function t(r){return Array.from(r).reverse().join("")}function n(r,e,t){var n=t?"\n":"\r",i=t?"\r":"\n";if(!r)return r;for(var s=0,o="",a=0,u=r.length;a<u;a++)(r[a]===n||r[a]===i&&r[a-1]!==n)&&s++,"\r\n".includes(r[a])||" "===r[a]?" "===r[a]?o+=r[a]:r[a]===n?s<=e&&(o+=r[a],r[a+1]===i&&(o+=r[a+1],a++)):r[a]===i&&(!r[a-1]||r[a-1]!==n)&&s<=e&&(o+=r[a]):r[a+1]||s||(o+=" ");return o}if("string"==typeof r&&r.length){var i=1;"number"==typeof+e&&Number.isInteger(+e)&&+e>=0&&(i=+e);var s="",o="";if(r.trim()){if(!r[0].trim())for(var a=0,u=r.length;a<u;a++)if(r[a].trim()){s=r.slice(0,a);break}}else s=r;if(r.trim()&&(""===r.slice(-1).trim()||" "===r.slice(-1)))for(var l=r.length;l--;)if(r[l].trim()){o=r.slice(l+1);break}return""+n(s,i,!1)+r.trim()+t(n(t(o),i,!0))}return r}var s={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function o(r,e){if(!Array.isArray(r)||!r.length)return r;var t,i,o=n(n({},s),e);if(o.strictlyTwoElementsInRangeArrays&&!r.filter((function(r){return r})).every((function(r,e){return 2===r.length||(t=e,i=r.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+t+"th range ("+JSON.stringify(r[t],null,4)+") has not two but "+i+" elements!");if(!r.filter((function(r){return r})).every((function(r,e){return!(!Number.isInteger(r[0])||r[0]<0||!Number.isInteger(r[1])||r[1]<0)||(t=e,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+t+"th range ("+JSON.stringify(r[t],null,4)+") does not consist of only natural numbers!");var a=Math.pow(r.filter((function(r){return r})).length,2),u=0;return Array.from(r).filter((function(r){return r})).sort((function(r,e){return o.progressFn&&o.progressFn(Math.floor(100*(u+=1)/a)),r[0]===e[0]?r[1]<e[1]?-1:r[1]>e[1]?1:0:r[0]<e[0]?-1:1}))}var a={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function u(r,e){function t(r){return r&&"object"==typeof r&&!Array.isArray(r)}if(!Array.isArray(r)||!r.length)return null;var i;if(e){if(!t(e))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(e,null,4)+" (type "+typeof e+")");if((i=n(n({},a),e)).progressFn&&t(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof i.progressFn+'", equal to '+JSON.stringify(i.progressFn,null,4));if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof i.mergeType+'", equal to '+JSON.stringify(i.mergeType,null,4));if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof i.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(i.joinRangesThatTouchEdges,null,4))}else i=n({},a);var s,u,l,g=r.filter((function(r){return r})).map((function(r){return[].concat(r)})).filter((function(r){return void 0!==r[2]||r[0]!==r[1]}));if(!(s=i.progressFn?o(g,{progressFn:function(r){(l=Math.floor(r/5))!==u&&(u=l,i.progressFn(l))}}):o(g)))return null;for(var f=s.length-1,p=f;p>0;p--)i.progressFn&&(l=Math.floor(78*(1-p/f))+21)!==u&&l>u&&(u=l,i.progressFn(l)),(s[p][0]<=s[p-1][0]||!i.joinRangesThatTouchEdges&&s[p][0]<s[p-1][1]||i.joinRangesThatTouchEdges&&s[p][0]<=s[p-1][1])&&(s[p-1][0]=Math.min(s[p][0],s[p-1][0]),s[p-1][1]=Math.max(s[p][1],s[p-1][1]),void 0!==s[p][2]&&(s[p-1][0]>=s[p][0]||s[p-1][1]<=s[p][1])&&null!==s[p-1][2]&&(null===s[p][2]&&null!==s[p-1][2]?s[p-1][2]=null:null!=s[p-1][2]?2==+i.mergeType&&s[p-1][0]===s[p][0]?s[p-1][2]=s[p][2]:s[p-1][2]+=s[p][2]:s[p-1][2]=s[p][2]),s.splice(p,1),p=s.length);return s.length?s:null}function l(r){return null!=r}function g(r){return Number.isInteger(r)&&r>=0}function f(r){return"string"==typeof r}var p={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},y=function(){function r(r){var e=n(n({},p),r);if(e.mergeType&&1!==e.mergeType&&2!==e.mergeType)if(f(e.mergeType)&&"1"===e.mergeType.trim())e.mergeType=1;else{if(!f(e.mergeType)||"2"!==e.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof e.mergeType+'", equal to '+JSON.stringify(e.mergeType,null,4));e.mergeType=2}this.opts=e,this.ranges=[]}var e=r.prototype;return e.add=function(r,e,t){var n=this;if(null!=r||null!=e){if(l(r)&&!l(e)){if(Array.isArray(r)){if(r.length){if(r.some((function(r){return Array.isArray(r)})))return void r.forEach((function(r){Array.isArray(r)&&n.add.apply(n,r)}));r.length&&g(+r[0])&&g(+r[1])&&this.add.apply(this,r)}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('+JSON.stringify(r,null,0)+') but second-one, "to" is not ('+JSON.stringify(e,null,0)+")")}if(!l(r)&&l(e))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('+JSON.stringify(e,null,0)+') but first-one, "from" is not ('+JSON.stringify(r,null,0)+")");var s=+r,o=+e;if(g(t)&&(t=String(t)),!g(s)||!g(o))throw g(s)&&s>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof o+'" equal to: '+JSON.stringify(o,null,4)):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof s+'" equal to: '+JSON.stringify(s,null,4));if(l(t)&&!f(t)&&!g(t))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+typeof t+", equal to:\n"+JSON.stringify(t,null,4));if(l(this.ranges)&&Array.isArray(this.last())&&s===this.last()[1]){if(this.last()[1]=o,this.last(),null!==this.last()[2]&&l(t)){var a=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(a=i(a,this.opts.limitLinebreaksCount)),f(a)&&!a.length||(this.last()[2]=a)}}else{this.ranges||(this.ranges=[]);var u=void 0===t||f(t)&&!t.length?[s,o]:[s,o,t&&this.opts.limitToBeAddedWhitespace?i(t,this.opts.limitLinebreaksCount):t];this.ranges.push(u)}}},e.push=function(r,e,t){this.add(r,e,t)},e.current=function(){var r=this;return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=u(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(e){return l(e[2])?[e[0],e[1],i(e[2],r.opts.limitLinebreaksCount)]:e})):this.ranges):null},e.wipe=function(){this.ranges=[]},e.replace=function(r){if(Array.isArray(r)&&r.length){if(!Array.isArray(r[0])||!g(r[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, "+JSON.stringify(r[0],null,4)+" should be an array and its first element should be an integer, a string index.");this.ranges=Array.from(r)}else this.ranges=[]},e.last=function(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null},r}();var h={padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1};r.defaults=h,r.fixRowNums=function(r,e){if("string"!=typeof r||!r.length)return r;function t(r){return/[0-9]/.test(r)}function i(r){return r&&"object"==typeof r&&!Array.isArray(r)}var s=n(n({},h),e);(!s.padStart||"number"!=typeof s.padStart||"number"==typeof s.padStart&&s.padStart<0)&&(s.padStart=0);var o,a=new y,l=r.length,g=null,f=null,p=null,c=1,m=!1,d=null;for(s.padStart&&l>45e3&&(s.padStart=4),o=0;o<l;o++){if(null===s.overrideRowNum&&("\n"===r[o]||"\r"===r[o]&&"\n"!==r[o+1])&&(c+=1),!s.extractedLogContentsWereGiven&&null!==g&&g.start<o&&g.type===r[o]&&(g=null,f=null,p=null,d=null,m=!1),null===g&&(s.extractedLogContentsWereGiven||f&&f<o&&p&&p<o)&&r[o].trim())if('"'===r[o]||"'"===r[o]||"`"===r[o])g={start:o,type:r[o]},m=!1;else if(s.extractedLogContentsWereGiven&&null===d){if(!t(r[o]))break;d=o}else r[o].trim()&&"/"!==r[o]&&!s.extractedLogContentsWereGiven&&(f=null,p=null,d=null);if(g&&Number.isInteger(g.start)&&g.start<o&&!m&&null===d&&t(r[o])&&(d=o),!Number.isInteger(d)||t(r[o])&&r[o+1]||!(o>d)&&r[o+1]||(a.push(d,t(r[o])?o+1:o,s.padStart?String(null!=s.overrideRowNum?s.overrideRowNum:c).padStart(s.padStart,"0"):""+(null!=s.overrideRowNum?s.overrideRowNum:c)),d=null,m=!0),g&&Number.isInteger(g.start)&&g.start<o&&!m&&/[A-Za-z]/.test(r[o])&&("n"!==r[o]||"\\"!==r[o-1])){if("\\"===r[o-1]&&"u"===r[o]&&"0"===r[o+1]&&"0"===r[o+2]&&"1"===r[o+3]&&("b"===r[o+4]||"B"===r[o+5])&&"["===r[o+5]){var w=void 0;t(r[o+6])?w=o+6:"$"===r[o+6]&&"{"===r[o+7]&&t(r[o+8])&&(w=o+8);var T=void 0;if(w)for(var v=w;v<l;v++)if(!t(r[v])){T=v;break}var b=void 0;if(void 0!==T&&"m"===r[T]?b=T:void 0!==T&&"}"===r[T]&&"m"===r[T+1]&&(b=T+1),!b){m=!0;continue}if("$"===r[b+1]&&"{"===r[b+2]&&"`"===r[b+3]){o=b+3;continue}}m=!0}if(!p&&r[o].trim()&&f&&f<=o&&("("===r[o]?p=o:(f=null,d=null)),i(s)&&s.triggerKeywords&&Array.isArray(s.triggerKeywords)){for(var O=void 0,A=0,R=s.triggerKeywords.length;A<R;A++)if(r.startsWith(s.triggerKeywords[A],o)){O=s.triggerKeywords[A];break}if(O){f=o+O.length,o=o+O.length-1;continue}}}return g=null,f=null,p=null,c=1,m=void 0,d=null,c=1,s.returnRangesOnly?a.current():a.current()?function(r,e,t){var n,i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof r)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(e&&!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(t&&"function"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(!e||!e.filter((function(r){return r})).length)return r;var o=(n=Array.isArray(e)&&Number.isInteger(e[0])&&Number.isInteger(e[1])?[Array.from(e)]:Array.from(e)).length,a=0;n.filter((function(r){return r})).forEach((function(r,e){if(t&&(i=Math.floor(a/o*10))!==s&&(s=i,t(i)),!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+e+"th element not an array: "+JSON.stringify(r,null,4)+", which is "+typeof r);if(!Number.isInteger(r[0])){if(!Number.isInteger(+r[0])||+r[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+e+"th element, array "+JSON.stringify(r,null,0)+". Its first element is not an integer, string index, but "+typeof r[0]+", equal to: "+JSON.stringify(r[0],null,4)+".");n[e][0]=+n[e][0]}if(!Number.isInteger(r[1])){if(!Number.isInteger(+r[1])||+r[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+e+"th element, array "+JSON.stringify(r,null,0)+". Its second element is not an integer, string index, but "+typeof r[1]+", equal to: "+JSON.stringify(r[1],null,4)+".");n[e][1]=+n[e][1]}a+=1}));var l=u(n,{progressFn:function(r){t&&(i=10+Math.floor(r/10))!==s&&(s=i,t(i))}}),g=Array.isArray(l)?l.length:0;if(g>0){var f=r.slice(l[g-1][1]);r=l.reduce((function(e,n,o,a){return t&&(i=20+Math.floor(o/g*80))!==s&&(s=i,t(i)),e+r.slice(0===o?0:a[o-1][1],a[o][0])+(a[o][2]||"")}),""),r+=f}return r}(r,a.current()):r},r.version="4.0.8",Object.defineProperty(r,"__esModule",{value:!0})}));
