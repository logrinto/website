webpackJsonp([0xd2a57dc1d883],{88:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(382),options:{plugins:[],trackingId:""}},{plugin:t(384),options:{plugins:[]}},{plugin:t(381),options:{plugins:[]}}]},226:function(e,n,t){"use strict";n.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(349),"component---src-templates-post-template-js":t(357),"component---src-templates-tag-template-js":t(358),"component---src-templates-category-template-js":t(355),"component---src-templates-page-template-js":t(356),"component---src-pages-404-jsx":t(351),"component---src-pages-categories-jsx":t(352),"component---src-pages-index-jsx":t(353),"component---src-pages-tags-jsx":t(354)},n.json={"layout-index.json":t(359),"offline-plugin-app-shell-fallback.json":t(369),"events-web-worknights-hs-2018.json":t(366),"tags-workshop.json":t(378),"tags-event.json":t(374),"tags-meetup.json":t(376),"categories-event.json":t(364),"kontakt.json":t(368),"ueber-uns.json":t(379),"dozierende.json":t(365),"posts-case-study-redesign-etherpad.json":t(371),"tags-case-study.json":t(373),"tags-interface.json":t(375),"tags-typografie.json":t(377),"categories-case-study.json":t(363),"posts-case-study-panel-sbb.json":t(370),"404.json":t(360),"categories.json":t(362),"index.json":t(367),"tags.json":t(372),"404-html.json":t(361)},n.layouts={"layout---index":t(350)}},227:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i=t(1),c=o(i),l=t(2),f=o(l),p=t(152),d=o(p),m=t(65),h=o(m),g=t(88),y=t(565),x=o(y),v=function(e){var n=e.children;return c.default.createElement("div",null,n())},j=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||(!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path)||(0,x.default)(this,e,n)))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(c.default.Component);j.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=j,e.exports=n.default},65:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(457),a=o(r),u=(0,a.default)();e.exports=u},228:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(87),a=t(153),u=o(a),s={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),s[a])return s[a];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return i=e,s[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return i=e,s[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return i=e,s[a]=e,!0}return!1}),i}}},229:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(184),a=o(r),u=t(88),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,a.default)();e.exports=c},361:function(e,n,t){t(4),e.exports=function(e){return t.e(0xa2868bfb69fc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(393)})})}},360:function(e,n,t){t(4),e.exports=function(e){return t.e(0xe70826b53c04,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(394)})})}},363:function(e,n,t){t(4),e.exports=function(e){return t.e(0x632ac06bbb45,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(395)})})}},364:function(e,n,t){t(4),e.exports=function(e){return t.e(0x8a4e00c3dae9,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(396)})})}},362:function(e,n,t){t(4),e.exports=function(e){return t.e(30875753179511,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(397)})})}},365:function(e,n,t){t(4),e.exports=function(e){return t.e(64792757903145,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(398)})})}},366:function(e,n,t){t(4),e.exports=function(e){return t.e(65416418994752,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(399)})})}},367:function(e,n,t){t(4),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(400)})})}},368:function(e,n,t){t(4),e.exports=function(e){return t.e(0xbf8b727cbbbc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(401)})})}},359:function(e,n,t){t(4),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(116)})})}},369:function(e,n,t){t(4),e.exports=function(e){return t.e(0xbf4c176e203a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(402)})})}},370:function(e,n,t){t(4),e.exports=function(e){return t.e(0xcc8f4ecd57f2,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(403)})})}},371:function(e,n,t){t(4),e.exports=function(e){return t.e(0xe1954d3fcbe8,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(404)})})}},373:function(e,n,t){t(4),e.exports=function(e){return t.e(0x7374a632e1d2,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(405)})})}},374:function(e,n,t){t(4),e.exports=function(e){return t.e(0x5e44444d1417,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(406)})})}},375:function(e,n,t){t(4),e.exports=function(e){return t.e(0xa837d35e1712,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(407)})})}},376:function(e,n,t){t(4),e.exports=function(e){return t.e(0x69aa95321410,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(408)})})}},377:function(e,n,t){t(4),e.exports=function(e){return t.e(57784555453754,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(409)})})}},378:function(e,n,t){t(4),e.exports=function(e){return t.e(31611317048907,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(410)})})}},372:function(e,n,t){t(4),e.exports=function(e){return t.e(55702396619907,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(411)})})}},379:function(e,n,t){t(4),e.exports=function(e){return t.e(0xaabad6508677,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(412)})})}},350:function(e,n,t){t(4),e.exports=function(e){return t.e(79611799117203,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(230)})})}},152:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(1),a=(o(r),t(228)),u=o(a),s=t(65),i=o(s),c=t(153),l=o(c),f=void 0,p={},d={},m={},h={},g={},y=[],x=[],v={},j="",R=[],b={},w=function(e){return e&&e.default||e},k=void 0,C=!0,N=[],_={},P={},E=5;k=t(231)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(e){T(e,function(){R=R.filter(function(n){return n!==e}),k.onResourcedFinished(e)})}}),i.default.on("onPreLoadPageResources",function(e){k.onPreLoadPageResources(e)}),i.default.on("onPostLoadPageResources",function(e){k.onPostLoadPageResources(e)});var L=function(e,n){return b[e]>b[n]?1:b[e]<b[n]?-1:0},O=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},T=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){h[n]=o,N.push({resource:n,succeeded:!e}),P[n]||(P[n]=e),N=N.slice(-E),t(e,o)})}},S=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):P[n]?e.nextTick(function(){t(P[n])}):T(n,function(e,o){if(e)t(e);else{var r=w(o());g[n]=r,t(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=N.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),_[e]||(_[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},M=1,U={empty:function(){x=[],v={},b={},R=[],y=[],j=""},addPagesArray:function(e){y=e,j="",f=(0,u.default)(e,j)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return x.pop()},enqueue:function(e){var n=(0,l.default)(e,j);if(!y.some(function(e){return e.path===n}))return!1;var t=1/M;M+=1,v[n]?v[n]+=1:v[n]=1,U.has(n)||x.unshift(n),x.sort(O);var o=f(n);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+t:b[o.jsonName]=1+t,R.indexOf(o.jsonName)!==-1||h[o.jsonName]||R.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+t:b[o.componentChunkName]=1+t,R.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||R.unshift(o.componentChunkName)),R.sort(L),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:b}},getPages:function(){return{pathArray:x,pathCount:v}},getPage:function(e){return f(e)},has:function(e){return x.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),C=!1;if(_[n])return D(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return D(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),i.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];i.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,s=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),i.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=n,s()}),S(o.jsonName,function(e,n){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=n,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=n,s()}))},peek:function(e){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(e){return x.length-x.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:U.getResourcesForPathname};n.default=U}).call(n,t(132))},413:function(e,n){e.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"events-web-worknights-hs-2018.json",path:"/events/web-worknights-hs-2018/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-workshop.json",path:"/tags/workshop/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-event.json",path:"/tags/event/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-meetup.json",path:"/tags/meetup/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-event.json",path:"/categories/event/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"kontakt.json",path:"/kontakt"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"ueber-uns.json",path:"/ueber-uns"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"dozierende.json",path:"/dozierende"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-case-study-redesign-etherpad.json",path:"/posts/case-study-redesign-etherpad/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-case-study.json",path:"/tags/case-study/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-interface.json",path:"/tags/interface/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-typografie.json",path:"/tags/typografie/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-case-study.json",path:"/categories/case-study/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-case-study-panel-sbb.json",path:"/posts/case-study-panel-sbb/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},231:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(88),u=t(1),s=o(u),i=t(191),c=o(i),l=t(87),f=t(388),p=t(334),d=o(p),m=t(21),h=t(229),g=o(h),y=t(65),x=o(y),v=t(413),j=o(v),R=t(414),b=o(R),w=t(227),k=o(w),C=t(226),N=o(C),_=t(152),P=o(_);t(256),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(j.default),P.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=b.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),L=function(e){var n=E[e];return null!=n&&(g.default.replace(n.toPath),!0)};L(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&i!==!1||(window.___history=e,i=!0,e.listen(function(e,n){L(e.pathname)||setTimeout(function(){(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})},0)}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(232);var o=function(e,n){function t(e){e.page.path===P.default.getPage(r).path&&(x.default.off("onPostLoadPageResources",t),clearTimeout(i),s(o))}var o=(0,m.createLocation)(e,null,null,g.default.location),r=o.pathname,a=E[r];a&&(r=a.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var s=n?window.___history.replace:window.___history.push,i=setTimeout(function(){x.default.off("onPostLoadPageResources",t),x.default.emit("onDelayedLoadPageResources",{pathname:r}),s(o)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(i),s(o)):x.default.on("onPostLoadPageResources",t)}};window.___push=function(e){return o(e,!1)},window.___replace=function(e){return o(e,!0)},window.___navigateTo=window.___push,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(e){var n=e.children;return s.default.createElement(l.Router,{history:g.default},n)},y=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:h,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(y,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(k.default,r({page:!0},o)):(0,u.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0],i=(0,a.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,d.default)(function(){return i(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},414:function(e,n){e.exports=[]},232:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(65),a=o(r),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},153:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},334:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},4:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var s=!1,i=!0,c=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void c(!0):(r(o,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,e(function(){s||(s=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),c(!0))}))))}}o()},380:function(e,n,t){"use strict";var o=t(12);e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var t=null,r=e.target;r.parentNode;r=r.parentNode)if("A"===r.nodeName){t=r;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var a=document.createElement("a");a.href=t.href;var u=document.createElement("a");if(u.href=window.location.href,a.host!==u.host)return!0;var s=new RegExp("^"+u.host+(0,o.withPrefix)("/"));return!s.test(""+a.host+a.pathname)||(e.preventDefault(),n(t.getAttribute("href")),!1)})}},381:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(12),a=t(380),u=o(a);n.onClientEntry=function(){(0,u.default)(window,function(e){(0,r.navigateTo)(e)})}},382:function(e,n,t){"use strict";n.onRouteUpdate=function(e){var n=e.location;if("function"==typeof ga){if(n&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(e){return e.test(n.pathname)}))return;window.ga("set","page",n?n.pathname+n.search+n.hash:void 0),window.ga("send","pageview")}}},349:function(e,n,t){t(4),e.exports=function(e){return t.e(99219681209289,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(383)})})}},384:function(e,n){"use strict";n.registerServiceWorker=function(){return!0}},457:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},132:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var e=r(u);h=!0;for(var n=m.length;n;){for(d=m,m=[];++g<n;)d&&d[g].run();g=-1,n=m.length}d=null,h=!1,a(e)}}function i(e,n){this.fun=e,this.array=n}function c(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,m=[],h=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new i(e,n)),1!==m.length||h||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},565:function(e,n){"use strict";function t(e,n){for(var t in e)if(!(t in n))return!0;for(var o in n)if(e[o]!==n[o])return!0;return!1}n.__esModule=!0,n.default=function(e,n,o){return t(e.props,n)||t(e.state,o)},e.exports=n.default},351:function(e,n,t){t(4),e.exports=function(e){return t.e(0xa6bc690a59e9,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(241)})})}},352:function(e,n,t){t(4),e.exports=function(e){return t.e(0x81a450a7cd7a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(242)})})}},353:function(e,n,t){t(4),e.exports=function(e){return t.e(0xc23565d713b7,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(243)})})}},354:function(e,n,t){t(4),e.exports=function(e){return t.e(36530248567819,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(244)})})}},355:function(e,n,t){t(4),e.exports=function(e){return t.e(78839606078735,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(245)})})}},356:function(e,n,t){t(4),e.exports=function(e){return t.e(0xd5d9d741ef0b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(246)})})}},357:function(e,n,t){t(4),e.exports=function(e){return t.e(0xb48ce3051dcc,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(247)})})}},358:function(e,n,t){t(4),e.exports=function(e){return t.e(7243222379581,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(248)})})}}});
//# sourceMappingURL=app-831b73a16f0f0cf14573.js.map