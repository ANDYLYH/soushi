<template>
  <div class="indexContent">
    <div class="swiper-container swiper-container1" id="jd_swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'boutique'}">
                    <img src="../../img/index/banner1.png" class="swiper-lazy" >
                  </router-link>
                </a>
            </div>
            <div class="swiper-slide">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'cashSale'}">
                    <img src="../../img/index/banner4.png" class="swiper-lazy" >
                  </router-link>
                </a>
            </div>
             <div class="swiper-slide">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'sample'}">
                    <img src="../../img/index/banner2.png" class="swiper-lazy" >
                  </router-link>
                </a>
            </div>
            <div class="swiper-slide">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'photo'}">
                    <img src="../../img/index/banner3.png" class="swiper-lazy" >
                  </router-link>
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
   	<div class="swiper-container swiper-container2" id="JSwiperContainer2">
        <div class="swiper-wrapper link-list">
            <div class="swiper-slide link-item wall-link">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'wall'}">
                    <i class="icon supplier-icon"></i>
                    <span class="text">背景墙</span>
                  </router-link>
                </a>
            </div>
            <div class="swiper-slide link-item jpsc-link">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'boutique'}">
                    <i class="icon jpsc-icon"></i>
                    <span class="text">精品商城</span>
                  </router-link>
                </a>
            </div>
            <div class="swiper-slide link-item sxh-link">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'cashSale'}">
                    <i class="icon sxh-icon"></i>
                    <span class="text">搜现货</span>
                  </router-link>
                </a>
            </div>
            <div class="swiper-slide link-item sctk-link">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'map'}">
                    <i class="icon sctk-icon"></i>
                    <span class="text">石材图库</span>
                  </router-link>
                </a>
            </div>
           
            <div class="swiper-slide link-item ybsc-link">
                <a href="javascript:void(0);">
                  <router-link :to="{name: 'sample'}">
                    <i class="icon"></i>
                    <span class="text">样板商城</span>
                  </router-link>
                </a>
            </div>
        </div>
    </div>
    <div class="split_line"></div>
    <div class="clearfix m-tit" >
        <span >精品推荐</span>
        <div class="fr right">|
            <a href="javascript:void(0)"><router-link :to="{name: 'cashSale'}">更多</router-link></a>
        </div>
    </div>

    <div id="minirefresh1" class="minirefresh-wrap"  style="" >
      <div class="minirefresh-scroll">
        <ul class="listContent_ul">
          <li v-for="item in list" class="list" data-num="1" :data-msg="changeMsg(item)">
            <router-link :to="{name:'SaleDetails',params:{id:item.idString}}">
              <img :src="item.imageUrlList[0]" />   
            </router-link>
            <p class="list-text list-chineseName">{{item.variety}}</p>
            <p class="list-text">规格：{{item.length}} * {{item.width}} * {{item.thickness}} mm</p>
            <p class="list-text">{{item.saleMethodName}}：<span style="color: rgb(226, 56, 59);font-weight: bold;font-size: 24px;">{{item.salePrice}}</span> 元/m²</p>
          </li>
        </ul>
      </div>
    </div>
     <!-- 底部导航 -->
     <ft :name="$router.currentRoute.name"></ft>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'
