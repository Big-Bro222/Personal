(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[366],{51223:function(e,t,n){var r=n(5112),o=n(70030),a=n(3070),c=r("unscopables"),i=Array.prototype;null==i[c]&&a.f(i,c,{configurable:!0,value:o(null)}),e.exports=function(e){i[c][e]=!0}},77475:function(e,t,n){var r=n(17854),o=n(43157),a=n(4411),c=n(70111),i=n(5112)("species"),u=r.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,(a(t)&&(t===u||o(t.prototype))||c(t)&&null===(t=t[i]))&&(t=void 0)),void 0===t?u:t}},65417:function(e,t,n){var r=n(77475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},70648:function(e,t,n){var r=n(17854),o=n(51694),a=n(60614),c=n(84326),i=n(5112)("toStringTag"),u=r.Object,s="Arguments"==c(function(){return arguments}());e.exports=o?c:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=u(e),i))?n:s?c(t):"Object"==(r=c(t))&&a(t.callee)?"Arguments":r}},6790:function(e,t,n){"use strict";var r=n(17854),o=n(43157),a=n(26244),c=n(49974),i=r.TypeError,u=function(e,t,n,r,s,l,p,f){for(var d,v,m=s,y=0,h=!!p&&c(p,f);y<r;){if(y in n){if(d=h?h(n[y],y,t):n[y],l>0&&o(d))v=a(d),m=u(e,t,d,v,m,l-1)-1;else{if(m>=9007199254740991)throw i("Exceed the acceptable array length");e[m]=d}m++}y++}return m};e.exports=u},49974:function(e,t,n){var r=n(1702),o=n(19662),a=n(34374),c=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:a?c(e,t):function(){return e.apply(t,arguments)}}},60490:function(e,t,n){var r=n(35005);e.exports=r("document","documentElement")},43157:function(e,t,n){var r=n(84326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4411:function(e,t,n){var r=n(1702),o=n(47293),a=n(60614),c=n(70648),i=n(35005),u=n(42788),s=function(){},l=[],p=i("Reflect","construct"),f=/^\s*(?:class|function)\b/,d=r(f.exec),v=!f.exec(s),m=function(e){if(!a(e))return!1;try{return p(s,l,e),!0}catch(t){return!1}},y=function(e){if(!a(e))return!1;switch(c(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return v||!!d(f,u(e))}catch(t){return!0}};y.sham=!0,e.exports=!p||o((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?y:m},70030:function(e,t,n){var r,o=n(19670),a=n(36048),c=n(80748),i=n(3501),u=n(60490),s=n(80317),l=n(6200),p=l("IE_PROTO"),f=function(){},d=function(e){return"<script>"+e+"</"+"script>"},v=function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t},m=function(){try{r=new ActiveXObject("htmlfile")}catch(o){}var e,t;m="undefined"!=typeof document?document.domain&&r?v(r):((t=s("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F):v(r);for(var n=c.length;n--;)delete m.prototype[c[n]];return m()};i[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(f.prototype=o(e),n=new f,f.prototype=null,n[p]=e):n=m(),void 0===t?n:a.f(n,t)}},36048:function(e,t,n){var r=n(19781),o=n(3353),a=n(3070),c=n(19670),i=n(45656),u=n(81956);t.f=r&&!o?Object.defineProperties:function(e,t){c(e);for(var n,r=i(t),o=u(t),s=o.length,l=0;s>l;)a.f(e,n=o[l++],r[n]);return e}},81956:function(e,t,n){var r=n(16324),o=n(80748);e.exports=Object.keys||function(e){return r(e,o)}},51694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},84944:function(e,t,n){"use strict";var r=n(82109),o=n(6790),a=n(47908),c=n(26244),i=n(19303),u=n(65417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),n=c(t),r=u(t,0);return r.length=o(r,t,t,n,0,void 0===e?1:i(e)),r}})},33792:function(e,t,n){n(51223)("flat")},97153:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ne}});var r=n(67294),o=n(70977),a=n(1597),c=n(97274),i=n(57296),u=n(3691),s=function(e){var t=e.children;return(0,o.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},l=n(99105),p=n(46938),f=n(90944),d=n(9591),v=n(63366),m=n(64983),y=n(94578),h=n(93433);var b=n(59199),x=n(40181);function g(e){return function(e){if(Array.isArray(e))return e}(e)||(0,b.Z)(e)||(0,x.Z)(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=n(15861),k=(n(84944),n(33792),n(64687)),j=n.n(k),Z=j().mark(X),A=j().mark(D),E=j().mark(F);function T(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e){return C.apply(this,arguments)}function C(){return C=(0,w.Z)(j().mark((function e(t){var n,r,o,a,c,i,u=arguments;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=u.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=u[o];a=0,c=r;case 2:if(!(a<c.length)){e.next=21;break}i=c[a],e.t0=typeof i,e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,P(t,i);case 9:return e.abrupt("break",18);case 10:return e.next=12,I(i);case 12:return e.abrupt("break",18);case 13:return e.next=15,i.apply(void 0,[t].concat(r));case 15:return e.abrupt("break",18);case 16:return e.next=18,i;case 18:a++,e.next=2;break;case 21:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function P(e,t){return S.apply(this,arguments)}function S(){return(S=(0,w.Z)(j().mark((function e(t,n){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=U(t.textContent,n),e.next=3,R(t,[].concat((0,h.Z)(F(t.textContent,r)),(0,h.Z)(D(n,r))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function I(e){return N.apply(this,arguments)}function N(){return(N=(0,w.Z)(j().mark((function e(t){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function R(e,t){return M.apply(this,arguments)}function M(){return M=(0,w.Z)(j().mark((function e(t,n){var r,o,a,c=arguments;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=c.length>2&&void 0!==c[2]?c[2]:60,o=T(X(n)),e.prev=2,o.s();case 4:if((a=o.n()).done){e.next=11;break}return(0,a.value)(t),e.next=9,I(r+r*(Math.random()-.5));case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),o.e(e.t0);case 16:return e.prev=16,o.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])}))),M.apply(this,arguments)}function X(e){var t,n,r;return j().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t=T(e),o.prev=1,r=j().mark((function e(){var t;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=t}))};case 3:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){o.next=8;break}return o.delegateYield(r(),"t0",6);case 6:o.next=4;break;case 8:o.next=13;break;case 10:o.prev=10,o.t1=o.catch(1),t.e(o.t1);case 13:return o.prev=13,t.f(),o.finish(13);case 16:case"end":return o.stop()}}),Z,null,[[1,10,13,16]])}function D(e){var t,n,r,o,a=arguments;return j().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t=g(e),n=t.slice(0),r=a.length>1&&void 0!==a[1]?a[1]:0,o=a.length>2&&void 0!==a[2]?a[2]:n.length;case 3:if(!(r<o)){c.next=8;break}return c.next=6,n.slice(0,++r).join("");case 6:c.next=3;break;case 8:case"end":return c.stop()}}),A)}function F(e){var t,n,r,o,a=arguments;return j().wrap((function(c){for(;;)switch(c.prev=c.next){case 0:t=g(e),n=t.slice(0),r=a.length>1&&void 0!==a[1]?a[1]:0,o=a.length>2&&void 0!==a[2]?a[2]:n.length;case 3:if(!(o>r)){c.next=8;break}return c.next=6,n.slice(0,--o).join("");case 6:c.next=3;break;case 8:case"end":return c.stop()}}),E)}function U(e,t){var n=g(t).slice(0);return[].concat((0,h.Z)(e),[NaN]).findIndex((function(e,t){return n[t]!==e}))}var B="styles_type__2Teeh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".styles_type__2Teeh::after {\n  content: '|';\n  animation: styles_cursor__14ty0 1.1s infinite step-start;\n}\n\n@keyframes styles_cursor__14ty0 {\n  50% {\n    opacity: 0;\n  }\n}\n");var G=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},L=(0,r.memo)((function(e){var t=e.sequence,n=e.repeat,o=e.className,a=e.wrapper,c=void 0===a?"p":a,i=e.cursor,u=void 0===i||i,s=(0,r.useRef)(null),l=B,p=void 0;p=o&&o.length>0?u?l+" "+o:o:u?l:"",(0,r.useEffect)((function(){n===1/0?O.apply(void 0,[s.current].concat(G(t),[O])):"number"==typeof n?O.apply(void 0,[s.current].concat(G(Array(n).fill(t).flat()))):O.apply(void 0,[s.current].concat(G(t)))}));var f=c;return r.createElement(f,{className:p,ref:s})})),H=function(e){function t(){return e.apply(this,arguments)||this}return(0,y.Z)(t,e),t.prototype.render=function(){return r.createElement("div",{className:"p"},r.createElement("b",null,"I am"," ",r.createElement(L,{cursor:!0,sequence:["a Unity Developer",3e3,"a UX Engineer",3e3,"an XR Enthusiast",3e3,"a Traveller"],wrapper:"text",repeat:1/0})))},t}(r.Component),q=n.p+"static/VideoProject-549aac062295e38b8cbe3947c4733335.mp4",z=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={},n}return(0,y.Z)(t,e),t.prototype.render=function(){var e,t=(new Date).getHours();switch(!0){case t>=18:e="Good evening ! 晚上好 ！";break;case t>=13:e="Good afternoon ! 下午好 ！";break;case t>=11:e="Hi ! 你好 ！";break;case t>=6:e="Good morning ! 早上好 ！";break;default:e="Hi ! 你好！"}return r.createElement("div",{className:"wrapper"},r.createElement("div",{id:"description"},r.createElement("div",{className:"p"},e),r.createElement("div",{className:"p"},"I'm Qi. Welcome to my blog."),r.createElement(H,null)),r.createElement("video",{className:"videobackground",autoPlay:!0,loop:!0,muted:!0},r.createElement("source",{src:q,type:"video/mp4"})))},t}(r.Component),W=["components"],V={_frontmatter:{}};function Q(e){var t=e.components,n=(0,v.Z)(e,W);return(0,m.mdx)("wrapper",Object.assign({},V,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)(z,{mdxType:"LandingPage"}))}Q.isMDXComponent=!0;var Y,$=["components"],J=(Y="Title",function(e){return console.warn("Component "+Y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,m.mdx)("div",e)}),K={_frontmatter:{}};function ee(e){var t=e.components,n=(0,v.Z)(e,$);return(0,m.mdx)("wrapper",Object.assign({},K,n,{components:t,mdxType:"MDXLayout"}),(0,m.mdx)(J,{text:"Projects",mdxType:"Title"}),"- [  MR vis](/project/mrvis) - [  HoloPiano](/project/holopiano) - [  Unity projects](/previous-project/UnityProjects) - [  Rugbeats (java)](/project/rugbeats) - [  Infographic on RER B (Paris metro) incidents](https://github.com/Big-Bro222/InfoVis) - [  Previous project](/project/previous)")}ee.isMDXComponent=!0;var te=function(e){var t=e.posts,n=(0,l.Z)(),r=n.basePath,v=n.blogPath,m=(0,p.Z)().siteTitle;return(0,o.tZ)(c.Z,null,(0,o.tZ)("h1",{sx:d.j},m),(0,o.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,o.tZ)(Q,null)),(0,o.tZ)(i.Z,{text:"Latest Posts"},(0,o.tZ)(a.Link,{to:(0,f.Z)("/"+r+"/"+v)},"Read all posts")),(0,o.tZ)(u.Z,{posts:t,showTags:!1}),(0,o.tZ)(s,null,(0,o.tZ)(ee,null)))};var ne=function(e){var t=Object.assign({},e),n=t.data.allPost;return r.createElement(te,Object.assign({posts:n.nodes},t))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-4c72e9b6e2568794f266.js.map