webpackJsonp([0xd5d9d741ef0b],{88:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),u=n(i),s=a(3),c=n(s),f=a(12);a(129);var p=function(e){function t(){var a,n,l;r(this,t);for(var i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return a=n=o(this,e.call.apply(e,[this].concat(s))),n.onItemClick=function(){(0,f.navigateTo)("/")},n.render=function(){var e=n,t=e.onItemClick;return u.default.createElement("div",{className:"navigation"},u.default.createElement("div",{className:"navigation__inner"},u.default.createElement("button",{onClick:t,className:"navigation__toggle","aria-controls":"site-navigation","aria-expanded":"true","aria-label":"Menu"},u.default.createElement("span",{className:"navigation__hamburger back"},u.default.createElement("span",{className:"navigation__label"},"Home")))))},l=a,o(n,l)}return l(t,e),t}(u.default.Component);p.propTypes={data:c.default.shape({site:c.default.shape({siteMetadata:c.default.shape({menu:c.default.array.isRequired})})})},t.default=p,e.exports=t.default},231:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=a(1),u=n(i),s=a(3),c=n(s);a(482);var f=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark;return u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"content__inner"},u.default.createElement("div",{className:"page"},u.default.createElement("h1",{className:"page__title"},e.frontmatter.title),u.default.createElement("div",{className:"page__body",dangerouslySetInnerHTML:{__html:e.html}}))))},t}(u.default.Component);f.propTypes={data:c.default.shape({markdownRemark:c.default.object.isRequired})},t.default=f,e.exports=t.default},482:function(e,t){},241:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var i=a(1),u=n(i),s=a(3),c=n(s),f=a(22),p=n(f),d=a(88),m=n(d),h=a(23),y=n(h),b=a(231),_=n(b);a(80);var v=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,a=e.subtitle,n=this.props.data.markdownRemark,r=void 0;return r=null!==n.frontmatter.description?n.frontmatter.description:a,u.default.createElement("div",{className:"layout"},u.default.createElement("div",{className:"layout__inner"},u.default.createElement(p.default,null,u.default.createElement("title",null,n.frontmatter.title+" - "+t),u.default.createElement("meta",{name:"description",content:r})),u.default.createElement(m.default,null),u.default.createElement(_.default,this.props),u.default.createElement(y.default,this.props)))},t}(u.default.Component);v.propTypes={data:c.default.shape({site:c.default.shape({siteMetadata:c.default.shape({title:c.default.string.isRequired,subtitle:c.default.string.isRequired})}),markdownRemark:c.default.object.isRequired})},t.default=v;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-page-template-js-e8163ee780cab4142922.js.map