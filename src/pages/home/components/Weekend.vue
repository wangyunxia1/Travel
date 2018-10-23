<template>
  <div>
    <div class="title">周末去哪儿</div>
	<ul>
		<li class="item" v-for="item of list" :key="item.id">
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