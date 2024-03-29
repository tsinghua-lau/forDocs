
::: info UDP 和 TCP 区别
UDP 是 User Data Protocol 用户数据包协议
TCP 是 Transimission Control Protocol 传输控制协议
他们都是位于传输层的协议，
:::



 **区别：**

1. TCP 是面向字节流 将应用层报文看成一串无结构的字节流，分解为多个 TCP 报文，在目的地重新组装。
   而 UDP 是面向报文的，不拆分报文，应用层一次传多少报文他就发多少报文。、

2. TCP 是面相连接的协议 建立连接要三次握手 断开连接要四次挥手
   而 UDP 是面向无连接，传输前后不建立连接，接收端从消息队列读取数据

3. TCP 提供可靠的服务（有很多的传输控制） 传输过程通过 流量控制、计时器、编号与确认 等手段确认无差错
   而 UDP 则尽可能的传递数据，但不保证传递交付给对方
   
4. TCP 传输效率低 UDP 传输效率高

**使用场景**

- TCP 适用于对传输效率要求低，对传输准确性要求高或者说要求有链接的场景 HTTP FTP SMTP

- UDP 适用于对传输效率要求高，对传输准确性要求低的场景 DNS

## CDN 

Content Delivery Network 内容分发网络
构建在现有网络基础之上的智能虚拟网络，依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、
调度等功能模块，使用用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。
CDN 的关键技术主要有内容存储和分发技术
**简单来讲，CDN 就是根据用户位置分配最近的资源**
用户在上网的时候不同直接访问源站，而是访问离他最近的一个 CDN 节点，属于叫边缘节点
**其实就是缓存了源站内容的代理服务器**

### 原理分析

- 在没有 CDN 时，我们使用域名访问某一个站点时的路径为

  - 用户提交域名 -> 浏览器对域名进行解释->DNS 解析得到目的主机的 IP 地址->根据 IP 地址访问发出请求->
    得到请求数据并回复

- 应用 CDN 后，DNS 返回的不再是 IP 地址，而是 CNAME 别名记录，指向 CDN 的负载均衡
  CNAME 实际上在域名解析的过程中承担了中间人的角色，这是 CDN 实现的关键

1. 负载均衡系统

   由于没有返回 IP 地址，于是本地 DNS 会向负载均衡系统再发送请求，
   则进入到 CDN 的全局负载均衡系统进行智能调度：

   1. 看用户的 IP 地址，查表得知地理位置，找相对最近的边缘节点

   2. 看用户所在的运营商网络，找相同网络的边缘节点

   3. 检查边缘节点的负载情况，找负载较轻的节点

   4. 其他，比如节点的“健康状况”、服务能力、带宽、响应时间等

      结合上面的因素，得到最合适的边缘节点，然后把这个节点返回给用户，用户就能够就近访问 CDN 的缓存代理

2. 缓存系统

   缓存系统是 CDN 的另一个关键组成部分，缓存系统会有选择地缓存那些最常用的那些资源

   - 命中率

   - 回源率

     缓存系统也可以划分出层次，分成一级缓存节点和二级缓存节点。一级缓存配置高一些，直连源站，二级缓存配置低一些，直连用户

     回源的时候二级缓存只找一级缓存，一级缓存没有才回源站，可以有效地减少真正的回源

     现在的商业 CDN 命中率都在 90% 以上，相当于把源站的服务能力放大了 10 倍以上

### 总结

CDN Content Deliver Network 内容分发系统

目的是为了提高访问资源的速度

CDN 构建了全国全球级别的的专网，让用户就近访问边缘节点，降低了传输延迟，实现了网站加速

通过 CDN 的负载均衡系统，智能调度边缘节点提供服务，相当于 CDN 服务的大脑，

而缓存系统相当于 CDN 的心脏，缓存命中直接返回给用户，否则回源

## 网络很慢如何排查

1. 查看网络是否正常 （网络测速软件）

2. 网络带宽是否被占用  （例如下载电影时并且没有限速）原因处理器内存小

3. 对网站服务器速度进行排查  ping 丢包率不能超过1%，ping 值要小，ping 值要稳定，如最大和最小差值过大说明路由不稳定。或者也可以查看同台服务器上其他网站的打开速度，看是否其他网站打开也慢。

4. 如果网页打开的速度时快时慢，甚至有时候打不开，有可能是空间不稳定的原因。当确定是该问题时，就要找你的空间商解决或换空间商了，如果购买空间的话，可选择购买购买双线空间或多线空间；如果是在有的地方打开速度快，有的地方打开速度慢，那应该是网络线路的问题。电信线路用户访问放在联通服务器的网站，联通线路用户访问放在电信服务器上的网站，相对来说打开速度肯定是比较慢。

5. 从网站本身找原因。网站的问题主要包括网站程序设计、网页设计结构和网页内容三个部分。 

  - 网站程序设计：当访问网页中有拖慢网站打开速度的代码，会影响网页的打开速度，例如网页中的统计代码，我们最好将其放在网站的末尾。因此我们需要查看网页程序的设计结构是否合理；

  - 网页设计结构：如果是 table 布局的网站，查看是否嵌套次数太多，或是一个大表格分成多个表格这样的网页布局，此时我们可以采用 div 布局并配合 css 进行优化。
  
  - 网页内容：查看网页中是否有许多尺寸大的图片或者尺寸大的 flash 存在，我们可以通过降低图片质量，减小图片尺寸，少用大型 flash 加以解决。此外，有的网页可能过多地引用了其他网站的内容，若某些被引用的网站访问速度慢，或者一些页面已经不存在了，打开的速度也会变慢。一种直接的解决方法是去除不必要的加载项。



