<template>
  <div>
  	<home-head></home-head>	
  	<home-swiper></home-swiper>	
  	<home-icons></home-icons>	
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
import HomeIcons from "./components/Icons"
export default {
  name: 'Home',
  components:{
  	HomeHead:HomeHeader,
  	HomeSwiper,
  	HomeIcons,
  }
}
</script>

<style>
</style>
