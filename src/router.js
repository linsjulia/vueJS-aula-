
import { createRouter, createWebHistory } from "vue-router";
import CircleCalc from "./components/CircleCalc.vue";
import TriangleCalc from "./components/TriangleCalc.vue";
import TrapazeCalc from "./components/TrapazeCalc.vue";

const routes = [
    {
        path: '/triangle',
        name: 'Triangulo',
        component: TriangleCalc
    },

    {
        path: '/circle',
        name: 'Circle',
        component: CircleCalc
    },
    {
        path: '/trapeze',
        name: 'Trapézio',
        component: TrapazeCalc
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;