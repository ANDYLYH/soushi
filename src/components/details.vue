<template>
	<div class="detilsContent">
		<!-- 头部 -->
		<div class="header-content">
			<span class="header-back" @click="back"></span>
			<span class="header-text">{{title}}</span>
		</div>
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in detailImgs"><img :src="item" class="swiper-img"></div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		
		<!--<mu-raised-button label="返回上一页" class="demo-raised-button" @click="back" primary/>-->
	</div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
import api from "./../api/api"
export default {
	data(){
		return {
			detailImgs:[],
			title:'大板详情'
		}
	},
	activated(){
		console.log(1)
	},
	created(){	
		document.title = "大板详情";
		this.$store.state.home = false;
		const $self = this;
		this.$http.get(api.detail,
		{
			params:{
				"stoneLibId": $self.$route.params.id,
			},
		}).then(function(res){
			$self.detailImgs.push(res.body.data.standardImage);
			if(res.body.data.assistantImageList.length > 0){
				for(let i = 0 ; i < res.body.data.assistantImageList.length ; i++){
					$self.detailImgs.push(res.body.data.assistantImageList[i].assistantImageList);
				}
			}
		});
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		_initSwiper() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 5000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
			})
		}
	},
	mounted(){
		this._initSwiper();
	},
	computed:{
		...mapGetters([
			'name',
			"textShow",
			"home"
			])
	}
}
</script>
<style  scoped>
*{
	padding: 0;
	margin: 0;
}
.detilsContent{
	width: 100%;
	padding-top: 80px;
}
.img{
	width: 100%;
	height: auto;
}
.img img{
	width: 100%;
}
.swiper-img{
	width: 750px;
}

</style>
