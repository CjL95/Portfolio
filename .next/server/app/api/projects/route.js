"use strict";(()=>{var e={};e.id=871,e.ids=[871],e.modules={53524:e=>{e.exports=require("@prisma/client")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},68408:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>l,originalPathname:()=>A,requestAsyncStorage:()=>c,routeModule:()=>u,serverHooks:()=>d,staticGenerationAsyncStorage:()=>P,staticGenerationBailout:()=>_});var o={};r.r(o),r.d(o,{GET:()=>GET}),r(78976);var a=r(10884),n=r(16132),i=r(95798),s=r(53524);let p=new s.PrismaClient;async function GET(e){try{let e=await p.project.findMany();return i.Z.json({proj:e})}catch(e){console.log(e)}}let u=new a.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/projects/route",pathname:"/api/projects",filename:"route",bundlePath:"app/api/projects/route"},resolvedPagePath:"C:\\dev\\projects\\Portfolio\\app\\api\\projects\\route.tsx",nextConfigOutput:"",userland:o}),{requestAsyncStorage:c,staticGenerationAsyncStorage:P,serverHooks:d,headerHooks:l,staticGenerationBailout:_}=u,A="/api/projects/route"},16132:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[933,798],()=>__webpack_exec__(68408));module.exports=r})();