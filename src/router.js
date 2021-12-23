import Vue from 'vue';
import Router from 'vue-router';
import DataTable from './views/DataTable.vue';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes: [
        {name: 'tables', path: '/', component: DataTable, meta: {title: 'DataTable'} },
        { path: "*", redirect: "/" }
    ]
})

const DEFAULT_TITLE = 'Scelloo Test';

router.afterEach((to) => {
    document.title = `${to.meta.title} - ${DEFAULT_TITLE}`;
});

export default router;