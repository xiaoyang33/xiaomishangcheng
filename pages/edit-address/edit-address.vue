<template>
	<view>
		<view class="p-2 d-flex a-center border-bottom ">
			<view class="text-light-muted">
				收货人:
			</view>
			<input type="text" v-model="form.name" class="ml-2 font flex-1"/>
		</view>
		<view class="p-2 d-flex a-center ">
			<view class="text-light-muted">
				手机号码:
			</view>
			<input type="text" v-model="form.phone" class="ml-2 font"/>
		</view>
		<view class="p-2 d-flex a-center border-bottom ">
			<view class="text-light-muted">
				所在地区:
			</view>
			<input type="text" :value="form.path"  class="ml-2 font flex-1" placeholder="请选择地区" disabled @click="show = !show"/>
			<view>
					<u-picker v-model="isShow"  :default-region='["北京市", "市辖区", "东城区"]'  mode="region" @confirm="handleConfirm"></u-picker>
			</view>
		</view>
		<view class="p-2 d-flex a-center ">
			<view class="text-light-muted">
				详细地址:
			</view>
			<input type="text" v-model="form.detailpath" class="ml-2 font"/>
		</view>
		<view class="p-2 d-flex a-center border-bottom border-light-secondary">
			<view class="text-light-muted">
				设为默认地址:
			</view>
			<switch :checked="form.isDefaultPath"  @change="form.isDefaultPath = $event.detail.value" class="ml-auto" color="#FD6810"/>
		</view>
		<view class="p-2">
			<view class="d-flex a-center  j-center py-2 main-bg-color rounded font-md text-white "
			@click="saveAddress"
			 hover-class="main-bg-hover-color">
				保存
			</view>
		</view>
	</view>
</template>

<script>
	import { mapMutations , mapState } from 'vuex'
	export default {
		data() {
			return {
				isEdit:false,
				index:-1,
				isShow:false,
				path:'',
				form:{
					name:'',
					phone:'',
					path:'',
					detailpath:'',
					isDefaultPath:false,
					show:false
				}
			}
		},
		onLoad(options) {
			// console.log(options);
			// 看是否是编辑地址
			if(options.isChange){
				uni.setNavigationBarTitle({
					title:"编辑地址"
				})
				// 从store中拿到地址显示
				Object.assign(this.form,this.list[options.index])
				this.index = options.index
				this.isEdit = true
			}else{
				uni.setNavigationBarTitle({
					title:"添加地址",
					})
				}
		},
		computed:{
			...mapState({
				list:state=>state.path.list
			})
		},
		onBackPress() {
			if(this.isShow) {
				this.isShow = false
				return true
			}
		},
		methods: {
			...mapMutations(['createPath','upDatePath']),
			// 保存地址
			saveAddress(){
			
				if(this.isEdit){
					this.upDatePath({
						index:this.index,
						item:this.form
					})
					// console.log(this.form);
					// return
					uni.showToast({
						title:'地址修改成功',
						success() {
							uni.navigateBack({
								delta:1
							})
						}
					})
					
					return
				}
				this.createPath(this.form)
				uni.showToast({
					title:'地址添加成功'
				})
				uni.navigateBack({
					delta:1
				})
			},
			// 三级联动确认按钮
			handleConfirm(e){
				// console.log(e);
				this.form.path = ''
				for(let key in e){
					this.form.path +=  e[key].label+'-'
				}
				this.form.path = this.form.path.substr(0,this.form.path.length - 1)
			}
		}
	}
</script>

<style>

</style>
