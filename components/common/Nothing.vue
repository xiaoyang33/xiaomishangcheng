<template>
	<view class="w-100 d-flex j-center a-center flex-column py-5">
		<image :src="getImg" mode="widthFix" style="width: 250rpx;"></image>
		<view class="" style="color: #B2B2B2;">
			{{msg}}
		</view>
	</view>
			
</template>

<script>
	export default {
		props:{
			icon:{
				type:String,
				default:'no_comment'
			},
			msg:{
				type:String,
				default:'您还没有待付款订单'
			}
		},
		computed:{
			getImg(){
				return `/static/nothing/${this.icon}.png`
			}
		}
	}
</script>

<style>
</style>
