<template>
	<view>
		<!-- 底部操作条 -->
		<view style="height: 100rpx;"></view>
		<view class="d-flex bg-white position-fixed left-0 bottom-0 right-0" style="height: 100rpx;">
			<view class="d-flex flex-column j-center a-center flex-1" hover-class="bg-light-secondary">
				<view class="iconfont icon-xihuan text-muted "></view>
				<view class="line-h-md">
					喜欢
				</view>
			</view>
			<view class="d-flex flex-column j-center a-center flex-1" hover-class="bg-light-secondary">
				<view class="iconfont icon-gouwuche"></view>
				<view class="line-h-md" @click="goCart">
					购物车
				</view>
			</view>
			<view class="d-flex a-center j-center text-white main-bg-color" @click="gobuy" style="flex: 2;" hover-class="main-bg-hover-color">
				立即购买
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		methods:{
			gobuy(){
				this.$emit('gobuy')
			},
			goCart(){
				uni.switchTab({
					url:'../../pages/cart/cart'
				})
			}
		}
	}
</script>

<style>
</style>
