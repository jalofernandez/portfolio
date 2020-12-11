<template>
  <div>
    <button
      type="button"
      class="btn is-link btn--coder menu--link glitch"
      data-text="../ menu"
      data-modal="modal-00"
      @click="toggleShow()"
      v-if="!isMenuShown"
    >
      <span v-if="$mq !== 'mobile'">../</span> <b>Menu</b>
    </button>
    <div :class="['modal-wrapper', { 'md-show': isMenuShown }]">
      <div id="modal-00" class="md-modal md-menu">
        <div class="md-content">
          <ul class="md-menu-list">
            <li class="md-menu-item" v-for="(link, index) in pages.links" :key="index">
              <nuxt-link
                :to="{ name: link.page }"
                class="btn is-link btn--designer menu--link glitch"
                :title="`Ir a la página ${link.name} de ${owner.nickname}`"
                :data-text="`${link.name}`"
              >
                {{ link.name }} <small>-&gt;</small>
              </nuxt-link>
            </li>
            <li class="md-menu-item is-copyright">
              ©{{ owner.copyright }} | <small><b>{{ currentYear }}</b></small>
            </li>
          </ul>
          <button
            type="button"
            class="btn menu--link glitch"
            data-text="X close Me!"
            @click="toggleShow()"
          >
            <b>&times;</b> close Me!
          </button>
        </div>
      </div>
      <div class="modal-overlay flicker" @click="toggleShow()"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuShown: false,
      owner: this.$store.state.owner,
      pages: this.$store.state.pages,
      currentYear: new Date().getFullYear(),
    }
  },
  methods: {
    toggleShow() {
      this.isMenuShown = !this.isMenuShown
    }
  }
}
</script>
