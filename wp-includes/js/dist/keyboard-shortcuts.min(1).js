/*! This file is auto-generated */
(()=>{"use strict";var e={d:(t,n)=>{for(var r in n)e.o(n,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:n[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{ShortcutProvider:()=>_,__unstableUseShortcutEventMatch:()=>T,store:()=>C,useShortcut:()=>O});var n={};e.r(n),e.d(n,{registerShortcut:()=>i,unregisterShortcut:()=>c});var r={};e.r(r),e.d(r,{getAllShortcutKeyCombinations:()=>v,getAllShortcutRawKeyCombinations:()=>b,getCategoryShortcuts:()=>R,getShortcutAliases:()=>m,getShortcutDescription:()=>g,getShortcutKeyCombination:()=>S,getShortcutRepresentation:()=>w});const o=window.wp.data;const a=function(e={},t){switch(t.type){case"REGISTER_SHORTCUT":return{...e,[t.name]:{category:t.category,keyCombination:t.keyCombination,aliases:t.aliases,description:t.description}};case"UNREGISTER_SHORTCUT":const{[t.name]:n,...r}=e;return r}return e};function i({name:e,category:t,description:n,keyCombination:r,aliases:o}){return{type:"REGISTER_SHORTCUT",name:e,category:t,keyCombination:r,aliases:o,description:n}}function c(e){return{type:"UNREGISTER_SHORTCUT",name:e}}var u={};function s(e){return[e]}function l(e,t,n){var r;if(e.length!==t.length)return!1;for(r=n;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function d(e,t){var n,r=t||s;function o(){n=new WeakMap}function a(){var t,o,a,i,c,s=arguments.length;for(i=new Array(s),a=0;a<s;a++)i[a]=arguments[a];for(t=function(e){var t,r,o,a,i,c=n,s=!0;for(t=0;t<e.length;t++){if(!(i=r=e[t])||"object"!=typeof i){s=!1;break}c.has(r)?c=c.get(r):(o=new WeakMap,c.set(r,o),c=o)}return c.has(u)||((a=function(){var e={clear:function(){e.head=null}};return e}()).isUniqueByDependants=s,c.set(u,a)),c.get(u)}(c=r.apply(null,i)),t.isUniqueByDependants||(t.lastDependants&&!l(c,t.lastDependants,0)&&t.clear(),t.lastDependants=c),o=t.head;o;){if(l(o.args,i,1))return o!==t.head&&(o.prev.next=o.next,o.next&&(o.next.prev=o.prev),o.next=t.head,o.prev=null,t.head.prev=o,t.head=o),o.val;o=o.next}return o={val:e.apply(null,i)},i[0]=null,o.args=i,t.head&&(t.head.prev=o,o.next=t.head),t.head=o,o.val}return a.getDependants=r,a.clear=o,o(),a}const f=window.wp.keycodes,p=[],y={display:f.displayShortcut,raw:f.rawShortcut,ariaLabel:f.shortcutAriaLabel};function h(e,t){return e?e.modifier?y[t][e.modifier](e.character):e.character:null}function S(e,t){return e[t]?e[t].keyCombination:null}function w(e,t,n="display"){return h(S(e,t),n)}function g(e,t){return e[t]?e[t].description:null}function m(e,t){return e[t]&&e[t].aliases?e[t].aliases:p}const v=d(((e,t)=>[S(e,t),...m(e,t)].filter(Boolean)),((e,t)=>[e[t]])),b=d(((e,t)=>v(e,t).map((e=>h(e,"raw")))),((e,t)=>[e[t]])),R=d(((e,t)=>Object.entries(e).filter((([,e])=>e.category===t)).map((([e])=>e))),(e=>[e])),C=(0,o.createReduxStore)("core/keyboard-shortcuts",{reducer:a,actions:n,selectors:r});(0,o.register)(C);const E=window.wp.element;function T(){const{getAllShortcutKeyCombinations:e}=(0,o.useSelect)(C);return function(t,n){return e(t).some((({modifier:e,character:t})=>f.isKeyboardEvent[e](n,t)))}}const k=new Set,D=e=>{for(const t of k)t(e)},x=(0,E.createContext)({add:e=>{0===k.size&&document.addEventListener("keydown",D),k.add(e)},delete:e=>{k.delete(e),0===k.size&&document.removeEventListener("keydown",D)}});function O(e,t,{isDisabled:n=!1}={}){const r=(0,E.useContext)(x),o=T(),a=(0,E.useRef)();(0,E.useEffect)((()=>{a.current=t}),[t]),(0,E.useEffect)((()=>{if(!n)return r.add(t),()=>{r.delete(t)};function t(t){o(e,t)&&a.current(t)}}),[e,n,r])}const U=window.React,{Provider:K}=x;function _(e){const[t]=(0,E.useState)((()=>new Set));return(0,U.createElement)(K,{value:t},(0,U.createElement)("div",{...e,onKeyDown:function(n){e.onKeyDown&&e.onKeyDown(n);for(const e of t)e(n)}}))}(window.wp=window.wp||{}).keyboardShortcuts=t})();