import foot from '@/components/common/footer'
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
export default {
  data () {
    return {
      dialog: false,
      list:[],
      pageCurrent:1,
      pageTotal:0,
      minirefresh: null,
      elements:{},
      open:false
    }
  },
  components:{
   'ft':foot
  },  
  beforeCreate(){
    document.title = "首页";
  },
  created(){
    // location.reload();
     
  },
  methods:{
    changeMsg(item){
       return JSON.stringify(item)
    },
    getMsg(e){
        console.log(e.path);

        // for (var i = 0; i < e.path.length; i++) {
        //     if(e.path[i].nodeName == 'LI'){
        //        console.log(e.path[i].dataset.msg) 
        //     }
        // }
        console.log($(this).data('msg'))
    },
    _initSwiper() {
      var mySwiper = new Swiper('.swiper-container1', {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 3000,
        paginationClickable: true,
        lazyLoadingInPrevNext: true,
        observer:true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      })
    },
    downCallback(){
      const $self = this;
      this.pageCurrent = 1;
      // API.onsale.search({
      //     "pageCurrent": $self.pageCurrent,
      //     "pageSize": 16
      //   }).then((res) => {
      //         $self.pageTotal = res.data.page.totalPage;
      //     $self.pageCurrent = res.data.page.pageCurrent;
      //     $self.list = [];
      //     for(let i = 0; i < res.data.data.list.length ;i++ ){
      //       $self.list.push(res.data.data.list[i]);
      //     }
      //     $self.miniRefresh.endDownLoading(true);
      //     if($self.pageTotal != $self.pageCurrent){
      //         $self.pageCurrent += 1;
      //       } 
      //     });
      getDataFn(config.slabQuery,{
          "pageCurrent": $self.pageCurrent,
          "pageSize": 16,
      },function(res){
          $self.pageTotal = res.page.totalPage;
          $self.pageCurrent = res.page.pageCurrent;
          $self.list = [];
          for(let i = 0; i < res.data.list.length ;i++ ){
            $self.list.push(res.data.list[i]);
          }
          // $self.miniRefresh.endDownLoading(true);
          if($self.pageTotal != $self.pageCurrent){
            $self.pageCurrent += 1;
          } 
      })
    },
    upCallback(){
      const $self = this;
      if($self.pageTotal == $self.pageCurrent){
        $self.miniRefresh.endUpLoading(true);
        return false;
      }
      // API.onsale.search({
      //     "pageCurrent": $self.pageCurrent,
      //     "pageSize": 16
      //   }).then((res) => {
      //         $self.pageTotal = res.data.page.totalPage;
      //     $self.pageCurrent = res.data.page.pageCurrent;
      //     for(let i = 0; i < res.data.data.list.length ;i++ ){
      //       $self.list.push(res.data.data.list[i]);
      //     }
      //     $self.miniRefresh.endUpLoading($self.pageTotal == $self.pageCurrent ? true : false);
      //     if($self.pageTotal != $self.pageCurrent){
      //         $self.pageCurrent += 1;
      //       }
      //     });
      getDataFn(config.slabQuery,{
          "pageCurrent": $self.pageCurrent,
          "pageSize": 8
      },function(res){
          $self.pageTotal = res.page.totalPage;
          $self.pageCurrent = res.page.pageCurrent;
          for(let i = 0; i < res.data.list.length ;i++ ){
            $self.list.push(res.data.list[i]);
          }
          $self.miniRefresh.endUpLoading($self.pageTotal == $self.pageCurrent ? true : false);
          if($self.pageTotal != $self.pageCurrent){
              $self.pageCurrent += 1;
            }
      })
    },
    paperScroll(){
      // this.$store.state.cashTop = $('#minirefresh').scrollTop();
    }
  },
  mounted () {

    this._initSwiper();
    var self = this;
    this.downCallback();
    // self.miniRefresh = new MiniRefresh({
    //   container: '#minirefresh1',
    //   down: {
    //     isLock: true,//默认false，不禁止下拉
    //     callback: self.downCallback
    //   },
    //   up: { 
    //     isAuto: true,
    //      isLock: true,
    //     callback: self.upCallback
    //   }
    // });
    // $('body').on('click','.list',function(){
    //   console.log($(this).data('msg'))
    // })
  },
  computed:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import '../../css/reset.css';
  @import '../../css/index.css';
  @import '../../css/cashSale.css';
  .minirefresh-wrap{
    position: relative;
  }
 
  #minirefresh1 .upwrap-tips,#minirefresh .minirefresh-downwrap .downwrap-content .downwrap-tips{
    font-size: 20px!important;
  }
  .swiper-pagination-bullet{
      width: 37px;
      height: 4px;
      background: rgb(216, 216, 216);
      opacity: 1;
      border-radius: 0;
  }
</style>
