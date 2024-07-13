/*! This file is auto-generated */
(()=>{"use strict";var e={d:(t,o)=>{for(var a in o)e.o(o,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:o[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{privateApis:()=>B});const o=window.wp.commands,a=window.wp.i18n,n=window.React,s=window.wp.primitives,r=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M11 12.5V17.5H12.5V12.5H17.5V11H12.5V6H11V11H6V12.5H11Z"})),c=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-1 1.4l-5.6 5.6c-.1.1-.3.1-.4 0l-5.6-5.6c-.1-.1-.1-.3 0-.4l5.6-5.6s.1-.1.2-.1.1 0 .2.1l5.6 5.6c.1.1.1.3 0 .4zm-16.6-.4L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"})),i=window.wp.url,l=window.wp.router,d=window.wp.coreData,p=window.wp.data;function m(){return(0,p.useSelect)((e=>e(d.store).canUser("read","templates")),[])}function u(){return(0,p.useSelect)((e=>e(d.store).getCurrentTheme()?.is_block_theme),[])}const w=window.wp.privateApis,{lock:h,unlock:g}=(0,w.__dangerousOptInToUnstableAPIsOnlyForCoreModules)("I know using unstable features means my theme or plugin will inevitably break in the next version of WordPress.","@wordpress/core-commands"),{useHistory:v}=g(l.privateApis);const b=window.wp.element,y=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"m7.3 9.7 1.4 1.4c.2-.2.3-.3.4-.5 0 0 0-.1.1-.1.3-.5.4-1.1.3-1.6L12 7 9 4 7.2 6.5c-.6-.1-1.1 0-1.6.3 0 0-.1 0-.1.1-.3.1-.4.2-.6.4l1.4 1.4L4 11v1h1l2.3-2.3zM4 20h9v-1.5H4V20zm0-5.5V16h16v-1.5H4z"})),_=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M15.5 7.5h-7V9h7V7.5Zm-7 3.5h7v1.5h-7V11Zm7 3.5h-7V16h7v-1.5Z"}),(0,n.createElement)(s.Path,{d:"M17 4H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM7 5.5h10a.5.5 0 0 1 .5.5v12a.5.5 0 0 1-.5.5H7a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5Z"})),f=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M18 5.5H6a.5.5 0 00-.5.5v3h13V6a.5.5 0 00-.5-.5zm.5 5H10v8h8a.5.5 0 00.5-.5v-7.5zm-10 0h-3V18a.5.5 0 00.5.5h2.5v-8zM6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"})),L=(0,n.createElement)(s.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(s.Path,{d:"M21.3 10.8l-5.6-5.6c-.7-.7-1.8-.7-2.5 0l-5.6 5.6c-.7.7-.7 1.8 0 2.5l5.6 5.6c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5.6-5.6c.8-.7.8-1.9.1-2.5zm-17.6 1L10 5.5l-1-1-6.3 6.3c-.7.7-.7 1.8 0 2.5L9 19.5l1.1-1.1-6.3-6.3c-.2 0-.2-.2-.1-.3z"})),V=(0,n.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(s.Path,{d:"M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14.5c-3.6 0-6.5-2.9-6.5-6.5S8.4 5.5 12 5.5s6.5 2.9 6.5 6.5-2.9 6.5-6.5 6.5zM9 16l4.5-3L15 8.4l-4.5 3L9 16z"})),P=(0,n.createElement)(s.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)(s.Path,{d:"M12 4c-4.4 0-8 3.6-8 8v.1c0 4.1 3.2 7.5 7.2 7.9h.8c4.4 0 8-3.6 8-8s-3.6-8-8-8zm0 15V5c3.9 0 7 3.1 7 7s-3.1 7-7 7z"})),k=window.wp.compose;const{useHistory:E,useLocation:A}=g(l.privateApis),S={post:y,page:_,wp_template:f,wp_template_part:L};const M=e=>function({search:t}){const o=E(),n=u(),s=function(e){const[t,o]=(0,b.useState)(""),a=(0,k.useDebounce)(o,250);return(0,b.useEffect)((()=>(a(e),()=>a.cancel())),[a,e]),t}(t),{records:r,isLoading:c}=(0,p.useSelect)((t=>{if(!s)return{isLoading:!1};const o={search:s,per_page:10,orderby:"relevance",status:["publish","future","draft","pending","private"]};return{records:t(d.store).getEntityRecords("postType",e,o),isLoading:!t(d.store).hasFinishedResolution("getEntityRecords",["postType",e,o])}}),[s]);return{commands:(0,b.useMemo)((()=>(null!=r?r:[]).map((t=>{const s={name:e+"-"+t.id,searchLabel:t.title?.rendered+" "+t.id,label:t.title?.rendered?t.title?.rendered:(0,a.__)("(no title)"),icon:S[e]};if("post"===e||"page"===e&&!n)return{...s,callback:({close:e})=>{const o={post:t.id,action:"edit"},a=(0,i.addQueryArgs)("post.php",o);document.location=a,e()}};const r=(0,i.getPath)(window.location.href)?.includes("site-editor.php"),c=r?{canvas:(0,i.getQueryArg)(window.location.href,"canvas")}:{};return{...s,callback:({close:a})=>{const n={postType:e,postId:t.id,...c},s=(0,i.addQueryArgs)("site-editor.php",n);r?o.push(n):document.location=s,a()}}}))),[r,n,o]),isLoading:c}},x=e=>function({search:t}){const o=E(),n=A(),s="/patterns"===n?.params?.path||"wp_block"===n?.params?.postType,r=!!n?.params?.didAccessPatternsPage,c=u(),{records:l,isLoading:m}=(0,p.useSelect)((t=>{const{getEntityRecords:o}=t(d.store),a={per_page:-1};return{records:o("postType",e,a),isLoading:!t(d.store).hasFinishedResolution("getEntityRecords",["postType",e,a])}}),[]),w=(0,b.useMemo)((()=>function(e=[],t=""){if(!Array.isArray(e)||!e.length)return[];if(!t)return e;const o=[],a=[];for(let n=0;n<e.length;n++){const s=e[n];s?.title?.raw?.toLowerCase()?.includes(t?.toLowerCase())?o.push(s):a.push(s)}return o.concat(a)}(l,t).slice(0,10)),[l,t]);return{commands:(0,b.useMemo)((()=>c||"wp_template_part"!==!e?w.map((t=>{const n=(0,i.getPath)(window.location.href)?.includes("site-editor.php"),l=n?{canvas:(0,i.getQueryArg)(window.location.href,"canvas")}:{};return{name:e+"-"+t.id,searchLabel:t.title?.rendered+" "+t.id,label:t.title?.rendered?t.title?.rendered:(0,a.__)("(no title)"),icon:S[e],callback:({close:a})=>{const d={postType:e,postId:t.id,didAccessPatternsPage:c||!s&&!r?void 0:1,...l},p=(0,i.addQueryArgs)("site-editor.php",d);n?o.push(d):document.location=p,a()}}})):[]),[c,w,o]),isLoading:m}},z=M("page"),H=M("post"),C=x("wp_template"),T=x("wp_template_part");function Q(){const e=E(),t=(0,i.getPath)(window.location.href)?.includes("site-editor.php"),o=m(),n=u();return{commands:(0,b.useMemo)((()=>{const s=[];return o&&n?(s.push({name:"core/edit-site/open-navigation",label:(0,a.__)("Navigation"),icon:V,callback:({close:o})=>{const a={path:"/navigation"},n=(0,i.addQueryArgs)("site-editor.php",a);t?e.push(a):document.location=n,o()}}),s.push({name:"core/edit-site/open-styles",label:(0,a.__)("Styles"),icon:P,callback:({close:o})=>{const a={path:"/wp_global_styles"},n=(0,i.addQueryArgs)("site-editor.php",a);t?e.push(a):document.location=n,o()}}),s.push({name:"core/edit-site/open-pages",label:(0,a.__)("Pages"),icon:_,callback:({close:o})=>{const a={path:"/page"},n=(0,i.addQueryArgs)("site-editor.php",a);t?e.push(a):document.location=n,o()}}),s.push({name:"core/edit-site/open-templates",label:(0,a.__)("Templates"),icon:f,callback:({close:o})=>{const a={path:"/wp_template"},n=(0,i.addQueryArgs)("site-editor.php",a);t?e.push(a):document.location=n,o()}}),s):s}),[e,t,o,n]),isLoading:!1}}const B={};h(B,{useCommands:function(){!function(){const e=v(),t=m(),n=u(),s=(0,i.getPath)(window.location.href)?.includes("site-editor.php");(0,o.useCommand)({name:"core/add-new-post",label:(0,a.__)("Add new post"),icon:r,callback:()=>{document.location.href="post-new.php"}}),(0,o.useCommand)({name:"core/add-new-page",label:(0,a.__)("Add new page"),icon:r,callback:()=>{document.location.href="post-new.php?post_type=page"}}),(0,o.useCommand)({name:"core/manage-reusable-blocks",label:(0,a.__)("Patterns"),icon:c,callback:({close:o})=>{if(t&&n){const t={path:"/patterns"};s?e.push(t):document.location=(0,i.addQueryArgs)("site-editor.php",t),o()}else document.location.href="edit.php?post_type=wp_block"}})}(),(0,o.useCommandLoader)({name:"core/edit-site/navigate-pages",hook:z}),(0,o.useCommandLoader)({name:"core/edit-site/navigate-posts",hook:H}),(0,o.useCommandLoader)({name:"core/edit-site/navigate-templates",hook:C}),(0,o.useCommandLoader)({name:"core/edit-site/navigate-template-parts",hook:T}),(0,o.useCommandLoader)({name:"core/edit-site/basic-navigation",hook:Q,context:"site-editor"})}}),(window.wp=window.wp||{}).coreCommands=t})();