(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{166:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var l=n(0),a=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),u=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},j=a.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),s=u(n),j=l,m=s["".concat(b,".").concat(j)]||s[j]||O[j]||r;return n?a.a.createElement(m,c(c({ref:t},o),{},{components:n})):a.a.createElement(m,c({ref:t},o))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,b=new Array(r);b[0]=j;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,b[1]=c;for(var o=2;o<r;o++)b[o]=n[o];return a.a.createElement.apply(null,b)}return a.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},167:function(e,t,n){"use strict";var l=n(0),a=n(20);t.a=function(){const e=Object(l.useContext)(a.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},168:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return b}));var l=n(167),a=n(169);function r(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(l.a)();return{withBaseUrl:(n,l)=>function(e,t,n,{forcePrependBaseUrl:l=!1,absolute:r=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(l)return t+n;const b=n.startsWith(t)?n:t+n.replace(/^\//,"");return r?e+b:b}(t,e,n,l)}}function b(e,t={}){const{withBaseUrl:n}=r();return n(e,t)}},169:function(e,t,n){"use strict";function l(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!l(e)}n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return a}))},170:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},171:function(e,t,n){"use strict";n.r(t),t.default="data:image/png;base64,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"},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"Highlight",(function(){return u})),n.d(t,"Tabheader",(function(){return s})),n.d(t,"Tabcell",(function(){return O})),n.d(t,"Clear",(function(){return j})),n.d(t,"default",(function(){return g}));var l=n(2),a=n(6),r=(n(0),n(166)),b=n(168),c={id:"Meter",title:"3.8. Meter",sidebar_label:"Meter"},i={unversionedId:"chapter3/Meter",id:"version-English/chapter3/Meter",isDocsHomePage:!1,title:"3.8. Meter",description:"export const Highlight = ({children, color}) => (",source:"@site/versioned_docs/version-English/chapter3/chap3.8_Meter.mdx",slug:"/chapter3/Meter",permalink:"/docusaurus3/en/chapter3/Meter",editUrl:"/versioned_docs/version-English/chapter3/chap3.8_Meter.mdx",version:"English",sidebar_label:"Meter",sidebar:"version-English/Docs",previous:{title:"3.7. Plant",permalink:"/docusaurus3/en/chapter3/Plant"},next:{title:"3.9. Water",permalink:"/docusaurus3/en/chapter3/Water"}},o=[{value:"3.8.1. Overview",id:"381-overview",children:[]},{value:"3.8.2. Change Meter",id:"382-change-meter",children:[]},{value:"3.8.3. Unreleased Meter",id:"383-unreleased-meter",children:[{value:"3.8.3.1. Pending tab",id:"3831-pending-tab",children:[]},{value:"3.8.3.2. Review tab",id:"3832-review-tab",children:[]},{value:"3.8.3.3. Completed tab",id:"3833-completed-tab",children:[]}]},{value:"3.8.4. Smart Meter Status",id:"384-smart-meter-status",children:[]},{value:"3.8.5. Smart Feeder Status",id:"385-smart-feeder-status",children:[]},{value:"3.8.6. Meter Reading",id:"386-meter-reading",children:[]},{value:"3.8.7. Meter Reading Review",id:"387-meter-reading-review",children:[]},{value:"3.8.8. TERMS Status",id:"388-terms-status",children:[]},{value:"3.8.9. Battery Maintenance",id:"389-battery-maintenance",children:[]}],u=function(e){var t=e.children,n=e.color;return Object(r.b)("span",{style:{borderRadius:"2px",color:n,padding:"0.2rem",fontWeight:"bold"}},t)},s=function(e){var t=e.children,n=e.color;return Object(r.b)("th",{style:{backgroundColor:n,borderRight:"0.5rem solid white",height:"1.5rem",width:"2rem"}},"*",t)},O=function(e){var t=e.children,n=e.color;return Object(r.b)("td",{style:{backgroundColor:n,borderRight:"0.5rem solid white",height:"100px"}},t)},j=function(e){var t=e.children;return Object(r.b)("div",{style:{display:"table"}},t)},m={rightToc:o,Highlight:u,Tabheader:s,Tabcell:O,Clear:j};function g(e){var t=e.components,c=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},m,c,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"381-overview"},"3.8.1. Overview"),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.1_1_MeterFunctionalities.svg"),alt:"Meter Tab Functionalities",width:"55%"}),Object(r.b)("img",{align:"right",src:Object(b.a)("img/scrnshts/3.8.1_2_MeterTabScrSht.png"),alt:"Meter Tab Screenshot",width:"35%"}),Object(r.b)("br",{clear:"both"})),Object(r.b)("h2",{id:"382-change-meter"},"3.8.2. Change Meter"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Functionality")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Allows users to request replacement of a customer\u2019s energy meter")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Users")),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Designation"),Object(r.b)("th",null,"Main Purpose"),Object(r.b)("th",null,"Example Use Case")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cluster In-charge"),Object(r.b)("td",null,"To request a change of meter for a customer"),Object(r.b)("td",null,"Registering and switching out a malfunctioning meter")),Object(r.b)("tr",null,Object(r.b)("td",null,"State In-charge"),Object(r.b)("td",null,"Same as Cluster In-charge"),Object(r.b)("td",null,"Same as Cluster In-charge"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Page Details")),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.2_ChangeMeter.png"),alt:"Change Metert",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("p",null,Object(r.b)("img",{alt:"Data Entry",src:n(171).default})),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Customer Information")," to be input"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Meter Information")," will automatically populate, along with option to select anew meter"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Review")," tapped to complete the process"))),Object(r.b)("br",{clear:"both"})),Object(r.b)("h2",{id:"383-unreleased-meter"},"3.8.3. Unreleased Meter"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Functionality")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tracks pending and completed meter change tasks"),Object(r.b)("li",{parentName:"ul"},"These meters are to be unmounted, either because of a malfunction or expiry of the customer\u2019s subscription"),Object(r.b)("li",{parentName:"ul"},"The meter is then taken to the warehouse or assigned to a different customer\u2019s subscription")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Users")),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Designation"),Object(r.b)("th",null,"Main Purpose"),Object(r.b)("th",null,"Example Use Case")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cluster In-charge"),Object(r.b)("td",null,"To view pending meter change requests and assign to field agents"),Object(r.b)("td",null,"Contacting the agent who worked on a particular meter assignment")),Object(r.b)("tr",null,Object(r.b)("td",null,"State In-charge"),Object(r.b)("td",null,"To view and acknowledge meter changes"),Object(r.b)("td",null,"Checking the number of pending meter assignments"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Page Details")),Object(r.b)("p",null,"The page is organised into the following tabs"),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)(s,{color:"#A9CCE3 ",mdxType:"Tabheader"},"Pending"),Object(r.b)(s,{color:"#A9CCE3",mdxType:"Tabheader"},"Review"),Object(r.b)(s,{color:"#A9CCE3",mdxType:"Tabheader"},"Completed")),Object(r.b)("tr",null,Object(r.b)(O,{color:"#AED6F1",mdxType:"Tabcell"},"View of pending meter requests, assign to agent, and mark completed"),Object(r.b)(O,{color:"#AED6F1",mdxType:"Tabcell"},"List of completed meter requests"),Object(r.b)(O,{color:"#AED6F1",mdxType:"Tabcell"},"List of historical completed and acknowledged meter requests"))),Object(r.b)("h3",{id:"3831-pending-tab"},"3.8.3.1. Pending tab"),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.3.1_PendingTab.png"),alt:"Pending Tab",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Navigation Bar")," indicates current tab and allows switching by tapping or swiping",Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"Left Right Nav",src:n(170).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Pending Meter List")," with information on each meter. Agents can be called by tapping on their names"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Task Buttons")," are used to allocate tasks to field agents and register the new location of a meter",Object(r.b)("p",{parentName:"li"},"The task can be either reassigned to a different agent or executed (processed) towards reviewing on completion")))),Object(r.b)("br",{clear:"both"})),Object(r.b)("h3",{id:"3832-review-tab"},"3.8.3.2. Review tab"),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.3.2_ReviewTab.png"),alt:"Review Tab",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Navigation Bar")," indicates current tab and allows switching by tapping or swiping",Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"Left Right Nav",src:n(170).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Review Meter List")," with information on each completed meter activity that is pending review"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Task Buttons")," used to confirm completed tasks"))),Object(r.b)("br",{clear:"both"})),Object(r.b)("h3",{id:"3833-completed-tab"},"3.8.3.3. Completed tab"),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.3.3_CompletedTab.png"),alt:"Completed Tab",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Navigation Bar")," indicates current tab and allows switching by tapping or swiping",Object(r.b)("p",{parentName:"li"},Object(r.b)("img",{alt:"Left Right Nav",src:n(170).default}))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Released Meter List")," with information on each completed meter release activity"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Filter Bar")," to narrow results by plant and time interval"))),Object(r.b)("br",{clear:"both"})),Object(r.b)("h2",{id:"384-smart-meter-status"},"3.8.4. Smart Meter Status"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Functionality")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Gives limited access to smart Smart meter data"),Object(r.b)("li",{parentName:"ul"},"The user may remotely switch meters on and off from here "),Object(r.b)("li",{parentName:"ul"},"Refer to ",Object(r.b)("a",Object(l.a)({parentName:"li"},{href:"./Main_Menu#345-spark-server"}),"Section 3.4.5")," for more information")),Object(r.b)("h2",{id:"385-smart-feeder-status"},"3.8.5. Smart Feeder Status"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Functionality")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Smart Feeder Status Section allows a user to reset or change configuration of a Smart Feeder through the application")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Users")),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Designation"),Object(r.b)("th",null,"Main Purpose"),Object(r.b)("th",null,"Example Use Case")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cluster In-charge"),Object(r.b)("td",null,"Control the state of the meter for all customers on a particular feeder"),Object(r.b)("td",null,"Shutting off a large number of meters in case of a technical emergency")),Object(r.b)("tr",null,Object(r.b)("td",null,"State In-charge"),Object(r.b)("td",null,"Same as Cluster In-charge"),Object(r.b)("td",null,"Shutting off the meter of a customer whose faulty appliance is impacting the whole distribution network"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Page Details")),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.5_1_SparkFeederStatus.png"),alt:"Smart Feeder Status",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Enter Details")," for plant and feeder number"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Submit")," to continue to the next page",Object(r.b)("p",{parentName:"li"},"Note that the feeder entry tab will only show once the plant has been selected")))),Object(r.b)("br",{clear:"both"})),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.5_2_SparkFeederStatus.png"),alt:"Smart Feeder Status",width:"45%"}),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Feeder Information")," shown"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Meter Status")," can be chosen between:")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Off"),Object(r.b)("li",{parentName:"ul"},"On"),Object(r.b)("li",{parentName:"ul"},"Auto")),Object(r.b)("p",null,"The user can also reset the meter to its default state by tapping the reset button")),Object(r.b)("br",{clear:"both"})),Object(r.b)("h2",{id:"386-meter-reading"},"3.8.6. Meter Reading"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Functionality")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Meter Reading Section shows the electricity meter readings which are required at each plant")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Users")),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Designation"),Object(r.b)("th",null,"Main Purpose"),Object(r.b)("th",null,"Example Use Case")),Object(r.b)("tr",null,Object(r.b)("td",null,"Technician"),Object(r.b)("td",null,"To view which customer meters need to be read"),Object(r.b)("td",null,"Planning which customers to visit for metering before the end of the month")),Object(r.b)("tr",null,Object(r.b)("td",null,"CSA"),Object(r.b)("td",null,"Same as Technician"),Object(r.b)("td",null,"Same as Technician")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cluster In-charge"),Object(r.b)("td",null,"To check the number of pending meter readings"),Object(r.b)("td",null,"Contacting field agents to remind them about incomplete meter readings")),Object(r.b)("tr",null,Object(r.b)("td",null,"State In-charge"),Object(r.b)("td",null,"Same as Cluster In-charge"),Object(r.b)("td",null,"Same as Cluster In-charge"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Page Details")),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.6_1_MeterReading.png"),alt:"Meter Reading",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"List of Plants")," along with number of manually read meters at each plant, and number of meters still pending reading"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Green Rows")," aggregates data for the cluster"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Total Bar"),"aggregates over all plants")),Object(r.b)("p",null,"Tapping a particular plant shows the user a list of pending meters, as shown in the next screenshot (note that this functionality is only available after the 24th of the month)")),Object(r.b)("br",{clear:"both"})),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.6_2_MeterReading.png"),alt:"Meter Reading",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Search Icon")," allows the user to segregate the listed consumers at a plant"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Consumer List")," enables the agent to review the consumer consumption history in terms of the previous reading values and the units consumed"))),Object(r.b)("br",{clear:"both"})),Object(r.b)("h2",{id:"387-meter-reading-review"},"3.8.7. Meter Reading Review"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Functionality")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Meter Reading Review Section displays the number of pending meter readings reviews, plant wise"),Object(r.b)("li",{parentName:"ul"},"The meter reading process is completed by agents at the beginning or end of a month to record the electricity consumption of households that do not have a smart meter")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Users")),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Designation"),Object(r.b)("th",null,"Main Purpose"),Object(r.b)("th",null,"Example Use Case")),Object(r.b)("tr",null,Object(r.b)("td",null,"CSA"),Object(r.b)("td",null,"To assess the number of consumers who are yet to undergo the meter reading"),Object(r.b)("td",null,"Assessing the number of completed reading reviews in a month")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cluster In-charge"),Object(r.b)("td",null,"To conduct a review on the consumers whose meter readings are still pending"),Object(r.b)("td",null,"Assessing the number of pending reviews within the cluster")),Object(r.b)("tr",null,Object(r.b)("td",null,"State In-charge"),Object(r.b)("td",null,"Same as Cluster In-charge"),Object(r.b)("td",null,"Assessing the number of pending reviews at a plant"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Page Details")),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.7_MeterReadingApproval.png"),alt:"Meter Reading Approval",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Meter Readings Approvals")," are shown in a tabular column with relevant data given plant wise"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Green Rows")," aggregate the data for each cluster they represent"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Total Bar")," aggregates the columnar data",Object(r.b)("p",{parentName:"li"},"Tapping onto a particular plant will give the user a functionality that is only available after the 24th of every month")))),Object(r.b)("br",{clear:"both"})),Object(r.b)("h2",{id:"388-terms-status"},"3.8.8. TERMS Status"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Functionality")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Gives access to smart TERMS meter data"),Object(r.b)("li",{parentName:"ul"},"The user may remotely switch customer meters on and off from here")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Users")),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Designation"),Object(r.b)("th",null,"Main Purpose"),Object(r.b)("th",null,"Example Use Case")),Object(r.b)("tr",null,Object(r.b)("td",null,"Operator"),Object(r.b)("td",null,"To access information about and control of a customer\u2019s meter"),Object(r.b)("td",null,"Investigating why a customer meter may have tripped off \u2013 e.g. they are deactivated")),Object(r.b)("tr",null,Object(r.b)("td",null,"Technician"),Object(r.b)("td",null,"Same as Operator"),Object(r.b)("td",null,"Switching a meter on or off")),Object(r.b)("tr",null,Object(r.b)("td",null,"CSA"),Object(r.b)("td",null,"Same as Operator"),Object(r.b)("td",null,"Same as Technician")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cluster In-charge"),Object(r.b)("td",null,"Same as Operator"),Object(r.b)("td",null,"Same as Technician")),Object(r.b)("tr",null,Object(r.b)("td",null,"State In-charge"),Object(r.b)("td",null,"Same as Operator"),Object(r.b)("td",null,"Same as Technician"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Page Details")),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.8_1_TermsStatus.png"),alt:"TERMS Consumer",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Plant Selection")," must be made for the customer list to show"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Customer List")," of a particular plant")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)(u,{color:"#FF0000",mdxType:"Highlight"},"Red")," - Inactive customer"),Object(r.b)("li",{parentName:"ul"},Object(r.b)(u,{color:"#008000",mdxType:"Highlight"},"Green")," - Active customer")),Object(r.b)("ol",{start:3},Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Search Icon")," used to filter the consumer list by typing in a name or meter number")),Object(r.b)("p",null,"Tapping a customer redirects to that meter\u2019s meter control page, shown in the next screenshot")),Object(r.b)("br",{clear:"both"})),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.8_2_TermsStatus.png"),alt:"TERMS Reset",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Customer Information")," provides relevant information on the customer and the assigned TERMS meter"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Meter Status")," can be changed by tapping ON, OFF or the Reset button"))),Object(r.b)("br",{clear:"both"})),Object(r.b)("h2",{id:"389-battery-maintenance"},"3.8.9. Battery Maintenance"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Functionality")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"The Battery Maintenance Section gives an overview on the battery banks at every plant"),Object(r.b)("li",{parentName:"ul"},"The section allows the user to switch the battery pack on or off")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Key Users")),Object(r.b)("table",null,Object(r.b)("tr",null,Object(r.b)("th",null,"Designation"),Object(r.b)("th",null,"Main Purpose"),Object(r.b)("th",null,"Example Use Case")),Object(r.b)("tr",null,Object(r.b)("td",null,"Technician"),Object(r.b)("td",null,"To change the state of a battery bank"),Object(r.b)("td",null,"Switching the battery status of a plant between on and off")),Object(r.b)("tr",null,Object(r.b)("td",null,"Cluster In-charge"),Object(r.b)("td",null,"Same as Technician"),Object(r.b)("td",null,"Same as Technician")),Object(r.b)("tr",null,Object(r.b)("td",null,"State In-charge"),Object(r.b)("td",null,"To check which batteries are online"),Object(r.b)("td",null,"Creating a report on the number of battery packs available at each plant"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Page Details")),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.9_1_BatteryMaintenance.png"),alt:"Battery Bank Voltage Activity",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Search Icon")," can be used to filter out the list of plants shown"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Filter Bar")," selects a particular plant and time period"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Plant List")," displays relevant information on the battery status of each plant")),Object(r.b)("p",null,"Tapping on a plant tab will redirect the user to the plant\u2019s battery bank control page, explained in the next screenshot")),Object(r.b)("br",{clear:"both"})),Object(r.b)("figure",null,Object(r.b)("br",{clear:"right"}),Object(r.b)("img",{align:"left",src:Object(b.a)("img/scrnshts/3.8.9_2_BatteryMaintenance.png"),alt:"Battery Bank Specific",width:"45%"}),Object(r.b)(j,{mdxType:"Clear"},Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("u",null,"Battery Bank Status")," can be used to switch a battery bank at the plant on and off"))),Object(r.b)("br",{clear:"both"})))}g.isMDXComponent=!0}}]);