<template>
	<view style="background: #F5F5F5;">
		<view class="d-flex text-muted bg-white border-top border-bottom">
			<view
				class="flex-1 d-flex a-center j-center py-2 "
				:class="{ 'main-text-color active': index === tabIndex }"
				v-for="(item, index) in tabBars"
				:key="index"
				@click="tabIndex = index"
			>
				{{ item.name }}
			</view>
		</view>
		<template v-for="(item, index) in tabBars">
			<view :key="index" v-show="index === tabIndex">
				<template v-if="item.list.length > 0">
					<order-list :list="item.list"></order-list>
				</template>
				<template v-else>
					<nothing :icon="tabBars[index]['not_thing']" :msg="tabBars[index].msg" />
				</template>
			</view>
		</template>

		<view class="text-center font-lg main-text-color font-weight mt-5">为你推荐</view>
		<view class="position-relative d-flex j-center a-center mb-1">
			<view class="position-relative px-3 font-md text-muted" style="z-index: 2;background: #F5F5F5;">买的人还买了</view>
			<view class="position-absolute left-0 right-0 " style="height: 2rpx; background: #ccc;"></view>
		</view>
		<view class="bg-white"><CommonList :commonList="hotList" /></view>
	</view>
</template>

<script>
import CommonList from '@/components/common/CommonList.vue';
import Nothing from '@/components/common/Nothing.vue';
import OrderList from '@/components/order/OrderList.vue';
export default {
	components: {
		CommonList,
		Nothing,
		OrderList
	},
	data() {
		return {
			tabIndex: 0,

			tabBars: [
				{
					name: '全部',
					not_thing: 'no_comment',
					msg: '你还没有待发货订单',
					list: [
						{
							create_time: '2020-10-30 10:30',
							status: '已发货',
							total_num: 3,
							total_price: 2999.0,
							order: [
								{
									cover: '/static/demo/cate_05.png',
									title: '小米8',
									pprice: 1999.0,
									attrs: '金色 标配',
									num: 1
								},
								{
									cover: '/static/demo/cate_05.png',
									title: '小米8',
									pprice: 1999.0,
									attrs: '金色 标配',
									num: 1
								}
							]
						},
						{
							create_time: '2020-10-30 10:30',
							status: '已发货',
							total_num: 3,
							total_price: 2999.0,
							order: [
								{
									cover: '/static/demo/cate_05.png',
									title: '小米8',
									pprice: 1999.0,
									attrs: '金色 标配',
									num: 1
								}
							]
						}
					]
				},
				{ name: '待付款', msg: '你还没有待发货订单', not_thing: 'no_pay' ,list:[]},
				{ name: '待收货', msg: '你还没有待发货订单', not_thing: 'no_receiving',list:[] },
				{ name: '待评价', msg: '你还没有待发货订单', not_thing: 'no_comment' ,list:[]}
			],
			hotList: [
				{
					coverImg: '/static/demo/list/1.jpg',
					title: '米家空调',
					desc: '1.5匹变频',
					oPrice: 2699,
					nPrice: 2199
				},
				{
					coverImg: '/static/demo/list/1.jpg',
					title: '米家空调',
					desc: '1.5匹变频',
					oPrice: 2699,
					nPrice: 2199
				},
				{
					coverImg: '/static/demo/list/1.jpg',
					title: '米家空调',
					desc: '1.5匹变频',
					oPrice: 2699,
					nPrice: 2199
				},
				{
					coverImg: '/static/demo/list/1.jpg',
					title: '米家空调',
					desc: '1.5匹变频',
					oPrice: 2699,
					nPrice: 2199
				},
				{
					coverImg: '/static/demo/list/1.jpg',
					title: '米家空调',
					desc: '1.5匹变频',
					oPrice: 2699,
					nPrice: 2199
				}
			]
		};
	},
	methods: {}
};
</script>

<style scoped lang="scss">
.active {
	border-bottom: 5rpx solid #fd6801;
	margin-bottom: -5rpx;
}
</style>
