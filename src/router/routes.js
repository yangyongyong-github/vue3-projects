import { getAsyncPage } from "../util"
const Home = getAsyncPage("../views/Home.vue");
const About = getAsyncPage("../views/About.vue");
// const Excel = getAsyncPage("../views/Excel.vue")

export default [
    { name: "Home", path: '/', component: Home },
    { name: "About", path: '/about', component: About },
    {
        name: "Excel",
        path: '/excel',
        component: import("../views/Excel/index.vue"),
        children: [
            {
                name: 'Read',
                path: 'read',
                component: import('../views/Excel/index2.vue')
            },
            {
                name: 'Output',
                path: 'out',
                component: import("../views/Excel/out.vue")
            }
        ]
    }
]