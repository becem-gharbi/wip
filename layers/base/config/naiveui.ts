import type { ModuleOptions } from '@bg-dev/nuxt-naiveui'

export const naiveui: Partial<ModuleOptions> = {
  colorModePreference: 'system',
  iconDownload: false,
  spaLoadingTemplate: {
    name: 'dot-chase',
  },
}
