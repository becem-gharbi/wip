<template>
  <div class="page justify-center items-center p-7">
    <nuxt-link
      to="/home"
      class="mr-auto sm:mr-0"
    >
      <basic-logo class="text-lg" />
    </nuxt-link>

    <n-text
      class="text-lg font-medium mt-1 mr-auto sm:mr-0"
      depth="3"
    >
      {{ title }}
    </n-text>

    <div class="w-full my-auto sm:max-w-sm sm:p-6 sm:shadow-md">
      <slot />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

const title = computed(() => {
  let title = ''

  switch (route.name) {
    case 'auth-login':
      title = 'Login to your account'
      break

    case 'auth-register':
      title = 'Create your account'
      break

    case 'auth-request-password-reset':
      title = 'Request password reset'
      break

    case 'auth-reset-password':
      title = 'Reset your password'
      break

    case 'auth-verify-email':
      title = 'Email verification'
      break

    case 'auth-callback':
      title = 'Social login'
      break
  }

  return title
})
</script>
