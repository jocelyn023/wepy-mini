import {
  wxRequest
} from '@/utils/wxRequest';

const apiMall = 'https://miniapp.guomiaotang.cn/api'

//微信的jscode换取sessionKey
const wxJsCode2Session = (params) => wxRequest(params, apiMall + "/user");
//-----------------------------用户信息--end


//首页--banner+ 商品列表
const getHome = (params) => wxRequest(params, apiMall + '/get_home');
//商品详情
const getGoodsDetail = (params) => wxRequest(params, apiMall + '/get_product_info');
//------------------------------商品--end


//支付前生成订单
const createOrder = (params) => wxRequest(params, apiMall + '/pay');
//获取所有订单
const getAllCards = (params) => wxRequest(params, apiMall + '/cards');
//获取验证码
const getReg = (params) => wxRequest(params, apiMall + '/get_checkcode');
const getCardId = (params) => wxRequest(params, apiMall + '/card/get_cardid');
//提货
const pickGoods = (params) => wxRequest(params, apiMall + '/card/exchange_goods');
//-------------------------------支付--end

//用户收货地址
const getUserAddress = (params) => wxRequest(params, apiMall + '/get_addresses');
//保存用户收货地址
const saveAddress = (params) => wxRequest(params, apiMall + '/address/create');
//用户收货地址根据id查询
const receiverInfoById = (params) => wxRequest(params, apiMall + '/address/detail');
//修改用户收货地址
const editUserAddress = (params) => wxRequest(params, apiMall + '/address/edit');

