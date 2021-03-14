/**
 * edit-package-json
 * Edit package.json without parsing, as string, to keep the formatting intact
 * Version: 0.3.8
 * Author: Roy Revelt, Codsen Ltd
 * License: MIT
 * Homepage: https://codsen.com/os/edit-package-json/
 */

import{left as n,right as t,chompLeft as l}from"string-left-right";import{rApply as e}from"ranges-apply";const i="0.3.8";function r(n){return"string"==typeof n}function u(n){return Array.isArray(n)?n.join("."):r(n)?n:String(n)}function s(n,t){if("\\"!==n[t])return!0;const e=l(n,t,{mode:1},"\\");return"number"==typeof e&&(t-e)%2!=0}function f({str:l,path:i,valToInsert:f,mode:o}){let g=0;const y=l.length,p=[],m=["{","}","[","]",":",","];let h=f;!r(f)||f.startsWith('"')||f.startsWith("{")||(h=`"${f}"`);const c=[],O=[];let b,S=!1,J=!1,N=!1,a=null,d=null,$=null,j=null,v=null,w=null,I=!1;const W=[];function A(){a=null,d=null,$=null,j=null,v=null,w=null}A();const T=[];for(g=0;g<y;g++){if(l[g]&&l[g].trim()||JSON.stringify(l[g],null,0),"number"!=typeof b&&"["===l[g-1]&&(J=!0,"]"!==l[g]&&(S=!1)),"number"!=typeof b&&"{"===l[g-1]&&(S=!0,"}"!==l[g]&&(J=!1)),"number"!=typeof b&&"{"===l[g]&&s(l,g-1)&&!N&&(J&&(I||(JSON.stringify(T,null,4),T[T.length-1]=T[T.length-1]+1)),c.push(g),JSON.stringify(c,null,4)),"number"!=typeof b&&"}"===l[g]&&s(l,g-1)&&!N&&(c.pop(),JSON.stringify(c,null,4)),"number"!=typeof b&&"]"===l[g]&&s(l,g-1)&&!N&&(O.pop(),JSON.stringify(O,null,4),T.pop(),JSON.stringify(T,null,4),A(),I&&(I=!1)),"number"!=typeof b&&"]"===l[g]&&(O.length?O.length&&(!c.length||O[O.length-1]>c[c.length-1])&&(J=!0):(J=!1,c.length&&!S&&(S=!0))),"number"!=typeof b&&"}"===l[g]&&(c.length?(!O.length||c[c.length-1]>O[O.length-1])&&(S=!0):S=!1),J&&u(i)===T.join(".")&&!N&&l[g].trim()&&(N=!0,$=g),"number"!=typeof b&&"["===l[g]&&s(l,g-1)&&!N&&(O.push(g),I=!0,JSON.stringify(O,null,4),T.push(0),JSON.stringify(T,null,0)),J&&","===l[g]&&I&&("number"!=typeof $||null!==j)&&(I=!1),N||null!==$||!l[g].trim()||m.includes(l[g])||!J&&(J||null===v)||($=g,J&&(I?I=!1:"number"==typeof T[T.length-1]&&(T[T.length-1]=T[T.length-1]+1))),!N&&"number"!=typeof b&&(J||!J&&null!==v)&&"number"==typeof $&&$<g&&null===j&&('"'===l[$]&&'"'===l[g]&&"\\"!==l[g-1]||'"'!==l[$]&&!l[g].trim()||["}",","].includes(l[g]))&&(w=l.slice($,'"'===l[$]?g+1:g),j=g),N||J||'"'!==l[g]||"\\"===l[g-1]||null!==v||null!==a||null!==d||!l[g+1]||(a=g+1),!N&&!J&&'"'===l[g]&&"\\"!==l[g-1]&&null===d&&"number"==typeof a&&null===$&&a<g&&(d=g+1,v=l.slice(a,g),T.push(v),JSON.stringify(T,null,4),u(i)===T.join(".")&&(N=!0)),!N&&"number"!=typeof b&&","===l[g]&&S&&(T.pop(),JSON.stringify(T,null,0)),!N&&("number"==typeof j&&g>=j||["}","]"].includes(l[n(l,g)])&&["}","]"].includes(l[g])||"}"===l[g]&&"{"===l[n(l,g)])&&l[g].trim()&&(","!==l[g]||["}","]"].includes(l[t(l,g)])?"}"===l[g]&&((j||"{"!==l[n(l,g)])&&(T.pop(),JSON.stringify(T,null,0)),O.length&&c.length&&O[O.length-1]>c[c.length-1]&&(S=!1,J=!0),A()):A()),!N&&"{"===l[g]&&r(v)&&null===$&&null===w&&A(),l[g].trim()&&N&&null===$&&"number"==typeof d&&g>d&&![":"].includes(l[g])&&($=g),'"'===l[g]&&s(l,g-1)&&("number"==typeof a&&null===d||"number"==typeof $&&null===j)&&"number"!=typeof b&&(b=g),W.length&&l[g]===W[W.length-1]&&s(l,g-1)?(W.pop(),JSON.stringify(W,null,4)):"number"==typeof b&&b!==g||!N||J||"number"!=typeof $||("{"===l[g]&&s(l,g-1)?(W.push("}"),JSON.stringify(W,null,4)):"["===l[g]&&s(l,g-1)?(W.push("]"),JSON.stringify(W,null,4)):'"'===l[g]&&s(l,g-1)&&(W.push('"'),JSON.stringify(W,null,4))),'"'===l[g]&&s(l,g-1)&&"number"==typeof b&&b!==g&&(b=void 0),N&&Array.isArray(W)&&!W.length&&"number"==typeof $&&g>$&&"number"!=typeof b&&("["===l[$]&&"]"===l[g]||"{"===l[$]&&"}"===l[g]||'"'===l[$]&&'"'===l[g]||!["[","{",'"'].includes(l[$])&&l[$].trim()&&(!l[g].trim()||m.includes(l[g])&&s(l,g-1)))){if(JSON.stringify(l[$],null,4),"set"===o){let n="";l.slice($,g+(l[g].trim()?1:0)).includes("\n")&&"\n"!==l[g+(l[g].trim()?1:0)]&&(n="\n");let e=g+(l[g].trim()?1:0);return(J&&!['"',"[","{"].includes(l[$])&&"]"!==l[t(l,e-1)]||","===l[e-1]&&'"'!==l[$-1])&&(e-=1),J&&'"'===l[$-1]&&($-=1),`${l.slice(0,$)}${_=h,r(_)&&_.startsWith('"')&&_.endsWith('"')?`${JSON.stringify(_.slice(1,_.length-1),null,0)}`:JSON.stringify(_,null,0)}${n}${l.slice(e)}`}if("del"===o){JSON.stringify(a,null,4);let e=n(l,(J?$:a)-1);"number"==typeof e&&e++;let i=g+(l[g].trim()?1:0);"number"==typeof e&&","===l[e-1]&&["}","]"].includes(l[t(l,i-1)])&&(e-=1),","===l[i]&&(i+=1),JSON.stringify(e,null,4),JSON.stringify(i,null,4),p.push([e,i]),JSON.stringify(p,null,4);break}}W&&JSON.stringify(W,null,0),JSON.stringify(T.join("."),null,0),JSON.stringify(O,null,0),JSON.stringify(c,null,0)}var _;return JSON.stringify(e(l,p),null,4),e(l,p)}function o(n,t,l){if(!r(n)||!n.length)throw new Error(`edit-package-json/set(): [THROW_ID_01] first input argument must be a non-empty string. It was given as ${JSON.stringify(n,null,4)} (type ${typeof n})`);return f({str:n,path:t,valToInsert:l,mode:"set"})}function g(n,t){if(!r(n)||!n.length)throw new Error(`edit-package-json/del(): [THROW_ID_02] first input argument must be a non-empty string. It was given as ${JSON.stringify(n,null,4)} (type ${typeof n})`);return f({str:n,path:t,mode:"del"})}export{g as del,o as set,i as version};
