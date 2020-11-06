<template>
  <main class="page sitemap">
    <Zeppelin />
    <div class="content">
      <div class="content--inner old-crt--theme">
        <TheHeader />
        <!-- typewritin´Title -->
        <div class="typewriter--theme is-sitemap">
          <h3 class="mode--code">
            Página del sitio web [<b>sitemap</b>]
          </h3>
        </div>
        <section>
          <ul class="typewriter--theme is-sitemap">
            <li class="mode--design" v-for="(link, index) in pages.links" :key="index">
              <nuxt-link
                :to="{ name: link.page }"
                class="btn is-link btn--designer menu--link glitch"
                :title="`Ir a la página ${link.name} de ${owner.nickname}`"
                :data-text="`${link.name}`"
              >
                {{ link.name }} <small>-&gt;</small>
              </nuxt-link>
            </li>
          </ul>
        </section>
        <TheFooter :name="'Portfolio'" :page="'portfolio'" />
      </div>
    </div>
    <AnimLine />
  </main>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter.vue'
import AnimLine from '~/components/AnimLine.vue'
import Zeppelin from '~/components/Zeppelin'

export default {
  components: { TheHeader, TheFooter, AnimLine, Zeppelin },
  data() {
    return {
      randomAnim: true,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
    }
  },
  head() {
    const title = 'Sitemap | @jalofernandez'
    const description =
      'Mapa del sitio web (sitemap) de @jalofernandez: diseñador gráfico y desarrollador web frontend + UX + UI'
    const canonical = 'https://jalofernandez.com' + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Portfolio' },
        { hid: 'subject', name: 'subject', content: 'Personal Portfolio and Resume' },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [{ innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' }],
      link: [{ rel: 'canonical', hid: 'canonical', href: canonical }],
    }
  },
}
</script>
