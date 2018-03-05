<template>
	<div class="saleDetails">
		<div class="header-content">
			<span class="header-back" @click="back"></span>
			<span class="header-text">{{title}}</span>
		</div>
		<div class="swiper-container swiper-container_1">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in detailImgs">
					<img :src="item.imageUrl" class="swiper-img">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="DetailsMsg">
			<div class="text_name">
				<span class="text_name_1">{{detailsObj.variety}}</span>
				<span class="text_name_2">按件：<b style="color: #f00;">{{detailsObj.salePrice}}</b>元/m²</span>
			</div>
			<p class="DetailsMsg_p">
				编号：{{detailsObj.blockNo}}
			</p>
			<p class="DetailsMsg_p">
				规格：{{detailsObj.length}} * {{detailsObj.width}} * {{detailsObj.thickness}} mm
			</p>
			<p class="DetailsMsg_p">
				数量：{{detailsObj.packetNum}}扎/{{detailsObj.blockSliceNum}}件/{{detailsObj.area}}m²
			</p>
			<p class="DetailsMsg_p">
				销售方式：{{detailsObj.saleMethodName}}
			</p>
		</div>
		<div class="split_line"></div>
		<div class="details_nav">
			<span class="details_navSpan active">详细码单</span>
			<span class="details_navSpan" >同种板材</span>
			<span class="details_navSpan">供应商</span>
		</div>
		<div class="split_line"></div>
		<div class="footer">
			<div class="detail-list" id="JDetailList">
				<div class="detail-item contact-detail">
					<div class="contact-button bind-click" id="JContactButton">
						<i class="icon icon-contact"></i>
						<span class="text">联系商家</span>
					</div>
				</div>  
				<div class="detail-item buy-detail">
					<div class="buy-button bind-click" id="JBuyButton">
						<i class="icon icon-buy"></i>
						<span class="text">搜石代购</span>
					</div>
				</div>
				<div class="detail-item collection-detail bind-click">    
					<div class="collection-button bind-click" id="JCollectionButton">
						<i class="icon icon-collection"></i>
						<span class="text">收藏</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {mapGetters,mapMutations} from 'vuex'
import api from "./../api/api"
export default {
	data(){
		return {
			detailImgs:[],
			title:'',
			detailsObj:{},
		}
	},
	beforeCreate(){
		
	},
	activated(){
		
	},
	created(){	
		this.getData();
	},
	methods:{
		back(){
			this.$router.go(-1);
		},
		getData(){
			const $self = this;
			this.$http.get(api.onsale_detail,
			{
				params:{
					"blockId": $self.$route.params.id,
				},
			}).then(function(res){
				$self.detailImgs = res.body.data.detail.imageInfoList;
				$self.title = res.body.data.detail.variety;
				$self.detailsObj = res.body.data.detail;
				document.title = res.body.data.detail.variety
			});
		},
		_initSwiper() {
			var mySwiper = new Swiper('.swiper-container', {
				autoplay: 5000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
			});
		}
	},
	mounted(){
		this._initSwiper();
		$('body').on('click','.details_navSpan',function(){
			$(this).addClass('active').siblings('.details_navSpan').removeClass('active');
		})
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
<style scoped>
*{
	margin: 0;padding: 0;
}
.saleDetails{
	width: 100%;padding-top: 80px;
}
.swiper-img{
	width: 100%;
	height: 564px;
}
.swiper-container_1{
	height: 564px;
}
/*msg*/
.DetailsMsg{
	width: 750px;overflow: hidden;padding: 12px 24px;
}
.text_name{
	width: 100%;overflow: hidden;padding: 15px 0;
}
.text_name_1{
	float: left;font-size: 36px;
	line-height: 36px;
	color: #000;
}
.text_name_2{
	float: right;font-size: 24px;display: block;
}
.DetailsMsg_p{
	font-size: 28px;
	padding: 15px 0;
	line-height: 28px;
	color: rgb(125, 125, 125);
}
.split_line{
	background: #f8f8f8;
	height: 20px;
	width: 100%;
}
.details_nav{
	height: 80px;
	width: 100%;
}
.details_nav .details_navSpan{
	font-size: 28px;
	display: inline-block;
	width: 25%;
	float: left;
	height: 80px;
	line-height: 80px;
	text-align: center;
	border-right: 1px solid rgb(225, 225, 225);
	box-sizing: border-box;
	background: #fff;
}
.details_nav .active{
	color: rgb(87, 120, 249);
}

/*detail-list start*/
.detail-list {
    position: fixed;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    bottom: 0px;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, .1),0px -1px 5px rgba(0, 0, 0, .1);
    -webkit-box-shadow: 0px 1px 5px rgba(0, 0, 0, .1),0px -1px 5px rgba(0, 0, 0, .1);
    -moz-box-shadow: 0px 1px 5px rgba(0, 0, 0, .1),0px -1px 5px rgba(0, 0, 0, .1);
    height: 96px;
    display: flex;
    display: -webkit-flex;
    z-index: 1;
}

.detail-list .detail-item{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
    border-right: 1px solid #f2f2f2;
    align-items: center;
    -webkit-align-items: center;
}

.detail-list .detail-item:last-child{
    border-left: 0px;
}

.detail-list .detail-item .contact-button,
.detail-list .detail-item .buy-button,
.detail-list .detail-item .collection-button{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    -webkit-justify-content: center;
    align-items: center;
    -webkit-align-items: center;
    width: 100%;
}

.detail-list .detail-item .contact-button .icon-contact{
    display: inline-block;
    width: 30px;
    height: 28px;
    background: url(../img/detail/contact.png) no-repeat;
    background-size: 100%;
}

.detail-list .detail-item .icon-buy{
    display: inline-block;
    width: 26px;
    height: 30px;
    background: url(../img/detail/buy.png) no-repeat;
    background-size: 100%;
}

.detail-list .collection-button .icon{
    width: 30px;
    height: 27px;
    display: inline-block;
    background: url("../img/detail/uncollect.png") no-repeat;
    background-size: 100%;
}

.detail-list .collection-button.active .icon{
     background: url("../img/detail/collect.png") no-repeat;
     background-size: 100%;
}

.detail-list .text{
    margin-left: 10px;
    font-size: 28px;
    margin-bottom: 3px;
}
</style>