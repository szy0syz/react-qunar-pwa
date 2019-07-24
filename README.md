# react-qunar-pwa

## 第一章 课程介绍

* Hooks
  * constructor
  * this.setState
  * componentDidMount
  * render

* 职责分离
  * 两耳不闻窗外事
  * 模块解耦
  * 优化可维护性    

## 第三章 项目搭建

### react的新特性

* Context
* ContextType
* lazy
* suspense
* memo

#### Context

> Context提供一种方式能够让数据在组件树中穿透传递而不必一级一级的手动传递。


#### React的本质

* React其实就是将数据转化为视图的一个桥梁，且视图一定会和对应的数据保持同步。
* 比如数据是 `{ data: 1 }`，那么视图就是 `<span>1</span>`
* 再比如数据是2，视图还是1，那么就存在逻辑bug了

#### Memo

> 推论：在React中，拆分得越细的组件，传入的属性越简单，那么使用 Memo或PureComponent 的机会则越多。

> 思考：React的 PureComponent 和 React.memo 对属性的比较差异？undefined算相等吗？

> 回答：当 React.memo 只是用第一个参数时，React.memo 和 PureComponent 表现是相同的。而 React.memo 的第二个参数接收一个函数 function (preProps, > > > newProps ) { }，只不过返回 true 时不执行渲染，可以理解为是一个shouldComponentNotUpdate生命周期。preCompoent 和 newProps的某个属性都是undefined时，表示相等，不执行渲染。

## 第四章 Hooks

> 什么是hooks？ Hooks let you use state and other React features without writing a class.

### 类组件的不足

* 状态逻辑复用难
  * 缺少复用机制
  * 渲染属性和高阶组件导致层级冗余
* 趋于复杂难以维护
  * 生命周期函数混杂不相干逻辑
  * 相干的逻辑分散在不同生命周期

### Effect Hooks

#### 副作用

* 绑定事件
* 网络请求
* 访问DOM

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
