(this["webpackJsonpsc-ship-chronology"]=this["webpackJsonpsc-ship-chronology"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(7),s=a.n(c),i=(a(13),a(3)),l=a.n(i),u=a(2),o=a(4),d=a(8),v=(a(15),function(){var e=Object(o.a)(l.a.mark((function e(){var t,a,r,n,c,s,i,o,d,v,f,p,j,b,h,x,m,O,g;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./assets/data.json");case 2:return e.next=4,e.sent.json();case 4:if(r=e.sent,n=[],!(null===r||void 0===r||null===(t=r.data)||void 0===t||null===(a=t.allArticle)||void 0===a?void 0:a.edges)){e.next=49;break}c=Object(u.a)(null===r||void 0===r?void 0:r.data.allArticle.edges),e.prev=8,c.s();case 10:if((s=c.n()).done){e.next=41;break}if(!(i=s.value).node){e.next=39;break}if(p=i.node,j={slug:p.slug,id:p.id,name:p.title,description:p.body,categories:null!==(o=p.categories)&&void 0!==o?o:[],tags:null!==(d=p.tags)&&void 0!==d?d:[],url:"https://robertsspaceindustries.com/galactapedia/article/".concat(p.id,"-").concat(p.slug)},!(null===(v=p.template)||void 0===v?void 0:v.length)){e.next=37;break}b=Object(u.a)(p.template),e.prev=17,b.s();case 19:if((h=b.n()).done){e.next=29;break}if(!(x=h.value).SpacecraftShip){e.next=27;break}return g=x.SpacecraftShip,j.manufacturer=g.manufacturer||void 0,j.releaseDate=(null===(m=/\d{4}/.exec(null!==(O=g.releaseDate)&&void 0!==O?O:""))||void 0===m?void 0:m[0])||void 0,j.role=g.role||void 0,e.abrupt("break",29);case 27:e.next=19;break;case 29:e.next=34;break;case 31:e.prev=31,e.t0=e.catch(17),b.e(e.t0);case 34:return e.prev=34,b.f(),e.finish(34);case 37:(null===(f=p.thumbnail)||void 0===f?void 0:f.url)&&(j.image=p.thumbnail.url),j.manufacturer&&n.push(j);case 39:e.next=10;break;case 41:e.next=46;break;case 43:e.prev=43,e.t1=e.catch(8),c.e(e.t1);case 46:return e.prev=46,c.f(),e.finish(46);case 49:return e.abrupt("return",n);case 50:case"end":return e.stop()}}),e,null,[[8,43,46,49],[17,31,34,37]])})));return function(){return e.apply(this,arguments)}}()),f=a(0);var p=function(e){var t=e.text,a=Object(r.useMemo)((function(){if(!t)return"";var e,a=t.split(/(?=\[[^\]]+\]\([^\)]+\))|(?<=\[[^\]]+\]\([^\)]+\))/g),r=[],n=0,c=Object(u.a)(a);try{for(c.s();!(e=c.n()).done;){var s=e.value;if(s){n++;var i=/\[([^\]]+)\]\(([^\)]+)\)/.exec(s);r.push(i?Object(f.jsxs)("a",{href:i[2],target:"galactapedia",children:[" ",i[1]]},n):Object(f.jsx)("span",{children:s},n))}}}catch(l){c.e(l)}finally{c.f()}return r}),[t]);return Object(f.jsx)("span",{className:"text",children:a})};var j=function(e){var t=e.ship,a={backgroundImage:"url(".concat(t.image,")")};return Object(f.jsxs)("div",{className:"ship",children:[Object(f.jsx)("a",{className:"image",target:"galactapedia",style:a,href:t.url}),Object(f.jsx)("div",{className:"name row",children:Object(f.jsx)(p,{text:t.name})}),Object(f.jsx)("div",{className:"legend row",children:"Manufacturer"}),Object(f.jsx)("div",{className:"manufacturer row",children:Object(f.jsx)(p,{text:t.manufacturer})}),Object(f.jsx)("div",{className:"legend row",children:"Role"}),Object(f.jsx)("div",{className:"role row",children:Object(f.jsx)(p,{text:t.role})})]})};var b=function(e){var t=e.ships;return Object(f.jsx)("div",{className:"ship-list",children:null===t||void 0===t?void 0:t.map((function(e){return Object(f.jsx)(j,{ship:e},e.id)}))})};var h=function(e){var t=e.year,a=e.ships;return Object(f.jsxs)("div",{className:"year-row",children:[Object(f.jsx)("div",{className:"year",children:t}),Object(f.jsx)(b,{ships:a})]},t)};var x=function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),a=t[0],n=t[1],c=Object(r.useCallback)(Object(o.a)(l.a.mark((function e(){var t,a,r,c,s,i,o,d,f,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:t=e.sent,a={},r=Object(u.a)(t);try{for(r.s();!(c=r.n()).done;)i=c.value,(o=null!==(s=i.releaseDate)&&void 0!==s?s:"?")in a||(a[o]=[]),a[o].push(i)}catch(l){r.e(l)}finally{r.f()}(d=Object.keys(a).map((function(e){return{year:e,ships:a[e]}}))).sort((function(e,t){return parseInt(e.year,10)-parseInt(t.year,10)})),f=Object(u.a)(d);try{for(f.s();!(p=f.n()).done;)p.value.ships.sort((function(e,t){var a,r;return(null!==(a=e.manufacturer)&&void 0!==a?a:"").localeCompare(null!==(r=t.manufacturer)&&void 0!==r?r:"")}))}catch(l){f.e(l)}finally{f.f()}n(d);case 11:case"end":return e.stop()}}),e)}))),[]);return Object(r.useEffect)((function(){c()}),[]),Object(f.jsx)("div",{className:"App",children:a.map((function(e){return Object(f.jsx)(h,{year:e.year,ships:e.ships},e.year)}))})},m=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,18)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),r(e),n(e),c(e),s(e)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(x,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.704d421e.chunk.js.map