"use strict";(self.webpackChunkcode=self.webpackChunkcode||[]).push([[898],{372:function(e,t,n){n.d(t,{Z:function(){return c}});var s="NewsList_news__Tif3F",r="NewsList_item__338E8",a="NewsList_title__3yGrO",i=n(184),c=function(e){var t=e.news;return(0,i.jsx)("ul",{className:s,children:t.map((function(e,t){return(0,i.jsx)("li",{className:r,children:(0,i.jsx)("h3",{className:a,children:e.title})},t)}))})}},8270:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var s=n(8152),r=n(2791),a=n(3504),i=n(6871),c=n(184),u=function(e){var t=e.title,n=e.className,s=(0,i.TH)();return(0,c.jsx)(a.rU,{to:s.state||"/",className:n,children:t})},o=n(372),l=n(3067),f=function(){(0,i.s0)();var e=(0,i.TH)(),t=(0,i.UO)().country,n=(0,r.useState)([]),f=(0,s.Z)(n,2),d=f[0],h=f[1];return console.log("newsListPageLocation :>> ",e),(0,r.useEffect)((function(){(0,l.z)({country:t}).then((function(e){var t=e.news;return h(t)}))}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(u,{title:"GoBack"}),(0,c.jsxs)("h1",{children:["NewsListPage from ",t]}),(0,c.jsx)(o.Z,{news:d}),(0,c.jsx)(a.rU,{to:"old",state:e.state,children:"Old"}),(0,c.jsx)(a.rU,{to:"fresh",state:e.state,children:"Fresh"}),(0,c.jsx)(i.j3,{})]})}},3067:function(e,t,n){n.d(t,{z:function(){return a}});var s=n(4569),r=n.n(s);r().defaults.baseURL="https://newsapi.org/v2/everything";var a=function(e){var t=e.q,n=void 0===t?"bitcoin":t,s=e.country,a=void 0===s?"en":s;return r().defaults.params={q:n,language:a,page:1,apiKey:"42ee593af8484a5a82756cb35b09ccd6",pageSize:10},r().get().then((function(e){var t=e.data;return{news:t.articles,totalNews:t.totalResults}}))}}}]);
//# sourceMappingURL=newsList-page.0c038f19.chunk.js.map