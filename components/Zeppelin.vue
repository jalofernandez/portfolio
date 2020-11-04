<template>
  <div class="zeppelin">
    <img 
      src="~assets/zeppelin/zeppelin.jpg"
      :title="imgCopy"
      :alt="imgCopy"
    />
    <!-- All (body) FOCUS -->
    <div class="big-focus focus-01"></div>
    <div class="thinny-light neon-frame-violet neon-001"></div>
    <div class="thinny-light neon-frame-orange neon-001"></div>
    <div class="big-focus focus-02"></div>
    <div class="thinny-light neon-frame-violet neon-002"></div>
    <div class="thinny-light neon-frame-pink neon-002"></div>
    <div class="big-focus focus-03"></div>
    <!-- All (stroke) position LIGHTS -->
    <span :class="'thinny-light position-lights light-'+index" v-for="index in 18" :key="index"></span>
    <!-- All (screen frame) LIGHTS -->
    <div class="thinny-light neon-frame-pink neon-003"></div>
    <div class="thinny-light neon-frame-orange neon-003"></div>
    <span class="thinny-light neon-frame-pink neon-01"></span>
    <span class="thinny-light neon-frame-violet neon-02"></span>
    <span class="thinny-light neon-frame-orange neon-02"></span>
    <span class="thinny-light neon-frame-orange neon-03"></span>
    <span class="thinny-light neon-frame-violet neon-03"></span>
    <span class="thinny-light neon-frame-pink neon-04"></span>
    <span class="thinny-light neon-frame-violet neon-05"></span>
    <span class="thinny-light neon-frame-orange neon-05"></span>
    <span class="thinny-light neon-frame-orange neon-06"></span>
    <span class="thinny-light neon-frame-pink neon-07"></span>
    <span class="thinny-light neon-frame-orange neon-07"></span>
    <span class="thinny-light neon-frame-violet neon-08"></span>
    <span class="thinny-light neon-frame-orange neon-09"></span>
    <span class="thinny-light neon-frame-pink neon-10"></span>
    <span class="thinny-light neon-frame-violet neon-10"></span>
    <span class="thinny-light neon-frame-orange neon-11"></span>
    <span class="thinny-light neon-frame-pink neon-12"></span>
    <span class="thinny-light neon-frame-orange neon-13"></span>
    <span class="thinny-light neon-frame-violet neon-13"></span>
    <span class="thinny-light neon-frame-pink neon-14"></span>
    <span class="thinny-light neon-frame-orange neon-15"></span>
    <span class="thinny-light neon-frame-green neon-16"></span>
    <span class="thinny-light neon-frame-violet neon-17"></span>
    <span class="thinny-light neon-frame-pink neon-17"></span>
    <span class="thinny-light neon-frame-orange neon-18"></span>
    <span class="thinny-light neon-frame-green neon-18"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgCopy: this.$store.state.owner.nickname + ' sky zeppelin artwork'
    }
  }
}
</script>

