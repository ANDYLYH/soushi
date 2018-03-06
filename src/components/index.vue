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
  @import '../css/index.css'
</style>
