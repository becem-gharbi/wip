<template>
  <naive-config>
    <vite-pwa-manifest />
    <nuxt-loading-indicator
      color="#2563eb"
      :height="3"
    />
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </naive-config>
</template>

<style>
.page {
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: input(1rem);
}
</style>
