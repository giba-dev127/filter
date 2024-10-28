import { createRouter, createWebHashHistory } from "vue-router"
import homeLanding from "../pages/homeLanding.vue"

const routes = [
   {
      path: '/',
      name: 'home-landing',
      component: homeLanding
   },
   {
      path: '/faq',
      name: 'faq-page',
      component: () => import("../pages/faqPage.vue")
   },
   {
      path: '/privacy-policy',
      name: 'privacy-policy-page',
      component: () => import("../pages/privacyPolicy.vue")
   },   
   {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions-page',
      component: () => import("../pages/termsPage.vue")
   }
]

const router = createRouter({
   routes,
   history: createWebHashHistory()
})

export default router;