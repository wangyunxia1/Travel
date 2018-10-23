<template>
	<div class="wrapper">
	  <swiper :options="swiperOption" ref="mySwiper" v-if="showSwiper">
	    <!-- slides -->
	    <swiper-slide v-for="item of list" :key='item.id'>
	    	<img class="swiper-img" :src="item.imgUrl" alt="">
	    </swiper-slide>
	   
	    <!-- Optional controls -->
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props:{
  	list:Array
  },
  data (){
  	return {
  		swiperOption:{
          pagination:'.swiper-pagination',
          loop:true
  		},
  	}
  },
  computed:{
  	showSwiper (){
  		return this.list.length
  	}
  }
}
</script>

<style scoped>
	.wrapper >>>.swiper-pagination-bullet-active{background-color: #fff;}/*穿透*/
	.wrapper{width: 100%;height: 0;overflow: hidden;padding-bottom: 26.67%;background-color: #ccc;}
	.swiper-img{width: 100%}

</style>