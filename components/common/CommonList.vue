<template>
	<!-- 商品列表组件 -->
	<view class="row j-sb" @click="goDetail">
		<block v-for="(item,index) in commonList" :key="index">
			<view >
				<image :src="item.coverImg" mode="widthFix" style="width: 372.5upx;" lazy-load></image>
				<view class="p-2 pt-1">
					<view class="font-md font-weight">{{item.title}}</view>
					<view class="font text-light-muted">
						{{item.desc}}
					</view>
					<view class="d-flex my-1">
						<Price>{{item.nPrice}}</Price>
						<view class="line-through text-light-muted font-sm a-self-end ml-1 line-h">
							￥{{item.oPrice}}
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import Price from '@/components/common/Price.vue'
	export default{
		components:{
			Price
		},
		props:{
			commonList:{
				type:Array
			}
		},
		methods:{
			goDetail(){
				uni.navigateTo({
					url:'../../pages/Detail/Detail'
				})
			}
		},
		
	}
</script>

<style>
</style>
