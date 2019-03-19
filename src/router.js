import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App.vue'
import Comp1 from '@/components/Comp1.vue'
import Comp2 from "@/components/Comp2.vue"

export const router = [
    {
        path: "/",
        component: App,
        name: 'App'
    },
    {
        path: "/comp1",
        component: Comp1,
        name: 'Comp1'
    },
    {
        path: '/comp2',
        component: Comp2,
        name: 'Comp2'
    }
]