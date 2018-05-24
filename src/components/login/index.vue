<template>
	<div class="g-doc" id="Jdoc">
    <div class="wraper">
        <div class="container">
            <div class="logo">
                <div class="pic">
                    <img src="../../img/login/logo_1.png" alt="">
                </div>
                <div class="text">
                    让石材交易变得简单
                </div>
            </div>
            <div class="panel-box">
                <div class="input-list" id="JInputList">
                    <div class="input-item phone-input">
                        <span class="label">手机号</span>
                        <input type="text" class="phone" v-model="mobile" placeholder="请输入注册手机号">
                    </div>
                    <div class="input-item password-input">
                        <span class="label">密码</span>
                        <input type="password" class="password" v-model="password" placeholder="请输入账户密码">
                    </div>
                </div>
                <div class="bind-click submit-button" id="JSubmit" @click="login">登录</div>
                <div class="forget-password">
                    <a class="link" href="javascript:void(0)">忘记密码</a>
                </div>
            </div>
        </div>
    </div>

    <div class="register-bar">
        <div class="text">
            新用户注册：如果您没有账号请先
        </div>
        <div class="register-button">
        	<router-link :to="{name:'register'}">
	            <a class="link" href="javascript:void(0)">
	                	注册搜石网            		
	            </a>
	        </router-link>
        </div>
    </div>
</div>
</template>
<script>
import config from "./../../api/api"
import getDataFn from "./../../api/utilAjax"
	export default {
		data(){
			return {
				password:'',
				mobile:'',
			}
		},
		methods:{
			login(){
				const self = this;
				getDataFn(config.login,{
					password: self.password,
					mobile: self.mobile
				},function(res){
		            self.$router.push('/');
		         })
			}
		}
	}
</script>
<style scoped>
@import '../../css/login/login.css';
</style>