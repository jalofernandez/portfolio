<template>
  <h2 class="title mode mode--design is-glitch glitch--2">
    <nuxt-link
      :to="{ name: 'index' }"
      class="main-title"
      :title="`Volver a la página de incio de ${owner.nickname}`"
    >
      {{owner.nickname}}
    </nuxt-link>
  </h2>
</template>

<script>
export default {
  data() {
    return {
      owner: this.$store.state.owner,
    }
  }
}
</script>
