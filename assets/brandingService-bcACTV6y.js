import{J as i,K as s,v as r,f as c,T as g,X as d,W as f,H as u,am as l}from"./index-Bk7WpSNT.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=i("Monitor",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]),t=r(c,"siteContent","branding");async function y(){var a;try{const n=await s(t);return n.exists()?n.data()||{}:{}}catch(n){return n&&typeof n=="object"&&(n.code==="permission-denied"||(a=n.message)!=null&&a.includes("Missing or insufficient permissions"))?(console.warn("brandingService: read branding config denied for public page"),{}):(console.warn("brandingService: failed to read branding config",n),{})}}async function p(a){const n={...a,updatedAt:Date.now()};await u(t,n,{merge:!0})}async function b(a){const n=`branding/logo_${Date.now()}_${a.name}`,e=g(l,n);await d(e,a);const o=await f(e);return await p({logoUrl:o}),o}async function x(){return(await y()).logoUrl}export{m as M,y as a,x as g,p as s,b as u};
