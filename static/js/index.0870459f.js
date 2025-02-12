(()=>{"use strict";var e={4437:function(e,r,i){var t=i(5367),s=i(2230),n=i(3800);i(399);var l=i(9178),a=i(423);let d={MODERNJS_FRAMEWORK:"modernjs-framework",RSBUILD:"rsbuild",RSLIB:"rslib",RSPRESS:"rspress",RSPACK:"rspack"},c={BUNDLE_SIZE:"bundle-size",COMPILE_SPEED:"compile-speed",INSTALL_SPEED:"install-speed",CLI_SPEED:"cli-speed",BINARY_SIZE:"binary-size"},o={[d.MODERNJS_FRAMEWORK]:["app-minimal","app-initial","app-initial-rspack","app-tailwind","app-ssr","app-ssg","app-bff-koa","app-arco-pro","app-arco-pro-swc","app-arco-pro-esbuild","app-arco-pro-rspack"],[d.RSPRESS]:["rspress-minimal","rspress-website","rspress-website-mdxjs"],[d.RSBUILD]:["rsbuild-react","rsbuild-react-app-10k","rsbuild-arco-pro","rsbuild-vue3","rsbuild-lit","rsbuild-svelte","rsbuild-vanilla"],[d.RSLIB]:["rslib-node-basic","rslib-react-basic"]},m={[d.MODERNJS_FRAMEWORK]:["app-initial","app-initial-rspack"],[d.RSPRESS]:["rspress-website","rspress-website-mdxjs"],[d.RSBUILD]:["rsbuild-react","rsbuild-arco-pro"],[d.RSLIB]:["rslib-node-basic","rslib-react-basic"]},u={[d.MODERNJS_FRAMEWORK]:["minifiedBundleSize","gzippedBundleSize"],[d.RSPRESS]:["gzipInitialJsSize","initialJsSize","minifiedBundleSize","gzippedBundleSize"],[d.RSBUILD]:["minifiedBundleSize","gzippedBundleSize"],[d.RSLIB]:["esmBundleSize","cjsBundleSize","esmGzipBundleSize","cjsGzipBundleSize"]},p={[d.MODERNJS_FRAMEWORK]:["app-arco-pro","app-arco-pro-rspack"],[d.RSPRESS]:["rspress-website","rspress-website-mdxjs"],[d.RSBUILD]:["rsbuild-react","rsbuild-arco-pro"],[d.RSLIB]:["rslib-node-basic","rslib-react-basic"]},x={[d.MODERNJS_FRAMEWORK]:["buildColdBootTime","buildHotBootTime","beforeBuildTime","buildPluginSetupTime","buildPrepareTime","devColdBootTime","devHotBootTime","beforeDevTime","devPluginSetupTime","devPrepareTime"],[d.RSPRESS]:["buildColdBootTime","devColdBootTime","beforeBuildTime","beforeDevTime","routeGenerateTime"],[d.RSBUILD]:["buildColdBootTime","devColdBootTime","beforeBuildTime","beforeDevTime"],[d.RSLIB]:["buildEsmTotalTime","buildCjsTotalTime","buildEsmJsTime","buildCjsJsTime","beforeBuildTime"]},S={[d.MODERNJS_FRAMEWORK]:["app-initial","app-initial-rspack"],[d.RSPRESS]:["rspress-minimal","rspress-website"],[d.RSBUILD]:["rsbuild-vanilla","rsbuild-react"],[d.RSLIB]:["rslib-node-basic","rslib-react-basic"]},h=["installSize","dependenciesCount","coldInstallTime","hotInstallTime"],f={[d.MODERNJS_FRAMEWORK]:h,[d.RSPRESS]:h,[d.RSBUILD]:h,[d.RSLIB]:h},b={height:400,seriesField:"category",xField:"x",yField:"y",xAxis:{label:{formatter:e=>e.split(" ")[0]},nice:!0},yAxis:{nice:!0},point:{size:3},stepType:"vh"},j=l.zo.div`
  position: fixed;
  display: flex;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  padding: 4px ${24}px;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e8e8e8;
`,R=l.zo.div`
  display: flex;
  font-size: 18px;
  align-items: center;
  color: #111;
`,y=l.zo.img`
  height: 100%;
`,g=l.zo.div`
  width: 48px;
  height: 36px;
  overflow: hidden;
  margin-right: 16px;
`,E=l.zo.a`
  display: flex;
  align-items: center;
  font-size: 28px;
  color: #222;
`,I=()=>(0,t.jsx)(E,{target:"_blank",href:"https://github.com/web-infra-dev/web-infra-QoS",children:(0,t.jsx)(a.Z,{})}),B=()=>(0,t.jsxs)(j,{className:"nav-bar",children:[(0,t.jsxs)(R,{children:[(0,t.jsx)(g,{children:(0,t.jsx)(y,{src:"/web-infra.png"})}),"Web Infra QoS Dashboard"]}),(0,t.jsx)(I,{})]});i(4606);var v=i(5080),D=i(8994),N=i(9247),T=i(9317),_=i(1803),M=i(970),w=i(331),L=i(3204),Z=i(2300),O=i(1342);let P=O.Z.Item,$=O.Z.SubMenu,C={display:"flex",alignItems:"center",height:38,fontSize:13},z=l.zo.div`
  position: fixed;
  top: 56px;
  left: 0;
  bottom: 0;
  width: 260px;
  background: #fff;
  overflow: auto;
`,A=e=>(0,t.jsx)(z,{children:(0,t.jsxs)(O.Z,{mode:"vertical",style:{padding:"16px 4px",fontSize:15},openKeys:e.openKeys,selectedKeys:e.selectedKeys,onClickMenuItem:e.onClickMenuItem,onClickSubMenu:e.onClickSubMenu,children:[(0,t.jsxs)($,{title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(L.Z,{})," Rsbuild"]}),children:[(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(T.Z,{}),"Compile Speed"]},`${d.RSBUILD}_${c.COMPILE_SPEED}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(N.Z,{}),"Install Speed"]},`${d.RSBUILD}_${c.INSTALL_SPEED}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(_.Z,{}),"Bundle Size"]},`${d.RSBUILD}_${c.BUNDLE_SIZE}`)]},d.RSBUILD),(0,t.jsxs)($,{title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D.Z,{})," Rspack"]}),children:[(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(M.Z,{}),"Binary Size"]},`${d.RSPACK}_${c.BINARY_SIZE}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(M.Z,{}),"Benchmark"]},`${d.RSPACK}_benchmark`)]},d.RSPACK),(0,t.jsxs)($,{title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w.Z,{})," Rspress"]}),children:[(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(T.Z,{}),"Compile Speed"]},`${d.RSPRESS}_${c.COMPILE_SPEED}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(N.Z,{}),"Install Speed"]},`${d.RSPRESS}_${c.INSTALL_SPEED}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(_.Z,{}),"Bundle Size"]},`${d.RSPRESS}_${c.BUNDLE_SIZE}`)]},d.RSPRESS),(0,t.jsxs)($,{title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(v.Z,{})," Rslib"]}),children:[(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(T.Z,{}),"Compile Speed"]},`${d.RSLIB}_${c.COMPILE_SPEED}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(N.Z,{}),"Install Speed"]},`${d.RSLIB}_${c.INSTALL_SPEED}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(_.Z,{}),"Bundle Size"]},`${d.RSLIB}_${c.BUNDLE_SIZE}`)]},d.RSLIB),(0,t.jsxs)($,{title:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(Z.Z,{})," Modern.js"]}),children:[(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(T.Z,{}),"Compile Speed"]},`${d.MODERNJS_FRAMEWORK}_${c.COMPILE_SPEED}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(N.Z,{}),"Install Speed"]},`${d.MODERNJS_FRAMEWORK}_${c.INSTALL_SPEED}`),(0,t.jsxs)(P,{style:C,children:[(0,t.jsx)(_.Z,{}),"Bundle Size"]},`${d.MODERNJS_FRAMEWORK}_${c.BUNDLE_SIZE}`)]},d.MODERNJS_FRAMEWORK)]})});i(1369),i(6808);var k=i(7225),K=i(5657),F=i(1725);i(7713),i(2648),i(1307),i(9218),i(6694);var U=i(7455),J=i(9373),W=i(6632),Y=i(7142),H=i(2493);let G=e=>{var r;let{productName:i,metrics:s,initialCase:n}=e;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(k.Z.Title,{heading:6,style:{marginBottom:24},children:"Add category by Cases and Metrics:"}),(0,t.jsxs)(H.Z.Row,{gutter:40,children:[(0,t.jsx)(H.Z.Col,{span:8,children:(0,t.jsx)(Y.Z.Item,{label:"Cases",field:"caseName",initialValue:n[0],style:{marginBottom:8},children:(0,t.jsx)(J.Z,{children:null===(r=o[i])||void 0===r?void 0:r.map(e=>(0,t.jsx)(J.Z.Option,{value:e,children:e},e))})})}),(0,t.jsx)(H.Z.Col,{span:8,children:(0,t.jsx)(Y.Z.Item,{label:"Metrics",field:"metricsName",initialValue:s[0],style:{marginBottom:8},children:(0,t.jsx)(J.Z,{children:s.map(e=>(0,t.jsx)(J.Z.Option,{value:e,children:e},e))})})}),(0,t.jsx)(H.Z.Col,{span:8,children:(0,t.jsx)(W.Z,{type:"primary",htmlType:"submit",style:{width:80},children:"Add"})})]})]})},Q=e=>(0,t.jsxs)(K.Z,{bordered:!1,style:{marginBottom:24},children:[(0,t.jsx)(Y.Z,{layout:"horizontal",labelAlign:"left",onSubmit:e.handleAddData,children:(0,t.jsx)(G,{...e})}),e.renderChoicesTags()]}),V=(e,r)=>{let[i,s]=(0,n.useState)([{case:e[0],metric:r},{case:e[1],metric:r}]),l=e=>{let r=[...i];r.splice(e,1),s(r)};return{categories:i,handleAddData:e=>{let r={case:e.caseName,metric:e.metricsName};i.some(r=>r.case===e.caseName&&r.metric===e.metricsName)||s([...i,r])},renderChoicesTags:()=>(0,t.jsx)("div",{style:{display:"flex",flexWrap:"wrap",marginTop:24},children:i.map((e,r)=>(0,t.jsx)("div",{style:{marginRight:12,marginBottom:12},children:(0,t.jsx)(U.Z,{closable:!0,onClose:()=>l(r),children:`${e.case} + ${e.metric}`},`${e.case}_${e.metric}`)},r))})}};var q=i(5829);let X=async e=>{let r=await q.getItem(e).catch(()=>{});if(r){let{data:e,timestamp:i}=r;if(new Date().getTime()-i<=432e5)return e}let i=await fetch(e).then(e=>e.json()).catch(()=>{});if(i){let r={data:i,timestamp:new Date().getTime()};await q.setItem(e,r)}return i},ee=async(e,r)=>{let i=await X(`/data/${e}/${r}.json`);return Object.keys(i).map(e=>({id:e,time:i[e].time,metrics:i[e]}))};var er=i(7651),ei=i.n(er);let et=e=>ei()(e).format("YY-MM-DD HH:mm"),es=e=>`${et(e.time)}（${e.id}）`,en=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"KB";return"KB"===r?e/=1024:"MB"===r&&(e=e/1024/1024),Number(e.toFixed(2))},el=e=>Number((e/1e3).toFixed(2)),ea=(e,r,i)=>{let t=[];return e.forEach((e,s)=>{let n=e.map(e=>({...e,caseName:r[s],metricsName:i[s]}));t.push(...n)}),t.sort((e,r)=>e.time-r.time).filter(e=>e.metrics[e.metricsName])},ed=(e,r,i)=>ea(e,r,i).map(e=>({category:`${e.caseName} + ${e.metricsName}`,x:es(e),y:en(e.metrics[e.metricsName])})),ec=e=>{let r=e.productIndex,i=(0,n.useRef)(null),s=(0,n.useRef)(null),{categories:l,handleAddData:a,renderChoicesTags:c}=V(m[r],u[r][0]),o=l.map(e=>e.case),p=l.map(e=>e.metric),x=e=>{let{root:i,results:t,caseNames:n,metricsNames:l}=e,a=ed(t,n,l);s.current?s.current.changeData(a):i&&(s.current=new F.x1(i,{...b,data:a,yAxis:{label:{formatter:e=>`${e} KB`},nice:!0},tooltip:{fields:["x","y","category"],formatter:e=>({name:e.category,value:`${e.y} KB`})},slider:{start:r===d.MODERNJS_FRAMEWORK?.85:0,end:1}}),s.current.render())};return(0,n.useEffect)(()=>{(async()=>{let e=o.map(e=>ee(r,e));x({results:await Promise.all(e),caseNames:o,metricsNames:p,root:i.current})})()},[l]),(0,t.jsxs)("div",{style:{padding:24},children:[(0,t.jsx)(Q,{productName:r,metrics:u[r],initialCase:m[r],handleAddData:a,renderChoicesTags:c}),(0,t.jsxs)(K.Z,{bordered:!1,style:{height:464},children:[(0,t.jsx)(k.Z.Title,{heading:5,style:{marginTop:0},children:"Trending"}),(0,t.jsx)("div",{ref:i})]})]})},eo=(e,r,i)=>ea(e,r,i).map(e=>({category:`${e.caseName} + ${e.metricsName}`,x:es(e),y:el(e.metrics[e.metricsName])})),em=e=>{let r=e.productIndex,i=(0,n.useRef)(null),s=(0,n.useRef)(null),{categories:l,handleAddData:a,renderChoicesTags:c}=V(p[r],x[r][0]),o=l.map(e=>e.case),m=l.map(e=>e.metric),u=e=>{let{root:i,results:t,caseNames:n,metricsNames:l}=e,a=eo(t,n,l);s.current?s.current.changeData(a):i&&(s.current=new F.x1(i,{...b,data:a,yAxis:{label:{formatter:e=>`${e} s`},nice:!0},tooltip:{fields:["x","y","category"],formatter:e=>({name:e.category,value:e.y+"s"})},slider:{start:r===d.MODERNJS_FRAMEWORK?.85:0,end:1}}),s.current.render())};return(0,n.useEffect)(()=>{(async()=>{let e=o.map(e=>ee(r,e));u({results:await Promise.all(e),caseNames:o,metricsNames:m,root:i.current})})()},[l]),(0,t.jsxs)("div",{style:{padding:24},children:[(0,t.jsx)(Q,{productName:r,metrics:x[r],initialCase:p[r],handleAddData:a,renderChoicesTags:c}),(0,t.jsxs)(K.Z,{bordered:!1,style:{height:464},children:[(0,t.jsx)(k.Z.Title,{heading:5,style:{marginTop:0},children:"Trending"}),(0,t.jsx)("div",{ref:i})]})]})},eu=(e,r,i)=>ea(e,r,i).map(e=>{let r;let i=e.metrics[e.metricsName];switch(e.metricsName){case"installSize":r=en(i,"MB");break;case"hotInstallTime":case"coldInstallTime":r=el(i);break;default:r=i}return{metricsName:e.metricsName,category:`${e.caseName} + ${e.metricsName}`,x:es(e),y:r}}),ep=e=>{let r=e.productIndex,i=(0,n.useRef)(null),s=(0,n.useRef)(null),{categories:l,handleAddData:a,renderChoicesTags:c}=V(S[r],f[r][0]),o=l.map(e=>e.case),m=l.map(e=>e.metric),u=e=>{let{root:i,results:t,caseNames:n,metricsNames:l}=e,a=eu(t,n,l);s.current?s.current.changeData(a):i&&(s.current=new F.x1(i,{...b,data:a,tooltip:{fields:["x","y","category","metricsName"],formatter:e=>{let r=e.y;return"installSize"===e.metricsName&&(r+="MB"),("coldInstallTime"===e.metricsName||"hotInstallTime"===e.metricsName)&&(r+="s"),{name:e.category,value:r}}},slider:{start:r===d.MODERNJS_FRAMEWORK?.85:0,end:1}}),s.current.render())};return(0,n.useEffect)(()=>{(async()=>{let e=o.map(e=>ee(r,e));u({results:await Promise.all(e),caseNames:o,metricsNames:m,root:i.current})})()},[l]),(0,t.jsxs)("div",{style:{padding:24},children:[(0,t.jsx)(Q,{productName:r,metrics:f[r],initialCase:S[r],handleAddData:a,renderChoicesTags:c}),(0,t.jsxs)(K.Z,{bordered:!1,style:{height:464},children:[(0,t.jsx)(k.Z.Title,{heading:5,style:{marginTop:0},children:"Trending"}),(0,t.jsx)("div",{ref:i})]})]})},ex=e=>(0,t.jsx)("div",{style:{padding:24},children:"WIP"}),eS=(e,r,i)=>ea(e,r,i).map(e=>({category:`${e.caseName} + ${e.metricsName}`,x:es(e),y:en(e.metrics[e.metricsName],"MB")})),eh=e=>{let r=e.productIndex,i=(0,n.useRef)(null),s=(0,n.useRef)(null),l=e=>{let{root:r,results:i}=e,t=eS([i],["rspack-binary-size"],["rspack.linux-x64-gnu"]);s.current?s.current.changeData(t):r&&(s.current=new F.x1(r,{...b,data:t,yAxis:{min:50},tooltip:{fields:["x","y","category","metricsName"],formatter:e=>({name:e.category.split("+")[1].trim(),value:`${e.y} MiB`})},slider:{start:0,end:1}}),s.current.render())};return(0,n.useEffect)(()=>{(async()=>{l({results:await ee(r,"rspack-binary-size"),root:i.current})})()},[]),(0,t.jsx)("div",{style:{padding:24},children:(0,t.jsxs)(K.Z,{bordered:!1,style:{height:464},children:[(0,t.jsx)(k.Z.Title,{heading:5,style:{marginTop:0},children:"Rspack Binary Size"}),(0,t.jsx)("div",{ref:i})]})})},ef=e=>(0,t.jsx)("div",{style:{marginLeft:260,marginTop:56},children:(()=>{if(e.productIndex===d.RSPACK)return e.menuIndex===c.BINARY_SIZE?(0,t.jsx)(eh,{productIndex:e.productIndex}):(0,t.jsx)("div",{style:{padding:24},children:(0,t.jsx)("div",{children:(0,t.jsx)("iframe",{src:"https://rspack-ecosystem-benchmark.rspack.dev/",title:"Rspack Benchmark",style:{width:"100%",height:"900px",border:"none"}})})});switch(e.menuIndex){case c.BUNDLE_SIZE:return(0,t.jsx)(ec,{productIndex:e.productIndex});case c.COMPILE_SPEED:return(0,t.jsx)(em,{productIndex:e.productIndex});case c.INSTALL_SPEED:return(0,t.jsx)(ep,{productIndex:e.productIndex});case c.CLI_SPEED:return(0,t.jsx)(ex,{productIndex:e.productIndex})}return null})()}),eb=l.zo.div`
  min-height: 100vh;
`,ej="web-infra-dev.github.io"===window.location.hostname?"/web-infra-QoS/index":"";(0,i(5458).createRoot)(document.getElementById("root")).render((0,t.jsx)(()=>{let e=new URLSearchParams(window.location.search),r=e.get("product")||d.RSBUILD,i=e.get("metrics")||c.COMPILE_SPEED,[l,a]=(0,n.useState)(r),[o,m]=(0,n.useState)(i),[u,p]=(0,n.useState)([d.RSBUILD,d.RSPACK,d.RSPRESS,d.RSLIB,d.MODERNJS_FRAMEWORK]),[x,S]=(0,n.useState)([`${r}_${i}`]);return(0,n.useEffect)(()=>{window.history.replaceState(null,"",`${ej}?product=${l}&metrics=${o}`)},[l,o]),(0,t.jsx)(s.VK,{basename:ej,children:(0,t.jsxs)(eb,{children:[(0,t.jsx)(B,{}),(0,t.jsx)(A,{openKeys:u,selectedKeys:x,onClickMenuItem:e=>{a(e.split("_")[0]),m(e.split("_")[1]),S([e])},onClickSubMenu:e=>{u.includes(e)?p(u.filter(r=>r!==e)):p([...u,e])}}),(0,t.jsx)(s.Z5,{children:(0,t.jsx)(s.AW,{path:"/",element:(0,t.jsx)(ef,{productIndex:l,menuIndex:o},l)})})]})})},{}))}},r={};function i(t){var s=r[t];if(void 0!==s)return s.exports;var n=r[t]={id:t,loaded:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.loaded=!0,n.exports}i.m=e,i.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(r,{a:r}),r},i.d=function(e,r){for(var t in r)i.o(r,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},i.nc=void 0,(()=>{var e=[];i.O=function(r,t,s,n){if(t){n=n||0;for(var l=e.length;l>0&&e[l-1][2]>n;l--)e[l]=e[l-1];e[l]=[t,s,n];return}for(var a=1/0,l=0;l<e.length;l++){for(var t=e[l][0],s=e[l][1],n=e[l][2],d=!0,c=0;c<t.length;c++)(!1&n||a>=n)&&Object.keys(i.O).every(function(e){return i.O[e](t[c])})?t.splice(c--,1):(d=!1,n<a&&(a=n));if(d){e.splice(l--,1);var o=s();void 0!==o&&(r=o)}}return r}})(),i.rv=function(){return"1.2.2"},(()=>{var e={980:0};i.O.j=function(r){return 0===e[r]};var r=function(r,t){var s,n,l=t[0],a=t[1],d=t[2],c=0;if(l.some(function(r){return 0!==e[r]})){for(s in a)i.o(a,s)&&(i.m[s]=a[s]);if(d)var o=d(i)}for(r&&r(t);c<l.length;c++)n=l[c],i.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return i.O(o)},t=self.webpackChunkwebsite=self.webpackChunkwebsite||[];t.forEach(r.bind(null,0)),t.push=r.bind(null,t.push.bind(t))})(),i.ruid="bundler=rspack@1.2.2";var t=i.O(void 0,["361","118","812"],function(){return i(4437)});t=i.O(t)})();