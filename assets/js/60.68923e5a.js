(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{220:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"各种异常收集以及解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#各种异常收集以及解决方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 各种异常收集以及解决方法")]),t._v(" "),a("h2",{attrs:{id:"常见异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见异常")]),t._v(" "),a("ul",[a("li",[t._v("Uncaught SyntaxError: Unexpected token <\n"),a("ul",[a("li",[t._v("此异常通常是由于加载静态资源失败引起的，或者页面上的js错误，比如function未定义等导致错误提示指向第一行。")]),t._v(" "),a("li",[t._v("也就是说解析当前内容的时候，内容解析失败，所以一般都指向第一行，而html文档开头一般都是"),a("code",[t._v("<")])]),t._v(" "),a("li",[t._v("示例\n"),a("ul",[a("li",[t._v("基于vue的一个项目，添加某个js引用，由于找不到该js，返回了当前页面的html内容，解析的时候html文本就被当成js来解析，所以第一行就报错了")])])])])])]),t._v(" "),a("h2",{attrs:{id:"诡异的异常"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#诡异的异常","aria-hidden":"true"}},[t._v("#")]),t._v(" 诡异的异常")]),t._v(" "),a("h3",{attrs:{id:"cannot-assign-to-read-only-property-exports-of-object"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cannot-assign-to-read-only-property-exports-of-object","aria-hidden":"true"}},[t._v("#")]),t._v(" Cannot assign to read only property 'exports' of object")]),t._v(" "),a("ul",[a("li",[t._v("常见的情况是"),a("code",[t._v("import")]),t._v("和"),a("code",[t._v("module.exports")]),t._v("混用，改成"),a("code",[t._v("export default")]),t._v("就好。")]),t._v(" "),a("li",[t._v("另一种奇葩的情况是，没有用"),a("code",[t._v("import")]),t._v("，用"),a("code",[t._v("module.exports")]),t._v("也会报这个错，经排查发现是使用了"),a("code",[t._v("typeof")]),t._v("，让人郁闷。也只能将"),a("code",[t._v("module.exports")]),t._v("改成"),a("code",[t._v("export")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isObj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token boolean"}},[t._v("true")]),a("span",{attrs:{class:"token comment"}},[t._v("//typeof obj === 'object'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("23333")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmodule"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj\n")])])]),a("p",[t._v("改成")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" isObj "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" obj "),a("span",{attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'object'")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("isObj"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    obj"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("test "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("23333")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" obj\n")])])])])}],!1,null,null,null);s.default=e.exports}}]);