import messages from './locale'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Oasis - community powered crypto-currency',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We are a small community of crypto-enthusiasts, programming artisans, and digital design experts. This token represents the community\'s value within itself.' },
      { name: 'telegram:channel', content: '@CryptOasisChat' },
      { property: 'og:site_name', content: 'CryptOasis' },
      { property: 'og:title', content: 'Oasis - community powered crypto-currency' },
      { property: 'og:description', content: 'We are a small community of crypto-enthusiasts, programming artisans, and digital design experts. This token represents the community\'s value within itself.' },
      { property: 'twitter:title', content: 'Oasis - community powered crypto-currency' },
      { property: 'twitter:description', content: 'We are a small community of crypto-enthusiasts, programming artisans, and digital design experts. This token represents the community\'s value within itself.' },
      { property: 'og:image', content: 'https://wonderwall.finance/share.png?v=1' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'twitter:site', content: '@CryptOasisDS' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:image', content: 'https://wonderwall.finance/share.png?v=1' },
      { property: 'og:url', content: 'https://wonderwall.finance' },
      { property: 'og:locale', content: 'en_US' }
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico?v=1' },
      { rel: 'shortcut icon', sizes: '16x16', href: '/16x16.png?v=1' },
      { rel: 'shortcut icon', sizes: '32x32', href: '/32x32.png?v=1' },
      { rel: 'shortcut icon', sizes: '150x150', href: '/150x150.png?v=1' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/180x180.png?v=1' },
      { rel: 'shortcut icon', sizes: '192x192', href: '/192x192.png?v=1' },
      { rel: 'shortcut icon', sizes: '512x512', href: '/512x512.png?v=1' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-fullpage.js',
    '~/modules/svgLoader.ts',
    'nuxt-i18n'
  ],
  i18n: {
    locales: Object.keys(messages),
    vueI18n: {
      fallbackLocale: 'en',
      messages
    },
    defaultLocale: 'en'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: [
      'lodash-es',
      /^element-ui/
    ]
  },
  env: {
    FULLPAGE_LICENSE_KEY: process.env.FULLPAGE_LICENSE_KEY,
    TIPPING_URL: process.env.TIPPING_URL
  },
  generate: {
    exclude: [
      '/index1',
      /^\/src/
    ]
  }
}
