//统一管理项目前部的接口
import requests from "./request";
import mockRequests from './mockRequests';


//封装函数:复用
//将来这个函数可以在别的地方使用,需要对外暴露【分别暴露】
//获取商品分类的数据
export const reqBaseCategoryList = () => {
   //箭头函数可以在程序任意地方使用,箭头函数返回即为服务器的数据
   //下面箭头函数返回值：返回的是什么? promise,即为返回服务器的数据
   //return关键字，千万别忘记书写，如果忘记书写，你在任意地方获取的都是undeinfed
   return requests({method: 'get', url: '/product/getBaseCategoryList'});
}

//获取首页轮播图数据的接口
export const reqBannerList = () => mockRequests({url: "/banner", method: "get"});

//获取Floor首页楼层数据接口
export const reqFloorList = () => mockRequests({url: "/floor", method: "get"});

//搜索模块的请求接口函数:
//将来根据不同的搜索条件,需要给服务器携带不同的参数
//请求体携带搜索的参数
//搜索的条件:它应该是一个对象10K,可有可无，但是data至少是一个空对象
//没有发现:
//第一步:整理搜索的参数
//第二步：根据最新的搜索参数，获取最新的数据展示!!
export const reqSearchList = (data) => requests({url: "/list", method: "post", data});

//详情模块商品的数据
export const reqDetailList = (skuId) => requests({url: `item/${skuId}`, method: "get"});

//加入购物车|将来修改商品个数的接口
export const reqAddOrUpdateCart = (skuId, skuNum) => requests({url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post'});