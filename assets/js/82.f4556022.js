(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{242:function(t,e,s){"use strict";s.r(e);var r=s(0),a=Object(r.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("老早就听说powershell很牛逼，但是没真正用过，这两天刚好用到，顺便写一下有关的，可能以后用得到的东西。本来想记一下这次使用过程中用到的一些操作的，就是这么巧，发现了个很不错的教程网站，于是我就可以偷懒了，哈哈。")]),t._v(" "),t._m(2),t._v(" "),s("ul",[s("li",[t._v("非官方在线教程网站\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://www.pstips.net/powershell-online-tutorials",target:"_blank",rel:"noopener noreferrer"}},[t._v("www.pstips.net"),s("OutboundLink")],1)])])]),t._v(" "),s("li",[t._v("官方文档\n"),s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/powershell/scripting/getting-started/getting-started-with-windows-powershell",target:"_blank",rel:"noopener noreferrer"}},[t._v("入门"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/powershell/scripting/getting-started/basic-cookbooks",target:"_blank",rel:"noopener noreferrer"}},[t._v("基本指南"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/powershell/scripting/setup/windows-powershell-system-requirements",target:"_blank",rel:"noopener noreferrer"}},[t._v("操作系统要求"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/powershell/scripting/core-powershell/ise/introducing-the-windows-powershell-ise",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows PowerShell ISE"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/powershell/scripting/core-powershell/running-remote-commands",target:"_blank",rel:"noopener noreferrer"}},[t._v("运行远程命令"),s("OutboundLink")],1)])])])]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),s("ul",[s("li",[t._v("在项目需要用到nuget包"),s("a",{attrs:{href:"https://www.nuget.org/packages/NuGetDebugTools/",target:"_blank",rel:"noopener noreferrer"}},[t._v("NuGetDebugTools"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("按照github上"),s("a",{attrs:{href:"https://github.com/nightroman/PowerShelf/tree/master/Pack/NuGetDebugTools",target:"_blank",rel:"noopener noreferrer"}},[t._v("教程"),s("OutboundLink")],1),t._v("操作\n"),s("ul",[s("li",[t._v("程序包管理器控制台输入相关命令，在安装需要调试的nuget包的时候就会弹出一个输入框和powershell控制台，输入框内输入命令可进行调试操作，还可以输入变量或者表达式以便在powershell控制台观察结果")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),s("li",[s("a",{attrs:{href:"https://stackoverflow.com/questions/7031944/how-to-debug-install-ps1-script-of-nuget-package",target:"_blank",rel:"noopener noreferrer"}},[t._v("关于调试nuget包中ps1脚本的讨论"),s("OutboundLink")],1)])])]),t._v(" "),t._m(8)]),t._v(" "),t._m(9),t._v(" "),s("ul",[s("li",[t._v("param($installPath, $toolsPath, $package, $project)文件的第一行这四个参数分别是nuget包的路径、脚本路径、包本身的对象、安装此包的项目对象")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://www.cnblogs.com/lori/p/7765112.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("有时候需要将部分文件的操作改成始终复制到输出目录"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://www.codeproject.com/Articles/209522/PowerShell-Script-Examples-for-NuGet-Packages",target:"_blank",rel:"noopener noreferrer"}},[t._v("nuget中ps1脚本的代码示例"),s("OutboundLink")],1)])]),t._v(" "),t._m(10),t._v(" "),t._m(11)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"初识powershell、nuget-powershell-调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初识powershell、nuget-powershell-调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 初识powershell、nuget powershell 调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前言"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前言","aria-hidden":"true"}},[this._v("#")]),this._v(" 前言")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"相关资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相关资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 相关资料")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"在nuget安装包的时候进行powershell调试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#在nuget安装包的时候进行powershell调试","aria-hidden":"true"}},[this._v("#")]),this._v(" 在nuget安装包的时候进行powershell调试")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"调试相关"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#调试相关","aria-hidden":"true"}},[this._v("#")]),this._v(" 调试相关")])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("添加调试器"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("Add-Debugger\n")])])]),this._v("或者"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("Add-Debugger -ReadHost\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("设置需要调试的脚本名"),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("Set-PSBreakpoint -Command init.ps1, install.ps1, uninstall.ps1\n")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[t._v("新建项目，安装要调试的nuget包，当命中上一步设置断点脚本时，调试输入框就会出现，执行?就会出现一堆操作提示"),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("s, StepInto  Step to the next statement into functions, scripts, etc.\nv, StepOver  Step to the next statement over functions, scripts, etc.\no, StepOut   Step out of the current function, script, etc.\nc, Continue  Continue operation "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("also on empty input"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\nq, Quit      Stop operation and "),s("span",{attrs:{class:"token keyword"}},[t._v("exit")]),t._v(" the debugger.\n?, h         Write this "),s("span",{attrs:{class:"token function"}},[t._v("help")]),t._v(" message.\nk            Write call stack "),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Get-PSCallStack"),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".\nK            Write detailed call stack using Format-List.\n\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("          Write debug location "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" context of "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" lines.\n+"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("         Set location context preference to "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" lines.\nk "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("s"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("    Write "),s("span",{attrs:{class:"token function"}},[t._v("source")]),t._v(" at stack "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("s"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("in")]),t._v(" context of "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("n"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" lines.\n\nw            Restart watching the debugger output file.\nr            Write last PowerShell commands invoked on debugging.\n"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v("    Invoke any PowerShell "),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("command"),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" and "),s("span",{attrs:{class:"token function"}},[t._v("write")]),t._v(" its output.\n")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[this._v("注意\n"),e("ul",[e("li",[this._v("nuget包好像分全局安装和在项目里面局部安装，没试过不知道，猜的")]),this._v(" "),e("li",[this._v("打开vs之后调出nuget包管理器控制台安装的方式应该算全局安装，然后在各个项目里面安装包都可以调试")]),this._v(" "),e("li",[this._v("我是在项目里面安装的NuGetDebugTools，也一样能用")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"编写nuget包ps1脚本可能用到的东东"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编写nuget包ps1脚本可能用到的东东","aria-hidden":"true"}},[this._v("#")]),this._v(" 编写nuget包ps1脚本可能用到的东东")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"总结"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("由于完全没用过，什么姿势都不会，要干嘛完全是问度娘的，资料多还好，不多的时候找不到能用的就无计可施了，找不到组织真的有点盲目。所以学习新的东西要先花点时间找下给力的文档或者教程（什么叫给力？官方的文档不给力吗？嘿嘿，我只想说你们开心就好）。可以是官方文档、官方社区、第三方社区或论坛、还有国外的（英文关键字搜索）。")]),this._v(" "),e("li",[this._v("最便捷的方法是找身边相关领域的大牛，有大牛你还找什么教程啊，走起！")]),this._v(" "),e("li",[this._v("无论是什么，基本上都有它的套路，摸清楚了套路学的就快了。比如powershell脚本的，执行环境-执行入口-数据类型-变量声明和使用-基本操作-执行结束。再复杂点还有各种生命周期事件，变量作用域等等，快速上手使用基本不用管这么多，只要能哐哐哐跑起来，管它三七二十一。")])])}],!1,null,null,null);e.default=a.exports}}]);