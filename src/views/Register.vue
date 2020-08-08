<template>
  <div class="h-screen">
    <div class="md:flex md:items-center md:flex-wrap">
      <div class="hidden md:block w-full h-screen md:w-2/6 background">
        <carousel
          :autoplay="true"
          :autoplayTimeout="4000"
          :loop="true"
          :per-page="1"
          :pagination-active-color="'#69da55'"
        >
          <slide>
            <welcome-slide
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod dolorum reprehenderit ipsam officia unde fugit repudiandae libero itaque dicta."
              title="No Hazzles"
            />
          </slide>
          <slide>
            <welcome-slide
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quod dolorum reprehenderit ipsam officia unde fugit repudiandae libero itaque dicta."
              title="Keep Learning"
            />
          </slide>
        </carousel>
      </div>
      <div class="w-full md:w-2/3">
        <div class="flex flex-col h-screen justify-between py-8 md:py-0">
          <div class="flex h-full items-center justify-center mt-8 md:mt-0">
            <div class="container max-w-xl mx-auto">
              <h1
                class="text-xl md:text-3xl font-bold text-center md:text-left"
              >
                Create your free account
              </h1>
              <div class="text-center md:text-left mt-2 mb-8">
                Already registered?
                <router-link class="text-primary font-bold" to="/login">
                  Sign in
                </router-link>
              </div>
              <validation-observer ref="observer" v-slot="{ passes }" slim>
                <form
                  class="bg-white rounded shadow-xl overflow-hidden px-8 py-6"
                  @submit.prevent="passes(onSubmit)"
                >
                  <div class="flex flex-wrap sm:-mx-2">
                    <validation-provider
                      v-slot="{ errors }"
                      rules="required"
                      tag="div"
                      class="w-full sm:w-1/2 sm:px-2 mb-3"
                      name="firstname"
                    >
                      <label class="label">First Name</label>
                      <div class="relative">
                        <input
                          id="firstname"
                          v-model="firstname"
                          class="input pr-10"
                          :class="{ 'border-red-600': errors[0] }"
                          type="text"
                        />
                        <i
                          style="right: 10px; top: 35%;"
                          class="text-gray-700 absolute far fa-user"
                        />
                      </div>
                      <span v-if="errors[0]" class="error mt-1">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                    <validation-provider
                      v-slot="{ errors }"
                      rules="required"
                      tag="div"
                      class="w-full sm:w-1/2 sm:px-2 mb-3"
                      name="lastname"
                    >
                      <label class="label">Last Name</label>
                      <div class="relative">
                        <input
                          id="lastname"
                          v-model="lastname"
                          class="input pr-10"
                          :class="{ 'border-red-600': errors[0] }"
                          type="text"
                        />
                        <i
                          style="right: 10px; top: 35%;"
                          class="text-gray-700 absolute far fa-user"
                        />
                      </div>
                      <span v-if="errors[0]" class="error mt-1">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                    <validation-provider
                      v-slot="{ errors }"
                      rules="required|email"
                      tag="div"
                      class="w-full sm:px-2 mb-3"
                      name="email"
                    >
                      <label class="label">Email</label>
                      <div class="relative">
                        <input
                          id="email"
                          v-model="email"
                          class="input pr-10"
                          :class="{ 'border-red-600': errors[0] }"
                          type="email"
                        />
                        <i
                          style="right: 10px; top: 35%;"
                          class="text-gray-700 absolute fas fa-at"
                        />
                      </div>
                      <span v-if="errors[0]" class="error mt-1">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                    <validation-provider
                      v-slot="{ errors }"
                      rules="required|min:6"
                      tag="div"
                      class="w-full sm:px-2 mb-3"
                      name="password"
                    >
                      <label class="label">Password</label>
                      <div class="relative">
                        <input
                          id="password"
                          ref="password"
                          v-model="password"
                          class="input"
                          :class="{ 'border-red-600': errors[0] }"
                          type="password"
                        />
                        <i
                          style="right: 10px; top: 35%;"
                          :class="[
                            passwordVisibility
                              ? 'fas fa-eye-slash'
                              : 'far fa-eye'
                          ]"
                          class="text-gray-700 cursor-pointer absolute"
                          @click="togglePasswordVisibility"
                        />
                      </div>
                      <span v-if="errors[0]" class="error mt-1">
                        {{ errors[0] }}
                      </span>
                    </validation-provider>
                  </div>
                  <div class="flex justify-end mt-5">
                    <ui-button
                      class="px-10 w-full md:w-auto"
                      primary
                      rounded
                      small
                      type="submit"
                    >
                      Continue
                    </ui-button>
                  </div>
                </form>
              </validation-observer>
            </div>
          </div>
          <div class="container">
            <div class="block md:flex md:justify-between py-6 mt-10 md:mt-0">
              <p class=" text-sm text-center md:text-left">
                By siging up, you agree to our
                <strong class="text-primary">Terms</strong> and
                <strong class="text-primary">Privacy policy</strong>
              </p>
              <p class=" text-sm text-center md:text-left md:ml-3 mt-2 md:mt-0">
                &copy; {{ getCurrentYear }} Tinylabs. All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
import WelcomeSlide from '@/components/WelcomeSlide'

export default {
  components: {
    Carousel,
    Slide,
    WelcomeSlide
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      loading: false,
      passwordVisibility: false,
      inputType: 'password'
    }
  },
  computed: {
    getCurrentYear() {
      return new Date().getFullYear()
    }
  },
  methods: {
    togglePasswordVisibility() {
      if (this.$refs.password.type === 'password') {
        this.passwordVisibility = true
        this.$refs.password.type = 'text'
        this.inputType = 'text'
      } else {
        this.passwordVisibility = false
        this.$refs.password.type = 'password'
        this.inputType = 'password'
      }
    },
    onSubmit() {
      this.$router.push('/dashboard/contacts')
    }
  }
}
</script>

<style scoped>
.background {
  background-image: linear-gradient(rgba(105, 218, 85, 0.4), rgba(0, 0, 0, 0.9)),
    url('https://images.pexels.com/photos/1543924/pexels-photo-1543924.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
  background-size: cover;
  background-position: center;
}
</style>
