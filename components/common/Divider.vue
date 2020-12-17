<template>
	<view class="divider" :style="{height:bHeight+'upx'}">
		
	</view>
</template>

<script>
	export default{
		props:{
			bHeight:{
				type:[String,Number],
				default:18
			}
		}
	}
</script>

<style>
	.divider{
		background-color: #f5f5f5;
		width: 100%;
		/* height: 18upx; */ 
	}
</style>
