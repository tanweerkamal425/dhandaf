import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/HomePage.vue';
import PartyIndexPage from '@/pages/dhanda/PartyIndexPage.vue';
import PartyShowPage from '@/pages/dhanda/PartyShowPage.vue';
import PartyEditPage from '@/pages/dhanda/PartyEditPage.vue';
import PartyCreatePage from '@/pages/dhanda/PartyCreatePage.vue';

import TransactionIndexPage from '@/pages/dhanda/TransactionIndexPage.vue'
import TransactionShowPage from '@/pages/dhanda/TransactionShowPage.vue';
import TransactionCreatePage from '@/pages/dhanda/TransactionCreatePage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/party',
      name: 'party.list',
      component: PartyIndexPage
    },
    {
      path: '/party/:id',
      name: 'party.detail',
      component: PartyShowPage
    },
    {
      path: '/party/create',
      name: 'party.create',
      component: PartyCreatePage,
      // meta: {
      //   showNavbar: false,
      // },
    },
    {
      path: '/party/:id/edit',
      name: 'party.edit',
      component: PartyEditPage
    },
    {
      path: '/party/:id/delete',
      name: 'party.delete',
    },
    {
      path: '/transaction',
      name: 'transaction.list',
      component: TransactionIndexPage
    },
    {
      path: '/transaction/:id',
      name: 'transaction.show',
      component: TransactionShowPage
    },
    {
      path: '/transaction/create',
      name: 'transaction.create',
      component: TransactionCreatePage,
    },
  ]
})

export default router
