//shopcart模块专享的小仓库
//任何的小仓库:state、mutations、actions、getters 
//引入请求函数
import { reqShopCart, reqDeleteCart, reqUpdateChecked } from "@/api";

//游客身份--生成一个随机用户字符串ID
import { SET_USERID } from "@/utils/USER_ID";

//仓库存储数据的地方
let state = {
  // vuex仓库存储用户临时身份,vuex存储数据确实非持久化的，SET_USERID执行返回结果,可是本地存储获取的！！
  USER_ID: SET_USERID(),
  shopCartInfo: [],
}

//唯一可以修改仓库数据地方【工人】
let mutations = {
  GETSHOPCART(state, payload) {
    state.shopCartInfo = payload;
  },
}

// 可以处理业务逻辑【if、异步语句等等】
let actions = {
  //获取用户购物车的数据
  async getShopCart({ commit, state, dispatch }) {
    let result = await reqShopCart();
    // console.log(result);
    if (result.code === 200) {
      commit("GETSHOPCART", result.data);
    }
  },
  //删除某一个商品的数据
  async deleteCartById({ commit, state, dispatch }, skuId) {
    let result = await reqDeleteCart(skuId);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject();
    }
  },
  //修改某一个商品勾选状态
  async changeChecked({ commit, state, dispatch }, { skuId, isChecked }) {
    let result = await reqUpdateChecked(skuId, isChecked);
    if (result.code === 200) {
      return "ok";
    } else {
      return Promise.reject();
    }
  },
  //修改全部商品的勾选的状态
  allUpdateChecked({ commit, state, dispatch }, isChecked) {
    let arr = [];
    //获取仓库里面购物车的数据,进行遍历
    state.shopCartInfo[0].cartInfoList.forEach(item => {
      // 调用修改某一个商品的action【四次】
      let ci = dispatch("changeChecked", { skuId: item.skuId, isChecked});
      arr.push(ci);
    });
    //Promise.all():参数需要的是一个数组【数组里面需要promise】
    // Promise.all()执行一次,返回的是一个Promise对象,Promise对象状态：成功、失败取决于什么?
    //成功、还是失败取决于数组里面的promise状态:四个都成功、返回成功Promise、只要有一个失败、返回Promise失败状态！！！
    return Promise.all(arr);
  },
  //删除选中的商品
  deleteAllCart({ commit, state, dispatch }) {
    let arr = [];
    //获取仓库里面购物车的数据,进行遍历
    state.shopCartInfo[0].cartInfoList.forEach(item => {
      // 商品的勾选状态是勾选的,发请求一个一个删除
      if (item.isChecked == "1") {
        let ci = dispatch("deleteCartById", item.skuId);
        arr.push(ci);
      }
    });
    return Promise.all(arr);
  },
}

//仓库计算属性
let getters = {
  //计算数组里面第一个元素：对象
  CartInfo(state) {
    return state.shopCartInfo[0] || {};
  }
};

//对外暴露小仓库
export default {
  state,
  mutations,
  actions,
  getters
}