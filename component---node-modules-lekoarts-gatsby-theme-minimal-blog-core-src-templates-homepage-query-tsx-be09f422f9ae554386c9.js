(self.webpackChunkminimal_blog=self.webpackChunkminimal_blog||[]).push([[366],{51223:function(e,t,n){var r=n(5112),o=n(70030),a=n(3070),i=r("unscopables"),c=Array.prototype;null==c[i]&&a.f(c,i,{configurable:!0,value:o(null)}),e.exports=function(e){c[i][e]=!0}},77475:function(e,t,n){var r=n(17854),o=n(43157),a=n(4411),i=n(70111),c=n(5112)("species"),u=r.Array;e.exports=function(e){var t;return o(e)&&(t=e.constructor,(a(t)&&(t===u||o(t.prototype))||i(t)&&null===(t=t[c]))&&(t=void 0)),void 0===t?u:t}},65417:function(e,t,n){var r=n(77475);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},70648:function(e,t,n){var r=n(17854),o=n(51694),a=n(60614),i=n(84326),c=n(5112)("toStringTag"),u=r.Object,s="Arguments"==i(function(){return arguments}());e.exports=o?i:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(n){}}(t=u(e),c))?n:s?i(t):"Object"==(r=i(t))&&a(t.callee)?"Arguments":r}},6790:function(e,t,n){"use strict";var r=n(17854),o=n(43157),a=n(26244),i=n(49974),c=r.TypeError,u=function(e,t,n,r,s,l,f,p){for(var d,m,v=s,y=0,h=!!f&&i(f,p);y<r;){if(y in n){if(d=h?h(n[y],y,t):n[y],l>0&&o(d))m=a(d),v=u(e,t,d,m,v,l-1)-1;else{if(v>=9007199254740991)throw c("Exceed the acceptable array length");e[v]=d}v++}y++}return v};e.exports=u},49974:function(e,t,n){var r=n(1702),o=n(19662),a=n(34374),i=r(r.bind);e.exports=function(e,t){return o(e),void 0===t?e:a?i(e,t):function(){return e.apply(t,arguments)}}},60490:function(e,t,n){var r=n(35005);e.exports=r("document","documentElement")},43157:function(e,t,n){var r=n(84326);e.exports=Array.isArray||function(e){return"Array"==r(e)}},4411:function(e,t,n){var r=n(1702),o=n(47293),a=n(60614),i=n(70648),c=n(35005),u=n(42788),s=function(){},l=[],f=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,d=r(p.exec),m=!p.exec(s),v=function(e){if(!a(e))return!1;try{return f(s,l,e),!0}catch(t){return!1}},y=function(e){if(!a(e))return!1;switch(i(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return m||!!d(p,u(e))}catch(t){return!0}};y.sham=!0,e.exports=!f||o((function(){var e;return v(v.call)||!v(Object)||!v((function(){e=!0}))||e}))?y:v},70030:function(e,t,n){var r,o=n(19670),a=n(36048),i=n(80748),c=n(3501),u=n(60490),s=n(80317),l=n(6200),f=l("IE_PROTO"),p=function(){},d=function(e){return"<script>"+e+"</"+"script>"},m=function(e){e.write(d("")),e.close();var t=e.parentWindow.Object;return e=null,t},v=function(){try{r=new ActiveXObject("htmlfile")}catch(o){}var e,t;v="undefined"!=typeof document?document.domain&&r?m(r):((t=s("iframe")).style.display="none",u.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(d("document.F=Object")),e.close(),e.F):m(r);for(var n=i.length;n--;)delete v.prototype[i[n]];return v()};c[f]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(p.prototype=o(e),n=new p,p.prototype=null,n[f]=e):n=v(),void 0===t?n:a.f(n,t)}},36048:function(e,t,n){var r=n(19781),o=n(3353),a=n(3070),i=n(19670),c=n(45656),u=n(81956);t.f=r&&!o?Object.defineProperties:function(e,t){i(e);for(var n,r=c(t),o=u(t),s=o.length,l=0;s>l;)a.f(e,n=o[l++],r[n]);return e}},81956:function(e,t,n){var r=n(16324),o=n(80748);e.exports=Object.keys||function(e){return r(e,o)}},51694:function(e,t,n){var r={};r[n(5112)("toStringTag")]="z",e.exports="[object z]"===String(r)},84944:function(e,t,n){"use strict";var r=n(82109),o=n(6790),a=n(47908),i=n(26244),c=n(19303),u=n(65417);r({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=a(this),n=i(t),r=u(t,0);return r.length=o(r,t,t,n,0,void 0===e?1:c(e)),r}})},33792:function(e,t,n){n(51223)("flat")},41289:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return te}});var r=n(67294),o=n(70977),a=n(1597),i=n(97274),c=n(57296),u=n(3691),s=function(e){var t=e.children;return(0,o.tZ)("section",{sx:{mb:[5,5,6],ul:{margin:0,padding:0},li:{listStyle:"none",mb:3,a:{variant:"links.listItem"}},variant:"section_bottom"}},t)},l=n(99105),f=n(46938),p=n(90944),d=n(9591),m=n(63366),v=n(64983),y=n(94578),h=n(93433);var x=n(59199),b=n(40181);function g(e){return function(e){if(Array.isArray(e))return e}(e)||(0,x.Z)(e)||(0,b.Z)(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var w=n(15861),k=(n(84944),n(33792),n(87757)),A=n.n(k),Z=A().mark(D),j=A().mark(R),T=A().mark(F);function _(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==n.return||n.return()}finally{if(c)throw a}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function O(e){return C.apply(this,arguments)}function C(){return C=(0,w.Z)(A().mark((function e(t){var n,r,o,a,i,c,u=arguments;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=u.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=u[o];a=0,i=r;case 2:if(!(a<i.length)){e.next=21;break}c=i[a],e.t0=typeof c,e.next="string"===e.t0?7:"number"===e.t0?10:"function"===e.t0?13:16;break;case 7:return e.next=9,E(t,c);case 9:return e.abrupt("break",18);case 10:return e.next=12,P(c);case 12:return e.abrupt("break",18);case 13:return e.next=15,c.apply(void 0,[t].concat(r));case 15:return e.abrupt("break",18);case 16:return e.next=18,c;case 18:a++,e.next=2;break;case 21:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function E(e,t){return S.apply(this,arguments)}function S(){return(S=(0,w.Z)(A().mark((function e(t,n){var r;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=z(t.textContent,n),e.next=3,M(t,[].concat((0,h.Z)(F(t.textContent,r)),(0,h.Z)(R(n,r))));case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e){return I.apply(this,arguments)}function I(){return(I=(0,w.Z)(A().mark((function e(t){return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){return setTimeout(e,t)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function M(e,t){return X.apply(this,arguments)}function X(){return X=(0,w.Z)(A().mark((function e(t,n){var r,o,a,i=arguments;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=i.length>2&&void 0!==i[2]?i[2]:60,o=_(D(n)),e.prev=2,o.s();case 4:if((a=o.n()).done){e.next=11;break}return(0,a.value)(t),e.next=9,P(r+r*(Math.random()-.5));case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),o.e(e.t0);case 16:return e.prev=16,o.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])}))),X.apply(this,arguments)}function D(e){var t,n,r;return A().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:t=_(e),o.prev=1,r=A().mark((function e(){var t;return A().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.value,e.next=3,function(e){return requestAnimationFrame((function(){return e.textContent=t}))};case 3:case"end":return e.stop()}}),e)})),t.s();case 4:if((n=t.n()).done){o.next=8;break}return o.delegateYield(r(),"t0",6);case 6:o.next=4;break;case 8:o.next=13;break;case 10:o.prev=10,o.t1=o.catch(1),t.e(o.t1);case 13:return o.prev=13,t.f(),o.finish(13);case 16:case"end":return o.stop()}}),Z,null,[[1,10,13,16]])}function R(e){var t,n,r,o,a=arguments;return A().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=g(e),n=t.slice(0),r=a.length>1&&void 0!==a[1]?a[1]:0,o=a.length>2&&void 0!==a[2]?a[2]:n.length;case 3:if(!(r<o)){i.next=8;break}return i.next=6,n.slice(0,++r).join("");case 6:i.next=3;break;case 8:case"end":return i.stop()}}),j)}function F(e){var t,n,r,o,a=arguments;return A().wrap((function(i){for(;;)switch(i.prev=i.next){case 0:t=g(e),n=t.slice(0),r=a.length>1&&void 0!==a[1]?a[1]:0,o=a.length>2&&void 0!==a[2]?a[2]:n.length;case 3:if(!(o>r)){i.next=8;break}return i.next=6,n.slice(0,--o).join("");case 6:i.next=3;break;case 8:case"end":return i.stop()}}),T)}function z(e,t){var n=g(t).slice(0);return[].concat((0,h.Z)(e),[NaN]).findIndex((function(e,t){return n[t]!==e}))}var L="styles_type__2Teeh";!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}(".styles_type__2Teeh::after {\n  content: '|';\n  animation: styles_cursor__14ty0 1.1s infinite step-start;\n}\n\n@keyframes styles_cursor__14ty0 {\n  50% {\n    opacity: 0;\n  }\n}\n");var U,W=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},q=(0,r.memo)((function(e){var t=e.sequence,n=e.repeat,o=e.className,a=e.wrapper,i=void 0===a?"p":a,c=e.cursor,u=void 0===c||c,s=(0,r.useRef)(null),l=L,f=void 0;f=o&&o.length>0?u?l+" "+o:o:u?l:"",(0,r.useEffect)((function(){n===1/0?O.apply(void 0,[s.current].concat(W(t),[O])):"number"==typeof n?O.apply(void 0,[s.current].concat(W(Array(n).fill(t).flat()))):O.apply(void 0,[s.current].concat(W(t)))}));var p=i;return r.createElement(p,{className:f,ref:s})})),B=function(e){function t(){return e.apply(this,arguments)||this}return(0,y.Z)(t,e),t.prototype.render=function(){return r.createElement("b",null,"I am"," ",r.createElement(q,{cursor:!0,sequence:["a Unity Developer",3e3,"a UX Engineer",3e3,"an XR Enthusiast",3e3,"a Traveller"],wrapper:"text",repeat:1/0}))},t}(r.Component),G=["components"],H=(U="Text",function(e){return console.warn("Component "+U+" was not imported, exported, or provided by MDXProvider as global scope"),(0,v.mdx)("div",e)}),Q={_frontmatter:{}};function Y(e){var t=e.components,n=(0,m.Z)(e,G);return(0,v.mdx)("wrapper",Object.assign({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,v.mdx)(H,{sx:{fontSize:[4,5,6],fontWeight:"bold",color:"heading"},mdxType:"Text"},"Hi 欢迎！"),(0,v.mdx)("p",null,"I'm Qi. Welcome to my blog. "),(0,v.mdx)(B,{mdxType:"TypeAnim"}))}Y.isMDXComponent=!0;var $=["components"],J=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,v.mdx)("div",t)}}("Title"),K={_frontmatter:{}};function V(e){var t=e.components,n=(0,m.Z)(e,$);return(0,v.mdx)("wrapper",Object.assign({},K,n,{components:t,mdxType:"MDXLayout"}),(0,v.mdx)(J,{text:"Projects",mdxType:"Title"}),(0,v.mdx)("ul",null,(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/project/holopiano"},"HoloPiano")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/test"},"MR vis")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/test"},"Rugbeats")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/test"},"Previous project")),(0,v.mdx)("li",{parentName:"ul"},(0,v.mdx)("a",{parentName:"li",href:"/test"},"Pineverse"))))}V.isMDXComponent=!0;var ee=function(e){var t=e.posts,n=(0,l.Z)(),r=n.basePath,m=n.blogPath,v=(0,f.Z)().siteTitle;return(0,o.tZ)(i.Z,null,(0,o.tZ)("h1",{sx:d.j},v),(0,o.tZ)("section",{sx:{mb:[5,6,7],p:{fontSize:[1,2,3],mt:2},variant:"section_hero"}},(0,o.tZ)(Y,null)),(0,o.tZ)(c.Z,{text:"Latest Posts"},(0,o.tZ)(a.Link,{to:(0,p.Z)("/"+r+"/"+m)},"Read all posts")),(0,o.tZ)(u.Z,{posts:t,showTags:!1}),(0,o.tZ)(s,null,(0,o.tZ)(V,null)))};var te=function(e){var t=Object.assign({},e),n=t.data.allPost;return r.createElement(ee,Object.assign({posts:n.nodes},t))}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-homepage-query-tsx-be09f422f9ae554386c9.js.map