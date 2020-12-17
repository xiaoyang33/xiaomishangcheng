<template>
	<!-- 横向滚动评论
			 外层 w620 * h380
			 头像70*70
			 图片h115
	-->
	<view class="p-2">
		<scroll-view scroll-x="true" class="scroll-row">
			<view 
			v-for="(item,index ) in comments" :key="index"
			class="scroll-row-item border rounded bg-light-secondary px-2 py-3 mr-2" 
			style="height: 380rpx; width: 620rpx;">
				<view class="d-flex j-sb a-center">
					<view class="d-flex a-center">
						<image :src="item.userpic" mode="widthFix" 
						style="border-radius:50%; width:70rpx ;height: 70rpx;"></image>
						<view class="ml-2">
							<view class="line-h">{{item.username}}</view>
							<view class="text-light-muted line-h">{{item.create_time}}</view>
						</view>
					</view>
					<view class="iconfont icon-dianzan text-light-muted font">
						{{item.goods_num}}
					</view>
				</view>
				<view class="my-2">
					{{item.context}}
				</view>
				<view class="row">
					<view class="span24-8 p-2" v-for="(ite,ind) in item.imglist" :key="ind">
						<image :src="ite" mode="widthFix" class="rounded " style="height: 115rpx;"></image>
					</view>
				</view>
			</view>
		</scroll-view>
		<navigator url="/pages/detail-comments/detail-comments">
			<view class="d-flex j-center a-center py-2 text-primary "
			hover-class="text-info"
			>
				更多评论 
				<view class="iconfont icon-you"></view>
			</view>
		</navigator>
	</view>
</template>

<script>
	export default{
		props:{
			comments:{
				type:Array,
				default:()=>{
					return []
				}
			}
		}
	}
</script>

<style>
</style>
