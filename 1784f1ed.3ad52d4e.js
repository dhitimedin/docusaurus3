(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=c.a.createContext({}),u=function(e){var t=c.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},O=function(e){var t=u(e.components);return c.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=u(n),j=r,s=O["".concat(b,".").concat(j)]||O[j]||p[j]||a;return n?c.a.createElement(s,l(l({ref:t},o),{},{components:n})):c.a.createElement(s,l({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,b=new Array(a);b[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,b[1]=l;for(var o=2;o<a;o++)b[o]=n[o];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},167:function(e,t,n){"use strict";var r=n(0),c=n(20);t.a=function(){const e=Object(r.useContext)(c.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return b}));var r=n(167),c=n(169);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(c.b)(n))return n;if(r)return t+n;const b=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+b:b}(t,e,n,r)}}function b(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},169:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function c(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}))},170:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAByCAYAAADUOdoJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEEzM0Y5NjMxMzc3MTFFQkExRTVDRkMzQjczQTAxODkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEEzM0Y5NjIxMzc3MTFFQkExRTVDRkMzQjczQTAxODkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTg5NjhBNzIxMkRGMTFFQkE5NzNDNTE0MkQxQkQzNzMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTg5NjhBNzMxMkRGMTFFQkE5NzNDNTE0MkQxQkQzNzMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6NbMhfAAAJo0lEQVR42uyd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"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return O}));var r=n(2),c=n(6),a=(n(0),n(166)),b=n(168),l={id:"Profile",title:"4.5. \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",sidebar_label:"\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932"},i={unversionedId:"chapter4/Profile",id:"chapter4/Profile",isDocsHomePage:!1,title:"4.5. \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",description:"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940",source:"@site/docs/chapter4/chap4.5_Profile.md",slug:"/chapter4/Profile",permalink:"/docusaurus3/chapter4/Profile",editUrl:"/docs/chapter4/chap4.5_Profile.md",version:"current",sidebar_label:"\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",sidebar:"Docs",previous:{title:"4.4. \u092e\u0941\u0916\u094d\u092f \u092e\u0947\u0928\u094d\u092f\u0942",permalink:"/docusaurus3/chapter4/Main_Menu"},next:{title:"4.6 \u0926\u0947\u092f \u0930\u093e\u0936\u093f (\u0905\u092e\u093e\u0909\u0902\u091f \u092a\u0947\u092f\u092c\u0932)",permalink:"/docusaurus3/chapter4/Amount_Payable"}},o=[{value:"4.5.1. \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",id:"451-\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",children:[]},{value:"4.5.2 \u092d\u0941\u0917\u0924\u093e\u0928",id:"452-\u092d\u0941\u0917\u0924\u093e\u0928",children:[]},{value:"4.5.3. \u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917",id:"453-\u092e\u0940\u091f\u0930-\u0930\u0940\u0921\u093f\u0902\u0917",children:[]}],u={rightToc:o};function O(e){var t=e.components,l=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932 \u092a\u0947\u091c \u0938\u0947 \u092f\u0942\u091c\u093c\u0930 \u0905\u092a\u0928\u0947 \u0916\u093e\u0924\u0947 \u0915\u0947 \u0935\u093f\u0935\u0930\u0923 \u0924\u0915 \u092a\u0939\u0941\u0901\u091a \u0938\u0915\u0924\u093e \u0939\u0948\u0964"),Object(a.b)("li",{parentName:"ul"},"\u0907\u0938\u092e\u0947\u0902 \u0938\u094d\u0935\u092f\u0902 \u0915\u093e \u0935\u093f\u0935\u0930\u0923, \u0935\u093f\u0917\u0924 \u092d\u0941\u0917\u0924\u093e\u0928 \u0914\u0930 \u092c\u093f\u091c\u0932\u0940 \u0915\u0940 \u0916\u092a\u0924 \u0915\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u092e\u093f\u0932 \u091c\u093e\u0924\u0940 \u0939\u0948\u0964")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u092d\u0941\u0917\u0924\u093e\u0928"),Object(a.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u0909\u092a\u092d\u094b\u0915\u094d\u0924\u093e \u0915\u0947 \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932 \u0935\u093f\u0935\u0930\u0923 \u0915\u0947 \u0938\u093e\u0925"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u0940 \u0915\u093e\u0932\u093e\u0928\u0941\u0915\u094d\u0930\u092e\u093f\u0915 \u0938\u0942\u091a\u0940"),Object(a.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u090a\u0930\u094d\u091c\u093e \u0916\u092a\u0924 \u0915\u093e \u0915\u093e\u0932\u093e\u0928\u0941\u0915\u094d\u0930\u092e\u093f\u0915 \u0930\u093f\u0915\u0949\u0930\u094d\u0921")))),Object(a.b)("h2",{id:"451-\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932"},"4.5.1. \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u0907\u0938 \u0938\u0947\u0915\u094d\u0936\u0928 \u092e\u0947\u0902 \u092f\u0942\u091c\u093c\u0930 \u0915\u0947 \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932 \u0938\u0902\u092c\u0902\u0927\u0940 \u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0930\u0939\u0924\u0940 \u0939\u0948\u0964")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u092a\u0947\u091c \u0915\u0947 \u0921\u093f\u091f\u0947\u0932")),Object(a.b)("br",{clear:"right"}),Object(a.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/4.5.1_Profile.png"),alt:"Profile",width:"250"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u0928\u0947\u0935\u093f\u0917\u0947\u0936\u0928 \u092c\u093e\u0930")," \u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u091f\u0948\u092c \u0915\u094b \u0907\u0902\u0917\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948 \u0914\u0930 \u091f\u0948\u092c \u0915\u0947 \u092c\u0940\u091a \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0926\u0947\u0924\u093e \u0939\u0948\n",Object(a.b)("img",{alt:"Left Right Nav",src:n(170).default})),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u092e\u0942\u0932 \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932")," \u091c\u093f\u0938\u092e\u0947\u0902 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0915\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0939\u094b\u0924\u0940 \u0939\u0948"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u0935\u093f\u0935\u0930\u0923")," \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u0947 \u092c\u093f\u091c\u0932\u0940 \u092a\u0948\u0915\u0947\u091c \u0935\u093f\u0935\u0930\u0923 \u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u092e\u094b\u092c\u093e\u0907\u0932")," \u0916\u093e\u0924\u093e \u0938\u0947 \u091c\u0941\u0921\u093c\u093e \u0928\u0902\u092c\u0930")),Object(a.b)("br",{clear:"both"}),Object(a.b)("h2",{id:"452-\u092d\u0941\u0917\u0924\u093e\u0928"},"4.5.2 \u092d\u0941\u0917\u0924\u093e\u0928"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u092d\u0941\u0917\u0924\u093e\u0928 \u092a\u0947\u091c \u092e\u0947\u0902 \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u094b \u091c\u093e\u0930\u0940 \u0915\u093f\u090f \u0917\u090f \u092c\u093f\u0932\u094b\u0902 \u0914\u0930 \u0917\u094d\u0930\u093e\u0939\u0915 \u0926\u094d\u0935\u093e\u0930\u093e \u0915\u093f\u090f \u0917\u090f \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u093e \u0930\u093f\u0915\u0949\u0930\u094d\u0921 \u0924\u093e\u0930\u0940\u0916 \u0915\u0947 \u0915\u094d\u0930\u092e (\u0915\u094d\u0930\u094b\u0928\u0932\u0949\u091c\u093f\u0915\u0932 \u0911\u0930\u094d\u0921\u0930) \u092e\u0947\u0902 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948\u0964")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u092a\u0947\u091c \u0915\u0947 \u0921\u093f\u091f\u0947\u0932")),Object(a.b)("br",{clear:"right"}),Object(a.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/4.5.2_Payment.png"),alt:"Payments",width:"250"}),Object(a.b)("br",null),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u0928\u0947\u0935\u093f\u0917\u0947\u0936\u0928 \u092c\u093e\u0930")," \u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u091f\u0948\u092c \u0915\u094b \u0907\u0902\u0917\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948 \u0914\u0930 \u091f\u0948\u092c \u0915\u0947 \u092c\u0940\u091a \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0926\u0947\u0924\u093e \u0939\u0948"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u092d\u0941\u0917\u0924\u093e\u0928 \u0938\u0942\u091a\u0940")," \u092c\u093f\u0932 \u0938\u0947 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u0905\u0928\u094d\u092f \u092a\u094d\u0930\u093e\u0938\u0902\u0917\u093f\u0915 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u0947 \u0938\u093e\u0925 \u0917\u094d\u0930\u093e\u0939\u0915 \u0926\u094d\u0935\u093e\u0930\u093e \u0915\u093f\u090f \u0917\u090f \u0938\u092d\u0940 \u092d\u0941\u0917\u0924\u093e\u0928\u094b\u0902 \u0915\u0940 \u0938\u0942\u091a\u0940 \u0914\u0930 \u091f\u093e\u0907\u092e\u0938\u094d\u091f\u0948\u092e\u094d\u092a")),Object(a.b)("br",{clear:"both"}),Object(a.b)("h2",{id:"453-\u092e\u0940\u091f\u0930-\u0930\u0940\u0921\u093f\u0902\u0917"},"4.5.3. \u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917 \u092a\u0947\u091c \u092e\u0947\u0902 \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u0940 \u092c\u093f\u091c\u0932\u0940 \u0915\u0940 \u0916\u092a\u0924 \u0915\u093e \u0935\u093f\u0935\u0930\u0923 \u0924\u093e\u0930\u0940\u0916 \u0915\u0947 \u0915\u094d\u0930\u092e (\u0915\u094d\u0930\u0949\u0928\u0932\u0949\u091c\u093f\u0915\u0932 \u0911\u0930\u094d\u0921\u0930) \u092e\u0947\u0902 \u0926\u093f\u092f\u093e \u0939\u094b\u0924\u093e \u0939\u0948\u0964"),Object(a.b)("li",{parentName:"ul"},"\u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917 \u0915\u0940 \u092c\u093e\u0930\u0902\u092c\u093e\u0930\u0924\u093e (\u092b\u094d\u0930\u093f\u0915\u094d\u0935\u0947\u0902\u0938\u093f) \u0905\u0932\u0917-\u0905\u0932\u0917 \u0939\u094b\u0924\u0940 \u0939\u0948\u0964")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"\u092a\u0947\u091c \u0915\u0947 \u0921\u093f\u091f\u0947\u0932")),Object(a.b)("br",{clear:"right"}),Object(a.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/4.5.3_MeterReading.png"),alt:"Meter Reading",width:"250"}),Object(a.b)("br",null),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u0928\u0947\u0935\u093f\u0917\u0947\u0936\u0928 \u092c\u093e\u0930")," \u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u091f\u0948\u092c \u0915\u094b \u0907\u0902\u0917\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948 \u0914\u0930 \u091f\u0948\u092c \u0915\u0947 \u092c\u0940\u091a \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0926\u0947\u0924\u093e \u0939\u0948"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917")," \u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917 \u0938\u0947 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u0905\u0928\u094d\u092f \u092a\u094d\u0930\u093e\u0938\u0902\u0917\u093f\u0915 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u0947 \u0938\u093e\u0925 \u090f\u0915 \u0915\u093e\u0932\u093e\u0928\u0941\u0915\u094d\u0930\u092e\u093f\u0915 \u0915\u094d\u0930\u092e \u092e\u0947\u0902 \u0926\u093f\u0916\u093e\u092f\u093e \u0917\u092f\u093e \u0935\u093f\u0935\u0930\u0923"),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"\u092e\u0940\u091f\u0930 \u0928\u0902\u092c\u0930")," \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u0947 \u0915\u0908 \u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u0939\u094b\u0928\u0947 \u0915\u0940 \u0938\u094d\u0925\u093f\u0924\u093f \u092e\u0947\u0902 \u091a\u0941\u0928\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948")),Object(a.b)("br",{clear:"both"}))}O.isMDXComponent=!0}}]);