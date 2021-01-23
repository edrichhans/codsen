/**
 * string-apostrophes
 * Comprehensive, HTML-entities-aware tool to typographically-correct the apostrophes and single/double quotes
 * Version: 1.4.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/string-apostrophes/
 */

!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).stringApostrophes={})}(this,(function(e){"use strict";function r(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function t(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function n(e){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?t(Object(s),!0).forEach((function(t){r(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):t(Object(s)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(s,r))}))}return e}var s={strictlyTwoElementsInRangeArrays:!1,progressFn:null};function o(e,r){if(!Array.isArray(e)||!e.length)return e;var t,o,i=n(n({},s),r);if(i.strictlyTwoElementsInRangeArrays&&!e.filter((function(e){return e})).every((function(e,r){return 2===e.length||(t=r,o=e.length,!1)})))throw new TypeError("ranges-sort: [THROW_ID_03] The first argument should be an array and must consist of arrays which are natural number indexes representing TWO string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") has not two but "+o+" elements!");if(!e.filter((function(e){return e})).every((function(e,r){return!(!Number.isInteger(e[0])||e[0]<0||!Number.isInteger(e[1])||e[1]<0)||(t=r,!1)})))throw new TypeError("ranges-sort: [THROW_ID_04] The first argument should be an array and must consist of arrays which are natural number indexes representing string index ranges. However, "+t+"th range ("+JSON.stringify(e[t],null,4)+") does not consist of only natural numbers!");var u=Math.pow(e.filter((function(e){return e})).length,2),a=0;return Array.from(e).filter((function(e){return e})).sort((function(e,r){return i.progressFn&&i.progressFn(Math.floor(100*(a+=1)/u)),e[0]===r[0]?e[1]<r[1]?-1:e[1]>r[1]?1:0:e[0]<r[0]?-1:1}))}var i={mergeType:1,progressFn:null,joinRangesThatTouchEdges:!0};function u(e,r){function t(e){return e&&"object"==typeof e&&!Array.isArray(e)}if(!Array.isArray(e)||!e.length)return null;var s;if(r){if(!t(r))throw new Error("emlint: [THROW_ID_03] the second input argument must be a plain object. It was given as:\n"+JSON.stringify(r,null,4)+" (type "+typeof r+")");if((s=n(n({},i),r)).progressFn&&t(s.progressFn)&&!Object.keys(s.progressFn).length)s.progressFn=null;else if(s.progressFn&&"function"!=typeof s.progressFn)throw new Error('ranges-merge: [THROW_ID_01] opts.progressFn must be a function! It was given of a type: "'+typeof s.progressFn+'", equal to '+JSON.stringify(s.progressFn,null,4));if(s.mergeType&&1!=+s.mergeType&&2!=+s.mergeType)throw new Error('ranges-merge: [THROW_ID_02] opts.mergeType was customised to a wrong thing! It was given of a type: "'+typeof s.mergeType+'", equal to '+JSON.stringify(s.mergeType,null,4));if("boolean"!=typeof s.joinRangesThatTouchEdges)throw new Error('ranges-merge: [THROW_ID_04] opts.joinRangesThatTouchEdges was customised to a wrong thing! It was given of a type: "'+typeof s.joinRangesThatTouchEdges+'", equal to '+JSON.stringify(s.joinRangesThatTouchEdges,null,4))}else s=n({},i);var u,a,l,p=e.filter((function(e){return e})).map((function(e){return[].concat(e)})).filter((function(e){return void 0!==e[2]||e[0]!==e[1]}));if(!(u=s.progressFn?o(p,{progressFn:function(e){(l=Math.floor(e/5))!==a&&(a=l,s.progressFn(l))}}):o(p)))return null;for(var c=u.length-1,f=c;f>0;f--)s.progressFn&&(l=Math.floor(78*(1-f/c))+21)!==a&&l>a&&(a=l,s.progressFn(l)),(u[f][0]<=u[f-1][0]||!s.joinRangesThatTouchEdges&&u[f][0]<u[f-1][1]||s.joinRangesThatTouchEdges&&u[f][0]<=u[f-1][1])&&(u[f-1][0]=Math.min(u[f][0],u[f-1][0]),u[f-1][1]=Math.max(u[f][1],u[f-1][1]),void 0!==u[f][2]&&(u[f-1][0]>=u[f][0]||u[f-1][1]<=u[f][1])&&null!==u[f-1][2]&&(null===u[f][2]&&null!==u[f-1][2]?u[f-1][2]=null:null!=u[f-1][2]?2==+s.mergeType&&u[f-1][0]===u[f][0]?u[f-1][2]=u[f][2]:u[f-1][2]+=u[f][2]:u[f-1][2]=u[f][2]),u.splice(f,1),f=u.length);return u.length?u:null}function a(e,r,t){var n,s=0,o=0;if(0===arguments.length)throw new Error("ranges-apply: [THROW_ID_01] inputs missing!");if("string"!=typeof e)throw new TypeError("ranges-apply: [THROW_ID_02] first input argument must be a string! Currently it's: "+typeof e+", equal to: "+JSON.stringify(e,null,4));if(r&&!Array.isArray(r))throw new TypeError("ranges-apply: [THROW_ID_03] second input argument must be an array (or null)! Currently it's: "+typeof r+", equal to: "+JSON.stringify(r,null,4));if(t&&"function"!=typeof t)throw new TypeError("ranges-apply: [THROW_ID_04] the third input argument must be a function (or falsey)! Currently it's: "+typeof t+", equal to: "+JSON.stringify(t,null,4));if(!r||!r.filter((function(e){return e})).length)return e;var i=(n=Array.isArray(r)&&Number.isInteger(r[0])&&Number.isInteger(r[1])?[Array.from(r)]:Array.from(r)).length,a=0;n.filter((function(e){return e})).forEach((function(e,r){if(t&&(s=Math.floor(a/i*10))!==o&&(o=s,t(s)),!Array.isArray(e))throw new TypeError("ranges-apply: [THROW_ID_05] ranges array, second input arg., has "+r+"th element not an array: "+JSON.stringify(e,null,4)+", which is "+typeof e);if(!Number.isInteger(e[0])){if(!Number.isInteger(+e[0])||+e[0]<0)throw new TypeError("ranges-apply: [THROW_ID_06] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its first element is not an integer, string index, but "+typeof e[0]+", equal to: "+JSON.stringify(e[0],null,4)+".");n[r][0]=+n[r][0]}if(!Number.isInteger(e[1])){if(!Number.isInteger(+e[1])||+e[1]<0)throw new TypeError("ranges-apply: [THROW_ID_07] ranges array, second input arg. has "+r+"th element, array "+JSON.stringify(e,null,0)+". Its second element is not an integer, string index, but "+typeof e[1]+", equal to: "+JSON.stringify(e[1],null,4)+".");n[r][1]=+n[r][1]}a+=1}));var l=u(n,{progressFn:function(e){t&&(s=10+Math.floor(e/10))!==o&&(o=s,t(s))}}),p=l.length;if(p>0){var c=e.slice(l[p-1][1]);e=l.reduce((function(r,n,i,u){return t&&(s=20+Math.floor(i/p*80))!==o&&(o=s,t(s)),r+e.slice(0===i?0:u[i-1][1],u[i][0])+(u[i][2]||"")}),""),e+=c}return e}function l(e,r){var t=r.from,n=r.to,s=r.value,o=r.convertEntities,i=void 0===o||o,u=r.convertApostrophes,a=void 0===u||u,l=r.offsetBy;if(!Number.isInteger(t)||t<0)throw new Error('string-apostrophes: [THROW_ID_01] options objects key "to", a starting string index, is wrong! It was given as '+t+" (type "+typeof t+")");Number.isInteger(n)||(n=t+1);var p=[],c="‘",f="’",g="“",h="”",y="′",m="″",d=[".",",",";","!","?"];function w(e){return"string"==typeof e&&e.charCodeAt(0)>=48&&e.charCodeAt(0)<=57}function q(e){return"string"==typeof e&&!!e.length&&e.toUpperCase()!==e.toLowerCase()}return s&&["'",c,f,y].includes(s)||n===t+1&&["'",c,f,y].includes(e[t])?e[t-1]&&e[n]&&w(e[t-1])&&!q(e[n])?a&&e.slice(t,n)!==(i?"&prime;":y)&&s!==(i?"&prime;":y)?p.push([t,n,i?"&prime;":y]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"]):e[n]&&e[n+1]&&"n"===e[n]&&e.slice(t,n)===e.slice(n+1,n+1+(n-t))?a&&e.slice(t,n+2)!==(i?"&rsquo;n&rsquo;":f+"n"+f)&&s!==(i?"&rsquo;n&rsquo;":f+"n"+f)?(p.push([t,n+2,i?"&rsquo;n&rsquo;":f+"n"+f]),"function"==typeof l&&l(2)):a||"'n'"===e.slice(t,n+2)||"'n'"===s||(p.push([t,n+2,"'n'"]),"function"==typeof l&&l(2)):e[n]&&"t"===e[n].toLowerCase()&&(!e[n+1]||!e[n+1].trim()||"i"===e[n+1].toLowerCase())||e[n]&&e[n+2]&&"t"===e[n].toLowerCase()&&"w"===e[n+1].toLowerCase()&&("a"===e[n+2].toLowerCase()||"e"===e[n+2].toLowerCase()||"i"===e[n+2].toLowerCase()||"o"===e[n+2].toLowerCase())||e[n]&&e[n+1]&&"e"===e[n].toLowerCase()&&"m"===e[n+1].toLowerCase()||e[n]&&e[n+4]&&"c"===e[n].toLowerCase()&&"a"===e[n+1].toLowerCase()&&"u"===e[n+2].toLowerCase()&&"s"===e[n+3].toLowerCase()&&"e"===e[n+4].toLowerCase()||e[n]&&w(e[n])?a&&e.slice(t,n)!==(i?"&rsquo;":f)&&s!==(i?"&rsquo;":f)?p.push([t,n,i?"&rsquo;":f]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"]):e[t-1]&&e[n]&&d.includes(e[t-1])?e[n].trim()?'"'===e[n]&&e[n+1]&&!e[n+1].trim()&&(a&&e.slice(t,n+1)!==(i?"&rsquo;&rdquo;":""+f+h)&&s!==(i?"&rsquo;&rdquo;":""+f+h)?(p.push([t,n+1,i?"&rsquo;&rdquo;":""+f+h]),"function"==typeof l&&l(1)):a||"'\""===e.slice(t,n+1)||"'\""===s||(p.push([t,n+1,"'\""]),"function"==typeof l&&l(1))):a&&e.slice(t,n)!==(i?"&rsquo;":f)&&s!==(i?"&rsquo;":f)?p.push([t,n,i?"&rsquo;":f]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"]):0===t&&e.slice(n).trim()?a&&e.slice(t,n)!==(i?"&lsquo;":c)&&s!==(i?"&lsquo;":c)?p.push([t,n,i?"&lsquo;":c]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"]):!e[n]&&e.slice(0,t).trim()?a&&e.slice(t,n)!==(i?"&rsquo;":f)&&s!==(i?"&rsquo;":f)?p.push([t,n,i?"&rsquo;":f]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"]):e[t-1]&&e[n]&&(q(e[t-1])||w(e[t-1]))&&(q(e[n])||w(e[n]))?a?(e[n]&&e[t-5]&&"h"===e[t-5].toLowerCase()&&"a"===e[t-4].toLowerCase()&&"w"===e[t-3].toLowerCase()&&"a"===e[t-2].toLowerCase()&&"i"===e[t-1].toLowerCase()&&"i"===e[n].toLowerCase()||e[t-1]&&"o"===e[t-1].toLowerCase()&&e[n+2]&&"a"===e[n].toLowerCase()&&"h"===e[n+1].toLowerCase()&&"u"===e[n+2].toLowerCase())&&e.slice(t,n)!==(i?"&lsquo;":c)&&s!==(i?"&lsquo;":c)?p.push([t,n,i?"&lsquo;":c]):e.slice(t,n)!==(i?"&rsquo;":f)&&s!==(i?"&rsquo;":f)&&p.push([t,n,i?"&rsquo;":f]):"'"!==e.slice(t,n)&&"'"!==s&&p.push([t,n,"'"]):e[n]&&(q(e[n])||w(e[n]))?a&&e.slice(t,n)!==(i?"&lsquo;":c)&&s!==(i?"&lsquo;":c)?p.push([t,n,i?"&lsquo;":c]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"]):q(e[t-1])||w(e[t-1])?a&&e.slice(t,n)!==(i?"&rsquo;":f)&&s!==(i?"&rsquo;":f)?p.push([t,n,i?"&rsquo;":f]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"]):e[t-1]&&!e[t-1].trim()?a&&e.slice(t,n)!==(i?"&lsquo;":c)&&s!==(i?"&lsquo;":c)?p.push([t,n,i?"&lsquo;":c]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"]):e[n]&&!e[n].trim()&&(a&&e.slice(t,n)!==(i?"&rsquo;":f)&&s!==(i?"&rsquo;":f)?p.push([t,n,i?"&rsquo;":f]):a||"'"===e.slice(t,n)||"'"===s||p.push([t,n,"'"])):(['"',g,h,m].includes(s)||n===t+1&&['"',g,h,m].includes(e[t]))&&(e[t-1]&&w(e[t-1])&&e[n]&&"'"!==e[n]&&'"'!==e[n]&&e[n]!==f&&e[n]!==h&&e[n]!==c&&e[n]!==g?a&&e.slice(t,n)!==(i?"&Prime;":m)&&s!==(i?"&Prime;":m)?p.push([t,n,i?"&Prime;":m]):a||'"'===e.slice(t,n)||'"'===s||p.push([t,n,'"']):e[t-1]&&e[n]&&d.includes(e[t-1])?e[n].trim()?"'"===e[n]&&e[n+1]&&!e[n+1].trim()&&(a&&e.slice(t,n+1)!==(i?"&rdquo;&rsquo;":""+h+f)&&s!==(i?"&rdquo;&rsquo;":""+h+f)?(p.push([t,n+1,i?"&rdquo;&rsquo;":""+h+f]),"function"==typeof l&&l(1)):a||"\"'"===e.slice(t,n+1)||"\"'"===s||(p.push([t,n+1,"\"'"]),"function"==typeof l&&l(1))):a&&e.slice(t,n)!==(i?"&rdquo;":h)&&s!==(i?"&rdquo;":h)?p.push([t,n,i?"&rdquo;":h]):a||'"'===e.slice(t,n)||'"'===s||p.push([t,n,'"']):0===t&&e[n]&&e.slice(n).trim()?a&&e.slice(t,n)!==(i?"&ldquo;":g)&&s!==(i?"&ldquo;":g)?p.push([t,n,i?"&ldquo;":g]):a||'"'===e.slice(t,n)||'"'===s||p.push([t,n,'"']):!e[n]&&e.slice(0,t).trim()?a&&e.slice(t,n)!==(i?"&rdquo;":h)&&s!==(i?"&rdquo;":h)?p.push([t,n,i?"&rdquo;":h]):a||'"'===e.slice(t,n)||'"'===s||p.push([t,n,'"']):e[n]&&(q(e[n])||w(e[n]))?a&&e.slice(t,n)!==(i?"&ldquo;":g)&&s!==(i?"&ldquo;":g)?p.push([t,n,i?"&ldquo;":g]):a||'"'===e.slice(t,n)||'"'===s||p.push([t,n,'"']):e[t-1]&&(q(e[t-1])||w(e[t-1]))?a&&e.slice(t,n)!==(i?"&rdquo;":h)&&s!==(i?"&rdquo;":h)?p.push([t,n,i?"&rdquo;":h]):a||'"'===e.slice(t,n)||'"'===s||p.push([t,n,'"']):e[t-1]&&!e[t-1].trim()?a&&e.slice(t,n)!==(i?"&ldquo;":g)&&s!==(i?"&ldquo;":g)?p.push([t,n,i?"&ldquo;":g]):a||'"'===e.slice(t,n)||'"'===s||p.push([t,n,'"']):e[n]&&!e[n].trim()&&(a&&e.slice(t,n)!==(i?"&rdquo;":h)&&s!==(i?"&rdquo;":h)?p.push([t,n,i?"&rdquo;":h]):a||'"'===e.slice(t,n)||'"'===s||p.push([t,n,'"']))),p}e.convertAll=function(e,r){for(var t=[],s=n({convertApostrophes:!0,convertEntities:!1},r),o=function(r,n){s.from=r,s.offsetBy=function(e){r+=e};var o=l(e,s);Array.isArray(o)&&o.length&&(t=t.concat(o)),i=r},i=0,u=e.length;i<u;i++)o(i);return{result:a(e,t),ranges:t}},e.convertOne=l,e.version="1.4.0",Object.defineProperty(e,"__esModule",{value:!0})}));
