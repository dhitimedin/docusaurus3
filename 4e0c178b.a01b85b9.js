(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),A=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=A(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},g=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=A(n),g=r,p=s["".concat(c,".").concat(g)]||s[g]||u[g]||i;return n?a.a.createElement(p,l(l({ref:t},b),{},{components:n})):a.a.createElement(p,l({ref:t},b))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var b=2;b<i;b++)c[b]=n[b];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},167:function(e,t,n){"use strict";var r=n(0),a=n(20);t.a=function(){const e=Object(r.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return c}));var r=n(167),a=n(169);function i(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.a)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:i=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const c=n.startsWith(t)?n:t+n.replace(/^\//,"");return i?e+c:c}(t,e,n,r)}}function c(e,t={}){const{withBaseUrl:n}=i();return n(e,t)}},169:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},170:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABHCAYAAADx2uLMAAAAAXNSR0IArs4c6QAAAKZlWElmTU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgExAAIAAAAiAAAAWodpAAQAAAABAAAAfAAAAAAAAABIAAAAAQAAAEgAAAABQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABkoAMABAAAAAEAAABHAAAAAGDDsE4AAAAJcEhZcwAACxMAAAsTAQCanBgAAAQVaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6NEEzM0Y5NjIxMzc3MTFFQkExRTVDRkMzQjczQTAxODk8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6MTg5NjhBNzIxMkRGMTFFQkE5NzNDNTE0MkQxQkQzNzM8L3N0UmVm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"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(6),i=(n(0),n(166)),c=n(168),l={id:"Profile",title:"4.5. Profile",sidebar_label:"Profile"},o={unversionedId:"chapter4/Profile",id:"version-English/chapter4/Profile",isDocsHomePage:!1,title:"4.5. Profile",description:"Functionality",source:"@site/versioned_docs/version-English/chapter4/chap4.5_Profile.md",slug:"/chapter4/Profile",permalink:"/docusaurus3/en/chapter4/Profile",editUrl:"/versioned_docs/version-English/chapter4/chap4.5_Profile.md",version:"English",sidebar_label:"Profile",sidebar:"version-English/Docs",previous:{title:"4.4. Main Menu",permalink:"/docusaurus3/en/chapter4/Main_Menu"},next:{title:"4.6. Amount Payable",permalink:"/docusaurus3/en/chapter4/Amount_Payable"}},b=[{value:"4.5.1. Profile",id:"451-profile",children:[]},{value:"4.5.2. Payments",id:"452-payments",children:[]},{value:"4.5.3. Meter Readings",id:"453-meter-readings",children:[]}],A={rightToc:b};function s(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},A,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Functionality")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Profile page gives the user access to their account details."),Object(i.b)("li",{parentName:"ul"},"This includes personal information, past payments, and energy consumption.")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Profile"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Payments"),Object(i.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Meter Readings"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Consists of profile details of the consumer"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Chronological list of individual payments"),Object(i.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Chronological record of energy consumption")))),Object(i.b)("h2",{id:"451-profile"},"4.5.1. Profile"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Functionality")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Profile section contains important profile information of the user")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Page Details")),Object(i.b)("br",{clear:"right"}),Object(i.b)("img",{align:"left",src:Object(c.a)("img/scrnshts/4.5.1_Profile.png"),alt:"Profile",width:"45%"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Navigation Bar")," indicates the current tab and allows switching between tabs\n",Object(i.b)("img",{alt:"Left Right Nav",src:n(170).default})),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Basic Profile")," that consists of information on the user"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Connection Details")," shows the customer's electricity package details"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Mobile")," number linked to the account")),Object(i.b)("br",{clear:"both"}),Object(i.b)("h2",{id:"452-payments"},"4.5.2. Payments"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Functionality")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Payments page gives a chronological record of bills issued to the customer, and payments they have made")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Page Details")),Object(i.b)("br",{clear:"right"}),Object(i.b)("img",{align:"left",src:Object(c.a)("img/scrnshts/4.5.2_Payment.png"),alt:"Payments",width:"45%"}),Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Navigation Bar")," indicates the current tab and allows switching between tabs"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Payments List")," itemises and timestamps all payments made by the customer, along with other relevant information concerning the bill")),Object(i.b)("br",{clear:"both"}),Object(i.b)("h2",{id:"453-meter-readings"},"4.5.3. Meter Readings"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Functionality")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The Meter Reading page give a chronological list of the customer\u2019s energy consumption."),Object(i.b)("li",{parentName:"ul"},"The frequency of meter readings will vary depending on their connection type.")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Page Details")),Object(i.b)("br",{clear:"right"}),Object(i.b)("img",{align:"left",src:Object(c.a)("img/scrnshts/4.5.3_MeterReading.png"),alt:"Meter Reading",width:"45%"}),Object(i.b)("br",null),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Navigation Bar")," indicates the current tab and allows switching between tabs"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Meter Reading")," details shown in a chronological order along with other relevant information concerning the meter reading"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Meter Number")," can be chosen in case the customer has multiple connections")),Object(i.b)("br",{clear:"both"}))}s.isMDXComponent=!0}}]);