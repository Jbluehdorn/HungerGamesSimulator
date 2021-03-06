import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

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

const store = require('./store/vue-store').default;

const vm = new Vue({
    render: h => h(require('./Main')),
    router,
    store
}).$mount('#main');