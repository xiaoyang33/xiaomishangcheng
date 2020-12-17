<template>
	<view class="row m-2 j-center">
		<block v-for="(item,index) in imgData" :key="index">
			<view class="span-4 d-flex flex-column j-center a-center py-1" @tap="itemClick(item)">
				<image :src="item.url" mode="widthFix" style="width: 60upx; height: 60upx;"></image>
				<text class="font-sm">{{item.title}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			imgData:{
				type:Array
			}
		},
		methods:{
			itemClick(item){
				console.log(item)
			}
		}
	}
</script>

<style>
</style>
