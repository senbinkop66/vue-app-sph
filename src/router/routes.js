//引入相应的路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import PaySuccess from "@/pages/PaySuccess";
import Center from "@/pages/Center";
//个人中心的二级路由组件
import MyOrder from '@/pages/Center/MyOrder';
import TeamOrder from '@/pages/Center/TeamOrder'

export default [
  {
    name: "home",
    path: "/home",
    component: Home,
    //路由元信息,新学习的一个配置项!!!!给当前路由添加一些额外数据
    //它的右侧是一个对象[可以有多个键值对]
    //路由配置项：书写的时候不要胡写、乱写、瞎写【在VC组件身上获取不到,没有任何意义】
    meta: { isHideFooter: false },
  },
  {
    path: "/login",
    component: Login,
    meta: { isHideFooter: true },
  },
  {
    path: "/register",
    component: Register,
    meta: { isHideFooter: true },
  },
  {
    //命名路由,给路由起一个名字
    name: "search",
    path: "/search/:keyword?",
    component: Search,
    meta: { isHideFooter: true },
    //新增配置项:props,给路由组件传递props参数
        //第一种布尔模式,相当于把params参数，作为props属性值传递给这个路由组件
        // props:true,

        //第二种:对象形式
        // props:{a:1,b:'kkk'}

        //第三种写法:函数写法.一般是把query参数与params参数当中props传递给路由组件!!!
        //route就是当前路由
        // props:(route)=>{
        //      //是将当前箭头函数返回结果，作为props传递给search路由组件!!!
        //      return {a:route.params.keyword,b:'可以传递参数'};
        // }
  },
  {
    path: "/detail/:skuId?",
    component: Detail,
    meta: { isHideFooter: false },
  },
  {
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: { isHideFooter: false },
  },
  {
    path: "/shopcart",
    component: ShopCart,
    meta: { isHideFooter: false },
  },
  {
    path: "/trade",
    component: Trade,
    meta: { isHideFooter: false },
  },
  {
    path: "/pay",
    component: Pay,
    meta: { isHideFooter: false },
  },
  {
    path: "/paysuccess",
    component: PaySuccess,
    meta: { isHideFooter: false },
  },
  {
    path: "/center",
    component: Center,
    meta: { isHideFooter: false },
    //二级路由配置的地方
    children: [
      {
        path: "myorder",
        component: MyOrder,
      },
      {
        path: "teamorder",
        component: TeamOrder,
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  //重定向到首页
  {
    path: "/",
    redirect: "/home"
  }
]