<template>
	<!-- 弹出层组件 -->
	<view class="_popup" :class="isPopup">
		<view class="_mask" :class="isPopup" @tap.stop="$emit('hideMast')"></view>
		<view class="_body" :class="isPopup">
			<slot/>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			isPopup:String
		}
	}
</script>

<style lang="scss" scoped>
	._popup{
		position: fixed;
		height: 100%;
		width: 100%;
		top: 0;
		z-index: 100;
		&.hide{
			display: block;
		}
		&.show{
			display: block;
		}
		&.none{
			display: none;
		}
	}
	._mask{
		position: fixed;
		height: 100%;
		width: 100%;
		z-index: 102;
		background: rgba(0,0,0,.5);
		&.show{
			animation: showMask .2s both;
		}
		&.hide{
			animation: hideMask .2s both;
		}
	}
	._body{
		background: #FFFFFF;
		height: 1035rpx;
		position: fixed;
		bottom: 0;
		width: 100%;
		padding: 0 4%;
		border-radius: 20rpx;
		z-index: 104;
		&.show{
			animation: showBody .2s both;
		}
		&.hide{
			animation: hideBody .2s both;
		}
	}
	@keyframes showMask{
		0%{opacity: 0;}
		100%{opacity: 1;}
	}
	@keyframes hideMask{
		0%{opacity: 1;}
		100%{opacity: 0;}
	}
	@keyframes showBody{
		0%{bottom: -1035rpx;}
		100%{bottom: 0;}
	}
	@keyframes hideBody{
		0%{bottom: 0rpx;}
		100%{bottom: -1035rpx;}
	}
</style>
