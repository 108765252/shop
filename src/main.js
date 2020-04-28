import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/assets/css/reset.css'
import '@/assets/js/rem.js'

// 全部引入Vant
// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

// 按需引入Vant
import {Button,Icon,NavBar,Tabbar,TabbarItem,Swipe,SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem).use(Button).use(Icon).use(NavBar).use(Tabbar).use(TabbarItem);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App) //渲染
}).$mount('#app') //调用public下index.html里的滴id="app"
