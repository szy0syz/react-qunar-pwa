# react-qunar-pwa

## 第6章 PWA

### PWA组成

* Server Worker
* Promise
* fetch
* cache API
* Notification API

### Server Worker

* 服务器线程
* 常驻内存
* 代理网络请求
* 依赖HTTPS

### Fetch

* 比ajax更简洁
* Promise风格

### cache API

> 支持资源的缓存雄

* 缓存资源 (css/script/image)
* 依赖Server Worker代理网络请求
* 支持离线程序运行

### Notification API

* 依赖用户授权

### Promise

```js
// 不推荐，因为close仅能再最后一次then生效无法捕获之前的异常
open(filename).then(handler1).then(handler2).then(close, close)

//  推荐写法，无论如何都能close
open(filename).then(handler1).then(handler2).finally(close)
```

## 第7章

### 项目工程初始化

* 安装依赖
  * `yarn add redux react-redux react-thunk normalize.css`
* 本节里对webpack进行了拆分，分别将页面打包成独立的query.html、index.html、order.html
  * 打开配置 `npm run eject`
  * 新增 `webpack` 配置 `path.js` 里的路径变量。分别新增query、order等的输入输出变量
  * 修改 `webpack.config.js` 的 `entry` 入口点，也是分别加入各个独立页面组件，为了性能，手动加 `webpackHotDevClient`
  * 然后再修改 `HtmlWebpackPlugin` 有几个页面就实例化几个该插件

## 第8章

* 异步加载数据对于React组件来说，是一种典型的副作用，要使用副作用就要使用 useEffects。
* 在React中对于具有纯粹的输入组件，一般都需要用useMomo优化重渲染性能，在CitySelector组件中的子组件都可以优化。

> 什么时候考虑使用 memo 优化函数组件？

当一个组件的输入或者函数内部有非参数的外部引用，如 Date.now()，如果组件内部有这样的引用，当组件存在跨越零点是就会引发问题，那如何规避呢，那就把时间戳从外部由props传入。

## 第9章

### 任务拆解

* React视觉组件的拆分
* redux store 状态设计
* redux action / reducer 设计

> 我们先不着急编写组件视图代码，先去APP中把要用到的数据和数据流都取出来，提供给对应的组件。
> 基于重渲染的考量，在绝大多数情况下，如果有循环数组下的jsx，都应该提取到独立的组件中去，所以我们还得创建一个密度更小的组件。
> 因为 toggle 是向下级组件传递的函数，应该使用useCallba包裹起来优化性能
