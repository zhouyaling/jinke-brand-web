import App from '../App';

export default [{
    path: '/',
    component: App,
    children: [{
            path: '',
            component: r => require.ensure([], () => r(require('../page/home')), 'home')
        },
        {
            path: '/home',
            component: r => require.ensure([], () => r(require('../page/home')), 'home')
        },
        {
            path: '/thmz',
            component: r => require.ensure([], () => r(require('../page/thmz')), 'thmz')
        },
        {
            path: '/ipad',
            component: r => require.ensure([], () => r(require('../page/ipad')), 'ipad')
        },
        {
            path: '/yzfw',
            component: r => require.ensure([], () => r(require('../page/yzfw')), 'yzfw')
        },
        {
            path: '/index',
            component: r => require.ensure([], () => r(require('../page/index')), 'index')
        },
        /*  {
             path: '/test',
             component: r => require.ensure([], () => r(require('../page/test')), 'test')
         } */
    ]
}]

/* const routes = [
    { path: '/home', component: Home },
    { path: '/center', component: Center }
]
*/