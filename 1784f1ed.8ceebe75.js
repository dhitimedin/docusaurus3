(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},b=Object.keys(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)n=b[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),u=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=u(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,i=A(e,["components","mdxType","originalType","parentName"]),o=u(n),g=r,O=o["".concat(c,".").concat(g)]||o[g]||p[g]||b;return n?a.a.createElement(O,l(l({ref:t},i),{},{components:n})):a.a.createElement(O,l({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=n.length,c=new Array(b);c[0]=g;var l={};for(var A in t)hasOwnProperty.call(t,A)&&(l[A]=t[A]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<b;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},167:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return c}));var r=n(167),a=n(169);function b(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:b=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=b();return n(e,t)}},169:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},170:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABHCAYAAADx2uLMAAAAAXNSR0IArs4c6QAAAKZlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAAiAAAAWodpAAQAAAABAAAAfAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABkoAMABAAAAAEAAABHAAAAAGDDsE4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAQVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NEEzM0Y5NjIxMzc3MTFFQkExRTVDRkMzQjczQTAxODk8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6MTg5NjhBNzIxMkRGMTFFQkE5NzNDNTE0MkQxQkQzNzM8L3N0UmVm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"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return A})),n.d(t,"rightToc",(function(){return i})),n.d(t,"Clear",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),b=(n(0),n(166)),c=n(168),l={id:"Profile",title:"4.5. \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",sidebar_label:"\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932"},A={unversionedId:"chapter4/Profile",id:"chapter4/Profile",isDocsHomePage:!1,title:"4.5. \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",description:"export const Clear = ({children}) => (",source:"@site/docs/chapter4/chap4.5_Profile.md",slug:"/chapter4/Profile",permalink:"/docusaurus3/chapter4/Profile",editUrl:"/docs/chapter4/chap4.5_Profile.md",version:"current",sidebar_label:"\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",sidebar:"Docs",previous:{title:"4.4. \u092e\u0941\u0916\u094d\u092f \u092e\u0947\u0928\u094d\u092f\u0942",permalink:"/docusaurus3/chapter4/Main_Menu"},next:{title:"4.6 \u0926\u0947\u092f \u0930\u093e\u0936\u093f (\u0905\u092e\u093e\u0909\u0902\u091f \u092a\u0947\u092f\u092c\u0932)",permalink:"/docusaurus3/chapter4/Amount_Payable"}},i=[{value:"4.5.1. \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",id:"451-\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932",children:[]},{value:"4.5.2 \u092d\u0941\u0917\u0924\u093e\u0928",id:"452-\u092d\u0941\u0917\u0924\u093e\u0928",children:[]},{value:"4.5.3. \u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917",id:"453-\u092e\u0940\u091f\u0930-\u0930\u0940\u0921\u093f\u0902\u0917",children:[]}],u=function(e){var t=e.children;return Object(b.b)("div",{style:{display:"table"}},t)},o={rightToc:i,Clear:u};function p(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932 \u092a\u0947\u091c \u0938\u0947 \u092f\u0942\u091c\u093c\u0930 \u0905\u092a\u0928\u0947 \u0916\u093e\u0924\u0947 \u0915\u0947 \u0935\u093f\u0935\u0930\u0923 \u0924\u0915 \u092a\u0939\u0941\u0901\u091a \u0938\u0915\u0924\u093e \u0939\u0948\u0964"),Object(b.b)("li",{parentName:"ul"},"\u0907\u0938\u092e\u0947\u0902 \u0938\u094d\u0935\u092f\u0902 \u0915\u093e \u0935\u093f\u0935\u0930\u0923, \u0935\u093f\u0917\u0924 \u092d\u0941\u0917\u0924\u093e\u0928 \u0914\u0930 \u092c\u093f\u091c\u0932\u0940 \u0915\u0940 \u0916\u092a\u0924 \u0915\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u092e\u093f\u0932 \u091c\u093e\u0924\u0940 \u0939\u0948\u0964")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u092d\u0941\u0917\u0924\u093e\u0928"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"\u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u0909\u092a\u092d\u094b\u0915\u094d\u0924\u093e \u0915\u0947 \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932 \u0935\u093f\u0935\u0930\u0923 \u0915\u0947 \u0938\u093e\u0925"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u0935\u094d\u092f\u0915\u094d\u0924\u093f\u0917\u0924 \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u0940 \u0915\u093e\u0932\u093e\u0928\u0941\u0915\u094d\u0930\u092e\u093f\u0915 \u0938\u0942\u091a\u0940"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u090a\u0930\u094d\u091c\u093e \u0916\u092a\u0924 \u0915\u093e \u0915\u093e\u0932\u093e\u0928\u0941\u0915\u094d\u0930\u092e\u093f\u0915 \u0930\u093f\u0915\u0949\u0930\u094d\u0921")))),Object(b.b)("h2",{id:"451-\u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932"},"4.5.1. \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u0907\u0938 \u0938\u0947\u0915\u094d\u0936\u0928 \u092e\u0947\u0902 \u092f\u0942\u091c\u093c\u0930 \u0915\u0947 \u092a\u094d\u0930\u094b\u092b\u093e\u0907\u0932 \u0938\u0902\u092c\u0902\u0927\u0940 \u092e\u0939\u0924\u094d\u0935\u092a\u0942\u0930\u094d\u0923 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0930\u0939\u0924\u0940 \u0939\u0948\u0964")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u092a\u0947\u091c \u0915\u0947 \u0921\u093f\u091f\u0947\u0932")),Object(b.b)("figure",null,Object(b.b)("br",{clear:"right"}),Object(b.b)("img",{align:"left",src:Object(c.a)("img/scrnshts/4.5.1_Profile.png"),alt:"Profile",width:"45%"}),Object(b.b)(u,{mdxType:"Clear"},Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u0928\u0947\u0935\u093f\u0917\u0947\u0936\u0928 \u092c\u093e\u0930")," \u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u091f\u0948\u092c \u0915\u094b \u0907\u0902\u0917\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948 \u0914\u0930 \u091f\u0948\u092c \u0915\u0947 \u092c\u0940\u091a \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0926\u0947\u0924\u093e \u0939\u0948",Object(b.b)("p",{parentName:"li"},Object(b.b)("img",{alt:"Left Right Nav",src:n(170).default}))),Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u092e\u0942\u0932 \u092a\u094d\u0930\u094b\u092b\u093c\u093e\u0907\u0932")," \u091c\u093f\u0938\u092e\u0947\u0902 \u0909\u092a\u092f\u094b\u0917\u0915\u0930\u094d\u0924\u093e \u0915\u0940 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0939\u094b\u0924\u0940 \u0939\u0948"),Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u0935\u093f\u0935\u0930\u0923")," \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u0947 \u092c\u093f\u091c\u0932\u0940 \u092a\u0948\u0915\u0947\u091c \u0935\u093f\u0935\u0930\u0923 \u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948"),Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u092e\u094b\u092c\u093e\u0907\u0932")," \u0916\u093e\u0924\u093e \u0938\u0947 \u091c\u0941\u0921\u093c\u093e \u0928\u0902\u092c\u0930"))),Object(b.b)("br",{clear:"both"})),Object(b.b)("h2",{id:"452-\u092d\u0941\u0917\u0924\u093e\u0928"},"4.5.2 \u092d\u0941\u0917\u0924\u093e\u0928"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u092d\u0941\u0917\u0924\u093e\u0928 \u092a\u0947\u091c \u092e\u0947\u0902 \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u094b \u091c\u093e\u0930\u0940 \u0915\u093f\u090f \u0917\u090f \u092c\u093f\u0932\u094b\u0902 \u0914\u0930 \u0917\u094d\u0930\u093e\u0939\u0915 \u0926\u094d\u0935\u093e\u0930\u093e \u0915\u093f\u090f \u0917\u090f \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u093e \u0930\u093f\u0915\u0949\u0930\u094d\u0921 \u0924\u093e\u0930\u0940\u0916 \u0915\u0947 \u0915\u094d\u0930\u092e (\u0915\u094d\u0930\u094b\u0928\u0932\u0949\u091c\u093f\u0915\u0932 \u0911\u0930\u094d\u0921\u0930) \u092e\u0947\u0902 \u092a\u094d\u0930\u093e\u092a\u094d\u0924 \u0939\u094b\u0924\u093e \u0939\u0948\u0964")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u092a\u0947\u091c \u0915\u0947 \u0921\u093f\u091f\u0947\u0932")),Object(b.b)("figure",null,Object(b.b)("br",{clear:"right"}),Object(b.b)("img",{align:"left",src:Object(c.a)("img/scrnshts/4.5.2_Payment.png"),alt:"Payments",width:"45%"}),Object(b.b)(u,{mdxType:"Clear"},Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u0928\u0947\u0935\u093f\u0917\u0947\u0936\u0928 \u092c\u093e\u0930")," \u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u091f\u0948\u092c \u0915\u094b \u0907\u0902\u0917\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948 \u0914\u0930 \u091f\u0948\u092c \u0915\u0947 \u092c\u0940\u091a \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0926\u0947\u0924\u093e \u0939\u0948"),Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u092d\u0941\u0917\u0924\u093e\u0928 \u0938\u0942\u091a\u0940")," \u092c\u093f\u0932 \u0938\u0947 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u0905\u0928\u094d\u092f \u092a\u094d\u0930\u093e\u0938\u0902\u0917\u093f\u0915 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u0947 \u0938\u093e\u0925 \u0917\u094d\u0930\u093e\u0939\u0915 \u0926\u094d\u0935\u093e\u0930\u093e \u0915\u093f\u090f \u0917\u090f \u0938\u092d\u0940 \u092d\u0941\u0917\u0924\u093e\u0928\u094b\u0902 \u0915\u0940 \u0938\u0942\u091a\u0940 \u0914\u0930 \u091f\u093e\u0907\u092e\u0938\u094d\u091f\u0948\u092e\u094d\u092a"))),Object(b.b)("br",{clear:"both"})),Object(b.b)("h2",{id:"453-\u092e\u0940\u091f\u0930-\u0930\u0940\u0921\u093f\u0902\u0917"},"4.5.3. \u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917 \u092a\u0947\u091c \u092e\u0947\u0902 \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u0940 \u092c\u093f\u091c\u0932\u0940 \u0915\u0940 \u0916\u092a\u0924 \u0915\u093e \u0935\u093f\u0935\u0930\u0923 \u0924\u093e\u0930\u0940\u0916 \u0915\u0947 \u0915\u094d\u0930\u092e (\u0915\u094d\u0930\u0949\u0928\u0932\u0949\u091c\u093f\u0915\u0932 \u0911\u0930\u094d\u0921\u0930) \u092e\u0947\u0902 \u0926\u093f\u092f\u093e \u0939\u094b\u0924\u093e \u0939\u0948\u0964"),Object(b.b)("li",{parentName:"ul"},"\u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u0915\u0947 \u0905\u0928\u0941\u0938\u093e\u0930 \u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917 \u0915\u0940 \u092c\u093e\u0930\u0902\u092c\u093e\u0930\u0924\u093e (\u092b\u094d\u0930\u093f\u0915\u094d\u0935\u0947\u0902\u0938\u093f) \u0905\u0932\u0917-\u0905\u0932\u0917 \u0939\u094b\u0924\u0940 \u0939\u0948\u0964")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"\u092a\u0947\u091c \u0915\u0947 \u0921\u093f\u091f\u0947\u0932")),Object(b.b)("figure",null,Object(b.b)("br",{clear:"right"}),Object(b.b)("img",{align:"left",src:Object(c.a)("img/scrnshts/4.5.3_MeterReading.png"),alt:"Meter Reading",width:"45%"}),Object(b.b)(u,{mdxType:"Clear"},Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u0928\u0947\u0935\u093f\u0917\u0947\u0936\u0928 \u092c\u093e\u0930")," \u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u091f\u0948\u092c \u0915\u094b \u0907\u0902\u0917\u093f\u0924 \u0915\u0930\u0924\u093e \u0939\u0948 \u0914\u0930 \u091f\u0948\u092c \u0915\u0947 \u092c\u0940\u091a \u0938\u094d\u0935\u093f\u091a \u0915\u0930\u0928\u0947 \u0915\u0940 \u0905\u0928\u0941\u092e\u0924\u093f \u0926\u0947\u0924\u093e \u0939\u0948"),Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917")," \u092e\u0940\u091f\u0930 \u0930\u0940\u0921\u093f\u0902\u0917 \u0938\u0947 \u0938\u0902\u092c\u0902\u0927\u093f\u0924 \u0905\u0928\u094d\u092f \u092a\u094d\u0930\u093e\u0938\u0902\u0917\u093f\u0915 \u091c\u093e\u0928\u0915\u093e\u0930\u0940 \u0915\u0947 \u0938\u093e\u0925 \u090f\u0915 \u0915\u093e\u0932\u093e\u0928\u0941\u0915\u094d\u0930\u092e\u093f\u0915 \u0915\u094d\u0930\u092e \u092e\u0947\u0902 \u0926\u093f\u0916\u093e\u092f\u093e \u0917\u092f\u093e \u0935\u093f\u0935\u0930\u0923"),Object(b.b)("li",{parentName:"ol"},Object(b.b)("u",null,"\u092e\u0940\u091f\u0930 \u0928\u0902\u092c\u0930")," \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u0947 \u0915\u0908 \u0915\u0928\u0947\u0915\u094d\u0936\u0928 \u0939\u094b\u0928\u0947 \u0915\u0940 \u0938\u094d\u0925\u093f\u0924\u093f \u092e\u0947\u0902 \u091a\u0941\u0928\u093e \u091c\u093e \u0938\u0915\u0924\u093e \u0939\u0948"))),Object(b.b)("br",{clear:"both"})))}p.isMDXComponent=!0}}]);