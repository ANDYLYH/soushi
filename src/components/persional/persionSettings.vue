<template>
	<div class="wraper">
        <div class="container">
            <div class="personal-list" id="JPersonalList">
                <div class="personal-item info-personal">
                    <a href="./personalInfo.html" class="link">
                        <span class="label">个人信息</span>
                        <i class="icon nextpage-icon"></i>
                    </a>
                </div>
                <div class="personal-item adderss-personal">
                    <a href="./glshdz.html" class="link">
                        <span class="label">收货地址</span>
                        <i class="icon nextpage-icon"></i>
                    </a>
                </div>
                <div class="personal-item adderss-personal">
                    <a href="./xgmm.html" class="link">
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