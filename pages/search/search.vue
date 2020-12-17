<template>
	<view>
		<Card title="热门搜索" coverImg="../../static/demo/search-banner.png"/>
		<!-- 颜色标签 -->
		<view class="px-2 mb-2">
			<ColorTag v-for="(item,index) in hot" :item = "item" :key="index"/>
		</view>
		
		<!-- 常用分类 -->
		<Card title="常用分类" :hasBorderBottom="false" :hasPadding="true">
			<ColorTag v-for="(item,index) in cate" :color="false" :item = "item" :key="index"/>
		</Card>
		<!-- 分割线 -->
		<Divider/>
		<!-- 搜索记录 -->
		<Card title="搜索记录" :hasBorderBottom="false">
			<UniList>
				<uniListItem title="小米" :showArro="false"></uniListItem>
				<uniListItem title="小米" :showArro="false"></uniListItem>
			</UniList>
		</Card>
	</view>
</template>

<script>
	import Card from '@/components/common/Card.vue'
	import ColorTag from '@/components/search/ColorTag.vue'
	import UniList from '@/components/uni-ui/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			Card,
			ColorTag,
			uniListItem,
			UniList
		},
		data() {
			return {
				hot:[
					{name:'领券中心'},
					{name:'Redmi K30pro'},
					{name:'Redmi Book 14'},
					{name:'智能积木 越野四驱车'},
					{name:'手表 腕带'},
				],
				cate:[
					{name:'耳机'},
					{name:'手机'},
					{name:'音箱'},
					{name:'手表'},
					{name:'配件'},
					{name:'网关/传感器'},
					{name:'健康'},
					{name:'酷玩'}
				]
			}
		},
		onNavigationBarButtonTap(e) {
			if(e.index === 0){
				uni.navigateTo({
					url:'../SearchList/SearchList'
				})
			}
		},
		computed:{
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
