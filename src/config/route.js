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
    '/a': {
        key: '/a',
        title: '模块a',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/a/a': {
                key: '/a/a',
                title: '模块a-a',
                menu: true,
                group: 'sider',
                component: 'a/index'
            },
            '/a/b': {
                key: '/a/b',
                title: '模块a-b',
                menu: true,
                group: 'sider',
                component: 'b/index'
            }
        }
    },
    '/b': {
        key: '/b',
        title: '模块b',
        icon: {
            type: 'icon-ziyuan',
            source: 'iconfont'
        },
        menu: true,
        group: 'sider',
        children: {
            '/b/a': {
                key: '/b/a',
                title: '模块b-a',
                menu: true,
                group: 'sider',
                component: 'a/index'
            },
            '/b/b': {
                key: '/b/b',
                title: '模块b-b',
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