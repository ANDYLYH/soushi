<template>
	<div class="photoContent">
	 <div class="header-content">
	  	 <span class="header-text">{{title}}</span>
	  </div>
	  <div class="wraper">
	        <div class="container">
	            <div class="submit">
	                <div class="padding">
	                    <div class="button">
	                        <span>上传图片，轻松找货</span>
	                        <input type="file" class="file bind-change" accept="image/jpeg,image/png,image/jpg">
	                    </div>
	                </div>
	            </div>
	        </div>
	    </div>
		<!-- 底部 -->
		<div class="footer">
			<div class="nav-list">
				<div class="nav-item home-nav ">
					<router-link :to="{name: 'HelloWorld'}">
						<i class="icon"></i>
						<span class="text">首页</span>
					</router-link>
				</div>
				<div class="nav-item jp-nav ">
					<router-link :to="{name: 'list'}">
						<i class="icon"></i>
						<span class="text">图库</span>
					</router-link>
				</div>
				<div class="nav-item photo-nav active">
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
<script >
	export default {
		data(){
			return {
				title:'拍照找石',
			}
		},
		beforeCreate(){
			document.title = "拍照找石";
		},

	}
</script>
<style scoped>
.photoContent{
	margin: 0;padding: 0;width: 100vw;height: 100vh;background: url(../img/bg.png) no-repeat center center;background-size: 100%;padding-bottom: 96px;
}
.wraper, .container, .m-bg {
    height: 100%;
}


.button {
    border-radius: 50px;
    width: 600px;
    height: 100px;
    background: linear-gradient(to right, rgb(86, 119, 248), rgb(63, 168, 255));
    position: absolute;
    bottom: 226px;
    text-align: center;
    line-height: 100px;
    left: 50%;
    margin-left: -300px;
}

.button span {
    border: 0;
    color: #fff;
    font-size: 30px;
    display: inline-block;
}

.file{
    display: block;
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    top: 0;
}

.masker-tips-loading .m-box{
    padding: 20px 30px;
}

.masker-tips-loading .m-box i{
    display: inline-block;
    height: 15px;
    width: 15px;
    border-radius: 100%;
    margin: 6px;
    border: 2px solid #fff;
    border-bottom-color: transparent;
    vertical-align: middle;
    -webkit-animation: rotate 0.75s linear infinite;
    animation: rotate 0.75s linear infinite;
}

.masker-tips-loading .m-box span{
    color: #fff;
}
</style>