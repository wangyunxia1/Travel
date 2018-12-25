<template>
	<div>
		<div class="header-abs" v-show='showAbs'>
			<router-link tag='div' to="/">
			<div class="iconfont back-home">&#xe624;</div>
			</router-link>
		</div>
		<div class="header-fix" v-show='!showAbs' :style='opacityStyle'>
				<router-link to="/">
					<div class="iconfont header-back">&#xe624;</div> 
				</router-link>
				景点详情
		</div>
	</div>
</template>

<script >
	export default {
		name:'DetailHeader',
		data () {
			return {
				showAbs:true,
				opacityStyle:{
					opacity:0
				}
			}
		},
		methods:{
			handleScroll () {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				if( scrollTop>60 ){
					let opacity = scrollTop/140
					opacity = opacity > 1? 1 : opacity ;//限制opcity只能最大等于1
					this.opacityStyle={
						opacity,
					};
					this.showAbs=false
				}else{
					this.showAbs=true
				}
			}
		},
		mounted (){
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
	.header-abs{
		height: 0.72rem;
    width: 0.72rem;
    background: rgba(0,0,0,0.5);
    position: absolute;
    left: 0.2rem;
    top: 0.1rem;
    color: #fff;
    line-height: 0.72rem;
    text-align: center;
    border-radius: 50%;
	}
	.header-fix{
		position:fixed;
		top:0;
		left:0;
		right:0;
		overflow:hidden;
		height:$headerHeight;
		line-height:$headerHeight;
		text-align:center;
		color:#fff;
		background:$bgColor;
		font-size:0.32rem;
		}
	.header-back{
		position:absolute;
		color:#fff;
		top:0;
		left:0;
		width:.64rem;
		text-align:center;
		font-size:.32rem;
	}	
</style>