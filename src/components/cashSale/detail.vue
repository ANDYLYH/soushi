<template>
	<div class="saleDetails">
		<!-- <div class="header-content">
			<span class="header-back" @click="back"></span>
			<span class="header-text">{{title}}</span>unescape()
		</div> -->
		<div class="swiper-container swiper-container_1">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in detailImgs" >
					<img src="../../img/bitmap.png" :data-src="item.imageUrl" class="swiper-img swiper-lazy" :data-imglist="escape(detailImgs)" @click="clickImg">
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
			<span class="details_navSpan " :class="indexNum == 1 ? 'active' : ''" data-index="1" @click="tab">详细码单</span>
			<span class="details_navSpan" :class="indexNum == 2 ? 'active' : ''" data-index="2" @click="tab">同种板材</span>
			<span class="details_navSpan" :class="indexNum == 3 ? 'active' : ''" data-index="3" @click="tab">供应商</span>
		</div>
		<div class="split_line"></div>

		<div class="panel-list" id="JPanelList">
			<div class="panel-item bundle-panel" :class="indexNum == 1 ? 'active' : ''">
				<div class="bundle-control add-fixed">
					<div class="swiper-container2 swiper-container-horizontal">
						<div class="swiper-wrapper render-html" >
							<div class="swiper-slide delegate-click " v-for="(_data , _index) in packetInfos" :class="_index == idxNum ? 'swiper-slide-active' : ''" :data-idx="_index" @click="selectMemo">{{_data.packetNo}}扎</div>
						</div>
					</div>
				</div>
				<div class="bundle-wrapper">
					<ul class="bundle-list render-html" id="JBundleList">
						<li class="bundle-item " v-for="(memo , index) in packetInfos" :class="index == idxNum ? 'active' : ''">
							<div class="amount-list">
								<span class="amount-item slice-no-amount">{{detailsObj.blockNo}}-{{memo.packetNo}}</span>
								<span class="amount-item number-amount">小计：{{memo.packetSliceNum}}件</span>
								<span class="amount-item square-amount">共计：{{memo.packetTotalArea}}m²</span>
							</div>
							<div class="slide-list">
								<span class="slice-no slide-item">件号</span>
								<span class="slice-length slide-item">长mm</span>
								<span class="slice-width slide-item">宽mm</span>
								<span class="slice-thickness slide-item">厚mm</span>
								<span class="slice-lost-area slide-item">扣角m²</span>
								<span class="slice-area slide-item">面积m²</span>
							</div>
							<div class="row-list">
								<div class="row-item data-list" v-for="data in memo.slicesInfo">
									<span class="slice-no-data data-item">{{data.sliceNo}}</span>
									<span class="slice-length-data data-item">{{data.sliceLength}}</span>
									<span class="slice-width-data data-item">{{data.sliceWidth}}</span>
									<span class="slice-thickness-data data-item">{{data.sliceThickness}}</span>
									<span class="slice-lost-data data-item" v-html="data.totalLostAngleArea == 0 ? '--' : data.totalLostAngleArea"></span>
									<span class="slice-area-data data-item">{{data.sliceArea}}</span>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div class="panel-item slab-panel" :class="indexNum == 2 ? 'active' : ''">
				<!-- <div class="bg"></div> -->
				<div class="result-list render-html" id="JResultList">
					<div class="result-item delegate-click"  v-for="item in similar" @click="_reLoad">
						<router-link :to="{name:'SaleDetails',params:{id:item.idString}}">
							<div class="panel">
								<img :src="item.imageUrlList[0]" class="bitmap-img big-pic lazy-loaded" alt="" width="334" height="260">
								<div class="info">
									<p class="p-name">{{item.variety}}</p>
									<p class="p-format">规格：{{item.length}} * {{item.width}} * {{item.thickness}} mm</p>
									<div class="money-wrapper">
										<div class="login">
											<span class="label">{{item.saleMethodName}}：</span>
											<span class="text">{{item.salePrice}}</span>
											<i class="unit">元/m²</i></div>
									</div>
								</div>
							</div>
					    </router-link>
					</div>
				</div>
				<div class="dropload-down"><div class="dropload-noData">没有更多</div></div>
				<div class="result-masker no-data-result-masker" id="JNoDataResultMasker" v-show="similarFlag">
					<div class="pic">
						<img src="../../img/no-data.png" alt="">
					</div>
					<span class="text">暂无数据</span>
				</div>
			</div>
			<div class="supplier render-html panel-item supplier-panel" :class="indexNum == 3 ? 'active' : ''">
				<div class="render-html supplier-result-list" id="JSupplierResultList">

				</div>
				<div class="result-masker no-data-result-masker active" id="JSupplierNoDataResultMasker">
					<div class="pic">
						<img src="../../img/no-data.png" alt="">
					</div>
					<span class="text">暂无数据</span>
				</div>
			</div>
		</div>
		<div class="footer">
			<div class="detail-list" id="JDetailList">
				<!-- <div class="detail-item contact-detail">
					<div class="contact-button bind-click" id="JContactButton">
						<i class="icon icon-contact"></i>
						<span class="text">联系商家</span>
					</div>
				</div>  --> 
				<div class="detail-item buy-detail">
					<div class="buy-button bind-click" id="JBuyButton" @click="guiderFlag = true">
						<i class="icon icon-buy"></i>
						<span class="text">搜石代购</span>
					</div>
				</div>
				<div class="detail-item collection-detail bind-click">    
					<div class="collection-button bind-click " :class="collectionFlag ? 'active' : ''" @click="collectionFlag = !collectionFlag" id="JCollectionButton">
						<i class="icon icon-collection"></i>
						<span class="text" v-html="collectionFlag ? '已收藏' : '收藏'"></span>
					</div>
				</div>
			</div>
		</div>
		
		<!-- 预览大图 -->
		<big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc" :index="activeIndex"></big-img>
		<!-- 客服信息 -->
		<guider v-if="guiderFlag" @clickclose="closeView"></guider>
	</div>
