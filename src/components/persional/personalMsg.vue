<template>
	<div class="g-doc" id="Jdoc">
    <div class="wraper">
        <div class="container">
            <div class="personal-list" id="JPersonalList">
                <div class="personal-item name-personal">
                    <span class="label">用户名</span>
                    <input type="text" style="outline:none;" class="name bind-focus" v-model="userName" placeholder="请输入用户名">
                </div>
                <div class="personal-item sex-personal">
                    <span class="label">性别</span>
                    <input type="text" class="select-input" v-model="sex"  placeholder="">
                    <select name="" class="sex bind-change" v-model="sex" id="">
                        <option value="请选择">请选择</option>
                        <option value="男">男</option>
                        <option value="女">女</option>
                    </select>
                </div>
            </div>
            <div class="_submit" id="JSubmit">
                <div class="button bind-click">保存</div>
            </div>
        </div>
    </div>
    <div class="success-tips-masker">
        <div class="tips-container">
            <div class="tips-content">
                <p>
                    <i class="icon icon-success"></i>
                    <span class="text">保存成功</span>
                </p>
            </div>
        </div>
    </div>
</div>
</template>
<script>
	export default { 
		data(){
			return {
				sex:'请选择',
				userName:'华仔'
			}
		},

	}
</script>
<style scoped>
	@import '../../css/common.css';
	body {
    background: #f8f8f8;
}

/* personal-list start */
.personal-list {
    background: #f9f9f9;
    padding-bottom: 96px;
}
.personal-list .personal-item{
    padding-left: 24px;
    margin-bottom: 24px;
    background: #fff;
    height: 100px;
    background: #fff;
    display: flex;
    display: -webkit-flex;
    align-items: center;
    -webkit-align-items: center;
    position: relative;
}

.personal-list .personal-item .label {
    color: #000;
    font-size: 28px;
}

.personal-list .personal-item .nextpage-icon{
    display: block;
    width: 14px;
    height: 27px;
    /*background: url(./icon/personal/icon-nextpage.png) no-repeat;*/
    background-size: 100% 100%;
    position: absolute;
    right: 24px;
}

.personal-list .head-personal{
    padding-top: 26px;
    padding-bottom: 26px;
}

.personal-list .head-personal img{
    position: absolute;
    right: 65px;
    border-radius: 50%;
}

.personal-list .name-personal{
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding-right: 24px;
}

.personal-list .name-personal .name{
    border: 0;
    color: #666;
    text-align: right;
    font-size: 28px;
    line-height: 28px;
}

.personal-list .sex-personal{
    justify-content: space-between;
    -webkit-justify-content: space-between;
    padding-right: 24px;
}

.personal-list .sex-personal .select-input{
    border: 0;
    color: #666;
    text-align: right;
    font-size: 28px;
    line-height: 28px;
}

.personal-list .sex-personal .sex {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
}

/* personal-list end */

._submit{
    bottom: 0;
    width: 100%;
    position: fixed;
}

._submit .button{
    background: #03A3E7;
    color: #fff;
    font-size: 30px;
    line-height: 30px;
    padding: 26px 0;
    display: block;
    background-image: -webkit-linear-gradient(to right, rgb(78, 147, 255) 0%, rgb(84, 192, 250) 100%);
    background-image: linear-gradient(to right, rgb(78, 147, 255) 0%, rgb(84, 192, 250) 100%);
    text-align: center;
}

</style>