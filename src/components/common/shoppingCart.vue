<template>
	<div class="g-doc" id="Jdoc">
    <div class="header">
        
    </div>
    
    <div class="wraper">
        <div class="container">
            <div class="pic-list render-html cart-result-list" id="JCartResultList">
				<div class="result-item">
						<div class="select delegate-click active"></div>
						<div class="pic">
							<img src="http://soushi-template.oss-cn-shenzhen.aliyuncs.com/12/83788549dc790dcf67ee7b4d563b5210.jpeg?x-oss-process=style/high" data-src="http://soushi-template.oss-cn-shenzhen.aliyuncs.com/12/83788549dc790dcf67ee7b4d563b5210.jpeg?x-oss-process=style/high"
							class="bitmap-img big-pic lazy-loaded" alt="">
						</div>
						<div class="txt-wrapper">
							<span class="name">巴黎米黄<i class="count">×1</i></span>
							<span class="number">编号：73|150|1209|512</span>
							<span class="format">规格：150 * 150 * 16mm</span>
							<span class="price">¥10</span>
						</div>
						<div class="delete delegate-click">删除</div>
				</div>
				<div class="result-item">
					<div class="select delegate-click"></div>
					<div class="pic">
						<img src="http://soushi-template.oss-cn-shenzhen.aliyuncs.com/12/c45cd386bd93856538a7e13bad8571d7.jpeg?x-oss-process=style/high" data-src="http://soushi-template.oss-cn-shenzhen.aliyuncs.com/12/c45cd386bd93856538a7e13bad8571d7.jpeg?x-oss-process=style/high"
						class="bitmap-img big-pic lazy-loaded" alt="">
					</div>
					<div class="txt-wrapper">
						<span class="name">巴黎米黄<i class="count">×1</i></span>
						<span class="number">编号：73|150|1209|511</span>
						<span class="format">规格：150 * 150 * 16mm</span>
						<span class="price">¥10</span>
					</div>
					<div class="delete delegate-click">删除</div>
				</div>	
				<div class="result-item" >
					<div class="select delegate-click"></div>
					<div class="pic">
						<img src="http://soushi-template.oss-cn-shenzhen.aliyuncs.com/12/7ed3d72fd73bb2fa63f28c32f19b5ca2.jpeg?x-oss-process=style/high" data-src="http://soushi-template.oss-cn-shenzhen.aliyuncs.com/12/7ed3d72fd73bb2fa63f28c32f19b5ca2.jpeg?x-oss-process=style/high"
						class="bitmap-img big-pic lazy-loaded" alt="">
					</div>
					<div class="txt-wrapper">
						<span class="name">巴黎米黄<i class="count">×1</i></span>
						<span class="number">编号：73|150|1209|510</span>
						<span class="format">规格：150 * 150 * 16mm</span>
						<span class="price">¥10</span>
					</div>
					<div class="delete delegate-click">删除</div>
				</div>
			</div>
            <div class="result-masker no-data-result-masker active" id="JNoDataResultMasker" style="display:none">
                <div class="pic">
                    <img src="../../img/no-data.png" alt="">
                </div>
                <span class="text">购物车中没有商品</span>
                <a href="javascript:window.history.go(-1)" class="return-back">返回上一页</a>
            </div>
        </div>
    </div>

    <div class="footer">
        <div class="account-bar fixed" id="JAccountBar">
            <div class="account-info">
                <div class="all-select bind-click">
                    <i class="select"></i>
                    <span class="text">全选</span>
                </div>
                <div class="account-text">
                    <i class="m-text">¥{{selectNum*10}}</i>
                </div>
            </div>
            <div class="account-button bind-click">去结算  ({{selectNum*10}})</div>
        </div>
    </div>

    <!-- <div class="tips-masker">
        <div class="tips-container">
            <div class="tips-content">
                <span class="text"></span>
            </div>
        </div>
    </div> -->

    <!-- <div class="confirm-masker" id="JConfirmMasker">
        <div class="show-masker bind-click"></div>
        <div class="masker-container">
            <div class="masker-box">
                <div class="title">确认删除该样板?</div>
                <div class="button-list">
                    <div class="button-item cancel-button bind-click">取消</div>
                    <div class="button-item confirm-button bind-click">确认</div>
                </div>
            </div>
        </div>
    </div> -->
