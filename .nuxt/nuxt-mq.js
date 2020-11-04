import Vue from 'vue'
import VueMq from 'vue-mq'

export default async function () {
  const moduleOptions = {"defaultBreakpoint":"desktop","breakpoints":{"mobile":600,"smartphone":768,"tablet":1024,"desktop":1400,"desktopWide":2000,"desktopUltraWide":Infinity}}
  Vue.use(VueMq, moduleOptions)
}
