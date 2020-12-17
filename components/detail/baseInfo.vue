<template>
	<view class="p-2">
		<view class="font-lg">
			{{goodsInfo.title}}
		</view>
		<view class="font text-light-muted line-h-sm mb-2">
			{{goodsInfo.desc}}
		</view>
		<Price fontStyle="font-lg" unitStyle="font">{{goodsInfo.pprice}}</Price>
	</view>
</template>

<script>
		import Price from '@/components/common/Price.vue'
	export default{
		components:{
			Price
		},
		props:{
			goodsInfo:{}
		}
	}
</script>

<style>
</style>
