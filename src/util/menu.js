const menuItems = [{
    name: '管理',
    type: 'user',
    url: '/manager',
    children: [{
        name: '用户(商务)管理',
        url: '/manager/user',
    }, {
        name: '银行管理',
        url: '/manager/bank',
    }, {
        name: '渠道管理',
        url: '/manager/channel',
    }, {
        name: '上线管理',
        url: '/manager/online',
    }, {
        name: '代码管理',
        url: '/manager/code',
    }]
}, {
    name: '数据导入',
    type: 'database',
    url: '/data-insert',
    children: [{
        name: '银行核卡数据导入',
        url: '/data-insert/bank-card',
    }, {
        name: '渠道结算数据导入',
        url: '/data-insert/channel-account',
    }, {
        name: '银行结算数据导入',
        url: '/data-insert/bank-account',
    }]
}, {
    name: '银行数据',
    type: 'bank',
    url: '/bank-data',
    children: [{
        name: '银行月报表',
        url: '/bank-data/bank-month'
    }, {
        name: '银行日报表',
        url: '/bank-data/bank-day'
    }]
}, {
    name: '渠道数据',
    type: 'switcher',
    url: '/channel-data',
    children: [{
        name: '渠道月报表',
        url: '/channel-data/channel-month'
    }, {
        name: '渠道日报表',
        url: '/channel-data/channel-day'
    }]
}, {
    name: '结算管理',
    type: 'schedule',
    url: '/settle-manager',
    children: [{
        name: '银行月结算单',
        url: '/settle-manager/bank-month'
    }, {
        name: '渠道月结算单',
        url: '/settle-manager/channel-month'
    }, {
        name: '渠道结算单',
        url: '/settle-manager/channel-account'
    }]
}, {
    name: '利润分析',
    type: 'wallet',
    url: '/profit-analysis',
    children: [{
        name: '渠道利润分析',
        url: '/profit-analysis/channel',
    }, {
        name: '商务利润分析',
        url: '/profit-analysis/business',
    }]
}]
export default menuItems