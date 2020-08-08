import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, min, confirmed } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'This field is required'
})
extend('confirmed', {
  ...confirmed,
  message: 'The {_field_} does not match'
})
extend('email', {
  ...email,
  message: 'The {_field_} must be a valid email'
})
extend('min', {
  ...min,
  validate: (value, { min }) => {
    const length = value.length
    return length >= min
  },
  params: ['min'],
  message: 'The {_field_} must be at least {min} characters'
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL =
  'https://crudcrud.com/api/67ec5e0c89264ee19cb79b056ad083aa'

import UiButton from '@/components/ui/UiButton'
Vue.component('UiButton', UiButton)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
