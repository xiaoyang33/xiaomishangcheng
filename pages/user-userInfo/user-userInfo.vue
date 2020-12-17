<template>
	<view>
		<Divider></Divider>
		<uni-list>
			<uni-list-item title="头像">
				<image src="../../static/demo/demo6.jpg" mode="" slot="footer"
				 class="border border-light-secondary"
				 style="width: 80rpx;height: 80rpx;border-radius: 50%;"></image>
			</uni-list-item>
			<uni-list-item title="姓名" >
				<view slot="footer">summer</view>
			</uni-list-item>
			<uni-list-item title="性别" >
				<view slot="footer">男</view>
			</uni-list-item>
			<uni-list-item title="生日" >
				<view slot="footer">1999.2.8</view>
			</uni-list-item>
			<Divider></Divider>
			<uni-list-item title="修改密码" ></uni-list-item>
			<uni-list-item title="密保手机" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	import uniList from '@/components/uni-ui/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue'
	export default {
		components:{
			uniList,
			uniListItem
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
