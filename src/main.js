// 这个js文件是主页面配置的主入口。主要是利用es6的模块化引入模块。

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
