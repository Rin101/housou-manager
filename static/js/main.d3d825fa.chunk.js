(this["webpackJsonphousou-manager"]=this["webpackJsonphousou-manager"]||[]).push([[0],{14:function(e,t,s){},9:function(e,t,s){"use strict";s.r(t);var c=s(4),n=s(5),a=s(8),r=s(7),i=s(3),j=s(1),l=s.n(j),d=s(6),o=s.n(d),h=(s(14),s(0));function u(){var e=Object(j.useState)(new Date),t=Object(i.a)(e,2),s=t[0],c=(t[1],(s.getMonth()+1).toString()+"/"+s.getDate().toString()+"/"+s.getFullYear().toString()),n=Object(j.useState)([0,0,0,0,0,0,0,0,0,0,0]),a=Object(i.a)(n,2),r=a[0],l=a[1],d=["\u521d\u6b69\u304b\u3089\u306e\u6570\u5b66","\u5165\u9580\u7dda\u578b\u4ee3\u6570","\u54f2\u5b66\u30fb\u601d\u60f3\u3092\u4eca\u8003\u3048\u308b","\u897f\u6d0b\u54f2\u5b66\u306e\u8d77\u6e90","\u521d\u6b69\u304b\u3089\u306e\u7269\u7406","\u7269\u7406\u306e\u4e16\u754c","\u521d\u6b69\u304b\u3089\u306e\u751f\u7269\u5b66","\u751f\u547d\u5206\u5b50\u3068\u7d30\u80de\u306e\u79d1\u5b66","\u5fc3\u7406\u5b66\u6982\u8ad6","\u767a\u9054\u5fc3\u7406\u5b66\u6982\u8ad6","\u7d4c\u55b6\u5b66\u6982\u8ad6"],o=[["4/8/2021","start"],["5/14/2021","\u901a\u4fe1\u6307\u5c0e"],["5/28/2021","\u901a\u4fe1\u6307\u5c0e"],["5/31/2021","end of read through phase"],["6/1/2021","\u904e\u53bb\u554f\u3001\u81ea\u5df1\u5b66\u7fd2\u30b5\u30a4\u30c8 phase"],["7/13/2021","\u5358\u4f4d\u8a8d\u5b9a\u8a66\u9a13 start"],["7/20/2021","\u5358\u4f4d\u8a8d\u5b9a\u8a66\u9a13 last day"]],u=function(e,t){var s=new Date(e),c=new Date(t),n=Math.abs(c-s);return Math.ceil(n/864e5)};u(o[1][0],o[2][0]);u(o[0][0],c);var b=r.reduce((function(e,t){return e+t}),0),O=15*d.length,m=Math.round(b/O*1e3)/10+"%",x=Math.round(u(c,o[0][0])/u(c,o[6][0])*100)+"%",f=function(){return d.map((function(e){var t=d.indexOf(e);return Object(h.jsxs)("div",{className:"subject-card",children:[Object(h.jsx)("div",{className:"subject-title",children:Object(h.jsx)("p",{style:{fontSize:function(e){e>=18&&(e=16);var t=18-e;return console.log(t),"".concat(t,"px")}(e.length)},children:e})}),Object(h.jsx)("div",{className:"card-line"}),Object(h.jsxs)("div",{className:"card-counter",children:[Object(h.jsx)("i",{className:"fas fa-chevron-left",onClick:function(){return function(){var e=[];r.forEach((function(t){e.push(t)})),e[t]-=1,l(e)}()}}),Object(h.jsx)("p",{children:r[t]}),Object(h.jsx)("i",{className:"fas fa-chevron-right",onClick:function(){return function(){var e=[];r.forEach((function(t){e.push(t)})),e[t]+=1,l(e)}()}})]})]},e)}))},p=function(){return o.map((function(e){return Object(h.jsx)("p",{style:{left:Math.round(u(c,e[0])/u(c,o[6][0])*100).toString()+"%"},children:e[0]},e)}))};return Object(h.jsxs)("div",{className:"checksheet",children:[Object(h.jsx)("p",{className:"date",children:c}),Object(h.jsx)("div",{className:"checksheet-container",children:Object(h.jsxs)("div",{className:"mychecksheet",children:[Object(h.jsxs)("h2",{children:["total: ",b]}),Object(h.jsx)("div",{className:"cards-container",children:Object(h.jsx)(f,{})}),Object(h.jsxs)("p",{children:[b," out of ",O," read through: ",m]})]})}),Object(h.jsxs)("div",{className:"progress-bars",children:[Object(h.jsxs)("div",{id:"myProgress",children:[Object(h.jsxs)("p",{children:["read through"," phase"]}),Object(h.jsxs)("div",{className:"timestamps",id:"myProgressTimestamps",children:[Object(h.jsx)("p",{style:{left:"0%"},children:o[0][0]}),Object(h.jsxs)("p",{style:{left:Math.round(u(c,o[0][0])/u(c,o[3][0])*100).toString()+"%"},children:[c," today"]}),Object(h.jsx)("p",{style:{left:"100%"},children:o[3][0]})]}),Object(h.jsxs)("div",{className:"bar",children:[Object(h.jsx)("div",{className:"",style:{width:m}}),Object(h.jsx)("section",{className:"todayBar",style:{left:Math.round(u(c,o[0][0])/u(c,o[3][0])*100).toString()+"%"}})]})]}),Object(h.jsxs)("div",{id:"scheduleProgress",children:[Object(h.jsx)("div",{className:"timestamps",id:"scheduleTimestamps",children:Object(h.jsx)(p,{})}),Object(h.jsx)("div",{className:"bar",children:Object(h.jsx)("div",{className:"",style:{width:x}})})]})]})]})}var b=function(e){Object(a.a)(s,e);var t=Object(r.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(n.a)(s,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)(u,{})})}}]),s}(l.a.Component);o.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.d3d825fa.chunk.js.map