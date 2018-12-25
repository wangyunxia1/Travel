<template>
	<div>
		<div class="banner" @click='handleShowGallary'>
			<!-- <router-link to="/">
			<div class="iconfont back-home">&#xe624;</div>
			</router-link> -->
			<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1810/47/47ee4064b9218ff8a3.img.jpg_600x330_7a034d9c.jpg">
			<div class="banner-info">
				<div class="banner-num">
					<span class="iconfont banner-icon">&#xe7b8;</span>
					31
				</div>
				<div class="banner-title">
					南通森林野生动物园
				</div>
			</div>
		</div>
		<common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
	</div>
</template>

<script >
	import CommonGallary from 'common/gallary/Gellary'
	export default {
		name:"DetailBanner",
		data () {
			return {
				showGallary:false,
				imgs:['http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_350x240_b09a9503.jpg',
	      	'http://img1.qunarzz.com/sight/p0/1410/e3/73da8d3e19cdc41c1932d4fcd22ec792.water.jpg_350x240_af846382.jpg',
	      	'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_350x240_8e61302a.jpg']
			}
		},
		methods:{
			handleShowGallary () {
				this.showGallary = true
			},
			handleGallaryClose (){
				this.showGallary = false
			}
		},
		components: {
		    CommonGallary,
		  }
	}
</script>

<style lang="stylus" scoped>
	.banner{
		overflow: hidden;
		height: 0;
		padding-bottom: 55%;
		position: relative
	}
	.back-home{
		height: .72rem;
		width: .72rem;
		background: rgba(0,0,0,.5);
		position: absolute;
		left: .2rem;top: .1rem;
		color: #fff;
		line-height: .72rem;
		text-align: center;
		border-radius: 50%
	}
	.banner-img{
		width: 100%
	}
	.banner-info{
		position: absolute;
		color: #fff;
		bottom: .36rem;
		right: 0;
		left: .2rem
	}
	.banner-num{
		width: 1.2rem;
    height: .4rem;
		background: rgba(0,0,0,.5);
		border-radius:.2rem ;
		text-align: center;
		line-height: .4rem
	}
	.banner-icon{
		font-size: .24rem
	}
	.banner-title{
		line-height: .4rem;
    color: #fff;
    font-size: .36rem;
    margin-top: .18rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
	}
	.banner::after{
		min-height: .6rem;
		content: '';
		display: block;
		position: absolute;
		bottom: 0;
		left: 0;right: 0
		background: linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
	}
</style>