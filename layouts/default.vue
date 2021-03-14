<template>
  <div>
    <nuxt :class="{ 'is-scrolling': scrolling }"/>
    <!-- <transition name="fade">
      <img
        class="icon-scrolling"
        src="~/static/icon.png"
        :title="`Icono de ${owner.nickname}: designer + coder en Madrid, Spain`"
        :alt="`Icono de ${owner.nickname}: designer + coder en Madrid, Spain`"
        width="45"
        height="45"
        v-if="scrolling && $mq !== 'mobile'"
      />
    </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrolling: false,
      owner: this.$store.state.owner,
    }
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.client) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  methods: {
    closeModal() {
      this.modalShow = false
    },
    handleScroll() {
      const top = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
      this.scrolling = top > 150
    },
  },
}
</script>
