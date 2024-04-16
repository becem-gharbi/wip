<template>
  <n-card class="cursor-pointer" hoverable size="small" @click="$router.push('/projects/1')">
    <template #header>
      <n-thing title="Issue title" description="Project name">
        <template #avatar>
          <n-avatar color="green">
            <naive-icon name="ph:target" />
          </n-avatar>
        </template>
      </n-thing>
    </template>
  </n-card>
</template>
