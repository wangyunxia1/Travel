<template>
		<div class="header">
			<div class="area">
				<div class="title">当前城市</div>
			</div>
			<div class="area">
				<div class="title">热门城市</div>
			</div>
			<div class="area">
				<div class="title">A</div>
			</div>
		</div>
</template>

<script>
	export default {
		name:'CityList'
  }
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
  .title{
  	background:#eee;
  	color:#666;
  	line-height:.6rem;
  	padding-left:.2rem
  }
	
</style>

