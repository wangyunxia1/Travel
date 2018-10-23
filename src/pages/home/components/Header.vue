<template>
  <div class="header">
  	<div class="header-left">
      <span class="iconfont back-icon">&#xe624;</span> 
    </div>
	  <div class="header-input">
      <span class="iconfont">&#xe632;</span>
    输入城市景点/游玩/主题</div>
	  <div class="header-right">{{this.city}}
      <span class="iconfont arrow-icon">&#xe6aa;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props:{
  	 'city':String
  }
}
</script>

<style lang ="stylus" scoped>
  @import "~style/varibles.styl"
  .header{
    display:flex;
    line-height:0.86rem;
    background:$bgColor;
    color:#fff
  }
  .header-left{
    width:0.64rem;
    float:left}
  .back-icon{display: block;width: .64rem;text-align: center;font-size: 0.4rem}
  .header-input{
  	flex:1;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: 0.2rem;
    height: .62rem;
    line-height: .64rem;
    color: #ccc;
    background:#fff;
    border-radius:.1rem}
  .header-right{
    width:1.24rem;
    float:left;
    text-align:center
    }
    	

</style>
 