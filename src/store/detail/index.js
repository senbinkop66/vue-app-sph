//detail模块专享的小仓库
//任何的小仓库:state、mutations、actions、getters 
//引入请求函数
import { reqDetailList, reqAddOrUpdateCart } from "@/api";

//仓库存储数据的地方
let state = {
  //商品详情的数据
  detailInfo: {},
}

//唯一可以修改仓库数据地方【工人】
let mutations = {
  GETDETAILINFO(state, detailInfo) {
    state.detailInfo = detailInfo;
  },
}

// 可以处理业务逻辑【if、异步语句等等】
let actions = {
  //商品详情的actions
  //actions地盘:可不可以书写异步语句
  async getDetailInfo({ commit, state, dispatch }, skuId) {
    //商品详情请求，需要携带商品ID
    let result = await reqDetailList(skuId);
    //判断服务器返回的状态是200->成功
    if (result.code === 200) {
      //提交mutation存储服务器数据
      commit("GETDETAILINFO", result.data);
    }
  },
  //加入购物车|将来修改商品个数的地方,右侧是载荷对象【两个K,两个V】
  async addOrUpdateCart({ state, commit, dispatch }, { skuId, skuNum }) {
    //底下即为：加入购物车(修改商品个数)的请求,参数顺序不能瞎写
    let result = await reqAddOrUpdateCart(skuId, skuNum);
    // console.log(result);
    if (result.code === 200) {
      //如果加入购物车成功,返回promise即为成功
      return "ok";
    } else {
      //如果加入购物车失败，返回失败的Promise
      return Promise.reject();
    }
  },
}

//仓库计算属性
let getters = {
  //面包屑的数据
  categoryView() {
    //研究这个问题:
      //起始状态:state.detailInfo起始状态空对象,空对象.categoryView->undefined
      //当服务器数据回来之后state.detailInfo,并非空对象,获取的即为服务器返回的数据{7个K}
      //当前属性值:服务器的数据有值，用服务器的。服务器数据没有回来至少有一个空对象兜底【不能undefined兜底】
    return state.detailInfo.categoryView || {};
  },
  //商品信息的数据
  skuInfo() {
    return state.detailInfo.skuInfo || {};
  },
  //商品销售属性列表的数据
  spuSaleAttrList() {
    return state.detailInfo.spuSaleAttrList || [];
  },
};

//对外暴露小仓库
export default {
  state,
  mutations,
  actions,
  getters
}