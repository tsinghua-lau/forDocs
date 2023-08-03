import{_ as a,o as e,c as t,R as l}from"./chunks/framework.d95bcf44.js";const H=JSON.parse('{"title":"HTTP 和 HTTPS","description":"","frontmatter":{},"headers":[],"relativePath":"studyCn/Network/HTTPHTTPS.md"}'),T={name:"studyCn/Network/HTTPHTTPS.md"},i=l('<h1 id="http-和-https" tabindex="-1">HTTP 和 HTTPS <a class="header-anchor" href="#http-和-https" aria-label="Permalink to &quot;HTTP 和 HTTPS&quot;">​</a></h1><h1 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-label="Permalink to &quot;HTTP&quot;">​</a></h1><p>HTTP 即超文本传输协议，主要用于 Web 上传输超媒体文本的底层协议，经常在浏览器和服务器之间传递数据。通信就是以纯文本的形式进行。</p><h2 id="特点" tabindex="-1">特点 <a class="header-anchor" href="#特点" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li><p><code>无连接</code>：每一次请求都要连接一次，请求结束就会断掉，不会保持连接</p></li><li><p><code>无状态</code>：每一次请求都是独立的，服务器不会去记忆 HTTP 的状态，所以不需要额外的资源来记录状态信息，从而减少了网络开销。这既是优点也是缺点。</p></li><li><p><code>灵活易于扩展</code>：HTTP 协议中的各种请求方法、URI / URL、状态码、头字段等每个组成都是可以由开发人员自定义和扩充的。</p></li><li><p><code>简单快速</code>：基本报文的格式为 header + body，头部信息也是键值对的文本形式，易于理解。当发送请求访问某个资源时，只需传送请求方法和 URL 就可以了，使用简单。正由于http协议简单，使得http服务器的程序规模小，因而通信速度很快</p></li></ul><h2 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><ul><li><p><code>无状态</code>：服务器不会记忆 HTTP 的状态，所以不需要申请额外的资源，能够减轻服务器的负担。但是也就无法区分多个请求发起者身份是不是同一个客户端的，意味着如果后续处理需要前面的信息，则它必须重传，这样可能导致每次连接传送的数据量增大。</p></li><li><p><code>明文传输</code>：传输的报文 (header部分) 是肉眼可见的，直接将信息暴露给了外界。</p></li><li><p><code>不安全</code>：明文传输可能被窃听不安全，缺少身份认证可能遭遇伪装，缺少报文完整性验证可能遭到篡改。</p></li></ul><h1 id="https" tabindex="-1">HTTPS <a class="header-anchor" href="#https" aria-label="Permalink to &quot;HTTPS&quot;">​</a></h1><p>HTTPS 在 HTTP 的基础上添加了 <code>SSL / TLS</code> 安全传输协议，使得报文能够加密传输。</p><p>HTTPS 在 TCP 三次握手之后，还需要进行 SSL /TLS 的握手过程，才可进入加密报文传输。</p><h2 id="特点-1" tabindex="-1">特点 <a class="header-anchor" href="#特点-1" aria-label="Permalink to &quot;特点&quot;">​</a></h2><ul><li><p>信息加密：浏览器和服务器之间交互的信息无法被窃取。</p></li><li><p>校验机制：无法篡改通信的内容，因为一旦被篡改就不能正常显示。</p></li><li><p>身份证书：提供当前报文完整性的证明。</p></li></ul><h2 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-label="Permalink to &quot;优点&quot;">​</a></h2><ul><li><p>在数据传输过程中，使用密钥加密，安全性更高。</p></li><li><p>能够认证用户和服务器，确保数据发送到正确的用户和服务器。</p></li></ul><h2 id="缺点-1" tabindex="-1">缺点 <a class="header-anchor" href="#缺点-1" aria-label="Permalink to &quot;缺点&quot;">​</a></h2><ul><li><p>在 TCP 三次握手后，还需要进行 SSL/TLS 握手，导致握手阶段延迟提高。</p></li><li><p>需要进行加解密计算，占用 CPU 资源，从而导致计算成本提高。</p></li><li><p>需要购买 SSL 证书，功能越强大，证书价格越贵，导致部署成本升高。</p></li></ul><h1 id="http-和-https-区别" tabindex="-1">HTTP 和 HTTPS 区别 <a class="header-anchor" href="#http-和-https-区别" aria-label="Permalink to &quot;HTTP 和 HTTPS 区别&quot;">​</a></h1><ol><li><p>HTTPS 是 HTTP 协议的安全版本，HTTP 协议的数据传输是明文的，是不安全的，HTTPS 使用了 SSL/TLS 协议进行了加密处理，相对更安全。</p></li><li><p>HTTP 和 HTTPS 使用连接方式不同，默认端口也不一样，HTTP是 80，HTTPS 是443。</p></li><li><p>HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP</p></li></ol>',18),o=[i];function r(p,h,d,c,P,n){return e(),t("div",null,o)}const S=a(T,[["render",r]]);export{H as __pageData,S as default};