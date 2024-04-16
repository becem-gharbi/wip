<template>
  <n-page-header title="All Projects">
    <template #avatar>
      <naive-icon name="ph:stack" size="24" />
    </template>
    <template #extra>
      <n-button text>
        <template #icon>
          <naive-icon name="ph:plus" />
        </template>
        Create
      </n-button>
    </template>

    <n-scrollbar x-scrollable>
      <div class="flex gap-4 mb-4">
        <project-card v-for="i in 10" :key="i">
          {{ i }}
        </project-card>
      </div>
    </n-scrollbar>
  </n-page-header>
</template>
