<template>
	<div class="g-doc" id="Jdoc">
    <div class="wraper" style="display: block;">
        <div class="container">
            <div class="render-html address-result-list" id="JAddressResultList"><div class="result-item" data-item="{&quot;id&quot;:64,&quot;userId&quot;:3,&quot;province&quot;:1,&quot;provinceName&quot;:&quot;北京&quot;,&quot;city&quot;:36,&quot;cityName&quot;:&quot;东城&quot;,&quot;county&quot;:0,&quot;address&quot;:&quot;131&quot;,&quot;fullAddress&quot;:&quot;北京市东城区131&quot;,&quot;name&quot;:&quot;123&quot;,&quot;mobile&quot;:&quot;15902061779&quot;,&quot;defaulted&quot;:1}"><div class="info-list"><p class="name-phone-info info-item"><span class="name text">123</span><span class="phone text">15902061779</span></p><p class="address-info info-item"><span class="text">北京市东城区131</span></p></div><div class="editor-list"><span class="editor-item default-editor delegate-click active"><i class="icon icon-default"></i> 默认地址</span><span class="editor-item editor-editor delegate-click"><i class="icon icon-editor"></i> 编辑</span><span class="editor-item delete-editor delegate-click"><i class="icon icon-delete"></i> 删除</span></div></div><div class="item-divider"></div></div>

            <div class="result-masker no-data-result-masker" id="JNoDataResultMasker">
                <div class="pic">
                    <img src="../../img/no-data.png" alt="">
                </div>
                <span class="text">暂无数据</span>
            </div>
        </div>
        <div class="_submit" id="JSubmit">
            <span class="button">添加新地址</span>
        </div>
    </div>

    <div class="confirm-masker" id="JConfirmMasker">
        <div class="show-masker bind-click"></div>
        <div class="masker-container">
            <div class="masker-box">
                <div class="title">是否确认删除收货地址</div>
                <div class="button-list">
                    <div class="button-item cancel-button bind-click">取消</div>
                    <div class="button-item confirm-button bind-click">确认</div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<style scoped>
@import '../../css/common.css';
/* address-result-list start */
.wraper{
	    display: none;
	}
.address-result-list .result-item .info-list {
    padding:26px 0 15px 0;
    border-bottom: 1px solid #ddd;
}

.address-result-list .result-item .info-list .info-item {
    padding: 15px 0;
    margin-left: 40px;
    font-size: 28px;
    line-height: 28px;
}

.address-result-list .result-item .name-phone-info .name {
    width: 140px;
    display: inline-block;
}

.address-result-list .result-item .address-info .text{
    color: #666;
}

.address-result-list .result-item .editor-list {
    padding: 23px 40px 26px 40px;
    line-height: 28px;
    font-size: 28px;
    overflow: hidden;
}

.address-result-list .result-item .editor-list .icon{
    display: inline-block;
    width: 32px;
    height: 32px;
    vertical-align: middle;
}

.address-result-list .result-item .editor-list .default-editor .icon{
    background: url("../../img/icon_default.png") no-repeat;
    background-size: 100%;
}

.address-result-list .result-item .editor-list .default-editor.active .icon{
    background: url("../../img/icon_selected.png") no-repeat;
    background-size: 100%;
}

.address-result-list .result-item .editor-list .editor-editor,
.address-result-list .result-item .editor-list .delete-editor {
    float: right;
}

.address-result-list .result-item .editor-list .editor-editor .icon{
    background: url("../../img/icon_edit.png") no-repeat;
    background-size: 100%;
}

.address-result-list .result-item .editor-list .delete-editor .icon{
    background: url("../../img/icon_delete.png") no-repeat;
    background-size: 100%;
}

.address-result-list .result-item .editor-list .delete-editor{
    margin-right: 40px;
}

.address-result-list .item-divider{
    background: #f9f9f9;
    height: 20px;
}

/* address-result-list end */

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