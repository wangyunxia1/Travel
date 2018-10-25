<template>
	<!-- <div> -->
		<div class="header">
			<router-link to="/">
				<div class="iconfont header-back">&#xe624;</div> 
			</router-link>
			城市选择
		</div>
		<!-- <div class="search">
			<input type="text" class="search-input"  placeholder="请输入城市名或拼音">
		</div >-->
		<!-- </div> -->
</template>

<script>
	export default {
		name:'CityHeader'
  }
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
	.header{
		overflow:hidden;
		height:$headerHeight;
		line-height:$headerHeight;
		text-align:center;
		color:#fff;
		background:$bgColor;
		font-size:0.32rem;
		position:relative
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
	// .search{
	// 	background: $bgColor;
	// 	height: 0.72rem;
	// 	padding:0 .1rem
	// }
	// .search .search-input{
	// 	width:100%;
	// 	height:.62rem;
	// 	line-height:.62rem;
	// 	padding:0 .1rem;
	// 	box-sizing:border-box;
	// 	text-align:center;
	// 	color:#666;
	// 	border-radius:0.06rem
	// }
</style>

