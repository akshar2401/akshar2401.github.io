/*! For license information please see InPageNavigation.portfolio.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[708],{861:(e,t,r)=>{"use strict";r.d(t,{FT:()=>l,ZP:()=>i});var n=r(7294),a=r(5893);const s=["as","disabled"];function l({tagName:e,disabled:t,href:r,target:n,rel:a,role:s,onClick:l,tabIndex:o=0,type:i}){e||(e=null!=r||null!=n||null!=a?"a":"button");const c={tagName:e};if("button"===e)return[{type:i||"button",disabled:t},c];const u=n=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==l||l(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const o=n.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,o=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,s);const[i,{tagName:c}]=l(Object.assign({tagName:r,disabled:n},o));return(0,a.jsx)(c,Object.assign({},o,i,{ref:t}))}));o.displayName="Button";const i=o},2747:(e,t,r)=>{"use strict";function n(e){return`data-rr-ui-${e}`}function a(e){return`rrUi${e}`}r.d(t,{$F:()=>a,PB:()=>n})},3535:(e,t,r)=>{"use strict";r.d(t,{Z:()=>x});var n=r(930),a=r(7294),s=r(5654),l=r(6056),o=r(7126),i=r(6626),c=r(2747),u=r(3716),d=r(5893);const f=["as","onSelect","activeKey","role","onKeyDown"],v=()=>{},m=(0,c.PB)("event-key"),p=a.forwardRef(((e,t)=>{let{as:r="div",onSelect:u,activeKey:p,role:x,onKeyDown:b}=e,y=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,f);const g=(0,a.useReducer)((function(e){return!e}),!1)[1],h=(0,a.useRef)(!1),C=(0,a.useContext)(o.Z),k=(0,a.useContext)(i.Z);let E,N;k&&(x=x||"tablist",p=k.activeKey,E=k.getControlledId,N=k.getControllerId);const Z=(0,a.useRef)(null),j=e=>{const t=Z.current;if(!t)return null;const r=(0,n.Z)(t,`[${m}]:not([aria-disabled=true])`),a=t.querySelector("[aria-selected=true]");if(!a||a!==document.activeElement)return null;const s=r.indexOf(a);if(-1===s)return null;let l=s+e;return l>=r.length&&(l=0),l<0&&(l=r.length-1),r[l]},S=(e,t)=>{null!=e&&(null==u||u(e,t),null==C||C(e,t))};(0,a.useEffect)((()=>{if(Z.current&&h.current){const e=Z.current.querySelector(`[${m}][aria-selected=true]`);null==e||e.focus()}h.current=!1}));const w=(0,s.Z)(t,Z);return(0,d.jsx)(o.Z.Provider,{value:S,children:(0,d.jsx)(l.Z.Provider,{value:{role:x,activeKey:(0,o.h)(p),getControlledId:E||v,getControllerId:N||v},children:(0,d.jsx)(r,Object.assign({},y,{onKeyDown:e=>{if(null==b||b(e),!k)return;let t;switch(e.key){case"ArrowLeft":case"ArrowUp":t=j(-1);break;case"ArrowRight":case"ArrowDown":t=j(1);break;default:return}t&&(e.preventDefault(),S(t.dataset[(0,c.$F)("EventKey")]||null,e),h.current=!0,g())},ref:w,role:x}))})})}));p.displayName="Nav";const x=Object.assign(p,{Item:u.Z})},6056:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const n=r(7294).createContext(null);n.displayName="NavContext";const a=n},3716:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m,v:()=>f});var n=r(7294),a=r(8146),s=r(6056),l=r(7126),o=r(861),i=r(2747),c=r(6626),u=r(5893);const d=["as","active","eventKey"];function f({key:e,onClick:t,active:r,id:o,role:u,disabled:d}){const f=(0,n.useContext)(l.Z),v=(0,n.useContext)(s.Z),m=(0,n.useContext)(c.Z);let p=r;const x={role:u};if(v){u||"tablist"!==v.role||(x.role="tab");const t=v.getControllerId(null!=e?e:null),n=v.getControlledId(null!=e?e:null);x[(0,i.PB)("event-key")]=e,x.id=t||o,p=null==r&&null!=e?v.activeKey===e:r,!p&&(null!=m&&m.unmountOnExit||null!=m&&m.mountOnEnter)||(x["aria-controls"]=n)}return"tab"===x.role&&(x["aria-selected"]=p,p||(x.tabIndex=-1),d&&(x.tabIndex=-1,x["aria-disabled"]=!0)),x.onClick=(0,a.Z)((r=>{d||(null==t||t(r),null!=e&&f&&!r.isPropagationStopped()&&f(e,r))})),[x,{isActive:p}]}const v=n.forwardRef(((e,t)=>{let{as:r=o.ZP,active:n,eventKey:a}=e,s=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,d);const[c,v]=f(Object.assign({key:(0,l.h)(a,s.href),active:n},s));return c[(0,i.PB)("active")]=v.isActive,(0,u.jsx)(r,Object.assign({},s,c,{ref:t}))}));v.displayName="NavItem";const m=v},7126:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s,h:()=>a});var n=r(7294);const a=(e,t=null)=>null!=e?String(e):t||null,s=n.createContext(null)},6626:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=r(7294).createContext(null)},4184:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var o in r)n.call(r,o)&&r[o]&&e.push(o)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},930:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return n(e.querySelectorAll(t))}},9059:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});const n=r(7294).createContext(null);n.displayName="CardHeaderContext";const a=n},6792:(e,t,r)=>{"use strict";r.d(t,{SC:()=>u,pi:()=>i,vE:()=>o,zG:()=>c});var n=r(7294);r(5893);const a=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:s,Provider:l}=a;function o(e,t){const{prefixes:r}=(0,n.useContext)(a);return e||r[t]||t}function i(){const{breakpoints:e}=(0,n.useContext)(a);return e}function c(){const{minBreakpoint:e}=(0,n.useContext)(a);return e}function u(){const{dir:e}=(0,n.useContext)(a);return"rtl"===e}},9602:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(7294),a=r(4184),s=r.n(a),l=r(5893);const o=e=>n.forwardRef(((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:s()(t.className,e)})))},5251:(e,t,r)=>{"use strict";var n=r(7294),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,s={},c=null,u=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)l.call(t,n)&&!i.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:a,type:e,key:c,ref:u,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},5893:(e,t,r)=>{"use strict";e.exports=r(5251)},7963:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>_});var n=r(7294),a=r(4184),s=r.n(a),l=r(6792),o=r(4680),i=r(9602),c=r(5893);const u=n.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...a},o)=>{const i=(0,l.vE)(e,"card-img");return(0,c.jsx)(n,{ref:o,className:s()(r?`${i}-${r}`:i,t),...a})}));u.displayName="CardImg";const d=u;var f=r(9059);const v=n.forwardRef((({bsPrefix:e,className:t,as:r="div",...a},o)=>{const i=(0,l.vE)(e,"card-header"),u=(0,n.useMemo)((()=>({cardHeaderBsPrefix:i})),[i]);return(0,c.jsx)(f.Z.Provider,{value:u,children:(0,c.jsx)(r,{ref:o,...a,className:s()(t,i)})})}));v.displayName="CardHeader";const m=v,p=(0,i.Z)("h5"),x=(0,i.Z)("h6"),b=(0,o.Z)("card-body"),y=(0,o.Z)("card-title",{Component:p}),g=(0,o.Z)("card-subtitle",{Component:x}),h=(0,o.Z)("card-link",{Component:"a"}),C=(0,o.Z)("card-text",{Component:"p"}),k=(0,o.Z)("card-footer"),E=(0,o.Z)("card-img-overlay"),N=n.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:a,body:o,children:i,as:u="div",...d},f)=>{const v=(0,l.vE)(e,"card");return(0,c.jsx)(u,{ref:f,...d,className:s()(t,v,r&&`bg-${r}`,n&&`text-${n}`,a&&`border-${a}`),children:o?(0,c.jsx)(b,{children:i}):i})}));N.displayName="Card",N.defaultProps={body:!1};const Z=Object.assign(N,{Img:d,Title:y,Subtitle:g,Body:b,Link:h,Text:C,Header:m,Footer:k,ImgOverlay:E});r(2473);var j=r(8523),S=r(3535),w=r(8146),O=r(3716),P=r(7126);const I=n.forwardRef((({bsPrefix:e,active:t,disabled:r,eventKey:n,className:a,variant:o,action:i,as:u,...d},f)=>{e=(0,l.vE)(e,"list-group-item");const[v,m]=(0,O.v)({key:(0,P.h)(n,d.href),active:t,...d}),p=(0,w.Z)((e=>{if(r)return e.preventDefault(),void e.stopPropagation();v.onClick(e)}));r&&void 0===d.tabIndex&&(d.tabIndex=-1,d["aria-disabled"]=!0);const x=u||(i?d.href?"a":"button":"div");return(0,c.jsx)(x,{ref:f,...d,...v,onClick:p,className:s()(a,e,m.isActive&&"active",r&&"disabled",o&&`${e}-${o}`,i&&`${e}-action`)})}));I.displayName="ListGroupItem";const $=I,R=n.forwardRef(((e,t)=>{const{className:r,bsPrefix:n,variant:a,horizontal:o,numbered:i,as:u="div",...d}=(0,j.Ch)(e,{activeKey:"onSelect"}),f=(0,l.vE)(n,"list-group");let v;return o&&(v=!0===o?"horizontal":`horizontal-${o}`),(0,c.jsx)(S.Z,{ref:t,...d,as:u,className:s()(r,f,a&&`${f}-${a}`,v&&`${f}-${v}`,i&&`${f}-numbered`)})}));R.displayName="ListGroup";const F=Object.assign(R,{Item:$});var L=r(5916);const _=e=>{const[t,r]=n.useState(0),[a,s]=n.useState(!1),l=n.useCallback((()=>{e.useExpandCollapse&&s((e=>!e))}),[]),o=n.useCallback((()=>{(null==e?void 0:e.useExpandCollapse)&&(L.M9.matchesSmall()||L.M9.matchesExtraSmall())&&s(!1)}),[]),i=n.useCallback((()=>{(null==e?void 0:e.useExpandCollapse)&&(L.M9.matchesSmall()||L.M9.matchesExtraSmall()||s(!0))}),[]);return n.useEffect((()=>{L.M9.matchesExtraSmall()||L.M9.matchesSmall()?o():i();const e=[L.M9.addListenerForExtraSmall(o),L.M9.addListenerForSmall(o),L.M9.addListenerForMedium(i),L.M9.addListenerForLarge(i),L.M9.addListenerForExtraLarge(i),L.M9.addListenerFor2ExtraLarge(i)];return()=>{e.forEach((e=>e.dispose()))}}),[]),n.createElement(n.Fragment,null,n.createElement(Z,{bg:"dark",text:"light",style:{width:"100%"}},n.createElement(Z.Header,{className:"d-flex align-items-center justify-content-between",onClick:l,style:{cursor:"pointer"}},e.header,function(e,t,r){return(null==e?void 0:e.useExpandCollapse)?n.createElement(n.Fragment,null,t?n.createElement("i",{className:"fa fa-solid fa-chevron-up",style:{cursor:"pointer"}}):n.createElement("i",{className:"fa fa-solid fa-chevron-down",style:{cursor:"pointer"}})):null}(e,a)),function(e,t,r,a){let s=e.items.map(((e,t)=>[e,t]));return(null==e?void 0:e.useExpandCollapse)&&!t&&(s=s.filter((e=>e[1]===r))),n.createElement(n.Fragment,null,n.createElement(F,{variant:"flush"},s.map((t=>n.createElement(F.Item,{variant:"secondary",onClick:()=>{var r;null===(r=e.onItemClick)||void 0===r||r.call(e,t[1],e.items),a(t[1])},active:t[1]===r,action:!0,key:t[0]},t[0])))))}(e,a,t,r)))}},2473:e=>{"use strict";e.exports=function(){}}}]);