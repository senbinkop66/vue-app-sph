//仓库
import Vue from "vue";
import Vuex from 'vuex';

//使用插件
Vue.use(Vuex);

//引入小仓库
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";
import trade from "./trade";


//对外暴露仓库
//第一个注意:需要关键字new，你没有new会报错的
//第二个注意:Store构造函数,书写的时候别小写
export default new Vuex.Store({
  //大仓库需要注册全部小仓库
  //vuex新增的一个配置项:模块式开发.右侧V也是对象
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade,
  }
});
