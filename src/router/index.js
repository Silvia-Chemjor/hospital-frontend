import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '@/components/Homepage.vue'
import LandingPage from '@/components/LandingPage.vue'
import Login from '@/components/Login.vue'
import Patients from '@/components/Patients.vue'
import Profile from '@/components/Profile.vue'
import Signup from '@/components/Signup.vue'
import ViewPatient from '@/components/ViewPatient.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/homepage',
      component: Homepage
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/patients',
      component: Patients
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/viewpatient',
      component: ViewPatient
    },
  ],
})

export default router
