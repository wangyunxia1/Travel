<template>
  <div class="icons">
  	 	<swiper  ref="mySwiper" >
				<swiper-slide v-for="(page,index) of pages" :key="index">
			  	<div class="icon" v-for="item of page" :key="item.id">
			  		<div class="icon-img">
			  			<img :src="item.iconUrl" alt="">
			  		</div>
			  		<p>{{item.iconText}}</p>
			  	</div>
			  </swiper-slide>	
			  
  	 	</swiper>
  </div>
</template>

<script>

export default {
  name: 'HomeIcons',
  data (){
  	return {


  		iconList:[
  			{
  				id:"0001",
	  			iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
	  			iconText:"景点门票"
  			},
  			{
  				id:"0002",
	  			iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
	  			iconText:"本地玩乐"
  			},
  			{
  				id:"0003",
	  			iconUrl:"https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
	  			iconText:"公园"
  			},
  			{
  				id:"0004",
	  			iconUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
	  			iconText:"一日游"
  			},
  			{
  				id:"0005",
	  			iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
	  			iconText:"打卡圣地"
  			},
  			{
  				id:"0006",
	  			iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png",
	  			iconText:"赏秋色"
  			},
  			{
  				id:"0007",
	  			iconUrl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
	  			iconText:"动植物园"
  			},
  			{
  				id:"0008",
	  			iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png",
	  			iconText:"打卡圣地"
  			},
  			{
  				id:"0009",
	  			iconUrl:"http://img1.qunarzz.com/piao/fusion/1803/ea/01d081dacb03cc02.png",
	  			iconText:"赏秋色"
  			},
  		]
  	}
  	},
  	computed:{
  		pages(){
  			const pages=[]
  			this.iconList.forEach((item,index)=>{
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
		padding-bottom: 50%;
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