import { defineStore } from 'pinia';
import { computed } from 'vue';
import axios from 'axios';
import { useStorage, RemovableRef, StorageSerializers } from '@vueuse/core';


export const useAuthStore = defineStore('auth', () => {
    const token: RemovableRef<string | null> = useStorage('token', null, undefined, { serializer: StorageSerializers.string });

    const isAuthenticated = computed(() => !!token.value);

    async function login(username: string, password: string) {
        try {
            const resp = await axios.post('/api/users/login', { username, password });
            token.value = resp.data.token;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    async function logout() {
        token.value = null;
        // Redirect or perform any other necessary actions
    }

    return {
        token, isAuthenticated, login, logout
    }
});
