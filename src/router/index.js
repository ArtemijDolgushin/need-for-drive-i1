import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from "../views/HomePage";
import OrderPage from "../components/OrderPage";
import OrderLocation from "../components/OrderLocation";

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/order',
        name: 'OrderPage',
        component: OrderPage,
        children: [
            {
                path: '',
                redirect: '/order/location'
            },
            {
                path: 'location',
                name: 'OrderLocation',
                component: OrderLocation
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
