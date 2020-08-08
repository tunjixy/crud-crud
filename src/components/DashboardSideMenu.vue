<template>
  <div
    class="w-12 bg-white flex-none flex flex-col justify-between overflow-y-hidden"
  >
    <div class="overflow-y-auto flex flex-col items-center justify-center">
      <router-link
        :to="link.url"
        v-for="(link, index) in links"
        :key="index"
        class="mt-10 block text-lg w-12 text-center py-4 text-lightgray hover:text-primary hover:border-l-2 hover:border-primary transition duration-300 ease-in"
      >
        <i :class="`${link.icon}`" />
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardSideMenu',
  data() {
    return {
      links: [
        {
          url: '/dashboard',
          title: 'Dashboard',
          icon: 'fas fa-th-large'
        },
        {
          url: '/dashboard/contacts',
          title: 'Contacts',
          icon: 'fas fa-user-friends'
        },
        {
          url: '/dashboard/accounts',
          title: 'Account',
          icon: 'fas fa-credit-card'
        }
      ]
    }
  }
}
</script>

<style>
.router-link-exact-active {
  @apply border-l-2 border-primary text-primary;
}
</style>
