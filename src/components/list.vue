<template>
	<div class=" list-content">
	  <div class="header-content">
	  	 <span class="header-text">{{title}}</span>
	  </div>
	  <div id="minirefresh" class="minirefresh-wrap" @scroll="paperScroll()">
            <div class="minirefresh-scroll">
			  <ul class="listContent_ul">
			  		<li v-for="item in list" class="list">
			  			<router-link :to="{name:'details',params:{id:item.id}}">
			  			   <img :src="item.standardImage"/>   
			  			</router-link>
		  				<div class="small_imgList">
		  					<img :src="item.standardImage">
		  				</div>
			  			<p class="list-text list-chineseName">{{item.chineseName}}</p>
			  			<p class="list-text">编号：{{item.stoneNo}}</p>
			  		</li>
			  </ul>
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
	          <div class="nav-item jp-nav active">
	              <router-link :to="{name: 'list'}">
	                    <i class="icon"></i>
	                    <span class="text">图库</span>
	              </router-link>
	          </div>
	          <div class="nav-item photo-nav">
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
<script>
	import {mapGetters,mapMutations} from 'vuex'
	import api from "./../api/api"
	export default {
		data(){
			return {
				msg:"this a example!",
				list:[],
				pageCurrent:1,
				pageTotal:0,
				title:'图库',
				minirefresh: null,
			}
		},
		activated(){
			document.title = '图库';
			if(this.$store.state.listTop > 0){
				$('#minirefresh').scrollTop(this.$store.state.listTop)
			}
		},
		created(){
			
		},
		mounted () {
		    var self = this;
            self.miniRefresh = new MiniRefresh({
                container: '#minirefresh',
                down: {
                    callback: self.downCallback
                },
                up: { 
                	isAuto: true,
                    callback: self.upCallback
                }
            });
		  },
		methods: {
			downCallback(){
				console.log('downCallback');
				const $self = this;
				this.pageCurrent = 1;
				$self.$http.get(api.stoneLib_search,
					{
						params:{
							"pageCurrent": $self.pageCurrent,
							"pageSize": 16
						},
					}).then(function(res){
						$self.pageTotal = res.body.page.totalPage;
						$self.pageCurrent = res.body.page.pageCurrent;
						$self.list = [];
						for(let i = 0; i < res.body.data.list.length ;i++ ){
							$self.list.push(res.body.data.list[i]);
						}
						$self.miniRefresh.endDownLoading(true);
						if($self.pageTotal != $self.pageCurrent){
					  		$self.pageCurrent += 1;
					  	}
				});
			},
		    upCallback(){
		    	console.log('upCallback');
			  	const $self = this;
				this.$http.get(api.stoneLib_search,
					{
						params:{
							"pageCurrent": $self.pageCurrent,
							"pageSize": 16
						},
					}).then(function(res){
						$self.pageTotal = res.body.page.totalPage;
						$self.pageCurrent = res.body.page.pageCurrent;
						for(let i = 0; i < res.body.data.list.length ;i++ ){
							$self.list.push(res.body.data.list[i]);
						}
						$self.miniRefresh.endUpLoading($self.pageTotal == $self.pageCurrent ? true : false);
						if($self.pageTotal != $self.pageCurrent){
					  		$self.pageCurrent += 1;
					  	}
				});
			  },
			  paperScroll(){
			  	 this.$store.state.listTop = $('#minirefresh').scrollTop();
			  }
		  },  
		  computed:{
			...mapGetters([
				'name',
				"textShow",
				"home",
				// "top"
			])
		  }
	}
	
</script>
<style scoped>
#minirefresh{
	top: 80px;
	bottom: 96px;
}
.list-content{
  	padding-bottom: 96px;
  	margin-top: 80px;
  }
.listContent_ul{
	overflow: hidden;
	padding-left:0;
	margin: 0;
	border-top: 1px solid rgb(225, 225, 225);
}
.list{
	float: left;
	width: 50%;
	box-sizing: border-box;
	/*height: 248px;*/
	overflow: hidden;
	padding: 20px 20px 20px 20px;
	border-right: 1px solid rgb(225, 225, 225);
    border-bottom: 1px solid rgb(225, 225, 225);
}
.list-text{
	color: #333;
	font-size: 22px;
	text-align: left;
	margin-top: 10px;
}
.list-chineseName{
	font-size: 30px;
}
  .list img{
  	display: block;
  	height: auto;
  	width: 100%;
  	/*height: 248px;*/
  }
  .small_imgList{
  	height: 60px;width: 80px;display: inline-block;margin: 10px 10px 10px 0;
  }
   .small_imgList img{
  	height: 100%;width: 100%;
  }

</style>