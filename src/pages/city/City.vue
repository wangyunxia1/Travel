<template>
	<div>
		<city-header></city-header>
		<city-search></city-search>
		<city-list :cities = "allCities" :hot="hotCities"></city-list>
		<city-alphabet :alphabet = "allCities"></city-alphabet>
	</div>
</template>

<script>
	import axios from "axios"
	import CityHeader from "./components/Header"
	import CitySearch from "./components/Search"
	import CityList from "./components/List"
	import CityAlphabet from "./components/Alphabet"

	export default {
		name:'CIty',
		components:{
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data(){
			return {
				allCities:{},
			  hotCities:[]    
			}
		},
		methods:{
			getCityData(){
				axios.get("/api/city.json").then(this.getCityDataSucc)
			},
			getCityDataSucc(res){
				 res = res.data
				if(res.ret && res.data){
					const data = res.data
					this.allCities = data.cities
					this.hotCities = data.hotCities
				}
			}
		},
		mounted () {
			this.getCityData()
		}
  }
</script>

<style scoped>
	
</style>
