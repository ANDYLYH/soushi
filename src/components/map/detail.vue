<template>
	<div class="detilsContent">
		<div class="swiper-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item1 in detailImgs">
					<img  src="../../img/bitmap.png" :data-src="item1" class="swiper-img swiper-lazy" @click="clickImg">
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
		<div class="place" id="JPlace">
            <p class="name">{{chineseName}}</p>
            <div class="info">
            	<span class="label price-label">价格：</span>
            	<div class="place-info-list">
            		<div class="place-info-item">
            			<div class="money-wrapper">
            				<div class="login">
            					<span class="label">80头：</span>
            					<span class="text">{{priceDtoList[0]}}-{{priceDtoList[1]}}</span>
            					<i class="unit">元/m²</i>
            				</div>
            			</div>
            		</div>
            		<div class="place-info-item">
            			<div class="money-wrapper">
            				<div class="login">
            					<span class="label">70头：</span>
            					<span class="text">{{priceDtoList[2]}}-{{priceDtoList[3]}}</span>
            					<i class="unit">元/m²</i></div>
            				</div>
            			</div>
            			<div class="place-info-item">
            				<div class="money-wrapper">
            					<div class="login">
            						<span class="label">60头：</span>
            						<span class="text">{{priceDtoList[4]}}-{{priceDtoList[5]}}</span>
            						<i class="unit">元/m²</i>
            					</div>
            				</div>
            			</div>
            	</div>
            </div>
        </div>
        <div class="split-line"></div>

		<div class="producer" id="JProducer" style="top: 776px;">
                <div class="ctrl-list">
                    <span class="bind-click ctrl-item" :class="indexNum == 1 ? 'active':''" data-index="1" @click="tab">供应商</span>
                    <span class="bind-click ctrl-item" :class="indexNum == 2 ? 'active':''" data-index="2" @click="tab">品种信息</span>
                    <span class="bind-click ctrl-item" :class="indexNum == 3 ? 'active':''" data-index="3" @click="tab">选购样板</span>
                </div>
                <div class="panel-list">
                    <div class="panel-item supplier-panel" :class="indexNum == 1 ? 'active':''">
                        <div class="supplier-result-list" id="JSupplierResultList">
                        	<div class="result-item" data-companyid="4824" v-for="item in supplier">
                        		<div class="pic">
                        			<img :src="item.image" class="bitmap-img big-pic lazy-loaded">
                        		</div>
                        		<div class="text-wrapper">
                        				<p class="name">{{item.companyName}}</p>
                        				<p class="contact">联系人：{{item.contact}}</p>
                        				<p class="mobile">手&nbsp;&nbsp;&nbsp;机：{{item.mobile}}</p>
                        				<p class="address">地&nbsp;&nbsp;&nbsp;址：{{item.address}}</p>
                        				<p class="products">主&nbsp;&nbsp;&nbsp;营：{{item.products}}</p>
                        		</div>
                        	</div>
                        </div>
                        <div class="result-masker no-data-result-masker" id="JSupplierNoDataResultMasker" v-show="supplierFlag">
                            <div class="pic">
                                <img src="../../img/no-data.png" alt="">
                            </div>
                            <span class="text">暂无数据</span>
                        </div>
                        <div class="button-list">
                            <div class="guider-button bind-click button-item" @click="guiderFlag = !guiderFlag"><i class="icon"></i>客服</div>
                            <div class="send-button check-login bind-click button-item" @click="SampleOrderFlag = true">样板定制</div>
                            <div class="buy-button check-login bind-click button-item" @click="goShoppingCart">购物车  (0)</div>
                        </div>
                    </div>
                    <div class="panel-item variety-info-panel" :class="indexNum == 2 ? 'active':''">
                        <div class="variety-info-list">
                        	<div class="variety-info-item">
                        		<span class="text">类别：{{detail.kindName}}</span>
                        	</div>
                        	<div class="variety-info-item">
                        		<span class="text">颜色：{{detail.colorName}}</span>
                        	</div>
                        	<div class="variety-info-item">
                        		<span class="text">产地：{{detail.countryName}}</span>
                        	</div>
                        	<div class="variety-info-item">
                        		<span class="text">吸水率：{{detail.waterAbsorption}}</span>
                        	</div>
                        	<div class="variety-info-item">
                        		<span class="text">密度：{{detail.density}}</span>
                        	</div>
                        	<div class="variety-info-item">
                        		<span class="text">抗压强度：{{detail.strength}}</span>
                        	</div>
                        	<div class="">
                        		<span class="text">简介：{{detail.introduction}}</span>
                        	</div>
                        </div>
                        <div class="button-list">
                            <div class="guider-button bind-click button-item"  @click="guiderFlag = !guiderFlag"><i class="icon"></i>客服</div>
                            <div class="send-button check-login bind-click button-item" @click="SampleOrderFlag = true">样板定制</div>
                            <div class="buy-button check-login bind-click button-item" @click="goShoppingCart">购物车  (0)</div>
                        </div>
                    </div>
                    <div class="panel-item template-panel" :class="indexNum == 3 ? 'active':''">
                        <div class="select-list-wrapper">
                            <div class="content">
                                <div class="template-result-list render-html" id="JTemplateResultList"></div>
                                <div class="result-masker no-data-result-masker" id="JTemplateNoDataResultMasker" >
                                    <div class="pic">
                                        <img src="../../img/no-data.png" alt="">
                                    </div>
                                    <span class="text">暂无数据</span>
                                </div>
                        	</div>
                            <div class="button-list">
                                <div class="guider-button bind-click button-item"  @click="guiderFlag = !guiderFlag"><i class="icon"></i>客服</div>
                                <div class="send-button check-login bind-click button-item" @click="SampleOrderFlag = true">样板定制</div>
                                <div class="buy-button check-login bind-click button-item" @click="goShoppingCart">购物车  (0)</div>
                            </div>

                            <div class="template-ctrl-list" id="JTemplateCtrlList">
                                <div class="ctrl-item surface-ctrl bind-click" data-index="0">
                                    <span class="text">表面</span>
                                    <i class="icon icon-down"></i>
                                </div>
                                <div class="ctrl-item format-ctrl bind-click" data-index="1">
                                    <span class="text">规格</span>
                                    <i class="icon icon-down"></i>
                                </div>
                                <div class="ctrl-item thickness-ctrl bind-click" data-index="2">
                                    <span class="text">厚度</span>
                                    <i class="icon icon-down"></i>
                                </div>
                            </div>
                            <ul class="template-panel-list" id="JTemplatePanelList">
                                <li class="panel-item surface-panel option-list" data-index="0">
                                    <span class="option-item degelate-click all active" data-num="0" data-txt="表面">全部</span>
                                    <span class="option-item degelate-click" data-num="1">光面</span>
                                    <span class="option-item degelate-click" data-num="2">哑面</span>
                                    <span class="option-item degelate-click" data-num="3">火烧面</span>
                                    <span class="option-item degelate-click" data-num="4">荔枝面</span>
                                    <span class="option-item degelate-click" data-num="5">水洗面</span>
                                    <span class="option-item degelate-click" data-num="6">仿古面</span>
                                    <span class="option-item degelate-click" data-num="7">其他</span>
                                <span class="option-item delegate-click empty">空</span></li>
                                <li class="panel-item format-panel option-list" data-index="1">
                                    <span class="option-item degelate-click all active" data-width="0" data-length="0" data-txt="规格">全部</span>
                                    <span class="option-item degelate-click" data-width="100" data-length="100">100*100</span>
                                    <span class="option-item degelate-click" data-width="150" data-length="150">150*150</span>
                                    <span class="option-item degelate-click" data-width="200" data-length="200">200*200</span>
                                    <span class="option-item degelate-click" data-width="300" data-length="300">300*300</span>
                                    <span class="option-item degelate-click" data-width="1" data-length="1">其他</span>
                                </li>
                                <li class="active panel-item thickness-panel option-list" data-index="2">
                                    <span class="option-item degelate-click all active" data-num="0" data-txt="厚度">全部</span>
                                    <span class="option-item degelate-click" data-num="10">10</span>
                                    <span class="option-item degelate-click" data-num="14">14</span>
                                    <span class="option-item degelate-click" data-num="15">15</span>
                                    <span class="option-item degelate-click" data-num="16">16</span>
                                    <span class="option-item degelate-click" data-num="18">18</span>
                                    <span class="option-item degelate-click" data-num="20">20</span>
                                    <span class="option-item degelate-click" data-num="23">23</span>
                                    <span class="option-item degelate-click" data-num="25">25</span>
                                    <span class="option-item degelate-click" data-num="1">其他</span>
                                <span class="option-item delegate-click empty">空</span><span class="option-item delegate-click empty">空</span></li>
                                <div class="panel-masker"></div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

		<!-- 子组件 弹窗 -->
		<!-- 样板定制 -->
		<sampleorder v-if="SampleOrderFlag" @clickcel="SampleOrderFlag = false" :name="chineseName"></sampleorder>
		<!-- 客服信息  -->
		<guider v-if="guiderFlag" @clickclose="closeView"></guider>t
		<!-- 预览大图 -->
		<big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
	</div>
	
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
// import API from "./../../api"
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
import BigImg from '@/components/map/BigImg'
import GuiDer from '@/components/common/guider'
import SampleOrder from '@/components/map/sampleOrder'
export default {
	data(){
		return {
			detailImgs:[],
			title:'详情',
			showImg:false,
			imgSrc:'',
			chineseName:'',
			priceDtoList:[],
			supplier:[],
			indexNum:1,
			detail:new Object(),
			supplierFlag:false,
			sampleFlag:true,
			guiderFlag:false,
			SampleOrderFlag:false,
		}
	},
	components: {
        'big-img':BigImg,
        'guider':GuiDer,
        'sampleorder':SampleOrder
    },
	created(){	
	   // 初始化this.Init();
			const $self = this;
			getDataFn(config.detail,{"stoneLibId": $self.$route.params.id},function(res){
				$self.detailImgs.push(res.data.detail.standardImage);
				if(res.data.detail.assistantImageList.length > 0){
					for(let i = 0 ; i < res.data.detail.assistantImageList.length ; i++){
						$self.detailImgs.push(res.data.detail.assistantImageList[i].assistantImageList);
					}
				}
				document.title = res.data.detail.chineseName || "图库详情";
				$self.chineseName = res.data.detail.chineseName;
				$self.priceDtoList = [];
				for (var i = 0;i < res.data.detail.priceDtoList.length; ++i) {
				    $self.priceDtoList.push(res.data.detail.priceDtoList[i].lowPrice);
				    $self.priceDtoList.push(res.data.detail.priceDtoList[i].highPrice);
				}
				$self.supplier = res.data.supplier;
				$self.detail = res.data.detail;
				if(res.data.supplier.length == 0){
					$self.supplierFlag = true;
				}
			})
	},
	methods:{
		Init(){
			
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
        tab(e){
			this.indexNum = parseInt(e.target.dataset.index);
        },
        closeView(){
        	this.guiderFlag = false;
        },
        goShoppingCart(){
        	this.$router.push({path:'/shoppingCart'});
        }
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


.focus-wrapper {
    position: relative;
    z-index: 10;
}
/*焦点图 start*/
.focus .details-info {
    height: 70px;
    background: -webkit-linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.59));
    background: -moz-linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.59));
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.59));
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 10;
    padding: 21px 24px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.focus .details-info .details{
    color: #fff;
    font-size: 28px;
    line-height:1;
}

