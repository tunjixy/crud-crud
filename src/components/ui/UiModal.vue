<template>
  <transition name="modal-fade">
    <div
      v-if="show"
      class="fixed overflow-auto inset-0 z-30 bg-black bg-opacity-75 p-8"
      @click.self="dismiss"
    >
      <div class="max-w-xl mx-auto" role="dialog">
        <div class="bg-white rounded shadow-xl py-6 px-8">
          <slot name="body" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'UiModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    show: {
      immediate: true,
      handler: (show) => {
        if (process.client) {
          if (show) {
            document.body.style.setProperty('overflow', 'hidden')
          } else {
            document.body.style.removeProperty('overflow')
          }
        }
      }
    }
  },
  mounted() {
    const escapeHandler = (e) => {
      if (e.key === 'Escape' && this.show) {
        this.dismiss()
      }
    }
    document.addEventListener('keydown', escapeHandler)
    this.$once('hook:destroyed', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
  },
  methods: {
    dismiss() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
