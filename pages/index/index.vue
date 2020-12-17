<template>
	<view>
		<!-- 顶部选项卡 -->
		<TopChooseList :dataList="tabBars" :currentIndex="tabIndex" @tabClick = "tabClick" :scrollInto='scrollInto'/>
		<swiper :duration="300" :current="tabIndex" :style="'height:' + sHeight + 'px;'" @change="swiperChange">
			<swiper-item v-for="(item, index) in newsItems" :key="index">
				<scroll-view scroll-y :style="'height:' + sHeight + 'px;'" @scrolltolower="loadMore">
					<block v-for="(list,listIndex) in item.list" :key="listIndex">
						<!-- 轮播图组件 -->
						<swiper-img v-if="list.type === 'swiper'" :imgData="list.data"/>
						
						<template v-if="list.type === 'kingKong'" >
						<!-- 首页金刚位 -->
							<king-kong :imgData="list.data"/>
							<!-- 全局分割线 -->
							<Divider/>
						</template>
						
						<!-- 三图广告 -->
						<template v-if="list.type === 'threeData'">
							<ThreeAdv :threeData="list.data"/>
							<Divider/>
						</template>
						<!-- 标题card -->
						<!-- <Card title="每日精选" coverImg="/static/demo/demo4.jpg"/> -->
						
						<!-- 公共列表组件 -->
						<CommonList  v-if="list.type === 'commonList'" :commonList="list.data"/>
					</block>
					<!-- 上拉加载更多 -->
					<view class="d-flex j-center a-center text-light-muted py-3">
						{{item.loadText}}
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	
	</view>
</template>

<script>
	let tabData = [{
					name: '关注'
				},
				{
					name: '推荐'
				},
				{
					name: '体育'
				},
				{
					name: '热点'
				},
				{
					name: '财经'
				},
				{
					name: '娱乐'
				},
				{
					name: '军事'
				},
				{
					name: '本地'
				}]
				
	let dataList = [
				{
					type:'swiper',
					data:[
						{
							url: '/static/demo/demo4.jpg'
						},
						{
							url: '/static/demo/demo4.jpg'
						},
						{
							url: '/static/demo/demo4.jpg'
						}
					]
				},
				{
					type:'kingKong',
					data:[
						{
							url: '/static/indexnav/1.png',
							title: '新品发布'
						},
						{
							url: '/static/indexnav/2.gif',
							title: '小米众筹'
						},
						{
							url: '/static/indexnav/3.gif',
							title: '以旧换新'
						},
						{
							url: '/static/indexnav/4.gif',
							title: '1分拼团'
						},
						{
							url: '/static/indexnav/5.gif',
							title: '超值特卖'
						},
						{
							url: '/static/indexnav/6.gif',
							title: '小米秒杀'
						},
						{
							url: '/static/indexnav/7.gif',
							title: '真心想要'
						},
						{
							url: '/static/indexnav/8.gif',
							title: '电视热卖'
						},
						{
							url: '/static/indexnav/9.gif',
							title: '家店热卖'
						},
						{
							url: '/static/indexnav/10.gif',
							title: '米粉卡'
						}
					]
				},
				{
					type:'threeData',
					data:{
						big: {
							url: '/static/demo/demo1.jpg'
						},
						rightTop: {
							url: '/static/demo/demo2.jpg'
						},
						rightBottom: {
							url: '/static/demo/demo3.jpg'
						}
					}
				},
				{
					type:'commonList',
					data:[
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
			]	
			
let dataList2 = [
				{
					type:'swiper',
					data:[
						{
							url: '/static/demo/demo4.jpg'
						},
						{
							url: '/static/demo/demo4.jpg'
						},
						{
							url: '/static/demo/demo4.jpg'
						}
					]
				},
				{
					type:'threeData',
					data:{
						big: {
							url: '/static/demo/demo1.jpg'
						},
						rightTop: {
							url: '/static/demo/demo2.jpg'
						},
						rightBottom: {
							url: '/static/demo/demo3.jpg'
						}
					}
				},
				{
					type:'commonList',
					data:[
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
			]		
import SwiperImg from '@/components/index/SwiperImg.vue';
import KingKong from '@/components/index/KingKong.vue';
import ThreeAdv from '@/components/index/ThreeAdv.vue';
import Card from '@/components/common/Card.vue';
import CommonList from '@/components/common/CommonList.vue';
import TopChooseList from '@/components/index/TopChooseList.vue';
export default {
	components: {
		SwiperImg,
		KingKong,
		ThreeAdv,
		Card,
		CommonList,
		TopChooseList
	},
	data() {
		return {
			title: 'Hello',
			scrollInto:'',
			tabIndex: 0,
			sHeight: 0,
			newsItems:[],
			tabBars: [],
			
		};
	},
	onLoad() {
		this.initData()
	},
	mounted() {
		setTimeout(() => {
			uni.getSystemInfo({
				success: res => {
					// console.log(res)
					this.sHeight = res.windowHeight - uni.upx2px(82);
				}
			});
		}, 0);
	},
	methods: {
		tabClick(index){
			if(index === this.tabIndex){
				return
			}
			this.tabIndex = index
			this.scrollInto = 'tab' + index
			this.addData()
			
		},
		swiperChange(e) {
			// console.log(e)
			this.tabClick(e.detail.current)  ;
		},
		initData(){
			// 初始化数据
			this.tabBars = tabData
			let arr = []
			this.tabBars.forEach((item,index)=>{
				let obj = {
					list:[],
					// 1 上拉加载更多 2加载中...  3 没有更多了
					loadText:'上拉加载更多' 
				}
				if(index === 0){
					obj.list = dataList
				}
				arr.push(obj)
			})
			this.newsItems = arr
		},
		addData(){
			// 请求其他数据
			let index = this.tabIndex
			this.newsItems[index].list = dataList2
		},
		loadMore(){
			let index = this.tabIndex
			let item = this.newsItems[index]
			if(item.loadText !== '上拉加载更多') return
			item.loadText = '加载中...'
			setTimeout(()=>{
				item.list = [...item.list,...dataList2]
				item.loadText = '上拉加载更多'
			},1000)
			
		}
	}
};
</script>

<style></style>
