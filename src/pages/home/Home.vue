<template>
  <div>
  	<home-head></home-head>	
  	<home-swiper></home-swiper>	
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeSwiper from "./components/Swiper"
export default {
  name: 'Home',
  components:{
  	HomeHead:HomeHeader,
  	HomeSwiper
  }
}
</script>

<style>
</style>
