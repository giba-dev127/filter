import { createRouter, createWebHistory } from "vue-router"
import homeLanding from "../pages/homeLanding.vue"

const routes = [
   {
      path: 'home',
      name: 'home-landing',
      component: homeLanding
   },
   {
      path: 'faq',
      name: 'faq-page',
      component: () => import("../pages/faqPage.vue")
   },
   {
      path: 'privacy-policy',
      name: 'privacy-policy-page',
      component: () => import("../pages/privacyPolicy.vue")
   },   
   {
      path: 'terms-and-conditions',
      name: 'terms-and-conditions-page',
      component: () => import("../pages/termsPage.vue")
   }
]

routes.map(route => {
   route.path = '/filter/' + route.path
})

const router = createRouter({
   routes,
   history: createWebHistory()
})

router.beforeEach((to, from) => {
   console.log('to ', to, '/n from ', from)
})

export default router;