.focus .details-info .count {
    font-size: 28px;
    color: #fff;
    float: right;
}

.focus .details-info .count i{
    font-size: 26px;
}

.focus .swiper-container {
    width: 100%;
    height: 100%;
}

.focus .swiper-slide {
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

.focus .swiper-slide img {
    width: 100%;
    height: 564px;
}

.focus .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #fff;
}

.focus .swiper-pagination-bullet-active {
    background: #fff;
    width: 20px;
    border-radius: 5px;
}
/*焦点图 end*/

/*place start*/
.place {
    position: relative;
    z-index: 1;
    background: #fff;
    padding: 20px 0 20px 20px;
}

.place .name {
    font-size: 36px;
    line-height: 46px;
    padding: 10px 0;
}

.place .info {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}

.place .info .label{
    font-size: 28px;
    color: #000;
}

.place .info .price-label{
    line-height: 40px;
}

.place .info .place-info-list {
    -webkit-flex: 1;
    flex: 1;
    overflow: hidden;
}

.place-info-list .place-info-item {
    float: left;
    width: 50%;
    display: flex;
    /*padding: 11px 0;*/
}

.place-info-list .place-info-item .money-wrapper{
    padding: 0;
}

.place-info-list .place-info-item .text{
    font-size: 28px;
}

