(this["webpackJsonpreact-pomodoro-clock"]=this["webpackJsonpreact-pomodoro-clock"]||[]).push([[0],{16:function(e,c,n){},17:function(e,c,n){},18:function(e,c,n){},24:function(e,c,n){},25:function(e,c,n){"use strict";n.r(c);var t=n(0),i=n(2),r=n.n(i),s=n(10),d=n.n(s),j=(n(16),n(5)),o=(n(17),function(e){return Object(t.jsx)("div",{onClick:e.handleClick,id:"buttons",className:"icon",children:e.children})}),l=(n(18),function(e){var c=e.timerLeft<60?{color:"red"}:{color:"#3C403D"},n=e.timerLeft<60&&e.isPlaying?"blink":"no-blink";return Object(t.jsxs)("div",{id:"timer",children:[Object(t.jsx)("div",{id:"timer-input",style:c,children:e.isSession?"Session":"Break"}),Object(t.jsx)("div",{id:"minute-second",className:n,style:c,children:e.children})]})}),a=(n(9),function(e){return Object(t.jsxs)("div",{id:"length",children:[Object(t.jsx)("h3",{children:"Break Length"}),Object(t.jsx)("div",{id:"inputs-wrapper",children:e.children})]})}),b=function(e){return Object(t.jsxs)("div",{id:"length",children:[Object(t.jsx)("h3",{children:"Sesison Length"}),Object(t.jsx)("div",{id:"inputs-wrapper",children:e.children})]})},h=n(4),u=n(3),O=(n(24),n.p+"static/media/alarm.de81536f.mp3"),f=Object(t.jsx)(h.a,{icon:u.b}),x=Object(t.jsx)(h.a,{icon:u.a}),p=Object(t.jsx)(h.a,{icon:u.c}),v=Object(t.jsx)(h.a,{icon:u.d}),m=Object(t.jsx)(h.a,{icon:u.e}),k=function(){var e=Object(i.useState)(1500),c=Object(j.a)(e,2),n=c[0],r=c[1],s=Object(i.useState)(25),d=Object(j.a)(s,2),h=d[0],u=d[1],k=Object(i.useState)(5),g=Object(j.a)(k,2),C=g[0],S=g[1],N=Object(i.useState)(!1),w=Object(j.a)(N,2),y=w[0],L=w[1],I=Object(i.useState)(!0),P=Object(j.a)(I,2),B=P[0],F=P[1],D=Object(i.useRef)(),M=Object(i.useRef)(),E=function(){r((function(e){return e-1}))};return Object(i.useEffect)((function(){-1===n&&(r(60*C),F(!1),B||(r(60*h),F(!0))),0===n&&M.current.play()})),Object(t.jsxs)("div",{id:"page-wrapper",children:[Object(t.jsxs)("div",{id:"pomodoro-clock",children:[Object(t.jsx)("h1",{children:"Pomodoro Clock"}),Object(t.jsxs)("div",{id:"length-wrapper",children:[Object(t.jsxs)(a,{children:[Object(t.jsx)("div",{onClick:function(){y||1!==C&&S((60*C-60)/60)},className:"icon",children:x}),Object(t.jsx)("div",{className:"length-input",children:C}),Object(t.jsx)("div",{onClick:function(){y||60!==C&&S((60*C+60)/60)},className:"icon",children:f})]}),Object(t.jsxs)(b,{children:[Object(t.jsx)("div",{onClick:function(){y||1!==h&&(u(h-1),r(60*h-60))},className:"icon",children:x}),Object(t.jsx)("div",{className:"length-input",children:h}),Object(t.jsx)("div",{onClick:function(){y||60!==h&&(u(h+1),r(60*h+60))},className:"icon",children:f})]})]}),Object(t.jsx)("div",{id:"timer-wrapper",children:Object(t.jsx)(l,{isSession:B,timerLeft:n,isPlaying:y,children:function(){var e=Math.floor(n/60),c=Math.floor(n%60);return e<10&&(e="0"+e),(0===c||c<10)&&(c="0"+c),e+":"+c}()})}),Object(t.jsxs)("div",{id:"function-button",children:[Object(t.jsx)(o,{handleClick:function(){!function(){if(!y){var e=setInterval((function(){E()}),1e3);D.current=e,L(!0)}}()},children:p}),Object(t.jsx)(o,{handleClick:function(){clearInterval(D.current),L(!1)},children:v}),Object(t.jsx)(o,{handleClick:function(){clearInterval(D.current),r(1500),u(25),S(5),L(!1),F(!0)},children:m})]})]}),Object(t.jsxs)("div",{id:"footer",children:[Object(t.jsx)("p",{children:"Designed and Coded by"}),Object(t.jsx)("p",{id:"name",children:Object(t.jsx)("a",{href:"https://github.com/Shuto46490802",target:"_blank",children:"Shuto S"})})]}),Object(t.jsx)("audio",{id:"beep",src:O,ref:M})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(c){var n=c.getCLS,t=c.getFID,i=c.getFCP,r=c.getLCP,s=c.getTTFB;n(e),t(e),i(e),r(e),s(e)}))};d.a.render(Object(t.jsx)(r.a.StrictMode,{children:Object(t.jsx)(k,{})}),document.getElementById("root")),g()},9:function(e,c,n){}},[[25,1,2]]]);
//# sourceMappingURL=main.36cca71c.chunk.js.map