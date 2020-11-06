<template>
  <main :class="['page', 'home', { 'is-mode-code' : isModeCode }]">
    <div class="bg-artwork--theme"></div>
    <div class="content">
      <div class="content--inner old-crt--theme">
        <!-- (main) Header -->
        <div class="content--header">
          <div class="logo">
            <transition name="fade" :duration="{ enter: 500, leave: 500 }">
              <h2 class="title mode mode--design is-glitch glitch--2" v-if="isModeDesign">
                {{owner.nickname}}
              </h2>
            </transition>
            <transition name="fade" :duration="{ enter: 600, leave: 500 }">
              <h2 class="title mode mode--code is-glitch glitch--1" v-if="isModeCode">
                {{owner.nickname}}
              </h2>
            </transition>
            <Slogan />
          </div>
          <Social />
        </div>
        <!-- (menu) DESIGNER -->
        <transition name="slide-fade">
          <div class="menu" v-show="isModeDesign">
            <ul class="menu--inner">
              <li class="menu--item">
                <a class="menu--link" href="javascript:" title="Título menu diseñador">
                  <small>__as graphic designer:</small>
                </a>
              </li>
              <li :class="`menu--item ${design.tag}`" v-for="(design, index) in links.designer" :key="index">
                <nuxt-link
                  :to="{ name: 'portfolio' }"
                  class="menu--link glitch"
                  :data-text="design.copy"
                  :title="`Ver Portfolio completo de ${owner.nickname}`"
                >
                  {{ design.copy }}.<small>{{ index }}</small>
                </nuxt-link>
              </li>
              <!-- TODO: (apply me asap!) to get data from $store:
                <li class="menu--item" v-for="design in getLinksDesigner" :key="design"> 
              -->
            </ul>
          </div>
        </transition>
        <!-- (menu) CODER -->
        <transition name="fade">
          <div class="menu menu--code" v-show="!isModeDesign">
            <ul class="menu--inner typewriter--theme is-home">
              <li class="menu--item mode--code">
                <a class="menu--link" href="javascript:" title="Título menu desarrollador">
                  <small>__as UX+UI &amp;&amp; Frontend dev:</small>
                </a>
              </li>
              <li class="menu--item mode--code" v-for="(code, index) in links.coder" :key="index">
                <a
                  :class="['menu--link', 'glitch', { 'random-anim': randomAnim }]"
                  :href="code.url"
                  target="_blank"
                  rel="noopener noreferrer"
                  :data-text="`${index}.${code.copy}`"
                  :title="code.title"
                >
                  <small>{{ index }}</small>.{{ code.copy }}
                </a>
              </li>
              <!-- TODO: (apply me asap!) to get data from $store:
                <li class="menu--item" v-for="code in getLinksCoder" :key="code"> 
              -->
            </ul>
          </div>
        </transition>
        <!-- (main) Footer -->
        <div class="content--footer">
          <div :class="['main-navbar', 'mode', { 'mode--design': isModeDesign, 'mode--code': isModeCode }]">
            <div class="wrap">
              <a
                :class="['switch--item', { 'is-current': isModeDesign }]"
                href="javascript:"
                title="Ver menu diseñador"
                @click="changeMode()"
              >
                <span class="mode mode--design">
                  Designer
                </span>
              </a>
              <a
                :class="['switch--item', { 'is-current': !isModeDesign }]"
                href="javascript:"
                title="Ver menu desarrollador"
                @click="changeMode()"
              >
                <span class="mode mode--design">
                  Coder
                </span>
              </a>
            </div>
            <TheMenu />
            <nuxt-link
              :to="{ name: 'portfolio' }"
              class="btn is-link btn--coder menu--link glitch"
              :title="`Ver portfolio de trabajos de ${owner.nickname}`"
              data-text="Portfolio >>"
              v-if="$mq !== 'mobile'"
            >
              Portfolio &gt;&gt;
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <AnimLine />
  </main>
</template>

<script>
import Slogan from '~/components/Slogan.vue'
import Social from '~/components/Social.vue'
import AnimLine from '~/components/AnimLine.vue'
import TheMenu from '~/components/TheMenu.vue'

