webpackJsonp([7243222379581],{46:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.postFragment=void 0;var s=a(1),u=n(s),i=a(3),f=n(i),c=a(12),d=n(c),p=a(57),m=n(p),h=a(55),y=n(h);a(58);var _=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data,t={title:e.node.frontmatter.title,slug:e.node.fields.slug,description:e.node.frontmatter.description,featuredImage:e.node.frontmatter.featuredImage,date:e.node.frontmatter.date,category:e.node.frontmatter.category,categorySlug:e.node.fields.categorySlug};return u.default.createElement("div",{className:"post"},u.default.createElement("div",{className:"post-inner"},u.default.createElement("h2",{className:"post__title"},u.default.createElement(d.default,{to:t.slug},u.default.createElement("span",{className:"post__title-link"},t.title))),u.default.createElement("div",{className:"post__meta"},u.default.createElement("time",{className:"post__meta-time",dateTime:(0,m.default)(t.date).format("MMMM D, YYYY")},(0,m.default)(t.date).format("MMMM YYYY")),u.default.createElement("span",{className:"post__meta-divider"}),u.default.createElement("span",{className:"post__meta-category",key:t.categorySlug},t.category)),t.featuredImage&&u.default.createElement(d.default,{to:t.slug},u.default.createElement("div",{className:"post__img"},u.default.createElement(y.default,{sizes:t.featuredImage.childImageSharp.sizes,fadeIn:!1}))),u.default.createElement("div",{className:"post__description"},u.default.createElement("p",null,t.description),u.default.createElement("div",{className:"post__readmore"},u.default.createElement(d.default,{className:"post__link",to:t.slug},"→ Weiterlesen")))))},t}(u.default.Component);_.propTypes={data:f.default.object.isRequired},t.default=_;t.postFragment="** extracted graphql fragment **"},58:function(e,t){},234:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=a(1),u=n(s),i=a(3),f=n(i),c=a(46),d=n(c),p=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=[],t=this.props.pathContext.tag,a=this.props.data.allMarkdownRemark.edges;return a.forEach(function(t){e.push(u.default.createElement(d.default,{data:t,key:t.node.fields.slug}))}),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"content__inner"},u.default.createElement("div",{className:"page"},u.default.createElement("h1",{className:"page__title"},t),u.default.createElement("div",{className:"page__body"},e))))},t}(u.default.Component);p.propTypes={data:f.default.shape({allMarkdownRemark:f.default.shape({edges:f.default.array.isRequired})}),pathContext:f.default.shape({tag:f.default.string.isRequired})},t.default=p,e.exports=t.default},243:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(1),u=n(s),i=a(3),f=n(i),c=a(22),d=n(c),p=a(29),m=n(p),h=a(23),y=n(h),_=a(234),g=n(_);a(80);var E=function(e){function t(){return r(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata.title,t=this.props.pathContext.tag;return u.default.createElement("div",{className:"layout"},u.default.createElement("div",{className:"layout__inner"},u.default.createElement(d.default,{title:t+" - "+e}),u.default.createElement(m.default,this.props),u.default.createElement(g.default,this.props),u.default.createElement(y.default,this.props)))},t}(u.default.Component);E.propTypes={data:f.default.shape({site:f.default.shape({siteMetadata:f.default.shape({title:f.default.string.isRequired})})}),pathContext:f.default.shape({tag:f.default.string.isRequired})},t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-tag-template-js-548f70cf157bc5273017.js.map