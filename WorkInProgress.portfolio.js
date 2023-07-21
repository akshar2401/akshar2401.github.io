/*! For license information please see WorkInProgress.portfolio.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[486],{4184:(e,t)=>{var r;!function(){"use strict";var s={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var a=n.apply(null,r);a&&e.push(a)}}else if("object"===o){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var l in r)s.call(r,l)&&r[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},1555:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(4184),n=r.n(s),o=r(7294),a=r(6792),l=r(5893);const c=o.forwardRef(((e,t)=>{const[{className:r,...s},{as:o="div",bsPrefix:c,spans:i}]=function({as:e,bsPrefix:t,className:r,...s}){t=(0,a.vE)(t,"col");const o=(0,a.pi)(),l=(0,a.zG)(),c=[],i=[];return o.forEach((e=>{const r=s[e];let n,o,a;delete s[e],"object"==typeof r&&null!=r?({span:n,offset:o,order:a}=r):n=r;const u=e!==l?`-${e}`:"";n&&c.push(!0===n?`${t}${u}`:`${t}${u}-${n}`),null!=a&&i.push(`order${u}-${a}`),null!=o&&i.push(`offset${u}-${o}`)})),[{...s,className:n()(r,...c,...i)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,l.jsx)(o,{...s,ref:t,className:n()(r,!i.length&&c)})}));c.displayName="Col";const i=c},682:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(4184),n=r.n(s),o=r(7294),a=r(6792),l=r(5893);const c=o.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:s,...o},c)=>{const i=(0,a.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,l.jsx)(r,{ref:c,...o,className:n()(s,t?`${i}${u}`:i)})}));c.displayName="Container",c.defaultProps={fluid:!1};const i=c},4051:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var s=r(4184),n=r.n(s),o=r(7294),a=r(6792),l=r(5893);const c=o.forwardRef((({bsPrefix:e,className:t,as:r="div",...s},o)=>{const c=(0,a.vE)(e,"row"),i=(0,a.pi)(),u=(0,a.zG)(),f=`${c}-cols`,p=[];return i.forEach((e=>{const t=s[e];let r;delete s[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const n=e!==u?`-${e}`:"";null!=r&&p.push(`${f}${n}-${r}`)})),(0,l.jsx)(r,{ref:o,...s,className:n()(t,c,...p)})}));c.displayName="Row";const i=c},6792:(e,t,r)=>{"use strict";r.d(t,{SC:()=>u,pi:()=>c,vE:()=>l,zG:()=>i});var s=r(7294);r(5893);const n=s.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:o,Provider:a}=n;function l(e,t){const{prefixes:r}=(0,s.useContext)(n);return e||r[t]||t}function c(){const{breakpoints:e}=(0,s.useContext)(n);return e}function i(){const{minBreakpoint:e}=(0,s.useContext)(n);return e}function u(){const{dir:e}=(0,s.useContext)(n);return"rtl"===e}},5251:(e,t,r)=>{"use strict";var s=r(7294),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var s,o={},i=null,u=null;for(s in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,s)&&!c.hasOwnProperty(s)&&(o[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps)void 0===o[s]&&(o[s]=t[s]);return{$$typeof:n,type:e,key:i,ref:u,props:o,_owner:l.current}}t.Fragment=o,t.jsx=i,t.jsxs=i},5893:(e,t,r)=>{"use strict";e.exports=r(5251)},7722:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var s=r(7294),n=r(682),o=r(4051),a=r(1555);const l=e=>s.createElement(n.Z,{className:"d-flex align-items-center flex-grow-1",fluid:!0},s.createElement(o.Z,{className:"justify-content-center w-100"},s.createElement(a.Z,{className:"text-light",xs:12,style:{fontSize:"25px"}},e.children)))},8433:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var s=r(7294),n=r(7722),o=r(9655),a=r(9250),l=r(1814);const c=()=>{var e;const t=(0,a.TH)(),r=l.B.find((e=>e.route===t.pathname));return s.createElement(n.Z,null,s.createElement("p",{className:"text-center"},null!==(e=null==r?void 0:r.name)&&void 0!==e?e:"This"," page is currently work in progress. Please come back later. Until then, explore my home page"," ",s.createElement(o.rU,{to:"/",className:"text-light"},"here")))}}}]);