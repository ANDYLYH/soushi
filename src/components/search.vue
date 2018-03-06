<template>
	<div class="searchContent">
		<div class="searchHeader-content">
			<span class="searchHeader-back" @click="back"></span>
			<div class="searchHeader-input">
				<input type="type" name="" placeholder="搜索">
				<span class="searchHeader-search"></span>
			</div>
		</div>
		<h1 style="font-size: 30px;margin-top: 80px;">搜索页</h1>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				title:'搜索页'
			}
		},
		activated(){
           document.title = "搜索";
		},
		methods:{
			back(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped>
	@import '../css/search.css'
</style>