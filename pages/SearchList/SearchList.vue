<template>
	<view>
		<!-- 筛选栏 -->
		<view class="row border-top border-bottom a-center j-center" style="height: 100rpx; ">
			<view class="d-flex flex-1 j-center" v-for="(item,index) in screen.list" :key="index" @tap="tabChange(index)">
				<text :class="screen.currentIndex === index ? 'main-text-color' :'text-muted'">{{item.name}}</text>
				<view class="d-flex flex-column a-center j-center">
					<text class="iconfont icon-paixu-shengxu  line-h0 "
						:class="item.status === 1 ? 'main-text-color' : 'text-light-muted' "
					></text>
					<text class="iconfont icon-paixu-jiangxu  line-h0 "
						:class="item.status === 2 ? 'main-text-color' : 'text-light-muted' "
					></text>
				</view>
			</view>
			<view class="d-flex flex-1 j-center">
				<text class="main-text-color" @click="openDrawer">筛选</text>
			</view>
		</view>
		<!-- 抽屉组件 -->
		<uni-drawer ref="showRight" mode="right" :mask-click="true" >
			<Card title="搜索啥" :headFontWeight="false" :hasBorderBottom="false">
				<YRadioGroup :label="label" :selected.sync="label.selected"/>
			</Card>
			<view class="w-100 d-flex border-top border-light-secondary position-absolute bottom-0">
				<view class="text-white font-md py-2 main-bg-color flex-1 text-center " hover-class="main-bg-hover-color">
					确定
				</view>
				<view class="text-dark font-md py-2 flex-1 text-center " hover-class="bg-light-secondary">
					重置
				</view>
			</view>
		</uni-drawer>
		<!-- 搜索列表 -->
		<SearchList :list="list"/>
	</view>
</template>

<script>
	import UniDrawer from '@/components/uni-ui/uni-drawer/uni-drawer.vue'
	import Card from '@/components/common/Card.vue'
	import YRadioGroup from '@/components/common/YRadioGroup.vue'
	import SearchList from '@/components/searList/SearchList.vue'
	export default {
		components:{
			UniDrawer,
			Card,
			YRadioGroup,
			SearchList
		},
		data() {
			return {
				list:[
					{
						title:"真无线蓝牙耳机",
						titlepic:'/static/demo/demo6.jpg',
						desc:'雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作',
						pprice:199,
						comment_num:1380,
						good_num:98
					},{
						title:"真无线蓝牙耳机",
						titlepic:'/static/demo/demo6.jpg',
						desc:'雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作',
						pprice:199,
						comment_num:1380,
						good_num:98
					},{
						title:"真无线蓝牙耳机",
						titlepic:'/static/demo/demo6.jpg',
						desc:'雅致简约/分体式入耳/收纳盒充电/蓝牙5.0/触控操作',
						pprice:199,
						comment_num:1380,
						good_num:98
					}
				],
				screen:{
					currentIndex:0,
					list:[
						{name:'综合',status:1},
						{name:'销量',status:0},
						{name:'价格',status:0}
					]
				},
				label:{
					selected:0,
					list:[
						{name:'选项一'},
						{name:'选项二'},
						{name:'选项三'}
					]
				}
			}
		},
		methods: {
			tabChange(index){
				// 判断是否点击的是选中的 改变排序状态
				let oldIndex = this.screen.currentIndex
				let oldItem  = this.screen.list[oldIndex]
				if(index === oldIndex){
					return	oldItem.status = oldItem.status === 1 ? 2 : 1
				}
				// 不是则改变原来选中的状态为false
				oldItem.status = 0
				// 如果不是则改变选中index
				this.screen.currentIndex = index
				this.screen.list[index].status = 1
			},
			openDrawer(){
				this.$refs['showRight'].open()
			},
			changeRadio(index){
				this.label.selected = index
			}
		}
	}
</script>

<style>
</style>
