const author = 'jalofernandez'
const description = '@'+author+', designer + coder, personal portfolio and professional resume'

export default {
  mode: 'universal',
  head: {
    htmlAttrs: {
      lang: 'es',
    },
    bodyAttrs: {
      class: [author],
    },
    title: process.env.npm_package_name || '',
    titleTemplate: "%s | @"+author+": designer + coder",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'author', name: 'author', content: author },
      { hid: 'copyright', name: 'copyright', content: author },
      { hid: 'robots', name: 'robots', content: 'index, follow, archive' },
      { hid: 'generator', name: 'generator', content: 'HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO' },
      { hid: 'google', name: 'google', content: 'nositelinkssearchbox' },
      { hid: 'lang', name: 'lang', content: 'es-ES' },
      { hid: 'rating', name: 'rating', content: 'General' },
      { hid: 'coverage', name: 'coverage', content: 'Worldwide' },
      //- (metas) to customize (all browsers) top navbar
      { hid: 'theme-color', name: 'theme-color', content: '#f4692a' },
      //- (metas) to Webkit (iOS Safari) browsers
      { hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' },
      { hid: 'apple-mobile-web-app-status-bar-style', name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: author },
      //- (metas) IE (windows phone) browsers
      // { hid: 'msapplication-TileImage', name: 'msapplication-TileImage', content: '/src/images/icons/app-icon-144x144.png' },
      { hid: 'msapplication-TileColor', name: 'msapplication-TileColor', content: '#232323' },
      //- (microdata) TWITTER
      // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
      // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: author },
      { hid: 'twitter:creator', name: 'twitter:creator', content: author },
      //- (open-graph) FACEBOOK
      { name: 'og:type', content: 'website' },
      { name: 'og:locale', content: 'es_ES' },
      { name: 'og:site_name', content: description },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      { rel: 'dns-prefetch', href: '//twitter.com/jalofernandez' },
      { rel: 'dns-prefetch', href: '//www.instagram.com/jalofernandez/?ref=badge' },
      { rel: 'dns-prefetch', href: '//www.linkedin.com/in/javierlorenzofernandez/' },
      { rel: 'dns-prefetch', href: '//www.youtube.com/channel/UCtwY5GMTiS7VQ7kYzGomUsw' },
      { rel: 'dns-prefetch', href: '//www.facebook.com/jalofernandez?ref=tn_tnmn' },
      { rel: 'dns-prefetch', href: '//github.com/jalofernandez' },
    ]
  },
  loading: { color: '#ccc' },
  css: ['@/assets/styles.sass'],
  plugins: [],
  buildModules: [
    '@nuxtjs/pwa',
    '@aceforth/nuxt-optimized-images',
  ],
  modules: [
    'vue-scrollto/nuxt',
    'nuxt-webfontloader',
    "nuxt-purgecss",
    [
      "nuxt-social-meta",
      {
        title: "@jalofernandez: designer + coder",
        description:
          "Javier Lorenzo Fdez personal resume and professional portfolio as a graphic designer and front-end + UX developer",
        url: "https://www.jalofernandez.com",
        // img: "/link_to_image_in_static_folder.jpg",
        locale: "es-ES",
        twitter: "@jalofernandez",
        themeColor: "#232323"
      }
    ],
    ['nuxt-mq'],
    '@nuxtjs/robots',
    '@nuxtjs/gtm',
    '@nuxtjs/sitemap', // always declare the sitemap module at end of array
  ],
  webfontloader: {
    google: {
      families: ['Roboto+Mono:wght@300;400;600', 'Roboto:ital,wght@0,300;0,400;0,700;1,400&display=swap'],
    },
  },
  purgeCSS: {
    // Overrides the default settings here
  },
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: `https://jalofernandez/sitemap.xml`,
  },
  optimizedImages: {
    optimizeImages: true
  },
  mq: {
    defaultBreakpoint: "desktop",
    breakpoints: {
      mobile: 600,
      smartphone: 768,
      tablet: 1024,
      desktop: 1400,
      desktopWide: 2000,
      desktopUltraWide: Infinity
    }
  },
  pwa: {
    manifest: {
      name: 'jalofernandez: designer + coder',
      short_name: 'jalofernandez',
      description: description,
      // start_url: 'index.html?launcher=true', // value by default ("/?standalone=true")
      lang: 'es',
      // display: 'standalone', // value by default
      background_color: '#fbf8ff',
      theme_color: '#363636',
      lang: 'es-ES',
      // dir: 'ltr', // value by default
      useWebmanifestExtension: false,
    },
    workbox: {
      // enabled: true, // check it asap!
    },
  },
  gtm: {
    id: '',
    enabled: true,
    scriptDefer: true,
    pageTracking: true,
  },
  sitemap: {
    hostname: `https://jalofernandez.com`,
    gzip: true,
    // exclude: ['/perretes', '/blog', '/blog/', '/blog/**'],
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true,
    },
  },
  build: {
    // You can extend webpack config here
    extend (config, ctx) {
    }
  }
}
