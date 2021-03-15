import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _16a10fb2 = () => interopDefault(import('../pages/contacto.vue' /* webpackChunkName: "pages/contacto" */))
const _23fe391f = () => interopDefault(import('../pages/cv-resume.vue' /* webpackChunkName: "pages/cv-resume" */))
const _0d242411 = () => interopDefault(import('../pages/legal.vue' /* webpackChunkName: "pages/legal" */))
const _27624720 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _2aed7fe6 = () => interopDefault(import('../pages/sitemap.vue' /* webpackChunkName: "pages/sitemap" */))
const _600b35aa = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contacto",
    component: _16a10fb2,
    name: "contacto"
  }, {
    path: "/cv-resume",
    component: _23fe391f,
    name: "cv-resume"
  }, {
    path: "/legal",
    component: _0d242411,
    name: "legal"
  }, {
    path: "/portfolio",
    component: _27624720,
    name: "portfolio"
  }, {
    path: "/sitemap",
    component: _2aed7fe6,
    name: "sitemap"
  }, {
    path: "/",
    component: _600b35aa,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
