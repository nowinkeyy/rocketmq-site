"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),i=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(r),h=o,k=u["".concat(c,".").concat(h)]||u[h]||m[h]||n;return r?a.createElement(k,s(s({ref:t},p),{},{components:r})):a.createElement(k,s({ref:t},p))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var i=2;i<n;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},89208:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>i});var a=r(87462),o=(r(67294),r(3905));const n={title:"Release Notes - Apache RocketMQ - Version 4.3.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},s=void 0,l={permalink:"/release-notes/2018/08/29/4.3.1",source:"@site/release-notes/2018-08-29-4.3.1.md",title:"Release Notes - Apache RocketMQ - Version 4.3.1",description:"* Source: rocketmq-all-4.3.1-source-release.zip [PGP] [MD5] [SHA1]",date:"2018-08-29T00:00:00.000Z",formattedDate:"August 29, 2018",tags:[{label:"Release_Notes",permalink:"/release-notes/tags/release-notes"},{label:"RocketMQ",permalink:"/release-notes/tags/rocket-mq"},{label:"Version",permalink:"/release-notes/tags/version"}],readingTime:.695,hasTruncateMarker:!0,authors:[],frontMatter:{title:"Release Notes - Apache RocketMQ - Version 4.3.1",categories:["Release_Notes"],tags:["Release_Notes","RocketMQ","Version"]},prevItem:{title:"Release Notes - Apache RocketMQ - Version 4.3.2",permalink:"/release-notes/2018/11/02/4.3.2"},nextItem:{title:"Release Notes - Apache RocketMQ - Version 4.3.0",permalink:"/release-notes/2018/07/24/4.3.0"}},c={authorsImageUrls:[]},i=[{value:"Improvement",id:"improvement",level:2},{value:"Bug",id:"bug",level:2}],p={toc:i};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Download the 4.3.1 release",type:"tip"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Source: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.1/rocketmq-all-4.3.1-source-release.zip"},"rocketmq-all-4.3.1-source-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.1/rocketmq-all-4.3.1-source-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.1/rocketmq-all-4.3.1-source-release.zip.md5"},"MD5"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.1/rocketmq-all-4.3.1-source-release.zip.sha1"},"SHA1"),"]"),(0,o.kt)("li",{parentName:"ul"},"Binary: ",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.1/rocketmq-all-4.3.1-bin-release.zip"},"rocketmq-all-4.3.1-bin-release.zip")," [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.1/rocketmq-all-4.3.1-bin-release.zip.asc"},"PGP"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.1/rocketmq-all-4.3.1-bin-release.zip.md5"},"MD5"),"] [",(0,o.kt)("a",{parentName:"li",href:"https://archive.apache.org/dist/rocketmq/4.3.1/rocketmq-all-4.3.1-bin-release.zip.sha1"},"SHA1"),"]"))),(0,o.kt)("p",null,"Below is a summary of the issues addressed in the 4.3.1 release of RocketMQ. For full documentation of the release, a guide to get started, please refer to ",(0,o.kt)("a",{href:"/docs/quickStart/02quickstart/"},"Quick Start"),"."),(0,o.kt)("h2",{id:"improvement"},"Improvement"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/395"},"ISSUE-395"),'] -  Enhance the compatibility of transactional producer API, and change the default topic to "TBW102", ensuring that the server can be backward compatible with older clients.'),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/396"},"ISSUE-396"),"] -  Enhance transactional message implementation, add admin tools and seprate thread pool for EndTransactionProcessor."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/430"},"ISSUE-430"),"] -  Remove scripts related to mqfilter server.")),(0,o.kt)("h2",{id:"bug"},"Bug"),(0,o.kt)("ul",null,(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/392"},"ISSUE-392"),"] -  Fix the Nullpointer exception occcured during the process of producer shutdown."),(0,o.kt)("li",null,"[",(0,o.kt)("a",{href:"https://github.com/apache/rocketmq/issues/408"},"ISSUE-408"),"] -  Restored code lost during merge process.")))}m.isMDXComponent=!0}}]);