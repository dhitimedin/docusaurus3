(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,O=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(O,c(c({ref:t},s),{},{components:n})):a.a.createElement(O,c({ref:t},s))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},167:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(167),a=n(169);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},169:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},269:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4.1_HardwareReq-f607acf70e705e2d9db604af65f7c482.png"},270:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4.2_Icon-5ce766c0a9c2d20e45793fa66139c9cd.png"},271:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/4.3_SetupPrompt-9669265ead551ceb12060b5f2f7e84dd.svg"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(166)),i=n(168),c={id:"Installation_and_Setup",title:"4.2. Installation and Setup",sidebar_label:"Installation and Setup"},l={unversionedId:"chapter4/Installation_and_Setup",id:"version-English/chapter4/Installation_and_Setup",isDocsHomePage:!1,title:"4.2. Installation and Setup",description:"* The field agent app runs on the Android operating system",source:"@site/versioned_docs/version-English/chapter4/chap4.2_InstallSetup.md",slug:"/chapter4/Installation_and_Setup",permalink:"/docusaurus3/en/chapter4/Installation_and_Setup",editUrl:"/versioned_docs/version-English/chapter4/chap4.2_InstallSetup.md",version:"English",sidebar_label:"Installation and Setup",sidebar:"version-English/Docs",previous:{title:"4.1. Introduction",permalink:"/docusaurus3/en/chapter4/Introduction"},next:{title:"4.3. Dashboard",permalink:"/docusaurus3/en/chapter4/Dashboard"}},s=[{value:"4.2.1. New Connection Request",id:"421-new-connection-request",children:[]},{value:"4.2.2. Login",id:"422-login",children:[]}],b={rightToc:s};function u(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The field agent app runs on the Android operating system")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Hardware requirements are shown in Table."),Object(o.b)("h5",Object(r.a)({parentName:"li"},{id:"table-2-customer-app-hardware-requirements"}),"Table 2: Customer app hardware requirements."),Object(o.b)("p",{parentName:"li"},Object(o.b)("img",{alt:"Field agent app installation requirements",src:n(269).default}))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"The app can be downloaded from the Google Play store and other app repositories."),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"To locate the app, the user can type \u201cTARAurja\u201d into the search bar.",Object(o.b)("h5",Object(r.a)({parentName:"li"},{id:"figure-customer-app-icon"}),"Figure: Customer app icon."),Object(o.b)("img",{alt:"Field agent app icon",src:n(270).default})))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Upon opening the application, the user is prompted for their login credentials, as shown in the screenshot below.\n",Object(o.b)("img",{alt:"Set Up Prompt",src:n(271).default})))),Object(o.b)("h2",{id:"421-new-connection-request"},"4.2.1. New Connection Request"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Functionality")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Allows the app user to register a request for a new connection or account"),Object(o.b)("li",{parentName:"ul"},"This can be done for the user or on behalf of another")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Page Details")),Object(o.b)("br",{clear:"right"}),Object(o.b)("img",{align:"left",src:Object(i.a)("img/scrnshts/4.2.1_1_NewConnectionRequest.png"),alt:"New Connection Request",width:"250"}),Object(o.b)("br",null),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"New Customer Request")," either for the app user or for someone else")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Tapping on either of the two option redirects to a new connection page, explained in the next screenshots")),Object(o.b)("br",{clear:"both"}),Object(o.b)("br",{clear:"right"}),Object(o.b)("img",{align:"left",src:Object(i.a)("img/scrnshts/4.2.1_2_NewConnectionRequest.png"),alt:"New Connection Request",width:"250"}),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"For Self")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Data Sheet")," where the user enters relevant data"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Verify with OTP")," button is tapped to trigger OTP sharing via SMS (sent to the submitted phone number). Confirming the OTP completes the process.")),Object(o.b)("br",{clear:"both"}),Object(o.b)("br",{clear:"right"}),Object(o.b)("img",{align:"left",src:Object(i.a)("img/scrnshts/4.2.1_3_NewConnectionRequest.png"),alt:"New Connection Request",width:"250"}),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"For Other")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Data Sheet")," where the user enters relevant data"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Verify with OTP")," button is tapped to trigger OTP sharing via SMS (sent to the submitted phone number). Confirming the OTP completes the process.")),Object(o.b)("br",{clear:"both"}),Object(o.b)("h2",{id:"422-login"},"4.2.2. Login"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Functionality"),"\n*The login page allows existing users to securely access their account."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Page Details")),Object(o.b)("br",{clear:"right"}),Object(o.b)("img",{align:"left",src:Object(i.a)("img/scrnshts/4.2.1_3_NewConnectionRequest.png"),alt:"New Connection Request",width:"250"}),Object(o.b)("br",null),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"For Other")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Mobile Number")," registered to the account"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Log in")," by tapping the button")),Object(o.b)("br",{clear:"both"}))}u.isMDXComponent=!0}}]);