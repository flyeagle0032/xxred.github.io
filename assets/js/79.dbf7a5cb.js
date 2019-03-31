(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{185:function(t,r,i){"use strict";i.r(r);var e=i(0),o=Object(e.a)({},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),i("ul",[i("li",[t._v("当被告知"),i("a",{attrs:{href:"https://manage.iis.net/get",target:"_blank",rel:"noopener noreferrer"}},[t._v("IISAdministrationSetup"),i("OutboundLink")],1),t._v("安装失败，我的内心毫无波澜，甚至想问你有没有试过管理员权限安装，因为在其它相同系统服务器成功安装过，所以觉得问题不大，但是仍需解决啊，下面先给出解决办法，再进行分解")])]),t._v(" "),t._m(1),t._v(" "),i("ul",[i("li",[t._v("安装"),i("a",{attrs:{href:"https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot",target:"_blank",rel:"noopener noreferrer"}},[t._v("补丁"),i("OutboundLink")],1),t._v("，重启电脑")]),t._v(" "),i("li",[t._v("我的是win server 2008 r2，所以选择"),i("a",{attrs:{href:"https://www.microsoft.com/en-us/download/details.aspx?id=26755",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个"),i("OutboundLink")],1),t._v("补丁")]),t._v(" "),i("li",[t._v("管理员身份运行安装，记住不要以兼容模式运行，否则即使显示安装成功也不是真的安装成功")]),t._v(" "),i("li",[t._v("因为这个补丁可以让dotnet命令成功执行，所以得以成功安装。下面记录一下过程。")])]),t._v(" "),t._m(2),t._v(" "),i("ul",[t._m(3),t._v(" "),i("li",[t._v("百度谷歌了一堆"),i("code",[t._v("Error 0x80070643: Failed to install MSI package")]),t._v("都没有结果对不对，我也是。中间"),i("a",{attrs:{href:"https://digitalsupport.ge.com/communities/en_US/Article/Historian-7-0-Install-gives-e000-Error-0x80070643-Failed-to-install-MSI-package",target:"_blank",rel:"noopener noreferrer"}},[t._v("有个博客"),i("OutboundLink")],1),t._v("是说它出错的软件要将域管理员切换本地管理员，操作是：按住Shift键=>右键单击安装可执行文件=>以其他用户身份运行=>然后输入本地管理员（PC名称\\管理员）。试过了也不行，说明不是权限的问题。")]),t._v(" "),t._m(4)]),t._v(" "),t._m(5),t._v(" "),i("ul",[i("li",[t._v("IISAdministration是基于"),i("code",[t._v("asp.net core")]),t._v("来做的，查看程序和功能，可以看到它已经成功安装.net core runtime了，这个环境依赖应该没问题。但我还是安装了一个对应版本的"),i("a",{attrs:{href:"https://github.com/dotnet/core/tree/master/release-notes",target:"_blank",rel:"noopener noreferrer"}},[t._v(".net core sdk"),i("OutboundLink")],1),t._v("，我下载了"),i("a",{attrs:{href:"https://github.com/dotnet/core/blob/master/release-notes/download-archives/1.0.7-download.md",target:"_blank",rel:"noopener noreferrer"}},[t._v(".net core runtime 1.07"),i("OutboundLink")],1),t._v("对应的版本")]),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),i("li",[t._v("发现只要输入dotnet命令，都是这个错，sdk安装成功了，但是命令不执行，查了一下发现需要安装补丁，参见"),i("a",{attrs:{href:"http://yisitian.com/2017/04/19/win2008server-r2-x64-net-core/",target:"_blank",rel:"noopener noreferrer"}},[t._v("此博客"),i("OutboundLink")],1),t._v("，附"),i("a",{attrs:{href:"https://support.microsoft.com/en-us/help/2533623/microsoft-security-advisory-insecure-library-loading-could-allow-remot",target:"_blank",rel:"noopener noreferrer"}},[t._v("补丁地址"),i("OutboundLink")],1)]),t._v(" "),t._m(9)]),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13)])},[function(){var t=this.$createElement,r=this._self._c||t;return r("h1",{attrs:{id:"windows-server-2008-r2-安装-iis-administration"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#windows-server-2008-r2-安装-iis-administration","aria-hidden":"true"}},[this._v("#")]),this._v(" Windows Server 2008 R2 安装 IIS.Administration")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"先给出解决办法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#先给出解决办法","aria-hidden":"true"}},[this._v("#")]),this._v(" 先给出解决办法")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"分析"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#分析","aria-hidden":"true"}},[this._v("#")]),this._v(" 分析")])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[this._v("安装窗口提示"),r("code",[this._v("Error 0x80070643")]),this._v("，点击日志文件链接，查看日志，发现是错误是"),r("code",[this._v("iis_administration_msi")]),this._v("这个msi包安装失败，但是具体原因没说\n"),r("img",{attrs:{src:"data:image/png;base64,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",alt:"avatar"}})])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[this._v("去官网文档、github主页除了确认它支持"),r("strong",[this._v("Windows Server 2008 R2以及更高版本")]),this._v("，就没其他信息了。 仅仅这些信息，实在不能分析出什么，只能靠猜了")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"尝试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#尝试","aria-hidden":"true"}},[this._v("#")]),this._v(" 尝试")])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[this._v("结果当然还是不行啦，猜想"),r("code",[this._v("iis_administration_msi")]),this._v("安装失败会不会是兼容性问题，于是我就用兼容模式安装，选中安装包-右键点击属性-兼容性选项卡-勾选以兼容模式运行-选择winserver2008，再加上管理员身份运行，居然！显示安装成功了")])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[this._v("然而并没有什么用，"),r("code",[this._v("C:\\Program Files\\IIS Administration")]),this._v("并没有文件，因此站点一直访问不了"),r("code",[this._v("https://localhost:55539/")])])},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("li",[t._v("经过多次卸载再安装，还因为它安装卡住了重启了一次之后，还是无果。既然没有文件，那我给你一份呗我自己启动运行呗，反正是"),i("code",[t._v("asp.net core")]),t._v("项目。于是从本地电脑拷贝一份过去，在"),i("code",[t._v("C:\\Program Files\\IIS Administration\\2.2.0\\Microsoft.IIS.Administration")]),t._v("目录按住shift+鼠标右键-打开命令窗口-执行命令"),i("code",[t._v("dotnet Microsoft.IIS.Administration.dll")]),t._v("，结果报"),i("code",[t._v("Failed to load the dll from [C:\\Program Files\\dotnet\\host\\fxr\\1.1.2\\hostfxr.dll]")]),t._v("这个错")])},function(){var t=this.$createElement,r=this._self._c||t;return r("li",[this._v("装完补丁重启电脑，重新输入命令，竟然跑起来了，但是"),r("code",[this._v("https://localhost:55539/")]),this._v("依旧访问不了，想想这种方式即使得了也不靠谱，毕竟还有一个msi包还没安装，设置都没设置好，再次尝试安装，还是失败")])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"正确的姿势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#正确的姿势","aria-hidden":"true"}},[this._v("#")]),this._v(" 正确的姿势")])},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ul",[i("li",[t._v("实在不行，只能继续分析日志了，但是那个面板的日志文件链接打开能看到的错误信息有限啊，于是我想到查看成功安装的日志是什么样的呢，可以对比一下，于是找一下他的路径")]),t._v(" "),i("li",[t._v("在打开日志文件的时候，右键单击记事本，出现一排文件记录，找到这个日志文件，鼠标放在上面即可看到文件路径，我的位于"),i("code",[t._v("C:\\Users\\Administrator\\AppData\\Local\\Temp")]),t._v("，可以看到，除了之前看到的日志文件，还有一个后面多了"),i("code",[t._v("_000_iis_administration_msi")]),t._v("的文件，心里一喜，立马打开，拉到最下面，一般出错了就会中止安装，错误日志记录在最下面")]),t._v(" "),i("li",[t._v("只能看到"),i("code",[t._v("Product: Microsoft IIS Administration -- Installation failed")]),t._v("以及"),i("code",[t._v("安装成功或错误状态: 1603")]),t._v("，在往上翻，突然注意到了"),i("code",[t._v("C:\\Program Files\\IIS Administration")]),t._v("这个路径，这个不是被我拷贝了一份在那里吗，会不会影响了。立马删了再次安装，哎呦我去！成功了，并且正常访问"),i("code",[t._v("https://localhost:55539/")]),t._v("，服务里面也多了"),i("code",[t._v("Management service for IIS")]),t._v("这一项，这次才是成功！")])])},function(){var t=this.$createElement,r=this._self._c||t;return r("h2",{attrs:{id:"总结"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this,r=t.$createElement,i=t._self._c||r;return i("ul",[i("li",[i("p",[t._v("这次可以说是误打误撞解决了问题，浪费了很多时间，但也学到不少东西，起码不会干瞪眼着急了")])]),t._v(" "),i("li",[i("p",[t._v("首先安装大型一点的软件，如果出错了，一般都会有日志文件的，分析一下，找到问题所在，针对性解决就可以了，如果找不到问题或者不理解那个问题，说明我们对这个东西所涵括的内容，运行流程还不太了解，大概了解一下有时候能帮助我们及早解决问题。")])]),t._v(" "),i("li",[i("p",[t._v("一般安装出错，error会出现在日志文件最后面，仔细检查每一个error，分析出问题所在，如果信息太少，可以查看日志文件所在位置，是否还有其他日志文件。")])]),t._v(" "),i("li",[i("p",[t._v("一般主日志文件会有记录所有日志文件的地址，细心看一下就可以找到是否还有其它日志文件，找到之后继续分析关键点。找到关键的名词之后，查一下相关的资料，发散思维去解决问题，你会有意想不到的收获。")])]),t._v(" "),i("li",[i("p",[t._v("如果是安装或者部署软件出现问题，最好可以调试一下，一步步调试，直面运行过程，可以发现很多我们没想过的细节，经过一番努力，对这些知识的印象也会更加深刻。")])]),t._v(" "),i("li",[i("p",[t._v("不放弃，最后才能成功并有收获！")])])])}],!1,null,null,null);r.default=o.exports}}]);