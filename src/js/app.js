import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [{
        path: '/home',
        component: require('./components/index')
    }, {
        path: '/lists',
        component: require('./components/lists/index'),
        children: [{
            path: 'create',
            component: require('./components/lists/create')
        }, {
            path: ':name',
            component: require('./components/lists/show')
        }]
    }, {
        path: '**',
        redirect: '/home'
    }]
});

const vm = new Vue({
    render: h => h(require('./Main')),
    router
}).$mount('#main');