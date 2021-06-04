<template>
  <main class="page contact">
    <Zeppelin />
    <div class="content">
      <div class="content--inner old-crt--theme">
        <TheHeader />
        <!-- typewritin´Title -->
        <div class="typewriter--theme is-sitemap">
          <h3 class="mode--code">
            Contacto <span>[</span> Find me! <span>]</span>
          </h3>
        </div>
        <section class="paragraph-block has-btns">
          <a
            :href="`tel:${owner.phone}`"
            class="btn is-link is-boxed btn--designer menu--link glitch"
            :title="`Llamar a ${owner.name}`"
            data-text="_llámane al móvil"
          >
            >_<small>llámane al</small> móvil
          </a>
          <a
            :href="`https://wa.me/34${owner.phone}`"
            class="btn is-link is-boxed btn--coder menu--link glitch"
            :title="`Wasapea con ${owner.name}`"
            target="_blank"
            rel="noopener noreferrer"
            data-text="escríbeme a Whatsapp"
          >
            >_<small>Escríbeme a</small> Whatsapp
          </a>
          <a
            :href="`mailto:${owner.email}`"
            class="btn is-link is-boxed btn--designer menu--link glitch"
            :title="`Escribir un email a ${owner.email}`"
            data-text="escríbeme un email"
          >
            >_<small>Escríbeme un</small> email
          </a>
        </section>
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
import Zeppelin from '~/components/Zeppelin'

export default {
  components: { TheHeader, TheFooter, AnimLine, Zeppelin },
  data() {
    return {
      owner: this.$store.state.owner,
    }
  },
  head() {
    const title = 'Contacto'
    const description =
      'Datos de contacto de Javier Lorenzo Fdez aka @jalofernandez: diseñador gráfico y desarrollador web frontend + UX + UI'
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
