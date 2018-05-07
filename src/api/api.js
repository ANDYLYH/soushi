/**
 * Created by songyingchun on 2017/5/15 0015.
 */
var test = false;
var dev = false;

var config = {
    search: "https://lib.backend.soushi88.com/stoneLibWx/search",
    detail: "https://lib.backend.soushi88.com/stoneLibWx/detail",

    login: "https://user.backend.soushi88.com/accountWx/login",
    register: "https://user.backend.soushi88.com/accountWx/register",                             // 注册
    resetPassword: "https://user.backend.soushi88.com/accountWx/resetPassword",                   // 重置密码
    resetPasswordPre: "https://user.backend.soushi88.com/accountWx/resetPasswordPre",             // 验证码，手机号，下一步
    sendRegCode: "https://user.backend.soushi88.com/accountWx/sendRegCode",                       // 注册验证码接口
    sendResetPasswordCode: "https://user.backend.soushi88.com/accountWx/sendResetPasswordCode",   // 验证码接口

    changePassword: "https://user.backend.soushi88.com/userWx/changePassword ",                      // 修改密码
    getMyProfile: "https://user.backend.soushi88.com/userWx/getMyProfile",                           // 个人资料
    updateMyProfile: "https://user.backend.soushi88.com/userWx/updateMyProfile",                     // 个人设置
    verifyMyCompany: "https://user.backend.soushi88.com/userWx/verifyMyCompany",                     // 个人认证
    setShowPrice: "https://user.backend.soushi88.com/userWx/setShowPrice ",                          // 设置显示价格
    logout: "https://user.backend.soushi88.com/userWx/logout",                                       // 退出登录

    add: "https://user.backend.soushi88.com/userDeliveryWx/add",                                     // 增加收货地址
    del: "https://user.backend.soushi88.com/userDeliveryWx/del",                                     // 删除收货地址
    getMyDelivery: "https://user.backend.soushi88.com/userDeliveryWx/getMyDelivery",                 // 收货地址列表
    update: "https://user.backend.soushi88.com/userDeliveryWx/update",                               // 更新收货地址
    get: "https://user.backend.soushi88.com/userDeliveryWx/get",                                     // 获取收货地址

    delivery: "https://template.backend.soushi88.com/templateWx/delivery",
    searchPrev: "https://lib.backend.soushi88.com/stoneLibWx/searchPrev",

    slabQuery: "https://slab.backend.soushi88.com/onsale/query",
    slabDetail: "https://slab.backend.soushi88.com/onsale/detail",

    searchTemplate: "https://template.backend.soushi88.com/templateWx/searchTemplatesWx",
    getCartGoodsNumber: "https://cart.backend.soushi88.com/cart/getCartGoodsNumber",
    saveGoodsToCart: "https://cart.backend.soushi88.com/cart/saveGoodsToCart",
    removeGoodsFromCart: "https://cart.backend.soushi88.com/cart/removeGoodsFromCart",
    listCartProducts: "https://cart.backend.soushi88.com/cart/listCartProducts",
    orderGoods: "https://cart.backend.soushi88.com/cart/orderGoods",
    cartGoodsOrder: "https://template.backend.soushi88.com/templateWx/cartGoodsOrder",
    orderTemplate: "https://template.backend.soushi88.com/template/orderTemplate",
    searchTemplates: "https://template.backend.soushi88.com/template/searchTemplates",
    searchTemplateCountList: "https://template.backend.soushi88.com/template/searchTemplateCountList",

    code: "https://open.weixin.qq.com/connect/oauth2/authorize",
    getOpenIdFromCode: "https://template.backend.soushi88.com/templateWx/getOpenIdFromCode",
    myOrderList: "https://template.backend.soushi88.com/template/myOrderList",
    myOrderDetail: "https://template.backend.soushi88.com/template/myOrderDetail",
    updateOrderStatus: "https://template.backend.soushi88.com/template/updateOrderStatus",
    payByTemplateId: "https://template.backend.soushi88.com/template/payByTemplateId",

    // 预览
    previewBlock: "https://slab.backend.soushi88.com/blockManagerStockController/previewBlock",

    getShareSign: "https://template.backend.soushi88.com/WXPay/getShareSign",

    searchCollect: "https://slab.backend.soushi88.com/blockCollectWxController/searchCollect",
    saveCollect: "https://slab.backend.soushi88.com/blockCollectWxController/saveCollect",
    removeCollect: "https://slab.backend.soushi88.com/blockCollectWxController/removeCollect",
    setDefault: "https://user.backend.soushi88.com/userDeliveryWx/setDefault",
    wxPayPrev: "https://template.backend.soushi88.com/templateWx/wxPayPrev",

    // 供应商
    getCompanyDetail: "https://company.backend.soushi88.com/commonCompany/getCompanyDetail",
    createSupplierCollect: "https://company.backend.soushi88.com/supplierCollect/createSupplierCollect",
    removeSupplierCollect: "https://company.backend.soushi88.com/supplierCollect/removeSupplierCollect",

    searchSupplierCollect: "https://company.backend.soushi88.com/supplierCollect/searchSupplierCollect",
    // 现货商城
    queryCompanySlab: "https://slab.backend.soushi88.com/onsale/queryCompanySlab",
    // 相册
    listCompanyImg: "https://company.backend.soushi88.com/commonCompany/listCompanyImg",
    // 金牌供应商
    queryGoldCompany: "https://company.backend.soushi88.com/commonCompany/queryGoldCompany",
    // 订单数量
    getStatusOrderNum: "https://template.backend.soushi88.com/template/getStatusOrderNum",
    // 个人中心
    getPersonageCenterData: "https://user.backend.soushi88.com/user/getPersonageCenterData",
    // app板材详情
    showDetails: "https://slab.backend.soushi88.com/managerBlock/showDetails",
    // 背景墙
    queryWallPanel: "https://slab.backend.soushi88.com/onsale/queryWallPanel",
};

