<template>
	<div>
		<h1>Search</h1>
		<h2>params---{{$route.params.keyword}}</h2>
		<h2>query---{{$route.query.keyword}}</h2>
	</div>
</template>

<script>
	export default {
		name: "Search",
		data(){
			return {
				searchParams: {
					keyword: "",

				}
			}
		},
		beforeMount() {
			Object.assign(this.searchParams, this.$route.query, this.$route.params);
		}
	}
</script>

<style scoped lang="less">
	
</style>