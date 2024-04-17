<template>
  <n-card class="cursor-pointer w-64" hoverable size="small" @click="$router.push('/projects/1')">
    <template #header>
      <n-thing title="Project name" description="3 days ago">
        <template #avatar>
          <n-avatar>
            <naive-icon name="ph:stack" />
          </n-avatar>
        </template>
      </n-thing>
    </template>

    <n-progress
      type="line"
      :percentage="60"
      indicator-placement="outside"
    />
  </n-card>
</template>
