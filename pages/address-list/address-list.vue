<template>
	<view>
		<uni-list>
			<u-swipe-action :options="options" btn-width="140" 
			@click="handleClick" 
			@open="changeSwiper({index:$event,isShow:true})"
			@close="changeSwiper({index:$event,isShow:false})"
			v-for="(item,index) in list"
			:key="index"
			:index="index"
			:show="item.show"
			>
				<uni-list-item showArrow>
					<view class="text-light-muted">
						<view>
							<text class="main-text-color">{{item.name}}</text>
							<text class="px-2">{{item.phone}}</text>
							<text class="main-text-color" v-if="item.isDefaultPath">[默认]</text>
						</view>
						<view class="">{{item.path}}</view>
						<view class="">{{item.detailpath}}</view>
					</view>
				</uni-list-item>
			</u-swipe-action>
		</uni-list>
	</view>
</template>

<script>
import uniList from '@/components/uni-ui/uni-list/uni-list.vue';
import uniListItem from '@/components/uni-ui/uni-list-item/uni-list-item.vue';
import { mapState , mapMutations } from 'vuex'
export default {
	components: {
		uniList,
		uniListItem
	},
	data() {
		return {
			
			options: [
				{
					text: '编辑',
					style: {
						backgroundColor: '#007aff'
					}
				},
				{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}
			]
		};
	},
	onNavigationBarButtonTap(e) {
		// console.log(e.index);
		if (e.index === 0) {
			uni.navigateTo({
				url: '../edit-address/edit-address'
			});
		}
	},
	computed:{
		...mapState({
			list:state=>state.path.list
		})
	},
	methods: {
		...mapMutations(['deletePath','changeSwiper']),
		async	handleClick(index, i ) {
			// console.log(e, i);
			if(i === 1){
				uni.showModal({
					title:"tips",
					content:"确认删除",
					success:(e)=>{
						if(e.confirm){
							this.deletePath(index)
							this.changeSwiper({index:index+1,isShow:false})
							uni.showToast({
								title:"删除成功"
							})
						}
					}
				})
			}else{
				// console.log(this.list[index]);
				// 编辑跳转
				await this.changeSwiper({index,isShow:false})
				uni.navigateTo({
					url:`../edit-address/edit-address?isChange=true&index=${index}`,
				})
				// console.log('编辑');
			}
		}
	}
};
</script>

<style></style>
