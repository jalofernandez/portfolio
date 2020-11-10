import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_gtm_ace256ec from 'nuxt_plugin_gtm_ace256ec' // Source: ./gtm.js (mode: 'all')
import nuxt_plugin_nuxtmq_a565d688 from 'nuxt_plugin_nuxtmq_a565d688' // Source: ./nuxt-mq.js (mode: 'all')
import nuxt_plugin_webfontloader_719e7a98 from 'nuxt_plugin_webfontloader_719e7a98' // Source: ./webfontloader.js (mode: 'client')
import nuxt_plugin_vuescrollto_79f722d5 from 'nuxt_plugin_vuescrollto_79f722d5' // Source: ./vue-scrollto.js (mode: 'client')
import nuxt_plugin_workbox_4d0eee60 from 'nuxt_plugin_workbox_4d0eee60' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_meta_2df94fac from 'nuxt_plugin_meta_2df94fac' // Source: ./pwa/meta.js (mode: 'all')
import nuxt_plugin_icons_2663f545 from 'nuxt_plugin_icons_2663f545' // Source: ./pwa/icons.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule
const baseStoreOptions = { preserveState: process.client }

function registerModule (path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141
  store.registerModule = registerModule

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"htmlAttrs":{"lang":"es"},"bodyAttrs":{"class":["jalofernandez"]},"title":"jalofernandez","titleTemplate":"%s | @jalofernandez: designer + coder","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"author","name":"author","content":"jalofernandez"},{"hid":"copyright","name":"copyright","content":"jalofernandez"},{"hid":"robots","name":"robots","content":"index, follow, archive"},{"hid":"generator","name":"generator","content":"HTML5, CSS3, Vuejs, Nuxtjs, JavaScript, SASS, PWA, SEO"},{"hid":"google","name":"google","content":"nositelinkssearchbox"},{"hid":"lang","name":"lang","content":"es-ES"},{"hid":"rating","name":"rating","content":"General"},{"hid":"coverage","name":"coverage","content":"Worldwide"},{"hid":"theme-color","name":"theme-color","content":"#f4692a"},{"hid":"apple-mobile-web-app-capable","name":"apple-mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-status-bar-style","name":"apple-mobile-web-app-status-bar-style","content":"black"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"jalofernandez"},{"hid":"msapplication-TileColor","name":"msapplication-TileColor","content":"#232323"},{"hid":"twitter:card","name":"twitter:card","content":"summary_large_image"},{"hid":"twitter:site","name":"twitter:site","content":"jalofernandez"},{"hid":"twitter:creator","name":"twitter:creator","content":"jalofernandez"},{"name":"og:type","content":"website"},{"name":"og:locale","content":"es_ES"},{"name":"og:site_name","content":"@jalofernandez, designer + coder, personal portfolio and professional resume"},{"hid":"author","name":"author","content":"https:\u002F\u002Fwww.jalofernandez.com"},{"hid":"publisher","name":"publisher","content":"https:\u002F\u002Fwww.jalofernandez.com"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"@jalofernandez: designer + coder"},{"hid":"theme-color","name":"theme-color","content":"#232323"},{"hid":"og:title","name":"og:title","content":"@jalofernandez: designer + coder"},{"hid":"og:description","name":"og:description","content":"Javier Lorenzo Fdez personal resume and professional portfolio as a graphic designer and front-end + UX developer"},{"hid":"og:type","name":"og:type","content":"website"},{"hid":"og:url","name":"og:url","content":"https:\u002F\u002Fwww.jalofernandez.com"},{"hid":"og:locale","name":"og:locale","content":"es-ES"},{"hid":"twitter:site","name":"twitter:site","content":"@jalofernandez"},{"hid":"twitter:creator","name":"twitter:creator","content":"@jalofernandez"},{"hid":"twitter:title","name":"twitter:title","content":"@jalofernandez: designer + coder"},{"hid":"twitter:description","name":"twitter:description","content":"Javier Lorenzo Fdez personal resume and professional portfolio as a graphic designer and front-end + UX developer"}],"link":[{"rel":"dns-prefetch","href":"\u002F\u002Ftwitter.com\u002Fjalofernandez"},{"rel":"dns-prefetch","href":"\u002F\u002Fwww.instagram.com\u002Fjalofernandez\u002F?ref=badge"},{"rel":"dns-prefetch","href":"\u002F\u002Fwww.linkedin.com\u002Fin\u002Fjavierlorenzofernandez\u002F"},{"rel":"dns-prefetch","href":"\u002F\u002Fwww.youtube.com\u002Fchannel\u002FUCtwY5GMTiS7VQ7kYzGomUsw"},{"rel":"dns-prefetch","href":"\u002F\u002Fwww.facebook.com\u002Fjalofernandez?ref=tn_tnmn"},{"rel":"dns-prefetch","href":"\u002F\u002Fgithub.com\u002Fjalofernandez"}],"style":[],"script":[{"hid":"gtm-script","innerHTML":"if(!window._gtm_init){window._gtm_init=1;(function (w,n,d,m,e,p){w[d]=(w[d]==1||n[d]=='yes'||n[d]==1||n[m]==1||(w[e]&&w[e].p&&e[e][p]()))?1:0})(window,'navigator','doNotTrack','msDoNotTrack','external','msTrackingProtectionEnabled');(function(w,d,s,l,x,y){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});w[x]={};w._gtm_inject=function(i){if(w.doNotTrack||w[x][i])return;w[x][i]=1;var f=d.getElementsByTagName(s)[0],j=d.createElement(s);j.defer=true;j.src='https:\u002F\u002Fwww.googletagmanager.com\u002Fgtm.js?id='+i;f.parentNode.insertBefore(j,f);}})(window,document,'script','dataLayer','_gtm_ids','_gtm_inject')}"}],"noscript":[{"hid":"gtm-noscript","pbody":true,"innerHTML":""}],"__dangerouslyDisableSanitizersByTagID":{"gtm-script":["innerHTML"],"gtm-noscript":["innerHTML"]}},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_gtm_ace256ec === 'function') {
    await nuxt_plugin_gtm_ace256ec(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtmq_a565d688 === 'function') {
    await nuxt_plugin_nuxtmq_a565d688(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_webfontloader_719e7a98 === 'function') {
    await nuxt_plugin_webfontloader_719e7a98(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuescrollto_79f722d5 === 'function') {
    await nuxt_plugin_vuescrollto_79f722d5(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_4d0eee60 === 'function') {
    await nuxt_plugin_workbox_4d0eee60(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_2df94fac === 'function') {
    await nuxt_plugin_meta_2df94fac(app.context, inject)
  }

  if (typeof nuxt_plugin_icons_2663f545 === 'function') {
    await nuxt_plugin_icons_2663f545(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
