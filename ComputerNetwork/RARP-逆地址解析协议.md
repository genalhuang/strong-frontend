## RARP协议的作用
RARP是被那些没有磁盘驱动器的系统使用（一般是无盘工作站或X终端），它需要系统管理员进行手工设置。
网络上的每个系统都具有唯一的硬件地址，它是由网络接口生产厂家配置的。无盘系统的RARP实现过程是从接口卡上读取唯一的硬件地址，然后发送一份RARP请求（一帧在网络上广播的数据），请求某个主机响应该无盘系统的IP地址（在RARP应答中）。

## RARP的分组格式
RARP分组的格式与ARP分组基本一致。RARP请求以广播方式传送，而RARP应答一般是单播(unicast)传送的。