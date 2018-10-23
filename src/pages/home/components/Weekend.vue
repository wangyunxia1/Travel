<template>
  <div>
    <div class="title">周末去哪儿</div>
	<ul>
		<li class="item" v-for="item of recommendList" :key="item.id">
			<div class="item-img-wrapper">
			 <img class="item-img" :src="item.imgUrl"/>
			</div>
			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
			</div>
		</li>
	</ul>
    </div>
		
  </div>

</template>

<script>
  export default{
  	name:'HomeWeekend',
  	data () {
  		return {
  			recommendList:[
  			   {
  			   	id:"0001",
				imgUrl:"http://img1.qunarzz.com/sight/source/1509/10/7178b2486daaa8.jpg_r_640x214_9d95e151.jpg",
  			   	title:"合肥万达乐园",
  			   	desc:"海洋动物"
  			   },
  			   {
  			   	id:"0002",
  			   	imgUrl:"http://img1.qunarzz.com/sight/source/1505/8b/c2fd277d149df.jpg_r_640x214_81b57b6a.jpg",
  			   	title:"合肥水族馆",
  			   	desc:"海洋动物"
  			   },
  			   {
  			   	id:"0003",
  			   	imgUrl:"http://img1.qunarzz.com/sight/p0/201302/07/f01c7c672bf4ac39c8d65eac.jpg_200x200_56798fd8.jpg",
  			   	title:"合肥水族馆",
  			   	desc:"海洋动物"
  			   },
  			   {
  			   	id:"0004",
  			   	imgUrl:"http://img1.qunarzz.com/sight/source/1505/94/23202a6a5864d8.jpg_r_640x214_92f21625.jpg",
  			   	title:"合肥水族馆",
  			   	desc:"海洋动物"
  			   },
  			]
  		}
  	}
  }
</script>

<style lang="stylus" scoped>
  .title{
  	line-height: 0.8rem;
  	background: #eee;
  	padding-left: 0.2rem;
  	font-size: 0.32rem;
  }
  .item{
  	/*display: flex;*/
  	/*height: 1.9rem;*/
  }
  .item-img-wrapper{
  	height: 0;
  	padding-bottom:33.5% ;
  	overflow: hidden;
  }
  .item-img{
  	width: 100%;
  }
  .item-info{
  	margin: 0.2rem;
  	/*min-width: 0;*/
  }
  .item-title{
  	font-size: .32rem;
  	line-height: 0.5rem;
  	margin-top: 0.2rem;
  	overflow: hidden;
  	white-space: nowrap;
  	text-overflow: ellipsis; 
  }
  .item-desc{
  	line-height: 0.4rem;
  	overflow: hidden;
  	white-space: nowrap;
  	text-overflow: ellipsis;
  }
 
  
</style>