<template>
  <v-app-bar scroll-behavior="elevate" scroll-threshold="166">
    <v-app-bar-title>
      <v-app-bar-nav-icon variant="text" @click.stop="navOpen = !navOpen" />
      <router-link id="home-icon-link" to="/">
        Ethan Zeigler<sub class="font-weight-thin">(dot com)</sub>
      </router-link>
    </v-app-bar-title>
    <v-spacer />

    <v-btn v-if="enableAccounts" color="primary">
      Account
      <v-menu activator="parent">
        <AccountNav />
      </v-menu>
    </v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="navOpen" temporary>
    <v-list nav :items="navItems" density="compact"/>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import AccountNav from '@/components/common/AccountNav.vue'
import { useRouter } from 'vue-router'
import { NavbarMeta } from '@/router'

const router = useRouter()
const enableAccounts = true
//const enableAccounts = import.meta.env
const navOpen = ref(false)
const group = ref(null)

const registeredRoutes = router.getRoutes().map(r => {
  if (!r.meta?.navProps) {
    return null
  }
  return {
    title: (r.meta as NavbarMeta).navProps.title,
    value: r.name,
    props: r.meta.navProps,
  }
}).filter(route => route)

const navLinks = [
  {
    title: "Resume",
    value: "resume",
    props: {
      prependIcon: 'mdi-open-in-new',
      href: "https://ethanzeigler.com/public/resume.pdf",
      target: "blank",
      rel: "noopener noreferrer"
    },
  }
]

const navItems = computed(() => {
  const items = []
  for (const route of registeredRoutes) {
    items.push(route)
  }
  for (const route of navLinks) {
    items.push(route)
  }
  return items
})

watch(group, async () => navOpen.value = false)
</script>

<style scoped lang="scss">
#home-icon-link {
  text-decoration: none;
}
</style>
