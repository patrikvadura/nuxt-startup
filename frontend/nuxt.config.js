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
        content: 'Společnost NIOB FLUID s.r.o. je českým výrobcem armatur z nerezových ocelí pro potravinářský, chemický a farmaceutický průmysl. Výroba potravinářských ...'
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
      'nuxt-cookie-control',
      {
        barPosition: 'bottom-right',
        blockIframe: true,
        locales: ['cs', 'en'],
        colors: {
          barTextColor: '#0a6ace',
          barBackground: 'rgba(10, 106, 206, .05)',
          barButtonColor: '#fff',
          barButtonBackground: '#0a6ace',
          barButtonHoverColor: '#fff',
          barButtonHoverBackground: '#6ec1e4',
          modalButtonBackground: '#0a6ace',
          modalButtonColor: '#fff',
          modalButtonHoverColor: '#fff',
          modalButtonHoverBackground: '#6ec1e4',
          controlButtonBackground: '#0a6ace',
          controlButtonHoverBackground: '#6ec1e4',
          controlButtonIconHoverColor: '#fff',
          controlButtonIconColor: '#fff',
          checkboxActiveBackground: '#6ec1e4',
          checkboxInactiveBackground: '#ddd',
          checkboxActiveCircleBackground: '#0a6ace',
          checkboxInactiveCircleBackground: '#6ec1e4',
          checkboxDisabledBackground: '#ddd',
          checkboxDisabledCircleBackground: '#fff'
        },
        text: {
          locale: {
            cs: {
              barTitle: 'Cookies',
              barDescription: 'Využíváme vlastní a third-party cookies tudíž jsme schoůni vám nabídnout lepší obsah přizpůsobený tomu, co právě hledáte. Pokud hodláte pokračovat v prohlížení obsahu webu, prosíme o potvrzení nezbytných cookies.',
              acceptAll: 'Přijmout vše',
              declineAll: 'Smazat vše',
              manageCookies: 'Nastavení',
              unsaved: 'Máte neuložené změny',
              close: 'Hotovo',
              save: 'Uložit',
              necessary: 'Nezbytné cookies',
              optional: 'Volitelné cookies',
              functional: 'Funkční cookies',
              blockedIframe: 'Pro tuhle volbu potvrďte "funkční cookies"',
              here: 'zde'
            },

            en: {
              barTitle: 'Cookies',
              barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
              acceptAll: 'Accept all',
              declineAll: 'Delete all',
              manageCookies: 'Manage cookies',
              unsaved: 'You have unsaved settings',
              close: 'Close',
              save: 'Save',
              necessary: 'Necessary cookies',
              optional: 'Optional cookies',
              functional: 'Functional cookies',
              blockedIframe: 'To see this, please enable functional cookies',
              here: 'here'
            }
          }
        }
      }
    ]
      'nuxt-gmaps',
      {
        key: 'AIzaSyCXiLPCUvel1ctT6kV7uDqiV5peKf10yYQ'
      }
    ]
    ['nuxt-lazy-load', {
      images: true,
      videos: true,
      audios: true,
      iframes: true,
      native: false,
      polyfill: true,
      directiveOnly: false,

      // Default image must be in the static folder
      defaultImage: '/images/default-image.jpg',

      // To remove class set value to false
      loadingClass: 'isLoading',
      loadedClass: 'isLoaded',
      appendClass: 'lazyLoad'
    }]
  ],

  cookies: {
    necessary: [
      {
        name: {
          cs: 'Základní cookies',
          en: 'Default cookie'
        },
        description: {
          cs: 'Základní zlepšení obahu',
          en: 'Improve quality of content'
        }
      }
    ],
    optional: [
      {
        name: {
          cs: 'Google Analitycs',
          en: 'Google Analitycs'
        },
        identifier: 'ga',
        description: {
          cs: 'Sledování a analýza návštěvnosti',
          en: 'Tracking and analytics'
        },

        initialState: true,
        src: 'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async: true,
        accepted: () => {
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          })
        },
        declined: () => {
        }
      }
    ]
  },

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
