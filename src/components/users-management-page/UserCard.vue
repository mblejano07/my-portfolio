<script setup lang="ts">
import Tag from 'primevue/tag'
import { UserResponse } from '@/typings/models.ts'
import { getAvatarDisplayNamePlaceholder, snakeCaseToTitleCase } from '@/utils/helpers.ts'

const props = defineProps<{ user: UserResponse }>()
</script>

<template>
  <div class="relative flex min-h-56 flex-col items-center rounded-lg bg-surface-0 px-4 py-6 shadow-md">
    <!-- Start Avatar -->
    <div class="absolute -top-6 left-1/2 h-24 w-24 -translate-x-1/2">
      <img
        v-if="props.user.user_profile?.profile_picture_url"
        :src="props.user.user_profile?.profile_picture_url"
        alt="Profile Picture"
        class="h-full w-full rounded-lg bg-primary-700 object-cover shadow-md"
      />
      <div
        v-if="!props.user.user_profile?.profile_picture_url"
        class="flex h-full w-full items-center justify-center rounded-lg bg-primary-700 text-xl text-surface-0"
      >
        {{ getAvatarDisplayNamePlaceholder(props.user.user_profile?.full_name || 'User') }}
      </div>
    </div>
    <!-- End Avatar -->
    <!-- Start Name -->
    <p class="mt-16 text-center font-menu font-bold text-primary-600">{{ props.user.user_profile?.full_name }}</p>
    <!-- End Name -->
    <!-- Start Email -->
    <p class="text-center text-sm text-surface-700">{{ props.user.email }}</p>
    <!-- End Email -->
    <!-- Start Role Tags -->
    <div class="mt-2.5 flex w-full flex-wrap justify-center gap-2">
      <Tag class="bg-surface-500" v-for="role in user.roles" :key="role.id">{{ snakeCaseToTitleCase(role.name) }}</Tag>
    </div>
    <!-- End Role Tags -->
  </div>
</template>
