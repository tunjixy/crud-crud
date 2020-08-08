<template>
  <validation-observer ref="form" v-slot="{ passes }" slim>
    <h4 class="text-lg font-bold mb-4">
      Add New contact
    </h4>
    <form @submit.prevent="passes(onSubmit)">
      <div class="flex flex-wrap sm:-mx-2">
        <ui-text-input
          v-model="firstname"
          class="w-full sm:w-1/2 px-2 mt-3"
          rules="required"
          label="First Name"
          name="firstname"
          type="text"
        />
        <ui-text-input
          v-model="lastname"
          class="w-full sm:w-1/2 px-2 mt-3"
          rules="required"
          label="Last Name"
          name="lastname"
          type="text"
        />
        <ui-text-input
          v-model="email"
          class="w-full sm:w-1/2 px-2 mt-3"
          rules="required|email"
          label="Email"
          name="email"
          type="email"
        />
        <ui-text-input
          v-model="phone"
          class="w-full sm:w-1/2 px-2 mt-3"
          rules="required"
          label="Phone No"
          name="phone"
          type="text"
        />
        <div class="w-full sm:w-1/2 px-2 mt-3">
          <label class="label">Select Role</label>
          <div class="relative w-full">
            <select v-model="selectedRole" class="select">
              <option v-for="(role, index) in roles" :key="index" :value="role">
                {{ role }}
              </option>
            </select>
            <div
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
            >
              <svg
                class="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <ui-button
        primary
        :loading="loading"
        :disabled="loading"
        class="mt-5"
        type="submit"
        rounded
        raised
      >
        Add Employee
      </ui-button>
    </form>
  </validation-observer>
</template>

<script>
import UiTextInput from '@/components/ui/UiTextInput'

export default {
  name: 'EmployeeAdd',
  components: {
    UiTextInput
  },
  data() {
    return {
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      selectedRole: 'Staff',
      roles: ['Admin', 'Staff'],
      loading: false
    }
  },
  methods: {
    async onSubmit() {
      try {
        this.loading = true
        const data = await this.$http.post('/employees', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          role: this.selectedRole
        })

        this.loading = false
        if (data.status === 201) {
          this.$emit('employeeAdded')
        }
      } catch (e) {
        this.loading = false
        // console.log(e)
      }
    }
  }
}
</script>
