<template>
  <div class="content--footer">
    <div class="main-navbar mode mode--code">
      <nuxt-link
        :to="{ name: 'index' }"
        class="btn is-link btn--coder menu--link glitch"
        :title="`Volver a la página de incio de ${owner.nickname}`"
        data-text="<< Home"
      >
        <small>&lt;&lt;</small> Home
      </nuxt-link>
      <TheMenu />
      <nuxt-link
        :to="{ name: page }"
        class="btn is-link btn--coder menu--link glitch"
        :title="`Ir a la página de ${name} de ${owner.nickname}`"
        :data-text="`${name} >>`"
      >
        {{ name }} <small>&gt;&gt;</small>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import TheMenu from '~/components/TheMenu.vue'

export default {
  components: { TheMenu },
  props: {
    name: {
      type: String,
      default: 'Portfolio',
    },
    page: {
      type: String,
      default: 'portfolio',
    },
  },
  data() {
    return {
      owner: this.$store.state.owner,
    }
  }
}
</script>
