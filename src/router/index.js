import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Authontication/login.vue'
import Register from '@/views/Authontication/register.vue'
import Otp from '@/views/Authontication/otp.vue'
import AddPassword from '@/views/Authontication/addPassword.vue'
import PaymentDetails from '@/views/Authontication/paymentDetails.vue'
import SuccessRegister from '@/views/Authontication/successRegister.vue'
import User from '@/views/user.vue'
import Profile from '@/views/User/profile.vue'
import Session from '@/views/User/session.vue'
import Booking from '@/views/User/booking.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/otp',
      name: 'otp',
      component: Otp,
    },
    {
      path: '/addpassword',
      name: 'addpassword',
      component: AddPassword,
    },
    {
      path: '/paymentDetails',
      name: 'paymentDetails',
      component: PaymentDetails,
    },
    {
      path: '/successRegister',
      name: 'successRegister',
      component: SuccessRegister,
    },
    {
      path: '/user',
      name: 'user',
      component: User,
      children : [
        {
        path: 'profile',
        name: 'profile',
        component: Profile,
        },
        {
        path: 'booking',
        name: 'booking',
        component: Booking,
        },
        {
        path: 'session',
        name: 'session',
        component: Session,
        },
      ]
    },
  ],
})

export default router
