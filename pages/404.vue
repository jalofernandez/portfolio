<template>
  <main class="page error">
    <div class="bg-artwork--theme"></div>
    <div class="content">
      <div class="content--inner old-crt--theme">
        <TheHeader />
        <!-- typewritin´Title -->
        <div class="typewriter--theme is-error">
          <h3 class="mode--code"> <span>[</span> Error 404 <span>]</span> Page Not Found </h3>
        </div>
        <TheFooter :name="'Portfolio'" :page="'portfolio'" />
      </div>
    </div>
    <AnimLine />
  </main>
</template>

<script>
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'
import AnimLine from '~/components/AnimLine.vue'

export default {
  components: { TheHeader, TheFooter, AnimLine },
  data() {
    return {
      owner: this.$store.state.owner,
    }
  },
  head() {
    const title = 'Page Not Found'
    const description =
      'Página de error 404 de Javier Lorenzo Fdez aka @jalofernandez el diseñador gráfico y desarrollador web frontend madrileño más salao'
    const canonical = 'https://jalofernandez.com' + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Portfolio' },
        { hid: 'subject', name: 'subject', content: 'Personal Portfolio and Resume' },
        // ...
        // TODO: remove or uncommented the following code if "nuxt-social-meta" are allow or disallow
        // ...
        // { hid: 'og:title', property: 'og:title', content: title },
        // { hid: 'og:description', property: 'og:description', content: description },
        // { hid: 'og:url', property: 'og:url', content: canonical },
        // // { hid: 'og:site_name', name: 'og:site_name', content: 'Jalofernández design webmaster frontend diseño gráfico', },
        // // { hid: 'og:image', name: 'og:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // // { hid: 'og:image:secure_url', name: 'og:image:secure_url', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // // { hid: 'og:image:width', name: 'og:image:width', content: '960' },
        // // { hid: 'og:image:height', name: 'og:image:height', content: '540' },
        // // { hid: 'og:image:alt', name: 'og:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },

        // { hid: 'twitter:title', name: 'twitter:title', content: title },
        // { hid: 'twitter:description', name: 'twitter:description', content: description },
        // // { hid: 'twitter:image', name: 'twitter:image', content: 'https://peluqueriacanessa.com/img/microdata/peluqueria-canina-canessa-valdemoro-index.jpg', },
        // // { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'Jalofernández design, webmaster, frontend y diseño gráfico en Madrid', },
        // // { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
        // // { hid: 'twitter:site', name: 'twitter:site', content: '@jalofernandez' },
        // // { hid: 'twitter:creator', name: 'twitter:creator', content: '@jalofernandez' },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' }],
      link: [{ rel: 'canonical', hid: 'canonical', href: canonical }],
    }
  },
}
</script>
