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

    <div class="flex gap-4 overflow-auto">
      <project-card v-for="i in 10" :key="i" />
    </div>
  </n-page-header>
</template>
