(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{166:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return O}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=b(r),f=n,O=s["".concat(o,".").concat(f)]||s[f]||p[f]||c;return r?a.a.createElement(O,u(u({ref:t},l),{},{components:r})):a.a.createElement(O,u({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=f;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:n,o[1]=u;for(var l=2;l<c;l++)o[l]=r[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},167:function(e,t,r){"use strict";var n=r(0),a=r(20);t.a=function(){const e=Object(n.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},168:function(e,t,r){"use strict";r.d(t,"b",(function(){return c})),r.d(t,"a",(function(){return o}));var n=r(167),a=r(169);function c(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(n.a)();return{withBaseUrl:(r,n)=>function(e,t,r,{forcePrependBaseUrl:n=!1,absolute:c=!1}={}){if(!r)return r;if(r.startsWith("#"))return r;if(Object(a.b)(r))return r;if(n)return t+r;const o=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+o:o}(t,e,r,n)}}function o(e,t={}){const{withBaseUrl:r}=c();return r(e,t)}},169:function(e,t,r){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}))},82:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return u})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"Clear",(function(){return b})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),c=(r(0),r(166)),o=r(168),u={id:"Package_Change_Request",title:"4.8 \u092a\u0948\u0915\u0947\u091c \u092c\u0926\u0932\u0928\u0947 \u0915\u093e \u0905\u0928\u0941\u0930\u094b\u0927",sidebar_label:"\u092a\u0948\u0915\u0947\u091c \u092c\u0926\u0932\u0928\u0947 \u0915\u093e \u0905\u0928\u0941\u0930\u094b\u0927"},i={unversionedId:"chapter4/Package_Change_Request",id:"chapter4/Package_Change_Request",isDocsHomePage:!1,title:"4.8 \u092a\u0948\u0915\u0947\u091c \u092c\u0926\u0932\u0928\u0947 \u0915\u093e \u0905\u0928\u0941\u0930\u094b\u0927",description:"export const Clear = ({children}) => (",source:"@site/docs/chapter4/chap4.8_PkgChngReq.md",slug:"/chapter4/Package_Change_Request",permalink:"/docusaurus3/chapter4/Package_Change_Request",editUrl:"/docs/chapter4/chap4.8_PkgChngReq.md",version:"current",sidebar_label:"\u092a\u0948\u0915\u0947\u091c \u092c\u0926\u0932\u0928\u0947 \u0915\u093e \u0905\u0928\u0941\u0930\u094b\u0927",sidebar:"Docs",previous:{title:"\u091c\u093e\u0930\u0940 \u0939\u0941\u090f \u092c\u093f\u0932 \u0914\u0930 \u092d\u0941\u0917\u0924\u093e\u0928 \u0915\u093e \u0935\u093f\u0935\u0930\u0923 (\u092c\u093f\u0932\u093f\u0902\u0917 \u090f\u0902\u0921 \u092a\u0947\u092e\u0947\u0902\u091f \u0921\u093f\u091f\u0947\u0932)",permalink:"/docusaurus3/chapter4/Billing_and_Payment_Detail"},next:{title:"4.9. \u0938\u0947\u0935\u093e \u0938\u0902\u092c\u0902\u0927\u0940 \u0905\u0928\u0941\u0930\u094b\u0927 (\u0938\u0930\u094d\u0935\u093f\u0938 \u0930\u093f\u0915\u094d\u0935\u0947\u0938\u094d\u091f)",permalink:"/docusaurus3/chapter4/Service_Request"}},l=[],b=function(e){var t=e.children;return Object(c.b)("div",{style:{display:"table"}},t)},s={rightToc:l,Clear:b};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u092b\u0902\u0915\u094d\u0936\u0928\u0932\u093f\u091f\u0940")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u092a\u0948\u0915\u0947\u091c \u091a\u0947\u0902\u091c \u0930\u093f\u0915\u094d\u0935\u0947\u0938\u094d\u091f \u0938\u0947\u0915\u094d\u0936\u0928 \u092e\u0947\u0902 \u0917\u094d\u0930\u093e\u0939\u0915 \u0905\u092a\u0928\u0947 \u092a\u0948\u0915\u0947\u091c \u0915\u094b \u0905\u092a\u0917\u094d\u0930\u0947\u0921/\u0921\u093e\u0909\u0928\u0917\u094d\u0930\u0947\u0921 \u0915\u0930 \u0938\u0915\u0924\u093e \u0939\u0948\u0964 "),Object(c.b)("li",{parentName:"ul"},"\u0907\u0938\u092e\u0947\u0902 \u0917\u094d\u0930\u093e\u0939\u0915 \u0915\u0947 \u092a\u093f\u091b\u0932\u0947 \u092a\u0948\u0915\u0947\u091c\u094b\u0902 \u0915\u0940 \u0938\u0942\u091a\u0940 \u092d\u0940 \u0930\u0939\u0924\u0940 \u0939\u0948\u0964 ")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u092a\u0947\u091c \u0915\u0947 \u0921\u093f\u091f\u0947\u0932")),Object(c.b)("br",{clear:"right"}),Object(c.b)("img",{align:"left",src:Object(o.a)("img/scrnshts/4.8_1_PackageChangeRequest.png"),alt:"Your Package",width:"45%"}),Object(c.b)(b,{mdxType:"Clear"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("u",null,"\u0938\u092c\u094d\u0938\u094d\u0915\u094d\u0930\u093e\u0907\u092c\u094d\u0921 \u092a\u0948\u0915\u0947\u091c \u0932\u093f\u0938\u094d\u091f")," \u092a\u093f\u091b\u0932\u0947 \u092a\u0948\u0915\u0947\u091c\u094b\u0902 \u0915\u093e \u0935\u093f\u0935\u0930\u0923 \u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u092a\u0948\u0915\u0947\u091c \u0938\u0942\u091a\u0940 \u0906\u0907\u091f\u092e \u092a\u0930 \u091f\u0948\u092a \u0915\u0930\u0928\u0947 \u0938\u0947 \u092a\u0930\u093f\u0935\u0930\u094d\u0924\u0928 \u092a\u0948\u0915\u0947\u091c \u0905\u0928\u0941\u092d\u093e\u0917 \u092e\u0947\u0902 \u092a\u0941\u0928\u0930\u094d\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093f\u0924 \u0939\u094b\u0924\u093e \u0939\u0948, \u091c\u093f\u0938\u0947 \u0928\u093f\u092e\u094d\u0928\u0932\u093f\u0916\u093f\u0924 \u0938\u094d\u0915\u094d\u0930\u0940\u0928\u0936\u0949\u091f \u092e\u0947\u0902 \u0938\u092e\u091d\u093e\u092f\u093e \u0917\u092f\u093e \u0939\u0948"))),Object(c.b)("br",{clear:"both"}),Object(c.b)("br",{clear:"right"}),Object(c.b)("img",{align:"left",src:Object(o.a)("img/scrnshts/4.8_2_PackageChangeRequest.png"),alt:"Change Package",width:"45%"}),Object(c.b)(b,{mdxType:"Clear"},Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("u",null,"\u0938\u092c\u094d\u0938\u094d\u0915\u094d\u0930\u093e\u0907\u092c\u094d\u0921 \u092a\u0948\u0915\u0947\u091c")," \u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u092a\u0948\u0915\u0947\u091c \u0915\u093e \u0935\u093f\u0935\u0930\u0923 \u0926\u093f\u0916\u093e\u0924\u093e \u0939\u0948"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("u",null,"\u0928\u090f \u092a\u0948\u0915\u0947\u091c \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902")," \u0909\u092a\u0932\u092c\u094d\u0927 \u092a\u0948\u0915\u0947\u091c\u094b\u0902 \u0915\u0940 \u0921\u094d\u0930\u0949\u092a \u0921\u093e\u0909\u0928 \u0938\u0947"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("u",null,"\u0938\u092c\u092e\u093f\u091f \u0915\u0930\u0947\u0902")," \u0905\u0928\u0941\u0930\u094b\u0927 \u0915\u094b \u092a\u0942\u0930\u093e \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u091f\u0948\u092a \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948, (\u092a\u0941\u0937\u094d\u091f\u093f \u092c\u0949\u0915\u094d\u0938 \u092a\u0930 \u091f\u093f\u0915 \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948)"))),Object(c.b)("br",{clear:"both"}))}p.isMDXComponent=!0}}]);