import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)


export default new Vuex.Store({
	// state:{
	// 	city:'合肥'
	// },
	state,
	// actions:{
	// 	changeCities(ctx,city){
	// 		ctx.commit("changeCities",city)
	// 		console.log(city)
	// 	}
	// },
	mutations,
	// mutations:{
	// 	changeCities(state,city){
	// 		state.city=city
	// 	}
	// }
	// getters类似computed
	// getters:{
	// 	doubleCity(state){
	// 		return state.city + " " + state.city
	// 	}
	// }
})