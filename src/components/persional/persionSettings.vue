<template>
	<div class="wraper">
        <div class="container">
            <div class="personal-list" id="JPersonalList">
                <div class="personal-item info-personal">
                    <a href="javascript:void(0)" class="link">
                        <span class="label">个人信息</span>
                        <i class="icon nextpage-icon"></i>
                    </a>
                </div>
                <div class="personal-item adderss-personal">
                    <a href="javascript:void(0)" class="link">
                        <span class="label">收货地址</span>
                        <i class="icon nextpage-icon"></i>
                    </a>
                </div>
                <div class="personal-item adderss-personal">
                    <a href="javascript:void(0)" class="link">
                        <span class="label">修改密码</span>
                        <i class="icon nextpage-icon"></i>
                    </a>
                </div>
            </div>

            <div class="submit" id="JSubmit">
                <div class="button bind-click">
                    退出登录
                </div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return {

			}
		},
		activated(){
		    document.title = "个人设置";
		  },
	}
</script>
<style>
    body {
    background: #f8f8f8;
}
/* personal-list start */
.personal-list {
    background: #f9f9f9;
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
    /*background: url(./icon/personal/icon-nextpage.png) no-repeat;*/
    background-size: 100% 100%;
    position: absolute;
    right: 24px;
}
/* personal-list end */
/* 退出 start */
.submit {
    padding-bottom: 40px;
}

.submit .button {
    color: #333;
    font-size: 28px;
    line-height: 28px;
    display: block;
    padding: 36px 0;
    background-color: #fff;
    text-align: center;
}
/* 退出 end */

</style>