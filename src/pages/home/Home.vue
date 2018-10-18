<template>
  <div>
  	<home-head></home-head>	
  	<home-banner></home-banner>	
  </div>
</template>

<script>
import HomeHeader from "./components/Header"
import HomeBanner from "./components/Banner"
export default {
  name: 'Home',
  components:{
  	HomeHead:HomeHeader,
  	HomeBanner
  }
}
</script>

<style>
</style>
