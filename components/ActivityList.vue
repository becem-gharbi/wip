<template>
  <n-page-header title="Recent Activity">
    <template #avatar>
      <naive-icon name="ph:clock-counter-clockwise" size="24" />
    </template>

    <div class="flex flex-col gap-4 mb-4">
      <activity-card v-for="i in 10" :key="i">
        {{ i }}
      </activity-card>
    </div>
  </n-page-header>
</template>
