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
		<ft :name="$router.currentRoute.name"></ft>
	</div>
</template>
<script >
	import foot from '@/components/common/footer'
	export default {
		data(){
			return {
				title:'拍照找石',
			}
		},
		beforeCreate(){
			document.title = "拍照找石";
		},
		components:{
			"ft":foot
		}
	}
</script>
<style scoped>
	@import '../../css/photo.css'
</style>