//根据Id删除收货地址
const delUserAddress = (params) => wxRequest(params, apiMall + '/address/del');
// ---------------------地址------end
/**
 * 获取发现好商品接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
const getDiscoverList = (params) => wxRequest(params, apiMall + '/emall/goods/list?cateidOne=1&cateidTwo=0&price=0&sales=2');
//微信的jscode换取sessionKey
const user2session = (params) => wxRequest(params, apiMall + "/emall/api/wechat/user2session?jsoncallback=?");

//商品接口---begin
//首页发现商品接口
const hostGoodsList = (params) => wxRequest(params, apiMall + '/emall/api/home/hostGoodsList');
const getHomeDisvocerList = (params) => wxRequest(params, apiMall + '/emall/api/mall/discoverList');
//查询商品列表
const getGoodsList = (params) => wxRequest(params, apiMall + '/emall/api/mall/searchGoodsList');

//查询商品详情信息
const goodsDetail = (params) => wxRequest(params, apiMall + '/emall/api/mall/goods');
//商品加入购物车
const addCart = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsCart/add');
//用户的购物车商品列表
const cartList = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsCart/list');
//购物车的商品选中状态
const cartCheck = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsCart/check');
//购物车的商品选中状态(全选)
const cartCheckAll = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsCart/checkAll');
//购物车的商品删除
const cartDel = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsCart/delete');
//购物车的商品数量更新
const cartUpdateNum = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsCart/updateNum');
//直接购买商品
const preOrder = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsOrder/commitData');

//支付前生成订单
const saveByCart = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsOrder/saveByCart');

//支付统一下单
const toPay = (params) => wxRequest(params, apiMall + '/emall/wepay/toPay');

//商品收藏
const goodsFavorite = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsFavorite/add');

//商品收藏删除
const goodsUnFavorite = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsFavorite/delete');

//商品是否已收藏
const goodsIsFavorite = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsFavorite/goodsIsFavorite');

//商品接口---end

//用户相关信息--begin
//用户的当天签到信息
const userSginInfo = (params) => wxRequest(params, apiMall + '/emall/api/userSign/signInfo');
const doSign = (params) => wxRequest(params, apiMall + '/emall/api/userSign/doSign');
//获取最近七天签到情况
const getSignDate = (params) => wxRequest(params, apiMall + '/emall/api/userSign/getSignDate');

//用户积分信息
const pointInfo = (params) => wxRequest(params, apiMall + '/emall/api/userPoint/pointInfo');

//用户足迹信息
const browseInfo = (params) => wxRequest(params, apiMall + '/emall/api/userBrowse/browseInfo');
//添加用户足迹
const addBrowser = (params) => wxRequest(params, apiMall + '/emall/api/userBrowse/add');
//添加用户足迹
const delUserBrowser = (params) => wxRequest(params, apiMall + '/emall/api/userBrowse/delete');

//用户收藏的商品
const favoriteInfo = (params) => wxRequest(params, apiMall + '/emall/api/goodsFavorite/favoriteInfo');

//用户消息
const messageInfo = (params) => wxRequest(params, apiMall + '/emall/api/systemMessage/messageInfo');

//用户手机绑定
const registerUser = (params) => wxRequest(params, apiMall + '/emall/api/userCenter/register');
//发送短信
const sendRandCode = (params) => wxRequest(params, apiMall + '/emall/api/sms/send');

//用户是否绑定手机号
const getUserInfo = (params) => wxRequest(params, apiMall + '/emall/api/userCenter/getUserInfo');


//查询关键字保存
const addSearchKeyword = (params) => wxRequest(params, apiMall + '/emall/api/searchkeyword/add');
//查询关键字列表
const searchKeywordList = (params) => wxRequest(params, apiMall + '/emall/api/searchkeyword/list');
//查询关键字清除
const clearSearchKeyword = (params) => wxRequest(params, apiMall + '/emall/api/searchkeyword/clear');

//查询我的订单
const getMyOrderList = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsOrder/getMyOrderList');

//查询我的订单数量
const getMyOrderSize = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsOrder/getMyOrderSize');

//根据订单号查询详情
const getOrderInfo = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsOrder/getOrderDetail');

//根据订单号查询详情
const getPayOrderDetail = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsOrder/getPayOrderDetail');

//根据订单号查询详情
const editOrderInfo = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsOrder/opt');

//根据订单号查询物流
const orderExpressInfo = (params) => wxRequest(params, apiMall + '/emall/api/orderExpress/orderExpressInfo');

//查询用户的已订购产品
const goodsUserOrderList = (params) => wxRequest(params, apiMall + '/emall/api/mall/goodsOrder/goodsUserOrderList');

//退货操作
const refundApply = (params) => wxRequest(params, apiMall + '/emall/api/mall/refund/saveRefundApply');

//用户相关信息--end

//商品分类--begin
//一级分类
const rootCtegoryList = (params) => wxRequest(params, apiMall + '/emall/api/mall/rootCtegoryList');
//二级三级分类
const childGoodsCatetoryList = (params) => wxRequest(params, apiMall + '/emall/api/mall/childGoodsCatetoryList');
//商品分类--end

//查询广告列表
const getAdList = (params) => wxRequest(params, apiMall + '/emall/api/adverts/list');

export default {
  getCardId,
  getReg,
  editUserAddress,
  wxJsCode2Session,
  getHome,
  getGoodsDetail,
  pickGoods,
  getAllCards,
  createOrder,
  hostGoodsList,
  getDiscoverList,
  getHomeDisvocerList,
  getGoodsList,
  goodsDetail,
  user2session,
  userSginInfo,
  doSign,
  addCart,
  cartList,
  cartCheck,
  cartCheckAll,
  cartDel,
  cartUpdateNum,
  preOrder,
  refundApply,
  pointInfo,
  browseInfo,
  addBrowser,
  delUserBrowser,
  favoriteInfo,
  messageInfo,
  registerUser,
  sendRandCode,
  getUserInfo,
  saveAddress,
  receiverInfoById,
  getUserAddress,
  addSearchKeyword,
  searchKeywordList,
  clearSearchKeyword,
  getMyOrderList,
  saveByCart,
  toPay,
  rootCtegoryList,
  childGoodsCatetoryList,
  getOrderInfo,
  editOrderInfo,
  goodsUserOrderList,
  orderExpressInfo,
  delUserAddress,
  goodsFavorite,
  goodsUnFavorite,
  goodsIsFavorite,
  getMyOrderSize,
  getPayOrderDetail,
  getAdList,
  getSignDate
}
