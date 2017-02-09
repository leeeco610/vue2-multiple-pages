/**
 * Created by Administrator on 2016/12/26.
 * 基本验证
 */
var baseCtl = {};
/************************
 * 判断用户是否是登录状态
 ***********************/
baseCtl.isLoggedon = function (req) {
    return req.cookies['JCY_SESSIONID'];
};

/************************
 * 跳转到登录界面
 ***********************/
baseCtl.jumpToLogin = function (res) {
    res.redirect('/ucenter/designerLogin');
};

/************************
 * 跳转到抢单列表界面
 ***********************/
baseCtl.jumpToDesignerGrab = function (res) {
    res.redirect('/user/designerGrab');
};

module.exports = baseCtl;