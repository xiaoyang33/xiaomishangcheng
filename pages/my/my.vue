<template>
	<view class="">
		<!-- 头部 -->
		<view class="position-relative">
			<view class="iconfont icon-xiaoxi position-absolute" 
			style="right: 32rpx;top: 80rpx; z-index: 1;font-size: 50rpx;color: #fff;"></view>
			<image src="../../static/bg.jpg" mode="widthFix" style="height: 320rpx; width: 100%;position: relative;"></image>
			<view class="d-flex a-center position-absolute" style="left: 32rpx; bottom: 80rpx;" @click="navigate('user-userInfo')">
				<image src="../../static/demo/demo6.jpg" mode="widthFix" 
				style="width: 120rpx;height: 120rpx;border-radius: 50%;border: 5rpx solid #fff ;"></image>
				<view class="text-white ml-2">
					测试昵称
				</view>
			</view>
			<view class="iconfont icon-huangguan position-absolute  px-1 font-md" 
			style="right: 0;bottom: 69rpx;background-color: #FFCC31;
			min-width: 230rpx;text-align: center;border-radius: 60rpx 0 0 60rpx;color:#D35F00 ;height: 70rpx;line-height: 70rpx;">
				会员积分200
			</view>
		</view>
		
		<!-- 订单界面 -->
		<card>
			<view slot="title" class="d-flex j-sb">
				<view class="font-md">
					我的订单
				</view>
				<view class="font-md text-light-muted" @click="navigate('order')">
					全部订单<text class="iconfont icon-you"></text>
				</view>
			</view>
			<view class="d-flex pb-2">
				<view class="d-flex flex-1 flex-column a-center j-center pt-2 " hover-class="bg-light-secondary" 
				v-for="(item,index) in orderInfo">
					<view class="iconfont icon-wallet_icon line-h font-lg" :class="item.icon"></view>
					<view class="font-md">
						{{item.title}}
					</view>
				</view>
			</view>
		</card>
		<!-- 分割线 -->
		<Divider></Divider>
		<uni-list>
			<uni-list-item showArrow title="小米会员">
				<view class="iconfont icon-VIP font-md" style="color: #fdbf2e;margin-right: 10rpx;" slot="icon"></view>
			</uni-list-item>
			<uni-list-item showArrow title="会员中心">
				<view class="iconfont icon-huangguan font-md" style="color: #fcbd2e;margin-right: 10rpx;" slot="icon"></view>
			</uni-list-item>
			<uni-list-item showArrow title="服务中心">
				<view class="iconfont icon-service font-md" style="color: #fa6c5e;margin-right: 10rpx;" slot="icon"></view>
			</uni-list-item>
			<uni-list-item showArrow title="小米之家">
				<view class="iconfont icon-home font-md" style="color: #fe8b42;margin-right: 10rpx;" slot="icon"></view>
			</uni-list-item>
			<uni-list-item showArrow title="更多功能" @click.native="navigate('address-list')">
				<view class="iconfont icon-gengduo font-md" style="color: #9ed45a;margin-right: 10rpx;" slot="icon"></view>
			</uni-list-item>
			<Divider></Divider>
			<uni-list-item showArrow title="更多设置" @click.native="navigate('user-set')">
				<view class="iconfont icon-icon_set_up font-md" style="color: #808c98;margin-right: 10rpx;" slot="icon"></view>
			</uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import Card from '@/components/common/Card.vue'
	import uniList from '@/components/uni-ui/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default{
		components:{
			Card,
			uniList,
			uniListItem
		},
		data(){
			return{
				orderInfo:[
					{title:'待付款',icon:'icon-wallet_icon'},
					{title:'待收货',icon:'icon-daishouhuo'},
					{title:'待评价',icon:'icon-pinglun1'},
					{title:'退换修',icon:'icon-buoumaotubiao46'}
				]
			}
		},
		methods:{
			navigate(path){
				uni.navigateTo({
					url:`/pages/${path}/${path}`
				})
			}
		}
	}
</script>

<style>
</style>
