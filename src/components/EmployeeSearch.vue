<template>
  <div class="relative">
    <input
      class="bg-white border rounded py-2 pl-3 pr-10 w-full outline-none focus:shadow-outline-primary"
      v-model="search"
      @input="searching"
      type="text"
      placeholder="Enter staff name here..."
    />
    <i
      class="fas fa-search text-gray-700 absolute"
      style="top: 35%; right: 15px"
    />
  </div>
</template>

<script>
export default {
  name: 'EmployeeSearch',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    searching() {
      this.$emit('search', this.search)
    }
  }
}
</script>
