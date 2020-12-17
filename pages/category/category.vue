<template>
	<view class="d-flex border-top border-light-secondary" style="height: 100%;box-sizing: border-box;">
		<Loading :show="isLoading"></Loading>
		<scroll-view scroll-y="true" id="leftScroll" 
		:scroll-top="leftScrollTop"
		class="border-right" style="flex: 1;height: 100%;">
			<view class="border-bottom border-light-secondary py-1 left-item" v-for="i in cate" :key="i">
				<view class="text-center py-1 text-muted"
					:class="activeIndex === i ? 'active' : ''"
					@click="handleClick(i)"
				>
					分类{{i}}
				</view>
			</view>
		</scroll-view>
		<scroll-view scroll-y="true" style="flex: 3.3;height: 100%;" 
		scroll-with-animation
		@scroll="rightScroll"
		:scroll-top="rightScrollTop">
			<view class="row right-item" v-for="(item,index) in list" :key="index">
				<view class="span24-8 text-center pt-2" v-for="(ite,ind) in item.list" :key="ind">
					<image lazy-load :src="ite.src" mode="widthFix" 
					style="width: 120rpx;height: 120rpx;"></image>
					<text style="display: block;">{{ite.name}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				activeIndex:0,
				cate:[],
				list:[],
				leftDomsTop:[],
				rightDomsTop:[],
				rightScrollTop:0,
				leftScrollTop:0,
				leftItemHeight:0,
				isLoading:true
			}
		},
		onLoad() {
			this.getData()
		},
		watch:{
			activeIndex(newVal){
					this.getElInfo({
						size:true,
						scrollOffset:true
					}).then(data=>{
						let H = data.height
						let scrollTop = data.scrollTop
						if((this.leftDomsTop[newVal] + this.leftItemHeight) > (H + scrollTop)){
						 return	this.leftScrollTop = this.leftDomsTop[newVal] + this.leftItemHeight - H
						}
						if(this.leftDomsTop[newVal] < scrollTop){
							return	this.leftScrollTop = this.leftDomsTop[newVal]
						}
				})
			}
		},
		onReady() {
			this.getElInfo({
				all:'left',
				size:true,
				rect:true
			}).then(data=>{
				this.leftItemHeight = data[0].height
				this.leftDomsTop  = data.map(item=>item.top)
			})
			
			this.getElInfo({
				all:'right',
				rect:true
			}).then(data=>{
				this.rightDomsTop = data.map(item=>item.top)
			})
		},
		methods:{
			getElInfo(options = {}){
				return new Promise((resolve,reject)=>{
					const query = uni.createSelectorQuery().in(this);
					let q = options.all ? query.selectAll(`.${options.all}-item`) : query.select('#leftScroll')
					q.fields({
						size:options.size ? true : false,
						rect:options.rect ? true : false,
						scrollOffset:options.scrollOffset ? true : false
					},data => {
						resolve(data)
					}).exec();
				})
			},
			getData(){
				for(let i = 0;i<20;i++){
					this.cate.push(i)
					this.list.push({
							list:[]
						})
				}
				for(let i =0;i<this.list.length;i++){
					for (let j =0 ;j <23 ;j++) {
						this.list[i].list.push(
							{name:`分类${i}-商品${j}`,src:'/static/demo/list/1.jpg'}
						)
					}
				}
				this.$nextTick(()=>{
					this.isLoading = false
				})
			},
			handleClick(index){
				// 更改被选中的索引
				this.activeIndex = index
				// 滚动右边内容区域到指定位置
				this.rightScrollTop = this.rightDomsTop[index]
			},
			// 右边滚动处理
			rightScroll(e){
				this.rightDomsTop.forEach((item,index)=>{
					if(item < e.detail.scrollTop + 3){
						this.activeIndex = index
					}
				})
			}
		}
	}
</script>

<style>
	.active{
		border-left: 8rpx solid #FD6801;
		color: #FD6801 !important;
	}
</style>
