import { defineStore } from 'pinia'
import { computed } from 'vue'
import axios, { isAxiosError } from 'axios'
import { useStorage, RemovableRef, StorageSerializers } from '@vueuse/core'

interface AuthResponse {
  access: string,
  refresh: string,
}

export enum LoginResponse {
  Success,
  AlreadyLoggedIn,
  BadCredentials,
  NetworkError,
  UnknownError,
}

export const useAuthStore = defineStore('auth', () => {
  const token: RemovableRef<string | null> = useStorage('token', null, undefined, { serializer: StorageSerializers.string })

  const isAuthenticated = computed(() => !!token.value)

  async function login(username: string, password: string): Promise<LoginResponse> {
    try {
      const resp = await axios.post<AuthResponse>('/api/users/login', {
        username,
        password,
        validateStatus(status: number) {
          return status < 500 // 400s are expected here
        },
      })

      if (resp.status === 401) {
        return LoginResponse.BadCredentials
      }

      token.value = resp.data.access
      return LoginResponse.Success
    } catch (error) {
      if (isAxiosError(error)) {
        return LoginResponse.NetworkError
      }
      return LoginResponse.UnknownError
    }
  }

  async function logout(): Promise<LoginResponse> {
    token.value = null
    return LoginResponse.Success
    // Redirect or perform any other necessary actions
  }

  return {
    token, isAuthenticated, login, logout,
  }
})
