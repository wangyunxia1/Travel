<template>
  <div>
    <div class="title">热销推荐</div>
		<ul>
			<router-link
        tag="li" 
        class="item border-bottom"
        v-for="item of list" 
        :key="item.id"
        :to="'/detail/'+item.id"
      >
				<img class="item-img" :src="item.imgUrl"/>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-btn">查看详情</button>
				</div>
			</router-link >
		</ul>
    </div>
		
  </div>

</template>

<script>
  export default{
  	name:'HomeRecommend',
  	props:{
  		list:Array
  	},
  	data () {
  		return {
  			
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