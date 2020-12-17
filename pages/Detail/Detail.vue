<template>
	<!-- 商品详情页 -->
	<view>
		<!-- 商品详情大图 -->
		<SwiperImg :imgData="data" height="750rpx" preview/>
		<!-- 基础详情 -->
		<BaseInfo :goodsInfo="goodsInfo"/>
		
		<!-- 滚动商品特性 w170*h110-->
		<BaseAttrs :baseAttrs="baseAttrs"/>
		
		<!-- 属性选择 -->
		<view class="p-2">
				<uniList >
					<uniListItem class="bg-light-secondary" showArrow >
						<view class="d-flex" @tap.stop="isShow('attr')">
							<view class="text-muted mr-2">
								已选
							</view>
							<view>
								火焰红 64G 标配
							</view>
						</view>
					</uniListItem>
					<uniListItem class="bg-light-secondary" showArrow>
						<view class="d-flex" @tap.stop="isShow('address')">
							<view class="text-muted mr-2">
								配送
							</view>
							<view>
								北京东城区
								<text class="main-text-color ml-2">现配</text>
							</view>
						</view>
					</uniListItem>
					<uniListItem class="bg-light-secondary" showArrow>
						<view class="d-flex" @tap.stop="isShow('service')">
							<view class="d-flex a-center mr-1">
								<view class="iconfont icon-finish main-text-color"></view>
								<view class="font">小米自营</view>
							</view>
							<view class="d-flex a-center mr-1">
								<view class="iconfont icon-finish main-text-color"></view>
								<view class="font">小米发货</view>
							</view>
							<view class="d-flex a-center">
								<view class="iconfont icon-finish main-text-color"></view>
								<view class="font">七天无理由退款</view>
							</view>
						</view>
					</uniListItem>
				</uniList>
		</view>
		
		<!-- 横向滚动评论 
				 外层 w620 * h380
				 头像70*70
				 图片h115
		-->
		<Comments :comments="comments"/>
		
		<!-- 详情页面富文本 -->
		<view class="py-4">
			<UParse className="u-parse" :content="article" @preview="preview" @navigate="navigate" />
		</view>
		
		<!-- 热门推荐 -->
		<Card title="热门推荐" :hasBorderBottom="false" :headFontWeight="false">
			<CommonList :commonList="hotList"/>
		</Card>
		
		<!-- 底部操作条 -->
		<BottomBtn @gobuy="isShow('attr')"/>
		<!-- 弹出层组件 -->
		<CommonPopup :isPopup = "popup.attr" @hideMast="hideMask('attr')">
			<!-- 
			商品图片信息275rpx
			图片180*180
			表单部分660
			按钮h100
			 -->
			 <view class="d-flex flex-column">
				 <view class="d-flex a-center">
					 <image src="../../static/demo/cate_01.png" mode="widthFix"
						style="width: 180rpx;height: 180rpx;"
					 ></image>
					 <view>
					 	<Price fontStyle="font-lg" unitStyle="font">2699</Price>
						<view class="">
							火焰红 64GB 标配
						</view>
					 </view>
				 </view>
				 <scroll-view scroll-y="true" style="height: 660rpx;" class="w-100">
				 	<view>
						<Card v-for="(item,index) in label" :key="index" :title="item.title" :hasBorderBottom="false" :headFontWeight="false">
							<YRadioGroup :label="item" :selected.sync="item.selected"/>
						</Card>
					</view>
					<view class="d-flex j-sb a-center p-2 border-top border-light-secondary mt-2">
							 <view class="font">
								购买数量
							 </view>
							 <uni-number-box :min="1" @change="goodsInfo.num = $event"></uni-number-box>
					</view>
				 </scroll-view>
				 
			 </view>
			 <view class="d-flex j-center a-center text-white main-bg-color rounded " 
			 style="height: 100rpx;margin-right: -30rpx;margin-left: -30rpx;" hover-class="main-bg-hover-color"
			 @click="addCart"
			 >
			 	加入购物车
			 </view>
		</CommonPopup>
		
		<!-- 收货地址 -->
		<CommonPopup :isPopup = "popup.address" @hideMast="hideMask('address')">
			<!-- 
			顶部100
			scrull-view 835
			 -->
			 <view class="d-flex flex-column">
				 <view class="d-flex a-center j-center border-bottom border-light-secondary" style="height: 100rpx;">收货地址</view>
				 <scroll-view scroll-y="true" style="height: 835rpx;" class="w-100">
					 <uni-list>
					 	<uni-list-item showArrow v-for="(item,index) in pathLsit" :key="index">
							<view class="iconfont icon-dingwei font-weight line-h">
								{{item.name}}
							</view>
							<view class="text-light-muted font">
								{{item.path}} {{item.detailpath}}
							</view>
						</uni-list-item>
					 </uni-list>
				 </scroll-view>
				 
			 </view>
			 <view class="d-flex j-center a-center text-white main-bg-color rounded " 
			 style="height: 100rpx;margin-right: -30rpx;margin-left: -30rpx;" hover-class="main-bg-hover-color"
			 @tap.stop="goAddNew"
			 >
			 	选择新地址
			 </view>
		</CommonPopup>
		
		<!-- 服务说明 -->
		<CommonPopup :isPopup = "popup.service" @hideMast="hideMask('service')">
			<!-- 
			顶部100
			scrull-view 835
			 -->
			 <view class="d-flex flex-column">
				 <view class="d-flex a-center j-center border-bottom border-light-secondary" style="height: 100rpx;">服务说明</view>
				 <scroll-view scroll-y="true" style="height: 835rpx;" class="w-100">
					 <view class="py-1">
					 	<view class="d-flex a-center">
							<view class="iconfont icon-finish main-text-color mr-2"></view>
								小米自营
					 	</view>
						<view class="font text-light-muted pl-4 line-h">
							描述性文字
						</view>
					 </view>
				 </scroll-view>
				 
			 </view>
			 <view class="d-flex j-center a-center text-white main-bg-color rounded " 
			 style="height: 100rpx;margin-right: -30rpx;margin-left: -30rpx;" hover-class="main-bg-hover-color"
			 @tap.stop="hideMask('service')"
			 >
			 	确定
			 </view>
		</CommonPopup>
	</view>
