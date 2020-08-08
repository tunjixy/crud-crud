<template>
  <div class="flex items-end justify-end h-screen -mt-24">
    <div class="container">
      <h3 class="text-white text-center font-bold text-lg">
        {{ title }}
      </h3>
      <p class="text-gray-300 text-sm text-center leading-loose mt-2">
        {{ content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeSlide',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
}
</script>
