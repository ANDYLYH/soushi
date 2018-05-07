<template>
	<div class="searchContent">
		<div class="searchHeader-content">
			<span class="searchHeader-back" @click="back"></span>
			<div class="searchHeader-input">
				<input type="type" name="" placeholder="搜索" v-model="msg" v-focus>
				<span class="searchHeader-search" @click="searchFn"></span>
			</div>
		</div>
		<h1 style="font-size: 30px;margin-top: 80px;" >搜索页</h1>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {
				title:'搜索页',
				msg:'',
			}
		},
		activated(){
           document.title = "搜索";
		},
		created(){
			 this.msg = this.$store.state.list_keyword;
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			searchFn(){
				this.back();
				this.$store.state.list_keyword = this.msg;
			}
		},
		components:{
			
		},
		directives: {
		  focus: {
		    // 指令的定义
		    inserted: function (el) {
		      el.focus()
		    }
		  }
		}
	}
</script>
<style scoped>
	@import '../../css/search.css'
</style>