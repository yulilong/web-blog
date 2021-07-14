(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{191:function(t,e,r){t.exports=r.p+"assets/img/008-httpMessage.00e669f7.png"},192:function(t,e,r){t.exports=r.p+"assets/img/009-httpMessage.8883b974.png"},193:function(t,e,r){t.exports=r.p+"assets/img/010-httpMessage.83ddbef9.png"},194:function(t,e,r){t.exports=r.p+"assets/img/011-httpMessage.4909aca6.png"},482:function(t,e,r){"use strict";r.r(e);var _=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"table-of-contents"},[r("ul",[r("li",[r("a",{attrs:{href:"#_1-报文组成"}},[t._v("1. 报文组成")])]),r("li",[r("a",{attrs:{href:"#_2-报文分类"}},[t._v("2. 报文分类")]),r("ul",[r("li",[r("a",{attrs:{href:"#_2-1-请求报文"}},[t._v("2.1 请求报文")])]),r("li",[r("a",{attrs:{href:"#_2-2-响应报文"}},[t._v("2.2 响应报文")])])])]),r("li",[r("a",{attrs:{href:"#_3-报文首部"}},[t._v("3. 报文首部")]),r("ul",[r("li",[r("a",{attrs:{href:"#_3-1-通用部首"}},[t._v("3.1 通用部首")])]),r("li",[r("a",{attrs:{href:"#_3-2-请求首部"}},[t._v("3.2 请求首部")])]),r("li",[r("a",{attrs:{href:"#_3-3-响应首部字段"}},[t._v("3.3 响应首部字段")])]),r("li",[r("a",{attrs:{href:"#_3-4-实体首部字段"}},[t._v("3.4 实体首部字段")])])])]),r("li",[r("a",{attrs:{href:"#_4-请求数据大小说明"}},[t._v("4. 请求数据大小说明")]),r("ul",[r("li",[r("a",{attrs:{href:"#_4-1-请求行-uri"}},[t._v("4.1 请求行 URI")])]),r("li",[r("a",{attrs:{href:"#_4-2-请求头部-header"}},[t._v("4.2 请求头部 header")])]),r("li",[r("a",{attrs:{href:"#_4-3-请求体-body"}},[t._v("4.3 请求体 body")])]),r("li",[r("a",{attrs:{href:"#_4-3-http请求大小的影响"}},[t._v("4.3 HTTP请求大小的影响")])])])]),r("li",[r("a",{attrs:{href:"#参考资料"}},[t._v("参考资料")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"http报文和请求数据大小"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http报文和请求数据大小","aria-hidden":"true"}},[this._v("#")]),this._v(" http报文和请求数据大小")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("HTTP报文是在HTTP应用程序之间发送的数据块。这些数据块以一些文本形式的 "),e("code",[this._v("元信息(meta-information)")]),this._v("开头，这些信息描述了报文的内容及含义，后面跟着可选的数据部分。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_1-报文组成"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-报文组成","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 报文组成")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("起始行(start line)：对报文的描述，用来说明报文的目的或者执行的结果")]),this._v(" "),e("li",[this._v("首部(header)：报文的属性信息，提供报文的附加信息")]),this._v(" "),e("li",[this._v("主体(body)：可选，发送的数据")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-http extra-class"},[e("pre",{pre:!0,attrs:{class:"language-http"}},[e("code",[e("span",{attrs:{class:"token response-status"}},[this._v("HTTP/1.0 "),e("span",{attrs:{class:"token property"}},[this._v("200 OK")])]),this._v("\n"),e("span",{attrs:{class:"token header-name keyword"}},[this._v("content-type:")]),this._v(" text/plain\n"),e("span",{attrs:{class:"token header-name keyword"}},[this._v("content-length:")]),this._v(" 19\n\nHi, I'm a message\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_2-报文分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-报文分类","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 报文分类")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-1-请求报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-请求报文","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.1 请求报文")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("请求行")]),t._v(" "),r("p",[t._v("由请求方法、URL、HTTP协议版本组成，他们之间用空格分开")])]),t._v(" "),r("li",[r("p",[t._v("请求头部")]),t._v(" "),r("p",[t._v("由关键字和值对组成，每行一对，用来附加一些信息")])]),t._v(" "),r("li",[r("p",[t._v("空行")])]),t._v(" "),r("li",[r("p",[t._v("请求体")]),t._v(" "),r("p",[t._v("可选，是HTTP要传输的内容，post、put等请求携带的参数也在请求体里")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(191),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(192),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_2-2-响应报文"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-响应报文","aria-hidden":"true"}},[this._v("#")]),this._v(" 2.2 响应报文")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("p",[t._v("响应行")]),t._v(" "),r("p",[t._v("由HTTP协议版本、状态码、状态码、状态码说明组成，如："),r("code",[t._v("HTTP/1.1 200 OK")])])]),t._v(" "),r("li",[r("p",[t._v("响应头部")]),t._v(" "),r("p",[t._v("跟请求头部一样，由关键字和值对组成，每行一对，用来附加一些信息")])]),t._v(" "),r("li",[r("p",[t._v("空行")])]),t._v(" "),r("li",[r("p",[t._v("响应体")]),t._v(" "),r("p",[t._v("服务器响应的数据")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(193),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('curl -i www.baidu.com\n\nHTTP/1.1 200 OK\nAccept-Ranges: bytes\nCache-Control: private, no-cache, no-store, proxy-revalidate, no-transform\nConnection: Keep-Alive\nContent-Length: 2381\nContent-Type: text/html\nDate: Sun, 08 Sep 2019 16:44:37 GMT\nEtag: "588604c8-94d"\nLast-Modified: Mon, 23 Jan 2017 13:27:36 GMT\nPragma: no-cache\nServer: bfe/1.0.8.18\nSet-Cookie: BDORZ=27315; max-age=86400; domain=.baidu.com; path=/\n\n<!DOCTYPE html>\n\x3c!--STATUS OK--\x3e<html>  </html>\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3-报文首部"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-报文首部","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 报文首部")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("3、每个首部行由首部字段+"),e("code",[this._v(":")]),this._v(" + 空格 + 值组成，如："),e("code",[this._v("Connection: Keep-Alive")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("4、每个首部行在结束的地方都有"),e("code",[this._v("CRLF")]),this._v("(回车和换行符)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("5、首部字段分为4种："),e("strong",[this._v("通用首部字段、请求首部字段、响应首部字段、实体首部字段")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("6、请求头部包含："),e("strong",[this._v("请求首部字段、通用首部字段、实体首部字段")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("7、响应头部包含："),e("strong",[this._v("响应首部字段、通用首部字段、实体首部字段")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:r(194),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-1-通用部首"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-通用部首","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.1 通用部首")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("首部")]),t._v(" "),r("th",[t._v("描述")])])]),t._v(" "),r("tbody",[r("tr",[r("td",[t._v("Cache-Control")]),t._v(" "),r("td",[t._v("控制缓存的行为,"),r("code",[t._v("Cache-Control: private, no-cache, no-store")])])]),t._v(" "),r("tr",[r("td",[t._v("Connection")]),t._v(" "),r("td",[t._v("客户端和服务器是否保持连接,"),r("code",[t._v("Connection: Keep-Alive")])])]),t._v(" "),r("tr",[r("td",[t._v("Date")]),t._v(" "),r("td",[t._v("创建报文的日期时间,"),r("code",[t._v("Date: Sun, 08 Sep 2019 16:44:37 GMT")])])]),t._v(" "),r("tr",[r("td",[t._v("Pragma")]),t._v(" "),r("td",[t._v("http1.1之前的版本历史遗留字段，报文指令，"),r("code",[t._v("Pragma: no-cache")]),t._v("对应"),r("code",[t._v("Cahche-Control: no-cache")])])]),t._v(" "),r("tr",[r("td",[t._v("Trailer")]),t._v(" "),r("td",[t._v("允许发送方在分块传输发送的消息后面添加额外的元信息，比如消息的完整性校验，消息的数字签名，或者消息经过处理之后的最终状态等。"),r("code",[t._v("Trailer: Expires")])])]),t._v(" "),r("tr",[r("td",[t._v("Transfer-Encoding")]),t._v(" "),r("td",[t._v("规定了传输报文主体采用的编码方式,"),r("code",[t._v("Transfer-Encoding: chunked")])])]),t._v(" "),r("tr",[r("td",[t._v("Upgrade")]),t._v(" "),r("td",[t._v("用于检测HTTP协议，是否可使用更高版本的协议,"),r("code",[t._v("Upgrade: TLS/1.0, HTTP/1.1")])])]),t._v(" "),r("tr",[r("td",[t._v("Via")]),t._v(" "),r("td",[t._v("显示了报文经过的中间节点（代理、网关）,"),r("code",[t._v("Via: 1.0 fred, 1.1 p.example.net")])])]),t._v(" "),r("tr",[r("td",[t._v("Warning")]),t._v(" "),r("td",[t._v("一般性的警告，告知在实体内容体中可能存在错误。"),r("code",[t._v("Warning: 199 Miscellaneous warning")])])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-2-请求首部"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-请求首部","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.2 请求首部")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("首部")]),this._v(" "),e("th",[this._v("描述")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Accept")]),this._v(" "),e("td",[this._v("指定服务器返回的文件类型, "),e("code",[this._v("Accept: text/plain")]),this._v(", HTTP/1.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Accept-Charset")]),this._v(" "),e("td",[this._v("列出用户代理支持的字符集,"),e("code",[this._v("Accept-Charset: utf-8")]),this._v(", HTTP/1.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Accept-Encoding")]),this._v(" "),e("td",[this._v("(接收端)可以接受的内容编码形式(所支持的压缩算法),"),e("code",[this._v("Accept-Encoding: gzip, deflate")]),this._v(", HTTP/1.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Accept-Language")]),this._v(" "),e("td",[this._v("列出用户代理期望的页面语言。"),e("code",[this._v("Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,en-US")]),this._v(",HTTP/1.1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("包含一个期望条件，表示服务器只有在满足此期望条件的情况下才能妥善地处理请求。"),e("code",[this._v("Expect: 100-continue")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("From")]),this._v(" "),e("td",[this._v("发起此请求的用户的邮件地址,"),e("code",[this._v("From: user@example.com")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Host")]),this._v(" "),e("td",[this._v("指明了服务器的域名（对于虚拟主机来说），以及（可选的）服务器监听的TCP端口号。"),e("code",[this._v("Host: en.wikipedia.org:80")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("If-Match")]),this._v(" "),e("td",[this._v("是资源的Etag，如果ETag和文档当前ETag匹配，就获取文档,"),e("code",[this._v('If-Match: "737060cd8c284d8af7ad3082f209582d"')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("If-Modified-Since")]),this._v(" "),e("td",[this._v("缓存字段，对应响应首部的"),e("code",[this._v("Last-Modified")]),this._v("字段，允许在对应的内容未被修改的情况下返回304未修改（ 304 Not Modified ）,"),e("code",[this._v("If-Modified-Since: Sat, 29 Oct 1994 19:43:31 GMT")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("If-None-Match")]),this._v(" "),e("td",[this._v("缓存字段，对应响应首部的"),e("code",[this._v("Etag")]),this._v(",允许在对应的内容未被修改的情况下返回304未修改（ 304 Not Modified ）,"),e("code",[this._v('If-None-Match: "737060cd8c284d8af7ad3082f209582d"')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("If-Range")]),this._v(" "),e("td",[this._v("如果该实体未被修改过，则向我发送我所缺少的那一个或多个部分；否则，发送整个新的实体,"),e("code",[this._v('If-Range: "737060cd8c284d8af7ad3082f209582d"')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("If-Unmodified-Since")]),this._v(" "),e("td",[this._v("只有当资源在指定的时间之后没有进行过修改的情况下，服务器才会返回请求的资源，"),e("code",[this._v("If-Unmodified-Since: Sat, 29 Oct 1994 19:43:31 GMT")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Max-Forwards")]),this._v(" "),e("td",[this._v("限制该消息可被代理及网关转发的次数。"),e("code",[this._v("Max-Forwards: 10")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Proxy-Authorization")]),this._v(" "),e("td",[this._v("用来向代理进行认证的认证信息。"),e("code",[this._v("Proxy-Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Range")]),this._v(" "),e("td",[this._v("Range对请求中的 Url 的原始获取方")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("当前请求页面的来源页面的地址，即表示当前页面是通过此来源页面里的链接进入的。"),e("code",[this._v("Referer: http://en.wikipedia.org/wiki/Main_Page")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("User-Agent")]),this._v(" "),e("td",[this._v("告诉服务器，创建请求的浏览器和用户代理名称等信息。"),e("code",[this._v("user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-3-响应首部字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-响应首部字段","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.3 响应首部字段")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("首部")]),this._v(" "),e("th",[this._v("描述")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("指定哪些网站可参与到跨来源资源共享过程中."),e("code",[this._v("Access-Control-Allow-Origin: *")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("用来告诉浏览器，服务器是否可以处理范围请求，字段的具体值用于定义范围请求的单位。"),e("code",[this._v("Accept-Ranges: bytes")]),this._v(":范围请求的单位是 bytes （字节）")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("协商缓存字段，对应请求头的"),e("code",[this._v("If-None-Match")]),this._v("表示当前资源文件的一个唯一标识(由服务器生成),"),e("code",[this._v('ETag: "737060cd8c284d8af7ad3082f209582d"')])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("需要将页面重新定向至的地址。一般在响应码为3xx的响应中才会有意义。"),e("code",[this._v("Location: /index.html")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Proxy-Authenticate")]),this._v(" "),e("td",[this._v("把代理服务器要求的认证信息发送给客户端,"),e("code",[this._v("Proxy-Authenticate: Basic")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("如果某个实体临时不可用，则，此协议头用来告知客户端日后重试。其值可以是一个特定的时间段(以秒为单位)或一个超文本传输协议日期。"),e("code",[this._v("Retry-After: Fri, 07 Nov 2014 23:59:59 GMT")]),this._v("，或者："),e("code",[this._v("Retry-After: 120")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Server")]),this._v(" "),e("td",[this._v("服务器应用软件名称和版本,"),e("code",[this._v("Server: Apache/2.4.1 (Unix)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("用来由服务器端向客户端发送 cookie,"),e("code",[this._v("Set-Cookie: UserID=JohnDoe; Max-Age=3600; Version=1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Vary")]),this._v(" "),e("td",[this._v("vary字段可以对缓存进行控制,当代理服务器接受到带有Vary字段的请求时，如果使用的Accept-Language字段相同，那么就直接从缓存中返回响应，如果不一致，就先从原服务器获取资源后，才能作为响应返回."),e("code",[this._v("Vary: *")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("表明在请求获取这个实体时应当使用的认证模式,"),e("code",[this._v("WWW-Authenticate: Basic")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_3-4-实体首部字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-实体首部字段","aria-hidden":"true"}},[this._v("#")]),this._v(" 3.4 实体首部字段")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("首部")]),this._v(" "),e("th",[this._v("描述")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("用于对特定媒体类型的数据进行压缩。当这个首部出现的时候，它的值表示消息主体进行了何种方式的内容编码转换。这个消息首部用来告知客户端应该怎样解码才能获取在 "),e("code",[this._v("Content-Type")]),this._v(" 中标示的媒体类型内容。"),e("code",[this._v("Content-Encoding: gzip")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("实体内容所使用的语言，"),e("code",[this._v("Content-Language: en-US")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Content-Length")]),this._v(" "),e("td",[this._v("回应消息体的长度，以 字节 （8位为一字节）为单位."),e("code",[this._v("Content-Length: 348")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("资源实际所处的位置,"),e("code",[this._v("Content-Location: /index.htm")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Content-MD5")]),this._v(" "),e("td",[this._v("客户端会将接受到的主体执行相同的MD5算法，然后与该字段比较,"),e("code",[this._v("Content-MD5: Q2hlY2sgSW50ZWdyaXR5IQ==")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Content-Range")]),this._v(" "),e("td",[this._v("这条部分消息是属于某条完整消息的哪个部分,"),e("code",[this._v("Content-Range: bytes 21010-47021/47022")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[this._v("Expires")]),this._v(" "),e("td",[this._v("强缓存字段，指定一个日期/时间，超过该时间则认为此回应已经过期，"),e("code",[this._v("Expires: Thu, 01 Dec 1994 16:00:00 GMT")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("协商缓存字段，实体最后一次修改时间。"),e("code",[this._v("Last-Modified: Tue, 15 Nov 1994 12:45:26 GMT")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_4-请求数据大小说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-请求数据大小说明","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 请求数据大小说明")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-1-请求行-uri"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-请求行-uri","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.1 请求行 URI")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("The HTTP protocol does not place any a priori limit on the length of a URI\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-1-1-浏览器限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-浏览器限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.1.1 浏览器限制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-1-2-服务器限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-服务器限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.1.2 服务器限制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("一般服务器没有专门针对URI的参数限制，但是由于URI是会包含在报文请求头中(request header)，所以对header的大小限制会对URI起作用，比如Nginx的"),e("code",[this._v("large_client_header_buffers")]),this._v("这个属性，它默认是4K。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这里"),e("code",[this._v("URI是包含在 request header中的")]),this._v("这句话其实是有问题的。URI 在HTTP 请求报文的请求行中(request line)，请求报文分request line、request header、request body三个部分(具体：https://www.ietf.org/rfc/rfc2616.txt，第4章和第5章)。但是使用的时候都默认将header中理解为包含request line。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-2-请求头部-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-请求头部-header","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.2 请求头部 header")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-2-1-浏览器限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-浏览器限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.2.1 浏览器限制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"_4-2-2-服务器限制"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-服务器限制","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.2.2 服务器限制")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("比如Nginx的"),e("code",[this._v("large_client_header_buffers")]),this._v("就限制了header的长度，也可以自己设置这个值。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("可能会影响的header的参数还有："),e("code",[this._v("client_header_buffer_size")]),this._v("、"),e("code",[this._v("client_header_timeout")]),this._v("，更多参考：http://wiki.nginx.org/HttpCoreModule")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-3-请求体-body"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-请求体-body","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.3 请求体 body")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("出于安全考虑，我们必须在服务器端对请求体大小进行限制，请求体长度的最大值的设置有多方面的因素，需要根据业务情况反复调优决定。考虑以下几方面因素：\n1、根据请求报文的大小，预估实际请求体的最大值；\n2、限制上传文件的大小，文件上传服务与业务操作服务分离；\n3、设置合理的超时时间，避免由于请求体太大导致线程被长时间占用；\n4、请求体设置不能太大，防止轻易被DDOS攻击；\n在Nginx中，"),e("code",[this._v("client_max_body_size")]),this._v("参数可以限制body大小，默认是1M。"),e("code",[this._v("client_body_timeout")]),this._v("参数用于当body太大，或者网络太差时，这个也有可能会影响请求的成功率。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"_4-3-http请求大小的影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-http请求大小的影响","aria-hidden":"true"}},[this._v("#")]),this._v(" 4.3 HTTP请求大小的影响")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("可能会遇到文件上传失败，那么大多是服务器请求大小设置没有设置好")]),this._v(" "),e("li",[this._v("文件上传大小是不是设置越大越好？答案必须是否定的，理由也是安全考虑。满足需求的大小限制就够了。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料","aria-hidden":"true"}},[this._v("#")]),this._v(" 参考资料")])}],s=r(0),i=Object(s.a)({},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("p"),t._m(0),r("p"),t._v(" "),r("p",[t._v("[TOC]")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),r("p",[t._v("HTTP报文是简单的格式化数据块，每个报文都包含一条来自客户端的请求，或者一条来自服务器的响应，由3个部分组成：")]),t._v(" "),t._m(4),t._v(" "),t._m(5),r("p",[t._v("起始行和首部是由行分隔的ASCII文本，主体是一个可选的数据块，可以是文本、二进制或者空。")]),t._v(" "),t._m(6),t._v(" "),r("p",[t._v("HTTP报文分为两类：")]),t._v(" "),r("p",[t._v("**请求报文：**从客户端向服务器发送的HTTP报文。")]),t._v(" "),r("p",[t._v("**响应报文：**从服务器向客户端发送的HTTP报文。")]),t._v(" "),t._m(7),t._v(" "),r("p",[t._v("请求报文由4部分组成：")]),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),r("p",[t._v("响应报文由4个部分组成：")]),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),r("p",[t._v("响应报文例子：")]),t._v(" "),t._m(14),t._m(15),t._v(" "),r("p",[t._v("首部也就是请求头和响应头内容。")]),t._v(" "),r("p",[t._v("1、首部用来说明客户端、服务器或报文主体的一些信息")]),t._v(" "),r("p",[t._v("2、首部可以有好几行，也可以没有")]),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),r("p",[t._v("通用首部字段是请求报文和响应报文都使用的字段。")]),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),r("p",[t._v("请求首部字段是客户端向服务器发送请求报文时，使用的首部字段。补充了请求的附加内容、客户端信息、响应内容相关优先级等信息。")]),t._v(" "),r("table",[t._m(25),t._v(" "),r("tbody",[t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Authorization",target:"_blank",rel:"noopener noreferrer"}},[t._v("Authorization"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("请求消息头含有服务器用于验证用户代理身份的凭证，通常会在服务器返回"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/401",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("401")]),r("OutboundLink")],1),t._v(" "),r("code",[t._v("Unauthorized")]),t._v(" 状态码以及"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/WWW-Authenticate",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("WWW-Authenticate")]),r("OutboundLink")],1),t._v(" 消息头之后在后续请求中发送此消息头。"),r("code",[t._v("Authorization: Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cookie",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cookie"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("含有先前由服务器通过 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Set-Cookie")]),r("OutboundLink")],1),t._v("  首部投放并存储到客户端的 "),r("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP cookies"),r("OutboundLink")],1),t._v("。"),r("code",[t._v("Cookie: PHPSESSID=298zf09hf012fh2; csrftoken=u32t4o3tb3gg43; _gat=1;")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Expect",target:"_blank",rel:"noopener noreferrer"}},[t._v("Expect"),r("OutboundLink")],1)]),t._v(" "),t._m(30)]),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),t._m(35),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Referer",target:"_blank",rel:"noopener noreferrer"}},[t._v("Referer"),r("OutboundLink")],1)]),t._v(" "),t._m(41)]),t._v(" "),t._m(42)])]),t._v(" "),t._m(43),t._v(" "),r("p",[t._v("从服务器端向客户端返回响应报文时使用的首部。补充了响应的附加内容，也会要求客户端附加额外的内容信息。")]),t._v(" "),r("table",[t._m(44),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Access_control_CORS",target:"_blank",rel:"noopener noreferrer"}},[t._v("Access-Control-Allow-Origin"),r("OutboundLink")],1)]),t._v(" "),t._m(45)]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Accept-Ranges",target:"_blank",rel:"noopener noreferrer"}},[t._v("Accept-Ranges"),r("OutboundLink")],1)]),t._v(" "),t._m(46)]),t._v(" "),r("tr",[r("td",[t._v("Age")]),t._v(" "),r("td",[t._v("告诉浏览器，服务器在多久之前创建了响应,Age消息头的值通常接近于0。表示此消息对象刚刚从原始服务器获取不久；其他的值则是表示代理服务器当前的系统时间与此应答消息中的通用消息头 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Date",target:"_blank",rel:"noopener noreferrer"}},[r("code",[t._v("Date")]),r("OutboundLink")],1),t._v(" 的值之差。"),r("code",[t._v("Age: 12")])])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/ETag",target:"_blank",rel:"noopener noreferrer"}},[t._v("ETag"),r("OutboundLink")],1)]),t._v(" "),t._m(47)]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Location",target:"_blank",rel:"noopener noreferrer"}},[t._v("Location"),r("OutboundLink")],1)]),t._v(" "),t._m(48)]),t._v(" "),t._m(49),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Retry-After",target:"_blank",rel:"noopener noreferrer"}},[t._v("Retry-After"),r("OutboundLink")],1)]),t._v(" "),t._m(50)]),t._v(" "),t._m(51),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Set-Cookie",target:"_blank",rel:"noopener noreferrer"}},[t._v("Set-Cookie"),r("OutboundLink")],1)]),t._v(" "),t._m(52)]),t._v(" "),t._m(53),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/WWW-Authenticate",target:"_blank",rel:"noopener noreferrer"}},[t._v("WWW-Authenticate"),r("OutboundLink")],1)]),t._v(" "),t._m(54)])])]),t._v(" "),t._m(55),t._v(" "),r("p",[t._v("针对http报文的实体部分使用的首部。补充了资源内容更新时间等与实体有关的信息。")]),t._v(" "),r("p",[t._v("在请求报文和响应报文中，都包含着实体相关信息的首部字段")]),t._v(" "),r("table",[t._m(56),t._v(" "),r("tbody",[r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Allow",target:"_blank",rel:"noopener noreferrer"}},[t._v("Allow"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("列出了服务器可用的请求方法，`Allow: GET, HEAD")])]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Encoding",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Encoding"),r("OutboundLink")],1)]),t._v(" "),t._m(57)]),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Language",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Language"),r("OutboundLink")],1)]),t._v(" "),t._m(58)]),t._v(" "),t._m(59),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Location",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Location"),r("OutboundLink")],1)]),t._v(" "),t._m(60)]),t._v(" "),t._m(61),t._v(" "),t._m(62),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Content-Type",target:"_blank",rel:"noopener noreferrer"}},[t._v("Content-Type"),r("OutboundLink")],1)]),t._v(" "),r("td",[t._v("实体主体内对象的媒体类型,指示资源的"),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types",target:"_blank",rel:"noopener noreferrer"}},[t._v("MIME类型"),r("OutboundLink")],1),t._v(","),r("code",[t._v("Content-Type: text/html; charset=utf-8")])])]),t._v(" "),t._m(63),t._v(" "),r("tr",[r("td",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Last-Modified",target:"_blank",rel:"noopener noreferrer"}},[t._v("Last-Modified"),r("OutboundLink")],1)]),t._v(" "),t._m(64)])])]),t._v(" "),t._m(65),t._v(" "),r("p",[t._v("HTTP报文每个部分都包含请求信息，那么每个请求部分是否都有大小限制呢？")]),t._v(" "),t._m(66),t._v(" "),r("p",[t._v("在GET请求中，请求参数是放在URL中进行传递的，所以，HTTP GET请求最关心的问题：URL能有多长？能放多杀个参数？")]),t._v(" "),r("p",[t._v("在HTTP 1.1 协议中("),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc2616",target:"_blank",rel:"noopener noreferrer"}},[t._v("RFC 2616"),r("OutboundLink")],1),t._v("):")]),t._v(" "),t._m(67),r("p",[t._v("通过查看文档，可以明确一点的是HTTP协议没有显式限制URI的长度，理论上在URI中传递多少参数都可以。但出于各种原因考虑，浏览器、服务器都对URI做了不同的的限制。")]),t._v(" "),t._m(68),t._v(" "),r("p",[t._v("所有主流浏览器都会对URI的长度进行限制。如果在浏览器中输入过长的URI，浏览器会自动进行截断。各个浏览器对URI长度的限制各不相同，甚至不同版本也不一样。大约一个概念，2000字符以内的URI都能符合所有主流浏览器的要求。")]),t._v(" "),t._m(69),t._v(" "),t._m(70),t._v(" "),t._m(71),t._v(" "),t._m(72),t._v(" "),r("p",[t._v("请求头部 header 的长度和URI一样，协议中并没有显式的限制大小。理论上在header中放多少属性都是可以的，但出于各种考虑，各家浏览器和服务都做了不同的限制。")]),t._v(" "),t._m(73),t._v(" "),r("p",[t._v("各个主流浏览器限制几十K到几百M不等的限制。基本上能满足平时的需求，如果这个长度对实际工作业务有很大影响的话，建议还是亲自测试一下。")]),t._v(" "),t._m(74),t._v(" "),t._m(75),t._v(" "),t._m(76),t._v(" "),t._m(77),t._v(" "),r("p",[t._v("HTTP支持文件传输，文件的二进制数据不会放在URI或header中，而放在了body里面，那么这个body的大小就一定不能默认限制太小，尤其是客户端。")]),t._v(" "),r("p",[t._v("理论上，协议没有对body大小做任何限制。")]),t._v(" "),r("p",[t._v("浏览器也没有对body做任何大小限制，因为如果浏览器做了大小限制就意味着它直接影响了你的服务功能。")]),t._v(" "),r("p",[t._v("所以对body的限制任务就放在了服务器上。")]),t._v(" "),t._m(78),t._v(" "),t._m(79),t._v(" "),r("p",[t._v("安全因素：")]),t._v(" "),r("p",[t._v("如果一个网站的服务器不限制body大小，那么它就可以被黑客利用攻击。黑客利用这一点向HTTP POST方法的body中传递非常大（比如几M)的请求。那么有的服务器会占用一个进程专门处理这个请求，就会导致拟对外无法提供其他的服务，你的服务器就瘫痪了，这就是DDOS攻击。")]),t._v(" "),r("p",[t._v("文件上传服务：")]),t._v(" "),r("p",[t._v("文件上传有两种情况：")]),t._v(" "),t._m(80),t._v(" "),r("p",[t._v("实际中，大都把文件上传和业务接口分开来提供。如果你的文件上传服务和业务接口是同一个机器的话，那么说明你的业务接口可以允许body大小一定是很大的。在这种情况下，你的业务中所有POST请求都是不安全的！！只要进行DDOS攻击，业务就会瘫痪。")]),t._v(" "),t._m(81),t._v(" "),r("p",[r("a",{attrs:{href:"https://zh.wikipedia.org/wiki/HTTP%E5%A4%B4%E5%AD%97%E6%AE%B5",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP头字段 维基百科"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP Headers MDN"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.jianshu.com/p/df5a055c4693",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP报文首部 简书"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.processon.com/view/link/58025201e4b0d6b27dd4c8af",target:"_blank",rel:"noopener noreferrer"}},[t._v("部首脑图"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://juejin.im/post/5d032b77e51d45777a126183",target:"_blank",rel:"noopener noreferrer"}},[t._v("可能是全网最全的http面试答案 掘金"),r("OutboundLink")],1)]),t._v(" "),r("p",[r("a",{attrs:{href:"https://www.cnblogs.com/yjf512/archive/2013/03/29/2988296.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("论HTTP请求大小"),r("OutboundLink")],1)])])},_,!1,null,null,null);i.options.__file="007-http报文和请求数据大小.md";e.default=i.exports}}]);