import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        lists: ['Coaches', 'Heisman players']
    }
});

const router = new VueRouter({
    routes: [{
        path: '/home',
        component: require('./components/index')
    }, {
        path: '/lists',
        component: require('./components/lists/index'),
        children: [{
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