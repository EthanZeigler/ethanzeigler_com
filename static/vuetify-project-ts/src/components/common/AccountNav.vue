<template>
  <v-card
    class="mx-auto"
    width="256"
  >
    <v-layout>
      <v-navigation-drawer
        permanent
        absolute
      >
        <v-list>
          <v-list-item
            v-if="authStore.isAuthenticated"
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            title="John Leider"
            subtitle="john@google.com"
          >
            <template #append>
              <v-btn
                size="small"
                variant="text"
                append-icon="mdi-menu-down"
              />
            </template>
          </v-list-item>
          <v-list-item v-else>
            <router-link to="login">
              <v-btn color="primary">
                Log in
              </v-btn>
            </router-link>
            <v-btn
              color="secondary"
              class="ml-3"
            >
              Sign up
            </v-btn>
          </v-list-item>
        </v-list>

        <v-divider />

        <v-list
          :lines="false"
          density="compact"
          nav
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            color="primary"
            :prepend-icon="item.icon"
            :title="item.icon"
          />
          <router-link to="Login">
            <v-list-item
              v-if="authStore.isAuthenticated"
              prepend-icon="mdi-logout"
              title="logout"
              @click-once="authStore.logout()"
            />
          </router-link>
        </v-list>
      </v-navigation-drawer>

      <v-main style="height: 354px;" />
    </v-layout>
  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/store/auth'

const authStore = useAuthStore()
const loggedIn = ref(authStore.isAuthenticated)

// eslint-disable-next-line @typescript-eslint/no-unused-vars
authStore.$subscribe((_mutation, _state) => {
  loggedIn.value = authStore.isAuthenticated
})

const items = [
  { text: 'My Files', icon: 'mdi-folder' },
  { text: 'Shared with me', icon: 'mdi-account-multiple' },
  // { text: 'Starred', icon: 'mdi-star' },
  // { text: 'Recent', icon: 'mdi-history' },
  // { text: 'Offline', icon: 'mdi-check-circle' },
  // {// text: 'Uploads', icon: 'mdi-upload' },
  // { text: 'Backups', icon: 'mdi-cloud-upload' },
]
</script>
