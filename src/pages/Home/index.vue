<template>
	<div>
		<!-- 首页路由组件 -->
    <!-- 商品分类子组件 -->
		<TypeNav></TypeNav>
		<ListContainer></ListContainer>
		<Recommned></Recommned>
		<Rank></Rank>
		<Like></Like>
		<Floor></Floor>
		<Brand></Brand>
	</div>
</template>

<script>
//局部组件:引入、注册、使用
//全局组件：只需要在入口文件定义一次,直接使用
import ListContainer from "./ListContainer";
import Recommned from "./Recommend";
import Rank from "./Rank";
import Like from "./Like";
import Floor from "./Floor";
import Brand from "./Brand";
import TypeNav from "@/components/TypeNav/index.vue";
export default {
	name: "Home",
	components: {
    ListContainer,
    Recommned,
    Rank,
    Like,
    Floor,
    Brand,
    TypeNav,
}
}
</script>

<style scoped lang="less">
	
</style>