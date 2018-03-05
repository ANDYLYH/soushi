<template>
  <div class="indexContent">
    <div class="swiper-container swiper-container1" id="jd_swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href="../jpsc/jpsc.html">
                    <img src="../img/index/banner1.png" class="swiper-lazy" >
                </a>
            </div>
            <div class="swiper-slide">
                <a href="../sxh/sxh.html">
                    <img src="../img/index/banner4.png" class="swiper-lazy">
                </a>
            </div>
             <div class="swiper-slide">
                <a href="../ybsc/ybsc.html">
                    <img src="../img/index/banner2.png" class="swiper-lazy">
                </a>
            </div>
            <div class="swiper-slide">
                <a href="../pzzs/pzzs.html">
                    <img src="../img/index/banner3.png" class="swiper-lazy">
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
   	<div class="swiper-container swiper-container2" id="JSwiperContainer2">
        <div class="swiper-wrapper link-list">
            <div class="swiper-slide link-item jpsc-link">
                <a href="../jpsc/jpsc.html">
                    <i class="icon jpsc-icon"></i>
                    <span class="text">精品商城</span>
                </a>
            </div>
            <div class="swiper-slide link-item sxh-link">
                <a href="../sxh/sxh.html">
                    <i class="icon sxh-icon"></i>
                    <span class="text">搜现货</span>
                </a>
            </div>
            <div class="swiper-slide link-item sctk-link">
                <a href="../sctk/sctk.html">
                    <i class="icon sctk-icon"></i>
                    <span class="text">石材图库</span>
                </a>
            </div>
            <div class="swiper-slide link-item supplier-link">
                <a href="../supplier/supplier.html">
                    <i class="icon supplier-icon"></i>
                    <span class="text">供应商</span>
                </a>
            </div>
            <div class="swiper-slide link-item ybsc-link">
                <a href="../ybsc/ybsc.html">
                    <i class="icon"></i>
                    <span class="text">样板商城</span>
                </a>
            </div>
        </div>
    </div>
    <div class="split_line"></div>
   	<!-- <el-button type="primary" plain @click="change">改变</el-button> -->
    <mu-dialog :open="dialog" title="Dialog" @close="close">
      这是一个简单的弹出框
      <mu-raised-button slot="actions" @click="close"  label="取消"/>
      <mu-raised-button slot="actions" primary @click="confirm" label="确定"/>
    </mu-dialog>
      <div class="footer">
          <div class="nav-list">
              <div class="nav-item home-nav active">
                  <router-link :to="{name: 'HelloWorld'}">
                      <i class="icon"></i>
                      <span class="text">首页</span>
                  </router-link>
              </div>
              <div class="nav-item jp-nav">
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
              <div class="nav-item personal-nav check-login bind-click">
                  <router-link :to="{name: 'persion'}">
                      <i class="icon"></i>
                      <span class="text">我的</span>
                  </router-link>
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
    document.title = "首页";
  },
  created(){
  	this.$store.state.home = true;
  	// console.log(api.searchTemplateCountList);
    var self = this;
    const timer = setInterval(function(){
      if(self.percentageNum < 100){
        self.percentageNum ++;
      }else{
        clearInterval(timer);
      }
    },500)
     
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
    confirm(){
      this.dialog = false
      alert('按了确定键')
    },
    _initSwiper() {
      var mySwiper = new Swiper('.swiper-container1', {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000,
        speed: 1000,
        paginationClickable: true,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.indexContent{
  /*background-color: #f2f2f2;*/
  padding-bottom: 96px;
}
.split_line{
  background: #f8f8f8;
    height: 20px;
    width: 100%;
}
/**/
/*焦点图 start*/
.swiper-container1 {
    width: 100%;
    height: 100%;
}
.swiper-container1 .swiper-slide {
    font-size: 18px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    height: 380px;
}
.swiper-container1 .swiper-slide img{
    width: 100%;
    height: 100%;
}

#jd_swiper .swiper-pagination-bullet {
    width: 37px;
    height: 4px;
    background: rgb(216, 216, 216);
    opacity: 1;
    border-radius: 0;
}

#jd_swiper .swiper-pagination-bullet-active {
    background: #fff;
}
/* link-list start*/
.swiper-container2 {
    padding: 34px 0px;
    background-color: #fff;
    margin-bottom: 10px;
}

.swiper-container2 .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    width: 150px;
}
.swiper-container2 .swiper-slide a{
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
    -webkitk-flex-direction: column;
    flex-direction: column;
}

.swiper-container2 .swiper-slide .text{
    font-size: 24px;
    line-height: 24px;
    display: block;
}

.swiper-container2 .swiper-slide .icon{
    width: 90px;
    height: 90px;
    margin-bottom: 22px;
}

.swiper-container2 .jpsc-link .icon{
    background:url("../img/index/icon_boutique.png") no-repeat;
    background-size:100% 100%;
}

.swiper-container2 .sxh-link .icon{
    background:url("../img/index/icon_search.png") no-repeat;
    background-size:100% 100%;
}

.swiper-container2 .sctk-link .icon{
    background:url("../img/index/icon_gallery.png") no-repeat;
    background-size:100% 100%;
}

.swiper-container2 .supplier-link .icon{ 
    background:url("../img/index/supplier.png") no-repeat;
    background-size:100% 100%;
}

.swiper-container2 .ybsc-link .icon{
    background:url("../img/index/icon_Send.png") no-repeat;
    background-size:100% 100%;
}
</style>