.place-info-list .place-info-item .unit{
    font-size: 28px;
    color: #000;
}
/*place end*/

/*producer*/
.producer{
    position: absolute;
    z-index: 1;
    background: #fff;
    width: 100%;
    top: 740px;
    bottom: 0;
}

.producer .ctrl-list{
    border-bottom: 2px solid #f2f2f2;
    padding-left: 20px;
    position: relative;
    z-index:20;
    background: #fff;
}

.producer .ctrl-list .ctrl-item{
    font-size: 28px;
    color: #656565;
    display: inline-block;
    padding: 28px 0px 28px 0;
    margin-right: 40px;
}

.producer .ctrl-list .ctrl-item.active{
    color: #03A3E7;
    border-bottom: 2px solid #03A3E7;
    margin-bottom: -1px;
}

.producer .panel-list {
    /*padding-bottom: 200px;*/
    padding-bottom: 85px;
}

.panel-list .panel-item{
    display: none;
}

.panel-list .panel-item.active{
    display: block;
}

/* 品种信息 start */
.panel-list .variety-info-panel {
    padding-top: 20px;
}

.panel-list .variety-info-list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-left: 20px;
}

.panel-list .variety-info-list .variety-info-item{
    width: 50%;
    box-sizing: border-box; 
}

.panel-list .variety-info-panel .text{
    font-size: 24px;
    line-height: 44px;
    color: #686868;
    display: block;
    margin-bottom: 10px;
}

