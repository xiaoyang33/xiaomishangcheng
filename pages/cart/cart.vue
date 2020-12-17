<template>
	<view style="background: #F5F5F5;">
		<!-- 自定义导航栏 -->
		<uni-nav-bar :right-text="isEdit ? '完成' : '编辑'" title="购物车" statusBar fixed :shadow="false" @clickRight="isEdit = !isEdit"></uni-nav-bar>
		<!-- 购物车为空时显示 -->
		<view v-if="noHasGoods" class="d-flex j-center bg-white a-center" style="padding-top: 200rpx;">
			<view class="iconfont icon-gouwuche text-light-muted"></view>
			<view class="text-light-muted mx-2">购物车为空</view>
			<view class="border border-light-secondary py-1 px-2  rounded text-muted" hover-class="bg-light-secondary">去逛逛</view>
		</view>

		<view class="px-2 bg-white" v-else>
			<view class="d-flex a-center border-bottom border-light-secondary py-2" v-for="(item, index) in list" :key="index">
				<label class="radio flex-shrink  d-flex a-center j-center" style="width: 60rpx;height: 100rpx;">
					<radio :value="item.id" color="#FD6810" :checked="item.checked" @click="select(index)"/>
				</label>
				<image :src="item.cover" mode="widthFix" style="width: 150rpx;height: 150rpx;" class="p-1 flex-shrink"></image>
				<view class="flex-1 pl-2" style="height: 100%;">
					<view class="line-h">{{ item.title }}</view>
					<!-- sku属性 -->
					<view class="text-light-muted  d-flex "
						:class="isEdit ? 'bg-light-secondary rounded px-1 my-1' : ''"
						@click="isEdit ? showPopup(index) : ''"
					>
						<text v-for="(attr, attrIndex) in item.attrs" 
						:key="attrIndex">{{ attr.list[attr.selected].name }}</text>
						<view class="iconfont icon-bottom ml-auto"></view>
					</view>
					<view class="d-flex j-sb mt-auto">
						<Price>{{ item.pprice }}</Price>
						<view class="a-end"><uni-number-box :min="item.minNum" :value="item.num" :max="item.maxNum" @change="item.num = $event"></uni-number-box></view>
					</view>
				</view>
			</view>
		</view>
		<!-- 为你推荐 -->
		<view class="text-center font-lg main-text-color font-weight mt-5">
			为你推荐
		</view>
		<view class="position-relative d-flex j-center a-center mb-1">
			<view class="position-relative px-3 font-md text-muted" style="z-index: 2;background: #F5F5F5;">
				买的人还买了
			</view>
			<view class="position-absolute left-0 right-0 " style="height: 2rpx; background: #ccc;"></view>
		</view>
		<view class="bg-white">
			<CommonList :commonList="hotList"/>
		</view>
		<!-- 占位 -->
		<view style="height: 100rpx;" class="bg-white"></view>
		<!-- 总价合计 -->
		<template v-if="!isEdit">
			<view class="d-flex a-center position-fixed bottom-0 w-100 bg-white border-top border-light-secondary" style="height: 100rpx;z-index: 100;">
				<label class="radio d-flex a-center px-2" @click="changeStatus">
					<radio  color="#FD6810" :checked="isAllChecked" disabled/><text>全选</text>
				</label>
				<view class="d-flex a-center ml-2 font-md">
					<text>合计：</text>
					<price fontStyle="font-lg" unitStyle="font">{{totalPrice}}</Price>
				</view>
				<view class="main-bg-color ml-auto text-white d-flex a-center j-center font-md" 
				style="height: 100%;width: 45%;" 
				hover-class=" main-bg-hover-color">结算</view>
			</view>
		</template>
		<template v-if="isEdit">
			<view class="d-flex a-center position-fixed bottom-0 w-100 bg-white border-top border-light-secondary" style="height: 100rpx;z-index: 100;">
				<label class="radio d-flex a-center px-2 flex-shrink" @click="changeStatus">
					<radio  color="#FD6810" :checked="isAllChecked" disabled/><text>全选</text>
				</label>
				<view class="d-flex a-center ml-2 font-md main-bg-color text-white d-flex a-center j-center ml-auto"
				style="height: 100%;width: 40%;" 
				>
					加入收藏
				</view>
				<view class="ml-auto bg-danger text-white d-flex a-center j-center font-md" 
				style="height: 100%;width: 40%;" 
				hover-class=" main-bg-hover-color" @click="doDelete">删除</view>
			</view>
		</template>
		<!-- sku弹出层 -->
		<CommonPopup :isPopup = "popupShow" @hideMast="hidePopup">
			 <view class="d-flex flex-column">
				 <view class="d-flex a-center">
					 <image src="../../static/demo/cate_01.png" mode="widthFix"
						style="width: 180rpx;height: 180rpx;"
					 ></image>
					 <view>
					 	<Price fontStyle="font-lg" unitStyle="font">2699</Price>
						<view class="">
							<text v-for="(attr, attrIndex) in getCompSku.attrs"
							:key="attrIndex">{{ attr.list[attr.selected].name }}</text>
						</view>
					 </view>
				 </view>
				 <scroll-view scroll-y="true" style="height: 660rpx;" class="w-100">
				 	<view>
						<Card v-for="(item,index) in getCompSku.attrs" :key="index" :title="item.title" :hasBorderBottom="false" :headFontWeight="false">
							<YRadioGroup :label="item" :selected.sync="item.selected"/>
						</Card>
					</view>
					<view class="d-flex j-sb a-center p-2 border-top border-light-secondary mt-2">
							 <view class="font">
								购买数量
							 </view>
							 <uni-number-box :min="getCompSku.minNum" @change="getCompSku.num = $event"></uni-number-box>
					</view>
				 </scroll-view>
				 
			 </view>
			 <view class="d-flex j-center a-center text-white main-bg-color rounded " 
			 style="height: 100rpx;margin-right: -30rpx;margin-left: -30rpx;" hover-class="main-bg-hover-color"
			 @tap.stop="hidePopup"
			 >
			 	确定
			 </view>
		</CommonPopup>
	</view>
</template>

<script>
import uniNavBar from '@/components/uni-ui/uni-nav-bar/uni-nav-bar.vue';
import Price from '@/components/common/Price.vue';
import uniNumberBox from '@/components/uni-ui/uni-number-box/uni-number-box.vue';
import Card from '@/components/common/Card.vue'
import YRadioGroup from '@/components/common/YRadioGroup.vue'
import CommonPopup from '@/components/common/CommonPopup.vue'
import CommonList from '@/components/common/CommonList.vue'
import {mapState , mapGetters  , mapActions , mapMutations} from 'vuex'
export default {
	components: {
		uniNavBar,
		Price,
		uniNumberBox,
		Card,
		YRadioGroup,
		CommonPopup,
		CommonList
	},
	data() {
		return {
			isEdit: false,
			hotList:[
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
			}
	},
	computed: {
		...mapState({
			list:state=>state.cart.list,
			popupShow:state=>state.cart.popupShow
		}),
		...mapGetters(['totalPrice','isAllChecked','noHasGoods','getCompSku'])
		// totalPrice() {
		// 	return this.list.reduce((pre, item) => {
		// 			if (item.checked) {
		// 				return pre + item.pprice * item.num
		// 			}
		// 	}, 0);
		// }
	},
	methods: {
		...mapActions(['changeStatus','doDelete','showPopup','hidePopup']),
		...mapMutations(['select','deleteGoods']),
		editDelete(){
			this.deleteGoods()
		}
	}
};
</script>

<style></style>
