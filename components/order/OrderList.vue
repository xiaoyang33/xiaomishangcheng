<template>
<view >
	<view class="bg-white" v-for="(item,index) in list" :key="index">
		<!-- 头部 -->
		<view class="d-flex j-sb p-2 border-bottom border-top border-light-secondary">
			<text class="text-light-muted">{{item.create_time}}</text>
			<text class="main-text-color">{{item.status}}</text>
		</view>
		<!-- 躯干 -->
		<view class="px-3 pt-1" >
			<view class=" d-flex pb-1 border-bottom"  v-for="(ite,ind) in item.order" :key="ind">
				<image style="width: 150rpx;height: 150rpx;" class="rounded flex-shrink" 
				:src="ite.cover" mode="widthFix"></image>
				<view class="d-flex flex-column j-center">
					<view class="line-h font-md mb-1">{{ite.title}}</view>
					<text class="text-light-muted">{{ite.attrs}}</text>
				</view>
				<view class="ml-auto text-light-muted d-flex flex-column j-center a-end">
					<view class="line-h mb-1">￥{{ite.pprice}}</view>
					<view >x{{ite.num}}</view>
				</view>
			</view>
		</view>
		<!-- 底部 -->
		<view class="p-3 d-flex flex-column a-end">
			<view class="mb-2 text-secondary">
				共计{{item.total_num}}件商品,合计：￥{{item.total_price}}
			</view>
			<view class="d-flex">
				<button type="default" size="mini" class="mr-2">查看物流</button>
				<button type="default"  size="mini">确认收货</button>
			</view>
		</view>
	</view>
</view>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style>
</style>
