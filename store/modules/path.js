import Vue from 'vue'
export default{
	state:{
		list:[
			{
				name:'summer',
				phone:'197****8907',
				path:'广东省-广州市-白云区',
				detailpath:'XXXXXX街道',
				isDefaultPath:true,
				show:false
			},{
				name:'天地会',
				phone:'197****8907',
				path:'广东省-广州市-白云区',
				detailpath:'XXXXXX街道',
				isDefaultPath:false,
				show:false
			}
		],
	},
	getters:{
		getDefaultPath(state){
			return state.list.filter(item=>item.isDefaultPath)
		}
	},
	mutations:{
		createPath(state,path){
			if(path.isDefaultPath){
				state.list.forEach(item=>{
					item.isDefaultPath = false
				})
			}
			state.list.unshift(Object.assign({},path))
		},
		deletePath(state,index){
			state.list.splice(index,1)
		},
		// 编辑地址后保存
		upDatePath(state,{index,item}){
			// state.list[index] = item
			if(item.isDefaultPath){
				state.list.forEach(item=>{
					item.isDefaultPath = false
				})
			}
			Vue.set(state.list,index,item)
		},
		changeSwiper(state,{index,isShow}){
			// console.log(index,isShow);
			state.list[index].show = isShow
			// console.log(state.list[index]);
		}
	}
}