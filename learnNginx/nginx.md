# nginx
### 优点
1. 高并发，高性能
2. 可扩展性好
3. 热部署
4. BSD许可证

### 组成
1. nginx二进制可执行文件
2. nginx.conf配置文件
3. access.log访问日志
4. error.log错误日志

### nginx常用命令
1. nginx -v 版本号
2. start nginx 启动nginx
3. nginx -s stop 关闭
4. nginx -s reload 重启
5. nginx -t nginx测试配置是否可用

### 反向代理
1. 正向代理
在客户端配置代理服务器,通过代理服务器进行互联网访问
2. 反向代理
客户端请求反向代理服务器,由反向代理服务器去选择目标服务器获取数据后,返回给客户端

### 负载均衡
将请求负载分发到不同的服务器上

### 动静分离
为了加快网站的解析速度,可以把动态页面和静态页面由不同的服务器来解析,加快解析速度,降低原来单个服务器的压力.

### nginx配置语法
1. 配置文件由指令和指令块构成
2. 每条指令以;分号结尾,指令与参数间以空格符号分隔
3. 指令块以{}括号将多条指令组织在一起
4. include语句允许组合多个配置文件已提升可维护性
5. 使用#符号添加注释,提高可读性
6. 使用$符号使用变量
7. 部分指令的参数支持正则表达式

### nginx配置
1. ##### 全局块
配置文件开始到events块之间的内容
- 运行nginx服务器的用户(组)
- 允许生成的worker process数
- 进程pid存放路径
- 日志存放路径/类型
- 配置文件的引入
- worker_process 1; 值越大可以支持的并发处理量越多
1. ##### events块
涉及的指令主要影响nginx服务器与用户的网络连接
- worker_connections  1024; 支持最大连接数
1. ##### http块
分为两部分
1. http全局块
- 文件引入
- MIME-TYPE定义
- 日志自定义
- 连接超时时间
- 单链接请求数上限

http块可以有多个server
```js
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;
```
1. server块
最常见的配置是本虚拟主机的监听配置和本虚拟主机的名称或ip配置
server块可以有多个location
```js
 server {
        listen       80;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        location ~ /a {
            root   html;
			proxy_pass http://127.0.0.1:8080;
            index  index.html index.htm;
        }
        location ~ /b {
            root   html;
			proxy_pass http://127.0.0.1:8081;
            index  index.html index.htm;
        }
		
        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
 }
```
```js
1. ~ 用于表示url包含正则表达式,并且区分大小写
2. ~* 用于表示url包含正则表达式,且不区分大小写
3. ^~ 用于表示不包含正则表达式
location ~ /b {
    root   html;
    proxy_pass http://127.0.0.1:8081;
    index  index.html index.htm;
}
```