</template>
<script type="text/javascript">
// import {mapGetters,mapMutations} from 'vuex'
// import API from "./../../api"
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
import BigImg from '@/components/common/BigImg'
import GuiDer from '@/components/common/guider'
import SampleOrder from '@/components/map/sampleOrder'
export default {
	data(){
		return {
			detailImgs:[],
			title:'',
			detailsObj:{},
			showImg:false,
			imgSrc:'',
			indexNum:1,
			similar:[],
			similarFlag:false,
			packetInfos:[],
			idxNum:0,
			guiderFlag:false,
			collectionFlag:false,
			SampleOrderFlag:false,
			mySwiper:null,
			activeIndex:null,
		}
	},
	inject:['reload'],
	components: {
        'big-img':BigImg,
        'guider':GuiDer,
        'sampleorder':SampleOrder
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
			// API.onsale.detail({
			// 		"blockId": $self.$route.params.id
			// 	}).then((res) => {
			//         $self.detailImgs = res.data.data.detail.imageInfoList;
			// 		$self.title = res.data.data.detail.variety;
			// 		$self.detailsObj = res.data.data.detail;
			// 		document.title = res.data.data.detail.variety
	  //       });
			getDataFn(config.slabDetail,{"blockId": $self.$route.params.id},function(res){
	            if(res.status.code == 0){
	               	$self.detailImgs = res.data.detail.imageInfoList;
					$self.title = res.data.detail.variety;
					$self.detailsObj = res.data.detail;
					document.title = res.data.detail.variety;

					$self.packetInfos = res.data.detail.packetInfos;
					$self.similar = res.data.similar;
					if(res.data.similar.length == 0){
						$self.similarFlag = true;
					}
	            }
	        })
		},
		_initSwiper() {
			var self = this;
			this.mySwiper = new Swiper('.swiper-container', {
				autoplay: 3000,//可选选项，自动滑动
				pagination : '.swiper-pagination',
				observer:true, //修改swiper自己或子元素时，自动初始化swiper
    			observeParents:true,//修改swiper的父元素时，自动初始化swiper
    			lazyLoading: true,
    			loop:true,
    			onSlideChangeEnd: function (swiper){
    				// console.log(swiper.activeIndex);
    				self.activeIndex = swiper.activeIndex;
    			}
			});
		},
		clickImg(e) {
            this.showImg = true;
            // 获取当前图片地址
            this.imgSrc = e.target.dataset.imglist;
        },
        viewImg(){
            this.showImg = false;
        },
        escape(obj){
        	return JSON.stringify(obj);
        },
         tab(e){
			this.indexNum = parseInt(e.target.dataset.index);
        },
        _reLoad(){
        	this.reload();
        },
        selectMemo(e){
        	this.idxNum = parseInt(e.target.dataset.idx);
        },
        closeView(){
        	this.guiderFlag = false;
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
	@import '../../css/SaleDetails.css';
	@import '../../css/common.css';
	.dropload-noData {
	    height: 80px;
	    line-height: 80px;
	    text-align: center;
	    position: relative;
	    font-size: 20px;
	    color: #999;
	}
	.dropload-noData:after {
	    content: '';
	    position: absolute;
	    background: url(../../img/no-more.png) no-repeat;
	    background-size: 100% 100%;
	    width: 308px;
	    height: 6px;
	    left: 50%;
	    top: 50%;
	    transform: translate(-50%, -50%);
	    -webkit-transform: translate(-50%, -50%);
	}
</style>