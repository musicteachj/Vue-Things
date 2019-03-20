import Vue from 'vue';
import Router from 'vue-router';

import HelloWorld from '@/components/HelloWorld.vue';
import Comp1 from '@/components/Comp1.vue';
import Comp2 from "@/components/Comp2.vue";

Vue.use(Router)

export default new Router ({
    mode: "history",
    routes: [
        {
            path: "/",
            component: HelloWorld,
            name: 'Hello World'
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
}) 