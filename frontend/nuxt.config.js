import i18n from './config/i18n'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page metadata (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Výroba armatur z nerezové oceli | NiobFluid',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'description'
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@assets/scss/style.scss'
  ],
  styleResources: {
    scss: [
      '@/assets/scss/_vars.scss'
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~plugins/GlobalComponents',
    '~plugins/bootstrap-vue',
    '~plugins/VScrollLock',
    '~plugins/mobile-detection'
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    '@nuxtjs/device'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources',
    'nuxt-i18n',
    [
      'nuxt-gmaps',
      {
        key: 'AIzaSyCXiLPCUvel1ctT6kV7uDqiV5peKf10yYQ'
      }
    ]
  ],

  i18n: {
    strategy: 'prefix',
    seo: true,
    defaultLocale: 'cs',
    fallbackLocale: ['cs', 'en'],
    // vueI18nLoader: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      onlyOnRoot: true
    },
    locales: [
      {
        code: 'cs',
        iso: 'cs-CZ',
        name: 'Česky',
        file: 'cs.json'
      },
      {
        code: 'en',
        iso: 'en-UK',
        name: 'English',
        file: 'en.json'
      }
    ],
    lazy: true,
    langDir: 'locales/',
    vueI18n: i18n
  },

  bootstrapVue: {
    icons: true
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  serverMiddleware: [
    '~/middleware/redirect.js'
  ]
}
