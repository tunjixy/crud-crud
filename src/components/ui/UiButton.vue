<template>
  <button
    :loading="loading"
    :rounded="rounded"
    :roundedFull="roundedFull"
    :raised="raised"
    :full="full"
    :small="small"
    :primary="primary"
    :secondary="secondary"
    :outline="outline"
    :red="red"
    :center="center"
    :class="{
      'py-2': small,
      'py-5': large,
      'btn-primary': primary,
      'btn-secondary': secondary,
      'btn-outline': outline,
      'btn-red': red,
      'shadow-btn': raised,
      rounded: rounded,
      'rounded-full': roundedFull,
      'w-full': full,
      'mx-auto': center,
      'flex items-center justify-center': loading
    }"
    :type="type"
    :disabled="disabled"
    class="block btn"
    @click="$emit('click')"
  >
    <slot>Submit</slot>
    <div v-if="loading" class="spin h-5 w-5 rounded-full ml-3" />
  </button>
</template>

<script>
export default {
  name: 'UiButton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    secondary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    red: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    raised: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    },
    roundedFull: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.spin {
  border: 3px solid #fff;
  border-top: 3px solid #69da55;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
