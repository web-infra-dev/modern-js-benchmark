(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["lib-router"],{35817:function(e,t,r){"use strict";r.r(t),r.d(t,{AbortedDeferredError:function(){return $},Action:function(){return o},UNSAFE_getPathContributingMatches:function(){return F},UNSAFE_invariant:function(){return _},createBrowserHistory:function(){return S},createPath:function(){return C},isRouteErrorResponse:function(){return M},joinPaths:function(){return B},matchPath:function(){return k},matchRoutes:function(){return U},parsePath:function(){return x},resolveTo:function(){return L},stripBasename:function(){return N}});var n,a,o,i,u=r("70614"),s=r("25490"),c=r("95477"),l=r("93809"),h=r("72554"),d=r("61985"),f=r("59996"),p=r("97033"),v=r("52868"),m=r("76410"),g=r("75485"),y=r("46699");function b(){return(b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}(n=o||(o={})).Pop="POP",n.Push="PUSH",n.Replace="REPLACE";var E="popstate";function S(e){return void 0===e&&(e={}),function(e,t,r,n){var a=function(){return(f.state||{idx:null}).idx},i=function(){p=o.Pop;var e=a(),t=null==e?null:e-m;m=e,v&&v({action:p,location:g.location,delta:t})},u=function(e){var t="null"!==c.location.origin?c.location.origin:c.location.href,r="string"==typeof e?e:C(e);return _(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)};void 0===n&&(n={});var s=n.window,c=void 0===s?document.defaultView:s,l=n.v5Compat,h=void 0!==l&&l,f=c.history,p=o.Pop,v=null,m=a();null==m&&(m=0,f.replaceState(b({},f.state,{idx:m}),""));var g={get action(){return p},get location(){return e(c,f)},listen:function(e){if(v)throw Error("A history only accepts one active listener");return c.addEventListener(E,i),v=e,function(){c.removeEventListener(E,i),v=null}},createHref:function(e){return t(c,e)},createURL:u,encodeLocation:function(e){var t=u(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p=o.Push;var n=R(g.location,e,t);r&&r(n,e);var i=w(n,m=a()+1),u=g.createHref(n);try{f.pushState(i,"",u)}catch(e){if((0,d._)(e,DOMException)&&"DataCloneError"===e.name)throw e;c.location.assign(u)}h&&v&&v({action:p,location:g.location,delta:1})},replace:function(e,t){p=o.Replace;var n=R(g.location,e,t);r&&r(n,e);var i=w(n,m=a()),u=g.createHref(n);f.replaceState(i,"",u),h&&v&&v({action:p,location:g.location,delta:0})},go:function(e){return f.go(e)}};return g}(function(e,t){var r=e.location;return R("",{pathname:r.pathname,search:r.search,hash:r.hash},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:C(t)},null,e)}function _(e,t){if(!1===e||null==e)throw Error(t)}function P(e,t){if(!e){"undefined"!=typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function w(e,t){return{usr:e.state,key:e.key,idx:t}}function R(e,t,r,n){return void 0===r&&(r=null),b({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?x(t):t,{state:r,key:t&&t.key||n||Math.random().toString(36).substr(2,8)})}function C(e){var t=e.pathname,r=void 0===t?"/":t,n=e.search,a=void 0===n?"":n,o=e.hash,i=void 0===o?"":o;return a&&"?"!==a&&(r+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(r+="#"===i.charAt(0)?i:"#"+i),r}function x(e){var t={};if(e){var r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));var n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function U(e,t,r){void 0===r&&(r="/");var n=N(("string"==typeof t?x(t):t).pathname||"/",r);if(null==n)return null;var a=function e(t,r,n,a){void 0===r&&(r=[]),void 0===n&&(n=[]),void 0===a&&(a="");var o=function(t,o,i){var u={relativePath:void 0===i?t.path||"":i,caseSensitive:!0===t.caseSensitive,childrenIndex:o,route:t};u.relativePath.startsWith("/")&&(_(u.relativePath.startsWith(a),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+a)+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),u.relativePath=u.relativePath.slice(a.length));var s=B([a,u.relativePath]),c=n.concat(u);t.children&&t.children.length>0&&(_(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),e(t.children,r,c,s)),(null!=t.path||t.index)&&r.push({path:s,score:function(e,t){var r=e.split("/"),n=r.length;return r.some(j)&&(n+=-2),t&&(n+=2),r.filter(function(e){return!j(e)}).reduce(function(e,t){return e+(A.test(t)?3:""===t?1:10)},n)}(s,t.index),routesMeta:c})};return t.forEach(function(e,t){var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?")){var n=!0,a=!1,i=void 0;try{for(var u,s=(function e(t){var r=t.split("/");if(0===r.length)return[];var n=(0,p._)(r),a=n[0],o=n.slice(1),i=a.endsWith("?"),u=a.replace(/\?$/,"");if(0===o.length)return i?[u,""]:[u];var s=e(o.join("/")),c=[];return c.push.apply(c,(0,v._)(s.map(function(e){return""===e?u:[u,e].join("/")}))),i&&c.push.apply(c,(0,v._)(s)),c.map(function(e){return t.startsWith("/")&&""===e?"/":e})})(e.path)[Symbol.iterator]();!(n=(u=s.next()).done);n=!0){var c=u.value;o(e,t,c)}}catch(e){a=!0,i=e}finally{try{!n&&null!=s.return&&s.return()}finally{if(a)throw i}}}else o(e,t)}),r}(e);(function(e){e.sort(function(e,t){return e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(function(e,r){return e===t[r]})?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map(function(e){return e.childrenIndex}),t.routesMeta.map(function(e){return e.childrenIndex}))})})(a);for(var o=null,i=0;null==o&&i<a.length;++i)o=function(e,t){for(var r=e.routesMeta,n={},a="/",o=[],i=0;i<r.length;++i){var u=r[i],s=i===r.length-1,c="/"===a?t:t.slice(a.length)||"/",l=k({path:u.relativePath,caseSensitive:u.caseSensitive,end:s},c);if(!l)return null;Object.assign(n,l.params);var h=u.route;o.push({params:n,pathname:B([a,l.pathname]),pathnameBase:D(B([a,l.pathnameBase])),route:h}),"/"!==l.pathnameBase&&(a=B([a,l.pathnameBase]))}return o}(a[i],function(e){try{return decodeURI(e)}catch(t){return P(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t)+")."),e}}(n));return o}(a=i||(i={})).data="data",a.deferred="deferred",a.redirect="redirect",a.error="error";var A=/^:\w+$/,j=function(e){return"*"===e};function k(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});var r=(0,f._)(function(e,t,r){void 0===t&&(t=!1),void 0===r&&(r=!0),P("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*"))+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, '+('please change the route path to "'+e.replace(/\*$/,"/*"))+'".');var n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:(\w+)(\?)?/g,function(e,t,r){return n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)"});return e.endsWith("*")?(n.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}(e.path,e.caseSensitive,e.end),2),n=r[0],a=r[1],o=t.match(n);if(!o)return null;var i=o[0],u=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:a.reduce(function(e,t,r){var n=t.paramName,a=t.isOptional;if("*"===n){var o=s[r]||"";u=i.slice(0,i.length-o.length).replace(/(.)\/+$/,"$1")}var c=s[r];return a&&!c?e[n]=void 0:e[n]=function(e,t){try{return decodeURIComponent(e)}catch(r){return P(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e)+'" is a malformed URL segment. This is probably'+(" due to a bad percent encoding ("+r)+")."),e}}(c||"",n),e},{}),pathname:i,pathnameBase:u,pattern:e}}function N(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;var r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function O(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n))+"].  Please separate it out to the "+("`to."+r)+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function F(e){return e.filter(function(e,t){return 0===t||e.route.path&&e.route.path.length>0})}function L(e,t,r,n){void 0===n&&(n=!1),"string"==typeof e?d=x(e):(_(!(d=b({},e)).pathname||!d.pathname.includes("?"),O("?","pathname","search",d)),_(!d.pathname||!d.pathname.includes("#"),O("#","pathname","hash",d)),_(!d.search||!d.search.includes("#"),O("#","search","hash",d)));var a,o,i,u,s,c,l,h,d,f,p=""===e||""===d.pathname,v=p?"/":d.pathname;if(null==v)f=r;else if(n){var m=t[t.length-1].replace(/^\//,"").split("/");if(v.startsWith("..")){for(var g=v.split("/");".."===g[0];)g.shift(),m.pop();d.pathname=g.join("/")}f="/"+m.join("/")}else{var y=t.length-1;if(v.startsWith("..")){for(var E=v.split("/");".."===E[0];)E.shift(),y-=1;d.pathname=E.join("/")}f=y>=0?t[y]:"/"}var S=(a=d,void 0===(o=f)&&(o="/"),u=(i="string"==typeof a?x(a):a).pathname,c=void 0===(s=i.search)?"":s,h=void 0===(l=i.hash)?"":l,{pathname:u?u.startsWith("/")?u:function(e,t){var r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(function(e){".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)}),r.length>1?r.join("/"):"/"}(u,o):o,search:T(c),hash:W(h)}),P=v&&"/"!==v&&v.endsWith("/"),w=(p||"."===v)&&r.endsWith("/");return!S.pathname.endsWith("/")&&(P||w)&&(S.pathname+="/"),S}var B=function(e){return e.join("/").replace(/\/\/+/g,"/")},D=function(e){return e.replace(/\/+$/,"").replace(/^\/*/,"/")},T=function(e){return e&&"?"!==e?e.startsWith("?")?e:"?"+e:""},W=function(e){return e&&"#"!==e?e.startsWith("#")?e:"#"+e:""},$=function(e){(0,h._)(r,e);var t=(0,g._)(r);function r(){return(0,s._)(this,r),t.apply(this,arguments)}return r}((0,m._)(Error));(0,c._)(function e(t,r){var n,a=this;(0,s._)(this,e),this.pendingKeysSet=new Set,this.subscribers=new Set,this.deferredKeys=[],_(t&&"object"==typeof t&&!Array.isArray(t),"defer() only accepts plain objects"),this.abortPromise=new Promise(function(e,t){return n=t}),this.controller=new AbortController;var o=function(){return n(new $("Deferred data aborted"))};this.unlistenAbortSignal=function(){return a.controller.signal.removeEventListener("abort",o)},this.controller.signal.addEventListener("abort",o),this.data=Object.entries(t).reduce(function(e,t){var r=(0,f._)(t,2),n=r[0],o=r[1];return Object.assign(e,(0,l._)({},n,a.trackPromise(n,o)))},{}),this.done&&this.unlistenAbortSignal(),this.init=r},[{key:"trackPromise",value:function(e,t){var r=this;if(!(0,d._)(t,Promise))return t;this.deferredKeys.push(e),this.pendingKeysSet.add(e);var n=Promise.race([t,this.abortPromise]).then(function(t){return r.onSettle(n,e,void 0,t)},function(t){return r.onSettle(n,e,t)});return n.catch(function(){}),Object.defineProperty(n,"_tracked",{get:function(){return!0}}),n}},{key:"onSettle",value:function(e,t,r,n){if(this.controller.signal.aborted&&(0,d._)(r,$))return this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:function(){return r}}),Promise.reject(r);if(this.pendingKeysSet.delete(t),this.done&&this.unlistenAbortSignal(),void 0===r&&void 0===n){var a=Error('Deferred data for key "'+t+'" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.');return Object.defineProperty(e,"_error",{get:function(){return a}}),this.emit(!1,t),Promise.reject(a)}return void 0===n?(Object.defineProperty(e,"_error",{get:function(){return r}}),this.emit(!1,t),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:function(){return n}}),this.emit(!1,t),n)}},{key:"emit",value:function(e,t){this.subscribers.forEach(function(r){return r(e,t)})}},{key:"subscribe",value:function(e){var t=this;return this.subscribers.add(e),function(){return t.subscribers.delete(e)}}},{key:"cancel",value:function(){var e=this;this.controller.abort(),this.pendingKeysSet.forEach(function(t,r){return e.pendingKeysSet.delete(r)}),this.emit(!0)}},{key:"resolveData",value:function(e){var t=this;return(0,u._)(function(){var r,n;return(0,y._)(this,function(a){switch(a.label){case 0:if(r=!1,t.done)return[3,2];return n=function(){return t.cancel()},e.addEventListener("abort",n),[4,new Promise(function(r){t.subscribe(function(a){e.removeEventListener("abort",n),(a||t.done)&&r(a)})})];case 1:r=a.sent(),a.label=2;case 2:return[2,r]}})})()}},{key:"done",get:function(){return 0===this.pendingKeysSet.size}},{key:"unwrappedData",get:function(){return _(null!==this.data&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce(function(e,t){var r=(0,f._)(t,2),n=r[0],a=r[1];return Object.assign(e,(0,l._)({},n,function(e){var t;if(t=e,!(0,d._)(t,Promise)||!0!==t._tracked)return e;if(e._error)throw e._error;return e._data}(a)))},{})}},{key:"pendingKeys",get:function(){return Array.from(this.pendingKeysSet)}}]);function M(e){return null!=e&&"number"==typeof e.status&&"string"==typeof e.statusText&&"boolean"==typeof e.internal&&"data"in e}["get"].concat((0,v._)(["post","put","patch","delete"])),Symbol("deferred")},82666:function(e,t,r){"use strict";r.r(t),r.d(t,{Route:function(){return l.Route},Routes:function(){return l.Routes},BrowserRouter:function(){return S}});var n,a,o,i,u=r("59996"),s=r("84691"),c=r("17736"),l=r("20657"),h=r("35817");function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var f="application/x-www-form-urlencoded";function p(e){return null!=e&&"string"==typeof e.tagName}var v=null,m=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function g(e){return null==e||m.has(e)?e:null}var y=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],b=s.createContext({isTransitioning:!1}),E=s.startTransition;function S(e){var t=e.basename,r=e.children,n=e.future,a=e.window,o=s.useRef();null==o.current&&(o.current=(0,h.createBrowserHistory)({window:a,v5Compat:!0}));var i=o.current,c=(0,u._)(s.useState({action:i.action,location:i.location}),2),d=c[0],f=c[1],p=(n||{}).v7_startTransition,v=s.useCallback(function(e){p&&E?E(function(){return f(e)}):f(e)},[f,p]);return s.useLayoutEffect(function(){return i.listen(v)},[i,v]),s.createElement(l.Router,{basename:t,children:r,location:d.location,navigationType:d.action,navigator:i})}c.flushSync;var _="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,P=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function w(e){var t=s.useContext(l.UNSAFE_DataRouterContext);return t||(0,h.UNSAFE_invariant)(!1),t}(n=o||(o={})).UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState",(a=i||(i={})).UseFetcher="useFetcher",a.UseFetchers="useFetchers",a.UseScrollRestoration="useScrollRestoration";var R=0},20657:function(e,t,r){"use strict";r.r(t),r.d(t,{createPath:function(){return f.createPath},Route:function(){return L},Router:function(){return B},Routes:function(){return D},UNSAFE_DataRouterContext:function(){return v},UNSAFE_DataRouterStateContext:function(){return m},UNSAFE_NavigationContext:function(){return y},UNSAFE_RouteContext:function(){return E},UNSAFE_useRouteId:function(){return F},useHref:function(){return _},useLocation:function(){return w},useNavigate:function(){return C},useResolvedPath:function(){return x}});var n,a,o,i=r("25490"),u=r("95477"),s=r("72554"),c=r("61985"),l=r("52868"),h=r("75485"),d=r("84691"),f=r("35817");function p(){return(p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var v=d.createContext(null),m=d.createContext(null),g=d.createContext(null),y=d.createContext(null),b=d.createContext(null),E=d.createContext({outlet:null,matches:[],isDataRoute:!1}),S=d.createContext(null);function _(e,t){var r=(void 0===t?{}:t).relative;P()||(0,f.UNSAFE_invariant)(!1);var n=d.useContext(y),a=n.basename,o=n.navigator,i=x(e,{relative:r}),u=i.hash,s=i.pathname,c=i.search,l=s;return"/"!==a&&(l="/"===s?a:(0,f.joinPaths)([a,s])),o.createHref({pathname:l,search:c,hash:u})}function P(){return null!=d.useContext(b)}function w(){return P()||(0,f.UNSAFE_invariant)(!1),d.useContext(b).location}function R(e){!d.useContext(y).static&&d.useLayoutEffect(e)}function C(){return d.useContext(E).isDataRoute?function(){var e,t,r=(e=k.UseNavigateStable,(t=d.useContext(v))||(0,f.UNSAFE_invariant)(!1),t).router,n=O(N.UseNavigateStable),a=d.useRef(!1);return R(function(){a.current=!0}),d.useCallback(function(e,t){void 0===t&&(t={}),a.current&&("number"==typeof e?r.navigate(e):r.navigate(e,p({fromRouteId:n},t)))},[r,n])}():function(){P()||(0,f.UNSAFE_invariant)(!1);var e=d.useContext(v),t=d.useContext(y),r=t.basename,n=t.navigator,a=d.useContext(E).matches,o=w().pathname,i=JSON.stringify((0,f.UNSAFE_getPathContributingMatches)(a).map(function(e){return e.pathnameBase})),u=d.useRef(!1);return R(function(){u.current=!0}),d.useCallback(function(t,a){if(void 0===a&&(a={}),u.current){if("number"==typeof t){n.go(t);return}var s=(0,f.resolveTo)(t,JSON.parse(i),o,"path"===a.relative);null==e&&"/"!==r&&(s.pathname="/"===s.pathname?r:(0,f.joinPaths)([r,s.pathname])),(a.replace?n.replace:n.push)(s,a.state,a)}},[r,n,i,o,e])}()}function x(e,t){var r=(void 0===t?{}:t).relative,n=d.useContext(E).matches,a=w().pathname,o=JSON.stringify((0,f.UNSAFE_getPathContributingMatches)(n).map(function(e){return e.pathnameBase}));return d.useMemo(function(){return(0,f.resolveTo)(e,JSON.parse(o),a,"path"===r)},[e,o,a,r])}var U=d.createElement(function(){var e=function(){var e,t,r,n=d.useContext(S);var a=(e=N.UseRouteError,(t=d.useContext(m))||(0,f.UNSAFE_invariant)(!1),t),o=O(N.UseRouteError);return n?n:null==(r=a.errors)?void 0:r[o]}(),t=(0,f.isRouteErrorResponse)(e)?e.status+" "+e.statusText:(0,c._)(e,Error)?e.message:JSON.stringify(e),r=(0,c._)(e,Error)?e.stack:null;return d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),r?d.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},r):null,null)},null),A=function(e){(0,s._)(r,e);var t=(0,h._)(r);function r(e){var n;return(0,i._)(this,r),(n=t.call(this,e)).state={location:e.location,revalidation:e.revalidation,error:e.error},n}return(0,u._)(r,[{key:"componentDidCatch",value:function(e,t){console.error("React Router caught the following error during render",e,t)}},{key:"render",value:function(){return this.state.error?d.createElement(E.Provider,{value:this.props.routeContext},d.createElement(S.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}},{key:"getDerivedStateFromProps",value:function(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}}]),r}(d.Component);function j(e){var t=e.routeContext,r=e.match,n=e.children,a=d.useContext(v);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),d.createElement(E.Provider,{value:t},n)}var k=((n=k||{}).UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n);var N=((a=N||{}).UseBlocker="useBlocker",a.UseLoaderData="useLoaderData",a.UseActionData="useActionData",a.UseRouteError="useRouteError",a.UseNavigation="useNavigation",a.UseRouteLoaderData="useRouteLoaderData",a.UseMatches="useMatches",a.UseRevalidator="useRevalidator",a.UseNavigateStable="useNavigate",a.UseRouteId="useRouteId",a);function O(e){var t,r,n=(t=0,(r=d.useContext(E))||(0,f.UNSAFE_invariant)(!1),r),a=n.matches[n.matches.length-1];return a.route.id||(0,f.UNSAFE_invariant)(!1),a.route.id}function F(){return O(N.UseRouteId)}function L(e){(0,f.UNSAFE_invariant)(!1)}function B(e){var t=e.basename,r=e.children,n=e.location,a=e.navigationType,o=void 0===a?f.Action.Pop:a,i=e.navigator,u=e.static,s=void 0!==u&&u;P()&&(0,f.UNSAFE_invariant)(!1);var c=(void 0===t?"/":t).replace(/^\/*/,"/"),l=d.useMemo(function(){return{basename:c,navigator:i,static:s}},[c,i,s]);"string"==typeof n&&(n=(0,f.parsePath)(n));var h=n.pathname,p=void 0===h?"/":h,v=n.search,m=void 0===v?"":v,g=n.hash,E=void 0===g?"":g,S=n.state,_=void 0===S?null:S,w=n.key,R=void 0===w?"default":w,C=d.useMemo(function(){var e=(0,f.stripBasename)(p,c);return null==e?null:{location:{pathname:e,search:m,hash:E,state:_,key:R},navigationType:o}},[c,p,m,E,_,R,o]);return null==C?null:d.createElement(y.Provider,{value:l},d.createElement(b.Provider,{children:void 0===r?null:r,value:C}))}function D(e){var t,r=e.children,n=e.location;return t=function e(t,r){void 0===r&&(r=[]);var n=[];return d.Children.forEach(t,function(t,a){if(d.isValidElement(t)){var o=(0,l._)(r).concat([a]);if(t.type===d.Fragment){n.push.apply(n,e(t.props.children,o));return}t.type!==L&&(0,f.UNSAFE_invariant)(!1),!t.props.index||!t.props.children||(0,f.UNSAFE_invariant)(!1);var i={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(i.children=e(t.props.children,o)),n.push(i)}}),n}(r),function(e,t,r){P()||(0,f.UNSAFE_invariant)(!1);var n=d.useContext(y).navigator,a=d.useContext(E).matches,o=a[a.length-1],i=o?o.params:{};o&&o.pathname;var u=o?o.pathnameBase:"/";o&&o.route;var s=w();if(t){var c,l,h="string"==typeof t?(0,f.parsePath)(t):t;"/"===u||(null==(l=h.pathname)?void 0:l.startsWith(u))||(0,f.UNSAFE_invariant)(!1),c=h}else c=s;var v=c.pathname||"/",m="/"===u?v:v.slice(u.length)||"/",g=(0,f.matchRoutes)(e,{pathname:m}),S=function(e,t,r){if(void 0===t&&(t=[]),void 0===r&&(r=null),null==e){if(null==(a=r)||!a.errors)return null;e=r.matches}var n,a,o=e,i=null==(n=r)?void 0:n.errors;if(null!=i){var u=o.findIndex(function(e){return e.route.id&&(null==i?void 0:i[e.route.id])});u>=0||(0,f.UNSAFE_invariant)(!1),o=o.slice(0,Math.min(o.length,u+1))}return o.reduceRight(function(e,n,a){var u=n.route.id?null==i?void 0:i[n.route.id]:null,s=null;r&&(s=n.route.errorElement||U);var c=t.concat(o.slice(0,a+1)),l=function(){var t;return t=u?s:n.route.Component?d.createElement(n.route.Component,null):n.route.element?n.route.element:e,d.createElement(j,{match:n,routeContext:{outlet:e,matches:c,isDataRoute:null!=r},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||0===a)?d.createElement(A,{location:r.location,revalidation:r.revalidation,component:s,error:u,children:l(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):l()},null)}(g&&g.map(function(e){return Object.assign({},e,{params:Object.assign({},i,e.params),pathname:(0,f.joinPaths)([u,n.encodeLocation?n.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?u:(0,f.joinPaths)([u,n.encodeLocation?n.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})}),a,r);return t&&S?d.createElement(b.Provider,{value:{location:p({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:f.Action.Pop}},S):S}(t,n)}d.startTransition;var T=((o=T||{})[o.pending=0]="pending",o[o.success=1]="success",o[o.error=2]="error",o),W=new Promise(function(){});!function(e){(0,s._)(r,e);var t=(0,h._)(r);function r(e){var n;return(0,i._)(this,r),(n=t.call(this,e)).state={error:null},n}(0,u._)(r,[{key:"componentDidCatch",value:function(e,t){console.error("<Await> caught the following error during render",e,t)}},{key:"render",value:function(){var e=this.props,t=e.children,r=e.errorElement,n=e.resolve,a=null,o=T.pending;if((0,c._)(n,Promise)){if(this.state.error){o=T.error;var i=this.state.error;Object.defineProperty(a=Promise.reject().catch(function(){}),"_tracked",{get:function(){return!0}}),Object.defineProperty(a,"_error",{get:function(){return i}})}else n._tracked?o=void 0!==(a=n)._error?T.error:void 0!==a._data?T.success:T.pending:(o=T.pending,Object.defineProperty(n,"_tracked",{get:function(){return!0}}),a=n.then(function(e){return Object.defineProperty(n,"_data",{get:function(){return e}})},function(e){return Object.defineProperty(n,"_error",{get:function(){return e}})}))}else o=T.success,Object.defineProperty(a=Promise.resolve(),"_tracked",{get:function(){return!0}}),Object.defineProperty(a,"_data",{get:function(){return n}});if(o===T.error&&(0,c._)(a._error,f.AbortedDeferredError))throw W;if(o===T.error&&!r)throw a._error;if(o===T.error)return d.createElement(g.Provider,{value:a,children:r});if(o===T.success)return d.createElement(g.Provider,{value:a,children:t});throw a}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e}}}])}(d.Component)}}]);