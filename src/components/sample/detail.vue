<template>
	<div class="g-doc" id="Jdoc">
    <div class="header">

    </div>

    <div class="wraper">
        <div class="container">
            <div class="ctrl-list" id="JCtrlList">
                <div class="surface-ctrl ctrl-item " :class="indexNum == 0 ? 'active' : ''">
                    <span class="text" @click="selectFn"  data-index="0">表面</span>
                    <i class="icon icon-down"></i>
                </div>
                <div class="format-ctrl ctrl-item" :class="indexNum == 1 ? 'active' : ''">
                    <span class="text" @click="selectFn" data-index="1">规格</span>
                    <i class="icon icon-down"></i>
                </div>
                <div class="thickness-ctrl ctrl-item" :class="indexNum == 2 ? 'active' : ''">
                    <span class="text" @click="selectFn" data-index="2">厚度</span>
                    <i class="icon icon-down"></i>
                </div>
            </div>
            <ul class="panel-list" id="JPanelList" v-if="show">
                <li class="surface-panel panel-item" data-index="0" v-show="indexNum == 0 ? true : false">
                    <span class="option-item delegate-click all active" data-num="0" data-txt="表面">全部</span>
                    <span class="option-item delegate-click" data-num="1">光面</span>
                    <span class="option-item delegate-click" data-num="2">哑面</span>
                    <span class="option-item delegate-click" data-num="3">火烧面</span>
                    <span class="option-item delegate-click" data-num="4">荔枝面</span>
                    <span class="option-item delegate-click" data-num="5">水洗面</span>
                    <span class="option-item delegate-click" data-num="6">仿古面</span>
                    <span class="option-item delegate-click" data-num="7">其他</span>
                <span class="option-item delegate-click empty">空</span></li>
                <li class="format-panel panel-item" data-index="1" v-show="indexNum == 1 ? true : false">
                    <span class="option-item delegate-click all active" data-width="0" data-length="0" data-txt="规格">全部</span>
                    <span class="option-item delegate-click" data-width="100" data-length="100">100×100</span>
                    <span class="option-item delegate-click" data-width="150" data-length="150">150×150</span>
                    <span class="option-item delegate-click" data-width="200" data-length="200">200×200</span>
                    <span class="option-item delegate-click" data-width="300" data-length="300">300×300</span>
                    <span class="option-item delegate-click" data-width="1" data-length="1">其他</span>
                </li>
                <li class="thickness-panel active panel-item" data-index="2" v-show="indexNum == 2 ? true : false">
                    <span class="option-item delegate-click all active" data-num="0" data-txt="厚度">全部</span>
                    <span class="option-item delegate-click" data-num="10">10</span>
                    <span class="option-item delegate-click" data-num="14">14</span>
                    <span class="option-item delegate-click" data-num="15">15</span>
                    <span class="option-item delegate-click" data-num="16">16</span>
                    <span class="option-item delegate-click" data-num="18">18</span>
                    <span class="option-item delegate-click" data-num="20">20</span>
                    <span class="option-item delegate-click" data-num="23">23</span>
                    <span class="option-item delegate-click" data-num="25">25</span>
                    <span class="option-item delegate-click" data-num="1">其他</span>
                <span class="option-item delegate-click empty">空</span><span class="option-item delegate-click empty">空</span></li>
                <div class="panel-masker"></div>
            </ul>
            
            <div class="content">
                <div class="cart-result-list render-html" id="JCartResultList">   
					<div class="result-item" data-item="" v-for="item in detailList">
	                	<div class="pic">
	                		<img :src="item.templateImage" alt="">
	                	</div>
	                	<div class="text-wrapper">
	                		<span class="name">海浪花</span>
	                		<span class="number">编号：234-150-2209-823</span>
	                		<span class="format">规格：150 * 150 * 18mm</span>
	                		<span class="price">¥10</span>
	                	</div>
	                	<div class="cart delegate-click">加入购物车</div>
					</div>
                </div>

                <div class="result-masker no-data-result-masker" id="JNoDataResultMasker" v-if="emptyFlag">
                    <div class="pic">
                        <img src="../../img/no-data.png" alt="">
                    </div>
                    <span class="text">暂无数据</span>
                </div>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="buttons-wrapper fixed button-list" id="JButtonList" style="position: fixed">
            <div class="guider-button button-item bind-click" ><i class="icon"></i><span class="text" @click="call">客服</span></div>
            <div class="send-button check-login button-item bind-click" @click="SampleOrderFlag=true">样板定制</div>
            <div class="buy-button check-login button-item bind-click"  @click="goShoppingCart">购物车  (0)</div>
        </div>
    </div>

    <div class="masker masker-tips masker-tips-small fixed">
        <div class="masker-container">
            <div class="m-box bg-black">
                <p>
                    <span></span>
                </p>
            </div>
        </div>
    </div>
    <!-- 样板定制 -->
    <sampleorder v-if="SampleOrderFlag" @clickcel="SampleOrderFlag = false" :name="title"></sampleorder>
    <!-- 客服信息  -->
    <guider v-if="guiderFlag" @clickclose="closeView"></guider>
    
</div>
</template>
<script>
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
import GuiDer from '@/components/common/guider'
import SampleOrder from '@/components/map/sampleOrder'
	export default {
		data(){
			return {
				emptyFlag:false,
				detailList:[],
				indexNum:null,
				show:false,
                guiderFlag:false,
                SampleOrderFlag:false
			}
		},
        components: {
            'guider':GuiDer,
            'sampleorder':SampleOrder
        },
		created(){	
			document.title = "样板详情";
			this.$store.state.home = false;
			const $self = this;
			$self.detailList=[];
			getDataFn(config.searchTemplates,{"stoneId": $self.$route.params.id,pageSize:100},function(res){
				
				// for (var i = 0, i < res.data.list.length; i++) {
				//     $self.detailList.push(res.data.list[i]);
				// }
				$self.detailList = res.data.list;
				document.title = "样板详情";
			})	
		},
		methods:{
			back(){
				this.$router.go(-1);
			},
			selectFn(e){
				if(e.target.dataset.index == this.index || this.index == null){
					this.show = !this.show;
				}else{
					this.show = true;
				}
				this.indexNum = parseInt(e.target.dataset.index);	
			},
			call(){
				this.guiderFlag = true;
			},
            closeView(){
                this.guiderFlag = false;
            },
            goShoppingCart(){
                this.$router.push({path:'/shoppingCart'});
            }
		},
		mounted(){
		},
	}
</script>
<style scoped>
	@import '../../css/sampleDetail.css';
	.minirefresh-scroll{
		padding: 0 20px;
	}
	.minirefresh-wrap{
		bottom: 80px;
	}
</style>