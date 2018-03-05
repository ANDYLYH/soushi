export default {
	searchTemplateCountList:"http://template.backend.soushi88.com/template/searchTemplateCountList",//样板列表
	//样板详情
	searchTemplates:"http://template.backend.soushi88.com/template/searchTemplates",//样板详情
	//微信支付
	wxPayPrev:"http://template.backend.soushi88.com/template/wxPayPrev",//微信支付
	
	wxPayQuery:"http://template.backend.soushi88.com/template/wxPayQuery",//支付
	//用户信息
	getMyProfile:"http://user.backend.soushi88.com/user/getMyProfile",//获取用户信息
	
	//购物车
	getCartGoodsNumber:"http://cart.backend.soushi88.com/cart/getCartGoodsNumber",//购物车数量
	
	listCartProducts:"http://cart.backend.soushi88.com/cart/listCartProducts",//购物车列表
	
	removeGoodsFromCart:"http://cart.backend.soushi88.com/cart/removeGoodsFromCart",//删除购物车信息
	
	saveAgainBuyGoods:"http://cart.backend.soushi88.com/cart/saveAgainBuyGoods",//从新加入购物车
	//订单
	cartGoodsOrder:"http://template.backend.soushi88.com/template/cartGoodsOrder",//提交订单
	
	orderGoods:"http://cart.backend.soushi88.com/cart/orderGoods",//下单的货物列表
	
	cartGoodsOrder:"http://template.backend.soushi88.com/template/cartGoodsOrder",//下单
	
	//寄送地址
	getMyDelivery:"http://user.backend.soushi88.com/userDelivery/getMyDelivery",//获取寄送地址列表
	
	add:"http://user.backend.soushi88.com/userDelivery/add",//新增送货地址
	
	setDefault:"http://user.backend.soushi88.com/userDelivery/setDefault",//设置默认地址
	
	del:"http://user.backend.soushi88.com/userDelivery/del",//删除送货地址
	
	get:"http://user.backend.soushi88.com/userDelivery/get",//获取当前修改的送货地址
	
	update:"http://user.backend.soushi88.com/userDelivery/update",//更新送货地址
	//图库
//	stoneLib_search:"http://localhost:8081/user_search",//图库列表 
	stoneLib_search:"http://lib.backend.soushi88.com/stoneLib/search",//图库列表 
	simpleSearch:"http://lib.backend.soushi88.com/stoneLib/simpleSearch",//图库查询
	
	searchPrev:"http://lib.backend.soushi88.com/stoneLib/searchPrev",//图片搜索
	
//	detail:'http://localhost:8081/user_Details',
	detail:"http://lib.backend.soushi88.com/stoneLib/detail",//图库详情

	// 获取个人信息
	getMyProfile:"http://user.backend.soushi88.com/userWx/getMyProfile",

	onsale_query:"http://slab.backend.soushi88.com/onsale/query",//现货列表

	onsale_detail:"http://slab.backend.soushi88.com/onsale/detail",//现货详情
}