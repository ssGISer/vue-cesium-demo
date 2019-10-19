import Vue from 'vue'
// 引入Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

// 引入组件
import App from './App.vue'
import router from './router'
import store from './store'

// 设置Element UI的语言为En
Vue.use(ElementUI, {locale})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
