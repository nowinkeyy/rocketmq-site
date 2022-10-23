"use strict";(self.webpackChunkrocketmq_docs=self.webpackChunkrocketmq_docs||[]).push([[280],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>k});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)t=c[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(t),k=r,m=u["".concat(l,".").concat(k)]||u[k]||p[k]||c;return t?o.createElement(m,a(a({ref:n},d),{},{components:t})):o.createElement(m,a({ref:n},d))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},89667:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var o=t(87462),r=(t(67294),t(3905));const c={},a="RocketMQ Connect\u5b9e\u62182",i={unversionedId:"\u6570\u636e\u96c6\u6210/29RocketMQ Connect In Action2",id:"\u6570\u636e\u96c6\u6210/29RocketMQ Connect In Action2",title:"RocketMQ Connect\u5b9e\u62182",description:"PostgreSQL Source(CDC)  -  >RocketMQ Connect  ->  MySQL Sink(JDBC)",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/07-\u6570\u636e\u96c6\u6210/29RocketMQ Connect In Action2.md",sourceDirName:"07-\u6570\u636e\u96c6\u6210",slug:"/\u6570\u636e\u96c6\u6210/29RocketMQ Connect In Action2",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/29RocketMQ Connect In Action2",draft:!1,editUrl:"https://github.com/apache/rocketmq-site/tree/new-official-website/docs/07-\u6570\u636e\u96c6\u6210/29RocketMQ Connect In Action2.md",tags:[],version:"current",frontMatter:{},sidebar:"myAutogeneratedSidebar",previous:{title:"RocketMQ Connect\u5b9e\u62181",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/28RocketMQ Connect In Action1"},next:{title:"RocketMQ Connect\u5b9e\u62183",permalink:"/docs/4.x/\u6570\u636e\u96c6\u6210/30RocketMQ Connect In Action3"}},l={},s=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u542f\u52a8RocketMQ",id:"\u542f\u52a8rocketmq",level:3},{value:"\u542f\u52a8Connect",id:"\u542f\u52a8connect",level:3},{value:"Connector\u63d2\u4ef6\u7f16\u8bd1",id:"connector\u63d2\u4ef6\u7f16\u8bd1",level:4},{value:"\u542f\u52a8Connect Runtime",id:"\u542f\u52a8connect-runtime",level:4},{value:"Postgres\u955c\u50cf",id:"postgres\u955c\u50cf",level:3},{value:"MySQL\u955c\u50cf",id:"mysql\u955c\u50cf",level:3},{value:"\u6d4b\u8bd5\u6570\u636e",id:"\u6d4b\u8bd5\u6570\u636e",level:3},{value:"\u542f\u52a8Connector",id:"\u542f\u52a8connector",level:2},{value:"\u542f\u52a8Debezium source connector",id:"\u542f\u52a8debezium-source-connector",level:3},{value:"\u542f\u52a8 jdbc sink connector",id:"\u542f\u52a8-jdbc-sink-connector",level:3}],d={toc:s};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rocketmq-connect\u5b9e\u62182"},"RocketMQ Connect\u5b9e\u62182"),(0,r.kt)("p",null,"PostgreSQL Source(CDC)  -  >RocketMQ Connect  ->  MySQL Sink(JDBC)"),(0,r.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,r.kt)("h3",{id:"\u542f\u52a8rocketmq"},"\u542f\u52a8RocketMQ"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Linux/Unix/Mac"),(0,r.kt)("li",{parentName:"ol"},"64bit JDK 1.8+;"),(0,r.kt)("li",{parentName:"ol"},"Maven 3.2.x\u6216\u4ee5\u4e0a\u7248\u672c;"),(0,r.kt)("li",{parentName:"ol"},"\u542f\u52a8 ",(0,r.kt)("a",{parentName:"li",href:"https://rocketmq.apache.org/docs/quick-start/"},"RocketMQ"),";")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"tips")," : ${ROCKETMQ_HOME} \u4f4d\u7f6e\u8bf4\u660e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"bin-release.zip \u7248\u672c\uff1a/rocketmq-all-4.9.4-bin-release"),(0,r.kt)("p",{parentName:"blockquote"},"source-release.zip \u7248\u672c\uff1a/rocketmq-all-4.9.4-source-release/distribution")),(0,r.kt)("h3",{id:"\u542f\u52a8connect"},"\u542f\u52a8Connect"),(0,r.kt)("h4",{id:"connector\u63d2\u4ef6\u7f16\u8bd1"},"Connector\u63d2\u4ef6\u7f16\u8bd1"),(0,r.kt)("p",null,"Debezium RocketMQ Connector"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-debezium/\n$ mvn clean package -Dmaven.test.skip=true\n")),(0,r.kt)("p",null,"\u5c06 Debezium PostgreSQL RocketMQ Connector \u7f16\u8bd1\u597d\u7684\u5305\u653e\u5165Runtime\u52a0\u8f7d\u76ee\u5f55\u3002\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir -p /usr/local/connector-plugins\ncp rocketmq-connect-debezium-postgresql/target/rocketmq-connect-debezium-postgresql-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n")),(0,r.kt)("p",null,"JDBC Connector"),(0,r.kt)("p",null,"\u5c06 JDBC Connector \u7f16\u8bd1\u597d\u7684\u5305\u653e\u5165Runtime\u52a0\u8f7d\u76ee\u5f55\u3002\u547d\u4ee4\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd rocketmq-connect/connectors/rocketmq-connect-jdbc/\n$ mvn clean package -Dmaven.test.skip=true\ncp rocketmq-connect-jdbc/target/rocketmq-connect-jdbc-0.0.1-SNAPSHOT-jar-with-dependencies.jar /usr/local/connector-plugins\n\n")),(0,r.kt)("h4",{id:"\u542f\u52a8connect-runtime"},"\u542f\u52a8Connect Runtime"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd  rocketmq-connect\n\nmvn -Prelease-connect -DskipTests clean install -U\n\n")),(0,r.kt)("p",null,"\u4fee\u6539\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"connect-standalone.conf")," \uff0c\u91cd\u70b9\u914d\u7f6e\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n$ vim conf/connect-standalone.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'workerId=standalone-worker\nstorePathRootDir=/tmp/storeRoot\n\n## Http port for user to access REST API\nhttpPort=8082\n\n# Rocketmq namesrvAddr\nnamesrvAddr=localhost:9876\n\n# RocketMQ acl\naclEnable=false\naccessKey=rocketmq\nsecretKey=12345678\n\nautoCreateGroupEnable=false\nclusterName="DefaultCluster"\n\n# \u6838\u5fc3\u914d\u7f6e\uff0c\u5c06\u4e4b\u524d\u7f16\u8bd1\u597ddebezium\u5305\u7684\u63d2\u4ef6\u76ee\u5f55\u914d\u7f6e\u5728\u6b64\uff1b\n# Source or sink connector jar file dir,The default value is rocketmq-connect-sample\npluginPaths=/usr/local/connector-plugins\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd distribution/target/rocketmq-connect-0.0.1-SNAPSHOT/rocketmq-connect-0.0.1-SNAPSHOT\n\nsh bin/connect-standalone.sh -c conf/connect-standalone.conf &\n\n")),(0,r.kt)("h3",{id:"postgres\u955c\u50cf"},"Postgres\u955c\u50cf"),(0,r.kt)("p",null,"\u4f7f\u7528debezium\u7684Postgres docker\u642d\u5efa\u73af\u5883MySQL\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# starting a pg instance\ndocker run -d --name postgres -p 5432:5432 -e POSTGRES_USER=start_data_engineer -e POSTGRES_PASSWORD=password debezium/postgres:14\n\n# bash into postgres instance\ndocker exec -ti postgres /bin/bash\n")),(0,r.kt)("p",null,"Postgres\u4fe1\u606f\n\u7aef\u53e3\uff1a5432\n\u8d26\u53f7\uff1astart_data_engineer/password\n\u540c\u6b65\u7684\u6e90\u6570\u636e\u5e93\uff1abank.holding\n\u76ee\u6807\u5e93\uff1abank1.holding"),(0,r.kt)("h3",{id:"mysql\u955c\u50cf"},"MySQL\u955c\u50cf"),(0,r.kt)("p",null,"\u4f7f\u7528debezium\u7684MySQL docker\u642d\u5efa\u73af\u5883MySQL\u6570\u636e\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker run -it --rm --name mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=debezium -e MYSQL_USER=mysqluser -e MYSQL_PASSWORD=mysqlpw quay.io/debezium/example-mysql:1.9\n")),(0,r.kt)("p",null,"MySQL\u4fe1\u606f"),(0,r.kt)("p",null,"\u7aef\u53e3\uff1a3306"),(0,r.kt)("p",null,"\u8d26\u53f7\uff1aroot/debezium"),(0,r.kt)("h3",{id:"\u6d4b\u8bd5\u6570\u636e"},"\u6d4b\u8bd5\u6570\u636e"),(0,r.kt)("p",null,"\u901a\u8fc7start_data_engineer/password\u8d26\u53f7\u767b\u5f55\u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u6e90\u6570\u636e\u5e93\u8868\uff1abank.holding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"CREATE SCHEMA bank;\nSET search_path TO bank,public;\nCREATE TABLE bank.holding (\n                              holding_id int,\n                              user_id int,\n                              holding_stock varchar(8),\n                              holding_quantity int,\n                              datetime_created timestamp,\n                              datetime_updated timestamp,\n                              primary key(holding_id)\n);\nALTER TABLE bank.holding replica identity FULL;\ninsert into bank.holding values (1000, 1, 'VFIAX', 10, now(), now());\n\\q\ninsert into bank.holding values (1000, 1, 'VFIAX', 10, now(), now());\ninsert into bank.holding values (1001, 2, 'SP500', 1, now(), now());\ninsert into bank.holding values (1003, 3, 'SP500', 1, now(), now());\nupdate bank.holding set holding_quantity = 300 where holding_id=1000;\n\n")),(0,r.kt)("p",null,"\u76ee\u6807\u8868\uff1abank1.holding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"create database bank1;\nCREATE TABLE holding (\n                          holding_id int,\n                          user_id int,\n                          holding_stock varchar(8),\n                          holding_quantity int,\n                          datetime_created bigint,\n                          datetime_updated bigint,\n                          primary key(holding_id)\n);\n\n")),(0,r.kt)("h2",{id:"\u542f\u52a8connector"},"\u542f\u52a8Connector"),(0,r.kt)("h3",{id:"\u542f\u52a8debezium-source-connector"},"\u542f\u52a8Debezium source connector"),(0,r.kt)("p",null,"\u540c\u6b65\u539f\u8868\u6570\u636e\uff1abank.holding\n\u4f5c\u7528\uff1a\u901a\u8fc7\u89e3\u6790Postgres binlog \u5c01\u88c5\u6210\u901a\u7528\u7684ConnectRecord\u5bf9\u8c61\uff0c\u53d1\u9001\u7684RocketMQ Topic\u5f53\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/postgres-connector -d  \'{\n  "connector.class": "org.apache.rocketmq.connect.debezium.postgres.DebeziumPostgresConnector",\n  "max.task": "1",\n  "connect.topicname": "debezium-postgres-source-01",\n  "kafka.transforms": "Unwrap",\n  "kafka.transforms.Unwrap.delete.handling.mode": "none",\n  "kafka.transforms.Unwrap.type": "io.debezium.transforms.ExtractNewRecordState",\n  "kafka.transforms.Unwrap.add.headers": "op,source.db,source.table",\n  "database.history.skip.unparseable.ddl": true,\n  "database.server.name": "bankserver1",\n  "database.port": 5432,\n  "database.hostname": "\u6570\u636e\u5e93ip",\n  "database.connectionTimeZone": "UTC",\n  "database.user": "start_data_engineer",\n  "database.dbname": "start_data_engineer",\n  "database.password": "password",\n  "table.whitelist": "bank.holding",\n  "key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n  "value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n')),(0,r.kt)("h3",{id:"\u542f\u52a8-jdbc-sink-connector"},"\u542f\u52a8 jdbc sink connector"),(0,r.kt)("p",null,"\u4f5c\u7528\uff1a\u901a\u8fc7\u6d88\u8d39Topic\u4e2d\u7684\u6570\u636e\uff0c\u901a\u8fc7JDBC\u534f\u8bae\u5199\u5165\u5230\u76ee\u6807\u8868\u5f53\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl -X POST -H "Content-Type: application/json" http://127.0.0.1:8082/connectors/jdbcmysqlsinktest201 -d \'{\n  "connector.class": "org.apache.rocketmq.connect.jdbc.connector.JdbcSinkConnector",\n  "max.task": "2",\n  "connect.topicnames": "debezium-postgres-source-01",\n  "connection.url": "jdbc:mysql://\u6570\u636e\u5e93ip:3306/bank1",\n  "connection.user": "root",\n  "connection.password": "debezium",\n  "pk.fields": "holding_id",\n  "table.name.from.header": "true",\n  "pk.mode": "record_key",\n  "insert.mode": "UPSERT",\n  "db.timezone": "UTC",\n  "table.types": "TABLE",\n  "errors.deadletterqueue.topic.name": "dlq-topic",\n  "errors.log.enable": "true",\n  "errors.tolerance": "ALL",\n  "delete.enabled": "true",\n  "key.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter",\n  "value.converter": "org.apache.rocketmq.connect.runtime.converter.record.json.JsonConverter"\n}\'\n\n')),(0,r.kt)("p",null,"\u4ee5\u4e0a\u4e24\u4e2aConnector\u4efb\u52a1\u521b\u5efa\u6210\u529f\u4ee5\u540e\n\u901a\u8fc7start_data_engineer/password\u8d26\u53f7\u767b\u5f55\u6570\u636e\u5e93\n\u8d26\u53f7\u767b\u5f55\u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u5bf9\u6e90\u6570\u636e\u5e93\u8868\uff1abankholding\u589e\u5220\u6539\n\u5373\u53ef\u540c\u6b65\u5230\u76ee\u6807\u8868bank1.holding"))}p.isMDXComponent=!0}}]);