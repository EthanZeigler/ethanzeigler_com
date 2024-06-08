<script lang="ts" setup>
import { ref } from 'vue'
import { LoginResponse, useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
const username = ref('')
const password = ref('')
const loading = ref(false)

const emit = defineEmits(['complete'])

const handleLogin = async (): Promise<void> => {
  try {
    loading.value = true
    const result = await authStore.login(username.value, password.value)
    if (result === LoginResponse.Success || result === LoginResponse.AlreadyLoggedIn) {
      console.log('logged in')
      emit('complete')
    }
  } catch (error) {
    console.error("can't log in", error)
  } finally {
    loading.value = false
  }
}

const handleLogout = async (): Promise<void> => {
  await authStore.logout()
  // Redirect or perform any other necessary actions
}

</script>

<template>
  <v-sheet
    width="400"
    class="mx-auto"
  >
    <template v-if="!authStore.isAuthenticated">
      <v-form
        fast-fail
        @submit.prevent="handleLogin"
      >
        <v-text-field
          v-model="username"
          class="rounded-lg"
          variant="outlined"
          label="User Name"
        />
        <v-text-field
          v-model="password"
          variant="outlined"
          label="password"
        />
        <a
          href="#"
          class="text-body-2 font-weight-regular"
        >Forgot Password?</a>

        <v-btn
          type="submit"
          color="primary"
          :loading="loading"
          block
          class="mt-2"
        >
          Sign in
        </v-btn>
      </v-form>
      <div class="mt-2">
        <p class="text-body-2">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </div>
    </template>
    <v-btn
      v-else
      color="primary"
      block
      class="mt-2"
      @click="handleLogout"
    >
      Log out
    </v-btn>
  </v-sheet>
</template>

<style></style>
