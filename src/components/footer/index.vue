<template>
	<footer>
		<router-link to="/home">首页</router-link>
		<router-link to="/fenlei">分类</router-link>
		<router-link to="/shop">购物车</router-link>
		<router-link to="/about">关于</router-link>
	</footer>
</template>
<script>
	export default{
		name:'footer',
		data(){
			return{
				
			}
		}
	}
</script>
<style>
	a{
		text-decoration: none;
		color: #000;
	}
	.router-link-active{
		background-color: red;
		color: #fff;
	}
</style>