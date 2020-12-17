import Vue from 'vue'
import App from './App'
import store from './store/index.js'
Vue.config.productionTip = false
import uView from 'uview-ui';
Vue.use(uView);
// 引入全局组件Divider分割线组件
import Divder from 'components/common/Divider.vue'
import Loading from 'components/common/loading.vue'
Vue.component('Divider',Divder)
Vue.component('Loading',Loading)
App.mpType = 'app'

const app = new Vue({
		store,
    ...App
})
app.$mount()
