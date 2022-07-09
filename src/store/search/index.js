//search模块的小仓库
import { reqSearchList } from "@/api";

//仓库存储数据的地方
let state = {
  // 搜索模块返回的数据
  searchList: {}
}

//唯一可以修改仓库数据地方【工人】
let mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
}

// 可以处理业务逻辑【if、异步语句等等】
let actions = {
  //商品分类的actions
  //actions地盘:可不可以书写异步语句
  async getSearchList({ commit, state, dispatch }, searchParams) {
    let result = await reqSearchList(searchParams);
    //判断服务器返回的状态是200->成功
    if (result.code === 200) {
      //提交mutation存储服务器数据
      commit("GETSEARCHLIST", result.data);
    }
  },

}

//getters:仓库的计算属性
//项目中:vuex的getters,为了简化数据而生。
let getters = {
  //计算新的属性:state,当前小仓库的数据
  goodsList(state) {
    return state.searchList.goodsList;
  },
  //品牌的数据
  trademarkList(state) {
    return state.searchList.trademarkList;
  },
  //商品属性
  attrsList(state) {
    return state.searchList.attrsList;
  }
};

//对外暴露小仓库
export default {
  state,
  mutations,
  actions,
  getters
}