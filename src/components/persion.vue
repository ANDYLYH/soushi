<template>
  <div class="persionContent">
    <div class="wraper">
            <div class="container">
                <div class="panel-person" id="JPanelPerson">
                    <div class="pic bind-click">
                        <img src="../img/persion/head.png" alt="">
                    </div>
                    <p class="name">点击登录</p>
                </div>
                <div class="personal-list" id="JPersonalList">
                    <div class="personal-item cerification-personal">
                        <a href="grrz.html" class="link">
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
                                    <i class="number"></i>
                                </i>
                                <span class="text">待付款</span>
                            </div>
                            <div class="order-item delivered-order" data-status="2">
                                <i class="icon delivered-icon">
                                    <i class="number active">10</i>
                                </i>
                                <span class="text">待发货</span>
                            </div>
                            <div class="order-item received-order" data-status="3">
                                <i class="icon received-icon">
                                    <i class="number active">1</i>
                                </i>
                                <span class="text">待收货</span>
                            </div>
                            <div class="order-item success-order" data-status="4">
                                <i class="icon success-icon">
                                    <i class="number active">43</i>
                                </i>
                                <span class="text">交易成功</span>
                            </div>
                            <div class="order-item cancel-order" data-status="-1">
                                <i class="icon cancel-icon">
                                    <i class="number"></i>
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
                                <i class="number">1</i>
                                <span class="text">商品收藏</span>
                            </div>
                            <div class="collection-item delivered-collection" data-status="2">
                                <i class="number">11</i>
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
                            <i class="icon nextpage-icon"></i>
                            <span class="number" style="display: inline;">3</span>
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

        <div class="footer">
          <div class="nav-list">
              <div class="nav-item home-nav ">
                  <router-link :to="{name: 'HelloWorld'}">
                      <i class="icon"></i>
                      <span class="text">首页</span>
                  </router-link>
              </div>
              <div class="nav-item jp-nav ">
                  <router-link :to="{name: 'list'}">
                        <i class="icon"></i>
                        <span class="text">图库</span>
                  </router-link>
              </div>
              <div class="nav-item photo-nav">
                  <router-link :to="{name: 'photo'}">
                      <i class="icon"></i>
                      <span class="text">拍照找石</span>
                  </router-link>
              </div>
              <div class="nav-item sxh-nav">
                 <router-link :to="{name: 'cashSale'}">
                      <i class="icon"></i>
                      <span class="text">现货</span>
                  </router-link>
              </div>
              <div class="nav-item personal-nav check-login bind-click active">
                  <router-link :to="{name: 'persion'}">
                      <i class="icon"></i>
                      <span class="text">我的</span>
                  </router-link>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import api from "./../api/api"
// import "../reset.css!css-loader"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      percentageNum:0,
      dialog: false,
    }
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
    open () {
      this.dialog = true
    },
    close () {
      this.dialog = false
    },
  },
  mounted(){
    
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import '../css/persion.css'
</style>
