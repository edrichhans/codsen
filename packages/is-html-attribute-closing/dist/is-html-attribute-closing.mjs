/**
 * is-html-attribute-closing
 * Is a character on a given index a closing of an HTML attribute?
 * Version: 2.0.2
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/is-html-attribute-closing/
 */

import{allHtmlAttribs as t}from"html-all-known-attributes";import{isAttrNameChar as e}from"is-char-suitable-for-html-attr-name";import{left as r,right as i}from"string-left-right";import{matchRight as s}from"string-match-left-right";function n(t){return"'"===t?'"':"'"}function l(t,e,r,i=[]){for(let s=e,n=t.length;s<n;s++){if(i.some((e=>t.startsWith(e,s))))return!0;if(t[s]===r)return!1}return!0}function c(t,e,r,i){for(let s=e,n=t.length;s<n;s++){if(t.startsWith(r,s))return!0;if(t.startsWith(i,s))return!1}return!1}function u(t,r){if(!e(t[r])||!r)return!1;return/^[a-zA-Z0-9:-]*(\s*[=]?\s*((?:'[^']*')|(?:"[^"]*")))|( [^/>'"=]*['"])/.test(t.slice(r))}function f(t,r){if(!r||!e(t[r]))return!1;return/^[a-zA-Z0-9:-]*=(((?:'[^']*')|(?:"[^"]*"))|((?:['"][^'"]*['"]\s*\/?>)))/.test(t.slice(r))}function a(t,i){if(e(t[r(t,i)]))for(let r=i;r--;)if(t[r].trim().length&&!e(t[r]))return t.slice(r+1,i)}const h="2.0.2";function m(h,m,o){if("string"!=typeof h||!h.trim()||!Number.isInteger(m)||!Number.isInteger(o)||!h[m]||!h[o]||m>=o)return!1;const d="'\"".includes(h[m])?h[m]:null;let g,p=null;d&&(p=n(d));const v=(new Map).set("'",0).set('"',0).set("matchedPairs",0);let P,W,y,b,M=null,A=0,B=!1,k=!1,w=!1,z=!1;for(let C=m,I=h.length;C<I;C++){if("'\"".includes(h[C])&&B&&P===m&&void 0!==W&&W<C&&C>=o){const s=C!==o||f(h,i(h,o))||"/>".includes(h[i(h,C)]),n=!(C>o&&h[m]===h[o]&&h[m]===h[C]&&u(h,C+1)),c=C===o&&u(h,o+1),d=g&&g<C&&t.has(h.slice(g,C).trim());g&&h.slice(g,C).trim();const p=g&&g<C&&h[g-1]&&!h[g-1].trim()&&Array.from(h.slice(g,C).trim()).every((t=>e(t)))&&h[m]===h[o]&&!"/>".includes(h[i(h,C)])&&l(h,C+1,"=",["'",'"']);let v;C===o&&(v=a(h,C));const P=C===o&&(!e(h[r(h,C)])||v&&!t.has(v))&&"="!==h[r(h,C)],W="/>".includes(h[i(h,C)])&&C===o,y=e(h[i(h,C)]),b=B&&C!==o,M=!(C>=o&&":"===h[r(h,o)]);return!!(s&&n&&(c||d||p||P)&&(W||y||b)&&M)}if("'\"".includes(h[C])){if("'"===h[C]&&'"'===h[C-1]&&'"'===h[C+1]||'"'===h[C]&&"'"===h[C-1]&&"'"===h[C+1])continue;M&&h[C]===h[M]?(v.set("matchedPairs",v.get("matchedPairs")+1),P=M,W=C,M=null,B=!0):B=!1,v.set(h[C],v.get(h[C])+1),A=v.get('"')+v.get("'")}if(">"===h[C]&&!w&&(w=!0,A&&v.get("matchedPairs")&&A===2*v.get("matchedPairs")&&C<o))return!1;if("<"===h[C]&&"%"!==h[i(h,C)]&&w&&!z)return z=!0,!1;if(h[C].trim()&&!g)e(h[C])&&(g=C);else if(g&&!e(h[C])){if(b=y,y=h.slice(g,C),k=g>=o,"'\"".includes(h[C])&&0===v.get("matchedPairs")&&3===A&&h[m]===h[C]&&t.has(y)&&!"'\"".includes(h[i(h,C)])){const e=C>o,r=!M,i=M+1>=C,s=h.slice(M+1,C).trim().split(/\s+/).every((e=>t.has(e))),n=!y||!b||!b.endsWith(":"),l=C===o,c=A<3,u=!!B,f=!M,a=M+1>=C,m=!h.slice(M+1,C).trim().split(/\s+/).every((e=>t.has(e)));return e&&(r||i||s)&&n||l&&(c||u||f||a||m)}if(y&&t.has(y)&&P===m&&W===o)return!0}if("'\"".includes(h[C])&&(!(v.get('"')%2)||!(v.get("'")%2))&&(v.get('"')+v.get("'"))%2&&(y&&t.has(y)||C>o+1&&t.has(h.slice(o+1,C).trim()))&&(h[C+1]!==h[C]||h[C]!==h[m])&&!(C>o+1&&":"===h[r(h,o)])&&!(y&&b&&b.trim().endsWith(":"))){const e=C>o,r=!!d,i=h[m]!==h[o],s=t.has(h.slice(m+1,o).trim()),l=!c(h,C+1,h[o],n(h[o]));return e&&!(r&&i&&s&&l)}if(("="===h[C]||!h[C].length&&"="===h[i(h,C)])&&y&&t.has(y)){const t=C>o,e=!(!(B&&P===m&&W===o||f(h,g))&&B&&void 0!==P&&P<=o);return t&&e}if(C>o){if(d&&h[C]===d){const e=!!M,r=M===o,s=M+1<C&&h.slice(M+1,C).trim(),n=h.slice(M+1,C).trim().split(/\s+/).every((e=>t.has(e))),l=C>=o,c=!h[i(h,C)]||!"'\"".includes(h[i(h,C)]);return!!(e&&r&&s&&n&&l&&c)}if(d&&h[o]===p&&h[C]===p)return!1;if("/"===h[C]||">"===h[C]||"<"===h[C]){const r=h[m]===h[o]&&M===o&&!h.slice(m+1,o).includes(h[m]),s=v.get("matchedPairs")<2,n=a(h,C),c=(!n||!t.has(n))&&(!(C>o&&v.get("'")&&v.get('"')&&v.get("matchedPairs")>1)||"/>".includes(h[i(h,C)])),u=A<3||v.get('"')+v.get("'")-2*v.get("matchedPairs")!=2,f=!B||B&&!(void 0!==P&&Array.from(h.slice(m+1,P).trim()).every((t=>e(t)))&&t.has(h.slice(m+1,P).trim())),d=!i(h,C)&&A%2==0,g=h[m-2]&&"="===h[m-1]&&e(h[m-2]),p=!l(h,C+1,"<",["='",'="']);return r||(s||c)&&u&&(f||d||g||p)}if("="===h[C]&&s(h,C,["'",'"'],{trimBeforeMatching:!0,trimCharsBeforeMatching:["="]}))return!0}else{let i;if(h[C-1]&&h[C-1].trim()&&"="!==h[C-1])i=C-1;else for(let t=C;t--;)if(h[t].trim()&&"="!==h[t]){i=t;break}if("="===h[C]&&s(h,C,["'",'"'],{cb:t=>!"/>".includes(t),trimBeforeMatching:!0,trimCharsBeforeMatching:["="]})&&e(h[i])&&!h.slice(m+1).startsWith("http")&&!h.slice(m+1,C).includes("/")&&!h.endsWith("src=",m)&&!h.endsWith("href=",m))return!1;if(C===o&&f(h,C+1))return!0;if(C<o&&"'\"".includes(h[C])&&y&&h[r(h,m)]&&"="!==h[r(h,m)]&&P===m&&t.has(y))return!1;if(C===o&&"'\"".includes(h[C])&&y&&b&&A%2==0&&b.endsWith(":"))return!0}if("'\"".includes(h[C])&&C>o)return!!(k&&y&&t.has(y));"'\"".includes(h[C])&&(M=C),g&&!e(h[C])&&(g=null)}return!1}export{m as isAttrClosing,h as version};
