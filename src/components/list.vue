<template>
	<div class=" list-content">
		<div class="header-content">
			<span class="header-text">{{title}}</span>
			<router-link to="/search" class="header-search">
			</router-link>
		</div>
		<div class="filter_list">
			<div @click="clickFn" class="list_item" :class="show == true && indexNum == 0 ? 'active':''" data-num="0">类别▼</div>
			<div @click="clickFn" class="list_item" :class="show == true && indexNum == 1 ? 'active':''" data-num="1">颜色▼</div>	
			<div @click="clickFn" class="list_item" :class="show == true && indexNum == 2 ? 'active':''" data-num="2">产地▼</div>		
		</div>
		<ul class="panel-list" v-if="show">
			<li class="panel-item kind-panel option-list" data-index="0" v-show="indexNum == 0 ? true : false">
				<span class="option-item delegate-click all" :class="list_kindNum == 0 ?'active' : ''" @click="selectKind" data-num="0" data-txt="类别">全部</span>
				<span class="option-item delegate-click" :class="list_kindNum == 1 ?'active' : ''" @click="selectKind" data-num="1">花岗岩</span>
				<span class="option-item delegate-click" :class="list_kindNum == 2 ?'active' : ''"@click="selectKind" data-num="2">大理石</span>
				<span class="option-item delegate-click" :class="list_kindNum == 3 ?'active' : ''"@click="selectKind" data-num="3">石灰石</span>
				<span class="option-item delegate-click" :class="list_kindNum == 4 ?'active' : ''"@click="selectKind" data-num="4">板岩石</span>
				<span class="option-item delegate-click" :class="list_kindNum == 5 ?'active' : ''"@click="selectKind" data-num="5">人造石</span>
				<span class="option-item delegate-click" :class="list_kindNum == 6 ?'active' : ''"@click="selectKind" data-num="6">石英石</span>
				<span class="option-item delegate-click" :class="list_kindNum == 7 ?'active' : ''"@click="selectKind" data-num="7">其他</span>
			</li>
			<li class="panel-item color-panel "  v-show="indexNum == 1 ? true : false">
				<span class="option-item delegate-click all" :class="list_colorNum == 0 ?'active' : ''" @click="selectColor" data-num="0" data-txt="颜色">全部</span>
				<span class="option-item delegate-click"  :class="list_colorNum == 1 ?'active' : ''" @click="selectColor" data-num="1">红色</span>
				<span class="option-item delegate-click" :class="list_colorNum == 2 ?'active' : ''" @click="selectColor" data-num="2">白色</span>
				<span class="option-item delegate-click" :class="list_colorNum == 7 ?'active' : ''" @click="selectColor" data-num="7">黄色</span>
				<span class="option-item delegate-click" :class="list_colorNum == 8 ?'active' : ''" @click="selectColor" data-num="8">黑色</span>
				<span class="option-item delegate-click" :class="list_colorNum == 5 ?'active' : ''" @click="selectColor" data-num="5">灰色</span>
				<span class="option-item delegate-click" :class="list_colorNum == 4 ?'active' : ''" @click="selectColor" data-num="4">绿色</span>
				<span class="option-item delegate-click" :class="list_colorNum == 6 ?'active' : ''" @click="selectColor" data-num="6">棕色</span>
				<span class="option-item delegate-click" :class="list_colorNum == 3 ?'active' : ''" @click="selectColor" data-num="3">蓝色</span>
				<span class="option-item delegate-click" :class="list_colorNum == 9 ?'active' : ''" @click="selectColor" data-num="9">其他</span>
			</li>
			<li class="panel-item country-panel"  v-show="indexNum == 2 ? true : false">
				<span class="option-item delegate-click all" :class="list_countryNum == 0 ?'active' : ''" @click="selectCountry" data-num="0" data-txt="产地">全部</span>
				<span class="option-item delegate-click" :class="list_countryNum == -1 ?'active' : ''"  @click="selectCountry" data-num="-1">进口</span>
				<span class="option-item delegate-click" :class="list_countryNum == 1 ?'active' : ''" @click="selectCountry" data-num="1">国产</span>
			</li>
			<div class="panel-masker" v-if="show"></div>
		</ul>
		<div class="result-masker no-data-result-masker active" v-if="emptyFlag">
            <div class="pic">
                <img src="../img/no-data.png" alt="">
            </div>
            <span class="text">暂无数据</span>
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
			show:false,
			indexNum:null,
			emptyFlag:false,
		}
	},
	activated(){
		document.title = '图库';
		if(this.listTop > 0){
			$('#minirefresh').scrollTop(this.listTop)
		}
	},
	created(){

	},
	mounted () {
		var self = this;
		self.miniRefresh = new MiniRefresh({
			container: '#minirefresh',
			down: {
				isLock:false,
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
					"pageSize": 16,
					'kind':$self.$store.state.list_kindNum,
					'color':$self.$store.state.list_colorNum,
					'country':$self.$store.state.list_countryNum
				},
			}).then(function(res){
				$self.pageTotal = res.body.page.totalPage;
				$self.pageCurrent = res.body.page.pageCurrent;
				$self.list = [];
				// 锁定
				if(res.body.data.list.length == 0){
					$self.emptyFlag = true;
					$self.miniRefresh.refreshOptions($self.getOptionsByStatus('关闭'));
				}else{
					$self.emptyFlag = false;
					$self.miniRefresh.refreshOptions($self.getOptionsByStatus('启动'));
				}
				for(let i = 0; i < res.body.data.list.length ;i++ ){
					$self.list.push(res.body.data.list[i]);
				}
				//关闭下拉窗口
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
					"pageSize": 16,
					'kind':$self.$store.state.list_kindNum,
					'color':$self.$store.state.list_colorNum,
					'country':$self.$store.state.list_countryNum
				},
			}).then(function(res){
				$self.pageTotal = res.body.page.totalPage;
				$self.pageCurrent = res.body.page.pageCurrent;
				if(res.body.data.list.length == 0){
					$self.emptyFlag = true;
					$self.miniRefresh.refreshOptions($self.getOptionsByStatus('关闭'));
				}else{
					$self.emptyFlag = false;
					$self.miniRefresh.refreshOptions($self.getOptionsByStatus('启动'));
				}
				// 数据追加
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
		},
		getOptionsByStatus(statusName){
			return {
				down : {
					isLock : '关闭' == statusName
				},
				up:{
					isLock : '关闭' == statusName
				}
			}
		},
		clickFn(e){
			if(e.target.dataset.num == this.indexNum || this.indexNum == null){
				this.show = !this.show;
			}else{
				this.show = true;
			}
			this.indexNum = e.target.dataset.num;
		},
		selectKind(e){
			this.$store.state.list_kindNum = e.target.dataset.num;
			this.show = false;
			this.downCallback();
		},
		selectColor(e){
			this.$store.state.list_colorNum = e.target.dataset.num;
			this.show = false;
			this.downCallback();
		},
		selectCountry(e){
			this.$store.state.list_countryNum = e.target.dataset.num;
			this.show = false;
			this.downCallback();
		}
	},  
	computed:{
		...mapGetters([
			'name',
			"textShow",
			"home",
			"listTop",
			'list_kindNum',
			'list_colorNum',
			'list_countryNum'
			])
	}
}
</script>
<style scoped>
  @import '../css/list.css'
</style>