/* 品种信息 end */

/* 客服、样板定制、购物车 start */
.button-list{
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    bottom: 0;
    width: 100%;
    z-index: 2;
    position: fixed;
}

.button-list.show-masker1{
    z-index: 0;
}

.button-list .button-item{
    -webkit-flex: 1;
    flex: 1;
    text-align: center;
    font-size: 28px;
    color: #fff;
    padding: 25px 0;
    line-height: 30px;
    height: 80px;
    box-sizing: border-box;
}

.button-list .guider-button {
    border-top: 1px solid #e1e1e1;
    color: #666;
    background: #fff;
}

.button-list .guider-button .icon {
    background: url(../../img/sample/guider.png) no-repeat;
    display: inline-block;
    margin-right: 5px;
    width: 40px;
    height: 34px;
    position: relative;
    vertical-align: middle;
}

.button-list .send-button {
    background: #ff6d6e;
    background: linear-gradient(to right, rgb(255, 76, 138), rgb(255, 168, 106));
}

.button-list .buy-button {
    background: #ff002a;
    background: linear-gradient(to right, rgb(78, 147, 255), rgb(84, 192, 250));
}
/* 客服、样板定制、购物车 end */

/* 二维码弹窗 start*/
.guider-masker{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: none;
}

.guider-masker.active {
    display: block;
}

.guider-masker .show-masker {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
}

.guider-masker .guider-container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    z-index: 11;
}

.guider-masker .box-wrapper {
    background: #fff;
    border-radius: 10px;
    width: 540px;
    text-align: center;
}

.guider-masker .m-box .title {
    padding: 34px 0;
    font-size: 30px;
    border-bottom: 1px solid #441414;
    background: linear-gradient(to right, rgb(86, 119, 248), rgb(63, 168, 255));
    background: -webkit-linear-gradient(to right, rgb(86, 119, 248), rgb(63, 168, 255));
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color: #fff;
}