</div>
</template>
<script >
	export default {
		data(){
			return {
				selectNum:0,
			}
		}
	}
</script>
<style>
	.cart-result-list {
    padding:0px 24px 90px 24px;
}

.cart-result-list .result-item{
    display: -webkit-flex;
    display: flex;
    position: relative;
    padding-top: 24px;
}

.cart-result-list .result-item .pic,
.cart-result-list .result-item .pic img{
    width: 180px;
    height: 180px;
}

.cart-result-list .result-item .txt-wrapper{
    margin-left: 30px;
    -webkit-flex: 1;
    flex: 1;
    border-bottom: 1px solid #f2f2f2;
}

.cart-result-list .result-item span{
    display: block;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 24px;
}

.cart-result-list .result-item .name{
    font-size: 30px;
    line-height: 30px;
    color: #000;
}

.cart-result-list .result-item .name .count{
    font-size: 22px;
    float: right;
    color: #666;
}

.cart-result-list .result-item .number,
.cart-result-list .result-item .format {
    color: rgb(102, 102, 102);
}

.cart-result-list .result-item .price {
    font-size: 36px;
    line-height: 36px;
    color: rgb(226, 56, 59);
    font-weight: bold;
}

.cart-result-list .result-item .delete{
    position: absolute;
    right: 0px;
    bottom: 20px;
    font-size: 26px;
    padding: 10px 0px 10px 24px;
    border-left: 1px solid rgb(225, 225, 225);
}

.cart-result-list .result-item .select{
    width: 50px;
    height: 180px;
    position: relative;
}

.cart-result-list .result-item .select:before{
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(0, -50%);
    -webkit-transform: translate(0, -50%);
    background: url("../../img/icon_default.png") no-repeat 0 0;
    background-size: contain;
    width: 30px;
    height: 30px;
}

.cart-result-list .result-item .select.active:before{
    background: url("../../img/icon_selected.png") no-repeat 0 0;
    background-size: contain;
}

.account-bar {
    height: 80px;
    bottom: 0px;
    width: 100%;
    display: -webkit-flex;
    display: flex;
    z-index: 9;
    position: fixed;
}

.account-bar .account-info {
    -webkit-flex: 2;
    flex: 2;
    padding-left: 20px;
    display: -webkit-flex;
    display: flex;
    border-top: 1px solid #e1e1e1;
    background: #fff;
}

.account-bar .all-select {
    width: 100px;
    line-height: 80px;
    margin-right: 180px;
}

.account-bar .all-select .text{
    font-size: 26px;
    position: relative;
    margin-left: 5px;
}

.account-bar .all-select .select{
    display: inline-block;
    background: url(../../img/icon_default.png) no-repeat;
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    position: relative;
    top: 5px;
}

.account-bar .all-select.active .select{
    display: inline-block;
    /*background: url(../../images/grzx/collect/share.png) no-repeat;*/
    background-size: 100% 100%;
    width: 30px;
    height: 30px;
    position: relative;
    top: 5px;
}

.account-bar .account-text {
    -webkit-flex: 1;
    flex: 1;
}

.account-bar .account-text span.number{
    font-size: 30px;
    line-height: 80px;
}

.account-bar .account-text .icon-rmb{
    /*background: url(../../images/sxh/icon_rmb.png) no-repeat;*/
    background-size: contain;
    width: 24px;
    height: 24px;
    display: inline-block;
    margin-left: 20px;
    position: relative;
    top: 3px;
}

.account-bar .account-text .m-text{
    font-size: 36px;
    color: rgb(226, 56, 59);
    font-weight: bold;
    position: relative;
    line-height: 80px;
}

.account-bar .account-button,.account-bar .account-button a {
    width: 300px;
    text-align: center;
    height: 80px;
    line-height: 80px;
    font-size: 28px;
    color: #fff;
    background: #ff002a;
}

/*result-masker start*/
.result-masker {
    text-align: center;
}

.result-masker .text{
    margin-bottom: 20px;
}

.result-masker .return-back{
    padding: 10px 45px;
    border: 1px solid #ddd;
    border-radius: 10px;
    background: #f8f8f8;
    font-size: 14px;
    color: #000;
}
/*result-masker end*/

.masker-tips-small {
    z-index: 20;
}
</style>