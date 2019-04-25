(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){e.exports=a(25)},22:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),s=a.n(l),i=(a(21),a(22),a(3)),c=a.n(i),o=a(7),m=a(1),d=a(8),u=a(9),h=a(13),p=a(10),y=a(14),f=a(4),b=a(12),E=function(e){var t=e.className,a=void 0===t?"":t,n=e.width;return r.a.createElement("div",{className:"skeleton-line ".concat(a),style:{width:n}})},g=function(e){var t=e.entries,a=void 0===t?50:t;return r.a.createElement("div",null,r.a.createElement("div",{className:"mb2 flex items-center justify-between"},r.a.createElement(E,{width:70}),r.a.createElement(E,{className:"h2",width:100})),Object(b.a)(Array(a)).map(function(e,t){return r.a.createElement("div",{key:t,className:"mb3 pl2 py2 result"},r.a.createElement("div",{className:"mb2"},r.a.createElement(E,{className:"mb1 h3",width:"60%"}),r.a.createElement(E,{className:"mb1 h3",width:"80%"})),r.a.createElement(E,{className:"h5",width:"30%"}))}))},v=a(11),N=a(2),k=function(e){return Object.entries(e).filter(function(e){var t=Object(N.a)(e,2);t[0];return""!==t[1]}).map(function(e){var t=Object(N.a)(e,2),a=t[0],n=t[1];return"".concat(a,"=").concat(encodeURIComponent(n))}).join("&")},w="https://late-night-jokes-api.herokuapp.com/",j=["Trump","NFL","Pope","Facebook"],x=[{id:"",display:"All hosts"},{id:"conan",display:"Conan O'Brien"},{id:"ferguson",display:"Craig Ferguson"},{id:"letterman",display:"David Letterman"},{id:"corden",display:"James Corden"},{id:"leno",display:"Jay Leno"},{id:"fallon",display:"Jimmy Fallon"},{id:"kimmel",display:"Jimmy Kimmel"},{id:"meyers",display:"Seth Meyers"},{id:"colbert",display:"Stephen Colbert"}],S=[{id:"",display:"All years"},{id:"2009",display:"2009"},{id:"2010",display:"2010"},{id:"2011",display:"2011"},{id:"2012",display:"2012"},{id:"2013",display:"2013"},{id:"2014",display:"2014"},{id:"2015",display:"2015"},{id:"2016",display:"2016"},{id:"2017",display:"2017"},{id:"2018",display:"2018"}],C=[{id:"",display:"New to old"},{id:"date",display:"Old to new"},{id:"host",display:"Host (A to Z)"}],O={host:x,year:S,order:C},J=(x.slice(1).reduce(function(e,t){return Object(v.a)({},e,Object(m.a)({},t.id,t.display))},{}),function(e,t){var a=O[e];return a&&a.find(function(e){return e.id===t})?t:a[0].id}),L=function(e){return encodeURIComponent(e)},q=window.location.origin,Q=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(h.a)(this,Object(p.a)(t).call(this,e))).handleQueryChange=function(e){var t=e.target.value;a.setState({query:t})},a.handleSelectChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(m.a)({},n,r),a.fetchJokes)},a.handleSuggestionClick=function(e){return function(t){t.preventDefault(),a.setState({query:e},a.fetchJokes)}},a.handleSubmit=function(e){e.preventDefault(),a.fetchJokes()},a.fetchJokes=Object(o.a)(c.a.mark(function e(){var t,n,r,l,s,i,o,m;return c.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.updateUrl(),t=a.state,n=t.query,r=t.host,l=t.year,s=t.order,n){e.next=4;break}return e.abrupt("return");case 4:return a.setState({jokes:[],isLoading:!0,hasError:!1,lastSearchedQuery:n}),e.prev=5,i=k({query:n,host:r,year:l,order:s}),e.next=9,fetch("".concat(w,"?").concat(i));case 9:return o=e.sent,e.next=12,o.json();case 12:m=e.sent,a.setState({jokes:m.results,isLoading:!1}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),console.log("Uh-oh! Something goofed up",e.t0),a.setState({isLoading:!1,hasError:!0});case 20:case"end":return e.stop()}},e,null,[[5,16]])})),a.updateUrl=function(){var e=a.state,t=e.query,n=e.host,r=e.year,l=e.order;window.location.hash=k({query:t,host:n,year:r,order:l})},a.state={jokes:null,isLoading:!1,hasError:!1,lastSearchedQuery:null,query:e.initialQuery,host:e.initialHost,year:e.initialYear,order:e.initialOrder},a}return Object(y.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.fetchJokes()}},{key:"render",value:function(){var e,t=this,a=this.state,n=a.query,l=a.host,s=a.year,i=a.order,c=a.jokes,o=a.isLoading,m=a.hasError,d=a.lastSearchedQuery;return r.a.createElement("div",{className:"app container mx-auto p2"},r.a.createElement("header",{className:"mb2 flex"},r.a.createElement("div",{className:"flex-auto"},r.a.createElement("h1",{className:"m0 h2 sm-h1"},r.a.createElement("a",{href:"/",className:"text-decoration-none"},"Late Night Joke Library")),r.a.createElement("p",{className:"m0 h4 sm-h3 line-height-1"},"Explore 10+ years of monologue jokes")),r.a.createElement("div",{className:"flex flex-column justify-end right-align xs-hide"},r.a.createElement("div",{className:"line-height-1"},r.a.createElement("a",{href:"https://twitter.com/intent/tweet?text=".concat(L("Explore 35k+ monologue jokes from 10+ years of late night."),"&url=").concat(L(q)),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(f.b,{className:"ml1"})),r.a.createElement("a",{href:"https://www.facebook.com/sharer.php?u=".concat(L(q)),rel:"noopener noreferrer",target:"_blank"},r.a.createElement(f.a,{className:"ml1"}))),r.a.createElement("div",{className:"h6"},r.a.createElement("a",{href:"mailto:brendansudol@gmail.com?Subject=Late%20Night%20Joke%20Library"},"Send feedback")))),r.a.createElement("main",{className:"app-content"},r.a.createElement("form",{className:"mb2 p2 sm-p3 bg-light rounded sm-flex justify-between",onSubmit:this.handleSubmit},r.a.createElement("div",{className:"flex sm-col-6 mb2 sm-m0"},r.a.createElement("input",{className:"input m0 rounded-left",type:"search",name:"query",placeholder:"Search...",value:n,onChange:this.handleQueryChange,required:!0}),r.a.createElement("button",{className:"btn btn-primary rounded-right",type:"submit",disabled:o},"Go")),r.a.createElement("div",{className:"flex sm-col-5 mxn1 h5"},r.a.createElement("select",{className:"select mx1 my0 col-7",name:"host",value:l,onChange:this.handleSelectChange},x.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.display)})),r.a.createElement("select",{className:"select mx1 my0 col-5",name:"year",value:s,onChange:this.handleSelectChange},S.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.display)})))),null==d&&r.a.createElement("div",{className:"py1"},r.a.createElement("span",{className:"mr1"},"A few suggestions to get you started:"),j.map(function(e){return r.a.createElement("a",{key:e,className:"mr1 bold",href:"#!",onClick:t.handleSuggestionClick(e)},e)})),null!=c&&(0===c.length?o?r.a.createElement(g,null):m?r.a.createElement("p",{className:"my3 p2 h3 center rounded bg-red white"},r.a.createElement("strong",null,"Uh-oh!")," Something went wrong. Please try again in a few moments."):r.a.createElement("p",{className:"my3 p2 h3 center rounded no-results"},r.a.createElement("strong",null,"Sorry!")," We couldn't find any results for"," ",r.a.createElement("em",null,d),"."):r.a.createElement("div",null,r.a.createElement("div",{className:"mb2 flex items-center justify-between"},r.a.createElement("h5",{className:"m0"},(e=c.length,"".concat(e).concat(500===e?"+":""," result").concat(1!==e?"s":""))),r.a.createElement("div",{className:"flex items-center justify-center"},r.a.createElement("h5",{className:"m0 pr1 flex-none"},"Sort by:"),r.a.createElement("select",{className:"m0 select select-skinny h5",name:"order",value:i,onChange:this.handleSelectChange},C.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.display)})))),c.map(function(e){return r.a.createElement("div",{key:e.id,className:"mb3 pl2 py2 result"},r.a.createElement("div",{className:"mb2"},e.text),r.a.createElement("div",{className:"h5"},e.host,r.a.createElement("span",{className:"px1"},"/"),e.date))})))),r.a.createElement("footer",{className:"mt3 pt2 h5 border-top border-light"},r.a.createElement("a",{href:"https://brendansudol.com",className:"mr2"},"Made by @brensudol"),r.a.createElement("a",{href:"https://github.com/brendansudol/late-night-jokes",className:"mr2"},"Code on GitHub")))}}]),t}(n.Component),U=window.location.hash.slice(1).split("&").filter(function(e){return e.length}).reduce(function(e,t){var a=t.split("="),n=Object(N.a)(a,2),r=n[0],l=n[1],s=void 0===l?null:decodeURIComponent(l);return Object.assign(e,Object(m.a)({},r,s))},{}),A=U.query,D=U.host,F=U.year,H=U.order;s.a.render(r.a.createElement(Q,{initialQuery:A||"",initialHost:J("host",D),initialYear:J("year",F),initialOrder:J("order",H)}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.46c843f4.chunk.js.map