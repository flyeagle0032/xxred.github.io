(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{189:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("收集Docker入门可能用得到的资料，开发机系统为win10")]),t._v(" "),t._m(1),t._v(" "),a("ul",[a("li",[t._v("https://download.docker.com/win/")]),t._v(" "),a("li",[t._v("https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.docker-cn.com/docker-for-windows/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文安装文档"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("如果装有"),a("a",{attrs:{href:"https://chocolatey.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("chocolatey"),a("OutboundLink")],1),t._v("，没有的话安装也很快"),a("a",{attrs:{href:"https://chocolatey.org/install/",target:"_blank",rel:"noopener noreferrer"}},[t._v("命令行安装"),a("OutboundLink")],1),t._v("，建议用powershell执行"),a("code",[t._v("choco install docker-desktop -y")]),t._v("安装Docker")]),t._v(" "),a("li",[t._v("安装完需要重启完成完整安装")]),t._v(" "),a("li",[t._v("win10以下版本需要安装"),a("a",{attrs:{href:"https://docs.docker.com/toolbox/overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docker Toolbox"),a("OutboundLink")],1)])]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),a("ul",[a("li",[t._v("可视化Docker管理，支持多主机"),a("a",{attrs:{href:"https://www.portainer.io/installation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Portainer"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("开源的企业级容器管理平台"),a("a",{attrs:{href:"https://rancher.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("rancher"),a("OutboundLink")],1)])]),t._v(" "),t._m(19),t._v(" "),t._m(20)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"docker-入门资料收集"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-入门资料收集","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker 入门资料收集")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"下载安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#下载安装","aria-hidden":"true"}},[this._v("#")]),this._v(" 下载安装")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\WINDOWS\\system32> choco install docker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("y\nChocolatey v0"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("10"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("11\nInstalling the following packages:\ndocker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop\nBy installing you accept licenses "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" the packages"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nProgress: Downloading docker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop 2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" 100"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v("\n\ndocker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop v2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0 "),a("span",{attrs:{class:"token namespace"}},[t._v("[Approved]")]),t._v("\ndocker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop package files install completed"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Performing other installation steps"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nFile appears to be downloaded already"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Verifying with package checksum to determine "),a("span",{attrs:{class:"token keyword"}},[t._v("if")]),t._v(" it needs to be redownloaded"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nError "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" hashes "),a("span",{attrs:{class:"token keyword"}},[t._v("do")]),t._v(" not match"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Actual value was "),a("span",{attrs:{class:"token string"}},[t._v("'527558BD0AC89F3916A3AD301AE3C12E97E400F7630261C97427A16A4014B26E'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nDownloading docker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("windows\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'https://download.docker.com/win/stable/28905/Docker%20for%20Windows%20Installer.exe'")]),t._v("\nProgress: 100"),a("span",{attrs:{class:"token operator"}},[t._v("%")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v(" Completed download of H:\\Cache\\choco\\docker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop\\2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0\\Docker "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Windows Installer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("537"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("71 MB"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nDownload of Docker "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" Windows Installer"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("537"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("71 MB"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" completed"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nHashes match"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nInstalling docker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("windows"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\ndocker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("windows has been installed"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  docker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop may be able to be automatically uninstalled"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\nEnvironment Vars "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("like PATH"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" have changed"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" Close"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("reopen your shell to\n see the changes "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("or in powershell"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("cmd"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe just "),a("span",{attrs:{class:"token function"}},[t._v("type")]),t._v(" `refreshenv`"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n The install of docker"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("desktop was successful"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n  Software installed to "),a("span",{attrs:{class:"token string"}},[t._v("'C:\\Program Files\\Docker\\Docker'")]),t._v("\n\nChocolatey installed 1"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("1 packages"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n See the log "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" details "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("H:\\Program Files\\Chocolatey\\logs\\chocolatey"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("log"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行","aria-hidden":"true"}},[this._v("#")]),this._v(" 运行")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("运行hello-world，执行"),s("code",[this._v("docker run hello-world")])]),this._v(" "),s("li",[this._v("安装更多可参考http://www.runoob.com/docker/docker-install-mysql.html")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-powershell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-powershell"}},[a("code",[a("span",{attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\Users\\12504> docker "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("v\nDocker version 18"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("09"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("0"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" build 4d60db4\n"),a("span",{attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\Users\\12504> docker run hello"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("world\nUnable to find image "),a("span",{attrs:{class:"token string"}},[t._v("'hello-world:latest'")]),t._v(" locally\nlatest: Pulling "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" library"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("hello"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("world\nd1725b59e92d: Pull complete\nDigest: sha256:b3a26e22bf55e4a5232b391281fc1673f18462b75cdc76aa103e6d3a2bce5e77\nStatus: Downloaded newer image "),a("span",{attrs:{class:"token keyword"}},[t._v("for")]),t._v(" hello"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("world:latest\n\nHello "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" Docker"),a("span",{attrs:{class:"token operator"}},[t._v("!")]),t._v("\nThis message shows that your installation appears to be working correctly"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nTo generate this message"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Docker took the following steps:\n 1"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" The Docker client contacted the Docker daemon"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n 2"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" The Docker daemon pulled the "),a("span",{attrs:{class:"token string"}},[t._v('"hello-world"')]),t._v(" image "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" the Docker Hub"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("amd64"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n 3"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" The Docker daemon created a new container "),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" that image which runs the\n    executable that produces the output you are currently reading"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n 4"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v(" The Docker daemon streamed that output to the Docker client"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" which sent it\n    to your terminal"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\nTo "),a("span",{attrs:{class:"token keyword"}},[t._v("try")]),t._v(" something more ambitious"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" you can run an Ubuntu container with:\n $ docker run "),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("it ubuntu bash\n\nShare images"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" automate workflows"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" and more with a free Docker ID:\n https:"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("hub"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("docker"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("For")]),t._v(" more examples and ideas"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" visit:\n https:"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("docs"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("docker"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("get"),a("span",{attrs:{class:"token operator"}},[t._v("-")]),t._v("started"),a("span",{attrs:{class:"token operator"}},[t._v("/")]),t._v("\n\n"),a("span",{attrs:{class:"token function"}},[t._v("PS")]),t._v(" C:\\Users\\12504>\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"资源汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#资源汇总","aria-hidden":"true"}},[this._v("#")]),this._v(" 资源汇总")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("部分复制于以下网站：\n"),s("ul",[s("li",[this._v("http://www.docker.org.cn/")]),this._v(" "),s("li",[this._v("http://www.runoob.com/")])])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"名词解释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#名词解释","aria-hidden":"true"}},[this._v("#")]),this._v(" 名词解释")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("http://www.runoob.com/docker/docker-architecture.html")]),this._v(" "),s("li",[this._v("一句话概括：在Docker主机(Host，物理机)上通过Docker Machine命令行工具安装Docker 客户端(Client)，然后从Docker 仓库(Registry，官方Docker Hub)拉取Docker 镜像(Images，相当于软件包)运行，运行的东西叫做Docker 容器(Container，独立运行的应用)。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"docker官方英文资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker官方英文资源","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker官方英文资源")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("docker官网：http://www.docker.com")]),t._v(" "),a("li",[t._v("Docker windows入门：https://docs.docker.com/windows/")]),t._v(" "),a("li",[t._v("Docker Linux 入门：https://docs.docker.com/linux/")]),t._v(" "),a("li",[t._v("Docker mac 入门：https://docs.docker.com/mac/")]),t._v(" "),a("li",[t._v("Docker 用户指引：https://docs.docker.com/engine/userguide/")]),t._v(" "),a("li",[t._v("Docker 官方博客：http://blog.docker.com/")]),t._v(" "),a("li",[t._v("Docker Hub: https://hub.docker.com/")]),t._v(" "),a("li",[t._v("Docker开源： https://www.docker.com/open-source")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"docker中文资源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker中文资源","aria-hidden":"true"}},[this._v("#")]),this._v(" Docker中文资源")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("docker-cn.com为官方网站翻译")])]),t._v(" "),a("li",[a("p",[t._v("Docker中文网站：https://www.docker-cn.com/")])]),t._v(" "),a("li",[a("p",[t._v("Docker安装手册：https://docs.docker-cn.com/engine/installation/")])]),t._v(" "),a("li",[a("p",[t._v("Docker中文网站：http://www.docker.org.cn")])]),t._v(" "),a("li",[a("p",[t._v("Docker入门教程: http://www.docker.org.cn/book/docker.html")])]),t._v(" "),a("li",[a("p",[t._v("Docker安装手册：http://www.docker.org.cn/book/install.html")])]),t._v(" "),a("li",[a("p",[t._v("一小时Docker教程 ：https://blog.csphere.cn/archives/22")])]),t._v(" "),a("li",[a("p",[t._v("docker从入门到实践：- http://dockerpool.com/static/books/docker_practice/index.html")])]),t._v(" "),a("li",[a("p",[t._v("Docker纸质书：http://www.docker.org.cn/dockershuji.html")])]),t._v(" "),a("li",[a("p",[t._v("DockerPPT：http://www.docker.org.cn/dockerppt.html")])]),t._v(" "),a("li",[a("p",[t._v("推荐入门教程：http://www.ruanyifeng.com/blog/2018/02/docker-tutorial.html")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"镜像加速"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#镜像加速","aria-hidden":"true"}},[this._v("#")]),this._v(" 镜像加速")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("Docker 中国官方镜像加速 https://www.docker-cn.com/registry-mirror")]),t._v(" "),a("li",[t._v("网易加速器：http://hub-mirror.c.163.com")]),t._v(" "),a("li",[t._v("官方中国加速器：https://registry.docker-cn.com")]),t._v(" "),a("li",[t._v("ustc的镜像：https://docker.mirrors.ustc.edu.cn")]),t._v(" "),a("li",[t._v("daocloud（注册后使用）：https://www.daocloud.io/mirror#accelerator-doc")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"命令大全"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令大全","aria-hidden":"true"}},[this._v("#")]),this._v(" 命令大全")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[t._v("https://docs.docker.com/engine/reference/run/")]),t._v(" "),a("li",[t._v("http://www.runoob.com/docker/docker-command-manual.html")]),t._v(" "),a("li",[t._v("主要分为：\n"),a("ul",[a("li",[t._v("容器生命周期管理\n"),a("ul",[a("li",[t._v("run")]),t._v(" "),a("li",[t._v("start/stop/restart")]),t._v(" "),a("li",[t._v("kill")]),t._v(" "),a("li",[t._v("rm")]),t._v(" "),a("li",[t._v("pause/unpause")]),t._v(" "),a("li",[t._v("create")]),t._v(" "),a("li",[t._v("exec")])])]),t._v(" "),a("li",[t._v("容器操作\n"),a("ul",[a("li",[t._v("ps")]),t._v(" "),a("li",[t._v("inspect")]),t._v(" "),a("li",[t._v("top")]),t._v(" "),a("li",[t._v("attach")]),t._v(" "),a("li",[t._v("events")]),t._v(" "),a("li",[t._v("logs")]),t._v(" "),a("li",[t._v("wait")]),t._v(" "),a("li",[t._v("export")]),t._v(" "),a("li",[t._v("port")])])]),t._v(" "),a("li",[t._v("容器rootfs命令\n"),a("ul",[a("li",[t._v("commit")]),t._v(" "),a("li",[t._v("cp")]),t._v(" "),a("li",[t._v("diff")])])]),t._v(" "),a("li",[t._v("镜像仓库\n"),a("ul",[a("li",[t._v("login")]),t._v(" "),a("li",[t._v("pull")]),t._v(" "),a("li",[t._v("push")]),t._v(" "),a("li",[t._v("search")])])]),t._v(" "),a("li",[t._v("本地镜像管理\n"),a("ul",[a("li",[t._v("images")]),t._v(" "),a("li",[t._v("rmi")]),t._v(" "),a("li",[t._v("tag")]),t._v(" "),a("li",[t._v("build")]),t._v(" "),a("li",[t._v("history")]),t._v(" "),a("li",[t._v("save")]),t._v(" "),a("li",[t._v("import")])])]),t._v(" "),a("li",[t._v("info|version\n"),a("ul",[a("li",[t._v("info")]),t._v(" "),a("li",[t._v("version")])])])])]),t._v(" "),a("li",[t._v("http://www.runoob.com/docker/docker-command-manual.html")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"界面管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#界面管理","aria-hidden":"true"}},[this._v("#")]),this._v(" 界面管理")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结","aria-hidden":"true"}},[this._v("#")]),this._v(" 总结")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("经过动手实践，才会更深一层理解Docker，知道它能干什么，可以解决什么问题，如果没有配置环境的烦恼，请速速离开，因为学习成本将会让人从未入门到放弃。")])])}],!1,null,null,null);s.default=n.exports}}]);