<template>
    <!-- 过渡动画 -->
    <transition name="fade">
       <div class="guider-masker active" id="JGuiderMasker" >
            <div class="show-masker bind-click"></div>
            <div class="guider-container">
                <div class="m-box">
                    <div class="box-wrapper">
                        <div class="title">专业导购员一对一服务</div>
                        <div class="big-sale">搜石代购，价格还有优惠！</div>
                        <div class="text add-wx">添加导购员微信：soushi88</div>
                        <!-- <img src="./icon/detail/ewm.png" alt="" style="display: none;"> -->
                        <p class="phone-wrapper">
                            <span class="text">人工导购热线：0766-8520999</span>
                            <a class="phone" href="tel:0766-8520999">
                                <i class="icon"></i>
                            </a>
                        </p>
                    </div>
                    <div class="close bind-click" @click="close"></div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data(){
            return {

            }
        },
        methods:{
            close(){
                 this.$emit('clickclose');
            }
        }
    }
</script>
<style>
 /*动画*/
.fade-enter-active,
.fade-leave-active {
    transition: all .1s linear;
    /*transform: translate3D(0, 0, 0);*/
    opacity: 1;
}

.fade-enter,
.fade-leave-active {
    /*transform: translate3D(100%, 0, 0);*/
     opacity: 0;
}   
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

.guider-masker .m-box .big-sale {
    padding: 34px 0;
    font-size: 30px;
    color: rgba(255, 153, 0, 1);
}

.guider-masker .m-box .add-wx{
    font-size: 25px;
    line-height: 25px;
    padding: 34px 0 30px 0;
}

.guider-masker .m-box img{
    margin-bottom: 38px;
}

.guider-masker .m-box .phone-wrapper {
    font-size: 26px;
    line-height: 26px;
    color: #666;
    color: rgb(87, 120, 249);
    display:flex;
    display:-webkit-flex;
    background: rgb(248, 248, 248);
    height: 88px;
}

.guider-masker .m-box .phone-wrapper .text{
    flex: 1;
    -webkit-flex: 1;
    line-height: 88px;
}

.guider-masker .m-box .phone-wrapper .phone{
    width: 88px;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    justify-content: center;
    -webkit-justify-content: center;
}

.guider-masker .m-box .phone-wrapper .phone .icon{
    background: url(../../img/sample/phone.png) no-repeat;
    background-size: 100%;
    width: 40px;
    height: 40px;
}

.guider-masker .m-box .close {
    width: 100%;
    height: 166px;
    position: relative;
}

.guider-masker .m-box .close:after {
    content: '';
    background: url("../../img/sample/icon_gb.png") no-repeat;
    background-size: 100% 100%;
    width: 102px;
    height: 102px;
    margin:0 auto;
    display: block;
    position: relative;
    top: 64px;
}
/* 二维码弹窗 end*/
</style>