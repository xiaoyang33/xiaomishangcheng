<template>
	<view>
		<swiper indicator-dots autoplay :style="getHeight" :interval="3000" :duration="1000" circular>
			<block v-for="(item,index) in imgData" :key="index" > 
				<swiper-item  @tap="itemClick(item,index)">
						<image :src="item.url" 
						:style="getHeight" 
						lazy-load></image>
				</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			imgData:Array,
			height:{
				type:String,
				default:'350rpx'
			},
			preview:{
				type:Boolean,
				default:false
			}
		},
		computed:{
			getHeight(){
				return `height:${this.height}`
			},
			getUrls(){
				return this.imgData.map(item=>item.url)
			}
		},
		methods:{
			itemClick(item,index){
				console.log(this.getUrls)
				if(this.preview){
					uni.previewImage({
						current:index,
						urls:this.getUrls,
						indicator:'default'
					})
				}
			}
		}
	}
</script>

<style>
</style>
