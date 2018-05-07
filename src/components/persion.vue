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

/* panel-person start */
.panel-person {
    width: 100%;
    height: 351px;
    background: url(../img/persion/focus.png) no-repeat;
    background-size: 100% 100%;
}

.panel-person .pic {
    padding-top: 64px;
    text-align: center;
    width: 135px;
    margin: 0 auto;
}

.panel-person img{
    border-radius: 50%;
    display: inline-block;
    margin: 0 auto;
}

.panel-person .name {
    text-align: center;
    color: #fff;
    font-size: 32px;
    line-height: 32px;
    padding-top: 30px;
}

/* panel-person end */

/* personal-list start */
.personal-list {
    background: #f9f9f9;
    padding-bottom: 96px;
}
.personal-list .personal-item{
    padding-left: 24px;
    margin-bottom: 24px;
    background: #fff;
}

.personal-list .personal-item .link {
    height: 100px;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    position: relative;
}

.personal-list .personal-item .label{
    color: #000;
    font-size: 28px;
}

.personal-list .personal-item .text{
    color: rgb(153, 153, 153);
    font-size: 28px;
}

.personal-list .personal-item .nextpage-icon{
    display: block;
    width: 14px;
    height: 27px;
    background: url(../img/persion/icon-nextpage.png) no-repeat;
    background-size: 100% 100%;
    position: absolute;
    right: 24px;
    top: 50%;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
}

.personal-list .cerification-personal .label{
    line-height: 32px;
}

.personal-list .cerification-personal .text{
    margin-left: 20px;
}

.personal-list .cerification-personal .button{
    font-size: 22px;
    padding: 7px 14px;
    border-radius: 5px;
    color: #fff;
    position: absolute;
    right: 57px;
    top: 50%;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
}

.personal-list .cerification-personal .authorized-button{
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

.personal-list .cerification-personal .unauthorized-button{
    background: #000;
}
/* order-personal start */
.personal-list .order-personal .title{
    height: 100px;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    position: relative;
    border-bottom: 1px solid rgb(225, 225, 225);
}

.personal-list .order-personal .title .check-all{
    color: rgb(153, 153, 153);
    font-size: 24px;
    position: absolute;
    right: 57px;
    top: 50%;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
}

.personal-list .order-personal .order-list {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    /* padding-right: 24px; */
    margin-left: -24px;
}   

.personal-list .order-personal .order-item {
    text-align: center;
    padding-top: 26px;
    box-sizing: border-box;
    flex: 1;
    -webkit-flex: 1;
}

.personal-list .order-personal .order-item .icon{
    position: relative;  
}

.personal-list .order-personal .obligation-order .icon{
    width: 50px;
    height: 40px;
    display: inline-block;
    background: url("../img/persion/obligation.png") no-repeat;
    background-size: 100% 100%;
}

.personal-list .order-personal .delivered-order .icon{
    width: 50px;
    height: 40px;
    display: inline-block;
    background: url("../img/persion/delivered.png") no-repeat;
    background-size: 100% 100%;
}

.personal-list .order-personal .received-order .icon{
    width: 50px;
    height: 35px;
    display: inline-block;
    background: url("../img/persion/received.png") no-repeat;
    background-size: 100% 100%;
    margin-bottom: 5px;
}

.personal-list .order-personal .success-order .icon{
    width: 40px;
    height: 40px;
    display: inline-block;
    background: url("../img/persion/success.png") no-repeat;
    background-size: 100% 100%;
}

.personal-list .order-personal .cancel-order .icon{
    width: 40px;
    height: 40px;
    display: inline-block;
    background: url("../img/persion/cancel.png") no-repeat;
    background-size: 100% 100%;
}

.personal-list .order-personal .order-item .number{
    background: rgb(226, 56, 59);
    border-radius: 12.5px;
    color: #fff;
    font-size: 20px;
    position: absolute;
    left: 29px;
    top: -9px;
    height: 25px;
    line-height: 25px;
    min-width: 25px;
    padding: 0 5px;
    box-sizing: border-box; 
    display: none;
}

.personal-list .order-personal .order-item .number.active{
    display: block;
}

.personal-list .order-personal .order-item .text {
    display: block;
    font-size: 26px;
    line-height: 26px;
    padding: 15px 0 25px 0;
}
/* order-personal end */

/* collection-personal start */
.personal-list .collection-personal .title{
    height: 100px;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    position: relative;
    border-bottom: 1px solid rgb(225, 225, 225);
}

.personal-list .collection-personal .collection-list {
    display: -webkit-flex;
    display: flex;
    justify-content: space-between;
    -webkit-justify-content: space-between;
    margin-left: -24px;
}   

.personal-list .collection-personal .collection-item {
    text-align: center;
    padding-top: 48px;
    box-sizing: border-box;
    flex: 1;
    -webkit-flex: 1;
}

.personal-list .collection-personal .collection-item .number{
    font-size: 30px;
    line-height: 30px;
    padding: 0 5px;
    box-sizing: border-box;
}

.personal-list .collection-personal .collection-item .text {
    display: block;
    font-size: 26px;
    line-height: 26px;
    padding: 31px 0 43px 0;
}

.personal-list .collection-personal .empty-collection {
    opacity: 0;
}

/* collection-personal end */

/* 购物车 start */
.personal-list .cart-personal .number{
    background: rgb(226, 56, 59);
    border-radius: 12.5px;
    color: #fff;
    font-size: 20px;
    height: 25px;
    line-height: 25px;
    min-width: 25px;
    padding: 0 5px;
    box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    margin-left: 10px;
    margin-top: 4px;
    display: none;
}

.personal-list .cart-personal .number.active{
    display: block;
}
/* 购物车 end */

/* 隐藏价格 start */
.personal-list .price-personal .hide-price {
    font-size: 28px;
    line-height: 28px;
    position: relative;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    height: 100px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: space-between;
    -webkit-justify-content: space-between;
}

.personal-list .price-personal .hide-price .toggle{
    position: relative;
    display: inline-block;
    padding-right: 25px;
}

.personal-list .price-personal .toggle .checkbox{
    display: none;
    width: auto;
}

.personal-list .price-personal .toggle-balanced .track{
    box-sizing: border-box;
    width: 62px;
    background-color: #E5E5E5;
    border: 2px solid #E5E5E5;
    border-radius: 31px;
    transition:all 0.2s ease-in-out;
}

.personal-list .price-personal .toggle .track .handle{
    transition:all 0.2s ease-in-out;
    width: 34px;
    height: 34px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 7px rgba(0, 0, 0, 0.35), 0 1px 1px rgba(0, 0, 0, 0.15);
}

.personal-list .price-personal .toggle.active .track {
    background-color: rgb(126, 211, 33);
    border: 2px solid  rgb(126, 211, 33);
}

.personal-list .price-personal .toggle.active .track .handle {
    transform: translate(24px, 0);
    background-color: #fff;
}
/* 隐藏价格 end */


</style>
