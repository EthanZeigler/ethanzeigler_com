<template>
  <v-footer class="bg-indigo-lighten-1 text-center d-flex flex-column">
    <div>
      <v-btn
        v-for="icon in icons"
        :href="icon.externalLink"
        :icon="icon.icon"
        :key="icon"
        class="mx-4"
        variant="text"
        target="_blank"
      />
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear() }} — <strong>Ethan Zeigler</strong>
      <span class="mx-3">|</span>
      <a style="color: white"
         class="text-decoration-underline"
         href="/public/resume.pdf"
         target="noopener noreferrer"
      >Resume</a>
    </div>
  </v-footer>
</template>

<script setup lang="ts">
const icons = [
  //'mdi-facebook',
  { icon: 'mdi-github', externalLink: "https://github.com/EthanZeigler" },
  { icon: 'mdi-gitlab', externalLink: "https://gitlab.com/ethanzeigler" },
  { icon: 'mdi-linkedin', externalLink: "https://www.linkedin.com/in/ethan-zeigler-307073139/" },
  { icon: 'mdi-email', externalLink: "mailto:ethanzeigler+website@gmail.com" },
  // 'mdi-matrix',
]
</script>
