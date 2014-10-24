web
===

Linux node 的安装：

1， tar xvf node-v0.10.28.tar.gz。

2， cd node-v0.10.28-linux-x64/bin

3， ln -s /home/kun/mysofltware/node-v0.10.28-linux-x64/bin/node /usr/local/bin/node

    ln -s /home/kun/mysofltware/node-v0.10.28-linux-x64/bin/npm /usr/local/bin/npm
    
    

查看TCP端口情况：
netstat -anpt | grep :端口号
如果是127.0.0.1：端口号    则表示只有本地访问才可，这时候需要再转化

建立任意端口转化
ssh -D 端口号 user@server.ip
ssh -CNfg -L



查看并杀死node进程

# 查看node进程，PID=18299  
~ ps -aux|grep node

conan    18296  0.0  1.1 597696 23776 ?        Ssl  15:48   0:00 /usr/local/bin/node /usr/local/lib/node_modules/forever/bin/monitor app.js
conan    18299  0.0  0.8 630340 18392 ?        Sl   15:48   0:00 /usr/local/bin/node /home/conan/nodejs/nodejs-forever/app.js
conan    18315  0.0  0.0  13584   956 pts/5    R+   15:52   0:00 grep --color=auto node

# 杀死PID=19299
~ kill -9 18299

# 再看node进程，node自动重启，新的PID=18324  
~ ps -aux|grep node

conan    18296  0.0  1.1 597696 23916 ?        Ssl  15:48   0:00 /usr/local/bin/node /usr/local/lib/node_modules/forever/bin/monitor app.js
conan    18316  2.6  0.8 630340 18412 ?        Sl   15:52   0:00 /usr/local/bin/node /home/conan/nodejs/nodejs-forever/app.js
conan    18324  0.0  0.0  13584   956 pts/5    R+   15:52   0:00 grep --color=auto node
