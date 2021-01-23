/**
 * js-row-num
 * Update all row numbers in all console.logs in JS code
 * Version: 4.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/js-row-num/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).jsRowNum={})}(this,(function(e){"use strict";function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?t(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(i,r))}))}return e}function i(e,r){void 0===r&&(r=1);function t(e){return Array.from(e).reverse().join("")}function n(e,r,t){var n=t?"\n":"\r",i=t?"\r":"\n";if(!e)return e;for(var s=0,o="",a=0,u=e.length;a<u;a++)(e[a]===n||e[a]===i&&e[a-1]!==n)&&s++,"\r\n".includes(e[a])||" "===e[a]?" "===e[a]?o+=e[a]:e[a]===n?s<=r&&(o+=e[a],e[a+1]===i&&(o+=e[a+1],a++)):e[a]===i&&(!e[a-1]||e[a-1]!==n)&&s<=r&&(o+=e[a]):e[a+1]||s||(o+=" ");return o}if("string"==typeof e&&e.length){var i=1;"number"==typeof+r&&Number.isInteger(+r)&&+r>=0&&(i=+r);var s="",o="";if(e.trim()){if(!e[0].trim())for(var a=0,u=e.length;a<u;a++)if(e[a].trim()){s=e.slice(0,a);break}}else s=e;if(e.trim()&&(""===e.slice(-1).trim()||" "===e.slice(-1)))for(var l=e.length;l--;)if(e[l].trim()){o=e.slice(l+1);break}return""+n(s,i,!1)+e.trim()+t(n(t(o),i,!0))}return e}var s={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function o(e,r){if(!Array.isArray(e)||!e.length)return e;var t,i,o=n(n({},s),r);if(o.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(t=r,i=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") has not two but "+i+" elements!");if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") does not consist of only natural numbers!");var a=Math.pow(e.filter((function(e){return e})).length,2),u=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return o.progressFn&&o.progressFn(Math.floor(100*(u+=1)/a)),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}var a={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function u(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var i;if(r){if(!t(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((i=n(n({},a),r)).progressFn&&t(i.progressFn)&&!Object.keys(i.progressFn).length)i.progressFn=null;else if(i.progressFn&&"function"!=typeof i.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof i.progressFn+'", equal to '+JSON.stringify(i.progressFn,null,4));if(i.mergeType&&1!=+i.mergeType&&2!=+i.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof i.mergeType+'", equal to '+JSON.stringify(i.mergeType,null,4));if("boolean"!=typeof i.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof i.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(i.joinRangesThatTouchEdges,null,4))}else i=n({},a);var s,u,l,g=e.filter((function(e){return e})).map((function(e){return[].concat(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]}));if(!(s=i.progressFn?o(g,{progressFn:function(e){(l=Math.floor(e/5))!==u&&(u=l,i.progressFn(l))}}):o(g)))return null;for(var f=s.length-1,p=f;p>0;p--)i.progressFn&&(l=Math.floor(78*(1-p/f))+21)!==u&&l>u&&(u=l,i.progressFn(l)),(s[p][0]<=s[p-1][0]||!i.joinRangesThatTouchEdges&&s[p][0]<s[p-1][1]||i.joinRangesThatTouchEdges&&s[p][0]<=s[p-1][1])&&(s[p-1][0]=Math.min(s[p][0],s[p-1][0]),s[p-1][1]=Math.max(s[p][1],s[p-1][1]),void 0!==s[p][2]&&(s[p-1][0]>=s[p][0]||s[p-1][1]<=s[p][1])&&null!==s[p-1][2]&&(null===s[p][2]&&null!==s[p-1][2]?s[p-1][2]=null:null!=s[p-1][2]?2==+i.mergeType&&s[p-1][0]===s[p][0]?s[p-1][2]=s[p][2]:s[p-1][2]+=s[p][2]:s[p-1][2]=s[p][2]),s.splice(p,1),p=s.length);return s.length?s:null}function l(e){return null!=e}function g(e){return Number.isInteger(e)&&e>=0}function f(e){return"string"==typeof e}var p={limitToBeAddedWhitespace:!1,limitLinebreaksCount:1,mergeType:1},y=function(){function e(e){var r=n(n({},p),e);if(r.mergeType&&1!==r.mergeType&&2!==r.mergeType)if(f(r.mergeType)&&"1"===r.mergeType.trim())r.mergeType=1;else{if(!f(r.mergeType)||"2"!==r.mergeType.trim())throw new Error('ranges-push: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof r.mergeType+'", equal to '+JSON.stringify(r.mergeType,null,4));r.mergeType=2}this.opts=r,this.ranges=[]}var r=e.prototype;return r.add=function(e,r,t){var n=this;if(null!=e||null!=r){if(l(e)&&!l(r)){if(Array.isArray(e)){if(e.length){if(e.some((function(e){return Array.isArray(e)})))return void e.forEach((function(e){Array.isArray(e)&&n.add.apply(n,e)}));e.length&&g(+e[0])&&g(+e[1])&&this.add.apply(this,e)}return}throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_12] the first input argument, "from" is set ('+JSON.stringify(e,null,0)+') but second-one, "to" is not ('+JSON.stringify(r,null,0)+")")}if(!l(e)&&l(r))throw new TypeError('ranges-push/Ranges/add(): [THROW_ID_13] the second input argument, "to" is set ('+JSON.stringify(r,null,0)+') but first-one, "from" is not ('+JSON.stringify(e,null,0)+")");var s=+e,o=+r;if(g(t)&&(t=String(t)),!g(s)||!g(o))throw g(s)&&s>=0?new TypeError('ranges-push/Ranges/add(): [THROW_ID_10] "to" value, the second input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof o+'" equal to: '+JSON.stringify(o,null,4)):new TypeError('ranges-push/Ranges/add(): [THROW_ID_09] "from" value, the first input argument, must be a natural number or zero! Currently it\'s of a type "'+typeof s+'" equal to: '+JSON.stringify(s,null,4));if(l(t)&&!f(t)&&!g(t))throw new TypeError("ranges-push/Ranges/add(): [THROW_ID_08] The third argument, the value to add, was given not as string but "+typeof t+", equal to:\n"+JSON.stringify(t,null,4));if(l(this.ranges)&&Array.isArray(this.last())&&s===this.last()[1]){if(this.last()[1]=o,this.last(),null!==this.last()[2]&&l(t)){var a=!(this.last()[2]&&this.last()[2].length>0)||this.opts&&this.opts.mergeType&&1!==this.opts.mergeType?t:this.last()[2]+t;this.opts.limitToBeAddedWhitespace&&(a=i(a,this.opts.limitLinebreaksCount)),f(a)&&!a.length||(this.last()[2]=a)}}else{this.ranges||(this.ranges=[]);var u=void 0===t||f(t)&&!t.length?[s,o]:[s,o,t&&this.opts.limitToBeAddedWhitespace?i(t,this.opts.limitLinebreaksCount):t];this.ranges.push(u)}}},r.push=function(e,r,t){this.add(e,r,t)},r.current=function(){var e=this;return Array.isArray(this.ranges)&&this.ranges.length?(this.ranges=u(this.ranges,{mergeType:this.opts.mergeType}),this.ranges&&this.opts.limitToBeAddedWhitespace?this.ranges.map((function(r){return l(r[2])?[r[0],r[1],i(r[2],e.opts.limitLinebreaksCount)]:r})):this.ranges):null},r.wipe=function(){this.ranges=[]},r.replace=function(e){if(Array.isArray(e)&&e.length){if(!Array.isArray(e[0])||!g(e[0][0]))throw new Error("ranges-push/Ranges/replace(): [THROW_ID_11] Single range was given but we expected array of arrays! The first element, "+JSON.stringify(e[0],null,4)+" should be an array and its first element should be an integer, a string index.");this.ranges=Array.from(e)}else this.ranges=[]},r.last=function(){return Array.isArray(this.ranges)&&this.ranges.length?this.ranges[this.ranges.length-1]:null},e}();var h={padStart:3,overrideRowNum:null,returnRangesOnly:!1,triggerKeywords:["console.log"],extractedLogContentsWereGiven:!1};e.defaults=h,e.fixRowNums=function(e,r){if("string"!=typeof e||!e.length)return e;function t(e){return/[0-9]/.test(e)}function i(e){return e&&"object"==typeof e&&!Array.isArray(e)}var s=n(n({},h),r);(!s.padStart||"number"!=typeof s.padStart||"number"==typeof s.padStart&&s.padStart<0)&&(s.padStart=0);var o,a=new y,l=e.length,g=null,f=null,p=null,c=1,m=!1,d=null;for(s.padStart&&l>45e3&&(s.padStart=4),o=0;o<l;o++){if(null===s.overrideRowNum&&("\n"===e[o]||"\r"===e[o]&&"\n"!==e[o+1])&&(c+=1),!s.extractedLogContentsWereGiven&&null!==g&&g.start<o&&g.type===e[o]&&(g=null,f=null,p=null,d=null,m=!1),null===g&&(s.extractedLogContentsWereGiven||f&&f<o&&p&&p<o)&&e[o].trim())if('"'===e[o]||"'"===e[o]||"`"===e[o])g={start:o,type:e[o]},m=!1;else if(s.extractedLogContentsWereGiven&&null===d){if(!t(e[o]))break;d=o}else e[o].trim()&&"/"!==e[o]&&!s.extractedLogContentsWereGiven&&(f=null,p=null,d=null);if(g&&Number.isInteger(g.start)&&g.start<o&&!m&&null===d&&t(e[o])&&(d=o),!Number.isInteger(d)||t(e[o])&&e[o+1]||!(o>d)&&e[o+1]||(a.push(d,t(e[o])?o+1:o,s.padStart?String(null!=s.overrideRowNum?s.overrideRowNum:c).padStart(s.padStart,"0"):""+(null!=s.overrideRowNum?s.overrideRowNum:c)),d=null,m=!0),g&&Number.isInteger(g.start)&&g.start<o&&!m&&/[A-Za-z]/.test(e[o])&&("n"!==e[o]||"\\"!==e[o-1])){if("\\"===e[o-1]&&"u"===e[o]&&"0"===e[o+1]&&"0"===e[o+2]&&"1"===e[o+3]&&("b"===e[o+4]||"B"===e[o+5])&&"["===e[o+5]){var w=void 0;t(e[o+6])?w=o+6:"$"===e[o+6]&&"{"===e[o+7]&&t(e[o+8])&&(w=o+8);var T=void 0;if(w)for(var v=w;v<l;v++)if(!t(e[v])){T=v;break}var b=void 0;if(void 0!==T&&"m"===e[T]?b=T:void 0!==T&&"}"===e[T]&&"m"===e[T+1]&&(b=T+1),!b){m=!0;continue}if("$"===e[b+1]&&"{"===e[b+2]&&"`"===e[b+3]){o=b+3;continue}}m=!0}if(!p&&e[o].trim()&&f&&f<=o&&("("===e[o]?p=o:(f=null,d=null)),i(s)&&s.triggerKeywords&&Array.isArray(s.triggerKeywords)){for(var O=void 0,R=0,A=s.triggerKeywords.length;R<A;R++)if(e.startsWith(s.triggerKeywords[R],o)){O=s.triggerKeywords[R];break}if(O){f=o+O.length,o=o+O.length-1;continue}}}return g=null,f=null,p=null,c=1,m=void 0,d=null,c=1,s.returnRangesOnly?a.current():a.current()?function(e,r,t){var n,i=0,s=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(r&&!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(t&&"function"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(!r||!r.filter((function(e){return e})).length)return e;var o=(n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r)).length,a=0;n.filter((function(e){return e})).forEach((function(e,r){if(t&&(i=Math.floor(a/o*10))!==s&&(s=i,t(i)),!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+r+"th element not an array: "+JSON.stringify(e,null,4)+", which is "+typeof e);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its first element is not an integer, string index, but "+typeof e[0]+", equal to: "+JSON.stringify(e[0],null,4)+".");n[r][0]=+n[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its second element is not an integer, string index, but "+typeof e[1]+", equal to: "+JSON.stringify(e[1],null,4)+".");n[r][1]=+n[r][1]}a+=1}));var l=u(n,{progressFn:function(e){t&&(i=10+Math.floor(e/10))!==s&&(s=i,t(i))}}),g=l.length;if(g>0){var f=e.slice(l[g-1][1]);e=l.reduce((function(r,n,o,a){return t&&(i=20+Math.floor(o/g*80))!==s&&(s=i,t(i)),r+e.slice(0===o?0:a[o-1][1],a[o][0])+(a[o][2]||"")}),""),e+=f}return e}(e,a.current()):e},e.version="4.0.0",Object.defineProperty(e,"__esModule",{value:!0})}));
