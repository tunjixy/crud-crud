<template>
  <div class="relative w-full sm:w-1/3 md:w-1/4 lg:w-1/6">
    <select class="select">
      <option selected disabled>
        Choose role
      </option>
      <option v-for="(role, index) in roles" :key="index" :value="role">
        {{ role }}
      </option>
    </select>
    <div
      class="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
    >
      <svg
        class="h-5 w-5 text-gray-600"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
      >
        <path
          d="M7 7l3-3 3 3m0 6l-3 3-3-3"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmployeeRoleChange',
  data() {
    return {
      roles: ['Admin', 'Staff']
    }
  }
}
</script>
