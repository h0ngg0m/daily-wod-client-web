<template>
  <div class="d-flex justify-center align-center h-100">
    <v-progress-circular indeterminate :size="50"></v-progress-circular>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import { postApi } from '@/utils/api'
import { useUserStore } from '@/stores/user'
import router from '@/router'
import type { JwtResponseDto } from '@/definitions/type'

const route = useRoute()
const { saveAccessToken } = useUserStore()

onBeforeMount(async () => {
  const response = await postApi<{ code: string }, JwtResponseDto>('/api/v1/auth/login/google', {
    code: route.query.code?.toString() ?? ''
  })
  if (response.status === 200 && response.data.code === 'S000') {
    saveAccessToken(response.data?.data?.accessToken ?? '')
    await router.push('/')
  } else {
    await router.push('/auth/login')
  }
})
</script>
