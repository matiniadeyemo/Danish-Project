import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import contact from '@/components/contact.vue'
import Vat from '@/components/Vat.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/contact',name:'contact', component:contact
    },
    {
      path:'/Vat',name:'Vat', component:Vat
    },
      { 
      path: '/', 
      name: 'home', component: home },
  ],
})

export default router
