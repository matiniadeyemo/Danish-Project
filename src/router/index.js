import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/home.vue'
import contact from '@/components/contact.vue'
import Vat from '@/components/Vat.vue'
import Travel from '@/components/Travel.vue';
import Online from '@/components/Online.vue';
import Gift from '@/components/Gift.vue';
import moveDem from '@/components/moveDem.vue';
import Special from '@/components/Special.vue';
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
      path:'/Travel',name:'Travel', component:Travel
    },
    {
      path:'/Online', name:' Online', component: Online
    }
    ,
    {
      path:'/gift', name:' gift', component:Gift
    },
     {
      path:'/move', name:' move', component:moveDem
    },
     {
      path:'/Special', name:' Special', component:Special
    },
      { 
      path: '/', 
      name: 'home', component: home },
  ],
})

export default router
