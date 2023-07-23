/*! For license information please see ProgressBar.portfolio.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[334],{4184:(e,r)=>{var t;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var a=typeof t;if("string"===a||"number"===a)e.push(t);else if(Array.isArray(t)){if(t.length){var s=i.apply(null,t);s&&e.push(s)}}else if("object"===a){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var l in t)n.call(t,l)&&t[l]&&e.push(l)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(t=function(){return i}.apply(r,[]))||(e.exports=t)}()},3439:(e,r,t)=>{"use strict";t.d(r,{Ed:()=>a,UI:()=>i});var n=t(7294);function i(e,r){let t=0;return n.Children.map(e,(e=>n.isValidElement(e)?r(e,t++):e))}function a(e,r){let t=0;n.Children.forEach(e,(e=>{n.isValidElement(e)&&r(e,t++)}))}},6792:(e,r,t)=>{"use strict";t.d(r,{SC:()=>c,pi:()=>o,vE:()=>l,zG:()=>u});var n=t(7294);t(5893);const i=n.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:a,Provider:s}=i;function l(e,r){const{prefixes:t}=(0,n.useContext)(i);return e||t[r]||r}function o(){const{breakpoints:e}=(0,n.useContext)(i);return e}function u(){const{minBreakpoint:e}=(0,n.useContext)(i);return e}function c(){const{dir:e}=(0,n.useContext)(i);return"rtl"===e}},5251:(e,r,t)=>{"use strict";var n=t(7294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(e,r,t){var n,a={},u=null,c=null;for(n in void 0!==t&&(u=""+t),void 0!==r.key&&(u=""+r.key),void 0!==r.ref&&(c=r.ref),r)s.call(r,n)&&!o.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:i,type:e,key:u,ref:c,props:a,_owner:l.current}}r.Fragment=a,r.jsx=u,r.jsxs=u},5893:(e,r,t)=>{"use strict";e.exports=t(5251)},5393:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>p});var n=t(7294),i=t(4184),a=t.n(i),s=t(6792),l=t(3439),o=t(5893);function u(e,r,t){const n=(e-r)/(t-r)*100;return Math.round(1e3*n)/1e3}function c({min:e,now:r,max:t,label:n,visuallyHidden:i,striped:s,animated:l,className:c,style:d,variant:f,bsPrefix:p,...m},x){return(0,o.jsx)("div",{ref:x,...m,role:"progressbar",className:a()(c,`${p}-bar`,{[`bg-${f}`]:f,[`${p}-bar-animated`]:l,[`${p}-bar-striped`]:l||s}),style:{width:`${u(r,e,t)}%`,...d},"aria-valuenow":r,"aria-valuemin":e,"aria-valuemax":t,children:i?(0,o.jsx)("span",{className:"visually-hidden",children:n}):n})}const d=n.forwardRef((({isChild:e,...r},t)=>{if(r.bsPrefix=(0,s.vE)(r.bsPrefix,"progress"),e)return c(r,t);const{min:i,now:u,max:d,label:f,visuallyHidden:p,striped:m,animated:x,bsPrefix:v,variant:h,className:y,children:b,...g}=r;return(0,o.jsx)("div",{ref:t,...g,className:a()(y,v),children:b?(0,l.UI)(b,(e=>(0,n.cloneElement)(e,{isChild:!0}))):c({min:i,now:u,max:d,label:f,visuallyHidden:p,striped:m,animated:x,bsPrefix:v,variant:h},t)})}));d.displayName="ProgressBar",d.defaultProps={min:0,max:100,animated:!1,isChild:!1,visuallyHidden:!1,striped:!1};const f=d,p=e=>n.createElement(n.Fragment,null,n.createElement("div",{className:"d-flex text-light align-items-center"},n.createElement("span",{style:{fontSize:"15px",paddingRight:"10px"}},"Low (",e.min||0,"%)"),n.createElement(f,{className:"flex-grow-1",min:e.min||0,max:e.max||100,variant:"success",striped:!0,style:{height:"1.5rem",fontSize:"15px"},label:`${e.current}% Proficiency`,now:e.current}),n.createElement("span",{style:{fontSize:"15px",paddingLeft:"10px"}},"High (",e.max||100,"%)")))}}]);