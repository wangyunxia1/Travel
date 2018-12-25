<template>
	<div class="container" @click='handleGallaryClick'>
		<div class="wrapper">
			<swiper :options="swiperOption"  >
				<swiper-slide  v-for='(item,index) in imgs' :key='index'>
			  		<div class="gallary-img">
			  			<img :src="item" alt="">
			  		</div>
			  </swiper-slide>	
			  
			  <div class="swiper-pagination"  slot="pagination"></div>
  	 	</swiper>
		</div>
	</div>
</template>

<script>
	export default {
	  name:'CommonGallary',
	  props:{
	  	imgs:{
	  		type:Array,
	  		default (){
	  			return []
	  		}
	  	}
	  },
	  data (){
	    return {
	      swiperOption:{
	        pagination:'.swiper-pagination',
	        paginationType : 'fraction',
	        observer:true,
	        observeParents :true, //将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新


	      },
	     
	  	}
	  },
	  methods:{
	  	handleGallaryClick(){
	  		this.$emit('close')  //触发一个事件，事件的名字是close,给父级调用
	  	}
	  }
	}
</script>


<style scoped>
	 .swiper-container{
		overflow:inherit
	}
	.container{
		background:#000;
		position:fixed;
		top:0;
		bottom:0;
		left:0;
		right:0;
		z-index: 1;
		display:flex;
		flex-direction: column;
    justify-content: center;
	}
	.wrapper{
		background:#fff;
		width:100%;
		height:0;
		padding-bottom:68.57%
	}
	.gallary-img img{
		width:100%
	}
	.swiper-pagination{
		color:#fff;
		bottom:-1rem;
		overflow:inherit
	}
</style>