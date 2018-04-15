// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import elementUI from 'element-ui'
import VueResource from 'vue-resource'
import jsonp from 'vue-jsonp'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/base.css'

Vue.config.productionTip = false

Vue.use(elementUI)
Vue.use(VueResource)
Vue.use(jsonp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
