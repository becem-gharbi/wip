import type { ModuleOptions } from '@vite-pwa/nuxt'

export const pwa: ModuleOptions = {
  registerType: 'autoUpdate',
  manifest: {
    name: 'Work in progress',
    short_name: 'WIP',
    description: 'A platform to share work progress',
    theme_color: '#ffffff',
    background_color: '#FFFFFF',
    icons: [
      {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: 'maskable-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable',
      },
    ],
  },
  workbox: {
    navigateFallback: null,
    globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
  },
  client: {
    installPrompt: true,
  },
  registerWebManifestInRouteRules: true,
  devOptions: {
    enabled: process.env.VITE_PLUGIN_PWA === 'true',
    suppressWarnings: true,
    navigateFallbackAllowlist: [/^\/$/],
    type: 'module',
  },
}
