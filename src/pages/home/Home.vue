<template>
  <div>
  	<home-header></home-header>	
  	<home-swiper :list="swiperList"></home-swiper>	
  	<home-icons  :list="iconList"></home-icons>	
  	<home-recommend :list = "recommendList"></home-recommend>
  	<home-weekend :list ="weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons from "./components/Icons"
import HomeRecommend from "./components/Recommend"
import HomeWeekend from "./components/Weekend"
import axios from "axios"
export default {
  name: 'Home',
  components:{
  	HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  	HomeRecommend,
  	HomeWeekend
  },
  data (){
  	return {
  		swiperList:[],
  		iconList:[],
  		recommendList:[],
  		weekendList:[]
  	}
  },
	methods:{
  	getHomeData(){
  		axios.get("/api/homeData.json").then(this.getHomeDataSucc)
  	},
  	getHomeDataSucc (res){
  		let that = this
		  res = res.data
			if(res.ret && res.data){  
			  const data = res.data
			  that.swiperList = data.swiperList
			  that.iconList = data.iconList
			  that.recommendList = data.recommendList
			  that.weekendList = data.weekendList
			  
			}

  	}
  },
  mounted (){
  	this.getHomeData()
  }
}
</script>

<style>
</style>
