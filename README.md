# react-qunar-pwa

## 第7章

### 项目工程初始化

* 安装依赖
  * `yarn add redux react-redux react-thunk normalize.css`
* 本节里对webpack进行了拆分，分别将页面打包成独立的query.html、index.html、order.html
  * 打开配置 `npm run eject`
  * 新增 `webpack` 配置 `path.js` 里的路径变量。分别新增query、order等的输入输出变量
  * 修改 `webpack.config.js` 的 `entry` 入口点，也是分别加入各个独立页面组件，为了性能，手动加 `webpackHotDevClient`
  * 然后再修改 `HtmlWebpackPlugin` 有几个页面就实例化几个该插件