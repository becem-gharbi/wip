<template>
  <n-card class="cursor-pointer" hoverable size="small" @click="$router.push('/issues/1')">
    <template #header>
      <n-thing title="Issue title" description="3 days ago">
        <template #avatar>
          <n-avatar color="green">
            <naive-icon name="ph:target" />
          </n-avatar>
        </template>
      </n-thing>
    </template>
  </n-card>
</template>
