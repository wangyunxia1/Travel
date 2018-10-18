<template>
	<div class="wrapper">
	  <swiper :options="swiperOption" ref="mySwiper" >
	    <!-- slides -->
	    <swiper-slide v-for="item of swiperList" :key='item.id'>
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
  data (){
  	return {
  		swiperOption:{
        pagination:'.swiper-pagination',
        loop:true
  		},
  		swiperList:[{
  			id:'0001',
  			imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/c6/2467595fffc3b302.jpg_750x200_cca13d51.jpg'
  		},{
  			id:'0002',
  			imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/86/deb33800de224c02.jpg_750x200_74fb795e.jpg'
  		},{
  			id:'0003',
  			imgUrl:'http://img1.qunarzz.com/piao/fusion/1809/ff/1bf7d3a4f6591002.jpg_750x200_40809f2a.jpg'
  		}]

  	}
  }
}
</script>

<style scoped>
	.wrapper >>>.swiper-pagination-bullet-active{background-color: #fff;}/*穿透*/
	.wrapper{width: 100%;height: 0;overflow: hidden;padding-bottom: 26.67%;background-color: #ccc;}
	.swiper-img{width: 100%}

</style>