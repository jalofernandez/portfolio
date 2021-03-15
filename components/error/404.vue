<template>
  <main :class="`page error is-${error.statusCode}`">
    <div class="bg-artwork--theme"></div>
    <div class="content">
      <div class="content--inner old-crt--theme">
        <TheHeader />
        <!-- typewritin´Title -->
        <div class="typewriter--theme is-error">
          <h3 class="mode--code">
            <span>[</span> {{ error.statusCode }} <span>]</span> {{ pageNotFound }}
          </h3>
        </div>
        <div class="mode--code resume-skills-title is-error-desc">
          <p>
            La página que estás buscando, "{{ owner.url }}{{ error.path }}", <b>no existe</b>...
          </p>
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
  name: 'error-404',
  components: { TheHeader, TheFooter, AnimLine },
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      owner: this.$store.state.owner,
      pageNotFound: 'Página no encontrada'
    }
  },
  head() {
    const title = '404: ' + this.pageNotFound + ' en'
    const description =
      'Página de error 404 del sitio web ' + this.owner.copyright + '. Pruebe otra URL o vaya a la página de inicio para encontrar la descripción de nuestros servicios y contacto.'
    const canonical = 'https://' + this.owner.url + this.$route.path

    return {
      title,
      meta: [
        { hid: 'description', name: 'description', content: description },
        { hid: 'Classification', name: 'Classification', content: 'Business' },
        { hid: 'subject', name: 'subject', content: description },
      ],
      // Structured Data (Schema)
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      // IMP! Better remvoe canonical metatags links in order to avoid weird URL generation 
      // link: [
      //   { rel: 'canonical', hid: 'canonical', href: canonical },
      //   { rel: 'alternate', hid: 'alternate', href: canonical+'/#!' },
      //   { rel: 'alternate', hid: 'alternate', href: canonical+'#!' },
      // ]
    }
  }
};
</script>
