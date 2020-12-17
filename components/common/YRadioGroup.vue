<template>
	<view class="row" style="justify-content: space-evenly;">
		<view class="span-5 py-1 text-center border border-light-secondary rounded "
		:class="label.selected === index ? 'active' : ''"
		v-for="(item,index) in label.list"
		:key="index"
		@click="changeRadio(index)"
		>
			{{item.name}}
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			label:Object
		},
		methods:{
			changeRadio(index){
				// console.log(index);
				this.$emit('update:selected',index)
			}
		}
	}
</script>

<style scoped>
	.active{
		border-color: #Eb7320 !important;
		color: #Eb7320 !important;
		background-color: #FCE0D5;
	}
</style>
