import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn        from    './components/LogIn.vue'
import SignUp       from    './components/SignUp.vue'
import Profile      from    './components/Profile.vue'
import Plan         from    './components/Plan.vue'
import Home         from    './components/Home.vue'
import Home_main    from    './components/Home_main.vue'

const routes = [{
    path: '/',
    name: 'root',
    component: App
},
{
    path: '/logIn',
    name: "logIn",
    component: LogIn
},
{
    path: '/signUp',
    name: "signUp",
    component: SignUp
},
{
    path: '/user/profile',
    name: "profile",
    component: Profile
},
{
    path: '/user/plan',
    name: "plan",
    component: Plan
    },
{
    path: '',
    name: "home",
    component: Home
    },
{
        path: '/test',
        name: "hometest",
        component: Home_main
        }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;