</template>

<script>
	import SwiperImg from '@/components/index/SwiperImg.vue'
import BaseInfo from '@/components/detail/baseInfo.vue'
import BaseAttrs from '@/components/detail/BaseAttrs.vue'
import uniList from '@/components/uni-ui/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
import Comments from '@/components/detail/Comments.vue'
import UParse from '@/components/uni-ui/u-parse/u-parse.vue'
import Card from '@/components/common/Card.vue'
import CommonList from '@/components/common/CommonList.vue'
import BottomBtn from '@/components/detail/BottomBtn.vue'
import CommonPopup from '@/components/common/CommonPopup.vue'
import Price from '@/components/common/Price.vue'
import YRadioGroup from '@/components/common/YRadioGroup.vue'
import uniNumberBox from '../../components/uni-ui/uni-number-box/uni-number-box.vue'
import { mapMutations ,mapState} from 'vuex'
	export default {
		components:{
			SwiperImg,
			BaseInfo,
			BaseAttrs,
			uniList,
			uniListItem,
			Comments,
			UParse,
			Card,
			CommonList,
			BottomBtn,
			CommonPopup,
			Price,
			YRadioGroup,
			uniNumberBox
		},
		watch:{
			num(){
				// console.log(this.num)
			}
		},
		data() {
			return {
				isPopup:'none',
				popup:{
					attr:'none',
					address:'none',
					service:'none'
				},
				article:`
				<p>
				<img src="https://i8.mifile.cn/v1/a1/9c3e29dc-151f-75cb-b0a5-c423a5d13926.webp">
				<img src="https://i8.mifile.cn/v1/a1/f442b971-379f-5030-68aa-3b0accb8c2b9.webp">
				<img src="https://i8.mifile.cn/v1/a1/63b700b6-643e-ec18-fdf3-da66b4b4173f.webp">
				<img src="https://i8.mifile.cn/v1/a1/e9dbf276-193e-11c4-99a6-3097fde82350.webp">
				<img src="https://i8.mifile.cn/v1/a1/1249d3ee-2990-a2b4-28d9-f719c2417b1f.webp">
				</p>
				`,
				num:0,
				label:[
					{
						selected:0,
						title:'颜色',
						list:[
							{name:'红色'},
							{name:'蓝色'},
							{name:'绿色'}
						]
					},
					{
						selected:0,
						title:'容量',
						list:[
							{name:'64GB'},
							{name:'128GB'},
							{name:'256GB'}
						]
					},{
					selected:0,
					title:'套餐',
					list:[
						{name:'标配'},
						{name:'套餐一'},
						{name:'套餐二'}
					]
				}
				],
				comments:[
					{
						userpic:'/static/demo/demo6.jpg',
						username:'初棉',
						create_time:'2019-06-20',
						goods_num:'1709',
						context:'暗黑三等奖按是否健康会撒娇开放后即可',
						imglist:[
							'/static/demo/list/5.jpg',
							'/static/demo/list/6.jpg',
							'/static/demo/list/4.jpg',
						]
					},
				],
				data:[{
						url:'https://i8.mifile.cn/v1/a1/6d13e060-d5c5-e610-88d0-80816fa2b0ce.webp'
					},{
						url:'https://i8.mifile.cn/v1/a1/aff0b715-e63a-68f3-91b0-46a22543555e.webp'
					}],
				goodsInfo:{
					title:'小米10 8 + 256GB',
					desc:'磁力滑动全屏覆盖/前后双摄旗舰/四曲面彩色陶瓷机身/高效10w无线充电',
					pprice:3500,
					cover: '/static/demo/cate_02.png',
					minNum: 1,
					maxNum: 10,
					num: 1,
					id:222
				},
				baseAttrs:[
					{icon:'icon-cpu',title:'CPU',desc:'晓龙865八核'},
					{icon:'icon-cpu',title:'CPU',desc:'晓龙865八核'},
					{icon:'icon-cpu',title:'CPU',desc:'晓龙865八核'},
					{icon:'icon-cpu',title:'CPU',desc:'晓龙865八核'},
					{icon:'icon-cpu',title:'CPU',desc:'晓龙865八核'},
					{icon:'icon-cpu',title:'CPU',desc:'晓龙865八核'}
				],
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
		onBackPress(){
			for (let key in this.popup) {
				if(this.popup[key] !== 'none'){
					this.popup[key] = 'hide'
					return true
				}
			}
			// console.log(this.popup)
		},
		computed:{
			...mapState({
				pathLsit:state=>state.path.list
			})
		},
		methods: {
			...mapMutations(['addGoodsToCart']),
			// 点击选择新地址
			goAddNew(){
				uni.navigateTo({
					url:'../edit-address/edit-address'
				})
				this.hideMask('service')
			},
			// 点击加入购物侧按钮
			addCart(){
				let goods = this.goodsInfo
				goods['checked'] = true
				goods['attrs'] = this.label
				// console.log(goods);
				this.addGoodsToCart(goods)
				this.hideMask('attr')
			},
			isShow(key){
				this.popup[key] = 'show'
			},
			hideMask(key){
				this.popup[key] = 'hide'
				setTimeout(()=>{
					this.popup[key] = 'none'
				},200)
			},
			preview(src, e) {
			      // do something
			    },
			navigate(href, e) {
				// do something
			}
		}
	}
</script>

<style scoped lang="scss">
.u-parse{
	& /deep/ .p{
		padding: 0 !important;
		&>uni-view{
			font-size: 0 !important;
		}
	}
}

</style>
