/**
 * 定义 getter、action、和 mutation 的名称为常量
 * 名称格式 ***_*_****
 * 名称意义 (项目)_(action/mutation/getter)_(作用)
 */

 //demo
export const DEMO_A_DATA_SHOW = 'demo.a.data_show'
export const DEMO_M_DATA_SHOW = 'demo.m.data_show'
export const DEMO_G_DATA_SHOW = 'demo.g.data_show'

//个人中心
export const UC_A_USER_INFO = 'uc.a.user_info'



//订单中心
export const OC_A_ALL_ORDER = 'oc.a.all_order'
export const OC_M_ALL_ORDER = 'oc.m.all_order'
export const OC_G_ALL_ORDER = 'oc.g.all_order'

// 删除订单
export const OC_A_DELETE_ORDER = 'oc.a.delete_order'
export const OC_M_DELETE_ORDER = 'oc.m.delete_order'
// 过滤订单
export const OC_M_FILTER_ORDER = 'oc.m.filter_order'
export const OC_G_FILTER_ORDER = 'oc.g.filter_order'
// 搜索订单
export const OC_M_SEARCH_ORDER = 'oc.m.search_order'

/**
 * 头部
 */
export const HD_A_ALL_MESSAGE = 'hd.a.all_message'
export const HD_M_ALL_MESSAGE = 'hd.m.all_message'
export const HD_G_ALL_MESSAGE = 'hd.g.all_message'
//减少未读消息
export const HD_A_SUB_NOREADMES = 'hd.a.sub_noreadmes'
export const HD_M_SUB_NOREADMES = 'hd.m.sub_noreadmes'

/**
 * 消息中心
 */
//获取所有数据
export const MC_A_ALL_MESSAGE = 'mc.a.all_message'
export const MC_M_ALL_MESSAGE = 'mc.m.all_message'
//显示消息详情
export const MC_A_SHOW_DETAIL = 'mc.a.show_detail'
export const MC_M_SHOW_DETAIL = 'mc.m.show_detail'
//显示未读消息
export const MC_A_SHOW_NOREAD = 'mc.a.show_noread'
export const MC_M_SHOW_NOREAD = 'mc.m.show_noread'
//显示已读消息
export const MC_A_SHOW_READED = 'mc.a.show_readed'
export const MC_M_SHOW_READED = 'mc.m.show_readed'
//显示所有消息
export const MC_A_SHOW_ALLMES = 'mc.a.show_allmes'
export const MC_M_SHOW_ALLMES = 'mc.m.show_allmes'
//显示系统消息
export const MC_A_SHOW_SYSMES = 'mc.a.show_sysmes'
export const MC_M_SHOW_SYSMES = 'mc.m.show_sysmes'
//删除消息
export const MC_A_DELETE_MES = 'mc.a.delete_mes'
export const MC_M_DELETE_MES = 'mc.m.delete_mes'
//删除已读消息
export const MC_A_DELREAD_MES = 'mc.a.delread_mes'
//变更消息列表选中值
export const MC_A_CHANGE_SELECT = 'mc.a.change_select'
export const MC_M_CHANGE_SELECT = 'mc.m.change_select'


// 个人中心
export const PC_A_ALL_PERSONAL = 'pc.a.all_personal'
export const PC_M_ALL_PERSONAL = 'pc.m.all_personal'
export const PC_G_ALL_PERSONAL = 'pc.g.all_personal'

//切换城市
export const PC_M_TOGGLE_CITY = 'pc.m.toggle_city'

//切换显示 作品或评论
export const PC_M_TOGGLE_SHOW = 'pc.m.toggle_show'

// 删除作品
export const PC_M_DELETE_SAMPLE = 'pc.m.delete_sample'
// 发送异步请求后台删除案例
export const PC_A_DELETE_CASE = 'pc.a.delete_case'

// 得到选中城市的数据
export const PC_G_CITY_PRICE = 'pc.g.city_price'

// 头部控制菜单栏的显示与掩藏
export const HD_M_CONTROL_TOGGLE = 'hd.m.control_toggle'

// 只要不是点击到目标上，都掩藏
export const HD_A_CONTROL_HIDE = 'hd.a.control_hide'
export const HD_M_CONTROL_HIDE = 'hd.m.control_hide'

export const HD_M_CONTROL_SHOW = 'hd.m.control_show'



