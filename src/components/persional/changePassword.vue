<template>
	<div class="g-doc" id="Jdoc">
    <div class="wraper">
        <div class="container">
            <div class="input-list" id="JInputList">
                <div class="input-item origin-password-input">
                    <span class="label">原密码</span>
                    <input type="password" class="password" placeholder="请输入原密码">
                </div>
                <div class="input-item new-password-input">
                    <span class="label">新密码</span>
                    <input type="password" class="password" placeholder="建议输入8位以上包含数字字母符号等">
                </div>
                <div class="input-item confirm-password-input">
                    <spna class="label">确认密码</spna>
                    <input type="password" class="password" placeholder="请再次确认">
                </div>
            </div>
            <div class="_submit" id="JSubmit">
                <div class="button">确认修改</div>
            </div>
        </div>
    </div>

    <div class="success-tips-masker">
        <div class="tips-container">
            <div class="tips-content">
                <p>
                    <i class="icon icon-success"></i>
                    <span class="text">修改成功<a href="javascript:void(0)" class="link">去登录</a></span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
@import '../../css/common.css';
	html, body {
    height: 100%;
    overflow: hidden;
}
body {
    background: #f8f8f8;
}

/* input-list start */
.input-list {
    background-color: #fff;
}

.input-list .input-item{
    margin-left: 40px;
    padding: 26px 0;
    border-bottom: 1px solid #ddd;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
}

.input-list .input-item .label{
    width: 130px;
    margin-right: 30px;
    color: #666;
    font-size: 28px;
    line-height: 28px;
}

.input-list .input-item input{
    flex: 1;
    -webkit-flex: 1;
    font-size: 28px;
    line-height: 28px;
    border: 0;
    outline: none;
}
/* input-list end */

/* submit start */
._submit{
    bottom: 0;
    width: 100%;
    position: fixed;
}

._submit .button{
    background: #03A3E7;
    color: #fff;
    font-size: 30px;
    line-height: 30px;
    padding: 26px 0;
    display: block;
    background-image: -webkit-linear-gradient(to right, rgb(78, 147, 255) 0%, rgb(84, 192, 250) 100%);
    background-image: linear-gradient(to right, rgb(78, 147, 255) 0%, rgb(84, 192, 250) 100%);
    text-align: center;
}
/* submit end */
</style>