webpackJsonp([0xd2a57dc1d883],{87:function(n,e,t){"use strict";function o(n,e,t){var o=r.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function a(n,e,t){return r.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=a;var r=[{plugin:t(395),options:{plugins:[],trackingId:""}},{plugin:t(397),options:{plugins:[]}},{plugin:t(394),options:{plugins:[]}}]},221:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(343),"component---src-templates-post-template-js":t(351),"component---src-templates-tag-template-js":t(352),"component---src-templates-category-template-js":t(349),"component---src-templates-page-template-js":t(350),"component---src-pages-404-jsx":t(345),"component---src-pages-categories-jsx":t(346),"component---src-pages-index-jsx":t(347),"component---src-pages-tags-jsx":t(348)},e.json={"layout-index.json":t(353),"offline-plugin-app-shell-fallback.json":t(365),"events-web-worknights-hs-2018.json":t(362),"tags-workshop.json":t(391),"tags-event.json":t(380),"tags-meetup.json":t(383),"categories-event.json":t(358),"posts-tools.json":t(372),"tags-responsive-gestaltung.json":t(386),"tags-typografie.json":t(388),"tags-tools.json":t(387),"categories-responsive-gestaltung.json":t(359),"posts-typoartboard.json":t(373),"tags-responsive-design.json":t(385),"posts-em.json":t(370),"tags-em.json":t(379),"tags-rem.json":t(384),"tags-dynamisch.json":t(378),"tags-masseinheit.json":t(382),"kontakt.json":t(364),"ueber-uns.json":t(392),"dozierende.json":t(360),"en-posts-case-study-redesign-etherpad.json":t(361),"tags-case-study.json":t(377),"tags-interface.json":t(381),"categories-case-study.json":t(357),"posts-case-study-redesign-etherpad.json":t(368),"posts-case-study-smide.json":t(369),"tags-wearable.json":t(390),"posts-case-study-interface-the-kitchen.json":t(366),"posts-viewport-einheiten.json":t(374),"tags-viewport-einheiten.json":t(389),"posts-tests.json":t(371),"tags-blabla.json":t(376),"posts-case-study-panel-sbb.json":t(367),"404.json":t(354),"categories.json":t(356),"index.json":t(363),"tags.json":t(375),"404-html.json":t(355)},e.layouts={"layout---index":t(344)}},222:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},c=t(2),i=o(c),l=t(3),p=o(l),f=t(150),d=o(f),m=t(64),h=o(m),g=t(87),y=t(601),x=o(y),j=function(n){var e=n.children;return i.default.createElement("div",null,e())},v=function(n){function e(t){a(this,e);var o=r(this,n.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=s({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,x.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,c.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(i.default.Component);v.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=v,n.exports=e.default},64:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(490),r=o(a),u=(0,r.default)();n.exports=u},223:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(86),r=t(151),u=o(r),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),r=(0,u.default)(o,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var c=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return c=n,s[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return c=n,s[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return c=n,s[r]=n,!0}return!1}),c}}},224:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(403),r=o(a),u=t(87),s=(0,u.apiRunner)("replaceHistory"),c=s[0],i=c||(0,r.default)();n.exports=i},355:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(407)})})}},354:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(408)})})}},357:function(n,e,t){t(1),n.exports=function(n){return t.e(0x632ac06bbb45,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(409)})})}},358:function(n,e,t){t(1),n.exports=function(n){return t.e(0x8a4e00c3dae9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(410)})})}},359:function(n,e,t){t(1),n.exports=function(n){return t.e(26457266318686,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(411)})})}},356:function(n,e,t){t(1),n.exports=function(n){return t.e(30875753179511,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(412)})})}},360:function(n,e,t){t(1),n.exports=function(n){return t.e(64792757903145,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(413)})})}},361:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe099a3f76013,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},362:function(n,e,t){t(1),n.exports=function(n){return t.e(65416418994752,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(415)})})}},363:function(n,e,t){t(1),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(416)})})}},364:function(n,e,t){t(1),n.exports=function(n){return t.e(0xbf8b727cbbbc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(417)})})}},353:function(n,e,t){t(1),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(114)})})}},365:function(n,e,t){t(1),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(418)})})}},366:function(n,e,t){t(1),n.exports=function(n){return t.e(0xfcdc59386a20,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(419)})})}},367:function(n,e,t){t(1),n.exports=function(n){return t.e(0xcc8f4ecd57f2,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(420)})})}},368:function(n,e,t){t(1),n.exports=function(n){return t.e(0xe1954d3fcbe8,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(421)})})}},369:function(n,e,t){t(1),n.exports=function(n){return t.e(3142506064086,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(422)})})}},370:function(n,e,t){t(1),n.exports=function(n){return t.e(0xeb1a01c633be,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(423)})})}},371:function(n,e,t){t(1),n.exports=function(n){return t.e(0xbb3aee362f40,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(424)})})}},372:function(n,e,t){t(1),n.exports=function(n){return t.e(0xc75882afc80a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(425)})})}},373:function(n,e,t){t(1),n.exports=function(n){return t.e(0x6ad0fc7c39cd,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(426)})})}},374:function(n,e,t){t(1),n.exports=function(n){return t.e(67985692020321,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(427)})})}},376:function(n,e,t){t(1),n.exports=function(n){return t.e(28681805765427,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(428)})})}},377:function(n,e,t){t(1),n.exports=function(n){return t.e(0x7374a632e1d2,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(429)})})}},378:function(n,e,t){t(1),n.exports=function(n){return t.e(0x5e7034abf895,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(430)})})}},379:function(n,e,t){t(1),n.exports=function(n){return t.e(76785083926873,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(431)})})}},380:function(n,e,t){t(1),n.exports=function(n){return t.e(0x5e44444d1417,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(432)})})}},381:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa837d35e1712,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(433)})})}},382:function(n,e,t){t(1),n.exports=function(n){return t.e(0xb96c2d81f5f6,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(434)})})}},383:function(n,e,t){t(1),n.exports=function(n){return t.e(0x69aa95321410,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(435)})})}},384:function(n,e,t){t(1),n.exports=function(n){return t.e(47227157009855,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(436)})})}},385:function(n,e,t){t(1),n.exports=function(n){return t.e(0xdac991e2619e,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(437)})})}},386:function(n,e,t){t(1),n.exports=function(n){return t.e(5715777293023,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(438)})})}},387:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa36a794a7633,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(439)})})}},388:function(n,e,t){t(1),n.exports=function(n){return t.e(57784555453754,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(440)})})}},389:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa3fba343ce65,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(441)})})}},390:function(n,e,t){t(1),n.exports=function(n){return t.e(0xd57e78f58978,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(442)})})}},391:function(n,e,t){t(1),n.exports=function(n){return t.e(31611317048907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(443)})})}},375:function(n,e,t){t(1),n.exports=function(n){return t.e(55702396619907,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(444)})})}},392:function(n,e,t){t(1),n.exports=function(n){return t.e(0xaabad6508677,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(445)})})}},344:function(n,e,t){t(1),n.exports=function(n){return t.e(79611799117203,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(225)})})}},150:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=t(2),r=(o(a),t(223)),u=o(r),s=t(64),c=o(s),i=t(151),l=o(i),p=void 0,f={},d={},m={},h={},g={},y=[],x=[],j={},v="",N=[],C={},b=function(n){return n&&n.default||n},k=void 0,w=!0,R=[],_={},P={},E=5;k=t(226)({getNextQueuedResources:function(){return N.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){N=N.filter(function(e){return e!==n}),k.onResourcedFinished(n)})}}),c.default.on("onPreLoadPageResources",function(n){k.onPreLoadPageResources(n)}),c.default.on("onPostLoadPageResources",function(n){k.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},T=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){t(null,h[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){h[e]=o,R.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),R=R.slice(-E),t(n,o)})}},S=function(e,t){g[e]?n.nextTick(function(){t(null,g[e])}):P[e]?n.nextTick(function(){t(P[e])}):L(e,function(n,o){if(n)t(n);else{var a=b(o());g[e]=a,t(n,a)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=R.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},F=1,M={empty:function(){x=[],j={},C={},N=[],y=[],v=""},addPagesArray:function(n){y=n,v="",p=(0,u.default)(n,v)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return x.pop()},enqueue:function(n){var e=(0,l.default)(n,v);if(!y.some(function(n){return n.path===e}))return!1;var t=1/F;F+=1,j[e]?j[e]+=1:j[e]=1,M.has(e)||x.unshift(e),x.sort(T);var o=p(e);return o.jsonName&&(C[o.jsonName]?C[o.jsonName]+=1+t:C[o.jsonName]=1+t,N.indexOf(o.jsonName)!==-1||h[o.jsonName]||N.unshift(o.jsonName)),o.componentChunkName&&(C[o.componentChunkName]?C[o.componentChunkName]+=1+t:C[o.componentChunkName]=1+t,N.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||N.unshift(o.componentChunkName)),N.sort(O),k.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:N,resourcesCount:C}},getPages:function(){return{pathArray:x,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return x.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var a;if(t){if(o>=e.length)break;a=e[o++]}else{if(o=e.next(),o.done)break;a=o.value}var r=a;r.unregister()}window.location.reload()}})),w=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=p(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];c.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!o.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:o};var n={component:a,json:r,layout:u,page:o};t(n),c.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),a=e,s()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),r=e,s()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=e,s()}))},peek:function(n){return x.slice(-1)[0]},length:function(){return x.length},indexOf:function(n){return x.length-x.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:M.getResourcesForPathname};e.default=M}).call(e,t(130))},446:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"events-web-worknights-hs-2018.json",path:"/events/web-worknights-hs-2018/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-workshop.json",path:"/tags/workshop/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-event.json",path:"/tags/event/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-meetup.json",path:"/tags/meetup/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-event.json",path:"/categories/event/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-tools.json",path:"/posts/tools/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-responsive-gestaltung.json",path:"/tags/responsive-gestaltung/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-typografie.json",path:"/tags/typografie/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-tools.json",path:"/tags/tools/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-responsive-gestaltung.json",path:"/categories/responsive-gestaltung/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-typoartboard.json",path:"/posts/typoartboard/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-responsive-design.json",path:"/tags/responsive-design/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-em.json",path:"/posts/em/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-em.json",path:"/tags/em/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-rem.json",path:"/tags/rem/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-dynamisch.json",path:"/tags/dynamisch/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-masseinheit.json",path:"/tags/masseinheit/"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"kontakt.json",path:"/kontakt"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"ueber-uns.json",path:"/ueber-uns"},{componentChunkName:"component---src-templates-page-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"dozierende.json",path:"/dozierende"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"en-posts-case-study-redesign-etherpad.json",path:"/en/posts/case-study-redesign-etherpad/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-case-study.json",path:"/tags/case-study/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-interface.json",path:"/tags/interface/"},{componentChunkName:"component---src-templates-category-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories-case-study.json",path:"/categories/case-study/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-case-study-redesign-etherpad.json",path:"/posts/case-study-redesign-etherpad/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-case-study-smide.json",path:"/posts/case-study-smide/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-wearable.json",path:"/tags/wearable/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-case-study-interface-the-kitchen.json",path:"/posts/case-study-interface-the-kitchen/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-viewport-einheiten.json",path:"/posts/Viewport-Einheiten/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-viewport-einheiten.json",path:"/tags/viewport-einheiten/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-tests.json",path:"/posts/tests/"},{componentChunkName:"component---src-templates-tag-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags-blabla.json",path:"/tags/blabla/"},{componentChunkName:"component---src-templates-post-template-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"posts-case-study-panel-sbb.json",path:"/posts/case-study-panel-sbb/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-categories-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"categories.json",path:"/categories/"},{componentChunkName:"component---src-pages-index-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-tags-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"tags.json",path:"/tags/"},{componentChunkName:"component---src-pages-404-jsx",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-jsx",jsonName:"404-html.json",path:"/404.html"}]},226:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],a=[],r=function(){var n=e();n&&(a.push(n),t(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===o.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:a}},empty:function(){o=[],a=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r=t(87),u=t(2),s=o(u),c=t(186),i=o(c),l=t(86),p=t(401),f=t(327),d=o(f),m=t(17),h=t(224),g=o(h),y=t(64),x=o(y),j=t(446),v=o(j),N=t(447),C=o(N),b=t(222),k=o(b),w=t(221),R=o(w),_=t(150),P=o(_);t(251),window.___history=g.default,window.___emitter=x.default,P.default.addPagesArray(v.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&c!==!1||(window.___history=n,c=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var a=n.location.pathname;if(a===t)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&t(227);var o=function(n,e){function t(n){n.page.path===P.default.getPage(a).path&&(x.default.off("onPostLoadPageResources",t),clearTimeout(c),s(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),a=o.pathname,r=E[a];r&&(a=r.toPath);var u=window.location;if(u.pathname!==o.pathname||u.search!==o.search||u.hash!==o.hash){var s=e?window.___history.replace:window.___history.push,c=setTimeout(function(){x.default.off("onPostLoadPageResources",t),x.default.emit("onDelayedLoadPageResources",{pathname:a}),s(o)},1e3);P.default.getResourcesForPathname(a)?(clearTimeout(c),s(o)):x.default.on("onPostLoadPageResources",t)}};window.___push=function(n){return o(n,!1)},window.___replace=function(n){return o(n,!0)},window.___navigateTo=window.___push,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=!1,f=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(k.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,u.createElement)(k.default,a({page:!0},o)):(0,u.createElement)(k.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,r.apiRunner)("wrapRootComponent",{Root:t},t)[0],c=(0,r.apiRunner)("replaceHydrateFunction",void 0,i.default.render)[0];(0,d.default)(function(){return c(s.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},447:function(n,e){n.exports=[]},227:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(64),r=o(a),u="/";u="/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},151:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},45:function(n,e){function t(n){return n&&n.__esModule?n:{default:n}}n.exports=t},327:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,a="DOMContentLoaded",r=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return r||t.addEventListener(a,n=function(){for(t.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},328:function(n,e){"use strict";var t=/[|\\{}()[\]^$+*?.]/g;n.exports=function(n){if("string"!=typeof n)throw new TypeError("Expected a string");return n.replace(t,"\\$&")}},1:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),a=t.e,r=t.s;t.e=function(o,u){var s=!1,c=!0,i=function(n){
u&&(u(t,n),u=null)};return!r&&e&&e[o]?void i(!0):(a(o,function(){s||(s=!0,c?setTimeout(function(){i()}):i())}),void(s||(c=!1,n(function(){s||(s=!0,r?r[o]=void 0:(e||(e={}),e[o]=!0),i(!0))}))))}}o()},393:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.routeThroughBrowserOrApp=e.hashShouldBeFollowed=e.pathIsNotHandledByApp=e.urlsAreOnSameOrigin=e.authorIsForcingNavigation=e.anchorsTargetIsEquivalentToSelf=e.findClosestAnchor=e.navigationWasHandledElsewhere=e.slashedPathname=e.userIsForcingNavigation=void 0,e.default=function(n,e){var t=g(e);return n.addEventListener("click",t),function(){return n.removeEventListener("click",t)}};var a=t(328),r=o(a),u=t(12),s=e.userIsForcingNavigation=function(n){return 0!==n.button||n.altKey||n.ctrlKey||n.metaKey||n.shiftKey},c=e.slashedPathname=function(n){return"/"===n[0]?n:"/"+n},i=e.navigationWasHandledElsewhere=function(n){return n.defaultPrevented},l=e.findClosestAnchor=function(n){for(;n.parentNode;n=n.parentNode)if("a"===n.nodeName.toLowerCase())return n;return null},p=e.anchorsTargetIsEquivalentToSelf=function(n){return n.hasAttribute("target")===!1||null==n.target||["_self",""].indexOf(n.target)!==-1||"_parent"===n.target&&(!n.ownerDocument.defaultView.parent||n.ownerDocument.defaultView.parent===n.ownerDocument.defaultView)||"_top"===n.target&&(!n.ownerDocument.defaultView.top||n.ownerDocument.defaultView.top===n.ownerDocument.defaultView)},f=e.authorIsForcingNavigation=function(n){return n.hasAttribute("download")===!0||p(n)===!1},d=e.urlsAreOnSameOrigin=function(n,e){return n.protocol===e.protocol&&n.host===e.host},m=e.pathIsNotHandledByApp=function(n){var e=new RegExp("^"+(0,r.default)((0,u.withPrefix)("/"))),t=/^.*\.((?!htm)[a-z0-9]{1,5})$/i;return e.test(c(n.pathname))===!1||n.pathname.search(t)!==-1},h=e.hashShouldBeFollowed=function(n,e){return""!==e.hash&&(""===e.pathname||e.pathname===n.pathname)},g=e.routeThroughBrowserOrApp=function(n){return function(e){if(s(e))return!0;if(i(e))return!0;var t=l(e.target);if(null==t)return!0;if(f(t))return!0;var o=document.createElement("a");o.href=t.href;var a=document.createElement("a");return a.href=window.location.href,d(a,o)===!1||(!!m(o)||(!!h(a,o)||(e.preventDefault(),n(""+c(o.pathname)+o.search+o.hash),!1)))}}},394:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var a=t(12),r=t(393),u=o(r);e.onClientEntry=function(){(0,u.default)(window,function(n){(0,a.navigateTo)(n)})}},395:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},343:function(n,e,t){t(1),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(396)})})}},397:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},490:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},130:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function r(n){if(p===clearTimeout)return clearTimeout(n);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&s())}function s(){if(!h){var n=a(u);h=!0;for(var e=m.length;e;){for(d=m,m=[];++g<e;)d&&d[g].run();g=-1,e=m.length}d=null,h=!1,r(n)}}function c(n,e){this.fun=n,this.array=e}function i(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(n){p=o}}();var d,m=[],h=!1,g=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new c(n,e)),1!==m.length||h||a(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=i,f.addListener=i,f.once=i,f.off=i,f.removeListener=i,f.removeAllListeners=i,f.emit=i,f.prependListener=i,f.prependOnceListener=i,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},601:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},345:function(n,e,t){t(1),n.exports=function(n){return t.e(0xa6bc690a59e9,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(236)})})}},346:function(n,e,t){t(1),n.exports=function(n){return t.e(0x81a450a7cd7a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(237)})})}},347:function(n,e,t){t(1),n.exports=function(n){return t.e(0xc23565d713b7,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(238)})})}},348:function(n,e,t){t(1),n.exports=function(n){return t.e(36530248567819,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(239)})})}},349:function(n,e,t){t(1),n.exports=function(n){return t.e(78839606078735,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(240)})})}},350:function(n,e,t){t(1),n.exports=function(n){return t.e(0xd5d9d741ef0b,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(241)})})}},351:function(n,e,t){t(1),n.exports=function(n){return t.e(0xb48ce3051dcc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(242)})})}},352:function(n,e,t){t(1),n.exports=function(n){return t.e(7243222379581,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(243)})})}}});
//# sourceMappingURL=app-7fd7992c2e7d00a939a7.js.map