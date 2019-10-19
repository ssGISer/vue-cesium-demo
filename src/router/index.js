import Vue from 'vue'
import Router from 'vue-router'
import CesiumScene from '@/components/CesiumScene'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'scene',
            component: CesiumScene
        }
    ]
})