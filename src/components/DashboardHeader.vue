<template>
  <header class="bg-white h-16 w-full fixed">
    <div class="h-16 flex items-center justify-between">
      <img
        class="h-4 sm:h-6 pl-5"
        src="../assets/image/logo.png"
        alt="Getchange"
      />
      <div class="flex items-center pr-10 cursor-pointer">
        <div class="h-8 w-8 rounded-full bg-gray-600" />
        <span class="font-bold ml-2">Hi, Joshua</span>
        <i class="fas fa-caret-down ml-4" />
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DashboardHeader'
}
</script>
