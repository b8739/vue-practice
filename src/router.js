import Vue from 'vue';
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter); //View Router를 사용했다고 선언

const router = new VueRouter({
    mode:"history",
    routes:[{
        path:"/", 
        component: Home
    },
    {
        path:"/about", 
        component: About
    }
    ]//가장 기본 path일 때 component Home을 loading하겠다는 말 
});

export default router;