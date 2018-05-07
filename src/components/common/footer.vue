<template>
	<div class="footer">
		<div class="nav-list">
			<div :class="name == 'index' ? 'active' : ''" class="nav-item home-nav ">
				<router-link :to="{name: 'index'}">
					<i class="icon"></i>
					<span class="text">首页</span>
				</router-link>
			</div>
			<div :class="name == 'map' ? 'active' : ''" class="nav-item jp-nav ">
				<router-link :to="{name: 'map'}">
					<i class="icon"></i>
					<span class="text">图库</span>
				</router-link>
			</div>
			<div :class="name == 'photo' ? 'active' : ''" class="nav-item photo-nav">
				<router-link :to="{name: 'photo'}">
					<i class="icon"></i>
					<span class="text">拍照找石</span>
				</router-link>
			</div>
			<div :class="name == 'cashSale' ? 'active' : ''"  class="nav-item sxh-nav">
				<router-link :to="{name: 'cashSale'}">
					<i class="icon"></i>
					<span class="text">现货</span>
				</router-link>
			</div>
			<div :class="name == 'persion' ? 'active' : ''" class="nav-item personal-nav check-login bind-click">
				<router-link :to="{name: 'persion'}">
					<i class="icon"></i>
					<span class="text">我的</span>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
	      name: '',
	    }
	}
</script>