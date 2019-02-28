(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{198:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("ul",[n("li",[t._v("node.js\n"),n("ul",[t._m(2),t._v(" "),n("li",[t._v("安装"),n("a",{attrs:{href:"https://chocolatey.org/install",target:"_blank",rel:"noopener noreferrer"}},[t._v("chocolatey"),n("OutboundLink")],1)])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._v(" "),n("ul",[t._m(6),t._v(" "),t._m(7),t._v(" "),n("li",[t._v("运行\n"),n("ul",[t._m(8),t._v(" "),n("li",[t._v("完成之后访问"),n("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://localhost:8080"),n("OutboundLink")],1)])])])]),t._v(" "),t._m(9),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://webpack.docschina.org/concepts/loaders/",target:"_blank",rel:"noopener noreferrer"}},[t._v("loader文档"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("通过加载器配置，告诉webpack打包的时候如何处理某个文件")]),t._v(" "),t._m(10)]),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._m(22)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"搭建一个简易的vue项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搭建一个简易的vue项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 搭建一个简易的vue项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境搭建")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("使用chocolatey安装"),s("code",[this._v("choco install nodejs")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("webpack\n"),s("ul",[s("li",[s("code",[this._v("npm install webpack -g")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("vue-cli脚手架\n"),s("ul",[s("li",[s("code",[this._v("npm install vue-cli -g")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"初始化项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化项目","aria-hidden":"true"}},[this._v("#")]),this._v(" 初始化项目")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("vue-cli构建\n"),s("ul",[s("li",[s("code",[this._v("vue init webpack project")])]),this._v(" "),s("li",[this._v("安装提示输入即可")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("安装依赖\n"),s("ul",[s("li",[s("code",[this._v("npm install")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[s("code",[this._v("npm run dev")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"添加loader"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加loader","aria-hidden":"true"}},[this._v("#")]),this._v(" 添加loader")])},function(){var t=this.$createElement,s=this._self._c||t;return s("li",[this._v("比如加载css\n"),s("ul",[s("li",[this._v("安装加载器"),s("code",[this._v("npm install --save-dev style-loader css-loader")])]),this._v(" "),s("li",[s("code",[this._v("webpack.config.js")]),this._v("添加配置")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./src/index.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filename"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" path"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("     rules"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("         test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.css$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("         use"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("           "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'style-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("           "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'css-loader'")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("         "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("       "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("     "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("添加其他加载器同理")]),t._v(" "),n("li",[t._v("注意\n"),n("ul",[n("li",[t._v("如果是在script中使用import 'xx.css'，可用"),n("code",[t._v("extract-text-webpack-plugin")]),t._v("插件抽离出来")]),t._v(" "),n("li",[t._v("有的时候出现"),n("code",[t._v("Module build failed: Unknown word (1:1) removed by extract-text-webpack-plugin")]),t._v("这个错")]),t._v(" "),n("li",[t._v("在script中这样导入会很严格，如果找不到css里面引用的图片会编译不通过")]),t._v(" "),n("li",[t._v("所以不建议在script里面引用css，那样打包css到js里面，也不方便维护，如果实在需要，则使用"),n("code",[t._v("extract-text-webpack-plugin")]),t._v("插件")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"配置别名和拓展名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置别名和拓展名","aria-hidden":"true"}},[this._v("#")]),this._v(" 配置别名和拓展名")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("使用别名可以简化路径访问，配置拓展名引入文件可以不写拓展名")]),this._v(" "),s("li",[s("code",[this._v("webpack.config.js")]),this._v("中添加配置")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  resolve"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    extensions"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.vue'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.json'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.css'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    alias"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue$'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue/dist/vue.esm.js'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"eslint检查设置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eslint检查设置","aria-hidden":"true"}},[this._v("#")]),this._v(" eslint检查设置")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("有时候格式检查太过严格，需要设置排除项，比如排除"),n("code",[t._v("test1")]),t._v("文件夹\n"),n("ul",[n("li",[n("code",[t._v(".eslintignore")]),t._v("文件里面直接配置，把排除的文件夹写上去")]),t._v(" "),n("li",[t._v("或者"),n("code",[t._v("webpack.config.js")]),t._v("中添加配置")])])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("  module"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n         test"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token regex"}},[t._v("/\\.(js|vue)$/")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            loader"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-loader'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            enforce"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            include"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'test'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("            exclude"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/test1'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              formatter"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'eslint-friendly-formatter'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              emitWarning"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("config"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("showEslintErrorsInOverlay\n            "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"将某个模块设置为全局变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#将某个模块设置为全局变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 将某个模块设置为全局变量")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("比如兼容jquery的时候，可以将jquery注入到全局变量访问")]),this._v(" "),s("li",[s("code",[this._v("webpack.config.js")]),this._v("中添加配置")])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("plugins"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ProvidePlugin")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'window.$666'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      jQuery"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'window.$'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'window.jQuery'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jquery'")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ul",[n("li",[t._v("注意：\n"),n("ul",[n("li",[t._v("js使用jquery的名称需要与上面的配置的一样，才能被替换")]),t._v(" "),n("li",[t._v("打包生成之后生成的代码，引用"),n("code",[t._v("$")]),t._v("的地方会被替换为"),n("code",[t._v("__webpack_provided_window_dot_$")]),t._v("，如果是在eval函数里面使用，那么不会被识别，因此执行的时候仍然会报找不到错")])])])])}],!1,null,null,null);s.default=e.exports}}]);