(this["webpackJsonpreact-memorama"]=this["webpackJsonpreact-memorama"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(3),i=a.n(r),o=(a(9),a(1)),l=(a(10),function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],i=a[1],l=Object(n.useState)(!1),d=Object(o.a)(l,2),u=d[0],s=d[1],m=e.Front,f=e.Back,v=e.id,p=e.handleFlip,b=e.enableSelect,E=function(){i(r+" card--unflip"),s(!0),setTimeout((function(){i(""),s(!1)}),500)};return c.a.createElement("div",{className:"card-scene"},c.a.createElement("div",{id:"card",className:"card ".concat(r),onClick:function(e){e.stopPropagation(),b&&!u&&(r.includes("card--flipped")?E():(i(r+" card--flipped"),setTimeout((function(){p({id:v,unflipCard:E}),console.log(v)}),200)))}},c.a.createElement("div",{className:"card-face card-backing"},c.a.createElement("div",{className:"grain-overlay"}),c.a.createElement("div",{className:"back-main"},c.a.createElement(m,null))),c.a.createElement("div",{className:"card-face card-front"},c.a.createElement(f,null))))}),d=(a(11),[{content:"0",id:0},{content:"1",id:1},{content:"2",id:2},{content:"3",id:3}]),u=function(){return c.a.createElement("div",{className:"card-front-view"},"?")},s=function(e){return function(){return c.a.createElement("div",{className:"card-back-view"},e)}},m=function(){var e=Object(n.useState)({}),t=Object(o.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(!0),m=Object(o.a)(i,2),f=m[0],v=m[1],p=Object(n.useState)([]),b=Object(o.a)(p,2),E=b[0],h=b[1],j=function(e){void 0!==a.id?(v(!1),setTimeout((function(){v(!0)}),500),a.id===e.id||(e.unflipCard(),a.unflipCard()),r({})):r(e)};return Object(n.useEffect)((function(){h(function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}([].concat(d,d)))}),[]),c.a.createElement("div",{className:"board"},E.map((function(e,t){var a=e.content,n=e.id;return c.a.createElement(l,{Front:u,Back:s(a),handleFlip:j,id:n,enableSelect:f,key:t})})))};a(12);var f=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.b0b929f5.chunk.js.map