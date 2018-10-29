<template>
		<div class="list wrapper" ref="wrapper">
			<div>
				<div class="area">
					<div class="title border-bottom">当前城市</div>
					<div class="button-box">
						<div class="button-wrapper "  >
							<div class="button">北京</div>
						</div>
						
					</div>	
				</div>
				<div class="area">
					<div class="title border-bottom">热门城市</div>
					<div class="button-box">
						<div class="button-wrapper" v-for="item in hot">
							<div class="button">{{item.name}}</div>
						</div>
					</div>
				</div>

				<div class="area" 
				v-for="(item,key) in cities " 
				:key="key"
				:ref="key"
				>
					<div class="title">{{key}}</div>
					<div class="item-list">
						<div class="item border-bottom" v-for="innerItem in item">
							{{innerItem.name}}
					  </div>
						
					</div>
				</div>
			</div>	
		</div>
</template>

<script>
	import BScroll from 'better-scroll'

	export default {
		name:'CityList',
		props:{
			'cities':Object,
			'hot':Array,
			'letters':String
		},
		data (){
			return{
				
			}
		},
		watch:{
			letters () {
				// console.log(this.letters)
				if(this.letters){
					const element = this.$refs[this.letters][0]
					// console.log(element)
					this.scroll.scrollToElement(element)
				}
			}
		},
		mounted () {
			// this.scroll = new BScroll('.wrapper')
			this.scroll = new BScroll(this.$refs.wrapper)
		}
  }
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .border-bottom:after,.border-bottom:before{
  	border-color: #ccc
  }
  .list{
  	position: absolute;
    top: 1.58rem;
    bottom: 0;
    left: 0;
    overflow: hidden;
    right: 0;
  }
  .title{
  	background:#eee;
  	color:#666;
  	line-height:.6rem;
  	padding-left:.2rem
  }
  .button-box{
  	overflow: hidden;
  	padding: 0.1rem .6rem .1rem .1rem
  }
  .button-wrapper{
  	width: 33.33%;
  	float: left;
  }
  .button{
  	margin: 0.1rem
  	border:0.02rem solid #ccc;
  	padding: .1rem ;
  	border-radius: 0.06rem;
  	text-align: center;
  }
  
  .item{
  	padding-left: 0.2rem;
  	color: #666;
  	line-height: .7rem;
  }
	
</style>

