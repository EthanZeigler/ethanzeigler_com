<script setup>
import { useAuthStore } from '@/store/auth';
import { ref } from 'vue'

const authStore = useAuthStore();
const username = ref('');
const password = ref('');

const handleLogin = async () => {
  try {
    await authStore.login(username.value, password.value);
    console.log("logged in");
  } catch (error) {
    console.error("can't log in", error);
  }
};

const handleLogout = async () => {
  authStore.logout();
  // Redirect or perform any other necessary actions
};

</script>

<template>
  <div class="d-flex align-center justify-center" style="height: 100vh">
    <v-sheet width="400" class="mx-auto">
      <v-form fast-fail @submit.prevent="handleLogin">
        <v-text-field class="rounded-lg" variant="outlined" v-model="username" label="User Name"></v-text-field>

        <v-text-field variant="outlined" v-model="password" label="password"></v-text-field>
        <a href="#" class="text-body-2 font-weight-regular">Forgot Password?</a>

        <v-btn type="submit" color="primary" block class="mt-2">Sign in</v-btn>

      </v-form>
      <div class="mt-2">
        <p class="text-body-2">Don't have an account? <a href="#">Sign Up</a></p>
      </div>
    </v-sheet>
  </div>
</template>


<style></style>