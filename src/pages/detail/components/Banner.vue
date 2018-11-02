<template>
	<div class="banner">
		<router-link to="/">
		<div class="iconfont back-home">&#xe624;</div>
		</router-link>
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
</template>

<script >
	export default {
		name:"DetailBanner"
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
	.back-icon{}
	.banner-img{
		width: 100%
	}
	.banner-info{
		position: absolute;
		z-index: 1;
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