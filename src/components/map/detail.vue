<template>
	<div class="detilsContent">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in detailImgs">
					<img  src="../../img/bitmap.png" :data-src="item" class="swiper-img swiper-lazy" @click="clickImg">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
	</div>
	
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
// import API from "./../../api"
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
import BigImg from '@/components/map/BigImg'
export default {
	data(){
		return {
			detailImgs:[],
			title:'详情',
			showImg:false,
			imgSrc:''
		}
	},
	activated(){
		console.log(1)
	},
	components: {
        'big-img':BigImg
    },
	created(){	
		this.$store.state.home = false;
		const $self = this;
		// 图库详情 请求
		// API.map.detail({
		// 	"stoneLibId": $self.$route.params.id,
		// }).then((res) => {
		// 	$self.detailImgs.push(res.data.data.detail.standardImage);
		// 	if(res.data.data.detail.assistantImageList.length > 0){
		// 		for(let i = 0 ; i < res.data.data.detail.assistantImageList.length ; i++){
		// 			$self.detailImgs.push(res.data.data.detail.assistantImageList[i].assistantImageList);
		// 		}
		// 	}
		// 	$self.title = res.data.data.detail.chineseName || '详情';
		// 	document.title = res.data.data.detail.chineseName || "详情";
		// });
		getDataFn(config.detail,{"stoneLibId": $self.$route.params.id},function(res){
			$self.detailImgs.push(res.data.detail.standardImage);
			if(res.data.detail.assistantImageList.length > 0){
				for(let i = 0 ; i < res.data.detail.assistantImageList.length ; i++){
					$self.detailImgs.push(res.data.detail.assistantImageList[i].assistantImageList);
				}
			}
			document.title = res.data.detail.chineseName || "图库详情";
		})	
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		_initSwiper() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
				observer:true, //修改swiper自己或子元素时，自动初始化swiper
    			observeParents:true,//修改swiper的父元素时，自动初始化swiper
    			lazyLoading: true,
    		});
		},
		clickImg(e) {
            this.showImg = true;
            // 获取当前图片地址
            this.imgSrc = e.currentTarget.src;
            console.log(this.imgSrc)
        },
        viewImg(){
            this.showImg = false;
        },
	},
	mounted(){
		this._initSwiper();
	},
	computed:{
	}
}
</script>
<style scoped>
*{
	padding: 0;
	margin: 0;
}
.detilsContent{
	width: 100%;
	/*padding-top: 80px;*/
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
@import '../../css/map/details.css';
</style>
