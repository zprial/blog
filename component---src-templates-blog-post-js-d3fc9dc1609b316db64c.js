(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"0cdV":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a("dI71"),r=a("q1tI"),c=a("TSYQ"),s=function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.banner,a=e.children,n=e.className,s=e.filter,l=e.filterClass;return r.createElement("div",{id:"layout_banner"},s&&r.createElement("div",{className:c("banner-filter",l)}),r.createElement("div",{className:"banner-image",style:{backgroundImage:"url("+t+")"}}),r.createElement("div",{className:c("banner-ctx",n)},a))},t}(r.Component);s.defaultProps={banner:a("CDvA")}},"1Jss":function(e,t,a){"use strict";var n=a("q1tI");t.a=function(e){var t=e.children,a=e.style,r=e.className;return n.createElement("main",{id:"layout_main",style:a,className:r},n.createElement("div",{className:"container"},t))}},CDvA:function(e,t,a){e.exports=a.p+"static/banner_home-ceb272dada86851838d4c21a7c0ebc61.jpg"},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var c=typeof n;if("string"===c||"number"===c)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===c)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return i}));var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),s=a("1Jss"),l=a("0cdV");t.default=function(e){var t=e.data,a=e.pathContext,n=t.markdownRemark,i=(a.previous,a.next,n.frontmatter),o=i.title,m=i.cover,u=i.tags,d=i.date,p=i.author;return r.a.createElement("div",null,r.a.createElement(l.a,{banner:m,filter:!0},r.a.createElement("div",{className:"banner-post container"},r.a.createElement("h1",null,o),r.a.createElement("div",{className:"post-meta"},r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"iconfont icon-person"}),p||"Zprial"),r.a.createElement("div",{className:"item"},r.a.createElement("i",{className:"iconfont icon-date"}),d)),r.a.createElement("ul",{className:"post-tags"},u.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(c.a,{to:"/tags/"+e},e))}))))),r.a.createElement(s.a,{style:{backgroundColor:"#fff"}},r.a.createElement("div",{className:"markdown-body",dangerouslySetInnerHTML:{__html:n.html}})))};var i="2117009068"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d3fc9dc1609b316db64c.js.map