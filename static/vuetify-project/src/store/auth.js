import { defineStore } from 'pinia';
import axios from 'axios';
import { useStorage } from '@vueuse/core';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: useStorage('token', null),
    loading: false,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
    isAuthenticating
  },
  actions: {
    async login(username, password) {
      try {
        const resp = axios.post('/api/users/login', { username, password });
        this.token.value = resp.data.token;
      } catch (err) {
        console.error(err);
        throw err;
      }
    },
    logout() {
      this.token = null;
      // Redirect or perform any other necessary actions
    },
  },
});
