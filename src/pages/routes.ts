import { RouteRecordRaw } from 'vue-router'
import PageNotFound from './errors/PageNotFound.vue'
import Playground from './playground/Playground.vue'
import Test from './test/Test.vue'

export const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/playground' },
  {
    path: '/playground/:encoded?',
    component: Playground,
    props: (route) => ({ encoded: route.params.encoded }),
  },
  { path: '/test', component: Test },
  { path: '/:pathMatch(.*)', component: PageNotFound },
]
