import { createRouter, createWebHistory } from 'vue-router'

import CenterContext from '../components/CenterContext.vue'
import Mission from '../components/Mission.vue'
import Stat from '../components/Stat.vue'
import Dashboard from '../components/Dashboard.vue'
import MissionBox from '../components/components-view/Mission-Box.vue'
import Forum from '../components/components-view/Forum.vue'
import Profile from '../components/components-view/Profile.vue'
// import Week from '../components/Week.vue';
import Charty from '../components/components-view/Chart.vue'

const routes = [
    {
        path: '/',
        name: 'home'
        // redirect: { name: 'main-view'},
    },
    {
        path: '/chart',
        component: Charty,
        name: ''
    },
    {
        path: '/dashboard',
        component: Dashboard,
        meta: { test: '150' },
        name: 'dashboard',
        children: [
            {
                path: '',
                component: Forum,
                name: 'forum',
                meta: {}
            }
        ]
    },
    {
        path: '/mission',
        component: Mission,
        name: 'mission',
        children: [
            {
                path: ':id',
                component: MissionBox,
                name: 'algo',
                meta: {}
            }
        ]
    },
    {
        path: '/profile',
        component: CenterContext,
        meta: { test: '100' },
        name: 'main-view',
        children: [
            {
                path: '',
                component: Profile,
                name: 'profile',
                meta: { displayTitle: 'Profile_Test' }
            },
            {
                path: 'stat',
                component: Stat,
                name: 'stat',
                meta: { displayTitle: 'Stat_Test' }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
