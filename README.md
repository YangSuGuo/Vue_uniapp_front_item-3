# Vue_uniapp_front_item-3
**vite+vue2** web前端

**uniapp** 小程序前端

## 后端仓库地址：https://github.com/YangSuGuo/Springboot_backend

### uniapp web双平台

1. 登录，微信登录？
2. MD文档支持
3. 代码高亮
4. uniapp写作（MD）+ 简单浏览【不支持分类 ，跟web端 保持差异】
5. 图片上传图床，链接存数据库(可选：手动上传)
6. web 分类阅读 + 简单管理 + 浏览量统计
7. 可选：RSS支持

### 平台差异：

* web 可以分类浏览，uniapp只能简单浏览
* web 不支持写作，uniapp支持
* web 不支持用户详情，uniapp支持
* web 公开，uniapp不公开

## 数据库结构

### 账号信息
```
create table article
(
    aid             int auto_increment
        primary key,
    writer          varchar(50)  null comment '写作人',
    Writingtime     mediumtext   null comment '写作时间',
    label           varchar(50)  null comment '标签',
    photo           varchar(100) null comment '头像',
    background      varchar(100) null comment '背景',
    pageview        int          null comment '浏览量',
    title           varchar(30)  null comment '文章标题',
    Articleoverview varchar(100) null comment '文章概述',
    text            longtext     null comment '文章正文'
)
    comment '文章信息'; 
```

### 文章信息
``` 
create table user
(
    id               int auto_increment comment 'ID'
        primary key,
    username         varchar(30)  null comment '用户名',
    cellphone        varchar(11)  null comment '手机号',
    email            varchar(30)  null comment '邮箱',
    openid           varchar(100) null comment '微信openid',
    u_random         varchar(20)  null comment '用户随机码',
    password         varchar(255) null comment '密码',
    nickname         varchar(20)  null comment '昵称',
    photo            varchar(255) null comment '头像',
    birthday         varchar(50)  null comment '生日',
    address          varchar(100) null comment '地址',
    age              int          null comment '年龄',
    introduction     varchar(300) null comment '个人简介',
    pageview         int          null comment '浏览量',
    Registrationtime varchar(50)  null comment '注册时间',
    gender           varchar(10)  null comment '性别'
)
    comment '用户信息'; 
```
## 功能

自用平台，不支持注册！！