if(test) {
    var config = {
        search: "https://test.lib.backend.soushi88.com/stoneLibWx/search",
        detail: "https://test.lib.backend.soushi88.com/stoneLibWx/detail",
    
        login: "https://test.user.backend.soushi88.com/accountWx/login",
        register: "https://test.user.backend.soushi88.com/accountWx/register",                             // 注册
        resetPassword: "https://test.user.backend.soushi88.com/accountWx/resetPassword",                   // 重置密码
        resetPasswordPre: "https://test.user.backend.soushi88.com/accountWx/resetPasswordPre",             // 验证码，手机号，下一步
        sendRegCode: "https://test.user.backend.soushi88.com/accountWx/sendRegCode",                       // 注册验证码接口
        sendResetPasswordCode: "https://test.user.backend.soushi88.com/accountWx/sendResetPasswordCode",   // 验证码接口
    
        changePassword: "https://test.user.backend.soushi88.com/userWx/changePassword ",                      // 修改密码
        getMyProfile: "https://test.user.backend.soushi88.com/userWx/getMyProfile",                           // 个人资料
        updateMyProfile: "https://test.user.backend.soushi88.com/userWx/updateMyProfile",                     // 个人设置
        verifyMyCompany: "https://test.user.backend.soushi88.com/userWx/verifyMyCompany",                     // 个人认证
        setShowPrice: "https://test.user.backend.soushi88.com/userWx/setShowPrice ",                          // 设置显示价格
        logout: "https://test.user.backend.soushi88.com/userWx/logout",                                       // 退出登录
    
        add: "https://test.user.backend.soushi88.com/userDeliveryWx/add",                                     // 增加收货地址
        del: "https://test.user.backend.soushi88.com/userDeliveryWx/del",                                     // 删除收货地址
        getMyDelivery: "https://test.user.backend.soushi88.com/userDeliveryWx/getMyDelivery",                 // 收货地址列表
        update: "https://test.user.backend.soushi88.com/userDeliveryWx/update",                               // 更新收货地址
        get: "https://test.user.backend.soushi88.com/userDeliveryWx/get",                                     // 获取收货地址
    
        delivery: "https://test.template.backend.soushi88.com/templateWx/delivery",
        searchPrev: "https://test.lib.backend.soushi88.com/stoneLibWx/searchPrev",
    
        slabQuery: "https://test.slab.backend.soushi88.com/onsale/query",
        slabDetail: "https://test.slab.backend.soushi88.com/onsale/detail",
    
        searchTemplate: "https://test.template.backend.soushi88.com/templateWx/searchTemplatesWx",
        getCartGoodsNumber: "https://test.cart.backend.soushi88.com/cart/getCartGoodsNumber",
        saveGoodsToCart: "https://test.cart.backend.soushi88.com/cart/saveGoodsToCart",
        removeGoodsFromCart: "https://test.cart.backend.soushi88.com/cart/removeGoodsFromCart",
        listCartProducts: "https://test.cart.backend.soushi88.com/cart/listCartProducts",
        orderGoods: "https://test.cart.backend.soushi88.com/cart/orderGoods",
        cartGoodsOrder: "https://test.template.backend.soushi88.com/templateWx/cartGoodsOrder",
        orderTemplate: "https://test.template.backend.soushi88.com/template/orderTemplate",
        searchTemplates: "https://test.template.backend.soushi88.com/template/searchTemplates",
        searchTemplateCountList: "https://test.template.backend.soushi88.com/template/searchTemplateCountList",
    
        code: "https://test.open.weixin.qq.com/connect/oauth2/authorize",
        getOpenIdFromCode: "https://test.template.backend.soushi88.com/templateWx/getOpenIdFromCode",
        myOrderList: "https://test.template.backend.soushi88.com/template/myOrderList",
        myOrderDetail: "https://test.template.backend.soushi88.com/template/myOrderDetail",
        updateOrderStatus: "https://test.template.backend.soushi88.com/template/updateOrderStatus",
        payByTemplateId: "https://test.template.backend.soushi88.com/template/payByTemplateId",
    
        // 预览
        previewBlock: "https://test.slab.backend.soushi88.com/blockManagerStockController/previewBlock",
    
        getShareSign: "https://test.template.backend.soushi88.com/WXPay/getShareSign",
    
        searchCollect: "https://test.slab.backend.soushi88.com/blockCollectWxController/searchCollect",
        saveCollect: "https://test.slab.backend.soushi88.com/blockCollectWxController/saveCollect",
        removeCollect: "https://test.slab.backend.soushi88.com/blockCollectWxController/removeCollect",
        setDefault: "https://test.user.backend.soushi88.com/userDeliveryWx/setDefault",
        wxPayPrev: "https://test.template.backend.soushi88.com/templateWx/wxPayPrev",
    
        // 供应商
        getCompanyDetail: "https://test.company.backend.soushi88.com/commonCompany/getCompanyDetail",
        createSupplierCollect: "https://test.company.backend.soushi88.com/supplierCollect/createSupplierCollect",
        removeSupplierCollect: "https://test.company.backend.soushi88.com/supplierCollect/removeSupplierCollect",
    
        searchSupplierCollect: "https://test.company.backend.soushi88.com/supplierCollect/searchSupplierCollect",
        // 现货商城
        queryCompanySlab: "https://test.slab.backend.soushi88.com/onsale/queryCompanySlab",
        // 相册
        listCompanyImg: "https://test.company.backend.soushi88.com/commonCompany/listCompanyImg",
        // 金牌供应商
        queryGoldCompany: "https://test.company.backend.soushi88.com/commonCompany/queryGoldCompany",
        // 订单数量
        getStatusOrderNum: "https://test.template.backend.soushi88.com/template/getStatusOrderNum",
        // 个人中心
        getPersonageCenterData: "https://test.user.backend.soushi88.com/user/getPersonageCenterData",
        // app板材详情
        showDetails: "https://test.slab.backend.soushi88.com/managerBlock/showDetails",
        // 背景墙
        queryWallPanel: "https://test.slab.backend.soushi88.com/onsale/queryWallPanel",
    };
}


