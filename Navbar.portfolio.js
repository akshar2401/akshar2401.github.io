"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[160],{811:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var n=t(294);class s{constructor(e){this.navBarItems=e}}const r=n.lazy((()=>t.e(939).then(t.bind(t,470)))),l=new s([{name:"About",isActive:!0},{name:"Education"},{name:"Skills"},{name:"Work Experience"},{name:"Projects"}]),c=e=>{const[a,t]=n.useState(l);return n.createElement(n.Fragment,null,n.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.createElement("span",{className:"navbar-toggler-icon"})),n.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},a.navBarItems.map(((e,r)=>{const l=e.isActive?"nav-link active":"nav-link";return n.createElement("li",{className:"nav-item",key:e.name,style:{cursor:"pointer"},onClick:()=>(e=>{const n=a.navBarItems.findIndex((e=>e.isActive));-1!==n&&(a.navBarItems[n].isActive=!1),a.navBarItems[e].isActive=!0,t(new s(a.navBarItems))})(r)},n.createElement("span",{className:l,"aria-current":"page"},e.name))}))),n.createElement(n.Suspense,null,n.createElement(r,null))))}}}]);