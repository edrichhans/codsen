/**
 * html-table-patcher
 * Visual helper to place templating code around table tags into correct places
 * Version: 4.0.0
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/html-table-patcher/
 */

import{cparser as t}from"codsen-parser";import{Ranges as e}from"ranges-push";import{rApply as n}from"ranges-apply";import{traverse as s}from"ast-monkey-traverse-with-lookahead";const r="4.0.0",l=/<!--([\s\S]*?)-->/g,a=new e;function o(t){return t&&"object"==typeof t&&!Array.isArray(t)}const c={cssStylesContent:"",alwaysCenter:!1};function i(e,r){if("string"!=typeof e||0===e.length)return{result:e};const i={...c,...r};!i.cssStylesContent||"string"==typeof i.cssStylesContent&&i.cssStylesContent.trim()||(i.cssStylesContent="");const y=[];if(s(t(e),((t,e,n)=>{if(o(t)&&"comment"===t.type&&!y.some((t=>n.path.startsWith(t))))y.push(n.path);else if(o(t)&&"tag"===t.type&&"table"===t.tagName&&!y.some((t=>n.path.startsWith(t)))&&!t.closing&&t.children.some((t=>["text","esp"].includes(t.type)))){let e=1,n=!1,s={};if(t.children.some((t=>"tag"===t.type&&"tr"===t.tagName&&!t.closing&&(s=t)))){let t=0;for(let r=0,a=s.children.length;r<a;r++){const a=s.children[r];"tag"===a.type&&"td"===a.tagName?a.closing||(n=a.attribs.some((t=>"align"===t.attribName&&"center"===t.attribValueRaw||"style"===t.attribName&&/text-align:\s*center/i.test(t.attribValueRaw))),t++,t>e&&(e=t)):("text"!==a.type||a.value.replace(l,"").trim())&&(t=0)}}t.children.filter((t=>["text","esp"].includes(t.type))).forEach((t=>{t.value.replace(l,"").trim()&&a.push(t.start,t.end,`\n<tr>\n  <td${e>1?` colspan="${e}"`:""}${i.alwaysCenter||n?' align="center"':""}${i.cssStylesContent?` style="${i.cssStylesContent}"`:""}>\n    ${t.value.trim()}\n  </td>\n</tr>\n`)})),t.children.filter((t=>"tag"===t.type&&"tr"===t.tagName&&!t.closing)).forEach((t=>{let s=!1;for(let r=0,l=t.children.length;r<l;r++){const o=t.children[r];s&&"comment"===o.type&&o.closing?s=!1:(s||"comment"!==o.type||o.closing||(s=!0),!s&&["text","esp"].includes(o.type)&&o.value.trim()&&o.value.trim()&&a.push(o.start,o.end,r?r&&l>1&&r===l-1?`\n</tr>\n<tr>\n  <td${e>1?` colspan="${e}"`:""}${i.alwaysCenter||n?' align="center"':""}${i.cssStylesContent?` style="${i.cssStylesContent}"`:""}>\n    ${o.value.trim()}\n  </td>\n`:`\n</tr>\n<tr>\n  <td${e>1?` colspan="${e}"`:""}${i.alwaysCenter||n?' align="center"':""}${i.cssStylesContent?` style="${i.cssStylesContent}"`:""}>\n    ${o.value.trim()}\n  </td>\n</tr>\n<tr>\n`:`\n  <td${e>1?` colspan="${e}"`:""}${i.alwaysCenter||n?' align="center"':""}${i.cssStylesContent?` style="${i.cssStylesContent}"`:""}>\n    ${o.value.trim()}\n  </td>\n</tr>\n<tr>\n`))}}))}})),a.current()){const t=n(e,a.current());return a.wipe(),{result:t}}return{result:e}}export{c as defaults,i as patcher,r as version};
