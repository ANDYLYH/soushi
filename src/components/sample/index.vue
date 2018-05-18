<template>
	<div class=" list-content">
		<div class="header-content">
			<div class="listSearchInput">
				<input type="text" name="" class="listSearchInputText" @focus="SearchFocus" placeholder="搜索" v-model="keywords">
				<span class="listSearchInput_iocn" @click="SearchFocus"></span>
				<span class="clearSearch" @click="clearSearch" v-if="clearSearch_flag">&times</span>
			</div>
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
				<img src="../../img/no-data.png" alt="">
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
						<p class="list-text" v-viewred>编号：{{item.stoneNo | capitalize}}</p>
					</li>
				</ul>
			</div>
		</div>
		<!-- 底部 -->
		<!-- <ft :name="$router.currentRoute.name"></ft> -->
	</div>
</template>
<script>
import {mapGetters,mapMutations} from 'vuex'
import foot from '@/components/common/footer'
import API from "./../../api"
export default {
	data(){
		return {
			msg:"this a example!",
			list:[],
			pageCurrent:1,
			pageTotal:0,
			title:'样板商城',
			minirefresh: null,
			show:false,
			indexNum:null,
			emptyFlag:false,
			keywords:null,
			timeStr:'',
			clearSearch_flag:false
		}
	},
	components:{
     'ft':foot
    },	
	activated(){
		document.title = '样板商城';
		if(this.listTop > 0){
			$('#minirefresh').scrollTop(this.listTop)
		}
		this.keywords = this.$store.state.list_keyword;
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
			const $self = this;
			this.pageCurrent = 1;
			$self.list = [];
			$self.miniRefresh.endDownLoading(false);
			// 请求数据
			API.sample.search({
					"pageCurrent": $self.pageCurrent,
					"pageSize": 16,
				}).then((res) => {
		          	$self.pageTotal = res.data.page.totalPage;
					$self.pageCurrent = res.data.page.pageCurrent;
					// 锁定
					if(res.data.data.list.length == 0){
						$self.emptyFlag = true;
						$self.miniRefresh.refreshOptions($self.getOptionsByStatus('关闭'));
					}else{
						$self.emptyFlag = false;
						$self.miniRefresh.refreshOptions($self.getOptionsByStatus('启动'));
					}
					for(let i = 0; i < res.data.data.list.length;i++ ){
						$self.list.push(res.data.data.list[i]);
					}
					//关闭下拉窗口
					$self.miniRefresh.endDownLoading(true);
					if($self.pageTotal != $self.pageCurrent){
						$self.pageCurrent += 1;
					}
	        })
		},
		upCallback(){
			const $self = this;
			API.sample.search({
					"pageCurrent": $self.pageCurrent,
					"pageSize": 16,
				}).then((res) => {
					$self.pageTotal = res.data.page.totalPage;
					$self.pageCurrent = res.data.page.pageCurrent;
					if(res.data.data.list.length == 0){
						$self.emptyFlag = true;
						$self.miniRefresh.refreshOptions($self.getOptionsByStatus('关闭'));
					}else{
						$self.emptyFlag = false;
						$self.miniRefresh.refreshOptions($self.getOptionsByStatus('启动'));
					}
					// 数据追加
					for(let i = 0; i < res.data.data.list.length ;i++ ){
						$self.list.push(res.data.data.list[i]);
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
			this.show = false;
			this.downCallback();
			$('#minirefresh').scrollTop(0)
		},
		selectColor(e){
			this.show = false;
			this.downCallback();
			$('#minirefresh').scrollTop(0)
		},
		selectCountry(e){
			this.show = false;
			this.downCallback();
			$('#minirefresh').scrollTop(0)
		},
		SearchFocus(){
			this.$router.push('/search')
		},
		clearSearch(){
			this.keywords ='' ;
			this.$store.state.list_keyword= '';
			this.downCallback();
			$('#minirefresh').scrollTop(0)
		}
	},  
	computed:{

	},
	directives:{//局部自定义指令
		viewred:function(el){
			el.style.color = 'red';
		}
	},
	filters:{//自定义过滤器
		capitalize: function (value) {
			if (!value) return ''
				value = value.toString()
			return value.charAt(0).toUpperCase() + value.slice(1)
		}
	},
	watch:{
		keywords:function(){
			this.downCallback();
			$('#minirefresh').scrollTop(0)
			if(this.keywords.length > 0){
				this.clearSearch_flag = true;
			}else{
				this.clearSearch_flag = false;
			}
		}
	}
}
</script>
<style scoped>
@import '../../css/list.css'
</style>