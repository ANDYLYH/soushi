<template>
	<transition>
		<div class="wraper" style="position:fixed;top: 0;background-color: #fff;z-index: 1000;right:0;left: 0;bottom:0;">
			<div class="container">
				<div class="list input-list" id="JInputList">
					<div class="input-item variety-input">
						<span class="label">品&nbsp;&nbsp;&nbsp;种：</span>
						<span class="text">{{name}}</span>
					</div>
					<div class="variety-list render-html" id="JVarietyList">
						<div class="variety-item">
							<div class="input-item format-input">
								<span class="label">
                                规&nbsp;&nbsp;&nbsp;格：
                            </span>
								<div class="format-list">
									<input class="format-item length" placeholder="长">
									<i class="multiple">×</i>
									<input class="format-item width" placeholder="宽">
									<i class="multiple">×</i>
									<input class="format-item thickness" placeholder="厚">
								</div>
								<div class="button add-button bind-click"></div>
							</div>
							<div class="input-item number-input number">
								<span class="label">件&nbsp;&nbsp;&nbsp;数：</span>
								<div class="count">
									<i class="min bind-click" @click="down">-</i>
									<span>
                                    <input type="text" class="bind-input"  v-model="sampleNum" placeholder="0">
                                </span>
									<i class="add bind-click" @click="add">+</i>
								</div>
								<div class="select">
									<select name="" id="">
										<option value="0">全部</option>
										<option value="1">光面</option>
										<option value="2">哑面</option>
										<option value="3">火烧面</option>
										<option value="4">荔枝面</option>
										<option value="5">水洗面</option>
										<option value="6">仿古面</option>
										<option value="7">其他</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="divider"></div>

					<div class="address-title title-list" id="JTitleList">
						<span class="title-item received-title">收件信息</span>
						<span class="title-item link-title">新增</span>
					</div>
					<div class="render-html address-list" id="JAddressList">
						<div class="address-item" data-item="{&quot;id&quot;:29,&quot;userId&quot;:2,&quot;province&quot;:20,&quot;provinceName&quot;:&quot;广东&quot;,&quot;city&quot;:321,&quot;cityName&quot;:&quot;广州&quot;,&quot;county&quot;:2216,&quot;countyName&quot;:&quot;天河&quot;,&quot;address&quot;:&quot;车陂南东宏国际广场&quot;,&quot;fullAddress&quot;:&quot;广东省广州市天河区车陂南东宏国际广场&quot;,&quot;name&quot;:&quot;华仔&quot;,&quot;mobile&quot;:&quot;18378400199&quot;,&quot;defaulted&quot;:1}">
							<div class="info-list">
								<p class="info-item default-info">默认地址</p>
								<p class="info-item name-phone-info"><span class="name">华仔</span><span class="phone">18378400199</span></p>
								<p class="info-item address-info"><span>广东省广州市天河区车陂南东宏国际广场</span></p>
							</div>
							<div class="item-address-editor clearfix"><span class="default-address delegate-click active"><i class="icon"></i></span></div>
						</div>
					</div>
					<div class="input-item">
						<span class="label">
                        备&nbsp;&nbsp;&nbsp;注：
                    </span>
					</div>
					<div class="textarea">
						<textarea placeholder="请输入备注"></textarea>
					</div>

				</div>
				<div class="submit fixed" id="JSubmit">
					<div class="button" style="background-color：#fff;color:#444;" @click="cancel">取消</div>
					<div class="button">提交</div>
				</div>
			</div>
		</div>
	</transition>
</template>
<script>
	export default {
		data(){
			return {
				sampleNum:0,
			}
		},
		 props: [
	     'name'
	    ],
		methods:{
			cancel(){
				this.$emit('clickcel');
			},
			add(){
				this.sampleNum++;
			},
			down(){
				if(this.sampleNum == 0){
					return ;
				}
				this.sampleNum--;
			}
		}
	}
</script>
<style scope>
.fade-enter-active,
.fade-leave-active {
    transition: all .5s linear;
    /*transform: translate3D(0, 0, 0);*/
    opacity: 1;
}

.fade-enter,
.fade-leave-active {
    /*transform: translate3D(100%, 0, 0);*/
     opacity: 0;
}   
	/* input-list start */
.input-list{

}

.input-list .input-item{
    display: flex;
    display: -webkit-flex;
    padding: 26px 0;
    position: relative;
    border-bottom: 1px solid #ddd;
    font-size: 28px;
    line-height: 28px;
    margin: 0 40px;
    align-items: center;
    -webkit-align-items: center;
}

.input-list .input-item:last-child{
    border-bottom: 0px;
}

.input-list .input-item .label{
    margin-right: 10px;
    color: #666;
}

.input-list .input-item .text{
    flex: 1;
    -webkit-flex: 1;
}

.input-list .format-input{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
}

.input-list .format-input .label{
    line-height: 64px;
}

