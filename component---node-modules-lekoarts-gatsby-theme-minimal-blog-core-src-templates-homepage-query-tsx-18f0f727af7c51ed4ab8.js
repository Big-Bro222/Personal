(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[366],{51223:function(e,t,n){var r=n(5112),a=n(70030),o=n(3070),i=r("unscopables"),c=Array.prototype;null==c[i]&&o.f(c,i,{configurable:!0,value:a(null)}),e.exports=function(e){c[i][e]=!0}},77475:function(e,t,n){var r=n(17854),a=n(43157),o=n(4411),i=n(70111),c=n(5112)("species"),u=r.Array;e.exports=function(e){var t;return a(e)&&(t=e.constructor,(o(t)&&(t===u||a(t.prototype))||i(t)&&null===(t=t[c]))&&(t=void 0)),void 0===t?u:t}},65417:function(e,t,n){var r=n(77475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},70648:function(e,t,n){var r=n(17854),a=n(51694),o=n(60614),i=n(84326),c=n(5112)("toStringTag"),u=r.Object,s="Arguments"==i(function(){return arguments}());e.exports=a?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=u(e),c))?n:s?i(t):"Object"==(r=i(t))&&o(t.callee)?"Arguments":r}},6790:function(e,t,n){"use strict";var r=n(17854),a=n(43157),o=n(26244),i=n(49974),c=r.TypeError,u=function(e,t,n,r,s,l,p,f){for(var m,d,v=s,y=0,h=!!p&&i(p,f);y<r;){if(y in n){if(m=h?h(n[y],y,t):n[y],l>0&&a(m))d=o(m),v=u(e,t,m,d,v,l-1)-1;else{if(v>=9007199254740991)throw c("Exceed the acceptable array length");e[v]=m}v++}y++}return v};e.exports=u},49974:function(e,t,n){var r=n(1702),a=n(19662),o=n(34374),i=r(r.bind);e.exports=function(e,t){return a(e),void 0===t?e:o?i(e,t):function(){return e.apply(t,arguments)}}},60490:function(e,t,n){var r=n(35005);e.exports=r("document","documentElement")},43157:function(e,t,n){var r=n(84326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4411:function(e,t,n){var r=n(1702),a=n(47293),o=n(60614),i=n(70648),c=n(35005),u=n(42788),s=function(){},l=[],p=c("Reflect","construct"),f=/^\s*(?:class|function)\b/,m=r(f.exec),d=!f.exec(s),v=function(e){if(!o(e))return!1;try{return p(s,l,e),!0}catch(t){return!1}},y=function(e){if(!o(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return d||!!m(f,u(e))}catch(t){return!0}};y.sham=!0,e.exports=!p||a((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?y:v},70030:function(e,t,n){var r,a=n(19670),o=n(36048),i=n(80748),c=n(3501),u=n(60490),s=n(80317),l=n(6200),p=l("IE_PROTO"),f=function(){},m=function(e){return"<script>"+e+"</"+"script>"},d=function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{r=new ActiveXObject("htmlfile")}catch(a){}var e,t;v="undefined"!=typeof document?document.domain&&r?d(r):((t=s("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(m("document.F=Object")),e.close(),e.F):d(r);for(var n=i.length;n--;)delete v.prototype[i[n]];return v()};c[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(f.prototype=a(e),n=new f,f.prototype=null,n[p]=e):n=v(),void 0===t?n:o.f(n,t)}},36048:function(e,t,n){var r=n(19781),a=n(3353),o=n(3070),i=n(19670),c=n(45656),u=n(81956);t.f=r&&!a?Object.defineProperties:function(e,t){i(e);for(var n,r=c(t),a=u(t),s=a.length,l=0;s>l;)o.f(e,n=a[l++],r[n]);return e}},81956:function(e,t,n){var r=n(16324),a=n(80748);e.exports=Object.keys||function(e){return r(e,a)}},51694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},84944:function(e,t,n){"use strict";var r=n(82109),a=n(6790),o=n(47908),i=n(26244),c=n(19303),u=n(65417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=o(this),n=i(t),r=u(t,0);return r.length=a(r,t,t,n,0,void 0===e?1:c(e)),r}})},33792:function(e,t,n){n(51223)("flat")},97153:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(67294),a=n(70977),o=n(1597),i=n(97274),c=n(57296),u=n(3691),s=function(e){var t=e.children;return(0,a.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},l=n(99105),p=n(46938),f=n(90944),m=n(9591),d=n(63366),v=n(64983),y=n(94578),h=n(93433);var x=n(59199),b=n(40181);function g(e){return function(e){if(Array.isArray(e))return e}(e)||(0,x.Z)(e)||(0,b.Z)(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=n(15861),k=(n(84944),n(33792),n(87757)),j=n.n(k),Z=j().mark(X),A=j().mark(D),E=j().mark(F);function N(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,a=function(){};return{s:a,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw o}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function _(e){return O.apply(this,arguments)}function O(){return O=(0,w.Z)(j().mark((function e(t){var n,r,a,o,i,c,u=arguments;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=u.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=u[a];o=0,i=r;case 2:if(!(o<i.length)){e.next=21;break}c=i[o],e.t0=typeof c,e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,C(t,c);case 9:return e.abrupt("break",18);case 10:return e.next=12,S(c);case 12:return e.abrupt("break",18);case 13:return e.next=15,c.apply(void 0,[t].concat(r));case 15:return e.abrupt("break",18);case 16:return e.next=18,c;case 18:o++,e.next=2;break;case 21:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function C(e,t){return P.apply(this,arguments)}function P(){return(P=(0,w.Z)(j().mark((function e(t,n){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=B(t.textContent,n),e.next=3,R(t,[].concat((0,h.Z)(F(t.textContent,r)),(0,h.Z)(D(n,r))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(e){return I.apply(this,arguments)}function I(){return(I=(0,w.Z)(j().mark((function e(t){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return M.apply(this,arguments)}function M(){return M=(0,w.Z)(j().mark((function e(t,n){var r,a,o,i=arguments;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=i.length>2&&void 0!==i[2]?i[2]:60,a=N(X(n)),e.prev=2,a.s();case 4:if((o=a.n()).done){e.next=11;break}return(0,o.value)(t),e.next=9,S(r+r*(Math.random()-.5));case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),a.e(e.t0);case 16:return e.prev=16,a.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])}))),M.apply(this,arguments)}function X(e){var t,n,r;return j().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=N(e),a.prev=1,r=j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=t}))};case 3:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){a.next=8;break}return a.delegateYield(r(),"t0",6);case 6:a.next=4;break;case 8:a.next=13;break;case 10:a.prev=10,a.t1=a.catch(1),t.e(a.t1);case 13:return a.prev=13,t.f(),a.finish(13);case 16:case"end":return a.stop()}}),Z,null,[[1,10,13,16]])}function D(e){var t,n,r,a,o=arguments;return j().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=g(e),n=t.slice(0),r=o.length>1&&void 0!==o[1]?o[1]:0,a=o.length>2&&void 0!==o[2]?o[2]:n.length;case 3:if(!(r<a)){i.next=8;break}return i.next=6,n.slice(0,++r).join("");case 6:i.next=3;break;case 8:case"end":return i.stop()}}),A)}function F(e){var t,n,r,a,o=arguments;return j().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=g(e),n=t.slice(0),r=o.length>1&&void 0!==o[1]?o[1]:0,a=o.length>2&&void 0!==o[2]?o[2]:n.length;case 3:if(!(a>r)){i.next=8;break}return i.next=6,n.slice(0,--a).join("");case 6:i.next=3;break;case 8:case"end":return i.stop()}}),E)}function B(e,t){var n=g(t).slice(0);return[].concat((0,h.Z)(e),[NaN]).findIndex((function(e,t){return n[t]!==e}))}var G="styles_type__2Teeh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}(".styles_type__2Teeh::after {\n  content: '|';\n  animation: styles_cursor__14ty0 1.1s infinite step-start;\n}\n\n@keyframes styles_cursor__14ty0 {\n  50% {\n    opacity: 0;\n  }\n}\n");var L=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},U=(0,r.memo)((function(e){var t=e.sequence,n=e.repeat,a=e.className,o=e.wrapper,i=void 0===o?"p":o,c=e.cursor,u=void 0===c||c,s=(0,r.useRef)(null),l=G,p=void 0;p=a&&a.length>0?u?l+" "+a:a:u?l:"",(0,r.useEffect)((function(){n===1/0?_.apply(void 0,[s.current].concat(L(t),[_])):"number"==typeof n?_.apply(void 0,[s.current].concat(L(Array(n).fill(t).flat()))):_.apply(void 0,[s.current].concat(L(t)))}));var f=i;return r.createElement(f,{className:p,ref:s})})),H=function(e){function t(){return e.apply(this,arguments)||this}return(0,y.Z)(t,e),t.prototype.render=function(){return r.createElement("div",{className:"p"},r.createElement("b",null,"I am"," ",r.createElement(U,{cursor:!0,sequence:["a Unity Developer",3e3,"a UX Engineer",3e3,"an XR Enthusiast",3e3,"a Traveller"],wrapper:"text",repeat:1/0})))},t}(r.Component),q=(n(2661),n.p+"static/VideoProject-549aac062295e38b8cbe3947c4733335.mp4"),z=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return(0,y.Z)(t,e),t.prototype.render=function(){var e,t=(new Date).getHours();switch(!0){case t>=18:e="Good evening ! 晚上好 ！";break;case t>=13:e="Good afternoon ! 下午好 ！";break;case t>=11:e="Hi ! 你好 ！";break;case t>=6:e="Good morning ! 早上好 ！";break;default:e="Hi ! 你好！"}return r.createElement("div",{id:"wrapper"},r.createElement("div",{id:"description"},r.createElement("div",{className:"p"},e),r.createElement("div",{className:"p"},"I'm Qi. Welcome to my blog."),r.createElement(H,null)),r.createElement("video",{className:"videobackground",autoPlay:!0,loop:!0,muted:!0},r.createElement("source",{src:q,type:"video/mp4"})))},t}(r.Component),W=["components"],V={_frontmatter:{}};function Q(e){var t=e.components,n=(0,d.Z)(e,W);return(0,v.mdx)("wrapper",Object.assign({},V,n,{components:t,mdxType:"MDXLayout"}),(0,v.mdx)(z,{mdxType:"LandingPage"}))}Q.isMDXComponent=!0;var Y,$=["components"],J=(Y="Title",function(e){return console.warn("Component "+Y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,v.mdx)("div",e)}),K={_frontmatter:{}};function ee(e){var t=e.components,n=(0,d.Z)(e,$);return(0,v.mdx)("wrapper",Object.assign({},K,n,{components:t,mdxType:"MDXLayout"}),(0,v.mdx)(J,{text:"Projects",mdxType:"Title"}),(0,v.mdx)("ul",null,(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/project/pineverse"},"Pineverse (Unity)")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/project/mrvis"},"MR vis")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/project/holopiano"},"HoloPiano")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/project/rugbeats"},"Rugbeats (java)")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"https://github.com/Big-Bro222/InfoVis"},"Infographic on RER B (Paris metro) incidents")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/project/previous"},"Previous project"))))}ee.isMDXComponent=!0;var te=function(e){var t=e.posts,n=(0,l.Z)(),r=n.basePath,d=n.blogPath,v=(0,p.Z)().siteTitle;return(0,a.tZ)(i.Z,null,(0,a.tZ)("h1",{sx:m.j},v),(0,a.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,a.tZ)(Q,null)),(0,a.tZ)(c.Z,{text:"Latest Posts"},(0,a.tZ)(o.Link,{to:(0,f.Z)("/"+r+"/"+d)},"Read all posts")),(0,a.tZ)(u.Z,{posts:t,showTags:!1}),(0,a.tZ)(s,null,(0,a.tZ)(ee,null)))};var ne=function(e){var t=Object.assign({},e),n=t.data.allPost;return r.createElement(te,Object.assign({posts:n.nodes},t))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-18f0f727af7c51ed4ab8.js.map