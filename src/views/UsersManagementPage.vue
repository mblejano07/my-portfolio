<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import { useUsersStore } from '@/stores/users.ts'
import UserCard from '@/components/users-management-page/UserCard.vue'

// Initial Users Fetch
const usersStore = useUsersStore()
const usersListIsLoading = ref(false)
onBeforeMount(async () => {
  usersListIsLoading.value = true
  await usersStore.fetchUsers(null, 27)
  usersListIsLoading.value = false
})
</script>

<template>
  <div class="mx-auto flex h-[100%] w-full flex-col">
    <!-- Start Filters & Controls -->
    <div class="my-4 flex h-16 w-full items-center justify-center bg-surface-500 text-surface-0">dummy</div>
    <!-- End Filters & Controls -->
    <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-12 rounded-2xl md:mt-8 md:grid-cols-3 lg:grid-cols-4">
      <UserCard
        v-for="user in usersStore.users"
        :key="user.id"
        :user="user"
        class="transition-all hover:scale-105 hover:cursor-pointer hover:shadow-xl"
      />
    </div>
  </div>
</template>
