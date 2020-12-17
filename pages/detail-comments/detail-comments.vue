<template>
	<view>
		<view class="px-2">
			<view class="d-flex py-2 border-bottom border-light-secondary">
				<view class="text-muted">用户评价(1234)</view>
				<text class="ml-auto main-text-color">93.8%</text>
				<text class="text-muted">满意</text>
			</view>
			<view class="d-flex flex-wrap pt-2">
				<view class="px-2 py cate-item mr-2 mb-2 rounded" :class="{ active: currentIndex === index }" @click="chageClick(index)" v-for="(item, index) in navList" :key="index">
					{{ item.name }}
				</view>
			</view>
		</view>
		<Divider></Divider>
		<view class="p-2 d-flex a-start border-bottom border-light-secondary" v-for="i in 3" :key="i">
			<image src="../../static/demo/demo6.jpg" mode="widthFix" class="rounded mr-2 flex-shrink" style="height: 90rpx;width: 90rpx;"></image>
			<view class="flex-1">
				<view class="d-flex j-sb">
					<text class="font-md font-weight text-primary">233*******19</text>
					<view class="iconfont icon-service main-text-color">超爱</view>
				</view>
				<view class="line-h my-2">物流很快块物流很快块物流很快块物流很快块物流很快块物流很快块物流很快块物流很快块物流很快块物流很快块物流很快块物流很快块</view>
				<view class="row">
					<view class="span24-8 p"><image src="/static/demo/cate_04.png" mode="widthFix" style="100rpx"></image></view>
				</view>
				<view class="d-flex">
					<view class="text-light-muted">2019-10-20</view>
					<view class="d-flex ml-auto text-light-muted mr-2 a-center">
						0
						<text class="iconfont icon-dianzan ml-1 text-muted" ></text>
					</view>
					<view class="d-flex text-light-muted a-center">
						0
						<text class="iconfont text-muted icon-pinglun1 ml-1"></text>
					</view>
				</view>
				<!-- 官方回复 -->
				<view class="p-2 bg-light-secondary rounded d-flex flex-wrap a-center" style="word-break: break-all;">
					<view class="main-text-color">官方回复:</view>
						物流很快块物流很快块物流很快块物流很快块物流很快块
					<view class="iconfont icon-dianzan text-muted">
						<text class="text-light-muted font ml-1">赞客服 120</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			currentIndex: 0,
			navList: [{ name: '全部' }, { name: '有图' }, { name: '非常喜欢' }, { name: '牌照好' }, { name: '手感很棒' }, { name: '效果很好' }, { name: '性能那个很棒' }]
		};
	},
	methods: {
		chageClick(index) {
			this.currentIndex = index;
		}
	}
};
</script>

<style scoped>
.cate-item {
	background: #ffebec;
	color: #7b6d6c;
	border-color: #f4e0e1;
}
.cate-item.active {
	background: #ff6b01;
	color: #ffffff;
	border-color: #de7232;
}
</style>
