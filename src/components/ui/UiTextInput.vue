<template>
  <validation-provider
    v-slot="{ errors, required, ariaInput, ariaMsg }"
    :vid="vid"
    :rules="rules"
    :name="name || label"
    :disabled="disabled"
    tag="div"
  >
    <label :for="name" class="label" @click="$refs.input.focus()">
      <span>{{ label }}</span>
    </label>
    <input
      :id="name"
      ref="input"
      v-model="innerValue"
      :class="{
        'border-red-600': errors[0],
        'has-value': hasValue
      }"
      :type="type"
      :placeholder="placeholder"
      v-bind="ariaInput"
      :disabled="disabled"
      class="input mb-1"
      @keyup="$emit('keyup')"
      @blur="$emit('blur')"
      @keypress="$emit('keypress')"
    />
    <span v-if="errors[0]" v-bind="ariaMsg" class="error">{{ errors[0] }}</span>
  </validation-provider>
</template>

<script>
export default {
  name: 'TextInput',
  props: {
    vid: {
      type: String,
      default: undefined
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    rules: {
      type: [Object, String],
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'text',
      validator(value) {
        return [
          'url',
          'text',
          'password',
          'tel',
          'search',
          'number',
          'email'
        ].includes(value)
      }
    },
    value: {
      type: null,
      default: ''
    }
  },
  data: () => ({
    innerValue: ''
  }),
  computed: {
    hasValue() {
      return !!this.innerValue
    }
  },
  watch: {
    innerValue(value) {
      this.$emit('input', value)
    },
    value(val) {
      if (val !== this.innerValue) {
        this.innerValue = val
      }
    }
  },
  created() {
    if (this.value) {
      this.innerValue = this.value
    }
  }
}
</script>
