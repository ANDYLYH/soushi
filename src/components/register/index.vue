<template>
	<div class="g-doc" id="Jdoc">
    <div class="header">

    </div>

    <div class="wraper">
        <div class="container">
            <div class="panel panel-sh">
                <div class="pic">
                    <img src="../../img/login/logo_1.png" alt="">
                </div>
                <p>
                    让石材交易变得简单
                </p>
            </div>
            <div class="box panel-box">
                <div class="input-list" id="JInputList">
                    <div class="input-item company-input">
                        <span class="label"><i class="icon">*</i>公司名称</span>
                        <input type="text" class="company" placeholder="请输入公司名称">
                    </div>
                    <div class="input-item name-input">
                        <span class="label"><i class="icon">*</i>姓名</span>
                        <input type="text" class="name" placeholder="请输入姓名">
                    </div>
                    <div class="input-item phone-input">
                        <span class="label"><i class="icon">*</i>手机号</span>
                        <input type="text" class="phone" placeholder="请输入手机号">
                    </div>
                    <div class="input-item check-input">
                        <span class="label"><i class="icon">*</i>验证码</span>
                        <input type="text" class="check-number" placeholder="请输入验证码">
                        <input type="button" class="check-number-button bind-click" value="获取验证码">
                    </div>
                    <div class="input-item invite-input">
                        <span class="label">邀请码</span>
                        <input type="text" class="invite-number" placeholder="请输入邀请码">
                    </div>
                    <div class="input-item password-input">
                        <span class="label"><i class="icon">*</i>密码</span>
                        <input type="password" class="password" placeholder="请输入6位以上字符">
                    </div>
                    <div class="input-item confirm-password-input">
                        <span class="label"><i class="icon">*</i>确认密码</span>
                        <input type="password" class="confirm-password" placeholder="请确认密码">
                    </div>
                </div>
                <div class="_submit bind-click" id="JSubmit">
                    <div class="button button-normal button-blue">注册</div>
                </div>
                <div class="read active bind-click" id="JRead">
                    <span class="c6 icon-read"> 我已阅读并同意</span>
                    <span class="c03"> <a href="javascript:void(0)"><router-link :to="{name:'protocal'}">《搜石网用户注册协议》</router-link></a></span>
                </div>
            </div>
        </div>
    </div>
    
    <div class="success-tips-masker" >
        <div class="tips-container">
            <div class="tips-content">
                <p>
                    <i class="icon icon-success"></i>
                    <span class="text">注册成功<a href="javascript:void(0)" class="link"><router-link :to="{name: 'login'}"></router-link>去登录</a></span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
@import '../../css/reset.css';
@import '../../css/common.css';
@import '../../css/register/register.css';
</style>