<template>
	<ul class="list">
		<li class="item" 
		v-for="item in letters"
		:key="item"
		:ref="item"
		@click="handleLetterClick"
		@touchstart="handleTouchStart"
		@touchend="handleTouchEnd"
		@touchmove="handleTouchMove"
		>
			{{item}}
		</li>
		
	</ul>
</template>

<script>
	export default {
		name:"CityAlphabet",
		props:{
			'alphabet':Object
		},
		computed:{
			letters () {
				const letters =[]
				for(let i in this.alphabet){
					letters.push(i)
				}
				return letters
			}
		},
		data () {
			return {
				touchStatus:false //false状态下不促发touchmove事件
			}
		},
		methods:{
			handleLetterClick(e){
				this.$emit("change",e.target.innerText)
			},
			handleTouchStart (){
				this.touchStatus = true
			},
			handleTouchEnd (){
				this.touchStatus = true
			},
			handleTouchMove (e){
				if(this.touchStatus){
					const startY = this.$refs['A'][0].offsetTop
					const touchY = e.touches[0].clientY-79
					const index = Math.floor( (touchY-startY)/20 )
					if(index >= 0 && index <= this.letters.length){
						this.$emit("change",this.letters[index])
					}
					
				}
			},
		}
  }
</script>

<style lang="stylus" scoped>
	@import '~style/varibles.styl'
	.list{
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: absolute;
		top: 1.58rem;
		right: 0;
		bottom: 0;
		width: 0.4rem
	}
	.item{
		text-align: center;
		line-height:0.4rem;
		color: $bgColor
	}
</style>