"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3944,4646],{4308:function(g,a,_){_.r(a);var i=_(5290),r=_.n(i),l=_(411),o=_.n(l),e=_(6686),s=_.n(e),t=_(3236),h=_(2086),m="github-stars";a.default=function(){var j=(0,t.useState)(localStorage.getItem(m)||"12K+"),d=s()(j,2),b=d[0],E=d[1];return(0,t.useEffect)(function(){o()(r()().mark(function v(){var c,u;return r()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://api.github.com/repos/umijs/umi");case 2:return c=n.sent,n.next=5,c.json();case 5:u=n.sent.stargazers_count,u&&(E(u),localStorage.setItem(m,u));case 7:case"end":return n.stop()}},v)}))()},[]),(0,h.jsxs)("span",{children:[b," Github Stars"]})}},8028:function(g,a,_){_.r(a),_.d(a,{default:function(){return t}});var i=_(3236),r=_(7039),l=_(4308),o=_(3519),e={normal:"normal___cN4Y_",bg:"bg___M9xTG",wrapper:"wrapper___YLi0_",left:"left___wdOD8",bigLogo:"bigLogo___HRRBD",actions:"actions___fqNAV",button:"button___cseyW",githubStar:"githubStar___uAovz",right:"right___F66Tq",bigSlogan1:"bigSlogan1___nO5hE",bigSlogan2:"bigSlogan2___HqSip",slogan:"slogan___LKozv",bow:"bow___H3eNk"},s=_(2086),t=function(){return(0,s.jsxs)("div",{className:e.normal,children:[(0,s.jsx)("div",{className:e.bg}),(0,s.jsxs)("div",{className:e.wrapper,children:[(0,s.jsxs)("div",{className:e.left,children:[(0,s.jsx)("div",{className:e.bigLogo}),(0,s.jsxs)("div",{className:e.actions,children:[(0,s.jsx)(o.rU,{to:"/docs/tutorials/getting-started",children:(0,s.jsx)("div",{className:e.button,children:"\u5FEB\u901F\u4E0A\u624B \u2192"})}),(0,s.jsx)("div",{className:e.githubStar,children:(0,s.jsx)(l.default,{})})]})]}),(0,s.jsxs)("div",{className:e.right,children:[(0,s.jsx)("div",{className:e.bigSlogan1}),(0,s.jsx)("div",{className:e.bigSlogan2}),(0,s.jsxs)("div",{className:e.slogan,children:["\u7528 Umi \u6784\u5EFA\u4F60\u7684\u4E0B\u4E00\u4E2A"," ",(0,s.jsxs)(r.Z,{children:[(0,s.jsx)("strong",{children:"React"}),(0,s.jsx)("strong",{children:"Vue"}),(0,s.jsx)("strong",{children:"PC"}),(0,s.jsx)("strong",{children:"Mobile"}),(0,s.jsx)("strong",{children:"SPA"}),(0,s.jsx)("strong",{children:"SSR"}),(0,s.jsx)("strong",{children:"CSR"}),(0,s.jsx)("strong",{children:"\u4E2D\u540E\u53F0"})]})," ","\u5E94\u7528"]}),(0,s.jsxs)("div",{className:e.slogan,children:["\u5E26\u7ED9\u4F60",(0,s.jsx)("strong",{children:"\u7B80\u5355"}),"\u800C",(0,s.jsx)("strong",{children:"\u6109\u60A6"}),"\u7684 Web \u5F00\u53D1\u4F53\u9A8C"]}),(0,s.jsx)("div",{className:e.bow})]})]})]})}}}]);