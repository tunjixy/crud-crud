<template>
  <div>
    <dashboard-header />
    <div class="flex h-screen w-full">
      <!-- Side menu -->
      <dashboard-side-menu class="mt-16" />

      <!-- Main content -->
      <div class="w-full overflow-y-auto mt-16">
        <div class="py-8">
          <div class="container">
            <div class="flex justify-between mt-6">
              <h1 class="text-lg font-bold">Employees</h1>
              <ui-button @click="openModal" primary rounded small>
                Add New
              </ui-button>
            </div>
            <div
              class="bg-white rounded-lg py-6 px-6 flex flex-wrap items-center justify-between mt-5"
            >
              <h2 class="text-2xl font-bold">Josh Bakery Ventures</h2>
              <p>62,Bode Thomas, Surulere, Lagos</p>
            </div>
            <div class="flex items-baseline flex-wrap mt-8">
              <employee-role-change class="mx-2 mb-3" />
              <ui-button primary rounded small class="mx-2 mb-3">
                Change
              </ui-button>
              <employee-search
                @search="search"
                class="mx-2 mb-3 w-full md:w-custom"
              />
              <div class="ml-auto mx-2">
                <ui-pagination class="" />
              </div>
            </div>

            <error-block class="mt-16" v-if="error" @tryAgain="tryAgain" />
            <template v-else>
              <ui-loading class="mt-10" v-if="loading" />
              <template v-else>
                <app-empty class="mt-10" v-if="filteredEmployess.length < 1">
                  No employees available
                </app-empty>
                <!-- Employee table -->
                <div v-else class="w-full mt-4">
                  <div class="block w-full overflow-x-auto">
                    <table
                      class="items-center w-full bg-transparent border-collapse tspacing overflow"
                    >
                      <thead>
                        <tr>
                          <th
                            class="px-6 text-gray-600 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                          >
                            <label class="wrapper">
                              <input type="checkbox" />
                              <span class="checkmark" />
                            </label>
                          </th>
                          <th
                            class="px-6 text-gray-600 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                          >
                            First Name
                          </th>
                          <th
                            class="px-6 text-gray-600 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                          >
                            Last Name
                          </th>
                          <th
                            class="px-6 text-gray-600 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                          >
                            Email
                          </th>
                          <th
                            class="px-6 text-gray-600 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                          >
                            Phone
                          </th>
                          <th
                            class="px-6 text-gray-600 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                          >
                            Role
                          </th>
                          <th
                            class="px-6 text-gray-600 align-middle py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left"
                          ></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="employee in filteredEmployess"
                          :key="employee._id"
                          class="bg-white rounded"
                        >
                          <td
                            class="px-6 align-middle text-sm whitespace-no-wrap p-4 text-left"
                          >
                            <label class="wrapper">
                              <input type="checkbox" />
                              <span class="checkmark" />
                            </label>
                          </td>
                          <td
                            class="px-6 align-middle text-sm whitespace-no-wrap p-4"
                          >
                            {{ employee.firstname }}
                          </td>
                          <td
                            class="px-6 align-middle text-sm whitespace-no-wrap p-4"
                          >
                            {{ employee.lastname }}
                          </td>
                          <td
                            class="px-6 align-middle text-sm whitespace-no-wrap p-4"
                          >
                            {{ employee.email }}
                          </td>
                          <td
                            class="px-6 align-middle text-sm whitespace-no-wrap p-4"
                          >
                            {{ employee.phone }}
                          </td>
                          <td
                            class="px-6 align-middle text-sm whitespace-no-wrap p-4"
                          >
                            {{ employee.role }}
                          </td>
                          <td
                            class="px-6 align-middle text-sm whitespace-no-wrap p-4"
                          >
                            <div class="flex items-center">
                              <i
                                @click="editContact(employee)"
                                class="fas fa-pen cursor-pointer"
                              />
                              <i
                                @click="deleteEmploye(employee)"
                                class="far fa-trash-alt cursor-pointer ml-5"
                              />
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
    <ui-modal :show="showModal" @close="hide">
      <template #body>
        <employee-add @employeeAdded="employeeAdded" />
      </template>
    </ui-modal>
    <ui-modal :show="edit" @close="hide">
      <template #body>
        <employee-edit
          :employee="employee"
          @employeeUpdated="employeeUpdated"
        />
      </template>
    </ui-modal>
  </div>
</template>

<script>
import DashboardHeader from '@/components/DashboardHeader'
import DashboardSideMenu from '@/components/DashboardSideMenu'
import EmployeeSearch from '@/components/EmployeeSearch'
import EmployeeRoleChange from '@/components/EmployeeRoleChange'
import UiPagination from '@/components/ui/UiPagination'
import UiLoading from '@/components/ui/UiLoading'
import UiModal from '@/components/ui/UiModal'
import ErrorBlock from '@/components/ErrorBlock'
import AppEmpty from '@/components/AppEmpty'
import EmployeeAdd from '@/components/EmployeeAdd'
import EmployeeEdit from '@/components/EmployeeEdit'

export default {
  name: 'Dashboard',
  components: {
    DashboardHeader,
    DashboardSideMenu,
    EmployeeSearch,
    EmployeeRoleChange,
    UiPagination,
    UiLoading,
    ErrorBlock,
    AppEmpty,
    UiModal,
    EmployeeAdd,
    EmployeeEdit
  },
  created() {
    this.fetchEmployees()
  },
  data() {
    return {
      error: '',
      roles: ['Admin', 'Staff'],
      employees: [],
      employee: {},
      loading: false,
      showModal: false,
      searchTerm: '',
      edit: false
    }
  },
  computed: {
    filteredEmployess() {
      return this.employees.filter((employee) =>
        employee.firstname
          .toLowerCase()
          .startsWith(this.searchTerm.toLowerCase())
      )
    }
  },
  methods: {
    show() {
      this.showModal = true
    },
    hide() {
      this.showModal = false
      this.edit = false
    },
    openModal() {
      this.showModal = true
    },
    tryAgain() {
      this.error = false
      this.fetchEmployees()
    },
    search(value) {
      this.searchTerm = value
    },
    async fetchEmployees() {
      try {
        this.loading = true
        const data = await this.$http.get('/employees')
        this.employees = data.data
        this.loading = false
      } catch (err) {
        this.loading = false
        this.error = true
        // console.log(err)
      }
    },
    employeeAdded() {
      this.hide()
      this.fetchEmployees()
    },
    employeeUpdated() {
      this.hide()
      this.fetchEmployees()
    },
    editContact(employee) {
      this.edit = true
      this.employee = employee
    },
    async deleteEmploye(employee) {
      try {
        this.loading = true
        const data = await this.$http.delete(`/employees/${employee._id}`)
        if (data.status === 200) {
          this.fetchEmployees()
        }
        this.loading = false
      } catch (e) {
        this.loading = false
        // console.log(e)
      }
    }
  }
}
</script>
