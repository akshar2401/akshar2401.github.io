/*! For license information please see About.portfolio.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[74],{4184:(e,t)=>{var a;!function(){"use strict";var r={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var s=typeof a;if("string"===s||"number"===s)e.push(a);else if(Array.isArray(a)){if(a.length){var o=n.apply(null,a);o&&e.push(o)}}else if("object"===s){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var l in a)r.call(a,l)&&a[l]&&e.push(l)}}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(a=function(){return n}.apply(t,[]))||(e.exports=a)}()},1555:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(4184),n=a.n(r),s=a(7294),o=a(6792),l=a(5893);const c=s.forwardRef(((e,t)=>{const[{className:a,...r},{as:s="div",bsPrefix:c,spans:i}]=function({as:e,bsPrefix:t,className:a,...r}){t=(0,o.vE)(t,"col");const s=(0,o.pi)(),l=(0,o.zG)(),c=[],i=[];return s.forEach((e=>{const a=r[e];let n,s,o;delete r[e],"object"==typeof a&&null!=a?({span:n,offset:s,order:o}=a):n=a;const f=e!==l?`-${e}`:"";n&&c.push(!0===n?`${t}${f}`:`${t}${f}-${n}`),null!=o&&i.push(`order${f}-${o}`),null!=s&&i.push(`offset${f}-${s}`)})),[{...r,className:n()(a,...c,...i)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,l.jsx)(s,{...r,ref:t,className:n()(a,!i.length&&c)})}));c.displayName="Col";const i=c},682:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(4184),n=a.n(r),s=a(7294),o=a(6792),l=a(5893);const c=s.forwardRef((({bsPrefix:e,fluid:t,as:a="div",className:r,...s},c)=>{const i=(0,o.vE)(e,"container"),f="string"==typeof t?`-${t}`:"-fluid";return(0,l.jsx)(a,{ref:c,...s,className:n()(r,t?`${i}${f}`:i)})}));c.displayName="Container",c.defaultProps={fluid:!1};const i=c},4051:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(4184),n=a.n(r),s=a(7294),o=a(6792),l=a(5893);const c=s.forwardRef((({bsPrefix:e,className:t,as:a="div",...r},s)=>{const c=(0,o.vE)(e,"row"),i=(0,o.pi)(),f=(0,o.zG)(),m=`${c}-cols`,u=[];return i.forEach((e=>{const t=r[e];let a;delete r[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const n=e!==f?`-${e}`:"";null!=a&&u.push(`${m}${n}-${a}`)})),(0,l.jsx)(a,{ref:s,...r,className:n()(t,c,...u)})}));c.displayName="Row";const i=c},6792:(e,t,a)=>{"use strict";a.d(t,{SC:()=>f,pi:()=>c,vE:()=>l,zG:()=>i});var r=a(7294);a(5893);const n=r.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:s,Provider:o}=n;function l(e,t){const{prefixes:a}=(0,r.useContext)(n);return e||a[t]||t}function c(){const{breakpoints:e}=(0,r.useContext)(n);return e}function i(){const{minBreakpoint:e}=(0,r.useContext)(n);return e}function f(){const{dir:e}=(0,r.useContext)(n);return"rtl"===e}},5251:(e,t,a)=>{"use strict";var r=a(7294),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,a){var r,s={},i=null,f=null;for(r in void 0!==a&&(i=""+a),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(f=t.ref),t)o.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:n,type:e,key:i,ref:f,props:s,_owner:l.current}}t.Fragment=s,t.jsx=i,t.jsxs=i},5893:(e,t,a)=>{"use strict";e.exports=a(5251)},947:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>f});var r=a(7294),n=a(682),s=a(4051),o=a(1555),l=a(4738);const c=[{src:a.p+"bc9bc6e5c3e4b9b4fe8e2cd61dcca026.jpeg",alt:"Akshar's first image",classes:"d-block h-100 w-100"},{src:a.p+"56d5fe0c4eb9fc6f809ded8290be2605.jpeg",alt:"Akshar's second image",classes:"d-block w-100 h-100"}],i=r.lazy((()=>Promise.all([a.e(735),a.e(529)]).then(a.bind(a,4642)))),f=()=>r.createElement(n.Z,{className:"mt-3 flex-grow-1",style:{width:"90%"},id:l.Z.AboutContainerId},r.createElement(s.Z,{className:"text-light justify-content-lg-between"},r.createElement(o.Z,{xs:{span:12,offset:0},lg:{span:6},className:"mx-auto my-auto pt-2 pb-2"},r.createElement("h3",null,"Hello, Akshar here!"),r.createElement("p",{style:{lineHeight:"1.8rem"}},"I recently graduated with a Bachelors of Science in Computer Science from"," ",r.createElement("a",{href:"https://www.csus.edu/",target:"_blank",className:"text-light fw-bold",title:"Link to my university"},"California State University, Sacramento"),". As a Software Engineer at"," ",r.createElement("a",{href:"https://www.microsoft.com/en-us/",target:"_blank",className:"text-light fw-bold ",title:"Link to my current company"},"Microsoft")," ",r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",height:"1.5rem",width:"1.5rem",fill:"white"},r.createElement("path",{d:"M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"})),", I am currently working on Pro Developer and Advanced Maker tooling and experiences for Microsoft Power Platform and Power Apps. My recent technology stack includes C#, React, Typescript, Javascript, Redux, VSCode Extension, Language Server Protocol, Language Servers, NodeJS, PowerFx, Compilers.",r.createElement("br",null)," ",r.createElement("br",null),"I am highly passionate about compiler theory and study and work on them in my free time. I've also worked in many different areas of technology such as Machine Learning, Full Stack Development, Mobile App Development, QA Automation, Compilers, and Data Science. I am currently learning Rust, Go and their applications in infrastructure development.",r.createElement("br",null)," ",r.createElement("br",null),"Thank you for your interest in my profile! You can get a hold of me on my"," ",r.createElement("a",{href:l.Z.LinkedinURL,target:"_blank",title:"Link to my linkedin"},r.createElement("span",{className:"fa-stack"},r.createElement("i",{className:"fa fa-square fa-stack-2x text-light"}),r.createElement("i",{className:"fa fa-linkedin fa-stack-1x text-dark"})))," ","or by reaching out to me at"," ",r.createElement("a",{href:"mailto:"+l.Z.Email,target:"_blank",title:"Email me"},r.createElement("span",{className:"fa-stack"},r.createElement("i",{className:"fa fa-square fa-stack-2x text-light"}),r.createElement("i",{className:"fa fa-envelope fa-stack-1x text-dark"}))),".")),r.createElement(o.Z,{id:"imagesCarousel",xs:{span:12,offset:0},md:{span:8},lg:{span:5},className:"mx-auto my-auto"},r.createElement(r.Suspense,null,r.createElement(i,{images:c})))))}}]);