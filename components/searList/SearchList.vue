<template>
	<view>
		<view class="row p-2 border-bottom border-light-secondary" v-for="(item,index) in list" :key="index">
			<image :src="item.titlepic" mode="widthFix" class="w-100 span24-8"></image>
			<view class="ml-2 span24-15 d-flex flex-column">
				<view class="font-md font-weight">
					{{item.title}}
				</view>
				<view class="font text-light-muted line-h-md mb-auto">
					{{item.desc}}
				</view>
				<Price class="py-1">199</Price>
				<view class="font text-light-muted">
					{{item.comment_num}} 条评论  {{item.good_num}}%满意
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Price from '@/components/common/Price.vue'
	export default{
		components:{
			Price
		},
		props:{
			list:{
				type:Array,
				default:()=>{
					return []
				}
			}
		}
	}
</script>

<style>
</style>
