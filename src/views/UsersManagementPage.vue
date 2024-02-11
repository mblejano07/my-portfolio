<script setup lang="ts">
import Paginator, { PageState } from 'primevue/paginator'
import { onBeforeMount, ref } from 'vue'
import { useUsersStore } from '@/stores/users.ts'
import { ApiResponsePagination } from '@/typings/http-resources.ts'
import UserCard from '@/components/users-management-page/UserCard.vue'

// Initial Users Fetch
const usersStore = useUsersStore()
const usersListIsLoading = ref(true)
onBeforeMount(async () => {
  usersListIsLoading.value = true
  const response = await usersStore.fetchUsers(null, 12)

  if (response.success && response.pagination) {
    pagination.value = response.pagination
  }

  usersListIsLoading.value = false
})

// Pagination
const pagination = ref<ApiResponsePagination | null>(null)
const handlePaginationPageChange = async (event: PageState) => {
  const pageSelected = event.page + 1 // The page state object starts at 0

  usersListIsLoading.value = true
  const response = await usersStore.fetchUsers(null, 12, pageSelected)

  if (response.success && response.pagination) {
    pagination.value = response.pagination
  }

  usersListIsLoading.value = false
}
</script>

<template>
  <div class="mx-auto flex h-[100%] w-full flex-col">
    <!-- Start Filters & Controls -->
    <div class="my-4 flex h-16 w-full items-center justify-center bg-surface-500 text-surface-0">Controls Placeholder</div>
    <!-- End Filters & Controls -->
    <!-- Start User Cards -->
    <div
      v-if="!usersListIsLoading"
      class="mt-6 grid grid-cols-1 gap-x-4 gap-y-12 rounded-2xl md:mt-8 md:grid-cols-3 lg:grid-cols-4"
    >
      <UserCard
        v-for="user in usersStore.users"
        :key="user.id"
        :user="user"
        class="transition-all hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      />
    </div>
    <div
      v-if="usersListIsLoading"
      class="mt-6 grid grid-cols-1 gap-x-4 gap-y-12 rounded-2xl md:mt-8 md:grid-cols-3 lg:grid-cols-4"
    >
      <div
        v-for="i in 4"
        :key="i"
        class="flex min-h-56 animate-pulse flex-col items-center justify-center rounded-lg bg-surface-100 p-1 shadow-md"
      >
        <i class="pi pi-spinner animate-spin text-lg text-surface-400" />
      </div>
    </div>
    <!-- End User Cards -->
    <!-- Start Pagination -->
    <div class="mt-6 flex w-full justify-center md:mt-10">
      <Paginator
        v-if="pagination"
        :rows="pagination.per_page"
        :total-records="pagination.total"
        template="FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        @page="(event: PageState) => handlePaginationPageChange(event)"
        class="text-xs md:text-sm"
      />
    </div>
    <!-- End Pagination -->
  </div>
</template>
