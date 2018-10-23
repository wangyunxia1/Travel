<template>
  <div class="icons">
  	 	<swiper :options="swiperOption"  ref="mySwiper" v-if="list.length">
				<swiper-slide v-for="(page,index) of pages" :key="index">
			  	<div class="icon" v-for="item of page" :key="item.id">
			  		<div class="icon-img">
			  			<img :src="item.iconUrl" alt="">
			  		</div>
			  		<p>{{item.iconText}}</p>
			  	</div>
			  </swiper-slide>	
			  <div class="swiper-pagination"  slot="pagination"></div>
  	 	</swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  props:{
  	list:Array
  },
  data (){
    return {
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true,
        autoplay:false
      },
  	}
  },
	computed:{
		pages(){
			const pages=[]
			this.list.forEach((item,index)=>{
				const page=Math.floor(index/8)
				if(!pages[page]){
					pages[page]=[]
				}
				pages[page].push(item)
			})
			return pages
		}
	}
  }
</script>

<style scoped>
	.icons>>>.swiper-container{
		height: 0;
		overflow: hidden;
		padding-bottom: 60%;
		width: 100%;
	}
	.icon{
		float: left;
		width: 25%;
		overflow: hidden;
		padding-bottom: 25%;
		height: 0;
		text-align: center;
	}
	.icon .icon-img img{
		width: 80%;
	}
	.icon p{
		font-size: .2rem;
		color: #333;
	}

</style>