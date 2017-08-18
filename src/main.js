import Vue from 'vue'
import App from './App'
import Router from 'vue-router'

import Home from './components/home.vue'
import Fenlei from './components/fenlei.vue'
import Shop from './components/shop.vue'
import About from './components/about.vue'
Vue.config.productionTip = false

Vue.use(Router)

const routes=[{path:'/',redirect:'/home'},
              {path:'/home',component:Home},
              {path:'/fenlei',component:Fenlei},
              {path:'/shop',component:Shop},
              {path:'/about',component:About}]
const router=new Router({
    routes
});
new Vue({
	el:"#app",
	router,
	render:h=>h(App)
})
