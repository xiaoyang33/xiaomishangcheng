
export default{
	state:{
		list:[
			{
				checked: true,
				id: "112",
				title: '商品标题11',
				cover: '/static/demo/cate_01.png',
				attrs: [
					{
						title: '颜色',
						selected: 0,
						list: [
							{name:'红色'},
							{name:'蓝色'},
							{name:'绿色'}
						]
					},
					{
						title: '容量',
						selected: 0,
						list: [{name:'64GB'},
							{name:'128GB'},
							{name:'256GB'}]
					},
					{
						title: '套餐',
						selected: 0,
						list: [{name:'标配'},
						{name:'套餐一'},
						{name:'套餐二'}]
					}
				],
				pprice: 3999,
				minNum: 1,
				maxNum: 10,
				num: 1
			},{
				checked: true,
				id: "113",
				title: '商品标题22',
				cover: '/static/demo/cate_01.png',
				attrs: [
					{
						title: '颜色',
						selected: 0,
						list: [
							{name:'红色'},
							{name:'蓝色'},
							{name:'绿色'}
						]
					},
					{
						title: '容量',
						selected: 0,
						list: [{name:'64GB'},
							{name:'128GB'},
							{name:'256GB'}]
					},
					{
						title: '套餐',
						selected: 0,
						list: [{name:'标配'},
						{name:'套餐一'},
						{name:'套餐二'}]
					}
				],
				pprice: 3999,
				minNum: 1,
				maxNum: 10,
				num: 1
			}
		],
		popupShow:'none',
		initPopupIndex:-1
	},
	getters:{
		// 判断是否全选
		isAllChecked(state,getters){
			if(!state.list.length) return false
			return state.list.every(item=>item.checked)
		},
		// 总价
		totalPrice(state){
				return state.list.reduce((pre, item) => {
						if (item.checked) {
							return pre + item.pprice * item.num
						}else{
							return pre
						}
				}, 0) || 0
		},
		// 没有商品禁用全选按钮
		noHasGoods(state){
			return state.list.length <= 0
		},
		// 获取编辑商品的属性
		getCompSku(state){
			// console.log(state.list[state.initPopupIndex]);
			return state.initPopupIndex >-1 ? state.list[state.initPopupIndex] :{}
		}
	},
	mutations:{
		// 选中或者取消选中
		select(state,payload){
			console.log(state.list);
			let radio = state.list[payload]
			radio.checked = !radio.checked
		},
		// 全选
		selectAll(state){
			state.list.forEach(item=>{
				item.checked = true
			})
		},
		// 取消全选
		noSelected(state){
			state.list.forEach(item=>{
				item.checked = false
			})
		},
		// 删除选中商品
		deleteGoods(state){
			state.list = state.list.filter(item=>!item.checked)
		},
		chageIndex(state,index){
			state.initPopupIndex = index
		},
		// 购物车添加商品
		addGoodsToCart(state,goods){
			state.list.unshift(Object.assign({},goods))
		}
	},
	actions:{
		// sku弹出层显示
		showPopup({state,commit,getters},index){
			commit('chageIndex',index)
			// console.log(getters.getCompSku);
			state.popupShow = 'show'
		},
		// sku弹出层隐藏
		hidePopup({state,commit}){
			state.popupShow = 'hide'
			setTimeout(()=>{
				commit('chageIndex',-1)
				state.popupShow = 'none'
			},200)
		},
		// 改变全选状态
		changeStatus({commit,getters}){
			getters.isAllChecked ? commit('noSelected') :commit('selectAll')
		},
		// 执行删除
		doDelete({commit,getters}){
			if(getters.noHasGoods) return
			uni.showModal({
				title:'是否删除选中商品',
				success(res) {
					res.confirm ? commit('deleteGoods') : ''
				}
			})
		}
	}
}