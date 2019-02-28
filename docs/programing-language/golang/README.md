# go入门介绍

- Go 是一个开源的编程语言，它能让构造简单、可靠且高效的软件变得容易。
- Go是从2007年末由Robert Griesemer, Rob Pike, Ken Thompson主持开发，后来还加入了Ian Lance Taylor, Russ Cox等人，并最终于2009年11月开源，在2012年早些时候发布了Go 1稳定版本。现在Go的开发已经是完全开放的，并且拥有一个活跃的社区。
- 计算机软件经历了这么多年的发展，形成了多种学术流派，有面向过程编程、面向对象编程、函数式编程、面向消息编程等，这些思想究竟孰优孰劣，众说纷纭。除了OOP外，近年出现了一些小众的编程哲学，Go语言对这些思想亦有所吸收。例如，Go语言接受了函数式编程的一些想法，支持匿名函数与闭包。再如，Go语言接受了以Erlang语言为代表的面向消息编程思想，支持goroutine和通道，并推荐使用消息而不是共享内存来进行并发编程。总体来说，Go语言是一个非常现代化的语言，精小但非常强大。

- 参考介绍 https://www.w3cschool.cn/go/
- 参考介绍 http://www.runoob.com/go/go-tutorial.html
- 社区论坛 https://www.golangtc.com/ ，https://studygolang.com/ ，https://gocn.vip

## 是什么

- Go语言是谷歌2009年发布的第二款开源编程语言,它专门针对多处理器系统应用程序的编程进行了优化，它是一种系统语言其非常有用和强大,其程序可以媲美C或C++代码的速度，而且更加安全、支持并行进程。
- Go支持面向对象，而且具有真正的闭包(closures)和反射 (reflection)等功能。
- Go可以在不损失应用程序性能的情况下降低代码的复杂性。

## 目标用途

- Go 语言被设计成一门应用于搭载 Web 服务器，存储集群或类似用途的巨型中央服务器的系统编程语言。
- Go的目标是希望提升现有编程语言对程序库等依赖性(dependency)的管理，这些软件元素会被应用程序反复调用。由于存在并行编程模式，因此这一语言也被设计用来解决多处理器的任务。
- 对于高性能分布式系统领域而言，Go 语言无疑比大多数其它语言有着更高的开发效率。它提供了海量并行的支持，这对于游戏服务端的开发而言是再好不过了。

## 为什么要用它

- 可直接编译成机器码，不依赖其他库，glibc的版本有一定要求，部署就是扔一个文件上去就完成了。
- 静态类型语言，但是有动态语言的感觉，静态类型的语言就是可以在编译的时候检查出来隐藏的大多数问题，动态语言的感觉就是有很多的包可以使用，写起来的效率很高。
- 语言层面支持并发，这个就是Go最大的特色，天生的支持并发，Go就是基因里面支持的并发，可以充分的利用多核，很容易的使用并发。
- 内置runtime，支持垃圾回收，这属于动态语言的特性之一吧，虽然目前来说GC不算完美，但是足以应付我们所能遇到的大多数情况，特别是Go1.1之后的GC。
简单易学，Go语言的作者都有C的基因，那么Go自然而然就有了C的基因，那么Go关键字是25个，但是表达能力很强大，几乎支持大多数你在其他语言见过的特性：继承、重载、对象等。
- 丰富的标准库，Go目前已经内置了大量的库，特别是网络库非常强大
- 内置强大的工具，Go语言里面内置了很多工具链，最好的应该是gofmt工具，自动化格式化代码，能够让团队review变得如此的简单，代码格式一模一样，想不一样都很困难。
- 跨平台编译，如果你写的Go代码不包含cgo，那么就可以做到window系统编译linux的应用，如何做到的呢？Go引用了plan9的代码，这就是不依赖系统的信息。
- 内嵌C支持，前面说了作者是C的作者，所以Go里面也可以直接包含c代码，利用现有的丰富的C库。

## 下载安装

- https://studygolang.com/dl

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

- 以上代码新建hello.go文件，运行命令`go run hello.go`，控制台输出`Hello, World!`