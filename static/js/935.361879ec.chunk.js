"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[935],{935:function(t,n,e){e.r(n),e.d(n,{default:function(){return y}});var r,a,i,c,s,o=e(731),u=e(689),l=e(885),p=e(791),f=e(390),d=e(168),h=e(444),v=h.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n"]))),x=h.ZP.span(a||(a=(0,d.Z)(["\n  display: block;\n  font-weight: bold;\n"]))),m=h.ZP.ul(i||(i=(0,d.Z)(["\n  display: flex;\n  list-style: none;\n  justify-content: flex-start;\n"]))),w=h.ZP.li(c||(c=(0,d.Z)(["\n  margin-right: 10px;\n"]))),g=h.ZP.img(s||(s=(0,d.Z)(["\n  object-fit: contain;\n  margin-right: 20px;\n"]))),j=e(184),y=function(){var t,n,e,r,a=function(){var t=(0,p.useState)(null),n=(0,l.Z)(t,2),e=n[0],r=n[1],a=(0,u.UO)().id;return(0,p.useEffect)((function(){(0,f.Mc)(a).then(r)}),[a]),console.log("useFetchMovie ",e),e}(),i=(0,u.s0)(),c=(0,u.TH)();return console.log("location",c.state),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("button",{onClick:function(){var t,n;i(null!==(t=null===(n=c.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/")},type:"button",children:"Go back"}),a&&(0,j.jsxs)(v,{children:[(0,j.jsx)(g,{src:"https://image.tmdb.org/t/p/w500/".concat(a.backdrop_path),alt:a.title,width:"200"}),(0,j.jsxs)("div",{children:[(0,j.jsx)("h2",{children:a.original_title}),(0,j.jsxs)("p",{children:["User score: ",10*a.vote_average,"%"]}),(0,j.jsxs)("p",{children:[(0,j.jsx)(x,{children:"Overview: "}),a.overview," "]}),(0,j.jsx)(x,{children:"Genres:"}),(0,j.jsx)(m,{children:a.genres.map((function(t){return(0,j.jsx)(w,{children:t.name},t.id)}))})]})]}),(0,j.jsx)("p",{children:"Additional information"}),(0,j.jsxs)("ul",{children:[(0,j.jsx)("li",{children:(0,j.jsx)(o.rU,{to:"cast",state:{from:null!==(t=null===(n=c.state)||void 0===n?void 0:n.from)&&void 0!==t?t:"/cast"},children:"Cast"})}),(0,j.jsx)("li",{children:(0,j.jsx)(o.rU,{to:"reviews",state:{from:null!==(e=null===(r=c.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/reviews"},children:"Reviews"})})]}),(0,j.jsx)(u.j3,{})]})}},390:function(t,n,e){e.d(n,{E3:function(){return x},IV:function(){return f},Mc:function(){return l},vw:function(){return o},wH:function(){return h}});var r=e(861),a=e(757),i=e.n(a),c=e(388);c.Z.defaults.baseURL="https://api.themoviedb.org/3/movie/";var s="eef58e7402eb4560bd5a271abcaa31e6";function o(){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("popular?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("in fetch",n),t.next=3,c.Z.get("".concat(n,"?api_key=").concat(s));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("in fetch",n),t.next=3,c.Z.get("".concat(n,"/credits?api_key=").concat(s));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("in fetch",n),t.next=3,c.Z.get("".concat(n,"/reviews?api_key=").concat(s));case 3:return e=t.sent,t.abrupt("return",e.data);case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(i().mark((function t(n){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=935.361879ec.chunk.js.map