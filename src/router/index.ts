import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '@/views/AboutView.vue'
import StudentListViewVue from '@/views/StudentListView.vue'
import EventListViewVue from '@/views/EventListView.vue'
import EventListViewButDifferentVue from '@/views/EventListViewButDifferent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListViewVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/organizers',
      name: 'event-org-list',
      component: EventListViewButDifferentVue
    },
    {
      path: '/students',
      name: 'student-list',
      component: StudentListViewVue
    }
  ]
})

export default router
