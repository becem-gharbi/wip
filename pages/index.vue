<template>
  <section class="py-12 bg-white sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">
          Work in progress
        </h2>
        <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">
          Minimal project management platform
        </p>

        <nuxt-link to="/auth/login" class="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400">
          Get started
          <svg class="w-6 h-6 ml-8 -mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </nuxt-link>
      </div>

      <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
        <div class="md:p-8 lg:p-14">
          <img src="/images/kanban-icon.svg" alt="kanban" width="64" class="mx-auto">
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">
            Kanban
          </h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Create and organize tasks by status
          </p>
        </div>

        <div class="md:p-8 lg:p-14">
          <img src="/images/team-icon.svg" alt="team" width="64" class="mx-auto">
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">
            Team
          </h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Add team members and share work progress
          </p>
        </div>

        <div class="md:p-8 lg:p-14">
          <img src="/images/chat-icon.svg" alt="chat" width="64" class="mx-auto">
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">
            Realtime chat
          </h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Text and media messaging with team members
          </p>
        </div>

        <div class="md:p-8 lg:p-14">
          <img src="/images/open-source-icon.svg" alt="open-source" width="64" class="mx-auto">
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">
            Open source
          </h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Find it on <a target="_blank" href="https://github.com/becem-gharbi/wip" class="underline">GitHub</a>
          </p>
        </div>

        <div class="md:p-8 lg:p-14">
          <img src="/images/serverless-icon.svg" alt="serverless" width="64" class="mx-auto">
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">
            Serverless
          </h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Deploy on Cloudflare
          </p>
        </div>

        <div class="md:p-8 lg:p-14">
          <img src="/images/extendable-icon.svg" alt="serverless" width="64" class="mx-auto">
          <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">
            Modular
          </h3>
          <p class="mt-5 text-base text-gray-600 font-pj">
            Easily extendable
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'guest',
  colorMode: 'light',
  auth: false,
  layout: false
})
</script>
