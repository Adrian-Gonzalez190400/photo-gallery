System.register([],(function(e,t){"use strict";return{execute:function(){var t=globalThis&&globalThis.__spreadArrays||function(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),s=0;for(t=0;t<r;t++)for(var o=arguments[t],c=0,i=o.length;c<i;c++,s++)n[s]=o[c];return n},r="-shadowcsshost",n="-shadowcssslotted",s="-shadowcsscontext",o=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",c=new RegExp("("+r+o,"gim"),i=new RegExp("("+s+o,"gim"),a=new RegExp("("+n+o,"gim"),u=r+"-no-combinator",l=/-shadowcsshost-no-combinator([^\s]*)/,f=[/::shadow/g,/::content/g],p=/-shadowcsshost/gim,h=/:host/gim,g=/::slotted/gim,v=/:host-context/gim,d=/\/\*\s*[\s\S]*?\*\//g,m=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,x=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,_=/([{}])/g,w="%BLOCK%",S=function(e,t){var r=b(e),n=0;return r.escapedString.replace(x,(function(){for(var e=[],s=0;s<arguments.length;s++)e[s]=arguments[s];var o=e[2],c="",i=e[4],a="";i&&i.startsWith("{"+w)&&(c=r.blocks[n++],i=i.substring(8),a="{");var u=t({selector:o,content:c});return""+e[1]+u.selector+e[3]+a+u.content+i}))},b=function(e){for(var t=e.split(_),r=[],n=[],s=0,o=[],c=0;c<t.length;c++){var i=t[c];"}"===i&&s--,s>0?o.push(i):(o.length>0&&(n.push(o.join("")),r.push(w),o=[]),r.push(i)),"{"===i&&s++}return o.length>0&&(n.push(o.join("")),r.push(w)),{escapedString:r.join(""),blocks:n}},W=function(e,t,r){return e.replace(t,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e[2]){for(var n=e[2].split(","),s=[],o=0;o<n.length;o++){var c=n[o].trim();if(!c)break;s.push(r(u,c,e[3]))}return s.join(",")}return u+e[3]}))},O=function(e,t,n){return e+t.replace(r,"")+n},j=function(e,t,n){return t.indexOf(r)>-1?O(e,t,n):e+t+n+", "+t+" "+e+n},E=function(e,t){var r=function(e){return e=e.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+e+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(t);return!r.test(e)},R=function(e,t,r){t=t.replace(/\[is=([^\]]*)\]/g,(function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return t[0]}));for(var n,s="."+t,o=function(e){var n=e.trim();if(!n)return"";if(e.indexOf(u)>-1)n=function(e,t,r){if(p.lastIndex=0,p.test(e)){var n="."+r;return e.replace(l,(function(e,t){return t.replace(/([^:]*)(:*)(.*)/,(function(e,t,r,s){return t+n+r+s}))})).replace(p,n+" ")}return t+" "+e}(e,t,r);else{var o=e.replace(p,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(n=c[1]+s+c[2]+c[3])}}return n},c=function(e){var t=[],r=0;return{content:(e=e.replace(/(\[[^\]]*\])/g,(function(e,n){var s="__ph-"+r+"__";return t.push(n),r++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(e,n,s){var o="__ph-"+r+"__";return t.push(s),r++,n+o})),placeholders:t}}(e),i="",a=0,f=/( |>|\+|~(?!=))\s*/g,h=!((e=c.content).indexOf(u)>-1);null!==(n=f.exec(e));){var g=n[1],v=e.slice(a,n.index).trim();i+=((h=h||v.indexOf(u)>-1)?o(v):v)+" "+g+" ",a=f.lastIndex}var d,m=e.substring(a);return i+=(h=h||m.indexOf(u)>-1)?o(m):m,d=c.placeholders,i.replace(/__ph-(\d+)__/g,(function(e,t){return d[+t]}))},T=function(e,t,r,n,s){return S(e,(function(e){var s=e.selector,o=e.content;return"@"!==e.selector[0]?s=function(e,t,r,n){return e.split(",").map((function(e){return n&&e.indexOf("."+n)>-1?e.trim():E(e,t)?R(e,t,r).trim():e.trim()})).join(", ")}(e.selector,t,r,n):(e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document"))&&(o=T(e.content,t,r,n)),{selector:s.replace(/\s{2,}/g," ").trim(),content:o}}))},k=function(e,t,o,l,p){var d=function(e,t){var r="."+t+" > ",n=[];return e=e.replace(a,(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];if(e[2]){for(var s=e[2].trim(),o=e[3],c=r+s+o,i="",a=e[4]-1;a>=0;a--){var l=e[5][a];if("}"===l||","===l)break;i=l+i}var f=i+c,p=""+i.trimRight()+c.trim();if(f.trim()!==p.trim()){var h=p+", "+f;n.push({orgSelector:f,updatedSelector:h})}return c}return u+e[3]})),{selectors:n,cssText:e}}(e=function(e){return W(e,i,j)}(e=function(e){return W(e,c,O)}(e=e.replace(v,s).replace(h,r).replace(g,n))),l);return e=function(e){return f.reduce((function(e,t){return e.replace(t," ")}),e)}(e=d.cssText),t&&(e=T(e,t,o,l)),{cssText:(e=(e=e.replace(/-shadowcsshost-no-combinator/g,"."+o)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:d.selectors}};
/**
             * @license
             * Copyright Google Inc. All Rights Reserved.
             *
             * Use of this source code is governed by an MIT-style license that can be
             * found in the LICENSE file at https://angular.io/license
             *
             * This file is a port of shadowCSS from webcomponents.js to TypeScript.
             * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
             * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
             */e("scopeCss",(function(e,r,n){var s=r+"-h",o=r+"-s",c=e.match(m)||[];e=function(e){return e.replace(d,"")}(e);var i=[];if(n){var a=function(e){var t="/*!@___"+i.length+"___*/",r="/*!@"+e.selector+"*/";return i.push({placeholder:t,comment:r}),e.selector=t+e.selector,e};e=S(e,(function(e){return"@"!==e.selector[0]?a(e):e.selector.startsWith("@media")||e.selector.startsWith("@supports")||e.selector.startsWith("@page")||e.selector.startsWith("@document")?(e.content=S(e.content,a),e):e}))}var u=k(e,r,s,o);return e=t([u.cssText],c).join("\n"),n&&i.forEach((function(t){var r=t.placeholder,n=t.comment;e=e.replace(r,n)})),u.slottedSelectors.forEach((function(t){e=e.replace(t.orgSelector,t.updatedSelector)})),e}))}}}));
