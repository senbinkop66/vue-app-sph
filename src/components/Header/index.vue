<template>
	<header class="header">
		<!-- 头部的第一行 -->
		<div class="top">
			<div class="container">
				<div class="loginList">
					<p>尚品汇欢迎您！</p>
					<!-- 没有登录：显示登录与注册 -->
					<p>
						<span>请</span>
						<router-link to="/login" class="register">登录</router-link>
						<router-link to="/register" class="register">注册</router-link>
						<!--  -->
					</p>
					<!-- 如果登录了，就显示用户名字与退出登录 -->
					<p>
						<a>{{ userName || "用户名" }}</a>
						<a class="register" @click="logout">退出登录</a>
					</p>
				</div>
				<div class="typeList">
					<router-link to="/center">我的订单</router-link>
					<router-link to="/shopcart">我的购物车</router-link>
					<a href="#">我的尚品汇</a>
					<a href="#">尚品汇会员</a>
					<a href="#">企业采购</a>
					<a href="#">关注尚品汇</a>
					<a href="#">合作招商</a>
					<a href="#">商家后台</a>
				</div>
			</div>
		</div>
		<!-- 头部第二行, 搜索区域 -->
		<div class="bottom">
			<!-- logo -->
			<h1 class="logoArea">
				<router-link to="/home" class="logo">
					<img src="./images/logo.png" alt="logo" />
				</router-link>
			</h1>
			<!-- 搜索 -->
			<div class="searchArea">
				<form action="#" class="searchForm">
					<input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="keyword">
					<!--  -->
					<button class="sui-btn btn-xlarge btn-danger" @click="goSearch">搜索</button>
				</form>
			</div>
		</div>
	</header>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		//给组件起一个名字,开发者工具中显示这个组件的时候，显示的就是这个名字
		name: "Header",
		data() {
			return {
				// 用户输入的关键词
				keyword: "",
				
			}
		},
		computed: {
			...mapGetters(["userName"]),
		},
		methods: {
			// 搜索按钮的回调
			goSearch() {
				//路由的跳转,采用的是编程式导航.
				// 路由传递参数

				// 第一种传递query参数
				//this.$router.push({name: "search", query:{keyword:this.keyword}});
				
				//第二种传递params参数 [一定要注意,面试的时候经常问]
      	// this.$router.push({name:'search',params:{keyword:this.keyword}})
				
				// 第三种传递query+params
				//this.$router.push({name: "search", params:{keyword: "abc" || undefined}, query:{keyword:this.keyword}});

				// 验证Vue-Router引入Promise技术,最笨的方法,给push传递第二个、第三个参数【回调函数】
				// 下面这种写法：治标不治本！！！！
				// let reuslt = this.$router.push({name: "search", params:{keyword: "abc" || undefined}, query:{keyword:this.keyword}}, (data)=>{console.log(data)}, (err)=>{console.error(err)});
				// console.log(reuslt);

				// 点击搜索按钮之前,如果路径当中有query参数,需要携带给search
				let locations = {
					name: "search",
					params: {keyword: this.keyword || undefined}
				};
				//确定路径当中有query参数
				if (this.$route.query.categoryName) {
					locations.query = this.$route.query;
				}
				this.$router.push(locations);
			},
			// 退出登录的按钮的回调
			logout() {
				this.$store.dispatch("logout");
			}
		},
		mounted() {
			//清除关键字
			this.$bus.$on("clearKeyword", () => {
				// console.log("clearKeyword");
				this.keyword = "";
			});
		},
	}
</script>

<style scoped lang="less">
.header {
	& > .top {
		background-color: #eaeaea;
		height: 30px;
		line-height: 30px;

		.container {
			width: 1200px;
			margin: 0 auto;
			overflow: hidden;

			.loginList {
				float: left;

				p {
					float: left;
					margin-right: 10px;

					.register {
						border-left: 1px solid #b3aeae;
						padding: 0 5px;
						margin-left: 5px;
					}
				}
			}

			.typeList {
				float:right;

				a {
					padding: 0 10px;

					& + a {
						border-left: 1px solid #b3aeae;
					}
				}
			}
		}
	}

	& > .bottom {
		width: 1200px;
		margin: 0 auto;
		overflow:hidden;

		.logoArea {
			float: left;

			.logo {
				img {
					width: 175px;
					margin: 25px 45px;
				}
			}
		}

		.searchArea {
			float: right;
			margin-top: 35px;

			.searchForm {
				overflow: hidden;

				input {
					box-sizing: border-box;
					width: 490px;
					height: 32px;
					padding: 0px 4px;
					border: 2px solid #ea4a36;
					float: left;

					&:focus {
						outline: none;
					}
				}

				button {
					height: 32px;
					width: 68px;
					background-color: #ea4a36;
					border: none;
					color: #fff;
					float: left;
					cursor: pointer;

					&:focus {
						outline: none;
					}
				}
			}
		}
	}
}

</style>