.input-list .format-input .format-list{
    flex: 1;
    -webkit-flex: 1;
    display: flex;
    display: -webkit-flex;
}

.input-list .format-input .format-list .format-item{
    border: 1px solid #999999;
    border-radius: 5px;
    font-size: 28px;
    line-height: 64px;
    height: 64px;
    text-align: center;
    padding: 17px 10px;
    box-sizing: border-box;
    width: 125px;
}

.input-list .format-input .format-list .multiple{
    margin: 0 5px;
    line-height: 64px;
}

.input-list .format-input .button{
    margin-left: 30px;
    width: 42px;
    height: 42px;
    display: inline-block;
    position: absolute;
    top: 32px;
    right: 0;
    text-align: center;
    background: #fff;
    vertical-align: middle;
    line-height: 37px;
    padding: 5px;
    font-size: 26px;
    color: #999;
}

.input-list .format-input .button.add-button{
    background: url("../../img/icon_zj.png") no-repeat;
    background-size: 100% 100%;
}

.input-list .format-input .button.min-button{
    background: url("../../img/icon_sc.png") no-repeat;
    background-size: 100% 100%;
}

.input-list .format-input .add-button.active{
    border: 1px solid #03A3E7;
    color: #03A3E7;
}

.input-list .number-input .count {
    font-size: 26px;
    color: #999;
    line-height: 63px;
}

.input-list .number-input .count .min {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid #e2e2e2;
    border-radius: 50%;
    text-align: center;
    background: #fff;
    vertical-align: middle;
    line-height: 34px;
    padding: 5px;
    font-size: 36px;
}

.input-list .number-input .count span{
    display: inline-block;
    width: 80px;
    border-bottom: 1px solid #9a9a9a;
    color: #333;
    text-align: center;
}

.input-list .number-input .count input{
    display: inline-block;
    width: 80px;
    color: #333;
    text-align: center;
    border: 0;
}

.input-list .number-input .count .add {
    display: inline-block;
    width: 50px;
    height: 50px;
    border: 1px solid #e2e2e2;
    border-radius: 50%;
    text-align: center;
    background: #fff;
    vertical-align: middle;
    line-height: 34px;
    padding: 5px;
    font-size: 36px;
}

.input-list .number-input .count .active {
    color: #03A3E7;
    border: 1px solid #03A3E7;
}

.input-list .number-input .select{
    position: absolute;
    right: 0;
}
/* input-list end */
.divider{
    background: #f9f9f9;
    height: 20px;
}
/*title-list start*/
.title-list {
    padding: 26px 0;
    position: relative;
    border-bottom: 1px solid #ddd;
    margin-left: 40px;
}

.title-list .title-item{
    display: inline-block;
    margin-right: 30px;
    font-size: 28px;
    line-height: 28px;
}

.title-list .title-item.active {
    color: #03A3E7;
}
/*title-list end*/

/*address-list start*/
.address-list .address-item {
    padding: 15px 0;
    position: relative;
    border-bottom: 1px solid #ddd;
    margin-left: 40px;
}

.address-item .info-list{
    margin-right: 40px;
    padding-bottom: 0;
}

.address-item .info-list .info-item{
    padding: 15px 0;
    font-size: 28px;
    line-height: 28px;
}

.address-item .info-list .name-phone-info .name{
    width: 140px;
    display: inline-block;
}

.address-item .item-address-editor {
    position: absolute;
    right: 0;
    top: 50%;
    padding-top: 0;
    transform: translate(0, -50%);
}

.address-item .item-address-editor .default-address .icon {
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: middle;
    margin-right: 40px;
    background: url("../../img/icon_default.png") no-repeat;
    background-size: 100%;
}

.address-item .item-address-editor .default-address.active .icon{
    background: url("../../img/icon_selected.png") no-repeat;
    background-size: 100%;
}
/*address-list end*/


.textarea {
    margin: 0 40px 20px 40px;
}

textarea {
    display: block;
    height: 210px;
    background: #f8f8f8;
    border-radius: 10px;
    border: 1px solid #e1e1e1;
    width: 100%;
    padding: 15px 0 0 20px;
    resize: none;
    font-size: 26px;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
}

/*submit start*/
.submit{
	position: fixed;
    bottom: 0;
    width: 100%;
}

.submit .button{
	float: left;
    background: #03A3E7;
    color: #fff;
    font-size: 30px;
    line-height: 30px;
    padding: 26px 0;
    display: inline-block;
    width: 50%;
    /*background-image: -webkit-linear-gradient(to right, rgb(78, 147, 255) 0%, rgb(84, 192, 250) 100%);*/
    /*background-image: linear-gradient(to right, rgb(78, 147, 255) 0%, rgb(84, 192, 250) 100%);*/
    background-color: #4e93ff;
    text-align: center;
    border-top: 1px solid #e1e1e1;
    cursor: pointer;
}
.submit .button:nth-child(1){
	background-color: #fff;
}
/*submit end*/
</style>