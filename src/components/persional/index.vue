<template>
  <div class="persionContent">
    <div class="wraper">
            <div class="container">
                <div class="panel-person" id="JPanelPerson">
                    <div class="pic bind-click">
                        <img src="../../img/persion/head.png" alt="">
                    </div>
                    <p class="name">{{userName}}</p>
                </div>
                <div class="personal-list" id="JPersonalList">
                    <div class="personal-item cerification-personal">
                        <a href="javascript:void(0)" class="link">
                            <span class="label">企业认证</span>
                            <span class="text"></span>
                            <i class="button authorized-button">已认证</i>
                            <i class="icon nextpage-icon"></i>
                        </a>
                    </div>
                    <div class="personal-item order-personal" id="JOrderPersonal">
                        <div class="title">
                            <span class="label">我的订单</span>
                            <span class="check-all">查看所有订单</span>
                            <i class="icon nextpage-icon"></i>
                        </div>
                        <div class="content order-list">
                            <div class="order-item obligation-order" data-status="1">
                                <i class="icon obligation-icon">
                                    <i class="number" v-show="payedOrderNum == 0 ? false:true">{{payedOrderNum}}</i>
                                </i>
                                <span class="text">待付款</span>
                            </div>
                            <div class="order-item delivered-order" data-status="2">
                                <i class="icon delivered-icon">
                                    <i class="number active" v-show="sendindOrderNum == 0 ? false:true">{{sendindOrderNum}}</i>
                                </i>
                                <span class="text">待发货</span>
                            </div>
                            <div class="order-item received-order" data-status="3">
                                <i class="icon received-icon">
                                    <i class="number active" v-show="sendindOrderNum == 0 ? false:true">{{sendindOrderNum}}</i>
                                </i>
                                <span class="text">待收货</span>
                            </div>
                            <div class="order-item success-order" data-status="4">
                                <i class="icon success-icon" >
                                    <i class="number active" v-show="finishedOrderNum == 0 ? false:true">{{finishedOrderNum}}</i>
                                </i>
                                <span class="text">交易成功</span>
                            </div>
                            <div class="order-item cancel-order" data-status="-1">
                                <i class="icon cancel-icon">
                                    <i class="number" v-show="invalidOrderNum == 0 ? false:true">{{invalidOrderNum}}</i>
                                </i>
                                <span class="text">失效</span>
                            </div>
                        </div>
                    </div>
                    <div class="personal-item collection-personal" id="JCollectionPersonal">
                        <div class="title">
                            <span class="label">我的收藏</span>
                        </div>
                        <div class="content collection-list" id="JCollectionList">
                            <div class="collection-item obligation-collection" data-status="1">
                                <i class="number">{{slabCollectNum}}</i>
                                <span class="text">商品收藏</span>
                            </div>
                            <div class="collection-item delivered-collection" data-status="2">
                                <i class="number">{{companyCollectNum}}</i>
                                <span class="text">商家收藏</span>
                            </div>
                            <div class="collection-item empty-collection" data-status="0">
                                <i class="number"></i>
                                <span class="text">待发货</span>
                            </div>
                            <div class="collection-item empty-collection" data-status="0">
                                <i class="number"></i>
                                <span class="text">待发货</span>
                            </div>
                            <div class="collection-item empty-collection" data-status="0">
                                <i class="number"></i>
                                <span class="text">待发货</span>
                            </div>
                        </div>
                    </div>
                    <div class="personal-item cart-personal" id="JCartPersonal">
                        <router-link to="/shoppingCarts"  class="link">
                            <span class="label">我的购物车</span>
                            <i class="icon nextpage-icon" ></i>
                            <span class="number" style="display: inline;" v-show="cartGoodsNum == 0 ? false:true">{{cartGoodsNum}}</span>
                        </router-link>
                    </div>
                    <div class="personal-item price-personal" id="JPricePersonal">
                        <div class="hide-price bind-click">
                            <span class="label">隐藏产品价格</span>
                            <label class="toggle toggle-balanced">
                                <div class="track">
                                    <div class="handle"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                    <div class="personal-item">
                        <router-link :to="{name:'persionSettings'}" class="link">
                            <span class="label">个人设置</span>
                            <i class="icon nextpage-icon"></i>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <ft :name="$router.currentRoute.name"></ft>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import foot from '@/components/common/footer'
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      percentageNum:0,
      dialog: false,
      cartGoodsNum:0,
      finishedOrderNum:0,
      invalidOrderNum:0,
      payedOrderNum:0,
      sendindOrderNum:0,
      slabCollectNum:0,
      companyCollectNum:0,
      cartGoodsNum:0,
      userName:'点击登录',
    }
  },
  components:{
    "ft":foot
  },
  beforeCreate(){
    document.title = "个人中心";
  },
  created(){
    this.$store.state.home = true;
    // console.log(api.searchTemplateCountList);
     
  },
  methods:{
    ...mapMutations([
        'change'
    ]),
    getPersonageCenterData:function(){
        const self = this;
        getDataFn(config.getPersonageCenterData,{},function(res){
             self.finishedOrderNum = res.data.finishedOrderNum;
             self.invalidOrderNum = res.data.invalidOrderNum;
             self.payedOrderNum = res.data.payedOrderNum;
             self.sendindOrderNum = res.data.sendindOrderNum;
             self.slabCollectNum = res.data.slabCollectNum;
             self.companyCollectNum = res.data.companyCollectNum;
             self.cartGoodsNum = res.data.cartGoodsNum;
        })
    },
    getMyProfile:function(){
        const self = this;
        getDataFn(config.getMyProfile,{},function(res){
            if(res.status.code == 0){
                self.userName = res.data.name;
            }else {

            }
         })
    }
  },
  mounted(){
    //获取订单数量
    this.getPersonageCenterData();
    // 获取个人信息
    this.getMyProfile();
    document.title = "个人中心";
  },
  computed:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../../css/persion.css';
</style>
