<script>
	export default {
		globalData:{
			text:'aaa'
		},
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log(this.$u.config.v);
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "/common/uni.css";
	@import "/common/animate.css";
	@import "/common/icon.css";
	@import "/common/common.css";
	@import "/common/zcm-main.css";
	@import "uview-ui/index.scss";
</style>
