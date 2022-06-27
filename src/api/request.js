//对于axios进行二次封装
import axios from "axios";
//引入进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";

// 配置不显示右上角的旋转进度条, 只显示水平进度条
NProgress.configure({ showSpinner: false });

//axios.create方法执行,其实返回一个axios和request一样的
let requests = axios.create({
  // 基础路径,发请求URL携带api【发现:真实服务器接口都携带/api】
  baseURL: "/api",
  // 连接请求超时时间
  timeout: 10000
});

//请求拦截器:将来项目中【N个请求】，只要发请求,会触发请求拦截器!!!
requests.interceptors.request.use(config => {
  //请求拦截器:请求头【header】,请求头能否给服务器携带参数
  //请求拦截器：其实项目中还有一个重要的作用,给服务器携带请求们的公共的参数
  //进度条开始
  NProgress.start();

  // 必须返回配置对象
  return config;
});

//响应拦截器：请求数据返回会执行
requests.interceptors.response.use((response) => {
  //res:实质就是项目中发请求、服务器返回的数据
  //进度条结束,  隐藏进度条
  NProgress.done();
  return response.data;
}, (err) => {
  NProgress.done();
  //温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
  console.log(err.message);
  //终止Promise链
  return new Promise();
});

//最后需要暴露:暴露的是添加新的功能的axios,即为requests
export default requests;