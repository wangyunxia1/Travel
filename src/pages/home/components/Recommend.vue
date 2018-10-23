<template>
  <div>
    <div class="title">热销推荐</div>
	<ul>
		<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
			<img class="item-img" :src="item.imgUrl"/>
			<div class="item-info">
				<p class="item-title">{{item.title}}</p>
				<p class="item-desc">{{item.desc}}</p>
				<button class="item-btn">查看详情</button>
			</div>
		</li>
	</ul>
    </div>
		
  </div>

</template>

<script>
  export default{
  	name:'HomeRecommend',
  	data () {
  		return {
  			recommendList:[
  			   {
  			   	id:"0001",
  			   	imgUrl:"http://img1.qunarzz.com/sight/p0/1609/a9/a90f734bbc7b80aea3.water.jpg_200x200_fac101cb.jpg",
  			   	title:"合肥万达乐园",
  			   	desc:"海洋动物"
  			   },
  			   {
  			   	id:"0002",
  			   	imgUrl:"http://img1.qunarzz.com/sight/p0/1606/4a/4ae2bbafcc977a54e2.water.jpg_200x200_2724c6a1.jpg",
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
  			   	imgUrl:"http://img1.qunarzz.com/sight/p0/201302/07/f01c7c672bf4ac39c8d65eac.jpg_200x200_56798fd8.jpg     ",
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
  	display: flex;
  	height: 1.9rem;
  }
  .item-img{
  	width: 1.7rem;
  	height: 1.7rem;
  	padding:0.1rem ;
  }
  .item-info{
  	margin-left: 0.2rem;
  	min-width: 0;
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
  	color: #ccc;
  	line-height: 0.4rem;
  	overflow: hidden;
  	white-space: nowrap;
  	text-overflow: ellipsis;
  }
  .item-btn{
  	border-radius: .1rem;
  	line-height: 0.4rem;
  	padding: 0 0.2rem;
  	margin-top: 0.1rem;
  	background: #ff9300;
  	color: #fff;
  }
  
</style>