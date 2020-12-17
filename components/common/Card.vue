<template>
	<view class="card" :class="{'p-2':hasPadding}">
		<view v-if="showHead" class="font-md  p-2  main-border-color" :class="{'border-bottom':hasBorderBottom}">
			<slot name="title">
				<text v-if="title" :class="headFontWeight ? 'font-weight': ''">{{title}}</text>
			</slot>
		</view>
		<image v-if="coverImg" :src="coverImg" mode="widthFix"></image>
		<slot/>
	</view>
</template>

<script>
	export default {
		props:{
			title:String,
			coverImg:String,
			// 是否显示头部
			showHead:{
				type:Boolean,
				default:true
			},
			// 是否有下边框
			hasBorderBottom:{
				type:Boolean,
				default:true
			},
			// 是否有内边距
			hasPadding:{
				type:Boolean,
				default:false
			},
			// 头部字体加粗
			headFontWeight:{
				type:Boolean,
				default:true
			}
		}
	}
</script>

<style>
</style>
