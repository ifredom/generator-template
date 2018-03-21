# ta-genarator for Vue

ta-genarator for Vue

## how to use ?

```bash
# cmd安装所需依赖
npm install

# 启动
npm run dev

# 打包成上线产品
npm run build

# 构建并运行查看npm包分析报告
npm run build --report

# 运行 unit 测试
npm run unit

# 运行 e2e 测试
npm run e2e

# 运行测试用例
npm test
```
----

### 开发环境

  1.node v6.9.4

  2.cnpm v4.5.0

  3.npm v3.10.10

### support browser

  IE 10+

  Andorid 4.1+

  IOS 7+

### UI开发环境系统构建（storybook）

``` bash

# 构建UI测试框架（参考文档 https://storybook.js.org/basics/guide-vue/）
npm i @storybook/vue --save-dev
npm i storybook-router --save-dev

# package.json
{
  "scripts": {
    "storybook": "start-storybook -p 6006 -c .storybook"
  }
}

# 添加配置文件支持别名@  .torybook/webpack.config.js

```

### project structure
    .
    -- build                            // 项目构建相关代码
    |   |-- build.js                     // 生产环境构建代码
    |   |-- check-version.js             // 检查 node、npm 等版本
    |   |-- dev-client.js                // 热重载相关
    |   |-- dev-server.js                // 构建本地服务器
    |   |-- utils.js                     // 构建工具相关
    |   |-- webpack.base.conf.js         // webpack 基础配置（出入口和 loader）
    |   |-- webpack.dev.conf.js          // webpack 开发环境配置
    |   |-- webpack.prod.conf.js         // webpack 生产环境配置
    |-- config                           // 项目开发环境配置
    |   |-- dev.env.js                   // 开发环境变量
    |   |-- index.js                     // 项目一些配置变量（开发环境接口转发将在此配置）
    |   |-- prod.env.js                  // 生产环境变量
    |   |-- test.env.js                  // 测试环境变量
    |-- myself                           // 平时的小练习
    |-- server_mock                      // 后台接口数据
    |   |-- router                       // 接口router管理
    |   |-- controller                   // 接口控制器
    |-- src                              // 源码目录
    |   |-- api                          // ajxa请求接口地址
    |   |-- components                   // vue 公共组件
    |   |-- page                         // 页面
    |   |-- image                        // 图片
    |   |-- style                        // CSS样式
    |   |-- router                       // 路由
    |   |-- vuex                         // vuex 的组件状态统一管理
    |   |-- App.vue                      // 页面入口文件
    |   |-- main.js                      // 程序入口文件，加载各种公共组件
    |-- static                           // 静态文件，比如一些图片，json数据等
    |-- test                             // 自动化测试相关文件
    |-- .babelrc                         // ES6语法编译配置
    |-- .editorconfig                    // 定义代码格式
    |-- .eslintignore                    // ESLint 检查忽略的文件
    |-- .eslistrc.js                     // ESLint 文件，eslint检测规则配置，如需更改，在此添加
    |-- .gitignore                       // git 上传需要忽略的文件
    |-- README.md                        // 项目说明
    |-- index.html                       // 入口页面
    |-- package.json                     // 项目基本信息
    .