export default {
  components: { Slogan, Social, AnimLine, TheMenu },
  data() {
    return {
      randomAnim: true,
      isModeDesign: true,
      isModeCode: false,
      owner: this.$store.state.owner,
      links: {
        designer: [
          {
            tag: 'layout',
            copy: 'layout',
          },
          {
            tag: 'photo',
            copy: 'photography',
          },
          {
            tag: 'web',
            copy: 'UX + UI Web design',
          },
          {
            tag: 'pack',
            copy: 'packaging',
          },
          {
            tag: 'graph',
            copy: 'graphisms; draws',
          },
          {
            tag: 'videos',
            copy: 'videos ? motion',
          },
        ],
        coder: [
          {
            url: 'https://www.upplication.com/en/',
            copy: 'Upplication',
            title:
              'Upplication® App builder. Create the app for your business, no coding required, fast and simple. Android and iOS app',
          },
          {
            url: 'http://proyectogastronomix.org/',
            copy: 'Gastronomix',
            title:
              'Gastronomix es un proyecto social gratuito de cocina, gastronomía creativa y reciclaje personal. Organizado por J.P. Morgan, Basque Culinary Center, La Casa y el Mundo y Fundación Tomillo',
          },
          {
            url: 'https://quecarta.com/',
            copy: 'QuéCarta',
            title: 'Crea tu carta digital gratis con código QR, la alternativa más segura a la carta física.',
          },
          {
            url: 'https://theseedsquad.com/',
            copy: 'The Seed Squad',
            title: 'El equipo que estás buscando: tecnología accesible, diseño honesto y marketing responsable.',
          },
          {
            url: 'https://haztunegociodigital.com/',
            copy: '#HazTuNegocioDigital',
            title: 'Únete a la transformación digital: aumenta tus ventas con tu negocio también en internet.',
          },
          {
            url: 'https://comerciovecino.com/',
            copy: 'Comercio Vecino',
            title: 'Amplía tu negocio vendiendo también online ya que mayor mercado implica obtener más clientes, más ingresos, más empleo...',
          },
          {
            url: 'https://echounamano.org/',
            copy: '#EchoUnaMano',
            title: 'Iniciativa sin ánimo de lucro de voluntarios contra el Covid-19 en período de confinamiento domiciliario.',
          },
          {
            url: 'https://peluqueriacanessa.com/',
            copy: 'Canessa',
            title:
              'Canessa ofrece servicios de peluquería y belleza canina y felina con cortes de pelo comerciales y de exposición. Servicio de autolavado y de un completo SPA canino.',
          },
          {
            url: 'https://ecomerzpro.net/',
            copy: 'Ecomerzpro Club',
            title: 'Ecomerzpro Club for ecommerce offers and discounts.',
          },
          {
            url: 'https://widitrade.com/',
            copy: 'Widitrade',
            title: 'Widitrade to Increase Your Online Sales Now!',
          },
          {
            url: 'https://jalofernandez.github.io/lfcabogados/',
            copy: 'LFC; Abogados y Economistas',
            title:
              'LFC Abogados y Economistas expertos en Compliance penal. Asesoramos en materia jurídico penal preventiva.',
          },
          {
            url: 'https://capaball.com/app/#/login',
            copy: 'Capaball',
            title: 'Capaball elearning platform',
          },
          {
            url: 'https://github.com/jalofernandez',
            copy: '> ...take a look on Github',
            title: '@jalofernandez GitHub account',
          },
        ],
      },
    }
  },
  head() {
    const title = 'jalofernandez: designer + coder'
    const description =
      '@jalofernandez: designer + coder (Javier Lorenzo Fdez) es un diseñador gráfico y desarrollador web frontend + UX + UI en Madrid'
    const canonical = 'https://jalofernandez.com'

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Diseño gráfico y desarrollo web' },
        { hid: 'subject', name: 'subject', content: description },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
        // (PWA) Service worker:
        { src: '/sw.js' },
      ],
      // Pre-fetch and return recipe data server-side
      // async asyncData(context) {
      // },
      link: [
        // Canonical url
        { rel: 'canonical', hid: 'canonical', href: canonical },
        // Pre-fetch and return recipe data server-side
        { rel: 'dns-prefetch', href: '//www.upplication.com/en/' },
        { rel: 'dns-prefetch', href: '//proyectogastronomix.org/' },
        { rel: 'dns-prefetch', href: '//quecarta.com/' },
        { rel: 'dns-prefetch', href: '//theseedsquad.com/' },
        { rel: 'dns-prefetch', href: '//haztunegociodigital.com/' },
        { rel: 'dns-prefetch', href: '//comerciovecino.com/' },
        { rel: 'dns-prefetch', href: '//echounamano.org/' },
        { rel: 'dns-prefetch', href: '//peluqueriacanessa.com/' },
        { rel: 'dns-prefetch', href: '//ecomerzpro.net/' },
        { rel: 'dns-prefetch', href: '//widitrade.com/' },
        { rel: 'dns-prefetch', href: '//jalofernandez.github.io/lfcabogados/' },
        { rel: 'dns-prefetch', href: '//capaball.com/app/#/login/' },
      ],
    }
  },
  // mounted() {
  //   if ('serviceWorker' in navigator) {
  //     window.addEventListener('load', function() {
  //       navigator.serviceWorker
  //         .register('/sw.js')
  //         .then(function(registration) {
  //           // Registration was successful :)
  //           console.log('ServiceWorker registration successful with scope: ', registration.scope)
  //         })
  //         .catch(function(err) {
  //           // Registration failed :(
  //           console.log('ServiceWorker registration failed: ', err)
  //         })
  //     })
  //   }
  // },
  methods: {
    changeMode() {
      ;(this.isModeDesign = !this.isModeDesign), (this.isModeCode = !this.isModeCode)
    },
  },
  // computed: {
  //   getLinksDesigner() {
  //     return this.$store.state.links.designer.find(design => design.id === this.id) // when items are placed in store
  //   }
  // }
}
</script>