.guider-masker .m-box .add-wx{
    font-size: 25px;
    line-height: 25px;
    padding: 34px 0 30px 0;
}

.guider-masker .m-box .ewm-wrapper {
    width: 380px;
    height: 380px;
}

.guider-masker .m-box .phone {
    font-size: 26px;
    color: #666;
    color: rgb(87, 120, 249);
    padding: 30px 0;
}

.guider-masker .m-box .close {
    width: 100%;
    height: 166px;
    position: relative;
}

.guider-masker .m-box .close:after {
    content: '';
    /*background: url("./icon/detail/icon_gb.png") no-repeat;*/
    background-size: 100% 100%;
    width: 102px;
    height: 102px;
    margin:0 auto;
    display: block;
    position: relative;
    top: 64px;
}
/* 二维码弹窗 end*/

/*选购样板 start*/
.select-list-wrapper {
    position: absolute;
    top: 80px;
    width: 100%;
    left: 0;
}

.template-ctrl-list {
    background: #f9f9f9;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 0;
}

.template-ctrl-list.fixed{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
}

.template-ctrl-list .ctrl-item {
    position: relative;
    font-size: 28px;
    line-height: 28px;
    color: #666;
    padding: 26px 25px;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    -webkit-align-items: center;
}

.template-ctrl-list .ctrl-item .icon-select{
    padding: 10px;
    margin-left: -10px;
}

.template-ctrl-list .ctrl-item.active .text{
    color: #03A3E7;
}


.template-ctrl-list .ctrl-item .icon-down{
    background: url(../../img/sample/pull.png) no-repeat;
    width: 18px;
    height: 12px;
    margin-left: 5px;
    margin-top: 5px;
}

.template-ctrl-list .ctrl-item.active .icon-down{
    background: url(../../img/sample/pull-active.png) no-repeat;
    width: 18px;
    height: 12px;
    margin-left: 5px;
    margin-top: 5px;
}

/* template-panel-list start */
.template-panel-list{
    bottom: 0;
    width: 100%;
    z-index: 100;
    position: absolute;
    display: none;
    top: 80px;
}

.template-panel-list.fixed{
    position: fixed;
}

.template-panel-list .panel-item{
    display: none;
    background: #fff;
    position: relative;
    z-index: 10;
    width: 100%;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    padding: 30px 0 10px 0;
}

.template-panel-list .panel-item.active{
    display: flex;
    display: -webkit-flex;
    flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding: 30px 25px 10px 25px;
}

.template-panel-list .panel-item .option-item{
    display: inline-block;
    width: 180px;
    font-size: 28px;
    line-height: 58px;
    height: 60px;
    text-align: center;
    border-radius: 30px;
    border: 1px solid rgb(226, 227, 229);
    box-sizing: border-box;
    margin-bottom: 20px;
}

.template-panel-list .panel-item .option-item.active{
    color: #fff;
    background-image: -webkit-linear-gradient(
        to right,
        rgb(86, 119, 248) 0%,
        rgb(63, 168, 255) 100%
    );
    background-image: linear-gradient(
        to right,
        rgb(86, 119, 248) 0%,
        rgb(63, 168, 255) 100%
    );
}

.template-panel-list .panel-masker{
    display: none;
    position: absolute;
    bottom: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.65);
    top: 0px;
}

.template-panel-list .panel-masker.active{
    display: block;
}

.template-panel-list .option-item.empty {
    opacity: 0;
}

/* template-panel-list end */

/* panel-list end */
.split-line{
    position: relative;
    z-index: 1;
}
.split-line {
    background: #f8f8f8;
    height: 20px;
}
.content {
    position: relative;
    padding-top: 80px;
    padding-bottom: 80px;
}
/*选购样板 start*/

/* 选购样板 template-result-list end */
.template-result-list{
    padding: 0 20px;
}

.template-result-list .pic-text{
    padding-top: 20px;
    display: -webkit-flex;
    display: flex;
    position: relative;
}

.template-result-list .pic-text .pic, .template-result-list .pic-text .pic img{
    width: 180px;
    height: 180px;
}

