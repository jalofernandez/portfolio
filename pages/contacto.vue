<template>
  <main class="page contact">
    <Zeppelin />
    <div class="content">
      <div class="content--inner old-crt--theme">
        <TheHeader />
        <!-- typewritin´Title -->
        <div class="typewriter--theme is-error">
          <h3 class="mode--code">
            Página de contacto [<b>Find me!</b>]
          </h3>
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
import Zeppelin from '~/components/Zeppelin'

export default {
  components: { TheHeader, TheFooter, AnimLine, Zeppelin },
  data() {
    return {
      owner: this.$store.state.owner,
    }
  },
  head() {
    const title = 'Contacto | @jalofernandez'
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
