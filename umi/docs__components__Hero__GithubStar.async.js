"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4646],{4308:function(C,n,_){_.r(n);var l=_(5290),a=_.n(l),o=_(411),i=_.n(o),d=_(6686),E=_.n(d),r=_(3236),D=_(2086),u="github-stars";n.default=function(){var b=(0,r.useState)(localStorage.getItem(u)||"12K+"),t=E()(b,2),p=t[0],c=t[1];return(0,r.useEffect)(function(){i()(a()().mark(function h(){var m,s;return a()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/umijs/umi");case 2:return m=e.sent,e.next=5,m.json();case 5:s=e.sent.stargazers_count,s&&(c(s),localStorage.setItem(u,s));case 7:case"end":return e.stop()}},h)}))()},[]),(0,D.jsxs)("span",{children:[p," Github Stars"]})}}}]);