.template-result-list .pic-text .txt-wrapper{
    margin-left: 30px;
    -webkit-flex: 1;
    flex: 1;
    border-bottom: 1px solid #f2f2f2;
}

.template-result-list .pic-text span{
    display: block;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 24px;
}

.template-result-list .pic-text .name{
    font-size: 30px;
    line-height: 30px;
    color: #000;
}

.template-result-list .pic-text .name .count{
    font-size: 22px;
    float: right;
    color: #666;
}

.template-result-list .pic-text .number,
.template-result-list .pic-text .format {
    color: rgb(102, 102, 102);
}

.template-result-list .pic-text .price {
    font-size: 36px;
    line-height: 36px;
    color: rgb(226, 56, 59);
    font-weight: bold;
}

.template-result-list .pic-text .cart{
    position: absolute;
    bottom: 24px;
    right: 0;
    border-radius: 4px;
    border: 1px solid rgb(153, 153, 153);
    font-size: 28px;
    width: 180px;
    height: 60px;
    box-sizing: border-box;
    line-height: 58px;
    text-align: center;
}

.template-result-list .pic-text .cart.active{
    border: 0;
    color: #fff;
    background: linear-gradient(to right, rgb(78, 147, 255), rgb(84, 192, 250));
    background: -webkit-linear-gradient(to right, rgb(78, 147, 255), rgb(84, 192, 250));
}
/* 选购样板 template-result-list end */

/* dropload-down start */
.dropload-down {
    height: 80px;
    margin-bottom: 0px;
}
/* dropload-down end */

/* 弹窗切换 start*/
.swiper-masker{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    display: none;
}

.swiper-masker.active {
    display: block;
}

.swiper-masker .show-masker {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.65);
}

.swiper-masker .masker-container{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    z-index: 11;
}

.swiper-masker .slider{
    width: 750px;
    position: relative;
}

.swiper-masker .slider .details-info {
    height: 70px;
    width: 100%;
    z-index: 10;
    padding: 21px 24px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

.swiper-masker .slider .details-info .details{
    color: #fff;
    font-size: 28px;
    line-height:1;
}

.swiper-masker .slider .details-info .count {
    font-size: 28px;
    color: #fff;
    float: right;
}

.swiper-masker .slider .details-info .count i{
    font-size: 26px;
}
/* 弹窗 end*/
/* supplier-result-list start */
.supplier-result-list .result-item{
    padding: 20px;
    background: #fff;
    position: relative;
    overflow: hidden;
    border-bottom: 1px solid rgb(225, 225, 225);
}

.supplier-result-list .result-item .pic{
    width: 280px;
    height: 186px;
    float: left;
}

.supplier-result-list .result-item .pic img{
    width: 100%;
    height: 100%;
}

.supplier-result-list .result-item .text-wrapper{
    margin-left: 30px;
    float: left;
    width: 400px;
}

.supplier-result-list .result-item .text-wrapper p{
    color: rgb(153, 153, 153);
    font-size: 24px;
    line-height: 24px;
    margin-top: 15px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.supplier-result-list .result-item .text-wrapper .name{
    color: rgb(25, 25, 25);
    font-size: 28px;
    line-height: 28px;
    margin-top: 0px;
}

.supplier-result-list .result-item .text-wrapper .contact{
    margin-top: 20px;
}

.supplier-result-list .panel{
    background: #fff;
    position: relative;
}

.supplier-result-list .panel .info {
    padding: 20px 10px 20px;
}
/* supplier-result-list end */
/* result-masker start */
.result-masker{
    position: relative;
    bottom: 0;
    width: 100%;
    top: 0px;
    padding-top: 50px;
}

.result-masker.active{
    display: block;
}

.result-masker .pic{
    text-align: center;
    margin-bottom: 30px;
}

.result-masker .pic img{
    width: 220px;
    height: 220px;
}

.result-masker .text{
    display: block;
    font-size: 20px;
    text-align: center;
    color:rgb(125, 125, 125);
}

/* result-masker end */

@import '../../css/common.css';
/*@import '../../css/map/details.css';*/
</style>
