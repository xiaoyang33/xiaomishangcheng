<template>
	<view class="d-flex main-text-color  line-h" :class="fontStyle">
		<text class=" a-self-start" :class="unitStyle">￥</text><slot></slot>
	</view>
</template>

<script>
	export default{
		props:{
			fontStyle:{
				type:String,
				default:'font-md'
			},
			unitStyle:{
				type:String,
				default:'font-sm'
			}
		}
	}
</script>

<style>
</style>
