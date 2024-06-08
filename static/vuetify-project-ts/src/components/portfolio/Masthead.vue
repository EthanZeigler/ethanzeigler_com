<template>
  <v-container
    fluid
    class="fill-height flex-column justify-space-around"
  >
    <v-img
      src="@/assets/EZLogo.svg"
      class="logo flex-grow-0"
    />
    <v-container class="text-center">
      <div class="text-h2 font-weight-bold mb-2">
        Ethan Zeigler
      </div>
      <div class="text-h4">
        Software Engineer
      </div>
    </v-container>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="scss">
  .logo {
    aspect-ratio: 1 / 1;
    height: 40vh;
  }
</style>