if(dev) {
    config = {
        search: "https://192.168.199.171:9020/stoneLibWx/search",
        detail: "https://192.168.199.171:9020/stoneLibWx/detail",

        login: "https://192.168.199.171:9021/accountWx/login",
        register: "https://192.168.199.171:9021/accountWx/register",                             // 注册
        resetPassword: "https://192.168.199.171:9021/accountWx/resetPassword",                   // 重置密码
        resetPasswordPre: "https://192.168.199.171:9021/accountWx/resetPasswordPre",             // 验证码，手机号，下一步
        sendRegCode: "https://192.168.199.171:9021/accountWx/sendRegCode",                       // 注册验证码接口
        sendResetPasswordCode: "https://192.168.199.171:9021/accountWx/sendResetPasswordCode",   // 验证码接口

        changePassword: "https://192.168.199.171:9021/userWx/changePassword ",                      // 修改密码
        getMyProfile: "https://192.168.199.171:9021/userWx/getMyProfile",                           // 个人资料
        updateMyProfile: "https://192.168.199.171:9021/userWx/updateMyProfile",                     // 个人设置
        verifyMyCompany: "https://192.168.199.171:9021/userWx/verifyMyCompany",                     // 个人认证
        setShowPrice: "https://192.168.199.171:9021/userWx/setShowPrice ",                          // 设置显示价格
        logout: "https://192.168.199.171:9021/userWx/logout",                                       // 退出登录

        add: "https://192.168.199.171:9021/userDeliveryWx/add",                                     // 增加收货地址
        del: "https://192.168.199.171:9021/userDeliveryWx/del",                                     // 删除收货地址
        getMyDelivery: "https://192.168.199.171:9021/userDeliveryWx/getMyDelivery",                 // 收货地址列表
        update: "https://192.168.199.171:9021/userDeliveryWx/update",                               // 更新收货地址
        get: "https://user.backend.soushi88.com/userDeliveryWx/get",                                     // 获取收货地址

        delivery: "https://192.168.199.171:9024/templateWx/delivery",
        searchPrev: "https://192.168.199.171:9020/stoneLibWx/searchPrev",

        slabQuery: "https://192.168.199.171:9022/onsale/query",
        slabDetail: "https://192.168.199.171:9022/onsale/detail",

        searchTemplate: "https://192.168.199.171:9024/templateWx/searchTemplatesWx",
        getCartGoodsNumber: "https://192.168.199.171:9025/cart/getCartGoodsNumber",
        saveGoodsToCart: "https://192.168.199.171:9025/cart/saveGoodsToCart",
        removeGoodsFromCart: "https://192.168.199.171:9025/cart/removeGoodsFromCart",
        listCartProducts: "https://192.168.199.171:9025/cart/listCartProducts",
        orderGoods : "https://192.168.199.171:9025/cart/orderGoods",
        cartGoodsOrder : "https://192.168.199.171:9024/template/cartGoodsOrder",
        orderTemplate : "https://192.168.199.171:9024/template/orderTemplate",
        searchTemplates : "https://192.168.199.171:9024/template/searchTemplates",
        searchTemplateCountList : "https://192.168.199.171:9024/template/searchTemplateCountList",
        myOrderList : "https://192.168.199.171:9024/template/myOrderList",
        myOrderDetail : "https://192.168.199.171:9024/template/myOrderDetail",
        updateOrderStatus : "https://192.168.199.171:9024/template/updateOrderStatus",
        payByTemplateId : "https://192.168.199.171:9024/template/payByTemplateId",
        previewBlock: "https://192.168.199.171:9022/blockManagerStockController/previewBlock",

        getShareSign: "https://192.168.199.171:9024/WXPay/getShareSign",

        searchCollect: "https://192.168.199.171:9022/blockCollectWxController/searchCollect",
        saveCollect: "https://192.168.199.171:9022/blockCollectWxController/saveCollect",
        removeCollect: "https://192.168.199.171:9022/blockCollectWxController/removeCollect",
        setDefault: "https://192.168.199.171:9021/userDeliveryWx/setDefault",
        wxPayPrev: "https://192.168.199.171:9024/templateWx/wxPayPrev",

        getCompanyDetail: "https://192.168.199.171:9023/commonCompany/getCompanyDetail",
        createSupplierCollect: "https://192.168.199.171:9023/supplierCollect/createSupplierCollect",
        removeSupplierCollect: "https://192.168.199.171:9023/supplierCollect/removeSupplierCollect",

        searchSupplierCollect: "https://192.168.199.171:9023/supplierCollect/searchSupplierCollect",
        queryCompanySlab: "https://192.168.199.171:9022/onsale/queryCompanySlab",
        listCompanyImg: "https://192.168.199.171:9023/commonCompany/listCompanyImg",
        queryGoldCompany: "https://192.168.199.171:9023/commonCompany/queryGoldCompany",

        getStatusOrderNum: "https://192.168.199.171:9024/template/getStatusOrderNum",
        // 个人中心
        getPersonageCenterData: "https://192.168.199.171:9021/user/getPersonageCenterData",
        showDetails: "https://192.168.199.171:9022/managerBlock/showDetails",
        queryWallPanel: "http://192.168.199.171:9022/soushi/queryWallPanel",
    };
}

export default config;