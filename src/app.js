import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({
    routes: [{
        path: '/home',
        component: require('./components/home')
    }, {
        path: '/other',
        component: require('./components/route2')
    }, {
        path: '**',
        redirect: '/home'
    }]
});

const vm = new Vue({
    render: h => h(require('./Main')),
    router
}).$mount('#main');