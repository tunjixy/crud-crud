<template>
  <div class="flex items-center">
    <span class="border h-5 w-5 flex items-center justify-center mr-1">1</span>
    of
    <span class="ml-1">2</span>
    <div class="flex ml-4">
      <div
        class="h-5 w-5 rounded-full bg-primary flex items-center justify-center"
      >
        <i class="fas fa-angle-left text-gray-300 text-xs" />
      </div>
      <div
        class="h-5 w-5 rounded-full bg-primary flex items-center justify-center ml-3"
      >
        <i class="fas fa-angle-right text-gray-300 text-xs" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UiPagination'
}
</script>
