import { createRouter, createWebHistory } from 'vue-router'
import AboutViewVue from '@/views/AboutView.vue'
import StudentListViewVue from '@/views/StudentListView.vue'
import EventListViewVue from '@/views/EventListView.vue'
import EventListViewButDifferentVue from '@/views/EventListViewButDifferent.vue'
import EventLayoutViewVue from '@/views/EventLayoutView.vue'
import EventDetailViewVue from '@/views/event/EventDetailView.vue'
import EventEditViewVue from '@/views/event/EventEditView.vue'
import EventRegisterViewVue from '@/views/event/EventRegisterView.vue'
import NotFoundViewVue from '@/views/NotFoundView.vue'
import NetworkErrorViewVue from '@/views/NetworkErrorView.vue'
import nProgress from 'nprogress'
import EventServices from '@/services/EventServices'
import { useEventStore } from '@/stores/event'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListViewVue,
      props: (route) => ({ page: parseInt(route.query?.page as string) }),
      beforeEnter: (to, _, next) => {
        if (
          !to.query?.page ||
          parseInt(to.query?.page as string) < 1 ||
          isNaN(parseInt(to.query?.page as string))
        ) {
          next({ name: 'event-list', query: { page: 1 } })
        } else {
          next()
        }
      }
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/org',
      name: 'event-org-list',
      component: EventListViewButDifferentVue
    },
    {
      path: '/students',
      name: 'student-list',
      component: StudentListViewVue
    },
    {
      path: '/event/:id',
      component: EventLayoutViewVue,
      beforeEnter: (to) => {
        const id: number = parseInt(to.params.id as string)
        const eventStore = useEventStore()
        EventServices.getEventById(id)
          .then((res) => {
            eventStore.setEvent(res.data)
          })
          .catch((err) => {
            console.log(err)
            if (err.response && err.response.status == 404)
              return { name: '404-resource', params: { resource: 'event' } }
            else if (err.code === 'ERR_NETWORK') return { name: 'network-error' }
          })
      },
      children: [
        {
          path: 'detail',
          alias: '',
          name: 'event-details',
          component: EventDetailViewVue,
          props: true
        },
        {
          path: 'register',
          name: 'event-register',
          component: EventRegisterViewVue,
          props: true
        },
        {
          path: 'edit',
          name: 'event-edit',
          component: EventEditViewVue,
          props: true
        }
      ]
    },
    {
      path: '/404/:resource',
      name: '404-resource',
      component: NotFoundViewVue,
      props: true
    },
    {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorViewVue
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundViewVue
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    else return { top: 0 }
  }
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
