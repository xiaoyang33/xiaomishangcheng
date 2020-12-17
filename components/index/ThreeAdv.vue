<template>
	<!-- 左边 w373 h530 -->
	<!-- 右边 w375 h264 b2 -->
	<view class="d-flex">
			<image :src="threeData.big.url" @tap="itemTap(threeData.big)" style="width: 373upx; height: 530upx; border-right: 2upx solid #f5f5f5;" lazy-load=""></image>
			<view class="d-flex flex-column">
				<image :src="threeData.rightTop.url"   @tap="itemTap(threeData.rightTop)"style="height: 264upx;width: 375upx;border-bottom: 2upx solid #f5f5f5;" lazy-load=""></image>
				<image :src="threeData.rightBottom.url"  @tap="itemTap(threeData.rightBottom)" style="height: 264upx;width: 375upx;" lazy-load=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			threeData:{
				type:Object
			}
		},
		methods:{
			itemTap(item){
				console.log(item)
				
			}
		}
	}
</script>

<style>
</style>
