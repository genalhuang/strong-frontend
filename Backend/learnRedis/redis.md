## string字符串
### 基本操作
SET runoob "菜鸟教程"
GET runoob

## hash哈希
### 基本操作
HMSET runoob field1 "Hello" field2 "World"
HGET runoob field1
>"Hello"
HGET runoob field2
>"world"

## list列表(简单的字符串列表)
### 基本操作
lpush runoob redis
>(integer) 1
lpush runoob mongodb
>(integer) 2
lrange runoob 0 10
>1) "mongodb"
>2) "redis"

## Set（无序号集合）

## zset(sorted set：有序集合)