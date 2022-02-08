import Vue from 'vue';
import VueRouter from 'vue-router';
import TaskList from '../components/TaskList/TaskList.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'all',
    component: TaskList,
    props: true
  },
  {
    path: '/active',
    name: 'active',
    component: TaskList,
    props: true
  },
  {
    path: '/completed',
    name: 'completed',
    component: TaskList,
    props: true
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
