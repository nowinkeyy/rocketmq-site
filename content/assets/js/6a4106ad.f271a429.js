"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[5029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,g=s["".concat(i,".").concat(m)]||s[m]||d[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(72389),c=n(67392),i=n(7094),p=n(12466);const u="tabList__CuJ",d="tabItem_LNqP";function s(e){var t;const{lazy:n,block:o,defaultValue:s,values:m,groupId:g,className:k}=e,N=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??N.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,c.l)(v,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===s?s:s??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,i.U)(),[I,L]=(0,r.useState)(f),h=[],{blockElementScrollPositionUntilNextRender:O}=(0,p.o5)();if(null!=g){const e=y[g];null!=e&&e!==I&&v.some((t=>t.value===e))&&L(e)}const T=e=>{const t=e.currentTarget,n=h.indexOf(t),a=v[n].value;a!==I&&(O(t),L(a),null!=g&&E(g,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=h.indexOf(e.currentTarget)+1;n=h[t]??h[0];break}case"ArrowLeft":{const t=h.indexOf(e.currentTarget)-1;n=h[t]??h[h.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},k)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>h.push(e),onKeyDown:j,onFocus:T,onClick:T},o,{className:(0,l.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":I===t})}),n??t)}))),n?(0,r.cloneElement)(N.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function m(e){const t=(0,o.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},67616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>c,metadata:()=>p,toc:()=>d});var a=n(87462),r=(n(67294),n(3905)),l=n(65488),o=n(85162);const c={},i="\u65e5\u5fd7\u914d\u7f6e",p={unversionedId:"bestPractice/20log",id:"bestPractice/20log",title:"\u65e5\u5fd7\u914d\u7f6e",description:"\u5ba2\u6237\u7aef\u65e5\u5fd7\u7528\u4e8e\u8bb0\u5f55\u5ba2\u6237\u7aef\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u7684\u5f02\u5e38\uff0c\u5e2e\u52a9\u5feb\u901f\u5b9a\u4f4d\u548c\u4fee\u590d\u95ee\u9898\u3002\u672c\u6587\u4ecb\u7ecd RocketMQ \u7684\u5ba2\u6237\u7aef\u65e5\u5fd7\u7684\u6253\u5370\u65b9\u5f0f\uff0c\u4ee5\u53ca\u9ed8\u8ba4\u548c\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002",source:"@site/docs/05-bestPractice/20log.md",sourceDirName:"05-bestPractice",slug:"/bestPractice/20log",permalink:"/docs/4.x/bestPractice/20log",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/05-bestPractice/20log.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"JVM/OS\u914d\u7f6e",permalink:"/docs/4.x/bestPractice/19JVMOS"},next:{title:"\u8ba2\u9605\u5173\u7cfb\u4e00\u81f4",permalink:"/docs/4.x/bestPractice/21subscribe"}},u={},d=[{value:"\u6253\u5370\u5ba2\u6237\u7aef\u65e5\u5fd7",id:"\u6253\u5370\u5ba2\u6237\u7aef\u65e5\u5fd7",level:2},{value:"\u65b9\u5f0f\u4e00: \u4f9d\u8d56 log4j \u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0",id:"\u65b9\u5f0f\u4e00-\u4f9d\u8d56-log4j-\u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0",level:3},{value:"\u65b9\u5f0f\u4e8c: \u4f9d\u8d56 logback \u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0",id:"\u65b9\u5f0f\u4e8c-\u4f9d\u8d56-logback-\u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0",level:3},{value:"\u5ba2\u6237\u7aef\u65e5\u5fd7\u914d\u7f6e",id:"\u5ba2\u6237\u7aef\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u9ed8\u8ba4\u914d\u7f6e",id:"\u9ed8\u8ba4\u914d\u7f6e",level:2},{value:"\u81ea\u5b9a\u4e49\u914d\u7f6e",id:"\u81ea\u5b9a\u4e49\u914d\u7f6e",level:2},{value:"\u793a\u4f8b",id:"\u793a\u4f8b",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u65e5\u5fd7\u914d\u7f6e"},"\u65e5\u5fd7\u914d\u7f6e"),(0,r.kt)("p",null,"\u5ba2\u6237\u7aef\u65e5\u5fd7\u7528\u4e8e\u8bb0\u5f55\u5ba2\u6237\u7aef\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u7684\u5f02\u5e38\uff0c\u5e2e\u52a9\u5feb\u901f\u5b9a\u4f4d\u548c\u4fee\u590d\u95ee\u9898\u3002\u672c\u6587\u4ecb\u7ecd RocketMQ \u7684\u5ba2\u6237\u7aef\u65e5\u5fd7\u7684\u6253\u5370\u65b9\u5f0f\uff0c\u4ee5\u53ca\u9ed8\u8ba4\u548c\u81ea\u5b9a\u4e49\u914d\u7f6e\u3002 "),(0,r.kt)("h2",{id:"\u6253\u5370\u5ba2\u6237\u7aef\u65e5\u5fd7"},"\u6253\u5370\u5ba2\u6237\u7aef\u65e5\u5fd7"),(0,r.kt)("p",null,"RocketMQ \u7684 TCP Java SDK \u57fa\u4e8e SLF4J \u63a5\u53e3\u7f16\u7a0b\u3002 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9488\u5bf9 JavaSDK1.7.8.Final \u7248\u672c\u53ca\u4ee5\u4e0a ")),(0,r.kt)("p",null,"RocketMQ \u7684 Java SDK 1.7.8.Final \u5df2\u5185\u7f6e\u4e86\u65e5\u5fd7\u5b9e\u73b0\uff0c\u65e0\u9700\u5728\u5ba2\u6237\u7aef\u5e94\u7528\u4e2d\u6dfb\u52a0\u65e5\u5fd7\u5b9e\u73b0\u4f9d\u8d56 \u5373\u53ef\u6253\u5370 RocketMQ \u5ba2\u6237\u7aef\u65e5\u5fd7\u3002\nRocketMQ\u5ba2\u6237\u7aef\u65e5\u5fd7\u7684\u9ed8\u8ba4\u914d\u7f6e\u548c\u5982\u4f55\u4fee\u6539\u9ed8\u8ba4\u914d\u7f6e\uff0c\u8bf7\u53c2\u89c1\u4e0b\u6587\u7684\u5ba2\u6237\u7aef\u65e5\u5fd7\u914d\u7f6e\u90e8\u5206\u3002 "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9488\u5bf9 JavaSDK1.7.8.Final  \u4ee5\u4e0b ")),(0,r.kt)("p",null,"RocketMQ \u7684Java SDK 1.7.8.Final \u4ee5\u4e0b\u7684\u65e7\u7248\u672c\u4e0d\u652f\u6301 log4j2\uff0c\u53ea\u652f\u6301 log4j\u3001logback\u3002\u60a8\u9700\u8981 \u5728 pom.xml \u914d\u7f6e\u6587\u4ef6 \u6216\u8005 lib \u4e2d\u6dfb\u52a0\u5bf9\u5e94\u7684\u65e5\u5fd7\u5b9e\u73b0\u4f9d\u8d56\u6765\u6253\u5370 RocketMQ \u5ba2\u6237\u7aef\u65e5\u5fd7\u3002 "),(0,r.kt)("h3",{id:"\u65b9\u5f0f\u4e00-\u4f9d\u8d56-log4j-\u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0"},"\u65b9\u5f0f\u4e00: \u4f9d\u8d56 log4j \u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0"),(0,r.kt)("p",null,"\u4f9d\u8d56log4j\u6216logback\u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0\u7684\u793a\u4f8b\u4ee3\u7801\u5982\u4e0b\u6240\u793a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency> \n  <groupId>org.slf4j</groupId> \n  <artifactId>jcl-over-slf4j</artifactId> \n  <version>1.7.7</version>\n</dependency> \n<dependency>\n  <groupId>org.slf4j</groupId>\n  <artifactId>slf4j-log4j12</artifactId>\n  <version>1.7.7</version>\n</dependency> \n<dependency>\n  <groupId>log4j</groupId> \n  <artifactId>log4j</artifactId>\n  <version>1.2.17</version> \n</dependency>\n")),(0,r.kt)("p",null,"\u4f7f\u7528 log4j \u5c5e\u6027\u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u914d\u7f6e\u5982\u4e0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"log4j.appender.mq=org.apache.rocketmq.logappender.log4j.RocketmqLog4jAppender \nlog4j.appender.mq.Tag=yourTag \nlog4j.appender.mq.Topic=yourLogTopic \nlog4j.appender.mq.ProducerGroup=yourLogGroup \nlog4j.appender.mq.NameServerAddress=yourRocketmqNameserverAddress \nlog4j.appender.mq.layout=org.apache.log4j.PatternLayout \nlog4j.appender.mq.layout.ConversionPattern=%d{yyyy-MM-dd HH:mm:ss} %-4r [%t] (%F:%L) %-5p - %m%n \n")),(0,r.kt)("p",null,"\u4f7f\u7528 log4j xml \u914d\u7f6e\u6587\u4ef6\u65f6\uff0c\u5c06\u5176\u914d\u7f6e\u4e3a\u8fd9\u6837\u5e76\u6dfb\u52a0\u4e00\u4e2a\u5f02\u6b65\u9644\u52a0\u7a0b\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<appender name="mqAppender1" class="org.apache.rocketmq.logappender.log4j.RocketmqLog4jAppender">\n    <param name="Tag" value="yourTag" />\n    <param name="Topic" value="yourLogTopic" />\n    <param name="ProducerGroup" value="yourLogGroup" />\n    <param name="NameServerAddress" value="yourRocketmqNameserverAddress"/>\n    <layout class="org.apache.log4j.PatternLayout">\n        <param name="ConversionPattern" value="%d{yyyy-MM-dd HH:mm:ss}-%p %t %c - %m%n" />\n    </layout>\n</appender>\n\n<appender name="mqAsyncAppender1" class="org.apache.log4j.AsyncAppender">\n    <param name="BufferSize" value="1024" />\n    <param name="Blocking" value="false" />\n    <appender-ref ref="mqAppender1"/>\n</appender>\n')),(0,r.kt)("p",null,"\u4f7f\u7528 log4j2 \u65f6\uff0c\u914d\u7f6e\u4e3a this\u3002\u5982\u679c\u4f60\u60f3\u8981 noneblock\uff0c\u53ea\u9700\u4e3a ref \u914d\u7f6e\u4e00\u4e2a asyncAppender\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<RocketMQ name="rocketmqAppender" producerGroup="yourLogGroup" nameServerAddress="yourRocketmqNameserverAddress"\n     topic="yourLogTopic" tag="yourTag">\n    <PatternLayout pattern="%d [%p] hahahah %c %m%n"/>\n</RocketMQ>\n')),(0,r.kt)("h3",{id:"\u65b9\u5f0f\u4e8c-\u4f9d\u8d56-logback-\u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0"},"\u65b9\u5f0f\u4e8c: \u4f9d\u8d56 logback \u4f5c\u4e3a\u65e5\u5fd7\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency> \n  <groupId>ch.qos.logback</groupId> \n  <artifactId>logback-core</artifactId> \n  <version>1.1.2</version>\n</dependency> \n<dependency>\n  <groupId>ch.qos.logback</groupId>\n  <artifactId>logback-classic</artifactId> \n  <version>1.1.2</version> \n</dependency>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency> \n  <groupId>ch.qos.logback</groupId> \n  <artifactId>logback-core</artifactId> \n  <version>1.1.2</version>\n</dependency> \n<dependency>\n  <groupId>ch.qos.logback</groupId>\n  <artifactId>logback-classic</artifactId> \n  <version>1.1.2</version> \n</dependency>\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u5e94\u7528\u4e2d\u540c\u65f6\u4f9d\u8d56log4j\u548clogback\u7684\u65e5\u5fd7\u5b9e\u73b0\u4f1a\u9020\u6210\u65e5\u5fd7\u51b2\u7a81\u5bfc\u81f4\u5ba2\u6237\u7aef\u65e5\u5fd7\u6253\u5370\u6df7\u4e71\u3002\u786e\u4fdd \u5e94\u7528\u53ea\u4f9d\u8d56\u5176\u4e2d\u4e00\u4e2a\u65e5\u5fd7\u5b9e\u73b0\uff0c\u662f\u6b63\u786e\u6253\u5370RocketMQ\u5ba2\u6237\u7aef\u65e5\u5fd7\u7684\u524d\u63d0\u6761\u4ef6\uff0c\u5efa\u8bae\u901a\u8fc7",(0,r.kt)("inlineCode",{parentName:"p"},"mvn \nclean dependency:tree | grep log"),"\u547d\u4ee4\u6392\u67e5\u3002 ")),(0,r.kt)("h2",{id:"\u5ba2\u6237\u7aef\u65e5\u5fd7\u914d\u7f6e"},"\u5ba2\u6237\u7aef\u65e5\u5fd7\u914d\u7f6e"),(0,r.kt)("p",null,"RocketMQ \u5ba2\u6237\u7aef\u652f\u6301\u81ea\u5b9a\u4e49\u65e5\u5fd7\u4fdd\u5b58\u8def\u5f84\u3001\u65e5\u5fd7\u7ea7\u522b\u4ee5\u53ca\u4fdd\u5b58\u5386\u53f2\u65e5\u5fd7\u6587\u4ef6\u7684\u6700\u5927\u4e2a\u6570\u3002\u8003\u8651\u5230\u65e5\u5fd7\u4f20\u8f93\u4ee5\u53ca\u9605\u8bfb\u7684\u4fbf\u5229\u6027\uff0c\u6682\u4e0d\u5141\u8bb8\u81ea\u5b9a\u4e49\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f\uff0c\u4ecd\u4fdd\u6301\u9ed8\u8ba4\u768464 MB\u3002\u5404\u53c2\u6570\u7684\u914d\u7f6e\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,r.kt)("th",{parentName:"tr",align:null},"\u914d\u7f6e\u53c2\u6570"),(0,r.kt)("th",{parentName:"tr",align:null},"\u81ea\u5b9a\u4e49\u53d6\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u4fdd\u5b58\u8def\u5f84"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8bf7\u786e\u4fdd\u5e94\u7528\u8fdb\u7a0b\u6709\u5bf9\u8be5\u8def\u5f84\u5199\u7684\u6743\u9650\uff0c\u5426\u5219\u65e5\u5fd7 \u4e0d\u4f1a\u6253\u5370\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq.client.logRoot"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u81ea\u5b9a\u4e49\u4e3a\u60a8\u9700\u8981\u5c06\u65e5\u5fd7\u6587\u4ef6\u4fdd\u5b58\u5230\u672c\u5730\u7684\u8def\u5f84\u3002\u8bf7\u786e\u4fdd\u60a8\u7684\u5e94\u7528\u8fdb\u7a0b\u6709\u8be5\u8def\u5f84\u7684\u5199\u6743\u9650\uff0c\u5426\u5219\u65e5\u5fd7\u65e0\u6cd5\u6253\u5370\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4fdd\u5b58\u5386\u53f2\u65e5\u5fd7\u6587\u4ef6\u7684\u6700\u5927\u4e2a\u6570"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u63011\u5230100\u4e4b\u524d\u7684\u6570\u503c;\u82e5\u8f93\u5165\u7684\u503c\u8d85\u51fa\u8be5\u8303\u56f4 \u6216\u683c\u5f0f\u9519\u8bef\uff0c\u5219\u7cfb\u7edf\u9ed8\u8ba4\u4fdd\u5b5810\u4e2a\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq.client.logFileMaxIndex"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u5982\u4e0b\uff1a",(0,r.kt)("strong",{parentName:"td"},"ERROR**"),"WARN*",(0,r.kt)("strong",{parentName:"td"},"*INFO**"),"DEBUG**")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u65e5\u5fd7\u7ea7\u522b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301ERROR\u3001WARN\u3001INFO\u3001DEBUG\u4e2d\u4efb\u4f55\u4e00 \u79cd\uff0c\u4e0d\u5339\u914d\u9ed8\u8ba4INFO\u3002"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq.client.logLevel"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u8303\u56f4\uff1a1~100\u3002\u82e5\u8bbe\u7f6e\u7684\u503c\u8d85\u51fa\u8be5\u8303\u56f4\u6216\u683c\u5f0f\u9519\u8bef\uff0c\u5219\u4ee5\u7cfb\u7edf\u9ed8\u8ba4\u503c\uff0810\u4e2a\uff09\u4e3a\u51c6\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5355\u4e2a\u6587\u4ef6\u65e5\u5fd7\u5927\u5c0f"),(0,r.kt)("td",{parentName:"tr",align:null},"\u652f\u6301\u4ee5bytes\u4e3a\u5355\u4f4d\u6307\u5b9a"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq.client.logFileMaxSize"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d6\u503c\u57280~1GB, \u9ed8\u8ba41GB, \u5efa\u8bae64 MB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"logback\u662f\u5426\u4f7f\u7528\u7236\u7ea7logger\u6253\u5370"),(0,r.kt)("td",{parentName:"tr",align:null},"children-logger\u662f\u5426\u4f7f\u7528 rootLogger\u914d\u7f6e\u7684appender\u8fdb\u884c\u8f93\u51fa"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq.client.log.additive"),(0,r.kt)("td",{parentName:"tr",align:null},"true/false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4f7f\u7528\u9879\u76ee\u7684slf4j\u5b9e\u73b0\u8bb0\u5f55\u65e5\u5fd7"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u9700\u8981\u5b9e\u73b0\u8bb0\u5f55\u65e5\u5fd7 \u5219\u4e3atrue"),(0,r.kt)("td",{parentName:"tr",align:null},"rocketmq.client.logUseSlf4j"),(0,r.kt)("td",{parentName:"tr",align:null},"true/flase")))),(0,r.kt)("h2",{id:"\u9ed8\u8ba4\u914d\u7f6e"},"\u9ed8\u8ba4\u914d\u7f6e"),(0,r.kt)("p",null,"\u8bf7\u786e\u4fdd\u5e94\u7528\u8fdb\u7a0b\u6709\u5bf9\u8be5\u8def\u5f84\u5199\u7684\u6743\u9650\uff0c\u5426\u5219\u65e5\u5fd7 \u4e0d\u4f1a\u6253\u5370\u3002 \u652f\u6301 1 \u5230 100 \u4e4b\u524d\u7684\u6570\u503c;\u82e5\u8f93\u5165\u7684\u503c\u8d85\u51fa\u8be5\u8303\u56f4 \u6216\u683c\u5f0f\u9519\u8bef\uff0c\u5219\u7cfb\u7edf\u9ed8\u8ba4\u4fdd\u5b5810\u4e2a\u3002 \u652f\u6301 ERROR\u3001WARN\u3001INFO\u3001DEBUG \u4e2d\u4efb\u4f55\u4e00 \u79cd\uff0c\u4e0d\u5339\u914d\u9ed8\u8ba4 INFO\u3002 "),(0,r.kt)("p",null,"RocketMQ \u5ba2\u6237\u7aef\u542f\u52a8\u540e\uff0c\u4f1a\u6309\u7167\u5982\u4e0b\u7684\u9ed8\u8ba4\u914d\u7f6e\u751f\u6210\u65e5\u5fd7\u6587\u4ef6 :\t\t\t\t\t\t"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u4fdd\u5b58\u8def\u5f84:/{user.home}/logs/rocketmqlogs/ \u5176\u4e2d{user.home}\u662f\u6307\u542f\u52a8\u5f53\u524dJava\u8fdb\u7a0b\u7684\u7528 \u6237\u7684\u6839\u76ee\u5f55\t\t\t\t"),(0,r.kt)("li",{parentName:"ul"},"\u4fdd\u5b58\u5386\u53f2\u65e5\u5fd7\u6587\u4ef6\u7684\u6700\u5927\u4e2a\u6570:10\u4e2a  \t\t\t\t\t\t"),(0,r.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u7ea7\u522b:INFO  \t\t\t\t\t\t"),(0,r.kt)("li",{parentName:"ul"},"\u5355\u4e2a\u65e5\u5fd7\u6587\u4ef6\u5927\u5c0f:  1GB\t\t\t\t\t\t")),(0,r.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u8fdb\u884c\u81ea\u5b9a\u4e49\u914d\u7f6e \u53c2\u8003 ClientLogger\u7684\u9759\u6001\u53d8\u91cf\u5b9a\u4e49, \u53c2\u6570\u610f\u4e49\u5bf9\u9f50\u4e0a\u6587\u5ba2\u6237\u7aef\u914d\u7f6e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'    public static final String CLIENT_LOG_USESLF4J = "rocketmq.client.logUseSlf4j";\n    public static final String CLIENT_LOG_ROOT = "rocketmq.client.logRoot";\n    public static final String CLIENT_LOG_MAXINDEX = "rocketmq.client.logFileMaxIndex";\n    public static final String CLIENT_LOG_FILESIZE = "rocketmq.client.logFileMaxSize";\n    public static final String CLIENT_LOG_LEVEL = "rocketmq.client.logLevel";\n    public static final String CLIENT_LOG_ADDITIVE = "rocketmq.client.log.additive";\n    public static final String CLIENT_LOG_FILENAME = "rocketmq.client.logFileName";\n    public static final String CLIENT_LOG_ASYNC_QUEUESIZE = "rocketmq.client.logAsyncQueueSize";\n    public static final String ROCKETMQ_CLIENT_APPENDER_NAME = "RocketmqClientAppender";\n\n    private static final InternalLogger CLIENT_LOGGER;\n\n    private static final boolean CLIENT_USE_SLF4J;\n\n    //private static Appender rocketmqClientAppender = null;\n\n    static {\n        CLIENT_USE_SLF4J = Boolean.parseBoolean(System.getProperty(CLIENT_LOG_USESLF4J, "false"));\n        if (!CLIENT_USE_SLF4J) {\n            InternalLoggerFactory.setCurrentLoggerType(InnerLoggerFactory.LOGGER_INNER);\n            CLIENT_LOGGER = createLogger(LoggerName.CLIENT_LOGGER_NAME);\n            createLogger(LoggerName.COMMON_LOGGER_NAME);\n            createLogger(RemotingHelper.ROCKETMQ_REMOTING);\n        } else {\n            CLIENT_LOGGER = InternalLoggerFactory.getLogger(LoggerName.CLIENT_LOGGER_NAME);\n        }\n    }\n')),(0,r.kt)("h2",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e2a\u7b80\u5355\u793a\u4f8b"),(0,r.kt)("p",null,"\u5728\u542f\u52a8\u811a\u672c\u4e2d\u6216\u8005IDE\u7684VM options\u4e2d\u6dfb\u52a0\u5982\u4e0b\u7cfb\u7edf\u53c2\u6570: "),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Linux\u793a\u4f8b",label:"Linux\u793a\u4f8b",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-Drocketmq.client.logRoot=/home/admin/logs -Drocketmq.client.logLevel=WARN -Drocketmq.client.logFileMaxIndex=20  -Drocketmq.client.logFileMaxSize=67108864\n"))),(0,r.kt)(o.Z,{value:"windows\u793a\u4f8b",label:"windows\u793a\u4f8b",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"-Drocketmq.client.logRoot=D:\\logs -Drocketmq.client.logLevel=WARN -Drocketmq.client.logFileMaxIndex=20 -Drocketmq.client.logFileMaxSize=67108864\n")))))}m.isMDXComponent=!0}}]);