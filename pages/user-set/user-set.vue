<template>
	<view>
		<card :title="item.label" :hasBorderBottom="false" v-for="(item,index) in list" :key="index">
			<uni-list>
				<uni-list-item :title="ite.title" v-for="(ite,ind) in item.labelList" :key="ind" showArrow></uni-list-item>
			</uni-list>
		</card>
		<view class="p-2">
			<button type="default">退出登录</button>
		</view>
	</view>
</template>

<script>
	import Card from '@/components/common/Card.vue'
	import uniList from '@/components/uni-ui/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			Card,
			uniList,
			uniListItem
		},
		data() {
			return {
				list:[
					{
						label:'账号管理',
						labelList:[
							{title:'用户资料',path:''},
							{title:'收货地址',path:''}
						]
					},
					{
						label:'关于',
						labelList:[
							{title:'关于商城',path:''},
							{title:'意见反馈',path:''},
							{title:'协议规则',path:''},
							{title:'资质证件',path:''},
							{title:'用户协议',path:''},
							{title:'政策隐私',path:''}
						]
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style >
	page{
		background: #ccc;
	}

</style>
