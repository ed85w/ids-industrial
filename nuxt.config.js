export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: ''
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ids-industrial',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Audiowide&family=Lato:wght@400;700&display=swap'},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css', defer: true},
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.css', defer:true},
    ],
    script:[
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js'},
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.0/ScrollTrigger.min.js'},
      { src: '//cdnjs.cloudflare.com/ajax/libs/cookieconsent2/3.1.0/cookieconsent.min.js', defer: true },
      { src: './js/cookie-consent.js' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/global-vars.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-191711331-1'
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    scss: ['./assets/scss/*.scss']
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
