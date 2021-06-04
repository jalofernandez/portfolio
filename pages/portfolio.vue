<template>
  <main class="page portfolio">
    <!-- (modal dialogs) each Gallery item -->
    <div v-for="item in modalItems" :key="item.id" :class="['modal-wrapper', { 'md-show': showModal(item.id) }]">
      <div :id="`modal-${item.id}`" class="md-modal" @click="closeModal()">
        <div class="md-content">
          <img
            :src="require(`~/assets/portfolio/${item.img}`)"
            :title="`${item.title} by ${owner.name} (${owner.nickname})`"
            :alt="`${item.title} by ${owner.name} (${owner.nickname})`"
          />
          <p>
            {{ item.title }}
          </p>
          <button class="btn menu--link glitch" data-text="X close Me!">
            <b>&times;</b> close Me!
          </button>
        </div>
      </div>
      <div class="modal-overlay flicker"></div>
    </div>
    <!-- top Navbar to filter Gallery below -->
    <div class="navbar-filter-btns">
      <button
        class="btn menu--link glitch"
        v-for="(link, index) in links"
        :key="index"
        type="button"
        :name="link.name"
        :value="link.name"
        :aria-labelledby="link.name"
        :data-text="link.name"
        @click="filterItems(link.tag)"
      >
        {{ link.name }}
      </button>
    </div>
    <!-- (gallery) @jalofernandez works -->
    <div id="portfolio">
      <transition-group name="fade" class="list-complete" tag="section">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="item-portfolio"
          @click.stop="openCurrentItemModal(item.id)"
        >
          <img
            :src="require(`~/assets/portfolio/${item.img}`)"
            :title="`${item.title} by ${owner.name} (${owner.nickname})`"
            :alt="`${item.title} by ${owner.name} (${owner.nickname})`"
          />
          <!-- to show tag label in each portfolio item -->
          <!-- <div class="item-tags-list">
            <small
              v-for="(tag, index) in item.tags"
              :key="index"
              :class="`item-tag ${tag}`"
            >
              {{ tag }}
            </small>
          </div> -->
          <div class="img-overlay">
            {{ overlay }}
          </div>
        </div>
      </transition-group>
    </div>
    <TheFooter :name="'Profile'" :page="'cv-resume'" />
  </main>
</template>

<script>
import TheFooter from '~/components/TheFooter'
// import all portfolio data from local json meanwhile API is is progress...
import portfolio from '~/data/portfolio'

export default {
  components: { TheFooter },
  asyncData() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve({ portfolio: portfolio })
      }, 500)
    })
  },
  data() {
    return {
      overlay: 'Click me to make me bigger',
      owner: this.$store.state.owner,
      links: [
        { name: 'All', tag: 'all' },
        { name: 'Layout', tag: 'layout' },
        { name: 'Photo', tag: 'photo' },
        { name: 'UX/UI/Web', tag: 'web' },
        { name: 'Packaging', tag: 'pack' },
        { name: 'Graphs/Draws', tag: 'graph' },
        { name: 'Motion', tag: 'video' },
      ],
      // portfolio: portfolio, // without "asyncData" method
      currentTag: this.$route.params.filter || 'all',
      currentModal: 0,
    }
  },
  head() {
    const title = 'Portfolio'
    const description =
      'Galería de trabajos del portfolio y CV personal de Javier Lorenzo Fernández (aka @jalofernandez). Diseñador gráfico y desarrollador web frontend de los que ya quedan pocos.'
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
      script: [
        { innerHTML: JSON.stringify(this.owner.schema), type: 'application/ld+json' },
      ],
      link: [
        { rel: 'canonical', hid: 'canonical', href: canonical },
      ],
    }
  },
  computed: {
    filteredItems() {
      var filter = this.currentTag
      return this.portfolio.filter(
        item => item.tags.indexOf(filter) !== -1
      )
    },
    modalItems() {
      var modal = this.currentModal
      return this.portfolio.filter(
        item => item.id === modal
      )
    }
  },
  methods: {
    filterItems(tag) {
      setTimeout(() => {
        this.currentTag = tag
      }, 300)
    },
    showModal(id) {
      return this.currentModal === id
    },
    openCurrentItemModal(id) {
      this.currentModal = id
    },
    closeModal() {
      this.currentModal = 0
    },
  },
}
</script>
