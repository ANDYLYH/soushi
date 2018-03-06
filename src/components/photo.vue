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
	@import '../css/photo.css'
</style>