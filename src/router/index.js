import {createRouter, createWebHashHistory} from 'vue-router'
import HomePage from "@/views/HomePage";
import OrderPage from "@/views/OrderPage";
import OrderLocation from "@/views/OrderLocation";
import OrderModel from "@/views/OrderModel";

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
                redirect: '/order/model'
            },
            {
                path: 'location',
                name: 'OrderLocation',
                component: OrderLocation
            },
            {
                path: 'model',
                name: 'OrderModel',
                component: OrderModel
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
