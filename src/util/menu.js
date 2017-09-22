const menuItems = [{
    name: '银行',
    type: 'bank',
    url: '/bank',
    children: [{
        name: '查看某条详情',
        url: '/bankDetail',
        type: 'bankDetail'

    }]
}, {
    name: '卡片',
    type: 'file',
    url: '/card'
}, {
    name: '代码池',
    type: 'mail',
    url: '/code'
}, {
    name: '渠道',
    type: 'save',
    url: '/channel'
}, {
    name: '订单管理',
    type: 'car',
    url: '/'
}, {
    name: '银行总单数',
    type: 'team',
    url: '/bankOrders',
    children: [{
        name: '交通银行',
        url: '/bc',
        type: 'bc'
    }, {
        name: '招商银行',
        url: '/zs',
        type: 'zs'
    }]
}, {
    name: '转化统计',
    type: 'star',
    url: '/statistics'
}]
export default menuItems