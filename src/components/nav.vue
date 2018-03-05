<template>
	<div class="nav">
		<el-carousel :interval="5000" arrow="always">
		    <el-carousel-item v-for="item in 4" :key="item">
		      <h3>{{ item }}</h3>
		    </el-carousel-item>
		 </el-carousel>
		<el-button type="primary" plain @click="back">返回上一页</el-button>
	</div>
</template>
<script>
export default {
  name: 'app',
  data(){
  	return {
  		
  	}
  },
  created(){
  	this.$store.state.home = false;
  	console.log(this.$route.params)
  },
  methods:{
  	back(){
  		this.$router.go(-1);//路由-=-返回
  	}
  }
}
</script>
<style scoped>
.nav{
	width: 100%;
	overflow: hidden;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
    
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>