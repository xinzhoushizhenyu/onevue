<template lang="pug">
	<div id="app">
		<router-view></router-view>
		<foot></foot>
		div.box pug
			div.box2 111
		div.box2
			ul
				li(v-for="(v,k) in arr") {{v.name}}
			-var list = ["1","2","3"]
			each item in list
				li=item
		a(href="https://segmentfault.com/a/1190000006198621") 手册
		
	</div>
</template>

<script>
	import foot from './components/footer'
	export default {
		data() {
				return {
					arr:[
					{name:'首页'},
					{name:'分类'},
					{name:'购物车'},
					{name:'工业'},
					{name:'我的'}
					]
				}
			},
			components: {
				foot
			}
	}
</script>
<style>
.box{
	width: 500px;
	height: 500px;
	border: 1px solid #000;
}
.box2{
	width: 400px;
	height: 400px;
	border: 1px solid #f00;
}
</style>