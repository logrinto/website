webpackJsonp([0xc23565d713b7],{46:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.postFragment=void 0;var s=a(2),u=n(s),i=a(3),d=n(i),c=a(12),f=n(c),p=a(57),m=n(p),y=a(55),_=n(y);a(58);var g=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data,t={title:e.node.frontmatter.title,slug:e.node.fields.slug,description:e.node.frontmatter.description,featuredImage:e.node.frontmatter.featuredImage,date:e.node.frontmatter.date,category:e.node.frontmatter.category,categorySlug:e.node.fields.categorySlug};return u.default.createElement("div",{className:"post"},u.default.createElement("div",{className:"post-inner"},u.default.createElement("h2",{className:"post__title"},u.default.createElement(f.default,{to:t.slug},u.default.createElement("span",{className:"post__title-link"},t.title))),u.default.createElement("div",{className:"post__meta"},u.default.createElement("time",{className:"post__meta-time",dateTime:(0,m.default)(t.date).format("MMMM D, YYYY")},(0,m.default)(t.date).format("MMMM YYYY")),u.default.createElement("span",{className:"post__meta-divider"}),u.default.createElement("span",{className:"post__meta-category",key:t.categorySlug},t.category)),t.featuredImage&&u.default.createElement(f.default,{to:t.slug},u.default.createElement("div",{className:"post__img"},u.default.createElement(_.default,{sizes:t.featuredImage.childImageSharp.sizes,fadeIn:!1}))),u.default.createElement("div",{className:"post__description"},u.default.createElement("p",null,t.description),u.default.createElement("div",{className:"post__readmore"},u.default.createElement(f.default,{className:"post__link",to:t.slug},"→ Weiterlesen")))))},t}(u.default.Component);g.propTypes={data:d.default.object.isRequired},t.default=g;t.postFragment="** extracted graphql fragment **"},58:function(e,t){},238:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.pageQuery=void 0;var s=a(2),u=n(s),i=a(3),d=n(i),c=a(22),f=n(c),p=a(46),m=n(p),y=a(29),_=n(y),g=a(23),h=n(g),E=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return o(t,e),t.prototype.render=function(){var e=this.props.data.site.siteMetadata,t=e.title,a=e.subtitle,n=this.props.data.firstPost.edges,r=this.props.data.allMarkdownRemark.edges;return u.default.createElement("div",{className:"layout"},u.default.createElement("div",{className:"layout__inner"},u.default.createElement(f.default,null,u.default.createElement("title",null,t),u.default.createElement("meta",{name:"description",content:a})),u.default.createElement(_.default,this.props),u.default.createElement("div",{className:"content-first"},u.default.createElement("div",{className:"content-first-inner"},u.default.createElement(m.default,{data:n[0]}))),u.default.createElement("div",{className:"content"},u.default.createElement("div",{className:"content-inner"},r.map(function(e){return u.default.createElement(m.default,{data:e,key:e.node.fields.slug})}))),u.default.createElement(h.default,this.props)))},t}(u.default.Component);E.propTypes={data:d.default.shape({site:d.default.shape({siteMetadata:d.default.shape({title:d.default.string.isRequired,subtitle:d.default.string.isRequired})}),allMarkdownRemark:d.default.shape({edges:d.default.array.isRequired})})},t.default=E;t.pageQuery="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-pages-index-jsx-5c2d77b1dabf0b07e341.js.map