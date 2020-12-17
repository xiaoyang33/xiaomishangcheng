<template>
	<scroll-view scroll-x class="scroll-row border-bottom" 
	style="height: 80rpx;" 
	:scroll-into-view="scrollInto"
	>
		<view style="height: 80rpx;line-height: 80rpx;" 
		v-for="(item,index) in dataList" :key="index"
		class="scroll-row-item px-4 font-md"
		:class="{'main-text-color':index == currentIndex }"
		@click="tabClick(index)"
		:id="'tab' + index"
		>
		<text class="py-1" :class="{active :currentIndex == index}">{{item.name}}</text>
		</view>
	</scroll-view>
</template>

<script>
	export default{
		props:{
			dataList:Array,
			currentIndex:{
				type:[String,Number],
				default:0
			},
			scrollInto:''
		},
		methods:{
			tabClick(index){
				this.$emit('tabClick',index)
			}
		}
	}
</script>

<style scoped>
	.active{
		border-bottom: 6rpx solid #FD6801 !important;
	}
</style>
