/*
 * key: 唯一key
 * title: 中文描述
 * type: 路由类型, 'route': 常规路由 | 'redirect': 重定向路由
 * to: 重定向路由, 当type: redirect时, 指定重定向的目标
 * icon: { type: icon的type, source: icon来源('antd' | 'iconfont') }
 * menu: 是否在菜单中显示
 * group: 所属菜单组(通常配合menu: true使用)
 * component: 路由绑定的组件
 * exact: 是否为精准路由
 * children: 子路由
 */

export default {
    '/': {
        key: '/',
        title: '概览',
        icon: {
            type: 'icon-gailan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        component: 'home/index'
    },
    '/operation': {
        key: '/operation',
        title: '运营管理',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/operation/list': {
                key: '/operation/list',
                title: '列表',
                menu: true,
                group: 'sider',
                component: 'operation/list'
            },
            '/operation/center': {
                key: '/operation/center',
                title: '管理',
                menu: true,
                group: 'sider',
                component: 'operation/center'
            }
        }
    },
    '/development': {
        key: '/development',
        title: '开发管理',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/development/list': {
                key: '/development/list',
                title: '项目列表',
                menu: true,
                group: 'sider',
                component: 'b/index'
            }
        }
    },
    '/resource': {
        key: '/resource',
        title: '模块b',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/resource/list': {
                key: '/resource/list',
                title: '项目列表',
                menu: true,
                group: 'sider',
                component: 'b/index'
            }
        }
    },
    '/404': {
        key: '404',
        title: '404',
        component: '404/index'
    },
    'notFound': {
        key: 'notFound',
        type: 'redirect',
        to: '/404'
    }
}