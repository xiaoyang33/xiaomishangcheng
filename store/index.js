import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart.js'
import path from './modules/path.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		aaa:'aaaaa'
	},
	modules:{
		cart,
		path
	},
	
})
export default store