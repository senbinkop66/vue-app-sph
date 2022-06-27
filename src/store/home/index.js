//home模块专享的小仓库
//任何的小仓库:state、mutations、actions、getters 
//引入请求函数
import { reqBaseCategoryList } from "@/api";

//仓库存储数据的地方
let state = {
  //商品分类的数据,仓库里面数据起始数值不要瞎写【服务器返回的是啥】
  category: [],

}

//唯一可以修改仓库数据地方【工人】
let mutations = {
  GETCATEGORY(state, category) {
    state.category = category;
  },
}

// 可以处理业务逻辑【if、异步语句等等】
let actions = {
  //商品分类的actions
  //actions地盘:可不可以书写异步语句
  async getCategory({ commit, state, dispatch }) {
    //获取服务器的数据,存储在vuex仓库中
    //reqCategory函数执行,返回的是Promise对象【pending、成功、失败】
    //await 等待成功的结果
    let result = await reqBaseCategoryList();
    //判断服务器返回的状态是200->成功
    if (result.code === 200) {
      //提交mutation存储服务器数据
      commit("GETCATEGORY", result.data);
    }
  },

}

//仓库计算属性
let getters = {};

//对外暴露小仓库
export default {
  state,
  mutations,
  actions,
  getters
}