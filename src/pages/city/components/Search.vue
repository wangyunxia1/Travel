<template>
	<div class="search">
		<input type="text" class="search-input"  placeholder="请输入城市名或拼音">
	</div>
</template>

<script>
	export default {
		name:"citySearch"
  }
</script>

<style lang="stylus" scoped>
  @import '~style/varibles.styl'
	.search{
		background: $bgColor;
		height: 0.72rem;
		padding:0 .1rem
	}
	.search .search-input{
		width:100%;
		height:.62rem;
		line-height:.62rem;
		padding:0 .1rem;
		box-sizing:border-box;
		text-align:center;
		color:#666;
		border-radius:0.06rem
	}
</style>