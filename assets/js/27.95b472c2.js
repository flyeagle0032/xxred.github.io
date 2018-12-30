(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{187:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[t._m(0),t._v(" "),r("ul",[r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/visualstudio/debugger/how-to-debug-dotnet-framework-source",target:"_blank",rel:"noopener noreferrer"}},[t._v("如何调试 .NET Framework 源代码"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/visualstudio/debugger/specify-symbol-dot-pdb-and-source-files-in-the-visual-studio-debugger",target:"_blank",rel:"noopener noreferrer"}},[t._v("在 Visual Studio 调试器中指定符号 (.pdb) 和源文件"),r("OutboundLink")],1)])]),t._v(" "),r("li",[r("p",[r("a",{attrs:{href:"https://referencesource.microsoft.com/download.html",target:"_blank",rel:"noopener noreferrer"}},[t._v(".NET Framework 源代码下载"),r("OutboundLink")],1)])])]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),r("ul",[r("li",[t._v("此时可能会从服务器上下载源码，需要等一会。下载完之后自动切换标签页，接下来要做的有两步，断个点，然后复制一下类名或者命名空间到"),r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/dotnet/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v(".Net API浏览器"),r("OutboundLink")],1),t._v("搜索。")])]),t._v(" "),t._m(10),t._v(" "),r("ul",[t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("li",[r("p",[r("strong",[t._v("注意")]),t._v("：如果是发布的第三方包，请把pdb删掉，不要一起发布，因为该pdb文件包含的源码地址时打包者电脑地址，其他人加载了改文件将找不到源码。而通过"),r("code",[t._v("dotnet pack --include-symbols")]),t._v("命令打包生成的pdb不好含本地源码地址。这样就不限于打包者本人直接调试通过nuget发布的dll，其他人也将可以通过本文所述方式进行调试，无需自己拉去源码编译dll。"),r("a",{attrs:{href:"https://github.com/NuGet/Home/wiki/NuGet-Package-Debugging-&-Symbols-Improvements#nuget-debugging-experience-today",target:"_blank",rel:"noopener noreferrer"}},[t._v("相关参考链接"),r("OutboundLink")],1)])])]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"调试-net-framework-源代码"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试-net-framework-源代码","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试 .NET Framework 源代码")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"条件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#条件","aria-hidden":"true"}},[this._v("#")]),this._v(" 条件")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("加载符号文件：调试之前要加载符号文件，F11步入才有可能触发源码加载或下载")]),this._v(" "),e("li",[this._v("加载源码（不会自动加载源码的情况）：加载符号文件之后，调试器会根据符号文件记录的源码位置查找并打开源码。我们要做的就是触发加载源码的弹窗，手动选择上面下载的源码。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"提前断点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#提前断点","aria-hidden":"true"}},[this._v("#")]),this._v(" 提前断点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("选择源码文件之后，即可开始调试。此时打开的源码可以在里面其它地方断点，运行到的时候就会命中断点，但前提是要加载它对应的符号文件")]),this._v(" "),e("li",[this._v("如果需要在运行前断点，并在运行到断点行时命中，需要先加载符号文件：在调试-调试堆栈窗口选择需要断点的模块，单击右键选择始终加载，那么下次运行就会自动加载符号了。也可以在调试堆栈转到模块列表，然后设置加载。或者在工具-调试-符号-始终加载指定模块，填写dll名包括dll")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"调试dotnetcore"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试dotnetcore","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试DotNetCore")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("DotNetCore是开源的，源码位于github，所有通过Nuget分发的包都会附带构建时的源码，源码版本跟运行的dll版本一一对应，就不会像调试DotNetFramework源码一样差异过大")]),this._v(" "),e("li",[this._v("在运行程序时自动从github下载病并加载加载pdb符号文件。如果加载全部符号启动将变得异常缓慢，所以仅选择需要调试的dll即可")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"加载符号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#加载符号","aria-hidden":"true"}},[this._v("#")]),this._v(" 加载符号")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("首先找到需要调试代码所在的dll名称，在需要调试的方法上点击鼠标右键-转到定义。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180910234736792-1638492379.png",alt:" "}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180910235518435-105220052.png",alt:" "}}),e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180911000449872-1457731347.png",alt:" "}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("点击搜索结果，跳转到类详情页，复制dll全称。"),e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180911000745928-1333852240.png",alt:" "}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("在VS依次操作：工具-选项-调试-符号-指定包含的模块-右上角加号-粘贴-确定。"),e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180911001439925-336201563.png",alt:" "}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("p",[this._v("完成符号准备工作，程序运行时将自动从符号服务器下载pdb符号文件并加载进程序。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("一切顺利的话，运行程序，加载完符号，断点是红色实心，否则就要检查符号是否正常加载。接下来开始愉快的调试之旅")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180911003345305-244368451.png",alt:" "}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"运行时加载符号调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#运行时加载符号调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行时加载符号调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("此方法两个框架都适合，在调试自己的代码时，通过调用堆栈切换，触发加载符号的对话框，加载符号即可进行调试，但是下次还要调试时的话要重复此操作")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"打开调用堆栈"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#打开调用堆栈","aria-hidden":"true"}},[this._v("#")]),this._v(" 打开调用堆栈")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("首先在调试时打开调用堆栈。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180911004920583-1340863377.png",alt:" "}}),this._v(" "),e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180911004849457-754291621.png",alt:" "}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"调试中加载符号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试中加载符号","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试中加载符号")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("未加载符号的堆栈时灰色，双击它，自动出现加载符号页"),e("img",{attrs:{src:"https://images2018.cnblogs.com/blog/1057748/201809/1057748-20180911005129316-1707176975.png",alt:" "}}),this._v("点击加载，将自动加载符号并跳转到源码页，在需要调试的地方断点即可开始调试")]),this._v(" "),e("li",[this._v("类似的，调试DotNetFramework源码，可加载本地下载好的符号文件。调试时如果找不到源码文件会自动弹出选择源码的对话框，这时候再选择下载好的源码也可开始调试")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意","aria-hidden":"true"}},[this._v("#")]),this._v(" 注意")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("下载的DotNetFramework源码可能跟引用的版本不是完全对应，这是需要注意的")])])}],!1,null,null,null);e.default=i.exports}}]);